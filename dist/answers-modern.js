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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
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

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

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
     * The formatted profile data
     * @type {Object}
     * @private
     */

    this._formatted = data.formatted;
    /**
     * The index number of the result
     * @type {Number}
     */

    this.ordinal = data.ordinal || null;
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
    /**
     * Determines if an accordian result should be collapsed by default
     * @type {boolean}
     */

    this.collapsed = data.collapsed || true;
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
       * @param {Object.<string, function>} formatters The formatters to apply to the result
       * @param {string} verticalId The vertical of these results
       * @param {string} source Backend source of these results
       * @returns {Result[]}
       */
      value: function from(resultsData, formatters, verticalId, source) {
        var results = [];

        var _loop = function _loop(i) {
          // TODO use resultData.highlightedFields to
          // transform resultData.data into html-friendly strings that highlight values.
          // Check for new data format, otherwise fallback to legacy
          var data = resultsData[i].data || resultsData[i];
          var formattedData = {};

          if (Object.keys(formatters).length > 0) {
            Object.entries(data).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  val = _ref2[1];

              if (formatters[key]) {
                formattedData[key] = formatters[key](val, data, verticalId, false);
              }
            });
          }

          switch (source) {
            case 'GOOGLE_CSE':
              results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
              break;

            case 'BING_CSE':
              results.push(ResultFactory.fromBingCustomSearchEngine(data));
              break;

            case 'ZENDESK':
              results.push(ResultFactory.fromZendeskSearchEngine(data));
              break;

            case 'ALGOLIA':
              results.push(ResultFactory.fromAlgoliaSearchEngine(data));
              break;

            default:
              results.push(ResultFactory.fromGeneric(data, formattedData, i));
          }
        };

        for (var i = 0; i < resultsData.length; i++) {
          _loop(i);
        }

        return results;
      }
      /**
       * Converts an API result object into a generic result view model.
       * @param data
       * @param formattedData
       * @param index
       * @returns {Result}
       */

    }, {
      key: "fromGeneric",
      value: function fromGeneric(data, formattedData, index) {
        return new Result({
          raw: data,
          formatted: formattedData,
          title: formattedData.name || data.name,
          details: formattedData.description || this.truncate(data.description),
          link: data.website,
          id: data.id,
          ordinal: index + 1
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
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Bing Custom Search Engine object.
       * @param data
       * @returns {Result}
       */

    }, {
      key: "fromBingCustomSearchEngine",
      value: function fromBingCustomSearchEngine(data) {
        return new Result({
          raw: data,
          title: data.name,
          details: data.snippet,
          link: data.url
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Zendesk Search Engine object.
       * @param data
       * @returns {Result}
       */

    }, {
      key: "fromZendeskSearchEngine",
      value: function fromZendeskSearchEngine(data) {
        return new Result({
          raw: data,
          title: data.title,
          details: data.snippet,
          link: data.html_url
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Algolia Search Engine object.
       * Details field is set to objectID since response has only one general field objectID.
       * @param data
       * @returns {Result}
       */

    }, {
      key: "fromAlgoliaSearchEngine",
      value: function fromAlgoliaSearchEngine(data) {
        return new Result({
          raw: data,
          details: data.objectID,
          id: data.objectID
        });
      }
      /**
       * Truncates strings to 250 characters, attempting to preserve whole words
       * @param str {string} the string to truncate
       * @param limit {Number} the maximum character length to return
       * @param trailing {string} a trailing string to denote truncation, e.g. '...'
       * @param sep {string} the word separator
       * @returns {string}
       */

    }, {
      key: "truncate",
      value: function truncate(str) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
        var trailing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
        var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';

        if (!str || str.length <= limit) {
          return str;
        } // TODO (bmcginnis): split punctuation too so we don't end up with "foo,..."


        var words = str.split(sep);
        var max = limit - trailing.length;
        var truncated = '';

        for (var i = 0; i < words.length; i++) {
          var word = words[i];

          if (truncated.length + word.length > max || i !== 0 && truncated.length + word.length + sep.length > max) {
            truncated += trailing;
            break;
          }

          truncated += i === 0 ? word : sep + word;
        }

        return truncated;
      }
    }]);

    return ResultFactory;
  }();

  var Section =
  /*#__PURE__*/
  function () {
    function Section(data, url, formatters) {
      _classCallCheck(this, Section);

      this.searchState = SearchStates.SEARCH_COMPLETE;
      this.verticalConfigId = data.verticalConfigId || null;
      this.resultsCount = data.resultsCount || 0;
      this.encodedState = data.encodedState || '';
      this.appliedQueryFilters = AppliedQueryFilter.from(data.appliedQueryFilters);
      this.facets = data.facets || null;
      this.results = ResultFactory.from(data.results, formatters, this.verticalConfigId, data.source);
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
      /**
       * Create a section from the provided data
       * @param {Object|Array} modules The result modules
       * @param {Object} urls The tab urls
       * @param {Object.<string, function>} formatters Field formatters for results
       */

    }, {
      key: "from",
      value: function from(modules, urls, formatters) {
        var sections = [];

        if (!modules) {
          return sections;
        }

        if (!Array.isArray(modules)) {
          return new Section(modules, null, formatters);
        } // Our sections should contain a property of mapMarker objects


        for (var i = 0; i < modules.length; i++) {
          sections.push(new Section(modules[i], urls[modules[i].verticalConfigId], formatters));
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
    /**
     * Create universal results from server data
     * @param {Object} response The server response
     * @param {Object} urls The tab urls
     * @param {Object.<string, function>} formatters The field formatters to use
     */


    _createClass(UniversalResults, null, [{
      key: "from",
      value: function from(response, urls, formatters) {
        return new UniversalResults({
          queryId: response.queryId,
          sections: Section.from(response.modules, urls, formatters)
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
  var DirectAnswer =
  /*#__PURE__*/
  function () {
    function DirectAnswer() {
      var directAnswer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DirectAnswer);

      Object.assign(this, directAnswer);
      Object.freeze(this);
    }
    /**
     * Create a DirectAnswer model from the given server data and formatters
     * @param {Object} response The server direct answer
     * @param {Object.<string, function>} formatters The formatters to apply to this direct answer
     */


    _createClass(DirectAnswer, null, [{
      key: "from",
      value: function from(response, formatters) {
        var data = _objectSpread({}, response);

        var answer = data.answer,
            relatedItem = data.relatedItem;

        if (answer && formatters[answer.fieldApiName]) {
          answer.value = formatters[answer.fieldApiName](answer.value, relatedItem.data.fieldValues, relatedItem.verticalConfigId, true);
        }

        return new DirectAnswer(data);
      }
    }]);

    return DirectAnswer;
  }();

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
    /**
     * Append the provided results to the current results
     * @param {VerticalResults} results the results to append to the current results
     */


    _createClass(VerticalResults, [{
      key: "append",
      value: function append(results) {
        var merged = _objectSpread({}, this);

        merged.results = this.results.concat(results.results);
        merged.map.mapMarkers = this.map.mapMarkers.concat(results.map.mapMarkers);
        return new VerticalResults(merged);
      }
      /**
       * Create vertical results from server data
       * @param {Object} response The server response
       * @param {Object.<string, function>} formatters The field formatters to use
       */

    }], [{
      key: "from",
      value: function from(response, formatters) {
        return new VerticalResults(Section.from(response, null, formatters));
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

  /** @module HighlightedValue */

  /**
   * Model representing a highlighted value.
   */
  var HighlightedValue =
  /*#__PURE__*/
  function () {
    function HighlightedValue() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, HighlightedValue);

      this.value = data.value || data.shortValue || '';
      this.matchedSubstrings = data.matchedSubstrings || [];
    }
    /**
     * get highlighted value string
     * @returns {string}
     */


    _createClass(HighlightedValue, [{
      key: "get",
      value: function get() {
        this._sortMatchedSubstrings();

        return this._buildHighlightedValue(this.value, this.matchedSubstrings);
      }
      /**
       * get inverted highlighted value string
       * @returns {string}
       */

    }, {
      key: "getInverted",
      value: function getInverted() {
        this._sortMatchedSubstrings();

        var invertedSubstrings = this._getInvertedSubstrings(this.matchedSubstrings, this.value.length);

        return this._buildHighlightedValue(this.value, invertedSubstrings);
      }
    }, {
      key: "_sortMatchedSubstrings",
      value: function _sortMatchedSubstrings() {
        this.matchedSubstrings.sort(function (a, b) {
          if (a.offset < b.offset) {
            return -1;
          }

          if (a.offset > b.offset) {
            return 1;
          }

          return 0;
        });
      }
    }, {
      key: "_getInvertedSubstrings",
      value: function _getInvertedSubstrings(matchedSubstrings, valueLength) {
        var invertedSubstrings = [];

        for (var i = 0; i < matchedSubstrings.length; i++) {
          var substring = matchedSubstrings[i];
          var nextOffset = substring.offset + substring.length;

          if (i === 0 && substring.offset !== 0) {
            invertedSubstrings.push({
              offset: 0,
              length: substring.offset
            });
          }

          if (valueLength > nextOffset) {
            invertedSubstrings.push({
              offset: nextOffset,
              length: i < matchedSubstrings.length - 1 ? matchedSubstrings[i + 1].offset - nextOffset : valueLength - nextOffset
            });
          }
        }

        return invertedSubstrings;
      }
    }, {
      key: "_buildHighlightedValue",
      value: function _buildHighlightedValue(val, highlightedSubstrings) {
        var highlightedValue = '';
        var nextStart = 0;

        if (highlightedSubstrings.length === 0) {
          return val;
        }

        for (var j = 0; j < highlightedSubstrings.length; j++) {
          var start = Number(highlightedSubstrings[j].offset);
          var end = start + highlightedSubstrings[j].length;
          highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

          if (j === highlightedSubstrings.length - 1 && end < val.length) {
            highlightedValue += val.slice(end);
          }

          nextStart = end;
        }

        return highlightedValue;
      }
    }]);

    return HighlightedValue;
  }();

  /**
   * SpellCheck is the core state model
   * to power the SpellCheck component
   */

  var SpellCheck =
  /*#__PURE__*/
  function () {
    function SpellCheck(data) {
      _classCallCheck(this, SpellCheck);

      /**
       * The original query
       * @type {string}
       */
      this.query = data.query || null;
      /**
       * The corrected query
       * @type {string}
       */

      this.correctedQuery = data.correctedQuery || null;
      /**
       * The corrected query with highlighted tags
       * @type {string}
       */

      this.correctedQueryDisplay = data.correctedQueryDisplay || null;
      /**
       * The spell check type
       * @type {string}
       */

      this.type = data.type || null;
      /**
       * Should show spell check or not
       * @type {boolean}
       */

      this.shouldShow = this.correctedQuery !== null;
    }
    /**
     * Create a spell check model from the provided data
     * @param {Object} response The spell check response
     */


    _createClass(SpellCheck, null, [{
      key: "from",
      value: function from(response) {
        if (!response) {
          return {};
        }

        return new SpellCheck({
          query: response.originalQuery,
          correctedQuery: response.correctedQuery,
          correctedQueryDisplay: new HighlightedValue(response.correctedQuery).get(),
          type: response.type
        });
      }
    }]);

    return SpellCheck;
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
    QUERY_ID: 'query-id',
    FACET_FILTER: 'facet-filter',
    DYNAMIC_FILTERS: 'dynamic-filters',
    PARAMS: 'params',
    GEOLOCATION: 'geolocation',
    INTENTS: 'intents',
    QUESTION_SUBMISSION: 'question-submission',
    SEARCH_CONFIG: 'search-config',
    SEARCH_OFFSET: 'search-offset',
    SPELL_CHECK: 'spell-check',
    LOCATION_BIAS: 'location-bias',
    SESSIONS_OPT_IN: 'sessions-opt-in'
  };

  /** @module DynamicFilters */

  /**
   * Model representing a set of dynamic filters
   */
  var DynamicFilters =
  /*#__PURE__*/
  function () {
    function DynamicFilters(data) {
      _classCallCheck(this, DynamicFilters);

      /**
       * The list of filters this model holds
       * @type {{label: string, fieldId: string, options: object[]}}
       */
      this.filters = data.filters || [];
      Object.freeze(this);
    }
    /**
     * Organize 'facets' from the api response into dynamic filters
     * @param {Object} response dynamic filter response from the api
     * @returns {DynamicFilters}
     */


    _createClass(DynamicFilters, null, [{
      key: "from",
      value: function from(response) {
        var facets = response.facets;
        var dynamicFilters = facets.map(function (f) {
          return {
            label: f['displayName'],
            fieldId: f['fieldId'],
            options: f.options.map(function (o) {
              return {
                label: o['displayName'],
                countLabel: o['count'],
                selected: o['selected'],
                filter: o['filter']
              };
            })
          };
        });
        return new DynamicFilters({
          filters: dynamicFilters
        });
      }
    }]);

    return DynamicFilters;
  }();

  /** @module SearchIntents */
  var SearchIntents =
  /*#__PURE__*/
  function () {
    function SearchIntents(intents) {
      _classCallCheck(this, SearchIntents);

      /**
       * The intent to find results based on the user's location
       * @type {boolean}
       */
      this.nearMe = intents.nearMe;
      Object.freeze(this);
    }
    /**
     * Create SearchIntents from server response
     * @param {Object} response The server response intents
     * @returns {SearchIntents}
     */


    _createClass(SearchIntents, null, [{
      key: "from",
      value: function from(response) {
        var intents = response || [];
        return new SearchIntents({
          nearMe: intents.includes('NEAR_ME')
        });
      }
    }]);

    return SearchIntents;
  }();

  /** @module LocationBias */

  /**
   * LocationBias is the core state model
   * to power the LocationBias component
   */
  var LocationBias =
  /*#__PURE__*/
  function () {
    function LocationBias(data) {
      _classCallCheck(this, LocationBias);

      /**
       * The location bias accuracy which are IP, DEVICE and UNKNWON
       * @type {string}
       */
      this.accuracy = data.accuracy || null;
      /**
       * The latitude used for location bias
       * @type {number}
       */

      this.latitude = data.latitude || null;
      /**
       * The longitude used for location bias
       * @type {number}
       */

      this.longitude = data.longitude || null;
      /**
       * The location display name
       * @type {string}
       */

      this.locationDisplayName = data.locationDisplayName || null;
    }
    /**
     * Create a location bias model from the provided data
     * @param {Object} response The location bias response
     */


    _createClass(LocationBias, null, [{
      key: "from",
      value: function from(response) {
        if (!response) {
          return new LocationBias({
            accuracy: 'UNKNOWN'
          });
        }

        return new LocationBias({
          accuracy: response.accuracy,
          latitude: response.latitude,
          longitude: response.longitude,
          locationDisplayName: response.locationDisplayName
        });
      }
    }]);

    return LocationBias;
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
        var _ref;

        var urls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var formatters = arguments.length > 2 ? arguments[2] : undefined;
        var response = data.response;
        return _ref = {}, _defineProperty(_ref, StorageKeys.QUERY_ID, response.queryId), _defineProperty(_ref, StorageKeys.NAVIGATION, Navigation.from(response.modules)), _defineProperty(_ref, StorageKeys.DIRECT_ANSWER, DirectAnswer.from(response.directAnswer, formatters)), _defineProperty(_ref, StorageKeys.UNIVERSAL_RESULTS, UniversalResults.from(response, urls, formatters)), _defineProperty(_ref, StorageKeys.INTENTS, SearchIntents.from(response.searchIntents)), _defineProperty(_ref, StorageKeys.SPELL_CHECK, SpellCheck.from(response.spellCheck)), _defineProperty(_ref, StorageKeys.LOCATION_BIAS, LocationBias.from(response.locationBias)), _ref;
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data, formatters) {
        var _ref2;

        return _ref2 = {}, _defineProperty(_ref2, StorageKeys.QUERY_ID, data.response.queryId), _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(data.response, formatters)), _defineProperty(_ref2, StorageKeys.DYNAMIC_FILTERS, DynamicFilters.from(data.response)), _defineProperty(_ref2, StorageKeys.INTENTS, SearchIntents.from(data.response.searchIntents)), _defineProperty(_ref2, StorageKeys.SPELL_CHECK, SpellCheck.from(data.response.spellCheck)), _defineProperty(_ref2, StorageKeys.LOCATION_BIAS, LocationBias.from(data.response.locationBias)), _ref2;
      }
    }]);

    return SearchDataTransformer;
  }();

  /** @module QuestionSubmission */

  /**
   * QuestionSubmission is the core state model
   * to power the QuestionSubmission component
   */
  var QuestionSubmission =
  /*#__PURE__*/
  function () {
    function QuestionSubmission() {
      var question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var errors = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, QuestionSubmission);

      /**
       * The author of the question
       * @type {string}
       */
      this.name = question.name || null;
      /**
       * The email address of the question
       * @type {string}
       */

      this.email = question.email || null;
      /**
       * True if the privacy policy was approved
       * @type {boolean}
       */

      this.privacyPolicy = question.privacyPolicy || null;
      /**
       * The question to be sent to the server
       * @type {string}
       */

      this.questionText = question.questionText || null;
      /**
       * Alternative question meta information
       * @type {string}
       */

      this.questionDescription = question.questionDescription || null;
      /**
       * Contains any errors about the question submission
       * @type {object}
       */

      this.errors = errors || null;
      Object.freeze(this);
    }

    _createClass(QuestionSubmission, null, [{
      key: "submitted",
      value: function submitted() {
        return {
          questionSubmitted: true
        };
      }
    }, {
      key: "errors",
      value: function errors(question, _errors) {
        return QuestionSubmission(question, _errors);
      }
    }]);

    return QuestionSubmission;
  }();

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
       * Create a new position filter
       * @param {number} lat The latitude of the position
       * @param {number} lng The longitude of the position
       * @param {number} radius The search radius (in meters)
       */

    }, {
      key: "position",
      value: function position(lat, lng, radius) {
        return Filter._fromMatcher('builtin.location', '$near', {
          lat: lat,
          lng: lng,
          radius: radius
        });
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

  /** @typedef {import('./services/searchservice').default} SearchService */

  /** @typedef {import('./services/autocompleteservice').default} AutoCompleteService */

  /** @typedef {import('./services/questionanswerservice').default} QuestionAnswerService */

  /**
   * Core is the main application container for all of the network and storage
   * related behaviors of the application.
   */

  var Core =
  /*#__PURE__*/
  function () {
    function Core() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Core);

      /**
       * A reference to the client API Key used for all requests
       * @type {string}
       * @private
       */
      this._apiKey = config.apiKey;
      /**
       * A reference to the client Answers Key used for all requests
       * @type {string}
       * @private
       */

      this._experienceKey = config.experienceKey;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * A reference to the client locale used for all requests. If not specified, defaults to "en" (for
       * backwards compatibility).
       * @type {string}
       * @private
       */

      this._locale = config.locale;
      /**
       * A map of field formatters used to format results, if present
       * @type {Object.<string, function>}
       * @private
       */

      this._fieldFormatters = config.fieldFormatters || {};
      /**
       * A reference to the core data storage that powers the UI
       * @type {GlobalStorage}
       * @private
       */

      this.globalStorage = config.globalStorage;
      /**
       * A reference to the core persistent storage
       * @type {PersistentStorage}
       * @private
       */

      this.persistentStorage = config.persistentStorage;
      /**
       * An abstraction containing the integration with the RESTful search API
       * For both vertical and universal search
       * @type {SearchService}
       * @private
       */

      this._searcher = config.searchService;
      /**
       * An abstraction containing the integration with the RESTful autocomplete API
       * For filter search, vertical autocomplete, and universal autocomplete
       * @type {AutoCompleteService}
       * @private
       */

      this._autoComplete = config.autoCompleteService;
      /**
       * An abstraction for interacting with the Q&A rest interface
       * @type {QuestionAnswerService}
       * @private
       */

      this._questionAnswer = config.questionAnswerService;
    }
    /**
     * Search in the context of a vertical
     * @param {string} verticalKey vertical ID for the search
     * @param {object} query The query details
     * @param {string} query.input The input to search for
     * @param {string} query.filter The filter to use in the search
     * @param {string} query.facetFilter The facet filter to use in the search
     * @param {number} query.limit The max number of results to include, max of 50
     * @param {number} query.offset The results offset, for fetching more results of the same query
     * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
     * @param {boolean} query.append If true, adds the results of this query to the end of the current results, defaults false
     */


    _createClass(Core, [{
      key: "verticalSearch",
      value: function verticalSearch(verticalKey, query) {
        var _this = this;

        if (!query.append) {
          this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
          this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
        }

        return this._searcher.verticalSearch(verticalKey, _objectSpread({
          limit: this.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit,
          geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION)
        }, query, {
          isDynamicFiltersEnabled: this._isDynamicFiltersEnabled,
          skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
          queryTrigger: this.globalStorage.getState('queryTrigger'),
          sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN)
        })).then(function (response) {
          return SearchDataTransformer.transformVertical(response, _this._fieldFormatters);
        }).then(function (data) {
          _this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);

          if (query.append) {
            var mergedResults = _this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS).append(data[StorageKeys.VERTICAL_RESULTS]);

            _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
          } else {
            _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
          }

          if (data[StorageKeys.DYNAMIC_FILTERS]) {
            _this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
          }

          if (data[StorageKeys.SPELL_CHECK]) {
            _this.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
          }

          if (data[StorageKeys.LOCATION_BIAS]) {
            _this.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);
          }

          _this.globalStorage["delete"]('skipSpellCheck');

          _this.globalStorage["delete"]('queryTrigger');
        });
      }
      /**
       * Page within the results of the last query
       * @param {string} verticalKey The vertical key to use in the search
       * @param {number} offset The offset to use in the search
       */

    }, {
      key: "verticalPage",
      value: function verticalPage(verticalKey, offset) {
        var allFilters = this.globalStorage.getAll(StorageKeys.FILTER);
        var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
        var facetFilter = this.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
        this.verticalSearch(verticalKey, {
          input: this.globalStorage.getState(StorageKeys.QUERY),
          id: this.globalStorage.getState(StorageKeys.QUERY_ID),
          filter: JSON.stringify(totalFilter),
          facetFilter: JSON.stringify(facetFilter),
          offset: offset
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
        this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
        this.globalStorage.set(StorageKeys.LOCATION_BIAS, {});
        return this._searcher.universalSearch(queryString, {
          geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
          skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
          queryTrigger: this.globalStorage.getState('queryTrigger'),
          sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN)
        }).then(function (response) {
          return SearchDataTransformer.transform(response, urls, _this2._fieldFormatters);
        }).then(function (data) {
          _this2.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this2.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this2.globalStorage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);

          _this2.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);

          _this2.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);

          _this2.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, new QuestionSubmission({
            questionText: queryString
          }));

          _this2.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);

          _this2.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);

          _this2.globalStorage["delete"]('skipSpellCheck');

          _this2.globalStorage["delete"]('queryTrigger');
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
          _this3.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);
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
          _this4.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);
        });
      }
      /**
       * Given an input, provide a list of suitable filters for autocompletion
       *
       * @param {string} input  the string to search for filters with
       * @param {object} config  the config to serach for filters with
       * @param {string} config.namespace  the namespace to use for the storage key
       * @param {string} config.verticalKey the vertical key for the config
       * @param {string} config.barKey  the bar key for the config v1
       * @param {object} config.searchParameters  the search parameters for the config v2
       */

    }, {
      key: "autoCompleteFilter",
      value: function autoCompleteFilter(input, config) {
        var _this5 = this;

        return this._autoComplete.queryFilter(input, config).then(function (data) {
          _this5.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(config.namespace), data);
        });
      }
      /**
       * Submits a question to the server and updates the underlying question model
       * @param {object} question The question object to submit to the server
       * @param {number} question.entityId The entity to associate with the question (required)
       * @param {string} question.lanuage The language of the question
       * @param {string} question.site The "publisher" of the (e.g. 'FIRST_PARTY')
       * @param {string} question.name The name of the author
       * @param {string} question.email The email address of the author
       * @param {string} question.questionText The question
       * @param {string} question.questionDescription Additional information about the question
       */

    }, {
      key: "submitQuestion",
      value: function submitQuestion(question) {
        var _this6 = this;

        return this._questionAnswer.submitQuestion(question).then(function (data) {
          _this6.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, QuestionSubmission.submitted());
        });
      }
      /**
       * Stores the given query into storage, to be used for the next search
       * @param {string} query the query to store
       */

    }, {
      key: "setQuery",
      value: function setQuery(query) {
        this.globalStorage.set(StorageKeys.QUERY, query);
      }
      /**
       * Stores the provided query ID, to be used in analytics
       * @param {string} queryId The query id to store
       */

    }, {
      key: "setQueryId",
      value: function setQueryId(queryId) {
        this.globalStorage.set(StorageKeys.QUERY_ID, queryId);
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
        this.globalStorage.set("".concat(StorageKeys.FILTER, ".").concat(namespace), filter);
      }
    }, {
      key: "setFacetFilter",
      value: function setFacetFilter(namespace, filter) {
        this.globalStorage.set("".concat(StorageKeys.FACET_FILTER, ".").concat(namespace), filter);
      }
    }, {
      key: "enableDynamicFilters",
      value: function enableDynamicFilters() {
        this._isDynamicFiltersEnabled = true;
      }
    }, {
      key: "on",
      value: function on(evt, moduleId, cb) {
        return this.globalStorage.on(evt, moduleId, cb);
      }
    }]);

    return Core;
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
      _this.reported = false;

      if (causedBy) {
        _this.causedBy = causedBy instanceof AnswersBaseError ? causedBy : AnswersBaseError.from(causedBy);
      }

      return _this;
    }

    _createClass(AnswersBaseError, [{
      key: "toJson",
      value: function toJson() {
        return JSON.stringify(this);
      }
    }, {
      key: "toString",
      value: function toString() {
        var string = "".concat(this.errorMessage, " (").concat(this.boundary, ")");

        if (this.causedBy) {
          string += "\n  Caused By: ".concat(this.causedBy.toString());
        }

        return string;
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
   * AnswersUiError used for things like DOM errors.
   * @extends AnswersBaseError
   */

  var AnswersConfigError =
  /*#__PURE__*/
  function (_AnswersBaseError2) {
    _inherits(AnswersConfigError, _AnswersBaseError2);

    function AnswersConfigError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersConfigError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersConfigError).call(this, 101, message, boundary, causedBy));
    }

    return AnswersConfigError;
  }(AnswersBaseError);
  /**
   * AnswersComponentError is used for Component oriented errors
   * e.g. failure to render, or catching unknowns.
   * @extends AnswersBaseError
   */

  var AnswersComponentError =
  /*#__PURE__*/
  function (_AnswersBaseError4) {
    _inherits(AnswersComponentError, _AnswersBaseError4);

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
  function (_AnswersBaseError5) {
    _inherits(AnswersEndpointError, _AnswersBaseError5);

    function AnswersEndpointError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersEndpointError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersEndpointError).call(this, 300, message, boundary, causedBy));
    }

    return AnswersEndpointError;
  }(AnswersBaseError);
  /**
   * AnswersCoreError represents errors for precondition failures in the core library
   * @extends AnswersBaseError
   */

  var AnswersCoreError =
  /*#__PURE__*/
  function (_AnswersBaseError6) {
    _inherits(AnswersCoreError, _AnswersBaseError6);

    function AnswersCoreError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersCoreError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersCoreError).call(this, 400, message, boundary, causedBy));
    }

    return AnswersCoreError;
  }(AnswersBaseError);
  /**
   * AnswersStorageError represents storage related errors
   * @extends AnswersBaseError
   */

  var AnswersStorageError =
  /*#__PURE__*/
  function (_AnswersBaseError7) {
    _inherits(AnswersStorageError, _AnswersBaseError7);

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
  /**
   * AnswersAnalyticsError is used for errors when reporting analytics
   * @extends AnswersBaseError
   */

  var AnswersAnalyticsError =
  /*#__PURE__*/
  function (_AnswersBaseError8) {
    _inherits(AnswersAnalyticsError, _AnswersBaseError8);

    function AnswersAnalyticsError(message, event, causedBy) {
      var _this3;

      _classCallCheck(this, AnswersAnalyticsError);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AnswersAnalyticsError).call(this, 402, message, 'Analytics', causedBy));
      _this3.event = event;
      return _this3;
    }

    return AnswersAnalyticsError;
  }(AnswersBaseError);

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
      key: "attributes",
      value: function attributes(selector, attrs) {
        var _this = this;

        Object.entries(attrs).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              attr = _ref2[0],
              val = _ref2[1];

          return _this.attr(selector, attr, val);
        });
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
      key: "once",
      value: function once(selector, evt, handler) {
        DOM.query(selector).addEventListener(evt, handler, {
          once: true
        });
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
        var systemOpts = {
          core: this._core,
          renderer: this._renderer,
          analyticsReporter: this._analyticsReporter,
          componentManager: this
        };
        var componentClass = this._componentRegistry[componentType];

        if (!componentClass.areDuplicateNamesAllowed() && this._activeComponents.some(function (c) {
          return c.name === opts.name;
        })) {
          throw new AnswersComponentError("Another component with name ".concat(opts.name, " already exists"), componentType);
        }

        var config = _objectSpread({
          isTwin: this._activeComponents.some(function (component) {
            return component.constructor.type === componentType;
          })
        }, opts); // Instantiate our new component and keep track of it


        var component = new this._componentRegistry[componentType](config, systemOpts).init(config);

        this._activeComponents.push(component); // If there is a global storage to power state, apply the state
        // from the storage to the component, and then bind the component
        // state to the storage via its updates


        if (this._core && this._core.globalStorage !== null) {
          if (component.moduleId === undefined || component.moduleId === null) {
            return component;
          }

          this._core.globalStorage.on('update', component.moduleId, function (data) {
            component.setState(data);
          });
        }

        return component;
      }
      /**
       * Remove the provided component from the list of active components and remove
       * the associated storage event listener
       * @param {Component} component The component to remove
       */

    }, {
      key: "remove",
      value: function remove(component) {
        this._core.globalStorage.off('update', component.moduleId);

        var index = this._activeComponents.findIndex(function (c) {
          return c.name === component.name;
        });

        this._activeComponents.splice(index, 1);
      }
      /**
       * Remove the component with the given name
       * @param {string} name The name of the compnent to remove
       */

    }, {
      key: "removeByName",
      value: function removeByName(name) {
        var component = this._activeComponents.find(function (c) {
          return c.name === name;
        });

        component.remove();
        DOM.empty(component._container);
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
       * @param {Object} urlParams The params to encode into the URL
       * @param {Object} jsonBody The request body (json) to provide with the POST request
       * @param {Object} requestConfig Configuration options to use for the request
       */

    }, {
      key: "post",
      value: function post(url, urlParams, jsonBody, requestConfig) {
        return this.request(Methods.POST, this.encodeParams(url, urlParams), Object.assign({}, {
          body: JSON.stringify(jsonBody),
          credentials: undefined
        }, requestConfig));
      }
    }, {
      key: "request",
      value: function request(method, url, opts) {
        var reqArgs = Object.assign({}, {
          'method': method,
          'credentials': 'include'
        }, opts);
        return fetch(url, reqArgs);
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
        if (_typeof(params) !== 'object') {
          return;
        }

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
  var LIB_VERSION = 'v0.9.4';
  /** The base url for the live api backend */

  var LIVE_API_BASE_URL = 'https://liveapi.yext.com';
  /** The base url for the knowledge api backend */

  var API_BASE_URL = 'https://api.yext.com';
  /** The default url for compiled component templates */

  var COMPILED_TEMPLATES_URL = "https://assets.sitescdn.net/answers/".concat(LIB_VERSION, "/answerstemplates.compiled.min.js");
  /** The base urls for the analytics backend  */

  var ANALYTICS_BASE_URL = 'https://realtimeanalytics.yext.com';
  var ANALYTICS_BASE_URL_NO_COOKIE = 'https://answers.yext-pixel.com';

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
    }, {
      key: "entries",
      value: function entries() {
        var entries = [];

        for (var key in this._params) {
          entries.push([key, this._params[key]]);
        }

        return entries;
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

      this._baseUrl = opts.baseUrl || LIVE_API_BASE_URL;
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
     * @returns {Promise<Response>}
     */


    _createClass(ApiRequest, [{
      key: "get",
      value: function get() {
        return this._requester.get(this._baseUrl + this._endpoint, Object.assign({}, this.baseParams(), this.sanitizeParams(this._params)));
      }
      /**
       * @param {Object} opts
       * @returns {Promise<Response>}
       */

    }, {
      key: "post",
      value: function post(opts) {
        return this._requester.post(this._baseUrl + this._endpoint, this.baseParams()
        /* urlParams */
        , this.sanitizeParams(this._params)
        /* jsonBody */
        , opts
        /* requestConfig */
        );
      }
      /**
       * @returns {Object}
       * @private
       */

    }, {
      key: "baseParams",
      value: function baseParams() {
        var baseParams = {
          'v': this._version,
          'api_key': this._apiKey,
          'jsLibVersion': LIB_VERSION
        };
        var urlParams = new SearchParams(window.location.search.substring(1));

        if (urlParams.has('beta')) {
          baseParams['beta'] = urlParams.get('beta');
        }

        return baseParams;
      }
    }, {
      key: "sanitizeParams",
      value: function sanitizeParams() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // Remove any paramaters whos value is `undefined`.
        //
        // NOTE(billy) Probably better to be explicit about how to handle this at the request building level,
        // but I can't see any cases where we'd ever want to send 'undefined' as a value to the server.
        // So it's probably fine to 'clean' the params object here
        Object.keys(params).forEach(function (key) {
          if (params[key] === undefined || params[key] === null) {
            delete params[key];
          }
        });
        return params;
      }
    }]);

    return ApiRequest;
  }();

  /**
   * SearchApi is the API for doing various types of search
   * over the network (e.g. vertical or universal)
   *
   * @implements {SearchService}
   */

  var SearchApi =
  /*#__PURE__*/
  function () {
    function SearchApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SearchApi);

      /**
       * A local reference to the API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'Search');
      }

      this._apiKey = config.apiKey;
      /**
       * A local reference to the Answers Key to use for the request
       * @type {string}
       * @private
       */

      if (!config.experienceKey) {
        throw new AnswersBasicError('Answers Key is required', 'Search');
      }

      this._experienceKey = config.experienceKey;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = config.version || 20190101 || 20190301;
      /**
       * A local reference to the locale to use for the request
       * @type {string}
       * @private
       */

      if (!config.locale) {
        throw new AnswersBasicError('Locale is required', 'Search');
      }

      this._locale = config.locale;
    }
    /** @inheritdoc */


    _createClass(SearchApi, [{
      key: "verticalSearch",
      value: function verticalSearch(verticalKey, _ref) {
        var input = _ref.input,
            filter = _ref.filter,
            facetFilter = _ref.facetFilter,
            limit = _ref.limit,
            offset = _ref.offset,
            id = _ref.id,
            geolocation = _ref.geolocation,
            isDynamicFiltersEnabled = _ref.isDynamicFiltersEnabled,
            skipSpellCheck = _ref.skipSpellCheck,
            queryTrigger = _ref.queryTrigger,
            sessionTrackingEnabled = _ref.sessionTrackingEnabled;

        if (limit > 50) {
          throw new AnswersCoreError('Provided search limit unsupported', 'SearchApi');
        }

        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/vertical/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'filters': filter,
            'facetFilters': facetFilter,
            'verticalKey': verticalKey,
            'limit': limit,
            'offset': offset,
            'location': geolocation ? "".concat(geolocation.lat, ",").concat(geolocation.lng) : null,
            'radius': geolocation ? geolocation.radius : null,
            'queryId': id,
            'retrieveFacets': isDynamicFiltersEnabled,
            'locale': this._locale,
            'skipSpellCheck': skipSpellCheck,
            'queryTrigger': queryTrigger,
            'sessionTrackingEnabled': sessionTrackingEnabled
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
      /** @inheritdoc */

    }, {
      key: "universalSearch",
      value: function universalSearch(queryString, params) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'experienceKey': this._experienceKey,
            'location': params.geolocation ? "".concat(params.geolocation.lat, ",").concat(params.geolocation.lng) : null,
            'radius': params.geolocation ? params.geolocation.radius : null,
            'version': this._experienceVersion,
            'locale': this._locale,
            'skipSpellCheck': params.skipSpellCheck,
            'queryTrigger': params.queryTrigger,
            'sessionTrackingEnabled': params.sessionTrackingEnabled
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
    }]);

    return SearchApi;
  }();

  /**
   * Model for the analytics event type
   */
  var AnalyticsEvent =
  /*#__PURE__*/
  function () {
    function AnalyticsEvent(type, label) {
      _classCallCheck(this, AnalyticsEvent);

      /**
       * The type of event to report
       * @type {string}
       */
      this.eventType = type.toUpperCase();
      /**
       * An optional label to be provided for the event
       * @type {string}
       */

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
        return this;
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

  /** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

  /**
   * Class for reporting analytics events to the server via HTTP
   *
   * @implements {AnalyticsReporterService}
   */

  var AnalyticsReporter =
  /*#__PURE__*/
  function () {
    function AnalyticsReporter(core, experienceKey, experienceVersion, businessId) {
      var _this = this;

      var globalOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, AnalyticsReporter);

      /**
       * The internal business identifier used for reporting
       * @type {number}
       */
      this._businessId = businessId;
      /**
       * Options to include with every analytic event reported to the server
       * @type {object}
       * @private
       */

      this._globalOptions = Object.assign({}, globalOptions, {
        experienceKey: experienceKey
      });
      /**
       * Base URL for the analytics API
       * @type {string}
       * @private
       */

      this._baseUrl = ANALYTICS_BASE_URL_NO_COOKIE;

      if (experienceVersion) {
        this._globalOptions.experienceVersion = experienceVersion;
      } // listen to query id updates


      core.globalStorage.on('update', StorageKeys.QUERY_ID, function (id) {
        return _this.setQueryId(id);
      });
    }

    _createClass(AnalyticsReporter, [{
      key: "setQueryId",
      value: function setQueryId(queryId) {
        this._globalOptions.queryId = queryId;
      }
      /** @inheritdoc */

    }, {
      key: "report",
      value: function report(event) {
        if (!(event instanceof AnalyticsEvent)) {
          throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
        }

        event.addOptions(this._globalOptions);
        return new HttpRequester().beacon("".concat(this._baseUrl, "/realtimeanalytics/data/answers/").concat(this._businessId), {
          'data': event.toApiEvent()
        });
      }
      /** @inheritdoc */

    }, {
      key: "setConversionTrackingEnabled",
      value: function setConversionTrackingEnabled(isEnabled) {
        this._baseUrl = isEnabled ? ANALYTICS_BASE_URL : ANALYTICS_BASE_URL_NO_COOKIE;
      }
    }]);

    return AnalyticsReporter;
  }();

  /** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

  /**
   * @implements {AnalyticsReporterService}
   */
  var NoopAnalyticsReporter =
  /*#__PURE__*/
  function () {
    function NoopAnalyticsReporter() {
      _classCallCheck(this, NoopAnalyticsReporter);
    }

    _createClass(NoopAnalyticsReporter, [{
      key: "report",

      /** @inheritdoc */
      value: function report(event) {
        return true;
      }
      /** @inheritdoc */

    }, {
      key: "setConversionTrackingEnabled",
      value: function setConversionTrackingEnabled(isEnabled) {}
    }]);

    return NoopAnalyticsReporter;
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
      _this._data = data;

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
        this.capturePrevious();

        if (_typeof(data) !== 'object' || Array.isArray(data) || Object.keys(data).length !== Object.keys(this._data).length) {
          this._data = data;
          this.emit('update', this._data);
          return;
        } // check for shallow equality


        for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (this._data[key] !== data[key]) {
            this._data = data;
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

  var GlobalStorage =
  /*#__PURE__*/
  function () {
    function GlobalStorage() {
      _classCallCheck(this, GlobalStorage);

      this._moduleDataContainer = {};
      this._futureListeners = {};
    }
    /**
     * Set the data in storage with the given key to the provided data,
     * completely overwriting any existing data.
     * @param {string} key the storage key to set
     * @param {*} data the data to set
     */


    _createClass(GlobalStorage, [{
      key: "set",
      value: function set(key, data) {
        this._initDataContainer(key, data);

        this._moduleDataContainer[key].set(data);
      }
      /**
       * Add all key/value pairs in the provided map to the storage
       * @param {*} data The key/value pairs to set in the storage
       */

    }, {
      key: "setAll",
      value: function setAll(data) {
        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              val = _Object$entries$_i[1];

          if (key === StorageKeys.QUERY) {
            continue;
          }

          this.set(key, val);
        } // Update query last since it triggers a search
        // TODO: move listeners up so all of storage can be updated at the same time


        if (data[StorageKeys.QUERY]) {
          this.set(StorageKeys.QUERY, data[StorageKeys.QUERY]);
        }
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

        for (var _i2 = 0, _Object$keys = Object.keys(this._moduleDataContainer); _i2 < _Object$keys.length; _i2++) {
          var dataKey = _Object$keys[_i2];

          if (dataKey.startsWith(key) && this._moduleDataContainer[dataKey].raw() !== null) {
            data.push(this._moduleDataContainer[dataKey].raw());
          }
        }

        return data;
      }
      /**
       * Remove the data in storage with the given key to the provided data,
       * @param {string} key the storage key to delete
       */

    }, {
      key: "delete",
      value: function _delete(key) {
        // Note: Do we need to clean up listeners here?
        delete this._moduleDataContainer[key];
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

    return GlobalStorage;
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
    function Component() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Component);

      this.moduleId = null;
      /**
       * Unique name of this component instance
       * Used to distinguish between other components of the same type
       * @type {String}
       */

      this.name = config.name || this.constructor.type;
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

      this._parentContainer = config.parentContainer || null;
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

      this.core = systemConfig.core || null;
      /**
       * A local reference to the component manager, which contains all of the component classes
       * eligible to be created
       * @type {ComponentManager}
       */

      this.componentManager = systemConfig.componentManager || null;
      /**
       * A local reference to the analytics reporter, used to report events for this component
       * @type {AnalyticsReporter}
       */

      this.analyticsReporter = systemConfig.analyticsReporter || null;
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

      if (this._parentContainer === null) {
        if (typeof config.container !== 'string') {
          throw new Error('Missing `container` option for component configuration. Must be of type `string`.');
        }

        this._container = DOM.query(config.container) || null;
      } else {
        this._container = DOM.query(this._parentContainer, config.container); // If we have a parent, and the container is missing from the DOM,
        // we construct the container and append it to the parent

        if (this._container === null) {
          this._container = DOM.createEl('div', {
            "class": config.container.substring(1, config.container.length)
          });
          DOM.append(this._parentContainer, this._container);
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

      this._renderer = systemConfig.renderer || Renderers.Handlebars;
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


      this.onCreate = config.onCreateOverride || this.onCreate || function () {};

      this.onCreate = this.onCreate.bind(this);
      /**
       * The a local reference to the callback that will be invoked when a component is Mounted.
       * @type {function}
       */

      this.onMount = config.onMountOverride || this.onMount || function () {};

      this.onMount = this.onMount.bind(this);
      /**
       * The a local reference to the callback that will be invoked when a components state is updated.
       * @type {function}
       */

      this.onUpdate = config.onUpdateOverride || this.onUpdate || function () {};

      this.onUpdate = this.onUpdate.bind(this);
      /**
       * A user provided onCreate callback
       * @type {function}
       */

      this.userOnCreate = config.onCreate || function () {};
      /**
       * A user provided onMount callback
       * @type {function}
       */


      this.userOnMount = config.onMount || function () {};
      /**
       * A user provided onUpdate callback
       * @type {function}
       */


      this.userOnUpdate = config.onUpdate || function () {};
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

        try {
          this.setState(opts.data || opts.state || {});
          this.onCreate();
          this.userOnCreate();
        } catch (e) {
          throw new AnswersComponentError('Error initializing component', this.constructor.type, e);
        }

        this._state.on('update', function () {
          try {
            _this.onUpdate();

            _this.userOnUpdate();

            _this.unMount();

            _this.mount();
          } catch (e) {
            console.log(e);
            throw new AnswersComponentError('Error updating component', _this.constructor.type, e);
          }
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
          parentContainer: this._container,
          data: data
        }, opts || {}, {
          _parentOpts: this._config
        }));

        this._children.push(childComponent);

        return childComponent;
      }
      /**
       * Unmount and remove this component and its children from the list
       * of active components
       */

    }, {
      key: "remove",
      value: function remove() {
        this._children.forEach(function (c) {
          return c.remove();
        });

        this.componentManager.remove(this);
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
        if (!this._container) {
          return this;
        }

        this._children.forEach(function (child) {
          child.unMount();
        });

        DOM.empty(this._container);

        this._children.forEach(function (c) {
          return c.remove();
        });

        this._children = [];
        this.onUnMount();
      }
    }, {
      key: "mount",
      value: function mount() {
        var _this2 = this;

        if (!this._container) {
          return this;
        }

        if (this.beforeMount() === false) {
          return this;
        }

        DOM.append(this._container, this.render(this._state.asJSON())); // Process the DOM to determine if we should create
        // in-memory sub-components for rendering

        var domComponents = DOM.queryAll(this._container, '[data-component]:not([data-is-component-mounted])');
        var data = this.transformData(JSON.parse(JSON.stringify(this._state.get())));
        domComponents.forEach(function (c) {
          return _this2._createSubcomponent(c, data);
        });

        this._children.forEach(function (child) {
          child.mount();
        }); // Attach analytics hooks as necessary


        if (this.analyticsReporter) {
          var domHooks = DOM.queryAll(this._container, '[data-eventtype]:not([data-is-analytics-attached])');
          domHooks.forEach(this._createAnalyticsHook.bind(this));
        }

        this._isMounted = true;
        this.onMount(this);
        this.userOnMount(this);
        return this;
      }
      /**
       * render the template using the {Renderer} with the current state and template of the component
       * @returns {string}
       */

    }, {
      key: "render",
      value: function render() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._state.get();
        this.beforeRender(); // Temporary fix for passing immutable data to transformData().

        data = this.transformData(JSON.parse(JSON.stringify(data)));
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


        var el = DOM.create(html);
        this.afterRender();
        return el.innerHTML;
      }
    }, {
      key: "_createSubcomponent",
      value: function _createSubcomponent(domComponent, data) {
        var _this3 = this;

        domComponent.dataset.isComponentMounted = true;
        var dataset = domComponent.dataset;
        var type = dataset.component;
        var prop = dataset.prop;
        var opts = dataset.opts ? JSON.parse(dataset.opts) : {};
        var childData = data[prop] || {};
        opts = _objectSpread({}, opts, {
          container: domComponent
        }); // TODO(billy) Right now, if we provide an array as the data prop,
        // the behavior is to create many components for each item in the array.
        // THAT interface SHOULD change to use a different property that defines
        // whether to array data should be used for a single component or
        // to create many components for each item.
        // Overloading and having this side effect is unintuitive and WRONG

        if (!Array.isArray(childData)) {
          // Rendering a sub component should be within the context,
          // of the node that we processed it from
          this.addChild(childData, type, opts);
          return;
        }

        childData.reverse();
        childData.forEach(function (data) {
          _this3.addChild(data, type, opts);
        });
      }
    }, {
      key: "_createAnalyticsHook",
      value: function _createAnalyticsHook(domComponent) {
        var _this4 = this;

        domComponent.dataset.isAnalyticsAttached = true;
        var dataset = domComponent.dataset;
        var type = dataset.eventtype;
        var label = dataset.eventlabel;
        var options = dataset.eventoptions ? JSON.parse(dataset.eventoptions) : {};
        DOM.on(domComponent, 'click', function (e) {
          var event = new AnalyticsEvent(type, label);
          event.addOptions(_this4._analyticsOptions);
          event.addOptions(options);

          _this4.analyticsReporter.report(event);
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
   * The debounce duration for resize events
   * @type {number}
   */

  var RESIZE_DEBOUNCE = 100;
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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, NavigationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationComponent).call(this, config, systemConfig));
      /**
       * The label to show on the dropdown menu button
       * @type {string}
       */

      _this.dropdownLabel = config.dropdownLabel || 'More';
      /**
       * The optional icon to show on the dropdown menu button
       * @type {string}
       */

      _this.dropdownIcon = config.dropdownIcon || 'kabob';
      /**
       * If true, render a static navigation with no "more" menu
       * @type {boolean}
       */

      _this["static"] = config["static"] || false;
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
      /**
       * Breakpoints at which navigation items move to the "more" dropdown
       * @type {number[]}
       * @private
       */

      _this._navBreakpoints = [];
      return _this;
    }

    _createClass(NavigationComponent, [{
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        if (!this["static"]) {
          DOM.on(window, 'resize', function () {
            if (_this2._debounceTimer) {
              clearTimeout(_this2._debounceTimer);
            }

            _this2._debounceTimer = setTimeout(_this2.refitNav.bind(_this2), RESIZE_DEBOUNCE);
          });
          DOM.on(window, 'click', this.checkOutsideClick.bind(this));
        }
      }
    }, {
      key: "onMount",
      value: function onMount() {
        if (!this["static"]) {
          this.refitNav();
          DOM.on(DOM.query(this._container, '.yxt-Nav-more'), 'click', this.toggleMoreDropdown.bind(this));
        }
      }
    }, {
      key: "refitNav",
      value: function refitNav() {
        var container = DOM.query(this._container, '.yxt-Nav-container');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        var mainLinks = DOM.query(this._container, '.yxt-Nav-expanded');
        var collapsedLinks = DOM.query(this._container, '.yxt-Nav-modal');
        var navWidth = moreButton.classList.contains('yxt-Nav-item--more') ? container.offsetWidth : container.offsetWidth - moreButton.offsetWidth;
        var numBreakpoints = this._navBreakpoints.length; // sum child widths instead of using parent's width to avoid
        // browser inconsistencies

        var mainLinksWidth = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = mainLinks.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;
            mainLinksWidth += el.offsetWidth;
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

        if (mainLinksWidth > navWidth) {
          this._navBreakpoints.push(mainLinksWidth);

          var lastLink = mainLinks.children.item(mainLinks.children.length - 1);

          if (lastLink === null) {
            return;
          }

          collapsedLinks.prepend(lastLink);

          if (moreButton.classList.contains('yxt-Nav-item--more')) {
            moreButton.classList.remove('yxt-Nav-item--more');
          }
        } else {
          if (numBreakpoints && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
            var firstLink = collapsedLinks.children.item(0);

            if (firstLink === null) {
              return;
            }

            mainLinks.append(firstLink);

            this._navBreakpoints.pop();

            numBreakpoints--;
          }

          if (collapsedLinks.children.length === 0) {
            moreButton.classList.add('yxt-Nav-item--more');
          }
        }

        this.closeMoreDropdown();

        if (mainLinksWidth > navWidth || numBreakpoints > 0 && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
          this.refitNav();
        }
      }
    }, {
      key: "closeMoreDropdown",
      value: function closeMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.remove('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', false);
      }
    }, {
      key: "openMoreDropdown",
      value: function openMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.add('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', true);
      }
    }, {
      key: "toggleMoreDropdown",
      value: function toggleMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.toggle('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', collapsed.classList.contains('is-active'));
      }
    }, {
      key: "checkOutsideClick",
      value: function checkOutsideClick(e) {
        if (e.target.closest('.yxt-Nav-container')) {
          return;
        }

        this.closeMoreDropdown();
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
          tabs: tabs,
          dropdownLabel: this.dropdownLabel,
          dropdownIcon: this.dropdownIcon,
          "static": this["static"]
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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchComponent).call(this, config, systemConfig));
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
       * If true, show an "x" that allows the user to clear the current
       * query
       * @type {boolean}
       */

      _this.clearButton = config.clearButton === undefined ? true : config.clearButton;
      /**
       * When autofocusing on load, optionally open the autocomplete
       * (preset prompts)
       * @type {boolean}
       */

      _this.autocompleteOnLoad = config.autocompleteOnLoad || false;
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
       * true if there is another search bar present on the page.
       * Twins only update the query, and do not search
       */

      _this._isTwin = config.isTwin;
      /**
       * The query string to use for the input box, provided to template for rendering.
       * Optionally provided
       * @type {string|null}
       */

      _this.query = config.query || _this.core.globalStorage.getState(StorageKeys.QUERY);

      _this.core.globalStorage.on('update', StorageKeys.QUERY, function (q) {
        _this.query = q;

        _this.setState();

        _this.search(q);
      });
      /**
       * The minimum time allowed in milliseconds between searches to prevent
       * many duplicate searches back-to-back
       * @type {number}
       * @private
       */


      _this._searchCooldown = config.searchCooldown || 300;
      /**
       * When true and "near me" intent is expressed, prompt the user for their geolocation
       * @type {boolean}
       * @private
       */

      _this._promptForLocation = config.promptForLocation === undefined ? true : Boolean(config.promptForLocation);
      /**
       * Controls showing and hiding the search clear button
       */

      _this._showClearButton = _this.clearButton && _this.query;
      /**
       * For vertical search bars, whether or not to allow empty searches.
       * @type {boolean}
       * @private
       */

      _this._allowEmptySearch = !!config.allowEmptySearch;
      return _this;
    }

    _createClass(SearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query != null && !this.redirectUrl) {
          this.core.setQuery(this.query);
        }

        if (this._promptForLocation) {
          this.initLocationPrompt();
        }
      }
    }, {
      key: "onMount",
      value: function onMount() {
        // NOTE(amullings): If autocompleteOnLoad is false, we focus the input
        // element before loading the autocomplete component so that its focus
        // handler won't be triggered
        if (this.autoFocus === true && !this.query && !this.autocompleteOnLoad) {
          DOM.query(this._container, this._inputEl).focus();
        } // Wire up our search handling and auto complete


        this.initSearch(this._formEl);
        this.initAutoComplete(this._inputEl);

        if (this.clearButton) {
          this.initClearButton();
        }

        if (this.autoFocus === true && !this.query && this.autocompleteOnLoad) {
          DOM.query(this._container, this._inputEl).focus();
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        this._autocomplete.remove();

        _get(_getPrototypeOf(SearchComponent.prototype), "remove", this).call(this);
      }
    }, {
      key: "initClearButton",
      value: function initClearButton() {
        var _this2 = this;

        var button = DOM.query(this._container, '.js-yxt-SearchBar-clear');
        this._showClearButton = this._showClearButton || this.query;
        button.classList.toggle('yxt-SearchBar--hidden', !this._showClearButton);
        DOM.on(button, 'click', function () {
          _this2.query = '';
          _this2._showClearButton = false;
          button.classList.add('yxt-SearchBar--hidden');

          _this2.setState({});

          _this2.core.persistentStorage.set(StorageKeys.QUERY, _this2.query);

          _this2.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);

          _this2.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);

          _this2.core.setQuery(_this2.query);
        });
        DOM.on(this._inputEl, 'input', function (e) {
          var input = e.target.value;

          if (!_this2._showClearButton && input.length > 0) {
            _this2._showClearButton = true;
            button.classList.remove('yxt-SearchBar--hidden');
          } else if (_this2._showClearButton && input.length === 0) {
            _this2._showClearButton = false;
            button.classList.add('yxt-SearchBar--hidden');
          }
        });
      }
    }, {
      key: "initLocationPrompt",
      value: function initLocationPrompt() {
        var _this3 = this;

        this.core.globalStorage.on('update', StorageKeys.INTENTS, function (intent) {
          if (!intent.nearMe || _this3.core.globalStorage.getState(StorageKeys.GEOLOCATION) !== null) {
            return;
          }

          navigator.geolocation.getCurrentPosition(function (position) {
            _this3.core.globalStorage.set(StorageKeys.GEOLOCATION, {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              radius: position.coords.accuracy
            });

            _this3.search(_this3.query || '');
          });
        });
      }
      /**
       * A helper method to use for wiring up searching on form submission
       * @param {string} formSelector CSS selector to bind our submit handling to
       */

    }, {
      key: "initSearch",
      value: function initSearch(formSelector) {
        var _this4 = this;

        this._formEl = formSelector;

        this._container.classList.add('yxt-SearchBar-wrapper');

        var form = DOM.query(this._container, formSelector);

        if (!form) {
          throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._formEl, '`.');
        }

        DOM.on(form, 'submit', function (e) {
          e.preventDefault();
          var inputEl = form.querySelector(_this4._inputEl);
          var query = inputEl.value;
          var params = new SearchParams(window.location.search.substring(1));
          params.set('query', query); // If we have a redirectUrl, we want the form to be
          // serialized and submitted.

          if (typeof _this4.redirectUrl === 'string') {
            window.location.href = _this4.redirectUrl + '?' + params.toString();
            return false;
          }

          inputEl.blur();

          _this4.core.persistentStorage.set(StorageKeys.QUERY, query);

          _this4.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);

          _this4.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);

          _this4.core.setQuery(query);

          _this4.search(query);

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
        var _this5 = this;

        this._inputEl = inputSelector;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._autocomplete = this.componentManager.create('AutoComplete', {
          parentContainer: this._container,
          name: "".concat(this.name, ".autocomplete"),
          container: '.yxt-SearchBar-autocomplete',
          barKey: this._barKey,
          autoFocus: this.autoFocus && !this.autocompleteOnLoad,
          verticalKey: this._verticalKey,
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          inputEl: inputSelector,
          onSubmit: function onSubmit() {
            DOM.trigger(DOM.query(_this5._container, _this5._formEl), 'submit');
          }
        });
      }
      /**
       * @param {string} query
       */

    }, {
      key: "search",
      value: function search(query) {
        var _this6 = this;

        // Don't search if we recently searched,
        // if there's no query for universal search,
        // or if this is a twin searchbar
        if (this._throttled || !query && !this._verticalKey || !query && this._verticalKey && !this._allowEmptySearch || this._isTwin) {
          return;
        }

        this._throttled = true;
        setTimeout(function () {
          _this6._throttled = false;
        }, this._searchCooldown);

        if (this._verticalKey) {
          var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
          var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
          var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
          return this.core.verticalSearch(this._verticalKey, {
            input: query,
            filter: JSON.stringify(totalFilter),
            offset: this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0,
            facetFilter: JSON.stringify(facetFilter)
          });
        } else {
          // NOTE(billy) Temporary hack for DEMO
          // Remove me after the demo
          var nav = this.componentManager.getActiveComponent('Navigation');

          if (nav) {
            var tabs = nav.getState('tabs');
            var urls = {};

            if (tabs && Array.isArray(tabs)) {
              for (var i = 0; i < tabs.length; i++) {
                var params = new SearchParams(tabs[i].url.split('?')[1]);
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
          showClearButton: this._showClearButton,
          query: this.query || ''
        }, data));
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName() {
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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterSearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterSearchComponent).call(this, config, systemConfig));
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

      _this.query = config.query || _this.core.globalStorage.getState("".concat(StorageKeys.QUERY, ".").concat(_this.name)) || '';

      _this.core.globalStorage.on('update', "".concat(StorageKeys.QUERY, ".").concat(_this.name), function (q) {
        _this.query = q;

        _this.search();
      });
      /**
       * The filter string to use for the provided query
       * Optionally provided
       * @type {string}
       */


      _this.filter = config.filter || _this.core.globalStorage.getState("".concat(StorageKeys.FILTER, ".").concat(_this.name)) || '';

      if (typeof _this.filter === 'string') {
        try {
          _this.filter = JSON.parse(_this.filter);
        } catch (e) {}
      }

      _this.searchParameters = _this._buildSearchParameters(config.searchParameters);

      _this.core.globalStorage.on('update', "".concat(StorageKeys.FILTER, ".").concat(_this.name), function (f) {
        _this.filter = f;
      });

      return _this;
    }

    _createClass(FilterSearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query && this.filter) {
          this.search();
        }
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
          parentContainer: this._container,
          name: "".concat(this.name, ".autocomplete"),
          isFilterSearch: true,
          container: '.yxt-SearchBar-autocomplete',
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          originalFilter: this.filter,
          inputEl: inputSelector,
          verticalKey: this._verticalKey,
          barKey: this._barKey,
          searchParameters: this.searchParameters,
          onSubmit: function onSubmit(query, filter) {
            var params = new SearchParams(window.location.search.substring(1));
            params.set("".concat(_this2.name, ".query"), query);
            params.set("".concat(_this2.name, ".filter"), filter); // If we have a redirectUrl, we want the params to be
            // serialized and submitted.

            if (typeof _this2.redirectUrl === 'string') {
              window.location.href = _this2.redirectUrl + '?' + params.toString();
              return false;
            } // save the filter to storage for the next search


            _this2.query = query;
            _this2.filter = Filter.fromResponse(filter);

            _this2.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(_this2.name), _this2.query);

            _this2.core.persistentStorage.set("".concat(StorageKeys.FILTER, ".").concat(_this2.name), _this2.filter);

            _this2.core.setFilter(_this2.name, _this2.filter);

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

        var filters = this.core.globalStorage.getAll(StorageKeys.FILTER);
        var totalFilter = filters[0];

        if (filters.length > 1) {
          totalFilter = Filter.and.apply(Filter, _toConsumableArray(filters));
        }

        var searchQuery = this.core.globalStorage.getState(StorageKeys.QUERY) || '';
        var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
        this.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);
        this.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);
        this.core.verticalSearch(this._verticalKey, {
          input: searchQuery,
          filter: JSON.stringify(totalFilter),
          facetFilter: JSON.stringify(facetFilter)
        });
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
      key: "_buildSearchParameters",
      value: function _buildSearchParameters(searchParameterConfigs) {
        var searchParameters = {
          sectioned: false,
          fields: []
        };

        if (searchParameterConfigs === undefined) {
          return searchParameters;
        }

        if (searchParameterConfigs.sectioned) {
          searchParameters.sectioned = searchParameterConfigs.sectioned;
        }

        searchParameters.fields = this._buildFields(searchParameterConfigs.fields);
        return searchParameters;
      }
    }, {
      key: "_buildFields",
      value: function _buildFields(fieldConfigs) {
        if (fieldConfigs === undefined) {
          return [];
        }

        return fieldConfigs.map(function (fc) {
          return _objectSpread({
            fetchEntities: false
          }, fc);
        });
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName() {
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
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AutoCompleteComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoCompleteComponent).call(this, opts, systemOpts));
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
       * Whether the input is autocomatically focused or not
       * @type {boolean}
       */

      _this._autoFocus = opts.autoFocus || false;
      /**
       * Callback invoked when the `Enter` key is pressed on auto complete.
       */

      _this._onSubmit = opts.onSubmit || function () {};

      _this._searchParameters = opts.searchParameters || null;
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
          hasResults: this.hasResults(data),
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
        var queryInput = DOM.query(this._parentContainer, this._inputEl);

        if (!queryInput) {
          throw new Error('Could not initialize AutoComplete. Can not find {HTMLElement} `', this._inputEl, '`.');
        } // Disable the native autocomplete, autocorrect & spellcheck


        DOM.attributes(queryInput, {
          autocomplete: 'off',
          autocorrect: 'off',
          spellcheck: 'false'
        }); // The user exits the input, so we want to reset the state and close
        // the auto complete
        // TODO(jdelerme): Close logic to be moved to parent

        DOM.on(document, 'click', function (e) {
          if (e.target.matches('.js-yxt-AutoComplete-wrapper *') || e.target.matches(_this2._inputEl)) {
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
        });

        if (this._autoFocus) {
          DOM.once(queryInput, 'click', function () {
            _this2.autoComplete(queryInput.value);
          });
        } // Allow the user to select a result with the mouse


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

        var queryEl = DOM.query(this._parentContainer, this._inputEl);
        queryEl.value = optValue;
      }
    }, {
      key: "handleTyping",
      value: function handleTyping(key, value, e) {
        var ignoredKeys = [Keys.DOWN, Keys.UP, Keys.CTRL, Keys.ALT, Keys.SHIFT, Keys.LEFT, Keys.RIGHT, Keys.LEFT_OS_KEY, Keys.RIGHT_OS_KEY, Keys.ENTER, Keys.TAB, Keys.SELECT_KEY];

        if (ignoredKeys.indexOf(key) > -1) {
          return;
        } // User escapes out of auto complete, so we reset it to the original input


        if (key === Keys.ESCAPE) {
          this.updateQuery(this._originalQuery);
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
          this.core.autoCompleteFilter(input, {
            namespace: this.name,
            verticalKey: this._verticalKey,
            barKey: this._barKey,
            searchParameters: this._searchParameters
          });
        } else if (this._verticalKey || this._barKey) {
          this.core.autoCompleteVertical(input, this.name, this._verticalKey, this._barKey);
        } else {
          this.core.autoCompleteUniversal(input, this.name);
        }
      }
      /**
       * returns true if we have results in any section
       * @returns boolean
       */

    }, {
      key: "hasResults",
      value: function hasResults(data) {
        if (!data) {
          return false;
        }

        var sections = data['sections'];

        if (!sections) {
          return false;
        }

        for (var i = 0; i < sections.length; i++) {
          var _data = sections[i];

          if (!_data) {
            continue;
          }

          var results = _data.results;

          if (!results) {
            continue;
          }

          if (results.length > 0) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "handleNavigateResults",
      value: function handleNavigateResults(key, e) {
        var sections = this._state.get('sections');

        if (sections === undefined || sections.length <= 0) {
          return;
        } // Tabbing out or enter should close the auto complete.


        if (key === Keys.TAB) {
          this.close();
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
   * SpellCheckComponent will support displaying suggestion, autocorrect and combined(maybe in the future)
   * provided from spelling correction.
   *
   * @extends Component
   */

  var SpellCheckComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SpellCheckComponent, _Component);

    function SpellCheckComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SpellCheckComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SpellCheckComponent).call(this, config, systemConfig));
      _this.moduleId = StorageKeys.SPELL_CHECK;
      return _this;
    }

    _createClass(SpellCheckComponent, [{
      key: "onCreate",
      value: function onCreate() {
        this.core.persistentStorage["delete"]('skipSpellCheck');
        this.core.persistentStorage["delete"]('queryTrigger');
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        return _get(_getPrototypeOf(SpellCheckComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          shouldShow: data.correctedQuery !== undefined,
          correctedQueryUrl: this._buildRedirectQueryUrl(data.correctedQuery, data.type),
          helpText: this._getHelpText(data.type)
        }, val));
      }
    }, {
      key: "_buildRedirectQueryUrl",
      value: function _buildRedirectQueryUrl(query, type) {
        if (query === undefined) {
          return '';
        }

        var params = new SearchParams(window.location.search.substring(1));
        params.set('query', query.value);
        params.set('skipSpellCheck', true);
        params.set('queryTrigger', type.toLowerCase());
        return '?' + params.toString();
      }
    }, {
      key: "_getHelpText",
      value: function _getHelpText(type) {
        switch (type) {
          case 'SUGGEST':
            return 'Did you mean:';

          default:
            return '';
        }
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'search/spellcheck';
      }
    }, {
      key: "type",
      get: function get() {
        return 'SpellCheck';
      }
    }]);

    return SpellCheckComponent;
  }(Component);

  /**
   * LocationBiasComponent will show the user where is used for location bias and allow user to
   * improve accuracy with HTML5 geolocation.
   *
   * @extends Component
   */

  var LocationBiasComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(LocationBiasComponent, _Component);

    function LocationBiasComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, LocationBiasComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationBiasComponent).call(this, config, systemConfig));
      /**
       * Recieve updates from storage based on this index
       * @type {StorageKey}
       */

      _this.moduleId = StorageKeys.LOCATION_BIAS;
      /**
       * The optional vertical key for vertical search configuration
       * If not provided, when location updated,
       * a universal search will be triggered.
       * @type {string}
       */

      _this._verticalKey = config.verticalKey || null;
      /**
       * The element used for updating location
       * Optionally provided.
       * @type {string} CSS selector
       */

      _this._updateLocationEl = config.updateLocationEl || '.js-locationBias-update-location';
      _this._locationDisplayName = '';
      _this._accuracy = '';
      _this._allowUpdate = true;
      return _this;
    }

    _createClass(LocationBiasComponent, [{
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (!this._allowUpdate) {
          return;
        }

        DOM.on(this._updateLocationEl, 'click', function (e) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this2.core.globalStorage.set(StorageKeys.GEOLOCATION, {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                radius: position.coords.accuracy
              });

              _this2._doSearch();
            }, function (err) {
              if (err.code === 1) {
                _this2.core.globalStorage["delete"](StorageKeys.GEOLOCATION);

                _this2._allowUpdate = false;

                _this2.setState({
                  locationDisplayName: _this2._locationDisplayName,
                  accuracy: _this2._accuracy
                });
              }
            });
          } // TODO: Should we throw error or warning here if no geolocation?

        });
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        this._locationDisplayName = data.locationDisplayName;
        this._accuracy = data.accuracy;
        return _get(_getPrototypeOf(LocationBiasComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          locationDisplayName: this._getLocationDisplayName(data),
          accuracyText: this._getAccuracyHelpText(data.accuracy),
          isPreciseLocation: data.accuracy === 'DEVICE' && this._allowUpdate,
          isUnknownLocation: data.accuracy === 'UNKNOWN',
          shouldShow: data.accuracy !== undefined,
          allowUpdate: this._allowUpdate
        }, val));
      }
    }, {
      key: "_getLocationDisplayName",
      value: function _getLocationDisplayName(data) {
        if (data.accuracy === 'UNKNOWN') {
          return 'Unknown Location';
        }

        return data.locationDisplayName;
      }
    }, {
      key: "_getAccuracyHelpText",
      value: function _getAccuracyHelpText(accuracy) {
        switch (accuracy) {
          case 'IP':
            return 'based on your internet address';

          case 'DEVICE':
            return 'based on your device';

          default:
            return '';
        }
      }
    }, {
      key: "_doSearch",
      value: function _doSearch() {
        var query = this.core.globalStorage.getState(StorageKeys.QUERY);

        if (this._verticalKey) {
          var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
          var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
          var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
          this.core.verticalSearch(this._verticalKey, {
            input: query,
            filter: JSON.stringify(totalFilter),
            offset: this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0,
            facetFilter: JSON.stringify(facetFilter)
          });
        } else {
          this.core.search(query);
        }
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'search/locationbias';
      }
    }, {
      key: "type",
      get: function get() {
        return 'LocationBias';
      }
    }]);

    return LocationBiasComponent;
  }(Component);

  /** @module Facet */

  /**
   * Model representing a facet filter with the format of
   * {
   *   "field_name": [ Filters... ],
   *   ...
   * }
   *
   * @see {@link Filter}
   */
  var Facet =
  /*#__PURE__*/
  function () {
    function Facet() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Facet);

      Object.assign(this, data);
      Object.freeze(this);
    }
    /**
     * Create a facet filter from a list of Filters
     * @param  {...Filter} filters The filters to use in this facet
     * @returns {Facet}
     */


    _createClass(Facet, null, [{
      key: "fromFilters",
      value: function fromFilters() {
        var groups = {};

        for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
          filters[_key] = arguments[_key];
        }

        var flatFilters = filters.flatMap(function (f) {
          return f.$or || f;
        });
        flatFilters.forEach(function (f) {
          var key = Object.keys(f)[0];

          if (!groups[key]) {
            groups[key] = [];
          }

          groups[key].push(f);
        });
        return new Facet(groups);
      }
    }]);

    return Facet;
  }();

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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterBoxComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterBoxComponent).call(this, config, systemConfig));

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
       * Whether or not this filterbox contains dynamic filters. This affects the
       * the way the filters are used in the search
       * @type {boolean}
       * @private
       */

      _this._isDynamic = config.isDynamic || false;
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

        if (this._filterComponents.length) {
          this._filterComponents.forEach(function (c) {
            return c.remove();
          });

          this._filterComponents = [];
          this._filters = [];
        } // Initialize filters from configs


        var _loop = function _loop(i) {
          var config = _this2._filterConfigs[i];

          var component = _this2.componentManager.create(config.type, Object.assign({}, config, {
            parentContainer: _this2._container,
            name: "".concat(_this2.name, ".filter").concat(i),
            storeOnChange: false,
            container: ".js-yext-filterbox-filter".concat(i),
            onChange: function onChange(filter) {
              _this2.onFilterChange(i, filter);
            }
          }));

          component.mount();

          _this2._filterComponents.push(component);

          _this2._filters[i] = component.getFilter();

          _this2._saveFiltersToStorage();
        };

        for (var i = 0; i < this._filterConfigs.length; i++) {
          _loop(i);
        } // Initialize apply button


        if (!this._searchOnChange) {
          var button = DOM.query(this._container, this._applyButtonSelector);

          if (button) {
            DOM.on(button, 'click', function () {
              _this2._saveFiltersToStorage();

              _this2._search();
            });
          }
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
       * Remove all filter components along with this component
       */

    }, {
      key: "remove",
      value: function remove() {
        this._filterComponents.forEach(function (c) {
          return c.remove();
        });

        _get(_getPrototypeOf(FilterBoxComponent.prototype), "remove", this).call(this);
      }
      /**
       * Save current filters to storage to be used in the next search
       * @private
       */

    }, {
      key: "_saveFiltersToStorage",
      value: function _saveFiltersToStorage() {
        var validFilters = this._filters.filter(function (f) {
          return f !== undefined && f !== null && Object.keys(f).length > 0;
        });

        if (this._isDynamic) {
          var combinedFilter = Facet.fromFilters.apply(Facet, _toConsumableArray(validFilters));
          this.core.setFacetFilter(this.name, combinedFilter || {});
        } else {
          var _combinedFilter = validFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(validFilters)) : validFilters[0];

          this.core.setFilter(this.name, _combinedFilter || {});
        }
      }
      /**
       * Trigger a search with all filters in storage
       */

    }, {
      key: "_search",
      value: function _search() {
        var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
        var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
        var query = this.core.globalStorage.getState(StorageKeys.QUERY);
        var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
        this.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);
        this.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);
        this.core.verticalSearch(this._verticalKey, {
          input: query,
          filter: JSON.stringify(totalFilter),
          facetFilter: JSON.stringify(facetFilter)
        });
      }
    }], [{
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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterOptionsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterOptionsComponent).call(this, config, systemConfig));

      if (!config.control || !SUPPORTED_CONTROLS.includes(config.control)) {
        throw new AnswersComponentError('FilterOptions requires a valid "control" to be provided', 'FilterOptions');
      }

      if (!config.options) {
        throw new AnswersComponentError('FilterOptions component requires options to be provided', 'FilterOptions');
      }

      var previousOptions = _this.core.globalStorage.getState(_this.name);

      if (typeof previousOptions === 'string') {
        try {
          previousOptions = JSON.parse(previousOptions);
        } catch (e) {}
      }

      var selectedOptions = previousOptions || [];
      /**
       * The list of filter options to display with checked status
       * @type {object[]}
       * @private
       */

      _this._options = config.options.map(function (o) {
        return _objectSpread({}, o, {
          selected: selectedOptions.length ? selectedOptions.includes(o.label) : o.selected
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
          name: this.name.toLowerCase(),
          options: this._options,
          label: this._label
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        DOM.delegate(DOM.query(this._container, ".".concat(this._control, "-fieldset")), this._optionSelector, 'click', function (event) {
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
      value: function _updateOption(index, selected) {
        if (this._control === 'singleoption') {
          this._options = this._options.map(function (o) {
            return Object.assign({}, o, {
              selected: false
            });
          });
        }

        this._options[index] = Object.assign({}, this._options[index], {
          selected: selected
        });
        this.setState();
      }
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this._buildFilter();
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
          return o.selected;
        }).map(function (o) {
          return o.filter ? o.filter : Filter.equal(o.field, o.value);
        });

        this.core.persistentStorage.set(this.name, this._options.filter(function (o) {
          return o.selected;
        }).map(function (o) {
          return o.label;
        }));
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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, RangeFilterComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeFilterComponent).call(this, config, systemConfig));
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

      var minVal = _this.core.globalStorage.getState("".concat(_this.name, ".min"));

      if (typeof minVal === 'string') {
        try {
          minVal = Number.parseInt(minVal);
        } catch (e) {}
      }

      var maxVal = _this.core.globalStorage.getState("".concat(_this.name, ".max"));

      if (typeof minVal === 'string') {
        try {
          maxVal = Number.parseInt(maxVal);
        } catch (e) {}
      }
      /**
       * The current range represented
       * @type {object}
       * @private
       */


      _this._range = {
        min: minVal || config.initialMin || 0,
        max: maxVal || config.initialMax || 10
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
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this._buildFilter();
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

        this.core.persistentStorage.set("".concat(this.name, ".min"), this._range.min);
        this.core.persistentStorage.set("".concat(this.name, ".max"), this._range.max);

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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DateRangeFilterComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangeFilterComponent).call(this, config, systemConfig));
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

      var minDate = _this.core.globalStorage.getState("".concat(_this.name, ".min"));

      var maxDate = _this.core.globalStorage.getState("".concat(_this.name, ".max"));
      /**
       * The current date range
       * @private
       */


      _this._date = {
        min: minDate || config.initialMin || todayString,
        max: maxDate || config.initialMax || todayString
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
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this._buildFilter();
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

        this.core.persistentStorage.set("".concat(this.name, ".min"), this._date.min);
        this.core.persistentStorage.set("".concat(this.name, ".max"), this._date.max);

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

  /**
   * Displays a set of dynamic filters returned from the backend
   * @extends Component
   */

  var DynamicFiltersComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DynamicFiltersComponent, _Component);

    function DynamicFiltersComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DynamicFiltersComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicFiltersComponent).call(this, config, systemConfig));
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

      _this._applyButtonSelector = config.applyButtonSelector || null;
      /**
       * The controls to use for each field. Each type of filter has a default
       * $eq : multioption (checkbox)
       * @type {Object}
       */

      _this._fieldControls = config.fieldControls || {};
      /**
       * The template to render
       * @type {string}
       * @private
       */

      _this._templateName = 'filters/dynamic';
      /**
       * An internal reference for the data storage to listen for updates from the server
       * @type {string}
       */

      _this.moduleId = StorageKeys.DYNAMIC_FILTERS;
      /**
       * The filter box that displays the dynamic filters
       * @type {FilterBoxComponent}
       * @private
       */

      _this._filterbox = null;
      return _this;
    }

    _createClass(DynamicFiltersComponent, [{
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        this.core.enableDynamicFilters();

        if (this._filterbox) {
          this._filterbox.remove();
        }

        var _this$_state$get = this._state.get(),
            filters = _this$_state$get.filters;

        if (!filters) {
          return;
        }

        filters = filters.map(function (f) {
          return Object.assign({}, f, {
            type: 'FilterOptions',
            control: _this2._fieldControls[f.fieldId] || 'multioption'
          });
        });
        this._filterbox = this.componentManager.create('FilterBox', Object.assign({}, {
          parentContainer: this._container,
          name: "".concat(this.name, ".filterbox"),
          container: '.js-yext-dynamic-filters',
          searchOnChange: this._searchOnChange,
          verticalKey: this._verticalKey,
          isDynamic: true,
          filters: filters
        }));

        this._filterbox.mount();
      }
    }], [{
      key: "type",
      get: function get() {
        return 'DynamicFilters';
      }
    }]);

    return DynamicFiltersComponent;
  }(Component);

  var METERS_PER_MILE = 1609.344;
  var DEFAULT_CONFIG = {
    /**
     * The radius, in miles, around the user's location to find results.
     * If location accuracy is low, a larger radius may be used automatically
     * @type {number}
     */
    radius: 50,

    /**
     * The vertical key to use
     * @type {string}
     */
    verticalKey: null,

    /**
     * If true, submits a search when the value is changed
     * @type {boolean}
     */
    searchOnChange: false,

    /**
     * The title to display
     * @type {string}
     */
    title: 'Location',

    /**
     * The label to display
     * @type {string}
     */
    label: 'Location',

    /**
     * The icon url to show in the geo button
     * @type {string}
     */
    geoButtonIcon: '',

    /**
     * The text to show in the geo button
     * @type {string}
     */
    geoButtonText: 'Use My Location',

    /**
     * The text to show when geolocation is enabled
     * @type {string}
     */
    enabledText: 'Current Location',

    /**
     * The text to show when loading the user's location
     * @type {string}
     */
    loadingText: 'Finding Your Location...',

    /**
     * The text to show if the user's location cannot be found
     * @type {string}
     */
    errorText: 'Could Not Find Your Location',

    /**
     * The CSS selector of the toggle button
     * @type {string}
     */
    buttonSelector: '.js-yxt-GeoLocationFilter-button',

    /**
     * The CSS selector of the query input
     * @type {string}
     */
    inputSelector: '.js-yxt-GeoLocationFilter-input'
  };
  /**
   * Renders a button that when clicked adds a static filter representing the user's location
   * @extends Component
   */

  var GeoLocationComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GeoLocationComponent, _Component);

    function GeoLocationComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, GeoLocationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GeoLocationComponent).call(this, _objectSpread({}, DEFAULT_CONFIG, {}, config), systemConfig));
      /**
       * The query string to use for the input box, provided to template for rendering.
       * @type {string}
       */

      _this.query = _this.core.globalStorage.getState("".concat(StorageKeys.QUERY, ".").concat(_this.name)) || '';

      _this.core.globalStorage.on('update', "".concat(StorageKeys.QUERY, ".").concat(_this.name), function (q) {
        _this.query = q;

        _this.setState();
      });
      /**
       * The filter to use for the current query
       * @type {Filter}
       */


      _this.filter = _this.core.globalStorage.getState("".concat(StorageKeys.FILTER, ".").concat(_this.name)) || {};

      if (typeof _this.filter === 'string') {
        try {
          _this.filter = JSON.parse(_this.filter);
        } catch (e) {}
      }

      _this.core.globalStorage.on('update', "".concat(StorageKeys.FILTER, ".").concat(_this.name), function (f) {
        _this.filter = f;
      });

      return _this;
    }

    _createClass(GeoLocationComponent, [{
      key: "setState",
      value: function setState(data) {
        var placeholder = '';

        if (this._enabled) {
          placeholder = this._config.enabledText;
        }

        if (data.geoLoading) {
          placeholder = this._config.loadingText;
        }

        if (data.geoError) {
          placeholder = this._config.errorText;
        }

        _get(_getPrototypeOf(GeoLocationComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          title: this._config.title,
          geoEnabled: this._enabled,
          query: this.query,
          labelText: this._config.label,
          enabledText: this._config.enabledText,
          loadingText: this._config.loadingText,
          errorText: this._config.errorText,
          geoButtonIcon: this._config.geoButtonIcon,
          geoValue: this._enabled || data.geoLoading || data.geoError ? '' : this.query,
          geoPlaceholder: placeholder,
          geoButtonText: this._config.geoButtonText
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._initAutoComplete(this._config.inputSelector);

        DOM.on(this._config.buttonSelector, 'click', function () {
          return _this2._toggleGeoFilter();
        });
      }
      /**
       * A helper method to wire up our auto complete on an input selector
       * @param {string} inputSelector CSS selector to bind our auto complete component to
       * @private
       */

    }, {
      key: "_initAutoComplete",
      value: function _initAutoComplete(inputSelector) {
        var _this3 = this;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._autocomplete = this.componentManager.create('AutoComplete', {
          parentContainer: this._container,
          name: "".concat(this.name, ".autocomplete"),
          isFilterSearch: true,
          container: '.js-yxt-GeoLocationFilter-autocomplete',
          originalQuery: this.query,
          originalFilter: this.filter,
          inputEl: inputSelector,
          verticalKey: this._verticalKey,
          onSubmit: function onSubmit(query, filter) {
            _this3.query = query;
            _this3.filter = Filter.fromResponse(filter);

            _this3._saveDataToStorage(query, _this3.filter);

            _this3._enabled = false;
          }
        });
      }
      /**
       * Toggles the static filter representing the user's location
       * @private
       */

    }, {
      key: "_toggleGeoFilter",
      value: function _toggleGeoFilter() {
        var _this4 = this;

        if (!navigator.geolocation) {
          this.setState({
            geoError: true
          });
          return;
        }

        if (!this._enabled) {
          this.setState({
            geoLoading: true
          });
          navigator.geolocation.getCurrentPosition(function (position) {
            var filter = _this4._buildFilter(position);

            _this4._saveDataToStorage('', filter, position);

            _this4._enabled = true;

            _this4.setState({});

            _this4.core.persistentStorage["delete"]("".concat(StorageKeys.QUERY, ".").concat(_this4.name));

            _this4.core.persistentStorage["delete"]("".concat(StorageKeys.FILTER, ".").concat(_this4.name));
          }, function () {
            return _this4.setState({
              geoError: true
            });
          });
        }
      }
      /**
       * Saves the provided filter under this component's name
       * @param {string} query The query to save
       * @param {Filter} filter The filter to save
       * @param {Object} position The position to save
       * @private
       */

    }, {
      key: "_saveDataToStorage",
      value: function _saveDataToStorage(query, filter, position) {
        this.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(this.name), query);
        this.core.persistentStorage.set("".concat(StorageKeys.FILTER, ".").concat(this.name), filter);
        this.core.setFilter(this.name, filter);

        if (position) {
          this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            radius: position.coords.accuracy
          });
        }

        if (this._config.searchOnChange) {
          var filters = this.core.globalStorage.getAll(StorageKeys.FILTER);
          var totalFilter = filters[0];

          if (filters.length > 1) {
            totalFilter = Filter.and.apply(Filter, _toConsumableArray(filters));
          }

          var searchQuery = this.core.globalStorage.getState(StorageKeys.QUERY) || '';
          var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
          this.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);
          this.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);
          this.core.verticalSearch(this._config.verticalKey, {
            input: searchQuery,
            filter: JSON.stringify(totalFilter),
            facetFilter: JSON.stringify(facetFilter)
          });
        }
      }
      /**
       * Given a position, construct a Filter object
       * @param {Postition} position The position
       * @returns {Filter}
       * @private
       */

    }, {
      key: "_buildFilter",
      value: function _buildFilter(position) {
        var _position$coords = position.coords,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude,
            accuracy = _position$coords.accuracy;
        var radius = Math.max(accuracy, this._config.radius * METERS_PER_MILE);
        return Filter.position(latitude, longitude, radius);
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'controls/geolocation';
      }
    }, {
      key: "type",
      get: function get() {
        return 'GeoLocationFilter';
      }
    }]);

    return GeoLocationComponent;
  }(Component);

  /**
   * EventTypes are explicit strings defined
   * for what the server expects for analytics.
   *
   * @enum
   */

  var EventTypes = {
    THUMBS_UP: 'THUMBS_UP',
    THUMBS_DOWN: 'THUMBS_DOWN'
  };

  var DirectAnswerComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DirectAnswerComponent, _Component);

    function DirectAnswerComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DirectAnswerComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DirectAnswerComponent).call(this, config, systemConfig));
      /**
       * Recieve updates from storage based on this index
       * @type {StorageKey}
       */

      _this.moduleId = StorageKeys.DIRECT_ANSWER;
      /**
       * The form used for submitting the feedback
       * @type {string}
       */

      _this._formEl = config.formEl || '.js-directAnswer-feedback-form';
      /**
       * The `thumbs up` css selector to bind ui interaction to for reporting
       * @type {string}
       */

      _this._thumbsUpSelector = config.thumbsUpSelector || '.js-directAnswer-thumbUp';
      /**
       * The `thumbs down` css selector to bind ui interaction to for reporting
       * @type {string}
       */

      _this._thumbsDownSelector = config.thumbsDownSelector || '.js-directAnswer-thumbDown';
      /**
       * The display text for the View Details click to action link
       * @type {string}
       */

      _this._viewDetailsText = config.viewDetailsText || 'View Details';
      return _this;
    }

    _createClass(DirectAnswerComponent, [{
      key: "beforeMount",

      /**
       * beforeMount, only display the direct answer component if it has data
       */
      value: function beforeMount() {
        if (!this.hasState('answer')) {
          return false;
        }

        return true;
      }
      /**
       * When the DOM is constructed,
       * we want to wire up the behavior for interacting with the quality feedback reporting (thumbsup/down)
       */

    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        // Avoid bindings if the feedback has previously been submitted
        if (this.getState('feedbackSubmitted') === true) {
          return this;
        } // For WCAG compliance, the feedback should be a submittable form


        DOM.on(this._formEl, 'submit', function (e) {
          var formEl = e.target;
          var checkedValue = DOM.query(formEl, 'input:checked').value === 'true';

          _this2.reportQuality(checkedValue);

          _this2.updateState({
            'feedbackSubmitted': true
          });
        }); // Is this actually necessary? I guess it's only necessary if the
        // submit button is hidden.

        DOM.on(this._thumbsUpSelector, 'click', function () {
          DOM.trigger(_this2._formEl, 'submit');
        });
        DOM.on(this._thumbsDownSelector, 'click', function () {
          DOM.trigger(_this2._formEl, 'submit');
        });
      }
      /**
       * updateState enables for partial updates (the delta between the old and new)
       * @type {object} The new state to apply to the old
       */

    }, {
      key: "updateState",
      value: function updateState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var newState = Object.assign({}, this.getState(), state);
        this.setState(newState);
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(DirectAnswerComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          eventOptions: this.eventOptions(data),
          viewDetailsText: this._viewDetailsText
        }));
      }
    }, {
      key: "eventOptions",
      value: function eventOptions(data) {
        if (!data || Object.keys(data).length === 0) {
          return data;
        }

        return JSON.stringify({
          verticalConfigId: data.relatedItem.verticalConfigId,
          searcher: 'UNIVERSAL',
          entityId: data.relatedItem.data.id,
          ctaLabel: this._viewDetailsText.toUpperCase().replace(' ', '_')
        });
      }
      /**
       * reportQuality will send the quality feedback to analytics
       * @param {boolean} isGood true if the answer is what you were looking for
       */

    }, {
      key: "reportQuality",
      value: function reportQuality(isGood) {
        var eventType = isGood === true ? EventTypes.THUMBS_UP : EventTypes.THUMBS_DOWN;
        var event = new AnalyticsEvent(eventType).addOptions({
          'directAnswer': true
        });
        this.analyticsReporter.report(event);
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
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ResultsItemComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsItemComponent).call(this, opts, systemConfig));
      /**
       * verticalConfigId used for analytics and passed to children
       * @type {string}
       * @private
       */

      _this._verticalConfigId = opts.verticalConfigId;
      /**
       * isUniversal is used for analytics and passed to children and is set to
       * true if this component is added by the UniversalResultsComponent
       * @type {boolean}
       * @private
       */

      _this._isUniversal = opts.isUniversal || false;
      return _this;
    }

    _createClass(ResultsItemComponent, [{
      key: "eventOptions",

      /**
       * helper to construct the eventOptions object for the title link
       * @param entityId The ID of the result item, if present
       * @param url The url of the result item, if present
       * @returns {string}
       */
      value: function eventOptions(entityId, url) {
        var options = {
          verticalConfigId: this._verticalConfigId,
          searcher: this._isUniversal ? 'UNIVERSAL' : 'VERTICAL'
        };

        if (entityId) {
          options.entityId = entityId;
        } else {
          options.url = url;
        }

        return JSON.stringify(options);
      }
      /**
       * passes eventOptions to the viewModel
       * @override
       * @param data
       * @returns {ResultsItemComponent}
       */

    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(ResultsItemComponent.prototype), "setState", this).call(this, Object.assign(data, {
          eventOptions: this.eventOptions(data.id, data.link)
        }));
      }
    }], [{
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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, LocationResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(LocationResultsItemComponent).call(this, opts, systemConfig));
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
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, EventResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventResultsItemComponent).call(this, opts, systemConfig));
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
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, PeopleResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(PeopleResultsItemComponent).call(this, opts, systemOpts));
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
   * in order to integrate with a Third Party Map provider for
   * interactive maps. MapProviders are used by the MapComponent.
   *
   * Implementations should extend this interface.
   */
  var MapProvider =
  /*#__PURE__*/
  function () {
    function MapProvider() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MapProvider);

      /**
       * The API Key used for interacting with the map provider
       * @type {string}
       */
      this._apiKey = config.apiKey;
      /**
       * The zoom level of the map, defaults to 14
       * @type {number}
       */

      this._zoom = config.zoom || 14;
      /**
       * The default coordinates to display if there are no results returned
       * Only used if showEmptyMap is set to true
       * @type {Object}
       */

      this._defaultPosition = config.defaultPosition || {
        lat: 37.0902,
        lng: -95.7129
      };
      /**
       * Determines if an empty map should be shown when there are no results
       * @type {boolean}
       */

      this._showEmptyMap = config.showEmptyMap || false;
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
       * Callback to invoke when a pin is clicked. The clicked item(s) are passed to the callback
       * @type {function}
       */

      this._onPinClick = config.onPinClick || null;
      /**
       * Callback to invoke once the Javascript is loaded
       * @type {function}
       */

      this._onLoaded = config.onLoaded || function () {};
      /**
       * The custom configuration override to use for the map markers
       * @type {Object|Function}
       */


      this._pinConfig = typeof config.pin === 'function' ? config.pin : Object.assign(MapProvider.DEFAULT_PIN_CONFIG, config.pin);
      /**
       * Determines whether or not to collapse pins at the same lat/lng
       * @type {boolean}
       */

      this._collapsePins = config.collapsePins || false;
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
      key: "init",
      value: function init(mapData) {
        // TODO(billy) This should be based off a promise that gets created from loadJS
        throw new Error('Unimplemented Method: init');
      }
      /**
       * Given a list of markers, combine markers with the same lat/lng into a single marker
       * @param {object[]} markers The markers to collapse
       */

    }, {
      key: "_collapseMarkers",
      value: function _collapseMarkers(markers) {
        var locationToItem = {};
        markers.forEach(function (m) {
          locationToItem["".concat(m.latitude).concat(m.longitude)] ? locationToItem["".concat(m.latitude).concat(m.longitude)].push(m) : locationToItem["".concat(m.latitude).concat(m.longitude)] = [m];
        });
        var collapsedMarkers = [];

        for (var _i = 0, _Object$entries = Object.entries(locationToItem); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              _markers = _Object$entries$_i[1];

          if (_markers.length > 1) {
            var collapsedMarker = {
              item: _markers.map(function (m) {
                return m.item;
              }),
              label: _markers.length,
              latitude: _markers[0].latitude,
              longitude: _markers[0].longitude
            };
            collapsedMarkers.push(collapsedMarker);
          } else {
            collapsedMarkers.push(_markers[0]);
          }
        }

        return collapsedMarkers;
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

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GoogleMapProvider).call(this, opts)); // normalize because google's zoom is effectively 1 unit of difference away from mapbox zoom

      _this._zoomOffset = 1;
      _this._zoom += _this._zoomOffset;
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
          this._isLoaded = true;

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
          src: "https://maps.googleapis.com/maps/api/js?".concat(this.generateCredentials())
        });
        DOM.append('body', script);
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
        return this._clientId;
      }
    }, {
      key: "init",
      value: function init(el, mapData) {
        var _this3 = this;

        if ((!mapData || mapData.mapMarkers.length <= 0) && !this._showEmptyMap) {
          this._map = null;
          return this;
        } // NOTE(billy) This timeout is a hack for dealing with async nature.
        // Only here for demo purposes, so we'll fix later.


        setTimeout(function () {
          var container = DOM.query(el);
          _this3.map = new google.maps.Map(container, {
            zoom: _this3._zoom,
            center: _this3.getCenterMarker(mapData)
          }); // Apply our search data to our GoogleMap

          if (mapData && mapData.mapMarkers.length) {
            (function () {
              var collapsedMarkers = _this3._collapsePins ? _this3._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
              var googleMapMarkerConfigs = GoogleMapMarkerConfig.from(collapsedMarkers, _this3._pinConfig, _this3.map);
              var bounds = new google.maps.LatLngBounds();

              var _loop = function _loop(i) {
                var marker = new google.maps.Marker(googleMapMarkerConfigs[i]);

                if (_this3._onPinClick) {
                  marker.addListener('click', function () {
                    return _this3._onPinClick(collapsedMarkers[i].item);
                  });
                }

                bounds.extend(marker.position);
              };

              for (var i = 0; i < googleMapMarkerConfigs.length; i++) {
                _loop(i);
              }

              if (googleMapMarkerConfigs.length >= 2) {
                _this3.map.fitBounds(bounds);
              }
            })();
          }
        }, 100);
      }
    }, {
      key: "getCenterMarker",
      value: function getCenterMarker(mapData) {
        return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude ? {
          lng: mapData.mapCenter.longitude,
          lat: mapData.mapCenter.latitude
        } : {
          lng: this._defaultPosition.lng,
          lat: this._defaultPosition.lat
        };
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
       * @param {object[]} markers The data of the marker
       * @param {(Object|function)} pinConfig The configuration to apply to the marker
       * @param {GoogleMap} map reference to the google map to apply the marker to
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
            icon.scaledSize = new google.maps.Size(pinConfigObj.scaledSize.w, pinConfigObj.scaledSize.h);
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

            if (typeof _this._onLoaded === 'function') {
              _this._onLoaded();
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
      key: "init",
      value: function init(el, mapData) {
        var _this2 = this;

        if ((!mapData || mapData.mapMarkers.length <= 0) && !this._showEmptyMap) {
          this._map = null;
          return this;
        }

        var container = DOM.query(el);
        this._map = new mapboxgl.Map({
          container: container,
          zoom: this._zoom,
          style: 'mapbox://styles/mapbox/streets-v9',
          center: this.getCenterMarker(mapData)
        });

        if (mapData && mapData.mapMarkers.length) {
          (function () {
            var collapsedMarkers = _this2._collapsePins ? _this2._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
            var mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(collapsedMarkers, _this2._pinConfig, _this2._map);
            var bounds = new mapboxgl.LngLatBounds();

            var _loop = function _loop(i) {
              var wrapper = mapboxMapMarkerConfigs[i].wrapper;
              var coords = new mapboxgl.LngLat(mapboxMapMarkerConfigs[i].position.longitude, mapboxMapMarkerConfigs[i].position.latitude);
              var marker = new mapboxgl.Marker(wrapper).setLngLat(coords);
              bounds.extend(marker.getLngLat());
              marker.addTo(_this2._map);

              if (_this2._onPinClick) {
                marker.getElement().addEventListener('click', function () {
                  return _this2._onPinClick(collapsedMarkers[i].item);
                });
              }
            };

            for (var i = 0; i < mapboxMapMarkerConfigs.length; i++) {
              _loop(i);
            }

            if (mapboxMapMarkerConfigs.length >= 2) {
              _this2._map.fitBounds(bounds, {
                padding: 50
              });
            }
          })();
        }
      }
    }, {
      key: "getCenterMarker",
      value: function getCenterMarker(mapData) {
        return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude ? [mapData.mapCenter.longitude, mapData.mapCenter.latitude] : {
          lng: this._defaultPosition.lng,
          lat: this._defaultPosition.lat
        };
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
       * Converts the storage data model of markers into MapBoxMarkerConfig
       * @param {MapBox} A reference to the mapbox map to apply the marker to
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
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, MapComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MapComponent).call(this, opts, systemOpts));
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

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsComponent).call(this, config, systemConfig));
      /**
       * verticalConfigId used for analytics and passed to children
       * @type {string}
       * @private
       */

      _this._verticalConfigId = config.verticalConfigId;
      /**
       * isUniversal is set to true if this component is added by the UniversalResultsComponent
       * @type {boolean}
       * @private
       */

      _this._isUniversal = config.isUniversal || false;
      _this.moduleId = StorageKeys.VERTICAL_RESULTS;
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

      if (config.renderItem === undefined && config._parentOpts !== undefined) {
        config.renderItem = config._parentOpts.renderItem;
      }

      if (config.itemTemplate === undefined && config._parentOpts !== undefined) {
        config.itemTemplate = config._parentOpts.itemTemplate;
      }

      _this.configureItem({
        render: config.renderItem,
        template: config.itemTemplate
      });
      /**
       * The url to the universal page for the no results page to link back to with current query
       * @type {string|null}
       */


      _this._universalUrl = config.universalUrl;
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
        var results = data.results || [];
        var searchState = data.searchState || SearchStates.PRE_SEARCH;
        return _get(_getPrototypeOf(ResultsComponent.prototype), "setState", this).call(this, Object.assign({
          results: []
        }, data, {
          isPreSearch: searchState === SearchStates.PRE_SEARCH,
          isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
          isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
          includeMap: this._config.includeMap,
          mapConfig: this._config.mapConfig,
          eventOptions: this.eventOptions(),
          universalUrl: this._universalUrl ? this._universalUrl + window.location.search : '',
          showNoResults: results.length === 0,
          query: this.core.globalStorage.getState(StorageKeys.QUERY)
        }), val);
      }
      /**
       * helper to construct the eventOptions object for the view all link
       * @returns {string}
       */

    }, {
      key: "eventOptions",
      value: function eventOptions() {
        return JSON.stringify({
          verticalConfigId: this._verticalConfigId
        });
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


        var comp = _get(_getPrototypeOf(ResultsComponent.prototype), "addChild", this).call(this, data, type, Object.assign(opts, {
          verticalConfigId: this._verticalConfigId,
          isUniversal: this._isUniversal
        }));

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

  var AccordionResultsComponent =
  /*#__PURE__*/
  function (_ResultsComponent) {
    _inherits(AccordionResultsComponent, _ResultsComponent);

    function AccordionResultsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AccordionResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionResultsComponent).call(this, config, systemConfig));
      /**
       * base selector to use when finding DOM targets
       * @type {string}
       */

      _this._selectorBase = config.selectorBase || '.js-yxt-AccordionResult';
      /**
       * collapsed state class
       * @type {string}
       */

      _this.collapsedClass = config.collapsedClass || 'is-collapsed';
      /**
       * vertical config id is required for analytics
       * @type {string|null}
       */

      _this.verticalConfigId = config.verticalConfigId || config._parentOpts.verticalConfigId || null;
      return _this;
    }
    /**
     * the component type
     * @returns {string}
     * @override
     */


    _createClass(AccordionResultsComponent, [{
      key: "onMount",

      /**
       * overrides onMount to add bindings to change the height on click
       * @returns {AccordionResultsComponent}
       * @override
       */
      value: function onMount() {
        var _this2 = this;

        _get(_getPrototypeOf(AccordionResultsComponent.prototype), "onMount", this).call(this);

        var accordionEls = DOM.queryAll(this._container, this._selectorBase);
        accordionEls.forEach(function (accordionEl) {
          var toggleEl = DOM.query(accordionEl, _this2.toggleSelector());
          var contentEl = DOM.query(accordionEl, _this2.bodySelector());

          _this2.changeHeight(contentEl, accordionEl);

          toggleEl.addEventListener('click', function () {
            _this2.handleClick(accordionEl, toggleEl, contentEl);
          });
        });
        return this;
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(AccordionResultsComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          modifier: this.verticalConfigId
        }));
      }
      /**
       * click handler for the accordion toggle button
       * @param wrapperEl {HTMLElement} the toggle container
       * @param toggleEl {HTMLElement} the button
       * @param contentEl {HTMLElement} the toggle target
       */

    }, {
      key: "handleClick",
      value: function handleClick(wrapperEl, toggleEl, contentEl) {
        var event = new AnalyticsEvent(this.isCollapsed(wrapperEl) ? 'ROW_EXPAND' : 'ROW_COLLAPSE').addOptions({
          verticalConfigId: this.verticalConfigId,
          entityId: toggleEl.dataset.entityId
        });
        wrapperEl.classList.toggle(this.collapsedClass);
        this.changeHeight(contentEl, wrapperEl);
        toggleEl.setAttribute('aria-expanded', this.isCollapsed(wrapperEl) ? 'false' : 'true');
        this.analyticsReporter.report(event);
      }
      /**
       * returns true if the element is currently collapsed
       * @param wrapperEl {HTMLElement} the toggle container
       * @returns {boolean}
       */

    }, {
      key: "isCollapsed",
      value: function isCollapsed(wrapperEl) {
        if (!wrapperEl) {
          return false;
        }

        return wrapperEl.classList.contains(this.collapsedClass);
      }
      /**
       * toggles the height between 0 and the content height for smooth animation
       * @param targetEl {HTMLElement}
       * @param wrapperEl {HTMLElement}
       */

    }, {
      key: "changeHeight",
      value: function changeHeight(targetEl, wrapperEl) {
        targetEl.style.height = "".concat(this.isCollapsed(wrapperEl) ? 0 : targetEl.scrollHeight, "px");
      }
      /**
       * helper for composing child element selectors
       * @param child {string}
       * @returns {string}
       */

    }, {
      key: "buildSelector",
      value: function buildSelector(child) {
        return "".concat(this._selectorBase).concat(child);
      }
      /**
       * helper for the toggle button selector
       * @returns {string}
       */

    }, {
      key: "toggleSelector",
      value: function toggleSelector() {
        return this.buildSelector('-toggle');
      }
      /**
       * helper for the content element selector
       * @returns {string}
       */

    }, {
      key: "bodySelector",
      value: function bodySelector() {
        return this.buildSelector('-body');
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/resultsaccordion';
      }
    }, {
      key: "type",
      get: function get() {
        return 'AccordionResults';
      }
    }]);

    return AccordionResultsComponent;
  }(ResultsComponent);

  var UniversalResultsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(UniversalResultsComponent, _Component);

    function UniversalResultsComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, UniversalResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(UniversalResultsComponent).call(this, opts, systemOpts));
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
        var sections = data.sections || [];
        var searchState = data.searchState || SearchStates.PRE_SEARCH;
        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "setState", this).call(this, Object.assign({
          sections: []
        }, data, {
          isPreSearch: searchState === SearchStates.PRE_SEARCH,
          isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
          isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
          showNoResults: sections.length === 0,
          query: this.core.globalStorage.getState(StorageKeys.QUERY)
        }), val);
      }
    }, {
      key: "addChild",
      value: function addChild() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var type = arguments.length > 1 ? arguments[1] : undefined;
        var opts = arguments.length > 2 ? arguments[2] : undefined;

        var childOpts = _objectSpread({}, opts, {}, this.getChildConfig([data['verticalConfigId']]));

        if (childOpts.useAccordion === true) {
          return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "addChild", this).call(this, data, AccordionResultsComponent.type, childOpts);
        }

        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "addChild", this).call(this, data, type, childOpts);
      }
    }, {
      key: "getChildConfig",
      value: function getChildConfig(configId) {
        var defaultConfig = {
          verticalConfigId: configId,
          isUniversal: true
        };
        var config = this._config.config;

        if (config === undefined) {
          return defaultConfig;
        }

        return Object.assign(defaultConfig, this._config['config'][configId] || this._config['config']);
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

  var PaginationComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(PaginationComponent, _Component);

    function PaginationComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, PaginationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PaginationComponent).call(this, config, systemConfig));
      /**
       * The vertical key to use for searches
       * @type {string}
       * @private
       */

      _this._verticalKey = _this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey;

      if (typeof _this._verticalKey !== 'string') {
        throw new AnswersComponentError('verticalKey not provided, but necessary for pagination', 'PaginationComponent');
      }
      /**
       * If true, displays the first page button
       * @type {boolean}
       * @private
       */


      _this._firstPageButtonEnabled = config.showFirst === undefined ? true : config.showFirst;
      /**
       * If true, displays the last page button
       * @type {boolean}
       * @private
       */

      _this._lastPageButtonEnabled = config.showLast === undefined ? true : config.showLast;
      /**
       * Options to include with all analytic events sent by this component
       * @type {object}
       * @private
       */

      _this._analyticsOptions = {
        verticalKey: _this._verticalKey
      };
      var offset = _this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;

      _this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, Number(offset));

      _this.core.globalStorage.on('update', StorageKeys.SEARCH_OFFSET, function (offset) {
        if (typeof offset === 'number') {
          return;
        }

        _this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, Number(offset));
      });

      _this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, function (results) {
        if (results.searchState === SearchStates.SEARCH_COMPLETE) {
          _this.setState();
        }
      });

      return _this;
    }

    _createClass(PaginationComponent, [{
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        var results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
        var limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
        var showControls = results.searchState === 'search-complete' && results.resultsCount > limit;
        var offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;

        if (!showControls) {
          return;
        }

        var previousPageButton = DOM.query(this._container, '.js-yxt-Pagination-previous');
        var nextPageButton = DOM.query(this._container, '.js-yxt-Pagination-next');
        var maxPage = Math.trunc((results.resultsCount - 1) / limit);
        DOM.on(previousPageButton, 'click', function () {
          return _this2.updatePage(offset - limit);
        });
        DOM.on(nextPageButton, 'click', function () {
          return _this2.updatePage(offset + limit);
        });

        if (this._firstPageButtonEnabled) {
          var firstPageButton = DOM.query(this._container, '.js-yxt-Pagination-first');
          DOM.on(firstPageButton, 'click', function () {
            return _this2.updatePage(0);
          });
        }

        if (this._lastPageButtonEnabled) {
          var lastPageButton = DOM.query(this._container, '.js-yxt-Pagination-last');
          DOM.on(lastPageButton, 'click', function () {
            return _this2.updatePage(maxPage * limit);
          });
        }
      }
    }, {
      key: "updatePage",
      value: function updatePage(offset) {
        this.scrollToTop();
        this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, offset);
        this.core.persistentStorage.set(StorageKeys.SEARCH_OFFSET, offset);
        this.core.verticalPage(this._verticalKey, offset);
      }
    }, {
      key: "scrollToTop",
      value: function scrollToTop() {
        document.documentElement.scrollTop = 0; // Safari

        document.body.scrollTop = 0;
      }
    }, {
      key: "setState",
      value: function setState(data) {
        var results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
        var offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
        var limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
        var pageNumber = offset / limit;
        var showControls = results.searchState === 'search-complete' && results.resultsCount > limit;
        var isMoreResults = results.resultsCount > offset + limit;
        var maxPage = Math.trunc((results.resultsCount - 1) / limit);
        return _get(_getPrototypeOf(PaginationComponent.prototype), "setState", this).call(this, _objectSpread({
          showControls: showControls,
          firstPageButtonEnabled: this._firstPageButtonEnabled,
          lastPageButtonEnabled: this._lastPageButtonEnabled,
          pageNumber: pageNumber + 1,
          showFirstPageButton: pageNumber > 1,
          showPreviousPageButton: pageNumber > 0,
          showNextPageButton: isMoreResults,
          showLastPageButton: pageNumber < maxPage - 1
        }, data));
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'results/pagination';
      }
    }, {
      key: "type",
      get: function get() {
        return 'Pagination';
      }
    }]);

    return PaginationComponent;
  }(Component);

  /**
   * Configurable options for the component
   * @type {Object}
   */

  var DEFAULT_CONFIG$1 = {
    /**
     * The entity identifier that the question is associated with.
     * This is typically an organization object
     * @type {number}
     */
    'entityId': null,

    /**
     * The default language of the question
     * @type {string}
     */
    'language': 'EN',

    /**
     * The main CSS selector used to reference the form for the component.
     * @type {string} CSS selector
     */
    'formSelector': 'form',

    /**
     * An optional label to use for the e-mail address input
     * @type {string}
     */
    'emailLabel': 'Email Address:',

    /**
     * An optional label to use for the name input
     * @type {string}
     */
    'nameLabel': 'Name:',

    /**
     * An optional label to use for the question
     * @type {string}
     */
    'questionLabel': 'What is your question?',

    /**
     * An optional label to use for the Privacy Policy
     * @type {string}
     */
    'privacyPolicyLabel': 'I agree to our Privacy Policy:',

    /**
     * The label to use for the Submit button
     * @type {string}
     */
    'buttonLabel': 'Submit'
  };
  /**
   * QuestionSubmissionComponent is a component that creates a form
   * thats displayed whenever a query is run. It enables the user
   * to submit questions that they cant find the answer for.
   */

  var QuestionSubmissionComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(QuestionSubmissionComponent, _Component);

    function QuestionSubmissionComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, QuestionSubmissionComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestionSubmissionComponent).call(this, Object.assign({}, DEFAULT_CONFIG$1, config), systemConfig));
      /**
       * Reference to the storage model
       * @type {string}
       */

      _this.moduleId = StorageKeys.QUESTION_SUBMISSION;
      /**
       * NOTE(billy) if this is a pattern we want to follow for configuration
       * we should bake it into the core class.
       */

      _this.validateConfig();

      return _this;
    }
    /**
     * The template to render
     * @returns {string}
     * @override
     */


    _createClass(QuestionSubmissionComponent, [{
      key: "validateConfig",

      /**
       * validationConfig contains a bunch of rules
       * that are used to validate aginst configuration provided by the user
       */
      value: function validateConfig() {
        if (this._config.entityId === null || this._config.entityId === undefined) {
          throw new AnswersComponentError('`entityId` is a required configuration option for Question Submission', 'QuestionSubmission');
        }
      }
    }, {
      key: "beforeMount",
      value: function beforeMount() {
        // Avoid mounting the component if theres no data
        // Note, 1 because `config` is always part of the state.
        return Object.keys(this.getState()).length > 1;
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var formEl = DOM.query(this._container, this._config.formSelector);

        if (formEl === null) {
          return;
        }

        this.bindAnalytics(formEl);
        this.bindFormSubmit(formEl);
      }
      /**
       * bindAnalytics will wire up DOM event hooks to serverside reporting
       * @param {HTMLElement} formEl
       */

    }, {
      key: "bindAnalytics",
      value: function bindAnalytics(formEl) {
        var _this2 = this;

        if (this.analyticsReporter === null) {
          return;
        }

        var questionTextEl = DOM.query(formEl, '.js-question-text');
        DOM.on(questionTextEl, 'focus', function () {
          _this2.analyticsReporter.report(new AnalyticsEvent('QUESTION_FOCUS'));
        });
      }
      /**
       * bindFormSubmit handles submitting the question to the server.
       * @param {HTMLElement} formEl
       */

    }, {
      key: "bindFormSubmit",
      value: function bindFormSubmit(formEl) {
        var _this3 = this;

        DOM.on(formEl, 'submit', function (e) {
          e.preventDefault(); // TODO(billy) we probably want to disable the form from being submitted twice

          var formData = _this3.parse(formEl);

          var errors = _this3.validateRequired(formData);

          if (errors) {
            return _this3.setState(new QuestionSubmission(formData, errors));
          }

          _this3.core.submitQuestion({
            'entityId': _this3._config.entityId,
            'questionLanguage': _this3._config.language,
            'site': 'FIRSTPARTY',
            'name': formData.name,
            'email': formData.email,
            'questionText': formData.questionText,
            'questionDescription': formData.questionDescription
          })["catch"](function (error) {
            _this3.setState(new QuestionSubmission(formData, {
              'network': 'There was a problem submitting your question. Please try again.'
            }));

            throw error;
          });
        });
      }
      /**
       * Takes the form, and builds a object that represents the input names
       * and text fields.
       * @param {HTMLElement} formEl
       * @returns {object}
       */

    }, {
      key: "parse",
      value: function parse(formEl) {
        var inputFields = DOM.queryAll(formEl, '.js-question-field');

        if (!inputFields || inputFields.length === 0) {
          return {};
        }

        var obj = {};

        for (var i = 0; i < inputFields.length; i++) {
          var val = inputFields[i].value;

          if (inputFields[i].type === 'checkbox' && val === 'true') {
            val = true;
          }

          obj[inputFields[i].name] = val;
        }

        return obj;
      }
      /**
       * Validates the required fields (or rules) for the form data
       * @param {Object} formData
       * @returns {Object|boolean} errors object if any errors found
       */

    }, {
      key: "validateRequired",
      value: function validateRequired(formData) {
        var errors = {};

        if (!formData.email || typeof formData.email !== 'string') {
          errors['email'] = 'Missing email address!';
        }

        if (!formData.privacyPolicy || formData.privacyPolicy !== true) {
          errors['privacyPolicy'] = 'Approving our privacy policy terms is required!';
        }

        if (!formData.questionText || typeof formData.questionText !== 'string') {
          errors['questionText'] = 'Question text is required!';
        }

        return Object.keys(errors).length > 0 ? errors : null;
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName(config) {
        return 'questions/questionsubmission';
      }
      /**
       * The public interface alias for the component
       * @returns {string}
       * @override
       */

    }, {
      key: "type",
      get: function get() {
        return 'QASubmission';
      }
    }]);

    return QuestionSubmissionComponent;
  }(Component);

  var SVGIcon =
  /*#__PURE__*/
  function () {
    /**
     * @param config
     * @param config.name
     * @param config.path
     * @param config.complexContents
     * @param config.viewBox
     * @constructor
     */
    function SVGIcon(config) {
      _classCallCheck(this, SVGIcon);

      /**
       * the name of the icon
       */
      this.name = config.name;
      /**
       * an svg path definition
       */

      this.path = config.path;
      /**
       * if not using a path, a the markup for a complex SVG
       */

      this.complexContents = config.complexContents;
      /**
       * the view box definition, defaults to 24x24
       * @type {string}
       */

      this.viewBox = config.viewBox || '0 0 24 24';
      /**
       * actual contents used
       */

      this.contents = this.pathDefinition();
    }

    _createClass(SVGIcon, [{
      key: "pathDefinition",
      value: function pathDefinition() {
        if (this.complexContents) {
          return this.complexContents;
        }

        return "<path d=\"".concat(this.path, "\"></path>");
      }
      /**
       * returns the svg markup
       */

    }, {
      key: "markup",
      value: function markup() {
        return "<svg viewBox=\"".concat(this.viewBox, "\" xmlns=\"http://www.w3.org/2000/svg\">").concat(this.contents, "</svg>");
      }
    }]);

    return SVGIcon;
  }();

  var thumbIcon = new SVGIcon({
    name: 'thumb',
    viewBox: '0 0 24 22',
    path: 'M15.273 1H5.455c-.906 0-1.68.55-2.008 1.342L.153 10.097A2.19 2.19 0 000 10.9v2.2c0 1.21.982 2.2 2.182 2.2h6.883L8.03 20.327l-.033.352c0 .451.186.869.48 1.166L9.633 23l7.178-7.249a2.16 2.16 0 00.644-1.551v-11c0-1.21-.982-2.2-2.182-2.2zm0 13.2l-4.735 4.774L11.75 13.1H2.182v-2.2l3.273-7.7h9.818v11zM19.636 1H24v13.2h-4.364V1z'
  });

  var receiptIcon = new SVGIcon({
    name: 'receipt',
    path: 'M14.606 9.5c-.671-.515-1.591-.833-2.606-.833 1.015 0 1.935.318 2.606.833zm-7.985 0H1.655A1.66 1.66 0 010 7.833V3.667C0 2.747.741 2 1.655 2h20.69A1.66 1.66 0 0124 3.667v4.166A1.66 1.66 0 0122.345 9.5h-4.966V22H6.621V9.5h2.773H6.62zm10.758-1.667h4.966V3.667H1.655v4.166h4.966v-2.5h10.758v2.5z'
  });

  var pantheonIcon = new SVGIcon({
    name: 'pantheon',
    path: 'M9.947 16.598h.252V9.412h-.252a.432.432 0 01-.23-.065c-.07-.043-.106-.093-.106-.15L9.15 7.82v-.15c0-.044.028-.08.084-.109a.691.691 0 01.105-.086.254.254 0 01.146-.043H13.6c.056 0 .104.015.146.043.042.03.091.058.147.086a.271.271 0 01.063.108c.014.043.007.093-.02.15l-.42 1.378a.374.374 0 01-.147.15.37.37 0 01-.19.065h-.251v7.186h.252a.37.37 0 01.189.065c.07.043.119.093.147.15l.42 1.378c.027.028.034.071.02.129a.275.275 0 01-.063.129 1.364 1.364 0 00-.147.086.254.254 0 01-.146.043H9.485a.254.254 0 01-.146-.043.691.691 0 01-.105-.086c-.056-.029-.084-.072-.084-.13v-.128l.461-1.377c0-.058.035-.108.105-.151a.432.432 0 01.231-.065zm5.792 0h.252V9.412h-.252a.432.432 0 01-.23-.065.374.374 0 01-.148-.15l-.42-1.377c-.027-.029-.034-.072-.02-.13a.275.275 0 01.063-.129c.056-.028.105-.057.146-.086a.254.254 0 01.147-.043h4.114c.055 0 .104.015.146.043a.691.691 0 01.105.086c.056.03.084.072.084.13v.129l-.42 1.377a.374.374 0 01-.146.15.432.432 0 01-.231.065h-.21v7.186h.21a.43.43 0 01.23.065c.07.043.12.093.148.15l.42 1.378v.15c0 .043-.029.08-.085.108a.691.691 0 01-.105.086.254.254 0 01-.146.043h-4.114a.254.254 0 01-.147-.043 1.364 1.364 0 00-.146-.086.271.271 0 01-.063-.108c-.014-.043-.007-.093.02-.15l.42-1.377a.374.374 0 01.147-.151.432.432 0 01.231-.065zm-11.794-.086h.252V9.498h-.252a.334.334 0 01-.21-.065.386.386 0 01-.126-.193l-.42-1.377a.248.248 0 01-.02-.172.854.854 0 01.063-.173c.028-.057.07-.1.126-.129a.365.365 0 01.168-.043h4.07c.057 0 .113.015.169.043a.278.278 0 01.126.13.854.854 0 01.062.172.248.248 0 01-.02.172l-.42 1.377a.386.386 0 01-.126.193.334.334 0 01-.21.065h-.21v7.014h.21c.084 0 .154.029.21.086a.673.673 0 01.126.172l.42 1.378a.248.248 0 01.02.172.854.854 0 01-.062.172.278.278 0 01-.126.129.365.365 0 01-.168.043H3.526a.365.365 0 01-.168-.043.278.278 0 01-.126-.13.854.854 0 01-.063-.171.248.248 0 01.02-.172l.42-1.378a.673.673 0 01.126-.172.281.281 0 01.21-.086zM1.763 6.658a.717.717 0 01-.504-.194.644.644 0 01-.21-.495v-.43a.73.73 0 01.105-.387.68.68 0 01.273-.259C4.309 3.402 6.54 2.276 8.121 1.515 9.702.755 10.493.361 10.493.332c.531-.258.972-.366 1.322-.323.35.043.734.165 1.154.366l8.31 4.518c.14.058.245.144.315.259a.73.73 0 01.105.387v.43c0 .201-.07.366-.21.495a.717.717 0 01-.504.194H1.763zm-.714 13.34a.54.54 0 01.168-.387.516.516 0 01.378-.172h19.642c.168 0 .308.057.42.172a.541.541 0 01.168.387v.818a.522.522 0 01-.168.408.605.605 0 01-.42.151H1.595a.551.551 0 01-.378-.15.522.522 0 01-.168-.41v-.817zm21.405 2.022c.14 0 .266.058.378.173a.592.592 0 01.168.43v.818a.541.541 0 01-.168.387.516.516 0 01-.378.172L.546 23.957a.516.516 0 01-.378-.172.541.541 0 01-.168-.387v-.818a.59.59 0 01.168-.43.516.516 0 01.378-.173l21.908.043z'
  });

  var micIcon = new SVGIcon({
    name: 'mic',
    path: 'M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'
  });

  var directionsIcon = new SVGIcon({
    name: 'directions',
    path: 'M23.649 11.154L12.846.35a1.195 1.195 0 00-1.692 0L.35 11.154a1.195 1.195 0 000 1.692L11.154 23.65a1.195 1.195 0 001.692 0L23.65 12.846c.468-.456.468-1.212 0-1.692zm-9.254 3.853v-3.001H9.593v3.6h-2.4v-4.8c0-.66.54-1.2 1.2-1.2h6.002V6.604l4.2 4.2-4.2 4.202z'
  });

  var calendarIcon = new SVGIcon({
    name: 'calendar',
    path: 'M18.111 13.2H12v6h6.111v-6zM16.89 0v2.4H7.11V0H4.667v2.4H3.444c-1.356 0-2.432 1.08-2.432 2.4L1 21.6C1 22.92 2.088 24 3.444 24h17.112C21.9 24 23 22.92 23 21.6V4.8c0-1.32-1.1-2.4-2.444-2.4h-1.223V0H16.89zm3.667 21.6H3.444V8.4h17.112v13.2z'
  });

  var calloutIcon = new SVGIcon({
    name: 'callout',
    path: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z'
  });

  var infoIcon = new SVGIcon({
    name: 'info',
    path: 'M12 8.4A1.2 1.2 0 1012 6a1.2 1.2 0 000 2.4zM12 0c6.624 0 12 5.376 12 12s-5.376 12-12 12S0 18.624 0 12 5.376 0 12 0zm0 18c.66 0 1.2-.54 1.2-1.2V12c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v4.8c0 .66.54 1.2 1.2 1.2z'
  });

  var briefcaseIcon = new SVGIcon({
    name: 'briefcase',
    path: 'M20 7h-4V5c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 20c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm-6 0h-4V5h4v2z'
  });

  var kabobIcon = new SVGIcon({
    name: 'kabob',
    viewBox: '0 0 3 11',
    complexContents: "<circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"1.5\" cy=\"5.5\" r=\"1.5\"/><circle cx=\"1.5\" cy=\"9.5\" r=\"1.5\"/>"
  });

  var personIcon = new SVGIcon({
    name: 'person',
    viewBox: '0 0 18 18',
    path: 'M9 9c2.486 0 4.5-2.014 4.5-4.5S11.486 0 9 0a4.499 4.499 0 00-4.5 4.5C4.5 6.986 6.514 9 9 9zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125C0 17.494.506 18 1.125 18h15.75c.619 0 1.125-.506 1.125-1.125V15.75c0-2.992-5.996-4.5-9-4.5z'
  });

  var magnifyingGlassIcon = new SVGIcon({
    name: 'magnifying_glass',
    path: 'M16.124 13.051a5.154 5.154 0 110-10.308 5.154 5.154 0 010 10.308M16.114 0a7.886 7.886 0 00-6.46 12.407L0 22.06 1.94 24l9.653-9.653A7.886 7.886 0 1016.113 0'
  });

  var officeIcon = new SVGIcon({
    name: 'office',
    path: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'
  });

  var linkIcon = new SVGIcon({
    name: 'link',
    path: 'M2.28 12A3.723 3.723 0 016 8.28h4.8V6H6c-3.312 0-6 2.688-6 6s2.688 6 6 6h4.8v-2.28H6A3.723 3.723 0 012.28 12zm4.92 1.2h9.6v-2.4H7.2v2.4zM18 6h-4.8v2.28H18A3.723 3.723 0 0121.72 12 3.723 3.723 0 0118 15.72h-4.8V18H18c3.312 0 6-2.688 6-6s-2.688-6-6-6z'
  });

  var windowIcon = new SVGIcon({
    name: 'window',
    path: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'
  });

  var phoneIcon = new SVGIcon({
    name: 'phone',
    path: 'M4.827 10.387a20.198 20.198 0 008.786 8.786l2.934-2.933c.36-.36.893-.48 1.36-.32a15.21 15.21 0 004.76.76c.733 0 1.333.6 1.333 1.333v4.654C24 23.4 23.4 24 22.667 24 10.147 24 0 13.853 0 1.333 0 .6.6 0 1.333 0H6c.733 0 1.333.6 1.333 1.333 0 1.667.267 3.267.76 4.76.147.467.04.987-.333 1.36l-2.933 2.934z'
  });

  var tagIcon = new SVGIcon({
    name: 'tag',
    viewBox: '0 0 18 18',
    path: 'M17.469 8.622l-8.1-8.1A1.789 1.789 0 008.1 0H1.8C.81 0 0 .81 0 1.8v6.3c0 .495.198.945.531 1.278l8.1 8.1c.324.324.774.522 1.269.522a1.76 1.76 0 001.269-.531l6.3-6.3A1.76 1.76 0 0018 9.9c0-.495-.207-.954-.531-1.278zM3.15 4.5c-.747 0-1.35-.603-1.35-1.35 0-.747.603-1.35 1.35-1.35.747 0 1.35.603 1.35 1.35 0 .747-.603 1.35-1.35 1.35z'
  });

  var documentIcon = new SVGIcon({
    name: 'document',
    path: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z'
  });

  var chevronIcon = new SVGIcon({
    name: 'chevron',
    viewBox: '0 0 7 9',
    complexContents: "<g fill-rule=\"evenodd\" transform=\"translate(-1 -8)\"><path d=\"m2.6417004 8-1.1417004 1.0575 3.70850202 3.4425-3.70850202 3.4425 1.1417004 1.0575 4.8582996-4.5z\"/></g>"
  });

  var supportIcon = new SVGIcon({
    name: 'support',
    path: 'M12.5 2C7.81 2 4 5.81 4 10.5c0 4.69 3.81 8.5 8.5 8.5h.5v3c4.86-2.34 8-7 8-11.5C21 5.81 17.19 2 12.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z'
  });

  var yextIcon = new SVGIcon({
    name: 'yext',
    viewBox: '0 0 30 30',
    path: 'M25.517 28.142v.095h-.204v.905h-.066v-.905h-.197v-.095h.467zm.667 0h.066v1h-.066v-.825l-.24.595h-.013l-.24-.595v.825h-.066v-1h.066l.247.61.246-.61zM15 28.8c7.622 0 13.8-6.178 13.8-13.8 0-7.622-6.178-13.8-13.8-13.8C7.378 1.2 1.2 7.378 1.2 15c0 7.622 6.178 13.8 13.8 13.8zM15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0zm.45 16.65v-1.2h6.6v1.2h-2.7v5.4h-1.2v-5.4h-2.7zm-1.599-1.35l.849.849-2.601 2.601 2.601 2.601-.849.849-2.601-2.601L8.649 22.2l-.849-.849 2.601-2.601L7.8 16.149l.849-.849 2.601 2.601 2.601-2.601zM18.675 9a2.175 2.175 0 00-1.847 3.323l2.995-2.995A2.163 2.163 0 0018.675 9zm0 5.55a3.375 3.375 0 112.833-5.209l-3.789 3.788a2.175 2.175 0 003.13-1.954h1.201a3.375 3.375 0 01-3.375 3.375zm-7.425-3.734L13.78 7.8l.92.771-2.85 3.397v2.582h-1.2v-2.582L7.8 8.57l.92-.771 2.53 3.016z'
  });

  var pinIcon = new SVGIcon({
    name: 'pin',
    viewBox: '0 0 13 18',
    path: 'm9.375 0c-3.52446429 0-6.375 2.817-6.375 6.3 0 4.725 6.375 11.7 6.375 11.7s6.375-6.975 6.375-11.7c0-3.483-2.8505357-6.3-6.375-6.3zm.00000018 8.55000007c-1.25678576 0-2.27678579-1.008-2.27678579-2.25s1.02000003-2.25 2.27678579-2.25c1.25678572 0 2.27678582 1.008 2.27678582 2.25s-1.0200001 2.25-2.27678582 2.25z'
  });

  var gearIcon = new SVGIcon({
    name: 'gear',
    path: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.353.353 0 01.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16a.353.353 0 01-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z'
  });

  var lightBulbIcon = new SVGIcon({
    name: 'light_bulb',
    viewBox: '0 0 32 35',
    path: 'M11.585 31.056l8.38-.493v-.986l-8.38.493zM11.585 33.028L15.775 35l4.19-1.972V31.55l-8.38.493v.986zm6.926-.407l-2.736 1.29-2.13-1.004 4.866-.286zM15.775 7.394c-4.63 0-8.38 3.205-8.38 8.38 0 5.177 4.19 6.902 4.19 12.818v.493l8.38-.493c0-5.916 4.19-8.188 4.19-12.817a8.38 8.38 0 00-8.38-8.38zm5.617 13.48c-1.025 1.837-2.174 3.892-2.381 6.786l-6.44.38c-.129-3.01-1.29-5.021-2.32-6.808-.493-.8-.928-1.636-1.299-2.5h13.556c-.325.708-.704 1.403-1.116 2.142zm1.479-3.128H8.627a7.793 7.793 0 01-.247-1.971c0-4.353 3.042-7.395 7.395-7.395a7.394 7.394 0 017.394 7.395 6.739 6.739 0 01-.3 1.971h.002zM26.62 15.282h4.93v1h-4.93zM23.094 7.756l2.091-2.091.698.697-2.092 2.092zM15.282 0h1v4.93h-1zM5.666 6.362l.697-.697 2.091 2.091-.697.697zM0 15.282h4.93v1H0z'
  });

  var starIcon = new SVGIcon({
    name: 'receipt',
    viewBox: '0 0 18 18',
    path: 'M8.991 0C4.023 0 0 4.032 0 9s4.023 9 8.991 9C13.968 18 18 13.968 18 9s-4.032-9-9.009-9zm3.816 14.4L9 12.105 5.193 14.4l1.008-4.329-3.357-2.907 4.428-.378L9 2.7l1.728 4.077 4.428.378-3.357 2.907z'
  });

  var close = new SVGIcon({
    name: 'close',
    complexContents: "\n    <path d=\"M7 8l9.716 9.716m0-9.716L7 17.716\" \n          stroke=\"currentColor\" \n          stroke-width=\"2\"/>\n  "
  });

  var iconsArray = [thumbIcon, receiptIcon, pantheonIcon, micIcon, directionsIcon, calendarIcon, calloutIcon, infoIcon, briefcaseIcon, kabobIcon, personIcon, magnifyingGlassIcon, officeIcon, linkIcon, windowIcon, phoneIcon, tagIcon, documentIcon, chevronIcon, supportIcon, yextIcon, pinIcon, gearIcon, lightBulbIcon, close];
  var Icons = {};
  iconsArray.forEach(function (icon) {
    Icons[icon.name] = icon.markup();
  });
  Icons["default"] = starIcon.markup();

  var IconComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(IconComponent, _Component);

    /**
     * IconComponent
     * @param opts
     * @param opts.iconName {string}
     * @param opts.customIcon {string}
     * @param opts.iconUrl {string}
     */
    function IconComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, IconComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(IconComponent).call(this, opts, systemOpts));
      /**
       * name of an icon from the default icon set
       * @type {string}
       */

      _this.iconName = opts.iconName || 'default';
      /**
       * the markup for a fully custom icon
       * @type {*|null}
       */

      _this.customIcon = opts.customIcon || null;
      /**
       * the url to a custom image icon
       * @type {null}
       */

      _this.iconUrl = opts.iconUrl || null;
      return _this;
    }
    /**
     * getter for the image pasted to handlebars
     * @returns {string}
     */


    _createClass(IconComponent, [{
      key: "setState",

      /**
       * overrides default functionality to provide name and markup
       * @param data
       * @returns {IconComponent}
       */
      value: function setState(data) {
        return _get(_getPrototypeOf(IconComponent.prototype), "setState", this).call(this, Object.assign(data, {
          image: this.image,
          name: this.iconName ? this.iconName : 'custom'
        }));
      }
    }, {
      key: "image",
      get: function get() {
        if (this.customIcon) {
          return this.customIcon;
        }

        if (this.iconUrl) {
          return "<img src=\"".concat(this.iconUrl, "\" alt=\"\" class=\"Icon-image\">");
        }

        if (Icons[this.iconName]) {
          return Icons[this.iconName];
        }

        return Icons["default"];
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'icons/icon';
      }
      /**
       * allowing duplicates
       * @returns {boolean}
       * @override
       */

    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'IconComponent';
      }
    }]);

    return IconComponent;
  }(Component);

  /** @module */
  var COMPONENT_MANAGER = new ComponentManager() // Core Component
  .register(Component) // Navigation Components
  .register(NavigationComponent) // Search Components
  .register(SearchComponent).register(FilterSearchComponent).register(AutoCompleteComponent).register(SpellCheckComponent).register(LocationBiasComponent) // Filter Components
  .register(FilterBoxComponent).register(FilterOptionsComponent).register(RangeFilterComponent).register(DateRangeFilterComponent).register(DynamicFiltersComponent).register(GeoLocationComponent) // Results Components
  .register(DirectAnswerComponent).register(UniversalResultsComponent).register(ResultsComponent).register(PaginationComponent).register(ResultsItemComponent).register(AccordionResultsComponent).register(LocationResultsItemComponent).register(EventResultsItemComponent).register(PeopleResultsItemComponent).register(MapComponent) // Questions Components
  .register(QuestionSubmissionComponent) // Helper Components
  .register(IconComponent);

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

  /** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

  /**
   * ErrorReporter is used for reporting errors to the console and API
   *
   * @implements {ErrorReporterService}
   */

  var ErrorReporter =
  /*#__PURE__*/
  function () {
    function ErrorReporter(config) {
      var _this = this;

      _classCallCheck(this, ErrorReporter);

      /**
       * The apiKey to use for reporting
       * @type {string}
       */
      this.apiKey = config.apiKey;
      /**
       * The experienceKey to use when reporting
       * @type {string}
       */

      this.experienceKey = config.experienceKey;
      /**
       * The answers config version used for api requests
       * @type {string|number}
       */

      this.experienceVersion = config.experienceVersion || 'config1.0';
      /**
       * If true, print entire error objects to the console for inspection
       * @type {boolean}
       */

      this.printVerbose = config.printVerbose;
      /**
       * If true, report the error the server for logging and monitoring
       * @type {boolean}
       */

      this.sendToServer = config.sendToServer; // Attach reporting listeners to window

      window.addEventListener('error', function (e) {
        return _this.report(e.error);
      });
      window.addEventListener('unhandledrejection', function (e) {
        return _this.report(e.error);
      });
    }
    /**
     * report pretty prints the error to the console, optionally
     * prints the entire error if `printVerbose` is true, and sends the
     * error to the server to be logged if `sendToServer` is true
     * @param {AnswersBaseError} err The error to be reported
     * @returns {AnswersBaseError} The reported error
     */


    _createClass(ErrorReporter, [{
      key: "report",
      value: function report(err) {
        if (!(err instanceof AnswersBaseError) || err.reported) {
          return;
        }

        err.reported = true;
        this.printError(err);

        if (this.sendToServer) {
          var request = new ApiRequest({
            endpoint: '/v2/accounts/me/answers/errors',
            apiKey: this.apiKey,
            version: 20190301,
            params: {
              'error': err.toJson(),
              'libVersion': LIB_VERSION,
              'experienceVersion': this.experienceVersion,
              'experienceKey': this.experienceKey
            }
          });
          request.get()["catch"](console.err);
        }

        return err;
      }
      /**
       * prints the given error to the browser console
       * @param {AnswersBaseError} err The error to be printed
       */

    }, {
      key: "printError",
      value: function printError(err) {
        console.error(err.toString());

        if (this.printVerbose) {
          console.log(_objectSpread({}, err));
        }
      }
    }]);

    return ErrorReporter;
  }();

  /** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

  /**
   * @implements {ErrorReporterService}
   */
  var ConsoleErrorReporter =
  /*#__PURE__*/
  function () {
    function ConsoleErrorReporter() {
      _classCallCheck(this, ConsoleErrorReporter);
    }

    _createClass(ConsoleErrorReporter, [{
      key: "report",

      /** @inheritdoc */
      value: function report(err) {
        console.error(err.toString());
      }
    }]);

    return ConsoleErrorReporter;
  }();

  /** @module PersistentStorage */

  var PersistentStorage =
  /*#__PURE__*/
  function () {
    function PersistentStorage() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PersistentStorage);

      /**
       * The current params model
       * @type {SearchParams}
       */
      this._params = new SearchParams(window.location.search.substring(1));
      /**
       * The current history edit timer, if any
       * @type {number}
       */

      this._historyTimer = null;
      /**
       * The list of listeners to every storage update
       * @type {function[]}
       */

      this._updateListener = config.updateListener || function () {};
      /**
       * The list of listeners to storage resets
       * @type {function[]}
       */


      this._resetListener = config.resetListener || function () {};

      window.onpopstate = function () {
        _this._params = new SearchParams(window.location.search.substring(1));

        _this._callListener(_this._updateListener);

        _this._callListener(_this._resetListener);
      };
    }
    /**
     * Insert the given key/value pair into storage
     * @param {string} key The key to insert the data in
     * @param {*} data The data to insert
     */


    _createClass(PersistentStorage, [{
      key: "set",
      value: function set(key, data) {
        if (typeof key !== 'string') {
          throw new AnswersStorageError('Storage data key must be a string', key, data);
        }

        var newData = data;

        if (typeof data !== 'string') {
          newData = JSON.stringify(data);
        }

        this._params.set(key, newData);

        this._updateHistory();
      }
      /**
       * Delete the given key from storage
       * @param {string} key The key to delete
       */

    }, {
      key: "delete",
      value: function _delete(key) {
        this._params["delete"](key);

        this._updateHistory();
      }
    }, {
      key: "_updateHistory",
      value: function _updateHistory() {
        var _this2 = this;

        if (this._historyTimer) {
          clearTimeout(this._historyTimer);
        } // batch update calls across components to avoid updating the url too much


        this._historyTimer = setTimeout(function () {
          _this2._historyTimer = null;
          window.history.pushState(null, null, "?".concat(_this2._params.toString()));

          _this2._callListener(_this2._updateListener);
        }, 100);
      }
      /**
       * Invoke the given list of callbacks with the current storage data
       * @param {function[]} listeners The callbacks to invoke
       * @private
       */

    }, {
      key: "_callListener",
      value: function _callListener(listener) {
        listener(this.getAll(), this._params.toString());
      }
      /**
       * Get all the key/value pairs in storage
       */

    }, {
      key: "getAll",
      value: function getAll() {
        var allParams = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._params.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                val = _step$value[1];

            allParams[key] = val;
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

        return allParams;
      }
    }]);

    return PersistentStorage;
  }();

  /** @module SearchConfig */

  var SearchConfig =
  /*#__PURE__*/
  function () {
    function SearchConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SearchConfig);

      /**
       * The max results per search.
       * Also defines the number of results per page, if pagination is enabled
       * @type {number}
       */
      this.limit = config.limit || 20;
      /**
       * The vertical key to use for all searches
       * @type {string}
       */

      this.verticalKey = config.verticalKey || null;
      /**
       * @type {string}
       */

      this.defaultInitialSearch = config.defaultInitialSearch;
      this.validate();
      Object.freeze(this);
    }

    _createClass(SearchConfig, [{
      key: "validate",
      value: function validate() {
        if (typeof this.limit !== 'number' || this.limit < 1 || this.limit > 50) {
          throw new AnswersConfigError('Search Limit must be between 1 and 50', 'SearchConfig');
        }
      }
    }]);

    return SearchConfig;
  }();

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
  var AutoCompleteResult = function AutoCompleteResult() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AutoCompleteResult);

    this.filter = data.filter || {};
    this.highlightedValue = new HighlightedValue(data).getInverted();
    this.key = data.key || '';
    this.matchedSubstrings = data.matchedSubstrings || [];
    this.value = data.value || '';
    this.shortValue = data.shortValue || this.value;
    Object.freeze(this);
  };

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

  /** @typedef {import('./autocompleteservice').default} AutoCompleteService */

  /**
   * AutoCompleteApi exposes an interface for network related matters
   * for all the autocomplete endpoints.
   *
   * @implements {AutoCompleteService}
   */

  var AutoCompleteApi =
  /*#__PURE__*/
  function () {
    function AutoCompleteApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AutoCompleteApi);

      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'AutoComplete');
      }

      this._apiKey = config.apiKey;
      /**
       * The Answers Key to use for the request
       * @type {string}
       * @private
       */

      if (!config.experienceKey) {
        throw new AnswersBasicError('Answers Key is required', 'AutoComplete');
      }

      this._experienceKey = config.experienceKey;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = config.version || 20190101 || 20190301;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * The locale to use for the request
       * @type {string}
       * @private
       */

      if (!config.locale) {
        throw new AnswersBasicError('Locale is required', 'AutoComplete');
      }

      this._locale = config.locale;
    }
    /** @inheritdoc */


    _createClass(AutoCompleteApi, [{
      key: "queryFilter",
      value: function queryFilter(input, config) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/filtersearch',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'verticalKey': config.verticalKey,
            'inputKey': config.barKey,
            'locale': this._locale,
            'search_parameters': JSON.stringify(config.searchParameters)
          }
        });
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.filter(response.response, config.barKey);
        })["catch"](function (error) {
          throw new AnswersEndpointError('Filter search request failed', 'AutoComplete', error);
        });
      }
      /** @inheritdoc */

    }, {
      key: "queryVertical",
      value: function queryVertical(input, verticalKey, barKey) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/vertical/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'verticalKey': verticalKey,
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
      /** @inheritdoc */

    }, {
      key: "queryUniversal",
      value: function queryUniversal(queryString) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
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

  /** @typedef {import('../services/autocompleteservice').default} AutoCompleteService */

  var universalOptions = ['what is yext', 'who is the ceo of yext'];
  var verticalOptions = ['near me', 'in new york', 'available now'];
  /**
   * MockAutoCompleteService serves autocomplete queries with mock data
   *
   * @implements {AutoCompleteService}
   */

  var MockAutoCompleteService =
  /*#__PURE__*/
  function () {
    function MockAutoCompleteService() {
      _classCallCheck(this, MockAutoCompleteService);
    }

    _createClass(MockAutoCompleteService, [{
      key: "queryFilter",

      /** @inheritdoc */
      value: function queryFilter(input, config) {
        // TODO(amullings): Simulate filter search, with sections
        return emptyResults();
      }
      /** @inheritdoc */

    }, {
      key: "queryVertical",
      value: function queryVertical(input, verticalKey) {
        return filterOptions(input, verticalOptions.map(function (opt) {
          return "".concat(verticalKey, " ").concat(opt);
        }).concat(universalOptions));
      }
      /** @inheritdoc */

    }, {
      key: "queryUniversal",
      value: function queryUniversal(input) {
        return filterOptions(input, universalOptions);
      }
    }]);

    return MockAutoCompleteService;
  }();

  function filterOptions(input, options) {
    if (input.length === 0) {
      return emptyResults();
    }

    var lowercase = input.toLowerCase();
    var results = options.filter(function (opt) {
      return opt.includes(lowercase);
    }).map(function (opt) {
      return new AutoCompleteResult({
        value: opt,
        matchedSubstrings: [{
          offset: opt.indexOf(lowercase),
          length: lowercase.length
        }]
      });
    });
    return Promise.resolve(new AutoCompleteData({
      sections: [{
        results: results
      }],
      queryId: randomString()
    }));
  }
  /**
   * @returns {Promise<AutoCompleteData>}
   */


  function emptyResults() {
    return Promise.resolve(new AutoCompleteData({
      sections: [{}],
      queryId: randomString()
    }));
  }
  /**
   * @returns {string}
   */


  function randomString() {
    return Math.random().toString(36).substring(2);
  }

  /** @typedef {import('./questionanswerservice').default} QuestionAnswerService */

  /**
   * QuestionAnswerApi submits questions via the Q&A REST API
   *
   * @implements {QuestionAnswerService}
   */

  var QuestionAnswerApi =
  /*#__PURE__*/
  function () {
    function QuestionAnswerApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, QuestionAnswerApi);

      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'QuestionAnswerApi');
      }

      this._apiKey = config.apiKey;
    }
    /** @inheritdoc */


    _createClass(QuestionAnswerApi, [{
      key: "submitQuestion",
      value: function submitQuestion(question) {
        var request = new ApiRequest({
          baseUrl: API_BASE_URL,
          endpoint: '/v2/accounts/me/questions',
          apiKey: this._apiKey,
          params: {
            'entityId': question.entityId,
            'site': question.site,
            'name': question.name,
            'email': question.email,
            'questionText': question.questionText,
            'questionDescription': question.questionDescription,
            'questionLanguage': question.questionLanguage
          }
        });
        return request.post({
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.json();
        })["catch"](function (error) {
          throw new AnswersEndpointError('Question submit failed', 'QuestionAnswerApi', error);
        });
      }
    }]);

    return QuestionAnswerApi;
  }();

  /** @module MockQuestionAnswerService */

  /** @typedef {import('../services/questionanswerservice').default} QuestionAnswerService */

  /**
   * @implements {QuestionAnswerService}
   */
  var MockQuestionAnswerService =
  /*#__PURE__*/
  function () {
    function MockQuestionAnswerService() {
      _classCallCheck(this, MockQuestionAnswerService);
    }

    _createClass(MockQuestionAnswerService, [{
      key: "submitQuestion",

      /** @inheritdoc */
      value: function submitQuestion(question) {
        // TODO(amullings): Make actual response object once we're using it for
        // something
        return Promise.resolve({});
      }
    }]);

    return MockQuestionAnswerService;
  }();

  /* global fetch */

  /** @typedef {import('../models/section').default} Section */

  /** @typedef {import('../services/searchservice').default} SearchService */

  /**
   * @typedef {Object} ResultData
   * @property {Object} data
   * @property {string } htmlTitle
   */

  /**
   * @callback ResultsModifier
   * @param {ResultData[]} results
   * @returns {ResultData[]}
   */

  /**
   * @callback MockDataConsumer
   * @param {Section[]} sections
   * @returns {Promise<Object>}
   */
  var ARBITRARY_BUSINESS_ID = 919871;
  /**
   * @implements {SearchService}
   */

  var MockSearchService =
  /*#__PURE__*/
  function () {
    function MockSearchService() {
      _classCallCheck(this, MockSearchService);

      /**
       * @type {Promise<string>}
       * @private
       */
      this._getMockDataJson = fetch('https://assets.sitescdn.net/answers/testdata/search/mockdata_v1.json').then(function (resp) {
        return resp.text();
      })["catch"](console.error);
    }
    /** @inheritdoc */


    _createClass(MockSearchService, [{
      key: "verticalSearch",
      value: function verticalSearch(verticalKey, _ref) {
        var input = _ref.input,
            filter = _ref.filter,
            facetFilter = _ref.facetFilter,
            limit = _ref.limit,
            offset = _ref.offset,
            id = _ref.id,
            geolocation = _ref.geolocation,
            isDynamicFiltersEnabled = _ref.isDynamicFiltersEnabled,
            skipSpellCheck = _ref.skipSpellCheck,
            queryTrigger = _ref.queryTrigger;
        return this.useMockData(function (sections) {
          if (input === '') {
            return delayedResponse(constructVerticalResponse({
              results: [],
              appliedQueryFilters: []
            }));
          } // Either find a section with matching ID, or pick one at random


          var section = sections.find(function (verticalModule) {
            return verticalKey === verticalModule['verticalConfigId'];
          });

          if (section == null) {
            section = sections[Math.floor(Math.random() * sections.length)];
          }

          modifyResults(section, getResultsFilterer(input));

          if (offset != null && limit != null) {
            modifyResults(section, function limit(results) {
              return results.slice(offset, offset + limit);
            });
          }

          var resp = constructVerticalResponse(section);
          return delayedResponse(resp);
        });
      }
      /** @inheritdoc */

    }, {
      key: "universalSearch",
      value: function universalSearch(queryString, params) {
        return this.useMockData(function (sections) {
          if (queryString === '') {
            return delayedResponse(constructUniversalResponse([]));
          }

          sections.forEach(function (section) {
            modifyResults(section, getResultsFilterer(queryString));
          });
          sections = sections.filter(function (section) {
            return section.results.length > 0;
          });
          var resp = constructUniversalResponse(sections);
          return delayedResponse(resp);
        });
      }
      /**
       * @param {MockDataConsumer} consumer
       * @returns {Promise<Object>}
       * @private
       */

    }, {
      key: "useMockData",
      value: function useMockData(consumer) {
        return this._getMockDataJson.then(JSON.parse).then(consumer);
      }
    }]);

    return MockSearchService;
  }();

  function getResultsFilterer(queryString) {
    return function (results) {
      return results.filter(function (result) {
        if (result.htmlTitle && result.htmlTitle.toLowerCase().includes(queryString)) {
          return true;
        }

        for (var prop in result.data) {
          var val = result.data[prop];

          if (typeof val === 'string' && val.toLowerCase().includes(queryString)) {
            return true;
          }
        }

        return false;
      });
    };
  }
  /**
   * @param {Section} section
   * @param {ResultsModifier} modifyFn
   */


  function modifyResults(section, modifyFn) {
    section.results = modifyFn(section.results);
  }
  /**
   * @param {Section[]} sections A list of mock section data
   * @returns {Object} A mock AnswersApi response
   */


  function constructUniversalResponse(sections) {
    // TODO(amullings): spellcheck, geo, filters
    // TODO(amullings): Fake encodedState once the SDK uses it
    sections = sections.map(fillSectionFields);
    return {
      meta: {
        uuid: uuidV4(),
        errors: []
      },
      response: {
        businessId: ARBITRARY_BUSINESS_ID,
        modules: sections,
        failedVerticals: [],
        queryId: uuidV4(),
        searchIntents: []
      }
    };
  }
  /**
   * @param {Section} section A mock section data
   * @returns {Object} A mock AnswersApi response
   */


  function constructVerticalResponse(section) {
    // TODO(amullings): spellcheck, geo, filters
    // TODO(amullings): Fake encodedState once the SDK uses it
    section = fillSectionFields(section);
    return {
      meta: {
        uuid: uuidV4(),
        errors: []
      },
      response: Object.assign(section, {
        businessId: ARBITRARY_BUSINESS_ID,
        queryId: uuidV4(),
        searchIntents: []
      })
    };
  }
  /**
   * @param {Section}
   * @returns {Section}
   */


  function fillSectionFields(section) {
    return {
      verticalConfigId: section.verticalConfigId,
      resultsCount: section.results.length,
      encodedState: '',
      results: section.results,
      appliedQueryFilters: section.appliedQueryFilters,
      queryDurationMillis: randomInt(50, 1000),
      facets: section.facets,
      source: section.source
    };
  }
  /**
   * @param {Object} resp
   * @returns {Promise<Object>}
   */


  function delayedResponse(resp) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(resp);
      }, randomInt(250, 1000));
    });
  }
  /**
   * Code-golf-y but legit basic UUID v4 implementation. Not cryptographically secure.
   * From https://gist.github.com/jed/982883
   * @returns {string} A v4-compliant UUID
   */


  function uuidV4() {
    return function b(a) {
      return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
    }();
  }
  /**
   * @param {number} min inclusive
   * @param {number} max exclusive
   * @returns {number} A random integer in the specified range
   */


  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /** @typedef {import('./core/services/searchservice').default} SearchService */

  /** @typedef {import('./core/services/autocompleteservice').default} AutoCompleteService */

  /** @typedef {import('./core/services/questionanswerservice').default} QuestionAnswerService */

  /** @typedef {import('./core/services/errorreporterservice').default} ErrorReporterService */

  /** @typedef {import('./core/services/analyticsreporterservice').default} AnalyticsReporterService */

  /**
   * @typedef Services
   * @property {SearchService} searchService
   * @property {AutoCompleteService} autoCompleteService
   * @property {QuestionAnswerService} questionAnswerService
   * @property {ErrorReporterService} errorReporterService
   */

  var DEFAULTS = {
    locale: 'en'
  };
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
       * A reference to the Component base class for custom
       * components to extend
       */


      this.Component = Component;
      /**
       * A reference to the AnalyticsEvent base class for reporting
       * custom analytics
       */

      this.AnalyticsEvent = AnalyticsEvent;
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
       * A local reference to the core api
       * @type {Core}
       */

      this.core = null;
      /**
       * A callback function to invoke once the library is ready.
       * Typically fired after templates are fetched from server for rendering.
       */

      this._onReady = function () {};
      /**
       * @type {boolean}
       * @private
       */


      this._eligibleForAnalytics = false;
      /**
       * @type {Services}
       * @private
       */

      this._services = null;
      /**
       * @type {AnalyticsReporterService}
       * @private
       */

      this._analyticsReporterService = null;
    }

    _createClass(Answers, [{
      key: "init",
      value: function init(config) {
        var _this = this;

        config = Object.assign({}, DEFAULTS, config);

        if (typeof config.apiKey !== 'string') {
          throw new Error('Missing required `apiKey`. Type must be {string}');
        }

        if (typeof config.experienceKey !== 'string') {
          throw new Error('Missing required `experienceKey`. Type must be {string}');
        }

        config.search = new SearchConfig(config.search);
        var globalStorage = new GlobalStorage();
        var persistentStorage = new PersistentStorage({
          updateListener: config.onStateChange,
          resetListener: function resetListener(data) {
            return globalStorage.setAll(data);
          }
        });
        globalStorage.setAll(persistentStorage.getAll());
        globalStorage.set(StorageKeys.SEARCH_CONFIG, config.search);
        var sessionTrackingEnabled = true;

        if (typeof config.sessionTrackingEnabled === 'boolean') {
          sessionTrackingEnabled = config.sessionTrackingEnabled;
        }

        globalStorage.set(StorageKeys.SESSIONS_OPT_IN, sessionTrackingEnabled);
        this._services = config.mock ? getMockServices() : getServices(config);
        this.core = new Core({
          apiKey: config.apiKey,
          globalStorage: globalStorage,
          persistentStorage: persistentStorage,
          experienceKey: config.experienceKey,
          fieldFormatters: config.fieldFormatters,
          experienceVersion: config.experienceVersion,
          locale: config.locale,
          searchService: this._services.searchService,
          autoCompleteService: this._services.autoCompleteService,
          questionAnswerService: this._services.questionAnswerService
        });

        if (config.onStateChange && typeof config.onStateChange === 'function') {
          config.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
        }

        this.components.setCore(this.core).setRenderer(this.renderer);
        this._eligibleForAnalytics = config.businessId != null;

        if (this._eligibleForAnalytics) {
          // TODO(amullings): Initialize with other services
          var reporter = config.mock ? new NoopAnalyticsReporter() : new AnalyticsReporter(this.core, config.experienceKey, config.experienceVersion, config.businessId, config.analyticsOptions);
          this._analyticsReporterService = reporter;
          this.components.setAnalyticsReporter(reporter);
          initScrollListener(reporter);
        }

        this._setDefaultInitialSearch(config.search);

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
      /**
       * Register a custom component type so it can be created via
       * addComponent and used as a child component
       * @param {Component} componentClass
       */

    }, {
      key: "registerComponentType",
      value: function registerComponentType(componentClass) {
        this.components.register(componentClass);
      }
    }, {
      key: "addComponent",
      value: function addComponent(type, opts) {
        if (typeof opts === 'string') {
          opts = {
            container: opts
          };
        }

        try {
          this.components.create(type, opts).mount();
        } catch (e) {
          throw new AnswersComponentError('Failed to add component', type, e);
        }

        return this;
      }
      /**
       * Remove the component - and all of its children - with the given name
       * @param {string} name The name of the component to remove
       */

    }, {
      key: "removeComponent",
      value: function removeComponent(name) {
        this.components.removeByName(name);
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
      /**
       * Opt in or out of convertion tracking analytics
       * @param {boolean} optIn
       */

    }, {
      key: "setConversionsOptIn",
      value: function setConversionsOptIn(optIn) {
        if (this._eligibleForAnalytics) {
          this._analyticsReporterService.setConversionTrackingEnabled(optIn);
        }
      }
      /**
       * Opt in or out of session cookies
       * @param {boolean} optIn
       */

    }, {
      key: "setSessionsOptIn",
      value: function setSessionsOptIn(optIn) {
        this.core.globalStorage.set(StorageKeys.SESSIONS_OPT_IN, optIn);
      }
      /**
       * Sets a search query on initialization for vertical searchers that have a
       * defaultInitialSearch provided, if the user hasn't already provided their
       * own via URL param.
       * @param {SearchConfig} searchConfig
       * @private
       */

    }, {
      key: "_setDefaultInitialSearch",
      value: function _setDefaultInitialSearch(searchConfig) {
        if (searchConfig.defaultInitialSearch == null || !searchConfig.verticalKey) {
          return;
        }

        var prepopulatedQuery = this.core.globalStorage.getState(StorageKeys.QUERY);

        if (prepopulatedQuery != null) {
          return;
        }

        this.core.globalStorage.set('queryTrigger', 'initialize');
        this.core.setQuery(searchConfig.defaultInitialSearch);
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
  /**
   * @param {Object} config
   * @returns {Services}
   */


  function getServices(config) {
    return {
      searchService: new SearchApi({
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        locale: config.locale
      }),
      autoCompleteService: new AutoCompleteApi({
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        locale: config.locale
      }),
      questionAnswerService: new QuestionAnswerApi({
        apiKey: config.apiKey
      }),
      errorReporterService: new ErrorReporter({
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        printVerbose: config.debug,
        sendToServer: !config.suppressErrorReports
      })
    };
  }
  /**
   * @returns {Services}
   */


  function getMockServices() {
    return {
      searchService: new MockSearchService(),
      autoCompleteService: new MockAutoCompleteService(),
      questionAnswerService: new MockQuestionAnswerService(),
      errorReporterService: new ConsoleErrorReporter()
    };
  }
  /**
   * Initialize the scroll event listener to send analytics events
   * when the user scrolls to the bottom. Debounces scroll events so
   * they are processed after the user stops scrolling
   */


  function initScrollListener(reporter) {
    var DEBOUNCE_TIME = 100;
    var timeout = null;

    var sendEvent = function sendEvent() {
      if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
        var event = new AnalyticsEvent('SCROLL_TO_BOTTOM_OF_PAGE');
        reporter.report(event);
      }
    };

    document.addEventListener('scroll', function () {
      clearTimeout(timeout);
      timeout = setTimeout(sendEvent, DEBOUNCE_TIME);
    });
  }

  var ANSWERS = new Answers();

  return ANSWERS;

}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdC5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHRmYWN0b3J5LmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlY3Rpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL21vZGVscy9kaXJlY3RhbnN3ZXIuanMiLCJzcmMvY29yZS9tb2RlbHMvbmF2aWdhdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvaGlnaGxpZ2h0ZWR2YWx1ZS5qcyIsInNyYy9jb3JlL21vZGVscy9zcGVsbGNoZWNrLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cy5qcyIsInNyYy9jb3JlL21vZGVscy9keW5hbWljZmlsdGVycy5qcyIsInNyYy9jb3JlL21vZGVscy9zZWFyY2hpbnRlbnRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2xvY2F0aW9uYmlhcy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL2ZpbHRlci5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JzLmpzIiwic3JjL3VpL2RvbS9kb20uanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zdGF0ZS5qcyIsInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvc2VhcmNoL3NlYXJjaGFwaS5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudC5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NyZXBvcnRlci5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9ub29wYW5hbHl0aWNzcmVwb3J0ZXIuanMiLCJzcmMvY29yZS9zdG9yYWdlL21vZHVsZWRhdGEuanMiLCJzcmMvY29yZS9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UuanMiLCJzcmMvY29yZS9pbmRleC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvZmlsdGVyc2VhcmNoY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9zcGVsbGNoZWNrY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2xvY2F0aW9uYmlhc2NvbXBvbmVudC5qcyIsInNyYy9jb3JlL21vZGVscy9mYWNldC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyYm94Y29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9yYW5nZWZpbHRlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZGF0ZXJhbmdlZmlsdGVyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9keW5hbWljZmlsdGVyc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZ2VvbG9jYXRpb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL21hcGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGFnaW5hdGlvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQuanMiLCJzcmMvdWkvaWNvbnMvaWNvbi5qcyIsInNyYy91aS9pY29ucy90aHVtYi5qcyIsInNyYy91aS9pY29ucy9yZWNlaXB0LmpzIiwic3JjL3VpL2ljb25zL3BhbnRoZW9uLmpzIiwic3JjL3VpL2ljb25zL21pYy5qcyIsInNyYy91aS9pY29ucy9kaXJlY3Rpb25zLmpzIiwic3JjL3VpL2ljb25zL2NhbGVuZGFyLmpzIiwic3JjL3VpL2ljb25zL2NhbGxvdXQuanMiLCJzcmMvdWkvaWNvbnMvaW5mby5qcyIsInNyYy91aS9pY29ucy9icmllZmNhc2UuanMiLCJzcmMvdWkvaWNvbnMva2Fib2IuanMiLCJzcmMvdWkvaWNvbnMvcGVyc29uLmpzIiwic3JjL3VpL2ljb25zL21hZ25pZnlpbmdfZ2xhc3MuanMiLCJzcmMvdWkvaWNvbnMvb2ZmaWNlLmpzIiwic3JjL3VpL2ljb25zL2xpbmsuanMiLCJzcmMvdWkvaWNvbnMvd2luZG93LmpzIiwic3JjL3VpL2ljb25zL3Bob25lLmpzIiwic3JjL3VpL2ljb25zL3RhZy5qcyIsInNyYy91aS9pY29ucy9kb2N1bWVudC5qcyIsInNyYy91aS9pY29ucy9jaGV2cm9uLmpzIiwic3JjL3VpL2ljb25zL3N1cHBvcnQuanMiLCJzcmMvdWkvaWNvbnMveWV4dC5qcyIsInNyYy91aS9pY29ucy9waW4uanMiLCJzcmMvdWkvaWNvbnMvZ2Vhci5qcyIsInNyYy91aS9pY29ucy9saWdodF9idWxiLmpzIiwic3JjL3VpL2ljb25zL3N0YXIuanMiLCJzcmMvdWkvaWNvbnMvY2xvc2UuanMiLCJzcmMvdWkvaWNvbnMvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9pY29ucy9pY29uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29uc3QuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyLmpzIiwic3JjL3VpL2luZGV4LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXIuanMiLCJzcmMvY29yZS9lcnJvcnMvY29uc29sZWVycm9ycmVwb3J0ZXIuanMiLCJzcmMvdWkvc3RvcmFnZS9wZXJzaXN0ZW50c3RvcmFnZS5qcyIsInNyYy9jb3JlL21vZGVscy9zZWFyY2hjb25maWcuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL21vY2thdXRvY29tcGxldGVzZXJ2aWNlLmpzIiwic3JjL2NvcmUvc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL21vY2txdWVzdGlvbmFuc3dlcnNlcnZpY2UuanMiLCJzcmMvY29yZS9zZWFyY2gvbW9ja3NlYXJjaHNlcnZpY2UuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgU2VhcmNoU3RhdGVzICovXG5cbi8qKlxuICogU2VhcmNoU3RhdGVzIGlzIGFuIEVOVU0gZm9yIHRoZSB2YXJpb3VzIHN0YWdlcyBvZiBzZWFyY2hpbmcsXG4gKiB1c2VkIHRvIHNob3cgZGlmZmVyZW50IHRlbXBsYXRlc1xuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBQUkVfU0VBUkNIOiAncHJlLXNlYXJjaCcsXG4gIFNFQVJDSF9MT0FESU5HOiAnc2VhcmNoLWxvYWRpbmcnLFxuICBTRUFSQ0hfQ09NUExFVEU6ICdzZWFyY2gtY29tcGxldGUnXG59O1xuIiwiLyoqIEBtb2R1bGUgUmVzdWx0ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF3IHByb2ZpbGUgZGF0YVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYXcgPSBkYXRhLnJhdyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZvcm1hdHRlZCBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZm9ybWF0dGVkID0gZGF0YS5mb3JtYXR0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggbnVtYmVyIG9mIHRoZSByZXN1bHRcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMub3JkaW5hbCA9IGRhdGEub3JkaW5hbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJvZHkgb2YgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgcmVzdWx0IGNhcmQsIGNhbiBjb250YWluIEhUTUxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfCBudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlc3RpbmF0aW9uIGxpbmsgZm9yIHRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5saW5rID0gZGF0YS5saW5rIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgRW50aXR5IElELCBvciBvdGhlciB1bmlxdWUgaWRlbnRpZmllciwgdXNlZCBmb3IgdG8gcG93ZXIgaW50ZXJhY3Rpdml0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1YnRpdGxlIG9uIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1YnRpdGxlID0gZGF0YS5zdWJ0aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIG1vZGlmaWVyLCB1c3VhbGx5IGRlcml2ZWQgZnJvbSB0aGUgdmVydGljYWwgY29uZmlndXJhdGlvbiBJRFxuICAgICAqIFVzZWQgdG8gYXBwbHkgZGlmZmVyZW50IHN0eWxpbmcgdG8gZGlmZmVyZW50IHJlc3VsdCBjYXJkIHR5cGVzXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSBkYXRhLm1vZGlmaWVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxhcmdlIGRhdGUsIG9mIHRoZSBmb3JtYXQgeyBtb250aDogJ0phbicsIGRheTogJzAxJyB9XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuYmlnRGF0ZSA9IGRhdGEuYmlnRGF0ZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW1hZ2UgcHJvZmlsZSBvYmplY3QsIGV4cGVjdGVkIHRvIGhhdmUgYSB1cmwgcHJvcGVydHlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pbWFnZSA9IGRhdGEuaW1hZ2UgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGNhbGxzIHRvIGFjdGlvbiwgb2YgdGhlIGZvcm1hdDpcbiAgICAgKiB7IGljb246ICcnLCB1cmw6ICcnLCB0ZXh0OiAnJywgZXZlbnRUeXBlOiAnJywgZXZlbnRPcHRpb25zOiB7fX1cbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jYWxsc1RvQWN0aW9uID0gZGF0YS5jYWxsc1RvQWN0aW9uIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBhY2NvcmRpYW4gcmVzdWx0IHNob3VsZCBiZSBjb2xsYXBzZWQgYnkgZGVmYXVsdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkID0gZGF0YS5jb2xsYXBzZWQgfHwgdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0RmFjdG9yeSAqL1xuXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0RmFjdG9yeSB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgUmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEluY2x1ZGVzIGRlZmF1bHQgbWFwcGluZ3Mgb2YgR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIHJlc3VsdHMgdG9cbiAgICogdGhlIGZpZWxkcyBleHBvc2VkIGJ5IHRoZSB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHJlc3VsdHNEYXRhICB7QXJyYXl9IGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmb3JtYXR0ZXJzIHRvIGFwcGx5IHRvIHRoZSByZXN1bHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsSWQgVGhlIHZlcnRpY2FsIG9mIHRoZXNlIHJlc3VsdHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBCYWNrZW5kIHNvdXJjZSBvZiB0aGVzZSByZXN1bHRzXG4gICAqIEByZXR1cm5zIHtSZXN1bHRbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXN1bHRzRGF0YSwgZm9ybWF0dGVycywgdmVydGljYWxJZCwgc291cmNlKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPIHVzZSByZXN1bHREYXRhLmhpZ2hsaWdodGVkRmllbGRzIHRvXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVzdWx0RGF0YS5kYXRhIGludG8gaHRtbC1mcmllbmRseSBzdHJpbmdzIHRoYXQgaGlnaGxpZ2h0IHZhbHVlcy5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcblxuICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV07XG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZm9ybWF0dGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgaWYgKGZvcm1hdHRlcnNba2V5XSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0YVtrZXldID0gZm9ybWF0dGVyc1trZXldKHZhbCwgZGF0YSwgdmVydGljYWxJZCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoc291cmNlKSB7XG4gICAgICAgIGNhc2UgJ0dPT0dMRV9DU0UnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdCSU5HX0NTRSc6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdaRU5ERVNLJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tWmVuZGVza1NlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0FMR09MSUEnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21BbGdvbGlhU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR2VuZXJpYyhkYXRhLCBmb3JtYXR0ZWREYXRhLCBpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIGdlbmVyaWMgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEBwYXJhbSBmb3JtYXR0ZWREYXRhXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21HZW5lcmljIChkYXRhLCBmb3JtYXR0ZWREYXRhLCBpbmRleCkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIGZvcm1hdHRlZDogZm9ybWF0dGVkRGF0YSxcbiAgICAgIHRpdGxlOiBmb3JtYXR0ZWREYXRhLm5hbWUgfHwgZGF0YS5uYW1lLFxuICAgICAgZGV0YWlsczogZm9ybWF0dGVkRGF0YS5kZXNjcmlwdGlvbiB8fCB0aGlzLnRydW5jYXRlKGRhdGEuZGVzY3JpcHRpb24pLFxuICAgICAgbGluazogZGF0YS53ZWJzaXRlLFxuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICBvcmRpbmFsOiBpbmRleCArIDFcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEdvb2dsZSBDdXN0b20gU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIHRpdGxlOiBkYXRhLmh0bWxUaXRsZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgJycpLFxuICAgICAgZGV0YWlsczogZGF0YS5odG1sU25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEubGlua1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSByZXN1bHQgdmlldyBtb2RlbC5cbiAgICogTWFwcyB2aWV3IG1vZGVsIGZpZWxkcyBiYXNlZCBvbiB0aGUgQVBJIGRhdGEgZm9yIGEgQmluZyBDdXN0b20gU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5uYW1lLFxuICAgICAgZGV0YWlsczogZGF0YS5zbmlwcGV0LFxuICAgICAgbGluazogZGF0YS51cmxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIFplbmRlc2sgU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIGRldGFpbHM6IGRhdGEuc25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEuaHRtbF91cmxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEFsZ29saWEgU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIERldGFpbHMgZmllbGQgaXMgc2V0IHRvIG9iamVjdElEIHNpbmNlIHJlc3BvbnNlIGhhcyBvbmx5IG9uZSBnZW5lcmFsIGZpZWxkIG9iamVjdElELlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21BbGdvbGlhU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgZGV0YWlsczogZGF0YS5vYmplY3RJRCxcbiAgICAgIGlkOiBkYXRhLm9iamVjdElEXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1bmNhdGVzIHN0cmluZ3MgdG8gMjUwIGNoYXJhY3RlcnMsIGF0dGVtcHRpbmcgdG8gcHJlc2VydmUgd2hvbGUgd29yZHNcbiAgICogQHBhcmFtIHN0ciB7c3RyaW5nfSB0aGUgc3RyaW5nIHRvIHRydW5jYXRlXG4gICAqIEBwYXJhbSBsaW1pdCB7TnVtYmVyfSB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgbGVuZ3RoIHRvIHJldHVyblxuICAgKiBAcGFyYW0gdHJhaWxpbmcge3N0cmluZ30gYSB0cmFpbGluZyBzdHJpbmcgdG8gZGVub3RlIHRydW5jYXRpb24sIGUuZy4gJy4uLidcbiAgICogQHBhcmFtIHNlcCB7c3RyaW5nfSB0aGUgd29yZCBzZXBhcmF0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyB0cnVuY2F0ZSAoc3RyLCBsaW1pdCA9IDI1MCwgdHJhaWxpbmcgPSAnLi4uJywgc2VwID0gJyAnKSB7XG4gICAgaWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA8PSBsaW1pdCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICAvLyBUT0RPIChibWNnaW5uaXMpOiBzcGxpdCBwdW5jdHVhdGlvbiB0b28gc28gd2UgZG9uJ3QgZW5kIHVwIHdpdGggXCJmb28sLi4uXCJcbiAgICBjb25zdCB3b3JkcyA9IHN0ci5zcGxpdChzZXApO1xuICAgIGNvbnN0IG1heCA9IGxpbWl0IC0gdHJhaWxpbmcubGVuZ3RoO1xuICAgIGxldCB0cnVuY2F0ZWQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpXTtcbiAgICAgIGlmICh0cnVuY2F0ZWQubGVuZ3RoICsgd29yZC5sZW5ndGggPiBtYXggfHxcbiAgICAgICAgKGkgIT09IDAgJiYgdHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoICsgc2VwLmxlbmd0aCA+IG1heCkpIHtcbiAgICAgICAgdHJ1bmNhdGVkICs9IHRyYWlsaW5nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdHJ1bmNhdGVkICs9IGkgPT09IDAgPyB3b3JkIDogc2VwICsgd29yZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVkO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWN0aW9uICovXG5cbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IFJlc3VsdEZhY3RvcnkgZnJvbSAnLi9yZXN1bHRmYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChkYXRhLCB1cmwsIGZvcm1hdHRlcnMpIHtcbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHNDb3VudCA9IGRhdGEucmVzdWx0c0NvdW50IHx8IDA7XG4gICAgdGhpcy5lbmNvZGVkU3RhdGUgPSBkYXRhLmVuY29kZWRTdGF0ZSB8fCAnJztcbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBBcHBsaWVkUXVlcnlGaWx0ZXIuZnJvbShkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMpO1xuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBSZXN1bHRGYWN0b3J5LmZyb20oZGF0YS5yZXN1bHRzLCBmb3JtYXR0ZXJzLCB0aGlzLnZlcnRpY2FsQ29uZmlnSWQsIGRhdGEuc291cmNlKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzZWN0aW9uIGZyb20gdGhlIHByb3ZpZGVkIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG1vZHVsZXMgVGhlIHJlc3VsdCBtb2R1bGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgRmllbGQgZm9ybWF0dGVycyBmb3IgcmVzdWx0c1xuICAgKi9cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMpIHtcbiAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuZXcgU2VjdGlvbihtb2R1bGVzLCBudWxsLCBmb3JtYXR0ZXJzKTtcbiAgICB9XG5cbiAgICAvLyBPdXIgc2VjdGlvbnMgc2hvdWxkIGNvbnRhaW4gYSBwcm9wZXJ0eSBvZiBtYXBNYXJrZXIgb2JqZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgbmV3IFNlY3Rpb24oXG4gICAgICAgICAgbW9kdWxlc1tpXSxcbiAgICAgICAgICB1cmxzW21vZHVsZXNbaV0udmVydGljYWxDb25maWdJZF0sXG4gICAgICAgICAgZm9ybWF0dGVyc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9ucztcbiAgfVxufVxuXG5jbGFzcyBBcHBsaWVkUXVlcnlGaWx0ZXIge1xuICAvLyBTdXBwb3J0IGxlZ2FjeSBtb2RlbCBhbmQgbmV3IG1vZGVsIHVudGlsIGZ1bGx5IG1pZ3JhdGVkLlxuICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgdGhlIGxlZnQgZXhwcmVzc2lvbiBkdXJpbmcgYXNzaWdubWVudCB3aGVuIG1pZ3JhdGVkLlxuICBjb25zdHJ1Y3RvciAoYXBwbGllZFF1ZXJ5RmlsdGVyKSB7XG4gICAgdGhpcy5rZXkgPSBhcHBsaWVkUXVlcnlGaWx0ZXIua2V5IHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5S2V5O1xuICAgIHRoaXMudmFsdWUgPSBhcHBsaWVkUXVlcnlGaWx0ZXIudmFsdWUgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChhcHBsaWVkUXVlcnlGaWx0ZXJzKSB7XG4gICAgbGV0IGZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcGxpZWRRdWVyeUZpbHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbHRlcnMucHVzaChuZXcgQXBwbGllZFF1ZXJ5RmlsdGVyKGFwcGxpZWRRdWVyeUZpbHRlcnNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcnM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgbnVsbDtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzZWFyY2gsIHVzZWQgdG8gcmVuZGVyIGRpZmZlcmVudCB0ZW1wbGF0ZXMgYmVmb3JlLCBkdXJpbmcsXG4gICAgICogYW5kIGFmdGVyIGxvYWRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHVuaXZlcnNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IHVybHMgVGhlIHRhYiB1cmxzXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZmllbGQgZm9ybWF0dGVycyB0byB1c2VcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFVuaXZlcnZhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VW5pdmVyc2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGlyZWN0QW5zd2VyIG1vZGVsIGZyb20gdGhlIGdpdmVuIHNlcnZlciBkYXRhIGFuZCBmb3JtYXR0ZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIGRpcmVjdCBhbnN3ZXJcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmb3JtYXR0ZXJzIHRvIGFwcGx5IHRvIHRoaXMgZGlyZWN0IGFuc3dlclxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgY29uc3QgZGF0YSA9IHsgLi4ucmVzcG9uc2UgfTtcbiAgICBjb25zdCB7IGFuc3dlciwgcmVsYXRlZEl0ZW0gfSA9IGRhdGE7XG5cbiAgICBpZiAoYW5zd2VyICYmIGZvcm1hdHRlcnNbYW5zd2VyLmZpZWxkQXBpTmFtZV0pIHtcbiAgICAgIGFuc3dlci52YWx1ZSA9IGZvcm1hdHRlcnNbYW5zd2VyLmZpZWxkQXBpTmFtZV0oXG4gICAgICAgIGFuc3dlci52YWx1ZSxcbiAgICAgICAgcmVsYXRlZEl0ZW0uZGF0YS5maWVsZFZhbHVlcyxcbiAgICAgICAgcmVsYXRlZEl0ZW0udmVydGljYWxDb25maWdJZCxcbiAgICAgICAgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEaXJlY3RBbnN3ZXIoZGF0YSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFIH0sIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBwcm92aWRlZCByZXN1bHRzIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICogQHBhcmFtIHtWZXJ0aWNhbFJlc3VsdHN9IHJlc3VsdHMgdGhlIHJlc3VsdHMgdG8gYXBwZW5kIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICovXG4gIGFwcGVuZCAocmVzdWx0cykge1xuICAgIGNvbnN0IG1lcmdlZCA9IHsgLi4udGhpcyB9O1xuICAgIG1lcmdlZC5yZXN1bHRzID0gdGhpcy5yZXN1bHRzLmNvbmNhdChyZXN1bHRzLnJlc3VsdHMpO1xuICAgIG1lcmdlZC5tYXAubWFwTWFya2VycyA9IHRoaXMubWFwLm1hcE1hcmtlcnMuY29uY2F0KHJlc3VsdHMubWFwLm1hcE1hcmtlcnMpO1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKG1lcmdlZCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHZlcnRpY2FsIHJlc3VsdHMgZnJvbSBzZXJ2ZXIgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UsIG51bGwsIGZvcm1hdHRlcnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBWZXJ0aWNhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VmVydGljYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIaWdobGlnaHRlZFZhbHVlICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgaGlnaGxpZ2h0ZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpZ2hsaWdodGVkVmFsdWUge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgZGF0YS5zaG9ydFZhbHVlIHx8ICcnO1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MgPSBkYXRhLm1hdGNoZWRTdWJzdHJpbmdzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBoaWdobGlnaHRlZCB2YWx1ZSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCAoKSB7XG4gICAgdGhpcy5fc29ydE1hdGNoZWRTdWJzdHJpbmdzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSh0aGlzLnZhbHVlLCB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgaW52ZXJ0ZWQgaGlnaGxpZ2h0ZWQgdmFsdWUgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRJbnZlcnRlZCAoKSB7XG4gICAgdGhpcy5fc29ydE1hdGNoZWRTdWJzdHJpbmdzKCk7XG4gICAgY29uc3QgaW52ZXJ0ZWRTdWJzdHJpbmdzID0gdGhpcy5fZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzKHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRIaWdobGlnaHRlZFZhbHVlKHRoaXMudmFsdWUsIGludmVydGVkU3Vic3RyaW5ncyk7XG4gIH1cblxuICBfc29ydE1hdGNoZWRTdWJzdHJpbmdzICgpIHtcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLm9mZnNldCA8IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEub2Zmc2V0ID4gYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldEludmVydGVkU3Vic3RyaW5ncyAobWF0Y2hlZFN1YnN0cmluZ3MsIHZhbHVlTGVuZ3RoKSB7XG4gICAgY29uc3QgaW52ZXJ0ZWRTdWJzdHJpbmdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3Vic3RyaW5nID0gbWF0Y2hlZFN1YnN0cmluZ3NbaV07XG4gICAgICBjb25zdCBuZXh0T2Zmc2V0ID0gc3Vic3RyaW5nLm9mZnNldCArIHN1YnN0cmluZy5sZW5ndGg7XG4gICAgICBpZiAoaSA9PT0gMCAmJiBzdWJzdHJpbmcub2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgIGludmVydGVkU3Vic3RyaW5ncy5wdXNoKHsgb2Zmc2V0OiAwLCBsZW5ndGg6IHN1YnN0cmluZy5vZmZzZXQgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZUxlbmd0aCA+IG5leHRPZmZzZXQpIHtcbiAgICAgICAgaW52ZXJ0ZWRTdWJzdHJpbmdzLnB1c2goe1xuICAgICAgICAgIG9mZnNldDogbmV4dE9mZnNldCxcbiAgICAgICAgICBsZW5ndGg6IGkgPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxXG4gICAgICAgICAgICA/IG1hdGNoZWRTdWJzdHJpbmdzW2kgKyAxXS5vZmZzZXQgLSBuZXh0T2Zmc2V0XG4gICAgICAgICAgICA6IHZhbHVlTGVuZ3RoIC0gbmV4dE9mZnNldFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGludmVydGVkU3Vic3RyaW5ncztcbiAgfVxuXG4gIF9idWlsZEhpZ2hsaWdodGVkVmFsdWUgKHZhbCwgaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzKSB7XG4gICAgbGV0IGhpZ2hsaWdodGVkVmFsdWUgPSAnJztcbiAgICBsZXQgbmV4dFN0YXJ0ID0gMDtcblxuICAgIGlmIChoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3RhcnQgPSBOdW1iZXIoaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzW2pdLm9mZnNldCk7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBoaWdobGlnaHRlZFN1YnN0cmluZ3Nbal0ubGVuZ3RoO1xuXG4gICAgICBoaWdobGlnaHRlZFZhbHVlICs9IFt2YWwuc2xpY2UobmV4dFN0YXJ0LCBzdGFydCksICc8c3Ryb25nPicsIHZhbC5zbGljZShzdGFydCwgZW5kKSwgJzwvc3Ryb25nPiddLmpvaW4oJycpO1xuXG4gICAgICBpZiAoaiA9PT0gaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDEgJiYgZW5kIDwgdmFsLmxlbmd0aCkge1xuICAgICAgICBoaWdobGlnaHRlZFZhbHVlICs9IHZhbC5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkVmFsdWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNwZWxsQ2hlY2sgKi9cblxuaW1wb3J0IEhpZ2hsaWdodGVkVmFsdWUgZnJvbSAnLi9oaWdobGlnaHRlZHZhbHVlJztcblxuLyoqXG4gKiBTcGVsbENoZWNrIGlzIHRoZSBjb3JlIHN0YXRlIG1vZGVsXG4gKiB0byBwb3dlciB0aGUgU3BlbGxDaGVjayBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGxDaGVjayB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG9yaWdpbmFsIHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gZGF0YS5xdWVyeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvcnJlY3RlZCBxdWVyeVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb3JyZWN0ZWRRdWVyeSA9IGRhdGEuY29ycmVjdGVkUXVlcnkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb3JyZWN0ZWQgcXVlcnkgd2l0aCBoaWdobGlnaHRlZCB0YWdzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvcnJlY3RlZFF1ZXJ5RGlzcGxheSA9IGRhdGEuY29ycmVjdGVkUXVlcnlEaXNwbGF5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3BlbGwgY2hlY2sgdHlwZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50eXBlID0gZGF0YS50eXBlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgc2hvdyBzcGVsbCBjaGVjayBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnNob3VsZFNob3cgPSB0aGlzLmNvcnJlY3RlZFF1ZXJ5ICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNwZWxsIGNoZWNrIG1vZGVsIGZyb20gdGhlIHByb3ZpZGVkIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzcGVsbCBjaGVjayByZXNwb25zZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgU3BlbGxDaGVjayh7XG4gICAgICBxdWVyeTogcmVzcG9uc2Uub3JpZ2luYWxRdWVyeSxcbiAgICAgIGNvcnJlY3RlZFF1ZXJ5OiByZXNwb25zZS5jb3JyZWN0ZWRRdWVyeSxcbiAgICAgIGNvcnJlY3RlZFF1ZXJ5RGlzcGxheTogbmV3IEhpZ2hsaWdodGVkVmFsdWUocmVzcG9uc2UuY29ycmVjdGVkUXVlcnkpLmdldCgpLFxuICAgICAgdHlwZTogcmVzcG9uc2UudHlwZVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlS2V5cyAqL1xuXG4vKipcbiAqIFN0b3JhZ2VLZXlzIGlzIGFuIEVOVU0gYXJlIGNvbnNpZGVyZWQgdGhlIHJvb3QgY29udGV4dFxuICogZm9yIGhvdyBkYXRhIGlzIHN0b3JlZCBhbmQgc2NvcGVkIGluIHRoZSBzdG9yYWdlLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTkFWSUdBVElPTjogJ25hdmlnYXRpb24nLFxuICBVTklWRVJTQUxfUkVTVUxUUzogJ3VuaXZlcnNhbC1yZXN1bHRzJyxcbiAgVkVSVElDQUxfUkVTVUxUUzogJ3ZlcnRpY2FsLXJlc3VsdHMnLFxuICBBVVRPQ09NUExFVEU6ICdhdXRvY29tcGxldGUnLFxuICBESVJFQ1RfQU5TV0VSOiAnZGlyZWN0LWFuc3dlcicsXG4gIEZJTFRFUjogJ2ZpbHRlcicsXG4gIFFVRVJZOiAncXVlcnknLFxuICBRVUVSWV9JRDogJ3F1ZXJ5LWlkJyxcbiAgRkFDRVRfRklMVEVSOiAnZmFjZXQtZmlsdGVyJyxcbiAgRFlOQU1JQ19GSUxURVJTOiAnZHluYW1pYy1maWx0ZXJzJyxcbiAgUEFSQU1TOiAncGFyYW1zJyxcbiAgR0VPTE9DQVRJT046ICdnZW9sb2NhdGlvbicsXG4gIElOVEVOVFM6ICdpbnRlbnRzJyxcbiAgUVVFU1RJT05fU1VCTUlTU0lPTjogJ3F1ZXN0aW9uLXN1Ym1pc3Npb24nLFxuICBTRUFSQ0hfQ09ORklHOiAnc2VhcmNoLWNvbmZpZycsXG4gIFNFQVJDSF9PRkZTRVQ6ICdzZWFyY2gtb2Zmc2V0JyxcbiAgU1BFTExfQ0hFQ0s6ICdzcGVsbC1jaGVjaycsXG4gIExPQ0FUSU9OX0JJQVM6ICdsb2NhdGlvbi1iaWFzJyxcbiAgU0VTU0lPTlNfT1BUX0lOOiAnc2Vzc2lvbnMtb3B0LWluJ1xufTtcbiIsIi8qKiBAbW9kdWxlIER5bmFtaWNGaWx0ZXJzICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgc2V0IG9mIGR5bmFtaWMgZmlsdGVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVycyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVycyB0aGlzIG1vZGVsIGhvbGRzXG4gICAgICogQHR5cGUge3tsYWJlbDogc3RyaW5nLCBmaWVsZElkOiBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdFtdfX1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlcnMgPSBkYXRhLmZpbHRlcnMgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmdhbml6ZSAnZmFjZXRzJyBmcm9tIHRoZSBhcGkgcmVzcG9uc2UgaW50byBkeW5hbWljIGZpbHRlcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIGR5bmFtaWMgZmlsdGVyIHJlc3BvbnNlIGZyb20gdGhlIGFwaVxuICAgKiBAcmV0dXJucyB7RHluYW1pY0ZpbHRlcnN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgZHluYW1pY0ZpbHRlcnMgPSBmYWNldHMubWFwKGYgPT4gKHtcbiAgICAgIGxhYmVsOiBmWydkaXNwbGF5TmFtZSddLFxuICAgICAgZmllbGRJZDogZlsnZmllbGRJZCddLFxuICAgICAgb3B0aW9uczogZi5vcHRpb25zLm1hcChvID0+ICh7XG4gICAgICAgIGxhYmVsOiBvWydkaXNwbGF5TmFtZSddLFxuICAgICAgICBjb3VudExhYmVsOiBvWydjb3VudCddLFxuICAgICAgICBzZWxlY3RlZDogb1snc2VsZWN0ZWQnXSxcbiAgICAgICAgZmlsdGVyOiBvWydmaWx0ZXInXVxuICAgICAgfSkpXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIG5ldyBEeW5hbWljRmlsdGVycyh7IGZpbHRlcnM6IGR5bmFtaWNGaWx0ZXJzIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hJbnRlbnRzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEludGVudHMge1xuICBjb25zdHJ1Y3RvciAoaW50ZW50cykge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgdG8gZmluZCByZXN1bHRzIGJhc2VkIG9uIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLm5lYXJNZSA9IGludGVudHMubmVhck1lO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgU2VhcmNoSW50ZW50cyBmcm9tIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciByZXNwb25zZSBpbnRlbnRzXG4gICAqIEByZXR1cm5zIHtTZWFyY2hJbnRlbnRzfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgaW50ZW50cyA9IHJlc3BvbnNlIHx8IFtdO1xuXG4gICAgcmV0dXJuIG5ldyBTZWFyY2hJbnRlbnRzKHtcbiAgICAgIG5lYXJNZTogaW50ZW50cy5pbmNsdWRlcygnTkVBUl9NRScpXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uQmlhcyAqL1xuXG4vKipcbiAqIExvY2F0aW9uQmlhcyBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIExvY2F0aW9uQmlhcyBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25CaWFzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYXRpb24gYmlhcyBhY2N1cmFjeSB3aGljaCBhcmUgSVAsIERFVklDRSBhbmQgVU5LTldPTlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hY2N1cmFjeSA9IGRhdGEuYWNjdXJhY3kgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYXRpdHVkZSB1c2VkIGZvciBsb2NhdGlvbiBiaWFzXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxhdGl0dWRlID0gZGF0YS5sYXRpdHVkZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvbmdpdHVkZSB1c2VkIGZvciBsb2NhdGlvbiBiaWFzXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxvbmdpdHVkZSA9IGRhdGEubG9uZ2l0dWRlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYXRpb24gZGlzcGxheSBuYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxvY2F0aW9uRGlzcGxheU5hbWUgPSBkYXRhLmxvY2F0aW9uRGlzcGxheU5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsb2NhdGlvbiBiaWFzIG1vZGVsIGZyb20gdGhlIHByb3ZpZGVkIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBsb2NhdGlvbiBiaWFzIHJlc3BvbnNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbmV3IExvY2F0aW9uQmlhcyh7XG4gICAgICAgIGFjY3VyYWN5OiAnVU5LTk9XTidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTG9jYXRpb25CaWFzKHtcbiAgICAgIGFjY3VyYWN5OiByZXNwb25zZS5hY2N1cmFjeSxcbiAgICAgIGxhdGl0dWRlOiByZXNwb25zZS5sYXRpdHVkZSxcbiAgICAgIGxvbmdpdHVkZTogcmVzcG9uc2UubG9uZ2l0dWRlLFxuICAgICAgbG9jYXRpb25EaXNwbGF5TmFtZTogcmVzcG9uc2UubG9jYXRpb25EaXNwbGF5TmFtZVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IERpcmVjdEFuc3dlciBmcm9tICcuLi9tb2RlbHMvZGlyZWN0YW5zd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL21vZGVscy9uYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgU3BlbGxDaGVjayBmcm9tICcuLi9tb2RlbHMvc3BlbGxjaGVjayc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnMgZnJvbSAnLi4vbW9kZWxzL2R5bmFtaWNmaWx0ZXJzJztcbmltcG9ydCBTZWFyY2hJbnRlbnRzIGZyb20gJy4uL21vZGVscy9zZWFyY2hpbnRlbnRzJztcbmltcG9ydCBMb2NhdGlvbkJpYXMgZnJvbSAnLi4vbW9kZWxzL2xvY2F0aW9uYmlhcyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuSU5URU5UU106IFNlYXJjaEludGVudHMuZnJvbShyZXNwb25zZS5zZWFyY2hJbnRlbnRzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS106IFNwZWxsQ2hlY2suZnJvbShyZXNwb25zZS5zcGVsbENoZWNrKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5MT0NBVElPTl9CSUFTXTogTG9jYXRpb25CaWFzLmZyb20ocmVzcG9uc2UubG9jYXRpb25CaWFzKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5JTlRFTlRTXTogU2VhcmNoSW50ZW50cy5mcm9tKGRhdGEucmVzcG9uc2Uuc2VhcmNoSW50ZW50cyksXG4gICAgICBbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdOiBTcGVsbENoZWNrLmZyb20oZGF0YS5yZXNwb25zZS5zcGVsbENoZWNrKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5MT0NBVElPTl9CSUFTXTogTG9jYXRpb25CaWFzLmZyb20oZGF0YS5yZXNwb25zZS5sb2NhdGlvbkJpYXMpXG4gICAgfTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uICovXG5cbi8qKlxuICogUXVlc3Rpb25TdWJtaXNzaW9uIGlzIHRoZSBjb3JlIHN0YXRlIG1vZGVsXG4gKiB0byBwb3dlciB0aGUgUXVlc3Rpb25TdWJtaXNzaW9uIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblN1Ym1pc3Npb24ge1xuICBjb25zdHJ1Y3RvciAocXVlc3Rpb24gPSB7fSwgZXJyb3JzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGF1dGhvciBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IHF1ZXN0aW9uLm5hbWUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBxdWVzdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5lbWFpbCA9IHF1ZXN0aW9uLmVtYWlsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBwcml2YWN5IHBvbGljeSB3YXMgYXBwcm92ZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnByaXZhY3lQb2xpY3kgPSBxdWVzdGlvbi5wcml2YWN5UG9saWN5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlc3Rpb24gdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXN0aW9uVGV4dCA9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYXRpdmUgcXVlc3Rpb24gbWV0YSBpbmZvcm1hdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvbkRlc2NyaXB0aW9uID0gcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgYW55IGVycm9ycyBhYm91dCB0aGUgcXVlc3Rpb24gc3VibWlzc2lvblxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnMgfHwgbnVsbDtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgc3VibWl0dGVkICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25TdWJtaXR0ZWQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGVycm9ycyAocXVlc3Rpb24sIGVycm9ycykge1xuICAgIHJldHVybiBRdWVzdGlvblN1Ym1pc3Npb24ocXVlc3Rpb24sIGVycm9ycyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlciAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXBpIGZpbHRlciBhbmQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIGVhc2lseSBjb25zdHJ1Y3RpbmcgRmlsdGVycy5cbiAqIFNlZSBodHRwczovL2RldmVsb3Blci55ZXh0LmNvbS9kb2NzL2FwaS1yZWZlcmVuY2UvI29wZXJhdGlvbi9saXN0RW50aXRpZXMgZm9yIHN0cnVjdHVyZSBkZXRhaWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBKU09OIGZvcm1hdCBmaWx0ZXIgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyIGludG8gYSBGaWx0ZXJcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZUZpbHRlciBBIGZpbHRlciBpbiBKU09OIGZvcm1hdCByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZnJvbVJlc3BvbnNlIChyZXNwb25zZUZpbHRlcikge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKEpTT04ucGFyc2UocmVzcG9uc2VGaWx0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgT1Igb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIE9SIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgb3IgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJG9yJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBBTkQgb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIEFORCB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGFuZCAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckYW5kJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9SIGZpbHRlcnMgd2l0aCB0aGUgc2FtZSBrZXlzLCB0aGVuIEFORCB0aGUgcmVzdWx0aW5nIGdyb3Vwc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gZ3JvdXBcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncm91cCAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMpIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGZpbHRlcilbMF07XG4gICAgICBpZiAoIWdyb3Vwc1trZXldKSB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNba2V5XS5wdXNoKGZpbHRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBGaWx0ZXJzID0gW107XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3Qua2V5cyhncm91cHMpKSB7XG4gICAgICBncm91cEZpbHRlcnMucHVzaChncm91cHNbZmllbGRdLmxlbmd0aCA+IDEgPyBGaWx0ZXIub3IoLi4uZ3JvdXBzW2ZpZWxkXSkgOiBncm91cHNbZmllbGRdWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBGaWx0ZXJzLmxlbmd0aCA+IDEgPyBGaWx0ZXIuYW5kKC4uLmdyb3VwRmlsdGVycykgOiBncm91cEZpbHRlcnNbMF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRlcScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbHQnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbGUnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGd0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGdlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBpbmNsdXNpdmUgcmFuZ2UgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlXG4gICAqIEBwYXJhbSB7Kn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgaW5jbHVzaXZlUmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgJyRnZSc6IG1pbixcbiAgICAgICAgJyRsZSc6IG1heFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBleGNsdXNpdmUgcmFuZ2UgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlXG4gICAqIEBwYXJhbSB7Kn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXhjbHVzaXZlUmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgJyRndCc6IG1pbixcbiAgICAgICAgJyRsdCc6IG1heFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBwb3NpdGlvbiBmaWx0ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhdCBUaGUgbGF0aXR1ZGUgb2YgdGhlIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsbmcgVGhlIGxvbmdpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBUaGUgc2VhcmNoIHJhZGl1cyAoaW4gbWV0ZXJzKVxuICAgKi9cbiAgc3RhdGljIHBvc2l0aW9uIChsYXQsIGxuZywgcmFkaXVzKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoJ2J1aWx0aW4ubG9jYXRpb24nLCAnJG5lYXInLCB7IGxhdCwgbG5nLCByYWRpdXMgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZpbHRlciB3aXRoIHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyIFRoZSBtYXRjaGVyIGZvciB0aGUgZmlsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBmaWx0ZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBfZnJvbU1hdGNoZXIgKGZpZWxkLCBtYXRjaGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgW21hdGNoZXJdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9tb2RlbHMvZmlsdGVyJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2VydmljZXMvc2VhcmNoc2VydmljZScpLmRlZmF1bHR9IFNlYXJjaFNlcnZpY2UgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NlcnZpY2VzL2F1dG9jb21wbGV0ZXNlcnZpY2UnKS5kZWZhdWx0fSBBdXRvQ29tcGxldGVTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zZXJ2aWNlcy9xdWVzdGlvbmFuc3dlcnNlcnZpY2UnKS5kZWZhdWx0fSBRdWVzdGlvbkFuc3dlclNlcnZpY2UgKi9cblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlS2V5ID0gY29uZmlnLmV4cGVyaWVuY2VLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2VycyBjb25maWcgdmVyc2lvbiB0byB1c2UgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgbG9jYWxlIHVzZWQgZm9yIGFsbCByZXF1ZXN0cy4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJlblwiIChmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGU7XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiBmaWVsZCBmb3JtYXR0ZXJzIHVzZWQgdG8gZm9ybWF0IHJlc3VsdHMsIGlmIHByZXNlbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkRm9ybWF0dGVycyA9IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBkYXRhIHN0b3JhZ2UgdGhhdCBwb3dlcnMgdGhlIFVJXG4gICAgICogQHR5cGUge0dsb2JhbFN0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2UgPSBjb25maWcuZ2xvYmFsU3RvcmFnZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIHBlcnNpc3RlbnQgc3RvcmFnZVxuICAgICAqIEB0eXBlIHtQZXJzaXN0ZW50U3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGVyc2lzdGVudFN0b3JhZ2UgPSBjb25maWcucGVyc2lzdGVudFN0b3JhZ2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIHNlYXJjaCBBUElcbiAgICAgKiBGb3IgYm90aCB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaFxuICAgICAqIEB0eXBlIHtTZWFyY2hTZXJ2aWNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoZXIgPSBjb25maWcuc2VhcmNoU2VydmljZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgYXV0b2NvbXBsZXRlIEFQSVxuICAgICAqIEZvciBmaWx0ZXIgc2VhcmNoLCB2ZXJ0aWNhbCBhdXRvY29tcGxldGUsIGFuZCB1bml2ZXJzYWwgYXV0b2NvbXBsZXRlXG4gICAgICogQHR5cGUge0F1dG9Db21wbGV0ZVNlcnZpY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvQ29tcGxldGUgPSBjb25maWcuYXV0b0NvbXBsZXRlU2VydmljZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBRJkEgcmVzdCBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7UXVlc3Rpb25BbnN3ZXJTZXJ2aWNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25BbnN3ZXIgPSBjb25maWcucXVlc3Rpb25BbnN3ZXJTZXJ2aWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5hcHBlbmQgSWYgdHJ1ZSwgYWRkcyB0aGUgcmVzdWx0cyBvZiB0aGlzIHF1ZXJ5IHRvIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgcmVzdWx0cywgZGVmYXVsdHMgZmFsc2VcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgcXVlcnkpIHtcbiAgICBpZiAoIXF1ZXJ5LmFwcGVuZCkge1xuICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBWZXJ0aWNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFNlYXJjaCh2ZXJ0aWNhbEtleSwge1xuICAgICAgICBsaW1pdDogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9DT05GSUcpLmxpbWl0LFxuICAgICAgICBnZW9sb2NhdGlvbjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OKSxcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkOiB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCxcbiAgICAgICAgc2tpcFNwZWxsQ2hlY2s6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSgnc2tpcFNwZWxsQ2hlY2snKSxcbiAgICAgICAgcXVlcnlUcmlnZ2VyOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3F1ZXJ5VHJpZ2dlcicpLFxuICAgICAgICBzZXNzaW9uVHJhY2tpbmdFbmFibGVkOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VTU0lPTlNfT1BUX0lOKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSwgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtTdG9yYWdlS2V5cy5MT0NBVElPTl9CSUFTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTE9DQVRJT05fQklBUywgZGF0YVtTdG9yYWdlS2V5cy5MT0NBVElPTl9CSUFTXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYWdlIHdpdGhpbiB0aGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBxdWVyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgVGhlIHZlcnRpY2FsIGtleSB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICovXG4gIHZlcnRpY2FsUGFnZSAodmVydGljYWxLZXksIG9mZnNldCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuICAgIHRoaXMudmVydGljYWxTZWFyY2godmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpLFxuICAgICAgaWQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWV9JRCksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlciksXG4gICAgICBvZmZzZXRcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnlTdHJpbmcsIHVybHMpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBVbml2ZXJzYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TUEVMTF9DSEVDSywge30pO1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTE9DQVRJT05fQklBUywge30pO1xuXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudW5pdmVyc2FsU2VhcmNoKHF1ZXJ5U3RyaW5nLCB7XG4gICAgICAgIGdlb2xvY2F0aW9uOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04pLFxuICAgICAgICBza2lwU3BlbGxDaGVjazogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdza2lwU3BlbGxDaGVjaycpLFxuICAgICAgICBxdWVyeVRyaWdnZXI6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSgncXVlcnlUcmlnZ2VyJyksXG4gICAgICAgIHNlc3Npb25UcmFja2luZ0VuYWJsZWQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRVNTSU9OU19PUFRfSU4pXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwb25zZSwgdXJscywgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5JTlRFTlRTLCBkYXRhW1N0b3JhZ2VLZXlzLklOVEVOVFNdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OLCBuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKHtcbiAgICAgICAgICBxdWVzdGlvblRleHQ6IHF1ZXJ5U3RyaW5nXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TUEVMTF9DSEVDSywgZGF0YVtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS10pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkxPQ0FUSU9OX0JJQVMsIGRhdGFbU3RvcmFnZUtleXMuTE9DQVRJT05fQklBU10pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdza2lwU3BlbGxDaGVjaycpO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICB0aGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgIHRoZSBjb25maWcgdG8gc2VyYWNoIGZvciBmaWx0ZXJzIHdpdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5uYW1lc3BhY2UgIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy52ZXJ0aWNhbEtleSB0aGUgdmVydGljYWwga2V5IGZvciB0aGUgY29uZmlnXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuYmFyS2V5ICB0aGUgYmFyIGtleSBmb3IgdGhlIGNvbmZpZyB2MVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMgIHRoZSBzZWFyY2ggcGFyYW1ldGVycyBmb3IgdGhlIGNvbmZpZyB2MlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCBjb25maWcpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7Y29uZmlnLm5hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYSBxdWVzdGlvbiB0byB0aGUgc2VydmVyIGFuZCB1cGRhdGVzIHRoZSB1bmRlcmx5aW5nIHF1ZXN0aW9uIG1vZGVsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBUaGUgcXVlc3Rpb24gb2JqZWN0IHRvIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVzdGlvbi5lbnRpdHlJZCBUaGUgZW50aXR5IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBxdWVzdGlvbiAocmVxdWlyZWQpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5sYW51YWdlIFRoZSBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnNpdGUgVGhlIFwicHVibGlzaGVyXCIgb2YgdGhlIChlLmcuICdGSVJTVF9QQVJUWScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCBUaGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcXVlc3Rpb25cbiAgICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbkFuc3dlclxuICAgICAgLnN1Ym1pdFF1ZXN0aW9uKHF1ZXN0aW9uKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoXG4gICAgICAgICAgU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTixcbiAgICAgICAgICBRdWVzdGlvblN1Ym1pc3Npb24uc3VibWl0dGVkKCkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBxdWVyeSBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeSAocXVlcnkpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBwcm92aWRlZCBxdWVyeSBJRCwgdG8gYmUgdXNlZCBpbiBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5SWQgVGhlIHF1ZXJ5IGlkIHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgcXVlcnlJZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBmaWx0ZXIgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgICAgdGhlIGZpbHRlciB0byBzZXRcbiAgICovXG4gIHNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIHNldEZhY2V0RmlsdGVyIChuYW1lc3BhY2UsIGZpbHRlcikge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRkFDRVRfRklMVEVSfS4ke25hbWVzcGFjZX1gLCBmaWx0ZXIpO1xuICB9XG5cbiAgZW5hYmxlRHluYW1pY0ZpbHRlcnMgKCkge1xuICAgIHRoaXMuX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIHJldHVybiB0aGlzLmdsb2JhbFN0b3JhZ2Uub24oZXZ0LCBtb2R1bGVJZCwgY2IpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNhdXNlZEJ5KSB7XG4gICAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnkgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yXG4gICAgICAgID8gY2F1c2VkQnlcbiAgICAgICAgOiBBbnN3ZXJzQmFzZUVycm9yLmZyb20oY2F1c2VkQnkpO1xuICAgIH1cbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBgJHt0aGlzLmVycm9yTWVzc2FnZX0gKCR7dGhpcy5ib3VuZGFyeX0pYDtcbiAgICBpZiAodGhpcy5jYXVzZWRCeSkge1xuICAgICAgc3RyaW5nICs9IGBcXG4gIENhdXNlZCBCeTogJHt0aGlzLmNhdXNlZEJ5LnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvbmZpZ0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDEsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNBbmFseXRpY3NFcnJvciBpcyB1c2VkIGZvciBlcnJvcnMgd2hlbiByZXBvcnRpbmcgYW5hbHl0aWNzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERPTSAqL1xuXG4vKiBnbG9iYWwgSFRNTEVsZW1lbnQsIEhUTUxEb2N1bWVudCwgV2luZG93LCBFdmVudCAqL1xuXG5sZXQgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbi8qKlxuICogU3RhdGljIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIEFQSS5cbiAqIEBuYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcbiAgc3RhdGljIHNldHVwIChkLCBwKSB7XG4gICAgZG9jdW1lbnQgPSBkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIEhUTUxFbGVtZW50IGZyb20gYW5kIEhUTUwgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlIHRvIGEgRE9NIG5vZGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAoaHRtbCkge1xuICAgIGlmICgnY3JlYXRlUmFuZ2UnIGluIGRvY3VtZW50KSB7XG4gICAgICAvLyBwcmVmZXIgdGhpcyBpbXBsZW1lbnRhdGlvbiBhcyBpdCBoYXMgd2lkZXIgYnJvd3NlciBzdXBwb3J0XG4gICAgICAvLyBhbmQgaXQncyBiZXR0ZXIgcGVyZm9ybWluZy5cbiAgICAgIC8vIHNlZSBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9jb252ZXJ0LWh0bWwtc3RpbmdzLWRvbS1ub2Rlc1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrIHRvIHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBqc2RvbSB0aGF0IGNhdXNlcyB0ZXN0cyB0byBmYWlsXG4gICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20vaXNzdWVzLzM5OVxuICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5ib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5IChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheX0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5QWxsIChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGNsaWVudCBjb2RlIGlzIHVzaW5nIGEgcG9pbnRlciB0byBhIGRvbSBub2RlIGFuZCBpdCdzIG51bGwsIGUuZy4gdGhpcy5fY29udGFpbmVyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdykge1xuICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgfVxuXG4gIHN0YXRpYyBvblJlYWR5IChjYikge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICAgIGNiKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgRE9NLm9uKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGVFbGUgd2lsbCBjcmVhdGUgYSB7SFRNTEVsZW1lbnR9IGFuZCBhcHBseSB0aGUgcHJvcGVydGllcyBhdHRyaWJ1dGVzIHRocm91Z2ggYW4gb2JqZWN0IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZWwgVGhlIGVsZW1lbnQgYHRhZ2AgbmFtZSB0byBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNfZGF0YSBPcHRpb25hbCBhdHRyaWJ1dGVzIHRvIGFwcGx5IHRvIHRoZSBuZXcgSFRNTEVsZW1lbnRcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVFbCAoZWwsIG9wdHNfZGF0YSA9IHt9KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICBsZXQgcHJvcHMgPSBPYmplY3Qua2V5cyhvcHRzX2RhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb3BzW2ldID09PSAnY2xhc3MnKSB7XG4gICAgICAgIERPTS5hZGRDbGFzcyhub2RlLCBvcHRzX2RhdGFbcHJvcHNbaV1dKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVbcHJvcHNbaV1dID0gb3B0c19kYXRhW3Byb3BzW2ldXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmQgKHBhcmVudCwgbm9kZSkge1xuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudCA9IERPTS5xdWVyeShwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgSFRNTCBpbmplY3Rpb24gYXMgd2VsbCBhcyBIVE1MRWxlbWVudCBhcHBlbmRzXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZENsYXNzIChub2RlLCBjbGFzc05hbWUpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnLCcpO1xuICAgIGxldCBsZW4gPSBjbGFzc2VzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZW1wdHkgKHBhcmVudCkge1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBjc3MgKHNlbGVjdG9yLCBzdHlsZXMpIHtcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeShzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIHN0eWxlcykge1xuICAgICAgbm9kZS5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXR0ciAoc2VsZWN0b3IsIGF0dHIsIHZhbCkge1xuICAgIERPTS5xdWVyeShzZWxlY3Rvcikuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIH1cblxuICBzdGF0aWMgYXR0cmlidXRlcyAoc2VsZWN0b3IsIGF0dHJzKSB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cnMpXG4gICAgICAuZm9yRWFjaCgoW2F0dHIsIHZhbF0pID0+IHRoaXMuYXR0cihzZWxlY3RvciwgYXR0ciwgdmFsKSk7XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlciAoc2VsZWN0b3IsIGV2ZW50LCBzZXR0aW5ncykge1xuICAgIGxldCBlID0gbmV3IEV2ZW50KGV2ZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICdidWJibGVzJzogdHJ1ZSxcbiAgICAgICdjYW5jZWxhYmxlJzogdHJ1ZVxuICAgIH0sIHNldHRpbmdzIHx8IHt9KSk7XG5cbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxuICBzdGF0aWMgb24gKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBvbmNlIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIG9mZiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRlbGVnYXRlIChjdHh0LCBzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgbGV0IGVsID0gRE9NLnF1ZXJ5KGN0eHQpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB3aGlsZSAoIXRhcmdldC5pc0VxdWFsTm9kZShlbCkpIHtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGhhbmRsZXIoZXZlbnQsIHRhcmdldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudE1hbmFnZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgcmVnaXN0cnkgaXMgYW4gaW50ZXJuYWwgbWFwLCB0aGF0IGNvbnRhaW5zXG4gICAgICogYWxsIGF2YWlsYWJsZSBjb21wb25lbnQgQ0xBU1NFUyB1c2VkIGZvciBjcmVhdGlvbiBvciBvdmVycmlkZS5cbiAgICAgKiBFYWNoIGNvbXBvbmVudCBjbGFzcyBoYXMgYSB1bmlxdWUgVFlQRSwgd2hpY2ggaXMgdXNlZCBhcyB0aGUga2V5IGZvciB0aGUgcmVnaXN0cnlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIGNvbXBvbmVudHMgaXMgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gY29uc3RydWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBsaWJyYXJ5IGRlcGVuZGVuY3lcbiAgICAgKlxuICAgICAqIFRoZSBDb3JlIGNvbnRhaW5zIGJvdGggdGhlIHN0b3JhZ2UgQU5EIHNlcnZpY2VzIHRoYXQgYXJlIG5lZWRlZCBmb3IgcGVyZm9ybWluZyBvcGVyYXRpb25zXG4gICAgICogbGlrZSBzZWFyY2ggYW5kIGF1dG8gY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBUaGUgc3RvcmFnZSBpcyB0aGUgc291cmNlIG9mIHRydXRoIGZvciB0aGUgc3RhdGUgb2YgQUxMIGNvbXBvbmVudHMuXG4gICAgICogV2hlbmV2ZXIgdGhlIHN0b3JhZ2UgaXMgdXBkYXRlZCwgdGhlIHN0YXRlIGdldHMgcHVzaGVkIGRvd24gdG8gdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuX2NvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByaW1hcnkgcmVuZGVyZXIgdG8gdXNlIGZvciBhbGwgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29yZSAoY29yZSkge1xuICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QW5hbHl0aWNzUmVwb3J0ZXIgKHJlcG9ydGVyKSB7XG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSByZXBvcnRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlcnMgYSBjb21wb25lbnQgdG8gYmUgZWxpZ2libGUgZm9yIGNyZWF0aW9uIGFuZCBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFRoZSBDb21wb25lbnQgQ2xhc3MgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyIChjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUgKGNvbXBvbmVudFR5cGUsIG9wdHMpIHtcbiAgICAvLyBFdmVyeSBjb21wb25lbnQgbmVlZHMgbG9jYWwgYWNjZXNzIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgIC8vIGJlY2F1c2Ugc29tZXRpbWVzIGNvbXBvbmVudHMgaGF2ZSBzdWJjb21wb25lbnRzIHRoYXQgbmVlZCB0byBiZVxuICAgIC8vIGNvbnN0cnVjdGVkIGR1cmluZyBjcmVhdGlvblxuICAgIGxldCBzeXN0ZW1PcHRzID0ge1xuICAgICAgY29yZTogdGhpcy5fY29yZSxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLl9yZW5kZXJlcixcbiAgICAgIGFuYWx5dGljc1JlcG9ydGVyOiB0aGlzLl9hbmFseXRpY3NSZXBvcnRlcixcbiAgICAgIGNvbXBvbmVudE1hbmFnZXI6IHRoaXNcbiAgICB9O1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBpc1R3aW46IHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjb21wb25lbnQgPT4gY29tcG9uZW50LmNvbnN0cnVjdG9yLnR5cGUgPT09IGNvbXBvbmVudFR5cGUpLFxuICAgICAgLi4ub3B0c1xuICAgIH07XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKGNvbmZpZywgc3lzdGVtT3B0cylcbiAgICAgICAgLmluaXQoY29uZmlnKTtcblxuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBnbG9iYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZSAmJiB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChjb21wb25lbnQubW9kdWxlSWQgPT09IHVuZGVmaW5lZCB8fCBjb21wb25lbnQubW9kdWxlSWQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlXG4gICAgICAgIC5vbigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCBmcm9tIHRoZSBsaXN0IG9mIGFjdGl2ZSBjb21wb25lbnRzIGFuZCByZW1vdmVcbiAgICogdGhlIGFzc29jaWF0ZWQgc3RvcmFnZSBldmVudCBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmUgKGNvbXBvbmVudCkge1xuICAgIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZS5vZmYoJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCk7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZEluZGV4KGMgPT4gYy5uYW1lID09PSBjb21wb25lbnQubmFtZSk7XG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbXBuZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQnlOYW1lIChuYW1lKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBuYW1lKTtcbiAgICBjb21wb25lbnQucmVtb3ZlKCk7XG4gICAgRE9NLmVtcHR5KGNvbXBvbmVudC5fY29udGFpbmVyKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbXBvbmVudCAodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmQoYyA9PiBjLmNvbnN0cnVjdG9yLnR5cGUgPT09IHR5cGUpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZW5kZXJlciAqL1xuXG4vKipcbiAqIFJlbmRlcmVyIGlzIGFuIGFic3RyYWN0IGNsYXNzIHRoYXQgYWxsIFJlbmRlcmVycyBzaG91bGQgZXh0ZW5kIGFuZCBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAvKipcbiAgICogcmVuZGVyIGlzIGEgY29yZSBtZXRob2QgZm9yIGFsbCByZW5kZXJlcnMuXG4gICAqIEFsbCBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgY2xhc3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICByZW5kZXIgKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG5cbiAgfVxuXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG5cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgSGFuZGxlYmFyc1JlbmRlcmVyICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyoqXG4gKiBIYW5kbGViYXJzUmVuZGVyZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZhdGUgaGFuZGxlYmFycyByZW5kZXJlci5cbiAqIEBleHRlbmRzIFJlbmRlcmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZWJhcnNSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IgKHRlbXBsYXRlcyA9IHt9LCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXJcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcHJlLWNvbXBpbGVkIGhhbmRsZWJhcnMgdGVtcGxhdGVzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMgfHwge307XG4gIH1cblxuICBpbml0ICh0ZW1wbGF0ZXMpIHtcbiAgICAvLyBBc3NpZ24gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXIgYW5kIHRlbXBsYXRlcyBiYXNlZCBvblxuICAgIC8vIGluZm9ybWF0aW9uIHByb3ZpZGVkIGZyb20gZXh0ZXJuYWwgZGVwIChpbiBkZWZhdWx0IGNhc2UsIGl0IGNvbWVzIGZyb20gZXh0ZXJuYWwgc2VydmVyIHJlcXVlc3QpXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGI7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgT25jZSB3ZSByZS13cml0ZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIG5ldyBoZWxwZXJzIGxpYnJhcnlcbiAgICAvLyB3ZSBwcm9iYWJseSBkb24ndCBuZWVkIHRoZXNlIGN1c3RvbSBoZWxwZXJzIGFueW1vcmVcbiAgICB0aGlzLl9yZWdpc3RlckN1c3RvbUhlbHBlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlckhlbHBlciBpcyBhIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGV4dGVybmFsIGRlcGVuZGVuY2llcyB0b1xuICAgKiByZWdpc3RlciB0aGVpciBvd24gY3VzdG9tIGhlbHBlcnMgdG8gb3VyIGludGVybmFsIEhhbmRsZWJhcnMgQ29tcGlsZXJcbiAgICovXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMuX2hhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBpbGUgYSBoYW5kbGViYXJzIHRlbXBsYXRlIHNvIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkLFxuICAgKiB1c2luZyB0aGUge0hhbmRsZWJhcnN9IGNvbXBpbGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIGNvbXBpbGVcbiAgICovXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHdpbGwgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgUHJvdmlkZSBlaXRoZXIgYSB0ZW1wbGF0ZU5hbWUgb3IgYSBwcmUtY29tcGlsZWQgdGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSB0byB0aGUgdGVtcGxhdGVcbiAgICovXG4gIHJlbmRlciAoY29uZmlnLCBkYXRhKSB7XG4gICAgLy8gSWYgYSBjdXN0b20gdGVtcGxhdGUgaXMgcHJvdmlkZWQsIHVzZSBpdCxcbiAgICAvLyBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIHRoZSB0ZW1wbGF0ZSBuYW1lXG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBpbnRlcmZhY2Ugc2hvdWxkIHByb2JhYmx5IGJlIGxlc3MgdWdseVxuICAgIGlmIChjb25maWcudGVtcGxhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb25maWcudGVtcGxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbY29uZmlnLnRlbXBsYXRlTmFtZV0oZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQvcmVuZGVyIHRlbXBsYXRlOiAnICsgY29uZmlnLnRlbXBsYXRlTmFtZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyAoKSB7XG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgPT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmbm90ZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxICE9PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdmb3JtYXRQaG9uZU51bWJlcicsIGZ1bmN0aW9uIChwaG9uZU51bWJlclN0cmluZykge1xuICAgICAgdmFyIGNsZWFuZWQgPSAoJycgKyBwaG9uZU51bWJlclN0cmluZykucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgaW50bENvZGUgPSAobWF0Y2hbMV0gPyAnKzEgJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIFtpbnRsQ29kZSwgJygnLCBtYXRjaFsyXSwgJykgJywgbWF0Y2hbM10sICctJywgbWF0Y2hbNF1dLmpvaW4oJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdhc3NpZ24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFvcHRpb25zLmRhdGEucm9vdCkge1xuICAgICAgICBvcHRpb25zLmRhdGEucm9vdCA9IHt9O1xuICAgICAgfVxuXG4gICAgICBsZXQgdiA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB2ID0gdiArIGFyZ3NbaV07XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZGF0YS5yb290W25hbWVdID0gdjtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2pzb24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuYW1lID09PSB1bmRlZmluZWRcbiAgICAgICAgPyAnJ1xuICAgICAgICA6IEpTT04uc3RyaW5naWZ5KG5hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSGFuZGxlYmFyc1JlbmRlcmVyIGZyb20gJy4vaGFuZGxlYmFyc3JlbmRlcmVyJztcblxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhpcyB3aWxsIGNvbnRhaW4gYWxsIGRpZmZlcmVudCB0eXBlcyBvZiByZW5kZXJlcnNcbi8vIEUuZy4gTXVzdGFjaGUsIFNPWSwgSGFuZGxlQmFycywgUmVhY3QsIGV0Yy5cbmV4cG9ydCBjb25zdCBSZW5kZXJlcnMgPSB7XG4gIFNPWTogUmVuZGVyZXIsXG4gIEhhbmRsZWJhcnM6IEhhbmRsZWJhcnNSZW5kZXJlclxufTtcbiIsIi8qKiBAbW9kdWxlIEV2ZW50RW1pdHRlciAqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0YXRlICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vLi4vY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBTdGF0ZSBjb250YWlucyB0aGUgZGF0YSBmb3IgdGhlIGNvbXBvbmVudFxuICogYW5kIGV4cG9zZXMgYW4ge0V2ZW50RW1pdHRlcn0gaW50ZXJmYWNlIHNvIHRoYXQgZXh0ZXJuYWxcbiAqIGRlcGVuZGVuY2llcyBjYW4gbGlzdGVuL2hvb2sgc3Vic2NyaWJlIHRvIG1lc3NhZ2VzL3VwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogTk9URShiaWxseSk6IERvZXMgbm90IGZpcmUgYW4gdXBkYXRlIG1lc3NhZ2VcbiAgICovXG4gIGluaXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgT3B0aW9uYWwsIGlmIHByb3AgaXMgYSB7c3RyaW5nfSwgaXQgd2lsbCBhc3NpZ24gdGhlIHZhbHVlIHRvIHRoYXQgcHJvcGVydHlcbiAgICovXG4gIHNldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZSBlbmFibGVzIHlvdSB0byB1cGRhdGUgYSBzaW5nbGUgcHJvcGVydHksIG9yIGNvbXBsZXRlIHN0YXRlXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYXJndW1lbnRzIHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIElmIHByb3AgaXMgYSB7c3RyaW5nfSwgcHJvdmlkZSBpdHMgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIGlmIChvcHRWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBwcm9wO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ZVtwcm9wXSA9IG9wdFZhbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGE7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIHByb3BlcnRpZXMgdmFsdWUgZnJvbSB0aGUgc3RhdGVcbiAgICogSWYgbm8gcHJvcGVydHkgcHJvdmlkZWQsIHJldHVybiB0aGUgZnVsbCBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0UHJvcCBvcHRpb25hbCBwcm9wZXJ0eSB0byByZXRyaWV2ZVxuICAgKi9cbiAgZ2V0IChvcHRQcm9wKSB7XG4gICAgaWYgKG9wdFByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbb3B0UHJvcF07XG4gIH1cblxuICBoYXMgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbcHJvcF0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzSlNPTiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIdHRwUmVxdWVzdGVyICovXG5cbi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnXG59O1xuXG4vKipcbiAqIEh0dHBSZXF1ZXN0ZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIEFKQVhcbiAqIHJlbGF0ZWQgbWF0dGVycy4gSXQncyB1c2VkIHRvIG1ha2UgYWxsIHR5cGVzIG9mIG5ldHdvcmsgcmVxdWVzdHNcbiAqIGFuZCBleHBvc2VzIGEgcHJvbWlzZSBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBSZXF1ZXN0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgR0VUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIGdldCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChNZXRob2RzLkdFVCwgdGhpcy5lbmNvZGVQYXJhbXModXJsLCBkYXRhKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUE9TVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxQYXJhbXMgVGhlIHBhcmFtcyB0byBlbmNvZGUgaW50byB0aGUgVVJMXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uQm9keSBUaGUgcmVxdWVzdCBib2R5IChqc29uKSB0byBwcm92aWRlIHdpdGggdGhlIFBPU1QgcmVxdWVzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdENvbmZpZyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCB1cmxQYXJhbXMsIGpzb25Cb2R5LCByZXF1ZXN0Q29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgdXJsUGFyYW1zKSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoanNvbkJvZHkpLFxuICAgICAgICBjcmVkZW50aWFsczogdW5kZWZpbmVkXG4gICAgICB9LCByZXF1ZXN0Q29uZmlnKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0IChtZXRob2QsIHVybCwgb3B0cykge1xuICAgIGNvbnN0IHJlcUFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAnbWV0aG9kJzogbWV0aG9kLFxuICAgICAgJ2NyZWRlbnRpYWxzJzogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cyk7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCByZXFBcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgYmVhY29uIHRvIHRoZSBwcm92aWRlZCB1cmwgd2hpY2ggd2lsbCBzZW5kIGEgbm9uLWJsb2NraW5nIHJlcXVlc3RcbiAgICogdG8gdGhlIHNlcnZlciB0aGF0IGlzIGd1YXJhbnRlZWQgdG8gc2VuZCBiZWZvcmUgcGFnZSBsb2FkLiBObyByZXNwb25zZSBpcyByZXR1cm5lZCxcbiAgICogc28gYmVhY29ucyBhcmUgcHJpbWFyaWx5IHVzZWQgZm9yIGFuYWx5dGljcyByZXBvcnRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBzZW5kIHRoZSBiZWFjb24gdG9cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgcGF5bG9hZCB0byBzZW5kIGluIHRoZSBiZWFjb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsbHkgcXVldWVkXG4gICAqL1xuICBiZWFjb24gKHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIGVuY29kZVBhcmFtcyAodXJsLCBwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaGFzUGFyYW0gPSB1cmwuaW5kZXhPZignPycpID4gLTE7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSAnJztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWhhc1BhcmFtKSB7XG4gICAgICAgIGhhc1BhcmFtID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJyYnO1xuICAgICAgfVxuXG4gICAgICBzZWFyY2hRdWVyeSArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKiBUaGUgY3VycmVudCBsaWIgdmVyc2lvbiwgcmVwb3J0ZWQgd2l0aCBlcnJvcnMgYW5kIGFuYWx5dGljcyAqL1xuZXhwb3J0IGNvbnN0IExJQl9WRVJTSU9OID0gJ3YwLjkuNCc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBsaXZlIGFwaSBiYWNrZW5kICovXG5leHBvcnQgY29uc3QgTElWRV9BUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGtub3dsZWRnZSBhcGkgYmFja2VuZCAqL1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2FwaS55ZXh0LmNvbSc7XG5cbi8qKiBUaGUgZGVmYXVsdCB1cmwgZm9yIGNvbXBpbGVkIGNvbXBvbmVudCB0ZW1wbGF0ZXMgKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFRF9URU1QTEFURVNfVVJMID0gYGh0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzLyR7TElCX1ZFUlNJT059L2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzYDtcblxuLyoqIFRoZSBiYXNlIHVybHMgZm9yIHRoZSBhbmFseXRpY3MgYmFja2VuZCAgKi9cbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1NfQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZWFsdGltZWFuYWx5dGljcy55ZXh0LmNvbSc7XG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMX05PX0NPT0tJRSA9ICdodHRwczovL2Fuc3dlcnMueWV4dC1waXhlbC5jb20nO1xuIiwiLyoqIEBtb2R1bGUgU2VhcmNoUGFyYW1zICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuLyoqXG4gKiBTZWFyY2hQYXJhbXMgaXMgYSBjbGFzcyB0byBnZXQgdGhlIHNlYXJjaCBwYXJhbXMgaW4gYSBVUkwuXG4gKiBJdCBpcyBhIHJlcGxhY2VtZW50IGZvciBVUkwuc2VhcmNoUGFyYW1zIGFuZCBVUkxTZWFyY2hQYXJhbXMgZm9yIGJyb3dzZXJzIGxpa2UgSUUxMVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hQYXJhbXMge1xuICBjb25zdHJ1Y3RvciAodXJsKSB7XG4gICAgLyoqXG4gICAgICogTWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gdXJsLCBxdWVyeSBwYXJhbSAtPiB2YWx1ZVxuICAgICAqIE9ubHkgdXNlZCBpZiBVUkxTZWFyY2hQYXJhbXMgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdpbmRvd1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSB7fTtcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LlVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBjcmVhdGVzIGEgbWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1zIGluIGEgZ2l2ZW4gdXJsXG4gICAqIFRoZSBxdWVyeSBwYXJhbSB2YWx1ZXMgYXJlIGRlY29kZWQgYmVmb3JlIGJlaW5nIHB1dCBpbiB0aGUgbWFwXG4gICAqIFRocmVlIHR5cGVzIG9mIGlucHV0IGFyZSBzdXBwb3J0ZWRcbiAgICogICAoMSkgZnVsbCBVUkwgZS5nLiBodHRwOi8vd3d3LnlleHQuY29tLz9xPWhlbGxvXG4gICAqICAgKDIpIHBhcmFtcyB3aXRoID8gZS5nLiA/cT1oZWxsb1xuICAgKiAgICgxKSBwYXJhbXMgd2l0aG91dCA/IGUuZy4gcT1oZWxsb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmxcbiAgICogQHJldHVybnMge09iamVjdH0gbWFwcGluZyBmcm9tIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlIHdoZXJlIHZhbHVlIGlzICcnIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYXJzZSAodXJsKSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSB1cmw7XG5cbiAgICBpZiAoc2VhcmNoID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHVybCBpbnB1dHMgdG8gc3RyaW5nIG9mIHF1ZXJ5IHBhcmFtcyBzZXBhcmF0ZWQgYnkgJlxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHNlYXJjaCA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5VmFsID0gZW5jb2RlZFBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKGtleVZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gU2VhcmNoUGFyYW1zLmRlY29kZShrZXlWYWxbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSBrZXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHBhcmFtIHZhbHVlLCBudWxsIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IChxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGFyYW1zW1N0cmluZyhxdWVyeSldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJhbXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBxdWVyeSBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW0gdXBkYXRlIHdpdGhcbiAgICovXG4gIHNldCAobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLl9wYXJhbXNbU3RyaW5nKG5hbWUpXSA9IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogaGFzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtIGtleSBleGlzdHMgaW4gdGhlIHBhcmFtcyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBwYXJhbSBpcyBpbiB0aGUgcGFyYW1zIG9iamVjdCwgZmFsc2Ugby93XG4gICAqL1xuICBoYXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluIHRoaXMuX3BhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0b1N0cmluZyByZXR1cm5zIGEgdXJsIHdpdGggYWxsIHRoZSBxdWVyeSBwYXJhbXMgaW4gdGhlIHBhcmFtcyBvYmplY3QgKHdpdGhvdXQgYSA/KVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHN0cmluZyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHN0cmluZy5wdXNoKGAke2tleX09JHtTZWFyY2hQYXJhbXMuZW5jb2RlKHRoaXMuX3BhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuICBlbnRyaWVzICgpIHtcbiAgICBsZXQgZW50cmllcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChba2V5LCB0aGlzLl9wYXJhbXNba2V5XV0pO1xuICAgIH1cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgTElWRV9BUElfQkFTRV9VUkwsIExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vdWkvZG9tL3NlYXJjaHBhcmFtcyc7IC8vIFRPRE8gaWRlYWxseSB0aGlzIHdvdWxkIGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtXG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiB1c2VkIGZvciBtYWtpbmcgbmV0d29yayByZXF1ZXN0IGFuZCBoYW5kbGluZyBlcnJvcnNcbiAgICAgKiBAdHlwZSB7SHR0cFJlcXVlc3Rlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlcXVlc3RlciA9IG5ldyBIdHRwUmVxdWVzdGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdHMuYmFzZVVybCB8fCBMSVZFX0FQSV9CQVNFX1VSTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbmRwb2ludCB0byB1c2UgaW4gdGhlIHVybCAoYXBwZW5kZWQgdG8gdGhlIHtiYXNlVXJsfSlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZW5kcG9pbnQgPSBvcHRzLmVuZHBvaW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDE7XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIGRhdGEgcGFyYW1zIHRoYXQgYXJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBvcHRzLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgY3JlYXRlcyBhIG5ldyBgR0VUYCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHJlcXVlc3QgY2xhc3NcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldChcbiAgICAgIHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYmFzZVBhcmFtcygpLCB0aGlzLnNhbml0aXplUGFyYW1zKHRoaXMuX3BhcmFtcykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBwb3N0IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5wb3N0KFxuICAgICAgdGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LFxuICAgICAgdGhpcy5iYXNlUGFyYW1zKCkgLyogdXJsUGFyYW1zICovLFxuICAgICAgdGhpcy5zYW5pdGl6ZVBhcmFtcyh0aGlzLl9wYXJhbXMpIC8qIGpzb25Cb2R5ICovLFxuICAgICAgb3B0cyAvKiByZXF1ZXN0Q29uZmlnICovKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYmFzZVBhcmFtcyAoKSB7XG4gICAgbGV0IGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleSxcbiAgICAgICdqc0xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTlxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICBpZiAodXJsUGFyYW1zLmhhcygnYmV0YScpKSB7XG4gICAgICBiYXNlUGFyYW1zWydiZXRhJ10gPSB1cmxQYXJhbXMuZ2V0KCdiZXRhJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VQYXJhbXM7XG4gIH1cblxuICBzYW5pdGl6ZVBhcmFtcyAocGFyYW1zID0ge30pIHtcbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hBcGkgKi9cblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2VhcmNoc2VydmljZScpLmRlZmF1bHR9IFNlYXJjaFNlcnZpY2UgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzQ29yZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU2VhcmNoQXBpIGlzIHRoZSBBUEkgZm9yIGRvaW5nIHZhcmlvdXMgdHlwZXMgb2Ygc2VhcmNoXG4gKiBvdmVyIHRoZSBuZXR3b3JrIChlLmcuIHZlcnRpY2FsIG9yIHVuaXZlcnNhbClcbiAqXG4gKiBAaW1wbGVtZW50cyB7U2VhcmNoU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbnN3ZXJzIGNvbmZpZyB2ZXJzaW9uIHRvIHVzZSBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uID0gY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gY29uZmlnLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHsgaW5wdXQsIGZpbHRlciwgZmFjZXRGaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGlkLCBnZW9sb2NhdGlvbiwgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsIHNraXBTcGVsbENoZWNrLCBxdWVyeVRyaWdnZXIsIHNlc3Npb25UcmFja2luZ0VuYWJsZWQgfSkge1xuICAgIGlmIChsaW1pdCA+IDUwKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvcmVFcnJvcignUHJvdmlkZWQgc2VhcmNoIGxpbWl0IHVuc3VwcG9ydGVkJywgJ1NlYXJjaEFwaScpO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2ZpbHRlcnMnOiBmaWx0ZXIsXG4gICAgICAgICdmYWNldEZpbHRlcnMnOiBmYWNldEZpbHRlcixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdsaW1pdCc6IGxpbWl0LFxuICAgICAgICAnb2Zmc2V0Jzogb2Zmc2V0LFxuICAgICAgICAnbG9jYXRpb24nOiBnZW9sb2NhdGlvbiA/IGAke2dlb2xvY2F0aW9uLmxhdH0sJHtnZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBnZW9sb2NhdGlvbiA/IGdlb2xvY2F0aW9uLnJhZGl1cyA6IG51bGwsXG4gICAgICAgICdxdWVyeUlkJzogaWQsXG4gICAgICAgICdyZXRyaWV2ZUZhY2V0cyc6IGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkLFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlLFxuICAgICAgICAnc2tpcFNwZWxsQ2hlY2snOiBza2lwU3BlbGxDaGVjayxcbiAgICAgICAgJ3F1ZXJ5VHJpZ2dlcic6IHF1ZXJ5VHJpZ2dlcixcbiAgICAgICAgJ3Nlc3Npb25UcmFja2luZ0VuYWJsZWQnOiBzZXNzaW9uVHJhY2tpbmdFbmFibGVkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB1bml2ZXJzYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCBwYXJhbXMpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICdsb2NhdGlvbic6IHBhcmFtcy5nZW9sb2NhdGlvbiA/IGAke3BhcmFtcy5nZW9sb2NhdGlvbi5sYXR9LCR7cGFyYW1zLmdlb2xvY2F0aW9uLmxuZ31gIDogbnVsbCxcbiAgICAgICAgJ3JhZGl1cyc6IHBhcmFtcy5nZW9sb2NhdGlvbiA/IHBhcmFtcy5nZW9sb2NhdGlvbi5yYWRpdXMgOiBudWxsLFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlLFxuICAgICAgICAnc2tpcFNwZWxsQ2hlY2snOiBwYXJhbXMuc2tpcFNwZWxsQ2hlY2ssXG4gICAgICAgICdxdWVyeVRyaWdnZXInOiBwYXJhbXMucXVlcnlUcmlnZ2VyLFxuICAgICAgICAnc2Vzc2lvblRyYWNraW5nRW5hYmxlZCc6IHBhcmFtcy5zZXNzaW9uVHJhY2tpbmdFbmFibGVkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGFuYWx5dGljcyBldmVudCB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc0V2ZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGxhYmVsKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVwb3J0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmV2ZW50VHlwZSA9IHR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIGJlIHByb3ZpZGVkIGZvciB0aGUgZXZlbnRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCwgQU5BTFlUSUNTX0JBU0VfVVJMX05PX0NPT0tJRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvYW5hbHl0aWNzcmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gQW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlICovXG5cbi8qKlxuICogQ2xhc3MgZm9yIHJlcG9ydGluZyBhbmFseXRpY3MgZXZlbnRzIHRvIHRoZSBzZXJ2ZXIgdmlhIEhUVFBcbiAqXG4gKiBAaW1wbGVtZW50cyB7QW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb3JlLCBleHBlcmllbmNlS2V5LCBleHBlcmllbmNlVmVyc2lvbiwgYnVzaW5lc3NJZCwgZ2xvYmFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVybmFsIGJ1c2luZXNzIGlkZW50aWZpZXIgdXNlZCBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9idXNpbmVzc0lkID0gYnVzaW5lc3NJZDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGV2ZXJ5IGFuYWx5dGljIGV2ZW50IHJlcG9ydGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbE9wdGlvbnMsIHsgZXhwZXJpZW5jZUtleSB9KTtcblxuICAgIC8qKlxuICAgICAqIEJhc2UgVVJMIGZvciB0aGUgYW5hbHl0aWNzIEFQSVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gQU5BTFlUSUNTX0JBU0VfVVJMX05PX0NPT0tJRTtcblxuICAgIGlmIChleHBlcmllbmNlVmVyc2lvbikge1xuICAgICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5leHBlcmllbmNlVmVyc2lvbiA9IGV4cGVyaWVuY2VWZXJzaW9uO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbiB0byBxdWVyeSBpZCB1cGRhdGVzXG4gICAgY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWV9JRCwgaWQgPT4gdGhpcy5zZXRRdWVyeUlkKGlkKSk7XG4gIH1cblxuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICByZXBvcnQgKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBBbmFseXRpY3NFdmVudCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IoJ1RyaWVkIHRvIHNlbmQgaW52YWxpZCBhbmFseXRpY3MgZXZlbnQnLCBldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnQuYWRkT3B0aW9ucyh0aGlzLl9nbG9iYWxPcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgSHR0cFJlcXVlc3RlcigpLmJlYWNvbihcbiAgICAgIGAke3RoaXMuX2Jhc2VVcmx9L3JlYWx0aW1lYW5hbHl0aWNzL2RhdGEvYW5zd2Vycy8ke3RoaXMuX2J1c2luZXNzSWR9YCxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEnOiBldmVudC50b0FwaUV2ZW50KClcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHNldENvbnZlcnNpb25UcmFja2luZ0VuYWJsZWQgKGlzRW5hYmxlZCkge1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBpc0VuYWJsZWQgPyBBTkFMWVRJQ1NfQkFTRV9VUkwgOiBBTkFMWVRJQ1NfQkFTRV9VUkxfTk9fQ09PS0lFO1xuICB9XG59XG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvYW5hbHl0aWNzcmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gQW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlICovXG5cbi8qKlxuICogQGltcGxlbWVudHMge0FuYWx5dGljc1JlcG9ydGVyU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9vcEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHJlcG9ydCAoZXZlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzZXRDb252ZXJzaW9uVHJhY2tpbmdFbmFibGVkIChpc0VuYWJsZWQpIHt9XG59XG4iLCIvKiogQG1vZHVsZSBNb2R1bGVEYXRhICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogTW9kdWxlRGF0YSBpcyB1c2VkIGFzIGEgZ2VuZXJpYyBtb2RlbCBmb3IgU3RvcmFnZS5cbiAqIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBNb2R1bGVEYXRhIHBvd2VycyBhIHNpbmdsZSBjb21wb25lbnQuXG5cbiAqIEEgZGF0YSBtb2RlbCB0aGF0IGV4cG9zZXMgYW4gZXZlbnQgZW1pdHRlciBpbnRlcmZhY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlRGF0YSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgdGhpcy5jYXB0dXJlUHJldmlvdXMoKTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShkYXRhKSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBzaGFsbG93IGVxdWFsaXR5XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gIT09IGRhdGFba2V5XSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhcHR1cmVQcmV2aW91cyAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCArIDEgPiA1KSB7XG4gICAgICB0aGlzLl9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YSBpcyBldmVyIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSB8fCB7fSkpO1xuICB9XG5cbiAgdW5kbyAoKSB7XG4gICAgbGV0IHByZXZpb3VzID0ge307XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByZXZpb3VzID0gSlNPTi5wYXJzZSh0aGlzLl9wcmV2aW91cy5wb3AoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YS5zZXQocHJldmlvdXMpO1xuICB9XG5cbiAgcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR2xvYmFsU3RvcmFnZSAqL1xuXG5pbXBvcnQgTW9kdWxlRGF0YSBmcm9tICcuL21vZHVsZWRhdGEnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIFN0b3JhZ2UgaXMgYSBjb250YWluZXIgYXJvdW5kIGFwcGxpY2F0aW9uIHN0YXRlLlxuICogSXQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIENSVUQgb3BlcmF0aW9ucyBhcyB3ZWxsIGFzIGxpc3RlbmluZ1xuICogZm9yIHN0YXRlZnVsIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lciA9IHt9O1xuICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogY29tcGxldGVseSBvdmVyd3JpdGluZyBhbnkgZXhpc3RpbmcgZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gc2V0XG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byBzZXRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgdGhpcy5faW5pdERhdGFDb250YWluZXIoa2V5LCBkYXRhKTtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0uc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbGwga2V5L3ZhbHVlIHBhaXJzIGluIHRoZSBwcm92aWRlZCBtYXAgdG8gdGhlIHN0b3JhZ2VcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBrZXkvdmFsdWUgcGFpcnMgdG8gc2V0IGluIHRoZSBzdG9yYWdlXG4gICAqL1xuICBzZXRBbGwgKGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgIGlmIChrZXkgPT09IFN0b3JhZ2VLZXlzLlFVRVJZKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXQoa2V5LCB2YWwpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBxdWVyeSBsYXN0IHNpbmNlIGl0IHRyaWdnZXJzIGEgc2VhcmNoXG4gICAgLy8gVE9ETzogbW92ZSBsaXN0ZW5lcnMgdXAgc28gYWxsIG9mIHN0b3JhZ2UgY2FuIGJlIHVwZGF0ZWQgYXQgdGhlIHNhbWUgdGltZVxuICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZXSkge1xuICAgICAgdGhpcy5zZXQoU3RvcmFnZUtleXMuUVVFUlksIGRhdGFbU3RvcmFnZUtleXMuUVVFUlldKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBkZWxldGVcbiAgICovXG4gIGRlbGV0ZSAoa2V5KSB7XG4gICAgLy8gTm90ZTogRG8gd2UgbmVlZCB0byBjbGVhbiB1cCBsaXN0ZW5lcnMgaGVyZT9cbiAgICBkZWxldGUgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgICAgY2I6IGNiXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9uKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vZmYoZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfYXBwbHlGdXR1cmVMaXN0ZW5lcnMgKG1vZHVsZUlkKSB7XG4gICAgbGV0IGZ1dHVyZXMgPSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICAgIGlmICghZnV0dXJlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnV0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGZ1dHVyZSA9IGZ1dHVyZXNbaV07XG4gICAgICB0aGlzLm9uKGZ1dHVyZS5ldmVudCwgbW9kdWxlSWQsIGZ1dHVyZS5jYik7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaEFwaSB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi9hbmFseXRpY3MvYW5hbHl0aWNzcmVwb3J0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb29wQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2FuYWx5dGljcy9ub29wYW5hbHl0aWNzcmVwb3J0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2R1bGVEYXRhIH0gZnJvbSAnLi9zdG9yYWdlL21vZHVsZWRhdGEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UnO1xuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50ICovXG5cbmltcG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4uL3JlbmRlcmluZy9jb25zdCc7XG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4uLy4uL2NvcmUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci50eXBlO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnRDb250YWluZXIgPSBjb25maWcucGFyZW50Q29udGFpbmVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgKGRhdGEpIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gbmV3IFN0YXRlKGNvbmZpZy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gc3lzdGVtQ29uZmlnLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBzeXN0ZW1Db25maWcuY29tcG9uZW50TWFuYWdlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciwgdXNlZCB0byByZXBvcnQgZXZlbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtBbmFseXRpY3NSZXBvcnRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyID0gc3lzdGVtQ29uZmlnLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IGNvbmZpZy5hbmFseXRpY3NPcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHdoZW4gbW91bnRlZC9yZW5kZXJlZC5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgaWYgKHRoaXMuX3BhcmVudENvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KGNvbmZpZy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnRDb250YWluZXIsIGNvbmZpZy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogY29uZmlnLmNvbnRhaW5lci5zdWJzdHJpbmcoMSwgY29uZmlnLmNvbnRhaW5lci5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgICAgICBET00uYXBwZW5kKHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5fY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGNvbnRhaW5lciBET00gbm9kZTogJyArIGNvbmZpZy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8ge3RoaXMuX2NvbnRhaW5lcn0gbm9kZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBjb25maWcucmVuZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCB7UmVuZGVyZXJ9IHRoYXQgd2lsbCBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gc3lzdGVtQ29uZmlnLnJlbmRlcmVyIHx8IFJlbmRlcmVycy5IYW5kbGViYXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHN0cmluZyB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAgICogSWYgdGhpcyBpcyBsZWZ0IGVtcHR5LCB3ZSBsb29rdXAgdGhlIHRlbXBsYXRlIHRoZSBiYXNlIHRlbXBsYXRlcyB1c2luZyB0aGUgdGVtcGxhdGVOYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUoY29uZmlnLnRlbXBsYXRlKSA6IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGVOYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogVGhpcyBpcyBvbmx5IHVzZWQgaWYgX3RlbXBsYXRlIGlzIGVtcHR5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gY29uZmlnLnRlbXBsYXRlTmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRUZW1wbGF0ZU5hbWUoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBjb25maWcudHJhbnNmb3JtRGF0YSB8fCB0aGlzLnRyYW5zZm9ybURhdGEgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgY3JlYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbkNyZWF0ZSA9IGNvbmZpZy5vbkNyZWF0ZU92ZXJyaWRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5vbkNyZWF0ZSA9IHRoaXMub25DcmVhdGUuYmluZCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBNb3VudGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uTW91bnQgPSBjb25maWcub25Nb3VudE92ZXJyaWRlIHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLm9uTW91bnQgPSB0aGlzLm9uTW91bnQuYmluZCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudHMgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZU92ZXJyaWRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICAgIHRoaXMub25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25DcmVhdGUgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25DcmVhdGUgPSBjb25maWcub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25Nb3VudCBjYWxsYmFja1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnVzZXJPbk1vdW50ID0gY29uZmlnLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25VcGRhdGUgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25VcGRhdGUgPSBjb25maWcub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2RlZmF1bHQnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgICAgdGhpcy51c2VyT25DcmVhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRXJyb3IgaW5pdGlhbGl6aW5nIGNvbXBvbmVudCcsXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudHlwZSxcbiAgICAgICAgZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgdGhpcy51c2VyT25VcGRhdGUoKTtcbiAgICAgICAgdGhpcy51bk1vdW50KCk7XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICAgJ0Vycm9yIHVwZGF0aW5nIGNvbXBvbmVudCcsXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50eXBlLFxuICAgICAgICAgIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9jb25maWdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbm1vdW50IGFuZCByZW1vdmUgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0XG4gICAqIG9mIGFjdGl2ZSBjb21wb25lbnRzXG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQudW5Nb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5vblVuTW91bnQoKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBjb25zdCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWNvbXBvbmVudF06bm90KFtkYXRhLWlzLWNvbXBvbmVudC1tb3VudGVkXSknKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdGUuZ2V0KCkpKSk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQubW91bnQoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIHRoaXMudXNlck9uTW91bnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICAvLyBUZW1wb3JhcnkgZml4IGZvciBwYXNzaW5nIGltbXV0YWJsZSBkYXRhIHRvIHRyYW5zZm9ybURhdGEoKS5cbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQ29tcG9uZW50TW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBjb25zdCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXSB8fCB7fTtcblxuICAgIG9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgICB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hpbGREYXRhLnJldmVyc2UoKTtcbiAgICBjaGlsZERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBkZWJvdW5jZSBkdXJhdGlvbiBmb3IgcmVzaXplIGV2ZW50c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMTAwO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IGNvbmZpZy5kcm9wZG93bkxhYmVsIHx8ICdNb3JlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpY29uIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9IGNvbmZpZy5kcm9wZG93bkljb24gfHwgJ2thYm9iJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlbmRlciBhIHN0YXRpYyBuYXZpZ2F0aW9uIHdpdGggbm8gXCJtb3JlXCIgbWVudVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljID0gY29uZmlnLnN0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogQnJlYWtwb2ludHMgYXQgd2hpY2ggbmF2aWdhdGlvbiBpdGVtcyBtb3ZlIHRvIHRoZSBcIm1vcmVcIiBkcm9wZG93blxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2RlYm91bmNlVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJlZml0TmF2LmJpbmQodGhpcyksIFJFU0laRV9ERUJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIERPTS5vbih3aW5kb3csICdjbGljaycsIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgICAgRE9NLm9uKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyksICdjbGljaycsIHRoaXMudG9nZ2xlTW9yZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZml0TmF2ICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgY29uc3QgbWFpbkxpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY29sbGFwc2VkTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcblxuICAgIGNvbnN0IG5hdldpZHRoID0gbW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpXG4gICAgICA/IGNvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgOiBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtb3JlQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgIGxldCBudW1CcmVha3BvaW50cyA9IHRoaXMuX25hdkJyZWFrcG9pbnRzLmxlbmd0aDtcblxuICAgIC8vIHN1bSBjaGlsZCB3aWR0aHMgaW5zdGVhZCBvZiB1c2luZyBwYXJlbnQncyB3aWR0aCB0byBhdm9pZFxuICAgIC8vIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gICAgbGV0IG1haW5MaW5rc1dpZHRoID0gMDtcbiAgICBmb3IgKGxldCBlbCBvZiBtYWluTGlua3MuY2hpbGRyZW4pIHtcbiAgICAgIG1haW5MaW5rc1dpZHRoICs9IGVsLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoKSB7XG4gICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wdXNoKG1haW5MaW5rc1dpZHRoKTtcbiAgICAgIGNvbnN0IGxhc3RMaW5rID0gbWFpbkxpbmtzLmNoaWxkcmVuLml0ZW0obWFpbkxpbmtzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGxhc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZExpbmtzLnByZXBlbmQobGFzdExpbmspO1xuXG4gICAgICBpZiAobW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChudW1CcmVha3BvaW50cyAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rID0gY29sbGFwc2VkTGlua3MuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgICAgaWYgKGZpcnN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYWluTGlua3MuYXBwZW5kKGZpcnN0TGluayk7XG4gICAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICBudW1CcmVha3BvaW50cy0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGFwc2VkTGlua3MuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoIHx8XG4gICAgICAobnVtQnJlYWtwb2ludHMgPiAwICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgb3Blbk1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGNvbGxhcHNlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKTtcbiAgfVxuXG4gIGNoZWNrT3V0c2lkZUNsaWNrIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy55eHQtTmF2LWNvbnRhaW5lcicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsXG4gICAgICBkcm9wZG93bkljb246IHRoaXMuZHJvcGRvd25JY29uLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpY1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogU2VhcmNoQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGluIG9yZGVyIHRvIGNyZWF0ZVxuICogYSBVSSBTZWFyY2ggZXhwZXJpZW5jZSBmb3IgdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2guXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gY29uZmlnLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBjb25maWcuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZSB8fCAnQW5zd2VycyBVbml2ZXJzYWwgU2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbFRleHQgPSBjb25maWcubGFiZWxUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBzdWJtaXQgYnV0dG9uLCBhbHNvIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0VGV4dCA9IGNvbmZpZy5zdWJtaXRUZXh0IHx8ICdTdWJtaXQnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCBpY29uIGlzIGFuIGljb24gZm9yIHRoZSBzdWJtaXQgYnV0dG9uLCBpZiBwcm92aWRlZCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlXG4gICAgICogc3VibWl0IHRleHQgd2lsbCBiZSB1c2VkIGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRJY29uID0gY29uZmlnLnN1Ym1pdEljb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzaG93IGFuIFwieFwiIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGNsZWFyIHRoZSBjdXJyZW50XG4gICAgICogcXVlcnlcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNsZWFyQnV0dG9uID0gY29uZmlnLmNsZWFyQnV0dG9uID09PSB1bmRlZmluZWRcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBjb25maWcuY2xlYXJCdXR0b247XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGF1dG9mb2N1c2luZyBvbiBsb2FkLCBvcHRpb25hbGx5IG9wZW4gdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqIChwcmVzZXQgcHJvbXB0cylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCA9IGNvbmZpZy5hdXRvY29tcGxldGVPbkxvYWQgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiB0cnVlIGlmIHRoZXJlIGlzIGFub3RoZXIgc2VhcmNoIGJhciBwcmVzZW50IG9uIHRoZSBwYWdlLlxuICAgICAqIFR3aW5zIG9ubHkgdXBkYXRlIHRoZSBxdWVyeSwgYW5kIGRvIG5vdCBzZWFyY2hcbiAgICAgKi9cbiAgICB0aGlzLl9pc1R3aW4gPSBjb25maWcuaXNUd2luO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuUVVFUlksIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgICB0aGlzLnNlYXJjaChxKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRpbWUgYWxsb3dlZCBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBzZWFyY2hlcyB0byBwcmV2ZW50XG4gICAgICogbWFueSBkdXBsaWNhdGUgc2VhcmNoZXMgYmFjay10by1iYWNrXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaENvb2xkb3duID0gY29uZmlnLnNlYXJjaENvb2xkb3duIHx8IDMwMDtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSBhbmQgXCJuZWFyIG1lXCIgaW50ZW50IGlzIGV4cHJlc3NlZCwgcHJvbXB0IHRoZSB1c2VyIGZvciB0aGVpciBnZW9sb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJvbXB0Rm9yTG9jYXRpb24gPSBjb25maWcucHJvbXB0Rm9yTG9jYXRpb24gPT09IHVuZGVmaW5lZFxuICAgICAgPyB0cnVlXG4gICAgICA6IEJvb2xlYW4oY29uZmlnLnByb21wdEZvckxvY2F0aW9uKTtcblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgc2VhcmNoIGNsZWFyIGJ1dHRvblxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IHRoaXMuY2xlYXJCdXR0b24gJiYgdGhpcy5xdWVyeTtcblxuICAgIC8qKlxuICAgICAqIEZvciB2ZXJ0aWNhbCBzZWFyY2ggYmFycywgd2hldGhlciBvciBub3QgdG8gYWxsb3cgZW1wdHkgc2VhcmNoZXMuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbGxvd0VtcHR5U2VhcmNoID0gISFjb25maWcuYWxsb3dFbXB0eVNlYXJjaDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdTZWFyY2hCYXInO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAhPSBudWxsICYmICF0aGlzLnJlZGlyZWN0VXJsKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbikge1xuICAgICAgdGhpcy5pbml0TG9jYXRpb25Qcm9tcHQoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBOT1RFKGFtdWxsaW5ncyk6IElmIGF1dG9jb21wbGV0ZU9uTG9hZCBpcyBmYWxzZSwgd2UgZm9jdXMgdGhlIGlucHV0XG4gICAgLy8gZWxlbWVudCBiZWZvcmUgbG9hZGluZyB0aGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudCBzbyB0aGF0IGl0cyBmb2N1c1xuICAgIC8vIGhhbmRsZXIgd29uJ3QgYmUgdHJpZ2dlcmVkXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmICF0aGlzLnF1ZXJ5ICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRTZWFyY2godGhpcy5fZm9ybUVsKTtcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5jbGVhckJ1dHRvbikge1xuICAgICAgdGhpcy5pbml0Q2xlYXJCdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgIXRoaXMucXVlcnkgJiYgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQpIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICBpbml0Q2xlYXJCdXR0b24gKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LVNlYXJjaEJhci1jbGVhcicpO1xuICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IHRoaXMuX3Nob3dDbGVhckJ1dHRvbiB8fCB0aGlzLnF1ZXJ5O1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCd5eHQtU2VhcmNoQmFyLS1oaWRkZW4nLCAhdGhpcy5fc2hvd0NsZWFyQnV0dG9uKTtcblxuICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCB0aGlzLnF1ZXJ5KTtcbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfSk7XG5cbiAgICBET00ub24odGhpcy5faW5wdXRFbCwgJ2lucHV0JywgZSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKCF0aGlzLl9zaG93Q2xlYXJCdXR0b24gJiYgaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24gPSB0cnVlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3Nob3dDbGVhckJ1dHRvbiAmJiBpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRMb2NhdGlvblByb21wdCAoKSB7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLklOVEVOVFMsIGludGVudCA9PiB7XG4gICAgICBpZiAoIWludGVudC5uZWFyTWUgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04pICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiwge1xuICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICByYWRpdXM6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSB8fCAnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLXdyYXBwZXInKTtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBpbnB1dEVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgICBsZXQgcXVlcnkgPSBpbnB1dEVsLnZhbHVlO1xuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dEVsLmJsdXIoKTtcblxuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueXh0LVNlYXJjaEJhci1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBhdXRvRm9jdXM6IHRoaXMuYXV0b0ZvY3VzICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCksICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcbiAgICovXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICAvLyBEb24ndCBzZWFyY2ggaWYgd2UgcmVjZW50bHkgc2VhcmNoZWQsXG4gICAgLy8gaWYgdGhlcmUncyBubyBxdWVyeSBmb3IgdW5pdmVyc2FsIHNlYXJjaCxcbiAgICAvLyBvciBpZiB0aGlzIGlzIGEgdHdpbiBzZWFyY2hiYXJcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkIHx8XG4gICAgICAoIXF1ZXJ5ICYmICF0aGlzLl92ZXJ0aWNhbEtleSkgfHxcbiAgICAgICghcXVlcnkgJiYgdGhpcy5fdmVydGljYWxLZXkgJiYgIXRoaXMuX2FsbG93RW1wdHlTZWFyY2gpIHx8XG4gICAgICB0aGlzLl9pc1R3aW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgb2Zmc2V0OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKSB8fCAwLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URShiaWxseSkgVGVtcG9yYXJ5IGhhY2sgZm9yIERFTU9cbiAgICAgIC8vIFJlbW92ZSBtZSBhZnRlciB0aGUgZGVtb1xuICAgICAgbGV0IG5hdiA9IHRoaXMuY29tcG9uZW50TWFuYWdlclxuICAgICAgICAuZ2V0QWN0aXZlQ29tcG9uZW50KCdOYXZpZ2F0aW9uJyk7XG5cbiAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBuYXYuZ2V0U3RhdGUoJ3RhYnMnKTtcbiAgICAgICAgbGV0IHVybHMgPSB7fTtcblxuICAgICAgICBpZiAodGFicyAmJiBBcnJheS5pc0FycmF5KHRhYnMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBzdWJtaXRJY29uOiB0aGlzLnN1Ym1pdEljb24sXG4gICAgICBzdWJtaXRUZXh0OiB0aGlzLnN1Ym1pdFRleHQsXG4gICAgICBzaG93Q2xlYXJCdXR0b246IHRoaXMuX3Nob3dDbGVhckJ1dHRvbixcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5IHx8ICcnXG4gICAgfSwgZGF0YSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBGaWx0ZXJTZWFyY2hDb21wb25lbnQgaXMgdXNlZCBmb3IgYXV0b2NvbXBsZXRlIHVzaW5nIHRoZSBGaWx0ZXJTZWFyY2ggYmFja2VuZC5cbiAqIEl0J2xsIGFsbG93IHlvdSB0byBwaWNrIHByZS1zZXQgZmlsdGVycyB0aGF0IGFyZSBzZXR1cCBvbiB0aGUgYmFja2VuZCB3aXRoaW5cbiAqIGEgdmVydGljYWwgc2VhcmNoIGNvbnRleHQuXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgY29uZmlnLmlucHV0S2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlIHRoZSBmaWx0ZXIgdmFsdWUgYnV0IGRvIG5vdCBzZWFyY2ggb24gY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIHRleHQgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFRleHQgPSBjb25maWcuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgcHJvdmlkZWQgcXVlcnlcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IGNvbmZpZy5maWx0ZXIgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBKU09OLnBhcnNlKHRoaXMuZmlsdGVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2hQYXJhbWV0ZXJzID0gdGhpcy5fYnVpbGRTZWFyY2hQYXJhbWV0ZXJzKGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzKTtcblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlclNlYXJjaCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9maWx0ZXJzZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLnl4dC1TZWFyY2hCYXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgc2VhcmNoUGFyYW1ldGVyczogdGhpcy5zZWFyY2hQYXJhbWV0ZXJzLFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0ucXVlcnlgLCBxdWVyeSk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgcGFyYW1zIHRvIGJlXG4gICAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIGZpbHRlciB0byBzdG9yYWdlIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmZpbHRlciA9IEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgdGhpcy5xdWVyeSk7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSB0aGUgdmVydGljYWwgc2VhcmNoIHdpdGggYWxsIHNhdmVkIGZpbHRlcnMgYW5kIHF1ZXJ5LFxuICAgKiBvcHRpb25hbGx5IHJlZGlyZWN0aW5nIGJhc2VkIG9uIGNvbmZpZ1xuICAgKi9cbiAgc2VhcmNoICgpIHtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpO1xuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXG4gICAgfSwgZGF0YSkpO1xuICB9XG5cbiAgX2J1aWxkU2VhcmNoUGFyYW1ldGVycyAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncykge1xuICAgIGxldCBzZWFyY2hQYXJhbWV0ZXJzID0ge1xuICAgICAgc2VjdGlvbmVkOiBmYWxzZSxcbiAgICAgIGZpZWxkczogW11cbiAgICB9O1xuICAgIGlmIChzZWFyY2hQYXJhbWV0ZXJDb25maWdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzZWFyY2hQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5zZWN0aW9uZWQpIHtcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnMuc2VjdGlvbmVkID0gc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5zZWN0aW9uZWQ7XG4gICAgfVxuICAgIHNlYXJjaFBhcmFtZXRlcnMuZmllbGRzID0gdGhpcy5fYnVpbGRGaWVsZHMoc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5maWVsZHMpO1xuICAgIHJldHVybiBzZWFyY2hQYXJhbWV0ZXJzO1xuICB9XG5cbiAgX2J1aWxkRmllbGRzIChmaWVsZENvbmZpZ3MpIHtcbiAgICBpZiAoZmllbGRDb25maWdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRDb25maWdzLm1hcChmYyA9PiAoeyBmZXRjaEVudGl0aWVzOiBmYWxzZSwgLi4uZmMgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBLZXlzID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBTSElGVDogMTYsXG4gIENUUkw6IDE3LFxuICBBTFQ6IDE4LFxuICBFU0NBUEU6IDI3LFxuXG4gIExFRlQ6IDM3LFxuICBSSUdIVDogMzksXG4gIFVQOiAzOCxcblxuICBERUxFVEU6IDQ2LFxuICBET1dOOiA0MCxcbiAgTEVGVF9PU19LRVk6IDkxLFxuICBSSUdIVF9PU19LRVk6IDkyLFxuICBTRUxFQ1RfS0VZOiA5M1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGF1dG9jb21wbGV0ZSBpcyBzaW1wbGUgb3IgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpbHRlclNlYXJjaCA9IG9wdHMuaXNGaWx0ZXJTZWFyY2ggfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGJhcktleWAgaW4gdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHZlcnRpY2FsS2V5YCBvZiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBvcHRzLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgZWwgc2VsZWN0b3IgZm9yIGF1dG8gY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0b3IgZm9yIHRoZSBhdXRvY29tcGxldGUgZWxlbWVudGVzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvY29tcGxldGVFbHMgPSBvcHRzLmF1dG9Db21wbGV0ZUVscyB8fCAnLmpzLXlleHQtYXV0b2NvbWxldGUtb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEtc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke3RoaXMubmFtZX1gO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIHR5cGluZy5cbiAgICAgKiBXZSB1c2UgdGhpcyBmb3IgcmVzZXR0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUgd2hlbiBvdGhlciBpbnRlcmFjdGlvbnMgKGUuZy4gcmVzdWx0IG5hdmlnYXRpb24pXG4gICAgICogY2hhbmdlIGJhc2VkIG9uIGludGVyYWN0aW9ucy4gRm9yIGluc3RhbmNlLCBoaXR0aW5nIGVzY2FwZSBzaG91bGQgcmVzZXQgdGhlIHZhbHVlIHRvIHRoZSBvcmlnaW5hbCB0eXBlZCBxdWVyeS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSBvcHRzLm9yaWdpbmFsUXVlcnkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VjdGlvbiB3ZSdyZSBuYXZpZ2F0aW5nIGluLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCByZXN1bHQgaW5kZXggd2UncmUgbmF2aWdhdGluZyBvbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gb3B0cy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGF1dG9jb21hdGljYWxseSBmb2N1c2VkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkIG9uIGF1dG8gY29tcGxldGUuXG4gICAgICovXG4gICAgdGhpcy5fb25TdWJtaXQgPSBvcHRzLm9uU3VibWl0IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgdGhpcy5fc2VhcmNoUGFyYW1ldGVycyA9IG9wdHMuc2VhcmNoUGFyYW1ldGVycyB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGhhc1Jlc3VsdHM6IHRoaXMuaGFzUmVzdWx0cyhkYXRhKSxcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG9jb21wbGV0ZSwgYXV0b2NvcnJlY3QgJiBzcGVsbGNoZWNrXG4gICAgRE9NLmF0dHJpYnV0ZXMocXVlcnlJbnB1dCwge1xuICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIGF1dG9jb3JyZWN0OiAnb2ZmJyxcbiAgICAgIHNwZWxsY2hlY2s6ICdmYWxzZSdcbiAgICB9KTtcblxuICAgIC8vIFRoZSB1c2VyIGV4aXRzIHRoZSBpbnB1dCwgc28gd2Ugd2FudCB0byByZXNldCB0aGUgc3RhdGUgYW5kIGNsb3NlXG4gICAgLy8gdGhlIGF1dG8gY29tcGxldGVcbiAgICAvLyBUT0RPKGpkZWxlcm1lKTogQ2xvc2UgbG9naWMgdG8gYmUgbW92ZWQgdG8gcGFyZW50XG4gICAgRE9NLm9uKGRvY3VtZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuanMteXh0LUF1dG9Db21wbGV0ZS13cmFwcGVyIConKSB8fCBlLnRhcmdldC5tYXRjaGVzKHRoaXMuX2lucHV0RWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fYXV0b0ZvY3VzKSB7XG4gICAgICBET00ub25jZShxdWVyeUlucHV0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnY2xpY2snLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuRU5URVIsXG4gICAgICBLZXlzLlRBQixcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB7XG4gICAgICAgIG5hbWVzcGFjZTogdGhpcy5uYW1lLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB0aGlzLl9zZWFyY2hQYXJhbWV0ZXJzXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgd2UgaGF2ZSByZXN1bHRzIGluIGFueSBzZWN0aW9uXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhc1Jlc3VsdHMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNlY3Rpb25zID0gZGF0YVsnc2VjdGlvbnMnXTtcbiAgICBpZiAoIXNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IHNlY3Rpb25zW2ldO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2ggJiYgdGhpcy5fcmVzdWx0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+PSAwICYmIHRoaXMuX3Jlc3VsdEluZGV4ID49IDApIHtcbiAgICAgICAgZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5maWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbHVlKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbHVlLCBmaWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3BlbGxDaGVja0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogU3BlbGxDaGVja0NvbXBvbmVudCB3aWxsIHN1cHBvcnQgZGlzcGxheWluZyBzdWdnZXN0aW9uLCBhdXRvY29ycmVjdCBhbmQgY29tYmluZWQobWF5YmUgaW4gdGhlIGZ1dHVyZSlcbiAqIHByb3ZpZGVkIGZyb20gc3BlbGxpbmcgY29ycmVjdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGxDaGVja0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0s7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU3BlbGxDaGVjayc7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc3BlbGxjaGVjayc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgc2hvdWxkU2hvdzogZGF0YS5jb3JyZWN0ZWRRdWVyeSAhPT0gdW5kZWZpbmVkLFxuICAgICAgY29ycmVjdGVkUXVlcnlVcmw6IHRoaXMuX2J1aWxkUmVkaXJlY3RRdWVyeVVybChkYXRhLmNvcnJlY3RlZFF1ZXJ5LCBkYXRhLnR5cGUpLFxuICAgICAgaGVscFRleHQ6IHRoaXMuX2dldEhlbHBUZXh0KGRhdGEudHlwZSlcbiAgICB9LCB2YWwpKTtcbiAgfVxuXG4gIF9idWlsZFJlZGlyZWN0UXVlcnlVcmwgKHF1ZXJ5LCB0eXBlKSB7XG4gICAgaWYgKHF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkudmFsdWUpO1xuICAgIHBhcmFtcy5zZXQoJ3NraXBTcGVsbENoZWNrJywgdHJ1ZSk7XG4gICAgcGFyYW1zLnNldCgncXVlcnlUcmlnZ2VyJywgdHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH1cblxuICBfZ2V0SGVscFRleHQgKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ1NVR0dFU1QnOlxuICAgICAgICByZXR1cm4gJ0RpZCB5b3UgbWVhbjonO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIExvY2F0aW9uQmlhc0NvbXBvbmVudCB3aWxsIHNob3cgdGhlIHVzZXIgd2hlcmUgaXMgdXNlZCBmb3IgbG9jYXRpb24gYmlhcyBhbmQgYWxsb3cgdXNlciB0b1xuICogaW1wcm92ZSBhY2N1cmFjeSB3aXRoIEhUTUw1IGdlb2xvY2F0aW9uLlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbkJpYXNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkxPQ0FUSU9OX0JJQVM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgd2hlbiBsb2NhdGlvbiB1cGRhdGVkLFxuICAgICAqIGEgdW5pdmVyc2FsIHNlYXJjaCB3aWxsIGJlIHRyaWdnZXJlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB1c2VkIGZvciB1cGRhdGluZyBsb2NhdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fdXBkYXRlTG9jYXRpb25FbCA9IGNvbmZpZy51cGRhdGVMb2NhdGlvbkVsIHx8ICcuanMtbG9jYXRpb25CaWFzLXVwZGF0ZS1sb2NhdGlvbic7XG5cbiAgICB0aGlzLl9sb2NhdGlvbkRpc3BsYXlOYW1lID0gJyc7XG5cbiAgICB0aGlzLl9hY2N1cmFjeSA9ICcnO1xuXG4gICAgdGhpcy5fYWxsb3dVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uQmlhcyc7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvbG9jYXRpb25iaWFzJztcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5fYWxsb3dVcGRhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgRE9NLm9uKHRoaXMuX3VwZGF0ZUxvY2F0aW9uRWwsICdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04sIHtcbiAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgcmFkaXVzOiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3lcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9kb1NlYXJjaCgpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVyci5jb2RlID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5fYWxsb3dVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBsb2NhdGlvbkRpc3BsYXlOYW1lOiB0aGlzLl9sb2NhdGlvbkRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICBhY2N1cmFjeTogdGhpcy5fYWNjdXJhY3lcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBTaG91bGQgd2UgdGhyb3cgZXJyb3Igb3Igd2FybmluZyBoZXJlIGlmIG5vIGdlb2xvY2F0aW9uP1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIHRoaXMuX2xvY2F0aW9uRGlzcGxheU5hbWUgPSBkYXRhLmxvY2F0aW9uRGlzcGxheU5hbWU7XG4gICAgdGhpcy5fYWNjdXJhY3kgPSBkYXRhLmFjY3VyYWN5O1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBsb2NhdGlvbkRpc3BsYXlOYW1lOiB0aGlzLl9nZXRMb2NhdGlvbkRpc3BsYXlOYW1lKGRhdGEpLFxuICAgICAgYWNjdXJhY3lUZXh0OiB0aGlzLl9nZXRBY2N1cmFjeUhlbHBUZXh0KGRhdGEuYWNjdXJhY3kpLFxuICAgICAgaXNQcmVjaXNlTG9jYXRpb246IGRhdGEuYWNjdXJhY3kgPT09ICdERVZJQ0UnICYmIHRoaXMuX2FsbG93VXBkYXRlLFxuICAgICAgaXNVbmtub3duTG9jYXRpb246IGRhdGEuYWNjdXJhY3kgPT09ICdVTktOT1dOJyxcbiAgICAgIHNob3VsZFNob3c6IGRhdGEuYWNjdXJhY3kgIT09IHVuZGVmaW5lZCxcbiAgICAgIGFsbG93VXBkYXRlOiB0aGlzLl9hbGxvd1VwZGF0ZVxuICAgIH0sIHZhbCkpO1xuICB9XG5cbiAgX2dldExvY2F0aW9uRGlzcGxheU5hbWUgKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5hY2N1cmFjeSA9PT0gJ1VOS05PV04nKSB7XG4gICAgICByZXR1cm4gJ1Vua25vd24gTG9jYXRpb24nO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5sb2NhdGlvbkRpc3BsYXlOYW1lO1xuICB9XG5cbiAgX2dldEFjY3VyYWN5SGVscFRleHQgKGFjY3VyYWN5KSB7XG4gICAgc3dpdGNoIChhY2N1cmFjeSkge1xuICAgICAgY2FzZSAnSVAnOlxuICAgICAgICByZXR1cm4gJ2Jhc2VkIG9uIHlvdXIgaW50ZXJuZXQgYWRkcmVzcyc7XG4gICAgICBjYXNlICdERVZJQ0UnOlxuICAgICAgICByZXR1cm4gJ2Jhc2VkIG9uIHlvdXIgZGV2aWNlJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBfZG9TZWFyY2ggKCkge1xuICAgIGxldCBxdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcbiAgICBpZiAodGhpcy5fdmVydGljYWxLZXkpIHtcbiAgICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgICA6IGFsbEZpbHRlcnNbMF07XG4gICAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuICAgICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX3ZlcnRpY2FsS2V5LCB7XG4gICAgICAgIGlucHV0OiBxdWVyeSxcbiAgICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICAgIG9mZnNldDogdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCkgfHwgMCxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29yZS5zZWFyY2gocXVlcnkpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmFjZXQgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBmYWNldCBmaWx0ZXIgd2l0aCB0aGUgZm9ybWF0IG9mXG4gKiB7XG4gKiAgIFwiZmllbGRfbmFtZVwiOiBbIEZpbHRlcnMuLi4gXSxcbiAqICAgLi4uXG4gKiB9XG4gKlxuICogQHNlZSB7QGxpbmsgRmlsdGVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZmFjZXQgZmlsdGVyIGZyb20gYSBsaXN0IG9mIEZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIHVzZSBpbiB0aGlzIGZhY2V0XG4gICAqIEByZXR1cm5zIHtGYWNldH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRmlsdGVycyAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGNvbnN0IGZsYXRGaWx0ZXJzID0gZmlsdGVycy5mbGF0TWFwKGYgPT4gZi4kb3IgfHwgZik7XG4gICAgZmxhdEZpbHRlcnMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGYpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRmFjZXQoZ3JvdXBzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyQm94Q29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRmFjZXQgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmFjZXQnO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhpcyBmaWx0ZXJib3ggY29udGFpbnMgZHluYW1pYyBmaWx0ZXJzLiBUaGlzIGFmZmVjdHMgdGhlXG4gICAgICogdGhlIHdheSB0aGUgZmlsdGVycyBhcmUgdXNlZCBpbiB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0R5bmFtaWMgPSBjb25maWcuaXNEeW5hbWljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlckJveCc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZmlsdGVyQ29uZmlnczogdGhpcy5fZmlsdGVyQ29uZmlncyxcbiAgICAgIHNob3dBcHBseUJ1dHRvbjogIXRoaXMuX3NlYXJjaE9uQ2hhbmdlXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcbiAgICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGZpbHRlcnMgZnJvbSBjb25maWdzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9maWx0ZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9maWx0ZXJDb25maWdzW2ldO1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShjb25maWcudHlwZSwgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoaSwgZmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLl9maWx0ZXJzW2ldID0gY29tcG9uZW50LmdldEZpbHRlcigpO1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZXMgdG8gY2hpbGQgZmlsdGVyIGNvbXBvbmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhbmdlZCBmaWx0ZXJcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgbmV3IGZpbHRlclxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UgKGluZGV4LCBmaWx0ZXIpIHtcbiAgICB0aGlzLl9maWx0ZXJzW2luZGV4XSA9IGZpbHRlcjtcbiAgICBpZiAodGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBmaWx0ZXIgY29tcG9uZW50cyBhbG9uZyB3aXRoIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY3VycmVudCBmaWx0ZXJzIHRvIHN0b3JhZ2UgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRmlsdGVyc1RvU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdmFsaWRGaWx0ZXJzID0gdGhpcy5fZmlsdGVycy5maWx0ZXIoZiA9PlxuICAgICAgZiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBmICE9PSBudWxsICYmXG4gICAgICBPYmplY3Qua2V5cyhmKS5sZW5ndGggPiAwKTtcblxuICAgIGlmICh0aGlzLl9pc0R5bmFtaWMpIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gRmFjZXQuZnJvbUZpbHRlcnMoLi4udmFsaWRGaWx0ZXJzKTtcbiAgICAgIHRoaXMuY29yZS5zZXRGYWNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSB2YWxpZEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4udmFsaWRGaWx0ZXJzKVxuICAgICAgICA6IHZhbGlkRmlsdGVyc1swXTtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBzZWFyY2ggd2l0aCBhbGwgZmlsdGVycyBpbiBzdG9yYWdlXG4gICAqL1xuICBfc2VhcmNoICgpIHtcbiAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSk7XG5cbiAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX3ZlcnRpY2FsS2V5LCB7XG4gICAgICBpbnB1dDogcXVlcnksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBjb250cm9sc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBTVVBQT1JURURfQ09OVFJPTFMgPSBbXG4gICdzaW5nbGVvcHRpb24nLFxuICAnbXVsdGlvcHRpb24nXG5dO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2Ygb3B0aW9ucywgZWFjaCBvbmUgcmVwcmVzZW50aW5nIGEgZmlsdGVyIGluIGEgc2VhcmNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmNvbnRyb2wgfHwgIVNVUFBPUlRFRF9DT05UUk9MUy5pbmNsdWRlcyhjb25maWcuY29udHJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIHJlcXVpcmVzIGEgdmFsaWQgXCJjb250cm9sXCIgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIGNvbXBvbmVudCByZXF1aXJlcyBvcHRpb25zIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNPcHRpb25zID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUodGhpcy5uYW1lKTtcbiAgICBpZiAodHlwZW9mIHByZXZpb3VzT3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2UocHJldmlvdXNPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSBwcmV2aW91c09wdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXIgb3B0aW9ucyB0byBkaXNwbGF5IHdpdGggY2hlY2tlZCBzdGF0dXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25zID0gY29uZmlnLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgIC4uLm8sXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRPcHRpb25zLmxlbmd0aFxuICAgICAgICA/IHNlbGVjdGVkT3B0aW9ucy5pbmNsdWRlcyhvLmxhYmVsKVxuICAgICAgICA6IG8uc2VsZWN0ZWRcbiAgICB9KSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBjb250cm9sIHRvIGRpc3BsYXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29udHJvbCA9IGNvbmZpZy5jb250cm9sO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIHVzZWQgZm9yIG9wdGlvbnMgaW4gdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvblNlbGVjdG9yID0gY29uZmlnLm9wdGlvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXItb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIGJlIHVzZWQgaW4gdGhlIGxlZ2VuZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sYWJlbCA9IGNvbmZpZy5sYWJlbCB8fCAnRmlsdGVycyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyT3B0aW9ucyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlciwgYmFzZWQgb24gdGhlIGNvbnRyb2xcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGBjb250cm9scy8ke2NvbmZpZy5jb250cm9sfWA7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgb3B0aW9uczogdGhpcy5fb3B0aW9ucyxcbiAgICAgIGxhYmVsOiB0aGlzLl9sYWJlbFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIERPTS5kZWxlZ2F0ZShcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGAuJHt0aGlzLl9jb250cm9sfS1maWVsZHNldGApLFxuICAgICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IsXG4gICAgICAnY2xpY2snLFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVPcHRpb24ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCBldmVudC50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVPcHRpb24gKGluZGV4LCBzZWxlY3RlZCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sID09PSAnc2luZ2xlb3B0aW9uJykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBzZWxlY3RlZDogZmFsc2UgfSkpO1xuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0aW9uc1tpbmRleF0sIHsgc2VsZWN0ZWQgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgb3B0aW9uc1xuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdmYWxzZScpKTtcbiAgICB0aGlzLl9hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIEZpbHRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuX29wdGlvbnNcbiAgICAgIC5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKVxuICAgICAgLm1hcChvID0+IG8uZmlsdGVyXG4gICAgICAgID8gby5maWx0ZXJcbiAgICAgICAgOiBGaWx0ZXIuZXF1YWwoby5maWVsZCwgby52YWx1ZSkpO1xuXG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldCh0aGlzLm5hbWUsIHRoaXMuX29wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCkubWFwKG8gPT4gby5sYWJlbCkpO1xuICAgIHJldHVybiBmaWx0ZXJzLmxlbmd0aCA+IDBcbiAgICAgID8gRmlsdGVyLmdyb3VwKC4uLmZpbHRlcnMpXG4gICAgICA6IHt9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSYW5nZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmllbGQgdG8gZmlsdGVyIG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZmlsdGVyIHZhbHVlIGNoYW5nZXNcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIGxldCBtaW5WYWwgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1pbmApO1xuICAgIGlmICh0eXBlb2YgbWluVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbWluVmFsID0gTnVtYmVyLnBhcnNlSW50KG1pblZhbCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICBsZXQgbWF4VmFsID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5tYXhgKTtcbiAgICBpZiAodHlwZW9mIG1pblZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1heFZhbCA9IE51bWJlci5wYXJzZUludChtYXhWYWwpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCByYW5nZSByZXByZXNlbnRlZFxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYW5nZSA9IHtcbiAgICAgIG1pbjogbWluVmFsIHx8IGNvbmZpZy5pbml0aWFsTWluIHx8IDAsXG4gICAgICBtYXg6IG1heFZhbCB8fCBjb25maWcuaW5pdGlhbE1heCB8fCAxMFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIHJhbmdlIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1pbiBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtYXggaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWF4TGFiZWwgPSBjb25maWcubWF4TGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL3JhbmdlYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSYW5nZUZpbHRlcic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLl90aXRsZSxcbiAgICAgIG1pbkxhYmVsOiB0aGlzLl9taW5MYWJlbCxcbiAgICAgIG1heExhYmVsOiB0aGlzLl9tYXhMYWJlbCxcbiAgICAgIG1pblZhbHVlOiB0aGlzLl9yYW5nZS5taW4sXG4gICAgICBtYXhWYWx1ZTogdGhpcy5fcmFuZ2UubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1yYW5nZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgTnVtYmVyLnBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWluICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCB2YWx1ZSk7XG4gIH1cblxuICBzZXRNYXggKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIHZhbHVlKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjdXJyZW50IHJhbmdlIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJhbmdlIGtleSB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBrZXlcbiAgICovXG4gIF91cGRhdGVSYW5nZSAoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuX3JhbmdlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmFuZ2UsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWluYCwgdGhpcy5fcmFuZ2UubWluKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWF4YCwgdGhpcy5fcmFuZ2UubWF4KTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbHRlciByZXByZXNlbnRhdGlvbiBvZiB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICByZXR1cm4gRmlsdGVyLmluY2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9yYW5nZS5taW4sIHRoaXMuX3JhbmdlLm1heCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERhdGVGaWx0ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBBIGZpbHRlciBmb3IgYSByYW5nZSBvZiBkYXRlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFwaSBmaWVsZCB0aGlzIGZpbHRlciBjb250cm9sc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZCA9IGNvbmZpZy5maWVsZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGZvciB0aGUgZGF0ZSByYW5nZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBzaG93IGZvciB0aGUgbWluIGRhdGUgaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWluTGFiZWwgPSBjb25maWcubWluTGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBzaG93IGZvciB0aGUgbWF4IGRhdGUgaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWF4TGFiZWwgPSBjb25maWcubWF4TGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayB1c2VkIHdoZW4gYSBkYXRlIGlzIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoaXMgZmlsdGVyIHJlcHJlc2VudHMgYW4gZXhjbHVzaXZlIHJhbmdlLCByYXRoZXIgdGhhbiBhbiBpbmNsdXNpdmUgb25lXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0V4Y2x1c2l2ZSA9IGNvbmZpZy5pc0V4Y2x1c2l2ZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy9kYXRlYDtcblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0b2RheVN0cmluZyA9IGAke3RvZGF5LmdldEZ1bGxZZWFyKCl9LSR7YCR7dG9kYXkuZ2V0TW9udGgoKSArIDF9YC5wYWRTdGFydCgyLCAnMCcpfS0ke2Ake3RvZGF5LmdldERhdGUoKX1gLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICBjb25zdCBtaW5EYXRlID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5taW5gKTtcbiAgICBjb25zdCBtYXhEYXRlID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5tYXhgKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGRhdGUgcmFuZ2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RhdGUgPSB7XG4gICAgICBtaW46IG1pbkRhdGUgfHwgY29uZmlnLmluaXRpYWxNaW4gfHwgdG9kYXlTdHJpbmcsXG4gICAgICBtYXg6IG1heERhdGUgfHwgY29uZmlnLmluaXRpYWxNYXggfHwgdG9kYXlTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RhdGVSYW5nZUZpbHRlcic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLl90aXRsZSxcbiAgICAgIG1pbkxhYmVsOiB0aGlzLl9taW5MYWJlbCxcbiAgICAgIG1heExhYmVsOiB0aGlzLl9tYXhMYWJlbCxcbiAgICAgIGRhdGVNaW46IHRoaXMuX2RhdGUubWluLFxuICAgICAgZGF0ZU1heDogdGhpcy5fZGF0ZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWRhdGUnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtaW4gZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWluIChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWF4IGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1heCAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCBkYXRlKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSBkYXRlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3RyaW5nIGRhdGUgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGVSYW5nZSAoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuX2RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kYXRlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1pbmAsIHRoaXMuX2RhdGUubWluKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWF4YCwgdGhpcy5fZGF0ZS5tYXgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYW4gYXBpIGZpbHRlciB3aXRoIHRoZSBjdXJyZW50IGRhdGUgc3RhdGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgaWYgKHRoaXMuX2RhdGUubWluID09PSAnJyB8fCB0aGlzLl9kYXRlLm1heCA9PT0gJycpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2lzRXhjbHVzaXZlXG4gICAgICA/IEZpbHRlci5leGNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KVxuICAgICAgOiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX2RhdGUubWluLCB0aGlzLl9kYXRlLm1heCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIERpc3BsYXlzIGEgc2V0IG9mIGR5bmFtaWMgZmlsdGVycyByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdHJpZ2dlciBhIHNlYXJjaCBvbiBlYWNoIGNoYW5nZSB0byBhIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoT25DaGFuZ2UgPSBjb25maWcuc2VhcmNoT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3Igb2YgdGhlIGFwcGx5IGJ1dHRvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yID0gY29uZmlnLmFwcGx5QnV0dG9uU2VsZWN0b3IgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250cm9scyB0byB1c2UgZm9yIGVhY2ggZmllbGQuIEVhY2ggdHlwZSBvZiBmaWx0ZXIgaGFzIGEgZGVmYXVsdFxuICAgICAqICRlcSA6IG11bHRpb3B0aW9uIChjaGVja2JveClcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkQ29udHJvbHMgPSBjb25maWcuZmllbGRDb250cm9scyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ2ZpbHRlcnMvZHluYW1pYyc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhIHN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSUztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgYm94IHRoYXQgZGlzcGxheXMgdGhlIGR5bmFtaWMgZmlsdGVyc1xuICAgICAqIEB0eXBlIHtGaWx0ZXJCb3hDb21wb25lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJib3ggPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0R5bmFtaWNGaWx0ZXJzJztcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuY29yZS5lbmFibGVEeW5hbWljRmlsdGVycygpO1xuXG4gICAgaWYgKHRoaXMuX2ZpbHRlcmJveCkge1xuICAgICAgdGhpcy5fZmlsdGVyYm94LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGxldCB7IGZpbHRlcnMgfSA9IHRoaXMuX3N0YXRlLmdldCgpO1xuXG4gICAgaWYgKCFmaWx0ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsdGVycyA9IGZpbHRlcnMubWFwKGYgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGYsIHtcbiAgICAgICAgdHlwZTogJ0ZpbHRlck9wdGlvbnMnLFxuICAgICAgICBjb250cm9sOiB0aGlzLl9maWVsZENvbnRyb2xzW2YuZmllbGRJZF0gfHwgJ211bHRpb3B0aW9uJ1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9maWx0ZXJib3ggPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgJ0ZpbHRlckJveCcsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlcmJveGAsXG4gICAgICAgIGNvbnRhaW5lcjogJy5qcy15ZXh0LWR5bmFtaWMtZmlsdGVycycsXG4gICAgICAgIHNlYXJjaE9uQ2hhbmdlOiB0aGlzLl9zZWFyY2hPbkNoYW5nZSxcbiAgICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXG4gICAgICAgIGZpbHRlcnNcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveC5tb3VudCgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHZW9Mb2NhdGlvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IE1FVEVSU19QRVJfTUlMRSA9IDE2MDkuMzQ0O1xuXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgLyoqXG4gICAqIFRoZSByYWRpdXMsIGluIG1pbGVzLCBhcm91bmQgdGhlIHVzZXIncyBsb2NhdGlvbiB0byBmaW5kIHJlc3VsdHMuXG4gICAqIElmIGxvY2F0aW9uIGFjY3VyYWN5IGlzIGxvdywgYSBsYXJnZXIgcmFkaXVzIG1heSBiZSB1c2VkIGF1dG9tYXRpY2FsbHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHJhZGl1czogNTAsXG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJ0aWNhbCBrZXkgdG8gdXNlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB2ZXJ0aWNhbEtleTogbnVsbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgc3VibWl0cyBhIHNlYXJjaCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc2VhcmNoT25DaGFuZ2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGl0bGU6ICdMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsYWJlbDogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGljb24gdXJsIHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvbkljb246ICcnLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGluIHRoZSBnZW8gYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZW9CdXR0b25UZXh0OiAnVXNlIE15IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGdlb2xvY2F0aW9uIGlzIGVuYWJsZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGVuYWJsZWRUZXh0OiAnQ3VycmVudCBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgd2hlbiBsb2FkaW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxvYWRpbmdUZXh0OiAnRmluZGluZyBZb3VyIExvY2F0aW9uLi4uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyBpZiB0aGUgdXNlcidzIGxvY2F0aW9uIGNhbm5vdCBiZSBmb3VuZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZXJyb3JUZXh0OiAnQ291bGQgTm90IEZpbmQgWW91ciBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHRvZ2dsZSBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGJ1dHRvblNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1idXR0b24nLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIHNlbGVjdG9yIG9mIHRoZSBxdWVyeSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgaW5wdXRTZWxlY3RvcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItaW5wdXQnXG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYSBidXR0b24gdGhhdCB3aGVuIGNsaWNrZWQgYWRkcyBhIHN0YXRpYyBmaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9Mb2NhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcih7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfSwgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIHRvIHVzZSBmb3IgdGhlIGN1cnJlbnQgcXVlcnlcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKSB8fCB7fTtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBKU09OLnBhcnNlKHRoaXMuZmlsdGVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZiA9PiB7IHRoaXMuZmlsdGVyID0gZjsgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnR2VvTG9jYXRpb25GaWx0ZXInO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnY29udHJvbHMvZ2VvbG9jYXRpb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnJztcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcuZW5hYmxlZFRleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0xvYWRpbmcpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgIH1cbiAgICBpZiAoZGF0YS5nZW9FcnJvcikge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcuZXJyb3JUZXh0O1xuICAgIH1cbiAgICBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgdGl0bGU6IHRoaXMuX2NvbmZpZy50aXRsZSxcbiAgICAgIGdlb0VuYWJsZWQ6IHRoaXMuX2VuYWJsZWQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5fY29uZmlnLmxhYmVsLFxuICAgICAgZW5hYmxlZFRleHQ6IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dCxcbiAgICAgIGxvYWRpbmdUZXh0OiB0aGlzLl9jb25maWcubG9hZGluZ1RleHQsXG4gICAgICBlcnJvclRleHQ6IHRoaXMuX2NvbmZpZy5lcnJvclRleHQsXG4gICAgICBnZW9CdXR0b25JY29uOiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uSWNvbixcbiAgICAgIGdlb1ZhbHVlOiB0aGlzLl9lbmFibGVkIHx8IGRhdGEuZ2VvTG9hZGluZyB8fCBkYXRhLmdlb0Vycm9yID8gJycgOiB0aGlzLnF1ZXJ5LFxuICAgICAgZ2VvUGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgZ2VvQnV0dG9uVGV4dDogdGhpcy5fY29uZmlnLmdlb0J1dHRvblRleHRcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKTtcbiAgICBET00ub24odGhpcy5fY29uZmlnLmJ1dHRvblNlbGVjdG9yLCAnY2xpY2snLCAoKSA9PiB0aGlzLl90b2dnbGVHZW9GaWx0ZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1hdXRvY29tcGxldGUnLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBvblN1Ym1pdDogKHF1ZXJ5LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmZpbHRlciA9IEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5fc2F2ZURhdGFUb1N0b3JhZ2UocXVlcnksIHRoaXMuZmlsdGVyKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIHN0YXRpYyBmaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90b2dnbGVHZW9GaWx0ZXIgKCkge1xuICAgIGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvTG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIHBvc2l0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcihwb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy5fc2F2ZURhdGFUb1N0b3JhZ2UoJycsIGZpbHRlciwgcG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApO1xuICAgICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlb0Vycm9yOiB0cnVlIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgcHJvdmlkZWQgZmlsdGVyIHVuZGVyIHRoaXMgY29tcG9uZW50J3MgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNhdmVcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgZmlsdGVyIHRvIHNhdmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIFRoZSBwb3NpdGlvbiB0byBzYXZlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZURhdGFUb1N0b3JhZ2UgKHF1ZXJ5LCBmaWx0ZXIsIHBvc2l0aW9uKSB7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcXVlcnkpO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmaWx0ZXIpO1xuICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04sIHtcbiAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgcmFkaXVzOiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3lcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGxldCB0b3RhbEZpbHRlciA9IGZpbHRlcnNbMF07XG4gICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl9jb25maWcudmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgcG9zaXRpb24sIGNvbnN0cnVjdCBhIEZpbHRlciBvYmplY3RcbiAgICogQHBhcmFtIHtQb3N0aXRpb259IHBvc2l0aW9uIFRoZSBwb3NpdGlvblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyIChwb3NpdGlvbikge1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYWNjdXJhY3kgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChhY2N1cmFjeSwgdGhpcy5fY29uZmlnLnJhZGl1cyAqIE1FVEVSU19QRVJfTUlMRSk7XG4gICAgcmV0dXJuIEZpbHRlci5wb3NpdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlLCByYWRpdXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBFdmVudFR5cGVzIGFyZSBleHBsaWNpdCBzdHJpbmdzIGRlZmluZWRcbiAqIGZvciB3aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cyBmb3IgYW5hbHl0aWNzLlxuICpcbiAqIEBlbnVtXG4gKi9cbmNvbnN0IEV2ZW50VHlwZXMgPSB7XG4gIFRIVU1CU19VUDogJ1RIVU1CU19VUCcsXG4gIFRIVU1CU19ET1dOOiAnVEhVTUJTX0RPV04nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybSB1c2VkIGZvciBzdWJtaXR0aW5nIHRoZSBmZWVkYmFja1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1FbCB8fCAnLmpzLWRpcmVjdEFuc3dlci1mZWVkYmFjay1mb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIHVwYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNVcFNlbGVjdG9yID0gY29uZmlnLnRodW1ic1VwU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJVcCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRodW1icyBkb3duYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IgPSBjb25maWcudGh1bWJzRG93blNlbGVjdG9yIHx8ICcuanMtZGlyZWN0QW5zd2VyLXRodW1iRG93bic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSB0ZXh0IGZvciB0aGUgVmlldyBEZXRhaWxzIGNsaWNrIHRvIGFjdGlvbiBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92aWV3RGV0YWlsc1RleHQgPSBjb25maWcudmlld0RldGFpbHNUZXh0IHx8ICdWaWV3IERldGFpbHMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCwgb25seSBkaXNwbGF5IHRoZSBkaXJlY3QgYW5zd2VyIGNvbXBvbmVudCBpZiBpdCBoYXMgZGF0YVxuICAgKi9cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZSgnYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQsXG4gICAqIHdlIHdhbnQgdG8gd2lyZSB1cCB0aGUgYmVoYXZpb3IgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1YWxpdHkgZmVlZGJhY2sgcmVwb3J0aW5nICh0aHVtYnN1cC9kb3duKVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgYmluZGluZ3MgaWYgdGhlIGZlZWRiYWNrIGhhcyBwcmV2aW91c2x5IGJlZW4gc3VibWl0dGVkXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoJ2ZlZWRiYWNrU3VibWl0dGVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZvciBXQ0FHIGNvbXBsaWFuY2UsIHRoZSBmZWVkYmFjayBzaG91bGQgYmUgYSBzdWJtaXR0YWJsZSBmb3JtXG4gICAgRE9NLm9uKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBsZXQgZm9ybUVsID0gZS50YXJnZXQ7XG4gICAgICBsZXQgY2hlY2tlZFZhbHVlID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJ2lucHV0OmNoZWNrZWQnKS52YWx1ZSA9PT0gJ3RydWUnO1xuXG4gICAgICB0aGlzLnJlcG9ydFF1YWxpdHkoY2hlY2tlZFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAnZmVlZGJhY2tTdWJtaXR0ZWQnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElzIHRoaXMgYWN0dWFsbHkgbmVjZXNzYXJ5PyBJIGd1ZXNzIGl0J3Mgb25seSBuZWNlc3NhcnkgaWYgdGhlXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBpcyBoaWRkZW4uXG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic1VwU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICAgIERPTS5vbih0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGVuYWJsZXMgZm9yIHBhcnRpYWwgdXBkYXRlcyAodGhlIGRlbHRhIGJldHdlZW4gdGhlIG9sZCBhbmQgbmV3KVxuICAgKiBAdHlwZSB7b2JqZWN0fSBUaGUgbmV3IHN0YXRlIHRvIGFwcGx5IHRvIHRoZSBvbGRcbiAgICovXG4gIHVwZGF0ZVN0YXRlIChzdGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFN0YXRlKCksIHN0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YSksXG4gICAgICB2aWV3RGV0YWlsc1RleHQ6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dFxuICAgIH0pKTtcbiAgfVxuXG4gIGV2ZW50T3B0aW9ucyAoZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogZGF0YS5yZWxhdGVkSXRlbS52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6ICdVTklWRVJTQUwnLFxuICAgICAgZW50aXR5SWQ6IGRhdGEucmVsYXRlZEl0ZW0uZGF0YS5pZCxcbiAgICAgIGN0YUxhYmVsOiB0aGlzLl92aWV3RGV0YWlsc1RleHQudG9VcHBlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydFF1YWxpdHkgd2lsbCBzZW5kIHRoZSBxdWFsaXR5IGZlZWRiYWNrIHRvIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzR29vZCB0cnVlIGlmIHRoZSBhbnN3ZXIgaXMgd2hhdCB5b3Ugd2VyZSBsb29raW5nIGZvclxuICAgKi9cbiAgcmVwb3J0UXVhbGl0eSAoaXNHb29kKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gaXNHb29kID09PSB0cnVlID8gRXZlbnRUeXBlcy5USFVNQlNfVVAgOiBFdmVudFR5cGVzLlRIVU1CU19ET1dOO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KGV2ZW50VHlwZSlcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgJ2RpcmVjdEFuc3dlcic6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWxDb25maWdJZCB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkID0gb3B0cy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW4gYW5kIGlzIHNldCB0b1xuICAgICAqIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gb3B0cy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIG9iamVjdCBmb3IgdGhlIHRpdGxlIGxpbmtcbiAgICogQHBhcmFtIGVudGl0eUlkIFRoZSBJRCBvZiB0aGUgcmVzdWx0IGl0ZW0sIGlmIHByZXNlbnRcbiAgICogQHBhcmFtIHVybCBUaGUgdXJsIG9mIHRoZSByZXN1bHQgaXRlbSwgaWYgcHJlc2VudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zIChlbnRpdHlJZCwgdXJsKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogdGhpcy5faXNVbml2ZXJzYWwgPyAnVU5JVkVSU0FMJyA6ICdWRVJUSUNBTCdcbiAgICB9O1xuXG4gICAgaWYgKGVudGl0eUlkKSB7XG4gICAgICBvcHRpb25zLmVudGl0eUlkID0gZW50aXR5SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXNzZXMgZXZlbnRPcHRpb25zIHRvIHRoZSB2aWV3TW9kZWxcbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHRzSXRlbUNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhLmlkLCBkYXRhLmxpbmspXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbUNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yXG4gKiBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBtYXAgcHJvdmlkZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byAxNFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fem9vbSA9IGNvbmZpZy56b29tIHx8IDE0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgY29vcmRpbmF0ZXMgdG8gZGlzcGxheSBpZiB0aGVyZSBhcmUgbm8gcmVzdWx0cyByZXR1cm5lZFxuICAgICAqIE9ubHkgdXNlZCBpZiBzaG93RW1wdHlNYXAgaXMgc2V0IHRvIHRydWVcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2RlZmF1bHRQb3NpdGlvbiA9IGNvbmZpZy5kZWZhdWx0UG9zaXRpb24gfHwgeyBsYXQ6IDM3LjA5MDIsIGxuZzogLTk1LjcxMjkgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gZW1wdHkgbWFwIHNob3VsZCBiZSBzaG93biB3aGVuIHRoZXJlIGFyZSBubyByZXN1bHRzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5fc2hvd0VtcHR5TWFwID0gY29uZmlnLnNob3dFbXB0eU1hcCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIG1hcCBpbnN0YW5jZSwgY3JlYXRlZCBieSB0aGUgZXh0ZXJuYWwgbGliLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fbWFwID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRlbXBvcmFyeSBib29sZWFuIHRyYWNraW5nIHdoZXRoZXIgb3Igbm90IHRoZSBleHRlcm5hbCBKUyBsaWJyYXJ5IGlzIGxvYWRlZCAoc2VlIFRPRE8gYmVsb3cpXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNMb2FkZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGEgcGluIGlzIGNsaWNrZWQuIFRoZSBjbGlja2VkIGl0ZW0ocykgYXJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fb25QaW5DbGljayA9IGNvbmZpZy5vblBpbkNsaWNrIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSmF2YXNjcmlwdCBpcyBsb2FkZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjb25maWcub25Mb2FkZWQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGUgdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fEZ1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX3BpbkNvbmZpZyA9IHR5cGVvZiBjb25maWcucGluID09PSAnZnVuY3Rpb24nID8gY29uZmlnLnBpbiA6IE9iamVjdC5hc3NpZ24oTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLCBjb25maWcucGluKTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdG8gY29sbGFwc2UgcGlucyBhdCB0aGUgc2FtZSBsYXQvbG5nXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5fY29sbGFwc2VQaW5zID0gY29uZmlnLmNvbGxhcHNlUGlucyB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIFRPRE8oYmlsbHkpIENyZWF0ZSBhIGNvbmZpZ3VyYXRpb24gbW9kZWxcbiAgICovXG4gIHN0YXRpYyBnZXQgREVGQVVMVF9QSU5fQ09ORklHICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjoge1xuICAgICAgICBhbmNob3I6IG51bGwsIC8vIGUuZy4geyB4OiAxLCB5OiAxIH1cbiAgICAgICAgc3ZnOiBudWxsLFxuICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgIHNjYWxlZFNpemU6IG51bGwgLy8gZS5nLiB7IHc6IDIwLCBoOiAyMCB9XG4gICAgICB9LFxuICAgICAgbGFiZWxUeXBlOiAnbnVtZXJpYydcbiAgICB9O1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQoKSkge1xuICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBpc0xvYWRlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xuICB9XG5cbiAgbG9hZEpTICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkSlMnKTtcbiAgfVxuXG4gIGluaXQgKG1hcERhdGEpIHtcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSBiYXNlZCBvZmYgYSBwcm9taXNlIHRoYXQgZ2V0cyBjcmVhdGVkIGZyb20gbG9hZEpTXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogaW5pdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgbGlzdCBvZiBtYXJrZXJzLCBjb21iaW5lIG1hcmtlcnMgd2l0aCB0aGUgc2FtZSBsYXQvbG5nIGludG8gYSBzaW5nbGUgbWFya2VyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIG1hcmtlcnMgdG8gY29sbGFwc2VcbiAgICovXG4gIF9jb2xsYXBzZU1hcmtlcnMgKG1hcmtlcnMpIHtcbiAgICBjb25zdCBsb2NhdGlvblRvSXRlbSA9IHt9O1xuICAgIG1hcmtlcnMuZm9yRWFjaChtID0+IHtcbiAgICAgIGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXVxuICAgICAgICA/IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXS5wdXNoKG0pXG4gICAgICAgIDogbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdID0gW21dO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IFtdO1xuICAgIGZvciAobGV0IFssIG1hcmtlcnNdIG9mIE9iamVjdC5lbnRyaWVzKGxvY2F0aW9uVG9JdGVtKSkge1xuICAgICAgaWYgKG1hcmtlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXIgPSB7XG4gICAgICAgICAgaXRlbTogbWFya2Vycy5tYXAobSA9PiBtLml0ZW0pLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXJzLmxlbmd0aCxcbiAgICAgICAgICBsYXRpdHVkZTogbWFya2Vyc1swXS5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlcnNbMF0ubG9uZ2l0dWRlXG4gICAgICAgIH07XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChjb2xsYXBzZWRNYXJrZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGFwc2VkTWFya2Vycy5wdXNoKG1hcmtlcnNbMF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2xsYXBzZWRNYXJrZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHb29nbGVNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgZ29vZ2xlICovXG5cbi8qKlxuICogR29vZ2xlTWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29nbGVNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8vIG5vcm1hbGl6ZSBiZWNhdXNlIGdvb2dsZSdzIHpvb20gaXMgZWZmZWN0aXZlbHkgMSB1bml0IG9mIGRpZmZlcmVuY2UgYXdheSBmcm9tIG1hcGJveCB6b29tXG4gICAgdGhpcy5fem9vbU9mZnNldCA9IDE7XG4gICAgdGhpcy5fem9vbSArPSB0aGlzLl96b29tT2Zmc2V0O1xuICAgIHRoaXMuX2NsaWVudElkID0gb3B0cy5jbGllbnRJZDtcbiAgICB0aGlzLl9zaWduYXR1cmUgPSBvcHRzLnNpZ25hdHVyZTtcblxuICAgIGlmICghdGhpcy5oYXNWYWxpZENsaWVudENyZWRlbnRpYWxzKCkgJiYgIXRoaXMuX2FwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHb29nbGVNYXBzUHJvdmlkZXI6IE1pc3NpbmcgYGFwaUtleWAgb3Ige2BjbGllbnRJZGAsIGBzaWduYXR1cmVgfScpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgaWYgKERPTS5xdWVyeSgnI3lleHQtbWFwLWpzJykpIHtcbiAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIGlmICh0eXBlb2Ygb25Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uTG9hZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICAgIH0sXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNyYzogYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz8ke3RoaXMuZ2VuZXJhdGVDcmVkZW50aWFscygpfWBcbiAgICB9KTtcblxuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudElkO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoKCFtYXBEYXRhIHx8IG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGggPD0gMCkgJiYgIXRoaXMuX3Nob3dFbXB0eU1hcCkge1xuICAgICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChjb250YWluZXIsIHtcbiAgICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgICAgY2VudGVyOiB0aGlzLmdldENlbnRlck1hcmtlcihtYXBEYXRhKVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFwcGx5IG91ciBzZWFyY2ggZGF0YSB0byBvdXIgR29vZ2xlTWFwXG4gICAgICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSB0aGlzLl9jb2xsYXBzZVBpbnNcbiAgICAgICAgICA/IHRoaXMuX2NvbGxhcHNlTWFya2VycyhtYXBEYXRhLm1hcE1hcmtlcnMpXG4gICAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgICAgY29sbGFwc2VkTWFya2VycyxcbiAgICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NbaV0pO1xuICAgICAgICAgIGlmICh0aGlzLl9vblBpbkNsaWNrKSB7XG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICBnZXRDZW50ZXJNYXJrZXIgKG1hcERhdGEpIHtcbiAgICByZXR1cm4gbWFwRGF0YSAmJiBtYXBEYXRhLm1hcENlbnRlciAmJiBtYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUgJiYgbWFwRGF0YS5tYXBDZW50ZXIubGF0aXR1ZGVcbiAgICAgID8geyBsbmc6IG1hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSwgbGF0OiBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZSB9XG4gICAgICA6IHsgbG5nOiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubG5nLCBsYXQ6IHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sYXQgfTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtHb29nbGVNYXB9IG1hcCByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcmV0dXJucyB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBvdXIgQ29uZmlndXJhdGlvbiBPYmplY3QgaW50byB0aGUgZXhwZWN0ZWRcbiAgICAgIC8vIEdvb2dsZSBBUEkgZm9ybWF0LlxuICAgICAgbGV0IGljb24gPSB7fTtcbiAgICAgIGlmIChwaW5Db25maWdPYmouYW5jaG9yKSB7XG4gICAgICAgIGljb24uYW5jaG9yID0gZ29vZ2xlLm1hcHMuUG9pbnQocGluQ29uZmlnT2JqLmFuY2hvci54LCBwaW5Db25maWdPYmouYW5jaG9yLnkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnNjYWxlZFNpemUpIHtcbiAgICAgICAgaWNvbi5zY2FsZWRTaXplID0gbmV3IGdvb2dsZS5tYXBzLlNpemUocGluQ29uZmlnT2JqLnNjYWxlZFNpemUudywgcGluQ29uZmlnT2JqLnNjYWxlZFNpemUuaCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmoudXJsKSB7XG4gICAgICAgIGljb24udXJsID0gcGluQ29uZmlnT2JqLnVybDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai5zdmcpIHtcbiAgICAgICAgaWNvbi51cmwgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsICR7ZW5jb2RlVVJJQ29tcG9uZW50KHBpbkNvbmZpZ09iai5zdmcpfWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbDtcbiAgICAgIGlmIChwaW5Db25maWdPYmoubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSBwaW5Db25maWdPYmoubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9IG1hcmtlci5sYWJlbC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICAvLyBOT1RFKGJpbGx5KSBHb29nbGUgbWFwcyBkb2Vzbid0IGhhbmRsZSBlbXB0eSBpY29uIG9iamVjdHMgbmljZWx5XG4gICAgICAvLyBNYWtlIGdvb2dsZSBtYXBzIGhhcHB5IGlmIG5vIHNldHRpbmdzIGZvciBpY29uIGFyZSBwcm92aWRlZDtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhpY29uKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWNvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgR29vZ2xlTWFwTWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcEJveE1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBtYXBib3hnbCAqL1xuXG4vKipcbiAqIE1hcEJveE1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQm94TWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIC8qKlxuICAgKiBMb2FkIHRoZSBleHRlcm5hbCBKUyBMaWJyYXJ5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uTG9hZCBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSlMgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdGhpcy5fYXBpS2V5O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb25Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb25Mb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuanMnXG4gICAgfSk7XG5cbiAgICBsZXQgY3NzID0gRE9NLmNyZWF0ZUVsKCdsaW5rJywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1jc3MnLFxuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuY3NzJ1xuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIGNzcyk7XG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgdGhpcy5fbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHpvb206IHRoaXMuX3pvb20sXG4gICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OScsXG4gICAgICBjZW50ZXI6IHRoaXMuZ2V0Q2VudGVyTWFya2VyKG1hcERhdGEpXG4gICAgfSk7XG5cbiAgICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VQaW5zXG4gICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5fbWFwKTtcblxuICAgICAgY29uc3QgYm91bmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdEJvdW5kcygpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIod3JhcHBlcikuc2V0TG5nTGF0KGNvb3Jkcyk7XG4gICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLmdldExuZ0xhdCgpKTtcbiAgICAgICAgbWFya2VyLmFkZFRvKHRoaXMuX21hcCk7XG4gICAgICAgIGlmICh0aGlzLl9vblBpbkNsaWNrKSB7XG4gICAgICAgICAgbWFya2VyLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uUGluQ2xpY2soY29sbGFwc2VkTWFya2Vyc1tpXS5pdGVtKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIHRoaXMuX21hcC5maXRCb3VuZHMoYm91bmRzLCB7IHBhZGRpbmc6IDUwIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENlbnRlck1hcmtlciAobWFwRGF0YSkge1xuICAgIHJldHVybiBtYXBEYXRhICYmIG1hcERhdGEubWFwQ2VudGVyICYmIG1hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSAmJiBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZVxuICAgICAgPyBbbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZV1cbiAgICAgIDogeyBsbmc6IHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcsIGxhdDogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxhdCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXBCb3hNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtYXBib3ggbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7TWFwQm94fVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXRpdHVkZTogdW5kZWZpbmVkLFxuICAgICAgbG9uZ2l0dWRlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGh0bWwgZWxlbWVudCB0byBiZSB1c2VkIGFzIHRoZSBtYXAgbWFya2VyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLndyYXBwZXIgPSBvcHRzLndyYXBwZXIgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSBwaW4gZm9yIHRoZSBzdGF0aWMgbWFwXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpY01hcFBpbiA9IG9wdHMuc3RhdGljTWFwUGluIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7TWFwQm94TWFya2VyQ29uZmlnW119IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAobWFwYm94TWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBpZiAobWFya2VyLnN0YXRpY01hcFBpbikge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGB1cmwtJHttYXJrZXIuc3RhdGljTWFwUGlufSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHBpbi1zLSR7bWFya2VyLmxhYmVsfSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIE1hcEJveE1hcmtlckNvbmZpZ1xuICAgKiBAcGFyYW0ge01hcEJveH0gQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtNYXBCb3hNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd3JhcHBlciA9IHBpbkNvbmZpZ09iai53cmFwcGVyID8gcGluQ29uZmlnT2JqLndyYXBwZXIgOiBudWxsO1xuICAgICAgY29uc3Qgc3RhdGljTWFwUGluID0gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA/IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gOiBudWxsO1xuXG4gICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBNYXBCb3hNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgICAgc3RhdGljTWFwUGluOiBzdGF0aWNNYXBQaW5cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwYm94TWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBQcm92aWRlclR5cGVzID0ge1xuICAnZ29vZ2xlJzogR29vZ2xlTWFwUHJvdmlkZXIsXG4gICdtYXBib3gnOiBNYXBCb3hNYXBQcm92aWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgY29tcG9uZW50IHRvIGxpc3RlbiB0byB0aGUgc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGtleVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIHRoZSB7TWFwUHJvdmlkZXJ9IHRoYXQncyBjb25zdHJ1Y3RlZFxuICAgICAqIEB0eXBlIHtNYXBQcm92aWRlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ01hcCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX2NvbmZpZyk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5fbWFwID0gdGhpcy5nZXRQcm92aWRlckluc3RhbmNlKHRoaXMuX21hcFByb3ZpZGVyKTtcbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbENvbmZpZ0lkIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZDtcblxuICAgIC8qKlxuICAgICAqIGlzVW5pdmVyc2FsIGlzIHNldCB0byB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGFkZGVkIGJ5IHRoZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc1VuaXZlcnNhbCA9IGNvbmZpZy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX2l0ZW1Db25maWcgPSB7XG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJJdGVtID09PSB1bmRlZmluZWQgJiYgY29uZmlnLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5yZW5kZXJJdGVtID0gY29uZmlnLl9wYXJlbnRPcHRzLnJlbmRlckl0ZW07XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLml0ZW1UZW1wbGF0ZSA9IGNvbmZpZy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogY29uZmlnLnJlbmRlckl0ZW0sXG4gICAgICB0ZW1wbGF0ZTogY29uZmlnLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCB0byB0aGUgdW5pdmVyc2FsIHBhZ2UgZm9yIHRoZSBubyByZXN1bHRzIHBhZ2UgdG8gbGluayBiYWNrIHRvIHdpdGggY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLl91bml2ZXJzYWxVcmwgPSBjb25maWcudW5pdmVyc2FsVXJsO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1cGVyLm1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGR1cGxpY2F0ZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCByZXN1bHRzID0gZGF0YS5yZXN1bHRzIHx8IFtdO1xuICAgIGNvbnN0IHNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSDtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7IHJlc3VsdHM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSxcbiAgICAgIGluY2x1ZGVNYXA6IHRoaXMuX2NvbmZpZy5pbmNsdWRlTWFwLFxuICAgICAgbWFwQ29uZmlnOiB0aGlzLl9jb25maWcubWFwQ29uZmlnLFxuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucygpLFxuICAgICAgdW5pdmVyc2FsVXJsOiB0aGlzLl91bml2ZXJzYWxVcmwgPyB0aGlzLl91bml2ZXJzYWxVcmwgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoIDogJycsXG4gICAgICBzaG93Tm9SZXN1bHRzOiByZXN1bHRzLmxlbmd0aCA9PT0gMCxcbiAgICAgIHF1ZXJ5OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSlcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdmlldyBhbGwgbGlua1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdGhpcy5faXNVbml2ZXJzYWxcbiAgICB9KSk7XG4gICAgbGV0IGdsb2JhbENvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsO1xuICAgIGxldCBpdGVtQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZ1tjb21wLnR5cGVdO1xuICAgIGxldCBoYXNHbG9iYWxSZW5kZXIgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJztcbiAgICBsZXQgaGFzR2xvYmFsVGVtcGxhdGUgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJztcblxuICAgIGlmIChoYXNHbG9iYWxSZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGdsb2JhbENvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChoYXNHbG9iYWxUZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShnbG9iYWxDb25maWcudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICghaXRlbUNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNHbG9iYWxSZW5kZXIgJiYgaXRlbUNvbmZpZy5yZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGl0ZW1Db25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0ZW1wbGF0ZSBzcGVjaWZpYyBzaXR1YXRpb25cbiAgICBpZiAoIWhhc0dsb2JhbFRlbXBsYXRlICYmIGl0ZW1Db25maWcudGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoaXRlbUNvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50ICovXG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIGJhc2Ugc2VsZWN0b3IgdG8gdXNlIHdoZW4gZmluZGluZyBET00gdGFyZ2V0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fc2VsZWN0b3JCYXNlID0gY29uZmlnLnNlbGVjdG9yQmFzZSB8fCAnLmpzLXl4dC1BY2NvcmRpb25SZXN1bHQnO1xuXG4gICAgLyoqXG4gICAgICogY29sbGFwc2VkIHN0YXRlIGNsYXNzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZENsYXNzID0gY29uZmlnLmNvbGxhcHNlZENsYXNzIHx8ICdpcy1jb2xsYXBzZWQnO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWwgY29uZmlnIGlkIGlzIHJlcXVpcmVkIGZvciBhbmFseXRpY3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gY29uZmlnLnZlcnRpY2FsQ29uZmlnSWQgfHwgY29uZmlnLl9wYXJlbnRPcHRzLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgY29tcG9uZW50IHR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQWNjb3JkaW9uUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2FjY29yZGlvbic7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIG9uTW91bnQgdG8gYWRkIGJpbmRpbmdzIHRvIGNoYW5nZSB0aGUgaGVpZ2h0IG9uIGNsaWNrXG4gICAqIEByZXR1cm5zIHtBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50fVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIG9uTW91bnQgKCkge1xuICAgIHN1cGVyLm9uTW91bnQoKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbkVscyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX3NlbGVjdG9yQmFzZSk7XG4gICAgYWNjb3JkaW9uRWxzLmZvckVhY2goKGFjY29yZGlvbkVsKSA9PiB7XG4gICAgICBjb25zdCB0b2dnbGVFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy50b2dnbGVTZWxlY3RvcigpKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy5ib2R5U2VsZWN0b3IoKSk7XG4gICAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIGFjY29yZGlvbkVsKTtcbiAgICAgIHRvZ2dsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGFjY29yZGlvbkVsLCB0b2dnbGVFbCwgY29udGVudEVsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBtb2RpZmllcjogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrIGhhbmRsZXIgZm9yIHRoZSBhY2NvcmRpb24gdG9nZ2xlIGJ1dHRvblxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHBhcmFtIHRvZ2dsZUVsIHtIVE1MRWxlbWVudH0gdGhlIGJ1dHRvblxuICAgKiBAcGFyYW0gY29udGVudEVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSB0YXJnZXRcbiAgICovXG4gIGhhbmRsZUNsaWNrICh3cmFwcGVyRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAnUk9XX0VYUEFORCcgOiAnUk9XX0NPTExBUFNFJylcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgICBlbnRpdHlJZDogdG9nZ2xlRWwuZGF0YXNldC5lbnRpdHlJZFxuICAgICAgfSk7XG4gICAgd3JhcHBlckVsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jb2xsYXBzZWRDbGFzcyk7XG4gICAgdGhpcy5jaGFuZ2VIZWlnaHQoY29udGVudEVsLCB3cmFwcGVyRWwpO1xuICAgIHRvZ2dsZUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGNvbGxhcHNlZFxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0NvbGxhcHNlZCAod3JhcHBlckVsKSB7XG4gICAgaWYgKCF3cmFwcGVyRWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcHBlckVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGVzIHRoZSBoZWlnaHQgYmV0d2VlbiAwIGFuZCB0aGUgY29udGVudCBoZWlnaHQgZm9yIHNtb290aCBhbmltYXRpb25cbiAgICogQHBhcmFtIHRhcmdldEVsIHtIVE1MRWxlbWVudH1cbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBjaGFuZ2VIZWlnaHQgKHRhcmdldEVsLCB3cmFwcGVyRWwpIHtcbiAgICB0YXJnZXRFbC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAwIDogdGFyZ2V0RWwuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIGNvbXBvc2luZyBjaGlsZCBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBAcGFyYW0gY2hpbGQge3N0cmluZ31cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJ1aWxkU2VsZWN0b3IgKGNoaWxkKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX3NlbGVjdG9yQmFzZX0ke2NoaWxkfWA7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbiBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgdG9nZ2xlU2VsZWN0b3IgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkU2VsZWN0b3IoJy10b2dnbGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSBjb250ZW50IGVsZW1lbnQgc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJvZHlTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLWJvZHknKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fbGltaXQgPSBvcHRzLmxpbWl0IHx8IDEwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1VuaXZlcnNhbFJlc3VsdHMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHMnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VjdGlvbnM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCxcbiAgICAgIHF1ZXJ5OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSlcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUsIG9wdHMpIHtcbiAgICBjb25zdCBjaGlsZE9wdHMgPSB7IC4uLm9wdHMsIC4uLnRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pIH07XG4gICAgaWYgKGNoaWxkT3B0cy51c2VBY2NvcmRpb24gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50LnR5cGUsIGNoaWxkT3B0cyk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBjaGlsZE9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IGNvbmZpZ0lkLFxuICAgICAgaXNVbml2ZXJzYWw6IHRydWVcbiAgICB9O1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9jb25maWcuY29uZmlnO1xuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIHRoaXMuX2NvbmZpZ1snY29uZmlnJ11bY29uZmlnSWRdIHx8IHRoaXMuX2NvbmZpZ1snY29uZmlnJ10pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQYWdpbmF0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgdG8gdXNlIGZvciBzZWFyY2hlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9DT05GSUcpLnZlcnRpY2FsS2V5O1xuICAgIGlmICh0eXBlb2YgdGhpcy5fdmVydGljYWxLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAndmVydGljYWxLZXkgbm90IHByb3ZpZGVkLCBidXQgbmVjZXNzYXJ5IGZvciBwYWdpbmF0aW9uJyxcbiAgICAgICAgJ1BhZ2luYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBkaXNwbGF5cyB0aGUgZmlyc3QgcGFnZSBidXR0b25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpcnN0UGFnZUJ1dHRvbkVuYWJsZWQgPSBjb25maWcuc2hvd0ZpcnN0ID09PSB1bmRlZmluZWQgPyB0cnVlIDogY29uZmlnLnNob3dGaXJzdDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIGRpc3BsYXlzIHRoZSBsYXN0IHBhZ2UgYnV0dG9uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sYXN0UGFnZUJ1dHRvbkVuYWJsZWQgPSBjb25maWcuc2hvd0xhc3QgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBjb25maWcuc2hvd0xhc3Q7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IHtcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleVxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKSB8fCAwO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VULCBOdW1iZXIob2Zmc2V0KSk7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQsIG9mZnNldCA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQsIE51bWJlcihvZmZzZXQpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCByZXN1bHRzID0+IHtcbiAgICAgIGlmIChyZXN1bHRzLnNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdQYWdpbmF0aW9uJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcGFnaW5hdGlvbic7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUykgfHwge307XG4gICAgY29uc3QgbGltaXQgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfQ09ORklHKS5saW1pdDtcbiAgICBjb25zdCBzaG93Q29udHJvbHMgPSByZXN1bHRzLnNlYXJjaFN0YXRlID09PSAnc2VhcmNoLWNvbXBsZXRlJyAmJiByZXN1bHRzLnJlc3VsdHNDb3VudCA+IGxpbWl0O1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpIHx8IDA7XG4gICAgaWYgKCFzaG93Q29udHJvbHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2aW91c1BhZ2VCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLmpzLXl4dC1QYWdpbmF0aW9uLXByZXZpb3VzJyk7XG4gICAgY29uc3QgbmV4dFBhZ2VCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLmpzLXl4dC1QYWdpbmF0aW9uLW5leHQnKTtcbiAgICBjb25zdCBtYXhQYWdlID0gTWF0aC50cnVuYygocmVzdWx0cy5yZXN1bHRzQ291bnQgLSAxKSAvIGxpbWl0KTtcblxuICAgIERPTS5vbihwcmV2aW91c1BhZ2VCdXR0b24sICdjbGljaycsICgpID0+IHRoaXMudXBkYXRlUGFnZShvZmZzZXQgLSBsaW1pdCkpO1xuICAgIERPTS5vbihuZXh0UGFnZUJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4gdGhpcy51cGRhdGVQYWdlKG9mZnNldCArIGxpbWl0KSk7XG5cbiAgICBpZiAodGhpcy5fZmlyc3RQYWdlQnV0dG9uRW5hYmxlZCkge1xuICAgICAgY29uc3QgZmlyc3RQYWdlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy5qcy15eHQtUGFnaW5hdGlvbi1maXJzdCcpO1xuICAgICAgRE9NLm9uKGZpcnN0UGFnZUJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4gdGhpcy51cGRhdGVQYWdlKDApKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGFzdFBhZ2VCdXR0b25FbmFibGVkKSB7XG4gICAgICBjb25zdCBsYXN0UGFnZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LVBhZ2luYXRpb24tbGFzdCcpO1xuICAgICAgRE9NLm9uKGxhc3RQYWdlQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB0aGlzLnVwZGF0ZVBhZ2UobWF4UGFnZSAqIGxpbWl0KSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGFnZSAob2Zmc2V0KSB7XG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VULCBvZmZzZXQpO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCwgb2Zmc2V0KTtcbiAgICB0aGlzLmNvcmUudmVydGljYWxQYWdlKHRoaXMuX3ZlcnRpY2FsS2V5LCBvZmZzZXQpO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AgKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIC8vIFNhZmFyaVxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMpIHx8IHt9O1xuICAgIGxldCBvZmZzZXQgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKSB8fCAwO1xuICAgIGNvbnN0IGxpbWl0ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX0NPTkZJRykubGltaXQ7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IG9mZnNldCAvIGxpbWl0O1xuICAgIGNvbnN0IHNob3dDb250cm9scyA9IHJlc3VsdHMuc2VhcmNoU3RhdGUgPT09ICdzZWFyY2gtY29tcGxldGUnICYmIHJlc3VsdHMucmVzdWx0c0NvdW50ID4gbGltaXQ7XG4gICAgY29uc3QgaXNNb3JlUmVzdWx0cyA9IHJlc3VsdHMucmVzdWx0c0NvdW50ID4gb2Zmc2V0ICsgbGltaXQ7XG4gICAgY29uc3QgbWF4UGFnZSA9IE1hdGgudHJ1bmMoKHJlc3VsdHMucmVzdWx0c0NvdW50IC0gMSkgLyBsaW1pdCk7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHNob3dDb250cm9sczogc2hvd0NvbnRyb2xzLFxuICAgICAgZmlyc3RQYWdlQnV0dG9uRW5hYmxlZDogdGhpcy5fZmlyc3RQYWdlQnV0dG9uRW5hYmxlZCxcbiAgICAgIGxhc3RQYWdlQnV0dG9uRW5hYmxlZDogdGhpcy5fbGFzdFBhZ2VCdXR0b25FbmFibGVkLFxuICAgICAgcGFnZU51bWJlcjogcGFnZU51bWJlciArIDEsXG4gICAgICBzaG93Rmlyc3RQYWdlQnV0dG9uOiBwYWdlTnVtYmVyID4gMSxcbiAgICAgIHNob3dQcmV2aW91c1BhZ2VCdXR0b246IHBhZ2VOdW1iZXIgPiAwLFxuICAgICAgc2hvd05leHRQYWdlQnV0dG9uOiBpc01vcmVSZXN1bHRzLFxuICAgICAgc2hvd0xhc3RQYWdlQnV0dG9uOiBwYWdlTnVtYmVyIDwgbWF4UGFnZSAtIDEsXG4gICAgICAuLi5kYXRhXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbic7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3IgdGhlIGNvbXBvbmVudFxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIC8qKlxuICAgKiBUaGUgZW50aXR5IGlkZW50aWZpZXIgdGhhdCB0aGUgcXVlc3Rpb24gaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgKiBUaGlzIGlzIHR5cGljYWxseSBhbiBvcmdhbml6YXRpb24gb2JqZWN0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICAnZW50aXR5SWQnOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdsYW5ndWFnZSc6ICdFTicsXG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIENTUyBzZWxlY3RvciB1c2VkIHRvIHJlZmVyZW5jZSB0aGUgZm9ybSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAqL1xuICAnZm9ybVNlbGVjdG9yJzogJ2Zvcm0nLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBlLW1haWwgYWRkcmVzcyBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2VtYWlsTGFiZWwnOiAnRW1haWwgQWRkcmVzczonLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBuYW1lIGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbmFtZUxhYmVsJzogJ05hbWU6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgcXVlc3Rpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdxdWVzdGlvbkxhYmVsJzogJ1doYXQgaXMgeW91ciBxdWVzdGlvbj8nLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBQcml2YWN5IFBvbGljeVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ3ByaXZhY3lQb2xpY3lMYWJlbCc6ICdJIGFncmVlIHRvIG91ciBQcml2YWN5IFBvbGljeTonLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2J1dHRvbkxhYmVsJzogJ1N1Ym1pdCdcbn07XG5cbi8qKlxuICogUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGlzIGEgY29tcG9uZW50IHRoYXQgY3JlYXRlcyBhIGZvcm1cbiAqIHRoYXRzIGRpc3BsYXllZCB3aGVuZXZlciBhIHF1ZXJ5IGlzIHJ1bi4gSXQgZW5hYmxlcyB0aGUgdXNlclxuICogdG8gc3VibWl0IHF1ZXN0aW9ucyB0aGF0IHRoZXkgY2FudCBmaW5kIHRoZSBhbnN3ZXIgZm9yLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZyksIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIHN0b3JhZ2UgbW9kZWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OO1xuXG4gICAgLyoqXG4gICAgICogTk9URShiaWxseSkgaWYgdGhpcyBpcyBhIHBhdHRlcm4gd2Ugd2FudCB0byBmb2xsb3cgZm9yIGNvbmZpZ3VyYXRpb25cbiAgICAgKiB3ZSBzaG91bGQgYmFrZSBpdCBpbnRvIHRoZSBjb3JlIGNsYXNzLlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdGVDb25maWcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHB1YmxpYyBpbnRlcmZhY2UgYWxpYXMgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUUFTdWJtaXNzaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiB2YWxpZGF0aW9uQ29uZmlnIGNvbnRhaW5zIGEgYnVuY2ggb2YgcnVsZXNcbiAgICogdGhhdCBhcmUgdXNlZCB0byB2YWxpZGF0ZSBhZ2luc3QgY29uZmlndXJhdGlvbiBwcm92aWRlZCBieSB0aGUgdXNlclxuICAgKi9cbiAgdmFsaWRhdGVDb25maWcgKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuZW50aXR5SWQgPT09IG51bGwgfHwgdGhpcy5fY29uZmlnLmVudGl0eUlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdgZW50aXR5SWRgIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIFF1ZXN0aW9uIFN1Ym1pc3Npb24nLFxuICAgICAgICAnUXVlc3Rpb25TdWJtaXNzaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIC8vIEF2b2lkIG1vdW50aW5nIHRoZSBjb21wb25lbnQgaWYgdGhlcmVzIG5vIGRhdGFcbiAgICAvLyBOb3RlLCAxIGJlY2F1c2UgYGNvbmZpZ2AgaXMgYWx3YXlzIHBhcnQgb2YgdGhlIHN0YXRlLlxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDE7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBsZXQgZm9ybUVsID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY29uZmlnLmZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKGZvcm1FbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEFuYWx5dGljcyhmb3JtRWwpO1xuICAgIHRoaXMuYmluZEZvcm1TdWJtaXQoZm9ybUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kQW5hbHl0aWNzIHdpbGwgd2lyZSB1cCBET00gZXZlbnQgaG9va3MgdG8gc2VydmVyc2lkZSByZXBvcnRpbmdcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqL1xuICBiaW5kQW5hbHl0aWNzIChmb3JtRWwpIHtcbiAgICBpZiAodGhpcy5hbmFseXRpY3NSZXBvcnRlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXN0aW9uVGV4dEVsID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJy5qcy1xdWVzdGlvbi10ZXh0Jyk7XG4gICAgRE9NLm9uKHF1ZXN0aW9uVGV4dEVsLCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChuZXcgQW5hbHl0aWNzRXZlbnQoJ1FVRVNUSU9OX0ZPQ1VTJykpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRGb3JtU3VibWl0IGhhbmRsZXMgc3VibWl0dGluZyB0aGUgcXVlc3Rpb24gdG8gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqL1xuICBiaW5kRm9ybVN1Ym1pdCAoZm9ybUVsKSB7XG4gICAgRE9NLm9uKGZvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBUT0RPKGJpbGx5KSB3ZSBwcm9iYWJseSB3YW50IHRvIGRpc2FibGUgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWQgdHdpY2VcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gdGhpcy5wYXJzZShmb3JtRWwpO1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZVJlcXVpcmVkKGZvcm1EYXRhKTtcbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUobmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwgZXJyb3JzKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbih7XG4gICAgICAgICdlbnRpdHlJZCc6IHRoaXMuX2NvbmZpZy5lbnRpdHlJZCxcbiAgICAgICAgJ3F1ZXN0aW9uTGFuZ3VhZ2UnOiB0aGlzLl9jb25maWcubGFuZ3VhZ2UsXG4gICAgICAgICdzaXRlJzogJ0ZJUlNUUEFSVFknLFxuICAgICAgICAnbmFtZSc6IGZvcm1EYXRhLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IGZvcm1EYXRhLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogZm9ybURhdGEucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IGZvcm1EYXRhLnF1ZXN0aW9uRGVzY3JpcHRpb25cbiAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgJ25ldHdvcmsnOiAnVGhlcmUgd2FzIGEgcHJvYmxlbSBzdWJtaXR0aW5nIHlvdXIgcXVlc3Rpb24uIFBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyB0aGUgZm9ybSwgYW5kIGJ1aWxkcyBhIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGlucHV0IG5hbWVzXG4gICAqIGFuZCB0ZXh0IGZpZWxkcy5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJzZSAoZm9ybUVsKSB7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBET00ucXVlcnlBbGwoZm9ybUVsLCAnLmpzLXF1ZXN0aW9uLWZpZWxkJyk7XG4gICAgaWYgKCFpbnB1dEZpZWxkcyB8fCBpbnB1dEZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBsZXQgb2JqID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGlucHV0RmllbGRzW2ldLnZhbHVlO1xuICAgICAgaWYgKGlucHV0RmllbGRzW2ldLnR5cGUgPT09ICdjaGVja2JveCcgJiYgdmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG9ialtpbnB1dEZpZWxkc1tpXS5uYW1lXSA9IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGUgcmVxdWlyZWQgZmllbGRzIChvciBydWxlcykgZm9yIHRoZSBmb3JtIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGZvcm1EYXRhXG4gICAqIEByZXR1cm5zIHtPYmplY3R8Ym9vbGVhbn0gZXJyb3JzIG9iamVjdCBpZiBhbnkgZXJyb3JzIGZvdW5kXG4gICAqL1xuICB2YWxpZGF0ZVJlcXVpcmVkIChmb3JtRGF0YSkge1xuICAgIGxldCBlcnJvcnMgPSB7fTtcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsIHx8IHR5cGVvZiBmb3JtRGF0YS5lbWFpbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1snZW1haWwnXSA9ICdNaXNzaW5nIGVtYWlsIGFkZHJlc3MhJztcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLnByaXZhY3lQb2xpY3kgfHwgZm9ybURhdGEucHJpdmFjeVBvbGljeSAhPT0gdHJ1ZSkge1xuICAgICAgZXJyb3JzWydwcml2YWN5UG9saWN5J10gPSAnQXBwcm92aW5nIG91ciBwcml2YWN5IHBvbGljeSB0ZXJtcyBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucXVlc3Rpb25UZXh0IHx8IHR5cGVvZiBmb3JtRGF0YS5xdWVzdGlvblRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbJ3F1ZXN0aW9uVGV4dCddID0gJ1F1ZXN0aW9uIHRleHQgaXMgcmVxdWlyZWQhJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPiAwID8gZXJyb3JzIDogbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHSWNvbiB7XG4gIC8qKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwYXJhbSBjb25maWcubmFtZVxuICAgKiBAcGFyYW0gY29uZmlnLnBhdGhcbiAgICogQHBhcmFtIGNvbmZpZy5jb21wbGV4Q29udGVudHNcbiAgICogQHBhcmFtIGNvbmZpZy52aWV3Qm94XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIHRoZSBuYW1lIG9mIHRoZSBpY29uXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgLyoqXG4gICAgICogYW4gc3ZnIHBhdGggZGVmaW5pdGlvblxuICAgICAqL1xuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xuICAgIC8qKlxuICAgICAqIGlmIG5vdCB1c2luZyBhIHBhdGgsIGEgdGhlIG1hcmt1cCBmb3IgYSBjb21wbGV4IFNWR1xuICAgICAqL1xuICAgIHRoaXMuY29tcGxleENvbnRlbnRzID0gY29uZmlnLmNvbXBsZXhDb250ZW50cztcbiAgICAvKipcbiAgICAgKiB0aGUgdmlldyBib3ggZGVmaW5pdGlvbiwgZGVmYXVsdHMgdG8gMjR4MjRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudmlld0JveCA9IGNvbmZpZy52aWV3Qm94IHx8ICcwIDAgMjQgMjQnO1xuICAgIC8qKlxuICAgICAqIGFjdHVhbCBjb250ZW50cyB1c2VkXG4gICAgICovXG4gICAgdGhpcy5jb250ZW50cyA9IHRoaXMucGF0aERlZmluaXRpb24oKTtcbiAgfVxuXG4gIHBhdGhEZWZpbml0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jb21wbGV4Q29udGVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXhDb250ZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gYDxwYXRoIGQ9XCIke3RoaXMucGF0aH1cIj48L3BhdGg+YDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBzdmcgbWFya3VwXG4gICAqL1xuICBtYXJrdXAgKCkge1xuICAgIHJldHVybiBgPHN2ZyB2aWV3Qm94PVwiJHt0aGlzLnZpZXdCb3h9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7dGhpcy5jb250ZW50c308L3N2Zz5gO1xuICB9XG59XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAndGh1bWInLFxuICB2aWV3Qm94OiAnMCAwIDI0IDIyJyxcbiAgcGF0aDogJ00xNS4yNzMgMUg1LjQ1NWMtLjkwNiAwLTEuNjguNTUtMi4wMDggMS4zNDJMLjE1MyAxMC4wOTdBMi4xOSAyLjE5IDAgMDAwIDEwLjl2Mi4yYzAgMS4yMS45ODIgMi4yIDIuMTgyIDIuMmg2Ljg4M0w4LjAzIDIwLjMyN2wtLjAzMy4zNTJjMCAuNDUxLjE4Ni44NjkuNDggMS4xNjZMOS42MzMgMjNsNy4xNzgtNy4yNDlhMi4xNiAyLjE2IDAgMDAuNjQ0LTEuNTUxdi0xMWMwLTEuMjEtLjk4Mi0yLjItMi4xODItMi4yem0wIDEzLjJsLTQuNzM1IDQuNzc0TDExLjc1IDEzLjFIMi4xODJ2LTIuMmwzLjI3My03LjdoOS44MTh2MTF6TTE5LjYzNiAxSDI0djEzLjJoLTQuMzY0VjF6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHBhdGg6ICdNMTQuNjA2IDkuNWMtLjY3MS0uNTE1LTEuNTkxLS44MzMtMi42MDYtLjgzMyAxLjAxNSAwIDEuOTM1LjMxOCAyLjYwNi44MzN6bS03Ljk4NSAwSDEuNjU1QTEuNjYgMS42NiAwIDAxMCA3LjgzM1YzLjY2N0MwIDIuNzQ3Ljc0MSAyIDEuNjU1IDJoMjAuNjlBMS42NiAxLjY2IDAgMDEyNCAzLjY2N3Y0LjE2NkExLjY2IDEuNjYgMCAwMTIyLjM0NSA5LjVoLTQuOTY2VjIySDYuNjIxVjkuNWgyLjc3M0g2LjYyem0xMC43NTgtMS42NjdoNC45NjZWMy42NjdIMS42NTV2NC4xNjZoNC45NjZ2LTIuNWgxMC43NTh2Mi41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3BhbnRoZW9uJyxcbiAgcGF0aDogJ005Ljk0NyAxNi41OThoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1Yy0uMDctLjA0My0uMTA2LS4wOTMtLjEwNi0uMTVMOS4xNSA3Ljgydi0uMTVjMC0uMDQ0LjAyOC0uMDguMDg0LS4xMDlhLjY5MS42OTEgMCAwMS4xMDUtLjA4Ni4yNTQuMjU0IDAgMDEuMTQ2LS4wNDNIMTMuNmMuMDU2IDAgLjEwNC4wMTUuMTQ2LjA0My4wNDIuMDMuMDkxLjA1OC4xNDcuMDg2YS4yNzEuMjcxIDAgMDEuMDYzLjEwOGMuMDE0LjA0My4wMDcuMDkzLS4wMi4xNWwtLjQyIDEuMzc4YS4zNzQuMzc0IDAgMDEtLjE0Ny4xNS4zNy4zNyAwIDAxLS4xOS4wNjVoLS4yNTF2Ny4xODZoLjI1MmEuMzcuMzcgMCAwMS4xODkuMDY1Yy4wNy4wNDMuMTE5LjA5My4xNDcuMTVsLjQyIDEuMzc4Yy4wMjcuMDI4LjAzNC4wNzEuMDIuMTI5YS4yNzUuMjc1IDAgMDEtLjA2My4xMjkgMS4zNjQgMS4zNjQgMCAwMC0uMTQ3LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNIOS40ODVhLjI1NC4yNTQgMCAwMS0uMTQ2LS4wNDMuNjkxLjY5MSAwIDAxLS4xMDUtLjA4NmMtLjA1Ni0uMDI5LS4wODQtLjA3Mi0uMDg0LS4xM3YtLjEyOGwuNDYxLTEuMzc3YzAtLjA1OC4wMzUtLjEwOC4xMDUtLjE1MWEuNDMyLjQzMiAwIDAxLjIzMS0uMDY1em01Ljc5MiAwaC4yNTJWOS40MTJoLS4yNTJhLjQzMi40MzIgMCAwMS0uMjMtLjA2NS4zNzQuMzc0IDAgMDEtLjE0OC0uMTVsLS40Mi0xLjM3N2MtLjAyNy0uMDI5LS4wMzQtLjA3Mi0uMDItLjEzYS4yNzUuMjc1IDAgMDEuMDYzLS4xMjljLjA1Ni0uMDI4LjEwNS0uMDU3LjE0Ni0uMDg2YS4yNTQuMjU0IDAgMDEuMTQ3LS4wNDNoNC4xMTRjLjA1NSAwIC4xMDQuMDE1LjE0Ni4wNDNhLjY5MS42OTEgMCAwMS4xMDUuMDg2Yy4wNTYuMDMuMDg0LjA3Mi4wODQuMTN2LjEyOWwtLjQyIDEuMzc3YS4zNzQuMzc0IDAgMDEtLjE0Ni4xNS40MzIuNDMyIDAgMDEtLjIzMS4wNjVoLS4yMXY3LjE4NmguMjFhLjQzLjQzIDAgMDEuMjMuMDY1Yy4wNy4wNDMuMTIuMDkzLjE0OC4xNWwuNDIgMS4zNzh2LjE1YzAgLjA0My0uMDI5LjA4LS4wODUuMTA4YS42OTEuNjkxIDAgMDEtLjEwNS4wODYuMjU0LjI1NCAwIDAxLS4xNDYuMDQzaC00LjExNGEuMjU0LjI1NCAwIDAxLS4xNDctLjA0MyAxLjM2NCAxLjM2NCAwIDAwLS4xNDYtLjA4Ni4yNzEuMjcxIDAgMDEtLjA2My0uMTA4Yy0uMDE0LS4wNDMtLjAwNy0uMDkzLjAyLS4xNWwuNDItMS4zNzdhLjM3NC4zNzQgMCAwMS4xNDctLjE1MS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bS0xMS43OTQtLjA4NmguMjUyVjkuNDk4aC0uMjUyYS4zMzQuMzM0IDAgMDEtLjIxLS4wNjUuMzg2LjM4NiAwIDAxLS4xMjYtLjE5M2wtLjQyLTEuMzc3YS4yNDguMjQ4IDAgMDEtLjAyLS4xNzIuODU0Ljg1NCAwIDAxLjA2My0uMTczYy4wMjgtLjA1Ny4wNy0uMS4xMjYtLjEyOWEuMzY1LjM2NSAwIDAxLjE2OC0uMDQzaDQuMDdjLjA1NyAwIC4xMTMuMDE1LjE2OS4wNDNhLjI3OC4yNzggMCAwMS4xMjYuMTMuODU0Ljg1NCAwIDAxLjA2Mi4xNzIuMjQ4LjI0OCAwIDAxLS4wMi4xNzJsLS40MiAxLjM3N2EuMzg2LjM4NiAwIDAxLS4xMjYuMTkzLjMzNC4zMzQgMCAwMS0uMjEuMDY1aC0uMjF2Ny4wMTRoLjIxYy4wODQgMCAuMTU0LjAyOS4yMS4wODZhLjY3My42NzMgMCAwMS4xMjYuMTcybC40MiAxLjM3OGEuMjQ4LjI0OCAwIDAxLjAyLjE3Mi44NTQuODU0IDAgMDEtLjA2Mi4xNzIuMjc4LjI3OCAwIDAxLS4xMjYuMTI5LjM2NS4zNjUgMCAwMS0uMTY4LjA0M0gzLjUyNmEuMzY1LjM2NSAwIDAxLS4xNjgtLjA0My4yNzguMjc4IDAgMDEtLjEyNi0uMTMuODU0Ljg1NCAwIDAxLS4wNjMtLjE3MS4yNDguMjQ4IDAgMDEuMDItLjE3MmwuNDItMS4zNzhhLjY3My42NzMgMCAwMS4xMjYtLjE3Mi4yODEuMjgxIDAgMDEuMjEtLjA4NnpNMS43NjMgNi42NThhLjcxNy43MTcgMCAwMS0uNTA0LS4xOTQuNjQ0LjY0NCAwIDAxLS4yMS0uNDk1di0uNDNhLjczLjczIDAgMDEuMTA1LS4zODcuNjguNjggMCAwMS4yNzMtLjI1OUM0LjMwOSAzLjQwMiA2LjU0IDIuMjc2IDguMTIxIDEuNTE1IDkuNzAyLjc1NSAxMC40OTMuMzYxIDEwLjQ5My4zMzJjLjUzMS0uMjU4Ljk3Mi0uMzY2IDEuMzIyLS4zMjMuMzUuMDQzLjczNC4xNjUgMS4xNTQuMzY2bDguMzEgNC41MThjLjE0LjA1OC4yNDUuMTQ0LjMxNS4yNTlhLjczLjczIDAgMDEuMTA1LjM4N3YuNDNjMCAuMjAxLS4wNy4zNjYtLjIxLjQ5NWEuNzE3LjcxNyAwIDAxLS41MDQuMTk0SDEuNzYzem0tLjcxNCAxMy4zNGEuNTQuNTQgMCAwMS4xNjgtLjM4Ny41MTYuNTE2IDAgMDEuMzc4LS4xNzJoMTkuNjQyYy4xNjggMCAuMzA4LjA1Ny40Mi4xNzJhLjU0MS41NDEgMCAwMS4xNjguMzg3di44MThhLjUyMi41MjIgMCAwMS0uMTY4LjQwOC42MDUuNjA1IDAgMDEtLjQyLjE1MUgxLjU5NWEuNTUxLjU1MSAwIDAxLS4zNzgtLjE1LjUyMi41MjIgMCAwMS0uMTY4LS40MXYtLjgxN3ptMjEuNDA1IDIuMDIyYy4xNCAwIC4yNjYuMDU4LjM3OC4xNzNhLjU5Mi41OTIgMCAwMS4xNjguNDN2LjgxOGEuNTQxLjU0MSAwIDAxLS4xNjguMzg3LjUxNi41MTYgMCAwMS0uMzc4LjE3MkwuNTQ2IDIzLjk1N2EuNTE2LjUxNiAwIDAxLS4zNzgtLjE3Mi41NDEuNTQxIDAgMDEtLjE2OC0uMzg3di0uODE4YS41OS41OSAwIDAxLjE2OC0uNDMuNTE2LjUxNiAwIDAxLjM3OC0uMTczbDIxLjkwOC4wNDN6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbWljJyxcbiAgcGF0aDogJ00xMiAxNWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA2YzAtMS42Ni0xLjM0LTMtMy0zUzkgNC4zNCA5IDZ2NmMwIDEuNjYgMS4zNCAzIDMgM3ptNS4zLTNjMCAzLTIuNTQgNS4xLTUuMyA1LjFTNi43IDE1IDYuNyAxMkg1YzAgMy40MSAyLjcyIDYuMjMgNiA2LjcyVjIyaDJ2LTMuMjhjMy4yOC0uNDggNi0zLjMgNi02LjcyaC0xLjd6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZGlyZWN0aW9ucycsXG4gIHBhdGg6ICdNMjMuNjQ5IDExLjE1NEwxMi44NDYuMzVhMS4xOTUgMS4xOTUgMCAwMC0xLjY5MiAwTC4zNSAxMS4xNTRhMS4xOTUgMS4xOTUgMCAwMDAgMS42OTJMMTEuMTU0IDIzLjY1YTEuMTk1IDEuMTk1IDAgMDAxLjY5MiAwTDIzLjY1IDEyLjg0NmMuNDY4LS40NTYuNDY4LTEuMjEyIDAtMS42OTJ6bS05LjI1NCAzLjg1M3YtMy4wMDFIOS41OTN2My42aC0yLjR2LTQuOGMwLS42Ni41NC0xLjIgMS4yLTEuMmg2LjAwMlY2LjYwNGw0LjIgNC4yLTQuMiA0LjIwMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjYWxlbmRhcicsXG4gIHBhdGg6ICdNMTguMTExIDEzLjJIMTJ2Nmg2LjExMXYtNnpNMTYuODkgMHYyLjRINy4xMVYwSDQuNjY3djIuNEgzLjQ0NGMtMS4zNTYgMC0yLjQzMiAxLjA4LTIuNDMyIDIuNEwxIDIxLjZDMSAyMi45MiAyLjA4OCAyNCAzLjQ0NCAyNGgxNy4xMTJDMjEuOSAyNCAyMyAyMi45MiAyMyAyMS42VjQuOGMwLTEuMzItMS4xLTIuNC0yLjQ0NC0yLjRoLTEuMjIzVjBIMTYuODl6bTMuNjY3IDIxLjZIMy40NDRWOC40aDE3LjExMnYxMy4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGxvdXQnLFxuICBwYXRoOiAnTTIxLjk5IDRjMC0xLjEtLjg5LTItMS45OS0ySDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTRsNCA0LS4wMS0xOHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdpbmZvJyxcbiAgcGF0aDogJ00xMiA4LjRBMS4yIDEuMiAwIDEwMTIgNmExLjIgMS4yIDAgMDAwIDIuNHpNMTIgMGM2LjYyNCAwIDEyIDUuMzc2IDEyIDEycy01LjM3NiAxMi0xMiAxMlMwIDE4LjYyNCAwIDEyIDUuMzc2IDAgMTIgMHptMCAxOGMuNjYgMCAxLjItLjU0IDEuMi0xLjJWMTJjMC0uNjYtLjU0LTEuMi0xLjItMS4yLS42NiAwLTEuMi41NC0xLjIgMS4ydjQuOGMwIC42Ni41NCAxLjIgMS4yIDEuMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdicmllZmNhc2UnLFxuICBwYXRoOiAnTTIwIDdoLTRWNWMwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMjBjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOWMwLTEuMTEtLjg5LTItMi0yem0tNiAwaC00VjVoNHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2thYm9iJyxcbiAgdmlld0JveDogJzAgMCAzIDExJyxcbiAgY29tcGxleENvbnRlbnRzOiBgPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiLz48Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCI1LjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjkuNVwiIHI9XCIxLjVcIi8+YFxufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGVyc29uJyxcbiAgdmlld0JveDogJzAgMCAxOCAxOCcsXG4gIHBhdGg6ICdNOSA5YzIuNDg2IDAgNC41LTIuMDE0IDQuNS00LjVTMTEuNDg2IDAgOSAwYTQuNDk5IDQuNDk5IDAgMDAtNC41IDQuNUM0LjUgNi45ODYgNi41MTQgOSA5IDl6bTAgMi4yNWMtMy4wMDQgMC05IDEuNTA4LTkgNC41djEuMTI1QzAgMTcuNDk0LjUwNiAxOCAxLjEyNSAxOGgxNS43NWMuNjE5IDAgMS4xMjUtLjUwNiAxLjEyNS0xLjEyNVYxNS43NWMwLTIuOTkyLTUuOTk2LTQuNS05LTQuNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtYWduaWZ5aW5nX2dsYXNzJyxcbiAgcGF0aDogJ00xNi4xMjQgMTMuMDUxYTUuMTU0IDUuMTU0IDAgMTEwLTEwLjMwOCA1LjE1NCA1LjE1NCAwIDAxMCAxMC4zMDhNMTYuMTE0IDBhNy44ODYgNy44ODYgMCAwMC02LjQ2IDEyLjQwN0wwIDIyLjA2IDEuOTQgMjRsOS42NTMtOS42NTNBNy44ODYgNy44ODYgMCAxMDE2LjExMyAwJ1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnb2ZmaWNlJyxcbiAgcGF0aDogJ00xMiA3VjNIMnYxOGgyMFY3SDEyek02IDE5SDR2LTJoMnYyem0wLTRINHYtMmgydjJ6bTAtNEg0VjloMnYyem0wLTRINFY1aDJ2MnptNCAxMkg4di0yaDJ2MnptMC00SDh2LTJoMnYyem0wLTRIOFY5aDJ2MnptMC00SDhWNWgydjJ6bTEwIDEyaC04di0yaDJ2LTJoLTJ2LTJoMnYtMmgtMlY5aDh2MTB6bS0yLThoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2xpbmsnLFxuICBwYXRoOiAnTTIuMjggMTJBMy43MjMgMy43MjMgMCAwMTYgOC4yOGg0LjhWNkg2Yy0zLjMxMiAwLTYgMi42ODgtNiA2czIuNjg4IDYgNiA2aDQuOHYtMi4yOEg2QTMuNzIzIDMuNzIzIDAgMDEyLjI4IDEyem00LjkyIDEuMmg5LjZ2LTIuNEg3LjJ2Mi40ek0xOCA2aC00Ljh2Mi4yOEgxOEEzLjcyMyAzLjcyMyAwIDAxMjEuNzIgMTIgMy43MjMgMy43MjMgMCAwMTE4IDE1LjcyaC00LjhWMThIMThjMy4zMTIgMCA2LTIuNjg4IDYtNnMtMi42ODgtNi02LTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnd2luZG93JyxcbiAgcGF0aDogJ00zIDEzaDhWM0gzdjEwem0wIDhoOHYtNkgzdjZ6bTEwIDBoOFYxMWgtOHYxMHptMC0xOHY2aDhWM2gtOHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwaG9uZScsXG4gIHBhdGg6ICdNNC44MjcgMTAuMzg3YTIwLjE5OCAyMC4xOTggMCAwMDguNzg2IDguNzg2bDIuOTM0LTIuOTMzYy4zNi0uMzYuODkzLS40OCAxLjM2LS4zMmExNS4yMSAxNS4yMSAwIDAwNC43Ni43NmMuNzMzIDAgMS4zMzMuNiAxLjMzMyAxLjMzM3Y0LjY1NEMyNCAyMy40IDIzLjQgMjQgMjIuNjY3IDI0IDEwLjE0NyAyNCAwIDEzLjg1MyAwIDEuMzMzIDAgLjYuNiAwIDEuMzMzIDBINmMuNzMzIDAgMS4zMzMuNiAxLjMzMyAxLjMzMyAwIDEuNjY3LjI2NyAzLjI2Ny43NiA0Ljc2LjE0Ny40NjcuMDQuOTg3LS4zMzMgMS4zNmwtMi45MzMgMi45MzR6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAndGFnJyxcbiAgdmlld0JveDogJzAgMCAxOCAxOCcsXG4gIHBhdGg6ICdNMTcuNDY5IDguNjIybC04LjEtOC4xQTEuNzg5IDEuNzg5IDAgMDA4LjEgMEgxLjhDLjgxIDAgMCAuODEgMCAxLjh2Ni4zYzAgLjQ5NS4xOTguOTQ1LjUzMSAxLjI3OGw4LjEgOC4xYy4zMjQuMzI0Ljc3NC41MjIgMS4yNjkuNTIyYTEuNzYgMS43NiAwIDAwMS4yNjktLjUzMWw2LjMtNi4zQTEuNzYgMS43NiAwIDAwMTggOS45YzAtLjQ5NS0uMjA3LS45NTQtLjUzMS0xLjI3OHpNMy4xNSA0LjVjLS43NDcgMC0xLjM1LS42MDMtMS4zNS0xLjM1IDAtLjc0Ny42MDMtMS4zNSAxLjM1LTEuMzUuNzQ3IDAgMS4zNS42MDMgMS4zNSAxLjM1IDAgLjc0Ny0uNjAzIDEuMzUtMS4zNSAxLjM1eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2RvY3VtZW50JyxcbiAgcGF0aDogJ000IDZIMnYxNGMwIDEuMS45IDIgMiAyaDE0di0ySDRWNnptMTYtNEg4Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS0xIDlIOVY5aDEwdjJ6bS00IDRIOXYtMmg2djJ6bTQtOEg5VjVoMTB2MnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjaGV2cm9uJyxcbiAgdmlld0JveDogJzAgMCA3IDknLFxuICBjb21wbGV4Q29udGVudHM6IGA8ZyBmaWxsLXJ1bGU9XCJldmVub2RkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xIC04KVwiPjxwYXRoIGQ9XCJtMi42NDE3MDA0IDgtMS4xNDE3MDA0IDEuMDU3NSAzLjcwODUwMjAyIDMuNDQyNS0zLjcwODUwMjAyIDMuNDQyNSAxLjE0MTcwMDQgMS4wNTc1IDQuODU4Mjk5Ni00LjV6XCIvPjwvZz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdzdXBwb3J0JyxcbiAgcGF0aDogJ00xMi41IDJDNy44MSAyIDQgNS44MSA0IDEwLjVjMCA0LjY5IDMuODEgOC41IDguNSA4LjVoLjV2M2M0Ljg2LTIuMzQgOC03IDgtMTEuNUMyMSA1LjgxIDE3LjE5IDIgMTIuNSAyem0xIDE0LjVoLTJ2LTJoMnYyem0wLTMuNWgtMmMwLTMuMjUgMy0zIDMtNSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJoLTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNGMwIDIuNS0zIDIuNzUtMyA1eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3lleHQnLFxuICB2aWV3Qm94OiAnMCAwIDMwIDMwJyxcbiAgcGF0aDogJ00yNS41MTcgMjguMTQydi4wOTVoLS4yMDR2LjkwNWgtLjA2NnYtLjkwNWgtLjE5N3YtLjA5NWguNDY3em0uNjY3IDBoLjA2NnYxaC0uMDY2di0uODI1bC0uMjQuNTk1aC0uMDEzbC0uMjQtLjU5NXYuODI1aC0uMDY2di0xaC4wNjZsLjI0Ny42MS4yNDYtLjYxek0xNSAyOC44YzcuNjIyIDAgMTMuOC02LjE3OCAxMy44LTEzLjggMC03LjYyMi02LjE3OC0xMy44LTEzLjgtMTMuOEM3LjM3OCAxLjIgMS4yIDcuMzc4IDEuMiAxNWMwIDcuNjIyIDYuMTc4IDEzLjggMTMuOCAxMy44ek0xNSAwYzguMjg0IDAgMTUgNi43MTYgMTUgMTUgMCA4LjI4NC02LjcxNiAxNS0xNSAxNS04LjI4NCAwLTE1LTYuNzE2LTE1LTE1QzAgNi43MTYgNi43MTYgMCAxNSAwem0uNDUgMTYuNjV2LTEuMmg2LjZ2MS4yaC0yLjd2NS40aC0xLjJ2LTUuNGgtMi43em0tMS41OTktMS4zNWwuODQ5Ljg0OS0yLjYwMSAyLjYwMSAyLjYwMSAyLjYwMS0uODQ5Ljg0OS0yLjYwMS0yLjYwMUw4LjY0OSAyMi4ybC0uODQ5LS44NDkgMi42MDEtMi42MDFMNy44IDE2LjE0OWwuODQ5LS44NDkgMi42MDEgMi42MDEgMi42MDEtMi42MDF6TTE4LjY3NSA5YTIuMTc1IDIuMTc1IDAgMDAtMS44NDcgMy4zMjNsMi45OTUtMi45OTVBMi4xNjMgMi4xNjMgMCAwMDE4LjY3NSA5em0wIDUuNTVhMy4zNzUgMy4zNzUgMCAxMTIuODMzLTUuMjA5bC0zLjc4OSAzLjc4OGEyLjE3NSAyLjE3NSAwIDAwMy4xMy0xLjk1NGgxLjIwMWEzLjM3NSAzLjM3NSAwIDAxLTMuMzc1IDMuMzc1em0tNy40MjUtMy43MzRMMTMuNzggNy44bC45Mi43NzEtMi44NSAzLjM5N3YyLjU4MmgtMS4ydi0yLjU4Mkw3LjggOC41N2wuOTItLjc3MSAyLjUzIDMuMDE2eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3BpbicsXG4gIHZpZXdCb3g6ICcwIDAgMTMgMTgnLFxuICBwYXRoOiAnbTkuMzc1IDBjLTMuNTI0NDY0MjkgMC02LjM3NSAyLjgxNy02LjM3NSA2LjMgMCA0LjcyNSA2LjM3NSAxMS43IDYuMzc1IDExLjdzNi4zNzUtNi45NzUgNi4zNzUtMTEuN2MwLTMuNDgzLTIuODUwNTM1Ny02LjMtNi4zNzUtNi4zem0uMDAwMDAwMTggOC41NTAwMDAwN2MtMS4yNTY3ODU3NiAwLTIuMjc2Nzg1NzktMS4wMDgtMi4yNzY3ODU3OS0yLjI1czEuMDIwMDAwMDMtMi4yNSAyLjI3Njc4NTc5LTIuMjVjMS4yNTY3ODU3MiAwIDIuMjc2Nzg1ODIgMS4wMDggMi4yNzY3ODU4MiAyLjI1cy0xLjAyMDAwMDEgMi4yNS0yLjI3Njc4NTgyIDIuMjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZ2VhcicsXG4gIHBhdGg6ICdNMTIgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem03LTdINWEyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJ6bS0xLjc1IDljMCAuMjMtLjAyLjQ2LS4wNS42OGwxLjQ4IDEuMTZjLjEzLjExLjE3LjMuMDguNDVsLTEuNCAyLjQyYy0uMDkuMTUtLjI3LjIxLS40My4xNWwtMS43NC0uN2MtLjM2LjI4LS43Ni41MS0xLjE4LjY5bC0uMjYgMS44NWMtLjAzLjE3LS4xOC4zLS4zNS4zaC0yLjhjLS4xNyAwLS4zMi0uMTMtLjM1LS4yOWwtLjI2LTEuODVjLS40My0uMTgtLjgyLS40MS0xLjE4LS42OWwtMS43NC43Yy0uMTYuMDYtLjM0IDAtLjQzLS4xNWwtMS40LTIuNDJhLjM1My4zNTMgMCAwMS4wOC0uNDVsMS40OC0xLjE2Yy0uMDMtLjIzLS4wNS0uNDYtLjA1LS42OSAwLS4yMy4wMi0uNDYuMDUtLjY4bC0xLjQ4LTEuMTZhLjM1My4zNTMgMCAwMS0uMDgtLjQ1bDEuNC0yLjQyYy4wOS0uMTUuMjctLjIxLjQzLS4xNWwxLjc0LjdjLjM2LS4yOC43Ni0uNTEgMS4xOC0uNjlsLjI2LTEuODVjLjAzLS4xNy4xOC0uMy4zNS0uM2gyLjhjLjE3IDAgLjMyLjEzLjM1LjI5bC4yNiAxLjg1Yy40My4xOC44Mi40MSAxLjE4LjY5bDEuNzQtLjdjLjE2LS4wNi4zNCAwIC40My4xNWwxLjQgMi40MmMuMDkuMTUuMDUuMzQtLjA4LjQ1bC0xLjQ4IDEuMTZjLjAzLjIzLjA1LjQ2LjA1LjY5eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2xpZ2h0X2J1bGInLFxuICB2aWV3Qm94OiAnMCAwIDMyIDM1JyxcbiAgcGF0aDogJ00xMS41ODUgMzEuMDU2bDguMzgtLjQ5M3YtLjk4NmwtOC4zOC40OTN6TTExLjU4NSAzMy4wMjhMMTUuNzc1IDM1bDQuMTktMS45NzJWMzEuNTVsLTguMzguNDkzdi45ODZ6bTYuOTI2LS40MDdsLTIuNzM2IDEuMjktMi4xMy0xLjAwNCA0Ljg2Ni0uMjg2ek0xNS43NzUgNy4zOTRjLTQuNjMgMC04LjM4IDMuMjA1LTguMzggOC4zOCAwIDUuMTc3IDQuMTkgNi45MDIgNC4xOSAxMi44MTh2LjQ5M2w4LjM4LS40OTNjMC01LjkxNiA0LjE5LTguMTg4IDQuMTktMTIuODE3YTguMzggOC4zOCAwIDAwLTguMzgtOC4zOHptNS42MTcgMTMuNDhjLTEuMDI1IDEuODM3LTIuMTc0IDMuODkyLTIuMzgxIDYuNzg2bC02LjQ0LjM4Yy0uMTI5LTMuMDEtMS4yOS01LjAyMS0yLjMyLTYuODA4LS40OTMtLjgtLjkyOC0xLjYzNi0xLjI5OS0yLjVoMTMuNTU2Yy0uMzI1LjcwOC0uNzA0IDEuNDAzLTEuMTE2IDIuMTQyem0xLjQ3OS0zLjEyOEg4LjYyN2E3Ljc5MyA3Ljc5MyAwIDAxLS4yNDctMS45NzFjMC00LjM1MyAzLjA0Mi03LjM5NSA3LjM5NS03LjM5NWE3LjM5NCA3LjM5NCAwIDAxNy4zOTQgNy4zOTUgNi43MzkgNi43MzkgMCAwMS0uMyAxLjk3MWguMDAyek0yNi42MiAxNS4yODJoNC45M3YxaC00Ljkzek0yMy4wOTQgNy43NTZsMi4wOTEtMi4wOTEuNjk4LjY5Ny0yLjA5MiAyLjA5MnpNMTUuMjgyIDBoMXY0LjkzaC0xek01LjY2NiA2LjM2MmwuNjk3LS42OTcgMi4wOTEgMi4wOTEtLjY5Ny42OTd6TTAgMTUuMjgyaDQuOTN2MUgweidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3JlY2VpcHQnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ004Ljk5MSAwQzQuMDIzIDAgMCA0LjAzMiAwIDlzNC4wMjMgOSA4Ljk5MSA5QzEzLjk2OCAxOCAxOCAxMy45NjggMTggOXMtNC4wMzItOS05LjAwOS05em0zLjgxNiAxNC40TDkgMTIuMTA1IDUuMTkzIDE0LjRsMS4wMDgtNC4zMjktMy4zNTctMi45MDcgNC40MjgtLjM3OEw5IDIuN2wxLjcyOCA0LjA3NyA0LjQyOC4zNzgtMy4zNTcgMi45MDd6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2xvc2UnLFxuICBjb21wbGV4Q29udGVudHM6IGBcbiAgICA8cGF0aCBkPVwiTTcgOGw5LjcxNiA5LjcxNm0wLTkuNzE2TDcgMTcuNzE2XCIgXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbiAgYFxufSk7XG4iLCJpbXBvcnQgdGh1bWJJY29uIGZyb20gJy4vdGh1bWIuanMnO1xuaW1wb3J0IHJlY2VpcHRJY29uIGZyb20gJy4vcmVjZWlwdC5qcyc7XG5pbXBvcnQgcGFudGhlb25JY29uIGZyb20gJy4vcGFudGhlb24uanMnO1xuaW1wb3J0IG1pY0ljb24gZnJvbSAnLi9taWMuanMnO1xuaW1wb3J0IGRpcmVjdGlvbnNJY29uIGZyb20gJy4vZGlyZWN0aW9ucy5qcyc7XG5pbXBvcnQgY2FsZW5kYXJJY29uIGZyb20gJy4vY2FsZW5kYXIuanMnO1xuaW1wb3J0IGNhbGxvdXRJY29uIGZyb20gJy4vY2FsbG91dC5qcyc7XG5pbXBvcnQgaW5mb0ljb24gZnJvbSAnLi9pbmZvLmpzJztcbmltcG9ydCBicmllZmNhc2VJY29uIGZyb20gJy4vYnJpZWZjYXNlLmpzJztcbmltcG9ydCBrYWJvYkljb24gZnJvbSAnLi9rYWJvYi5qcyc7XG5pbXBvcnQgcGVyc29uSWNvbiBmcm9tICcuL3BlcnNvbi5qcyc7XG5pbXBvcnQgbWFnbmlmeWluZ0dsYXNzSWNvbiBmcm9tICcuL21hZ25pZnlpbmdfZ2xhc3MuanMnO1xuaW1wb3J0IG9mZmljZUljb24gZnJvbSAnLi9vZmZpY2UuanMnO1xuaW1wb3J0IGxpbmtJY29uIGZyb20gJy4vbGluay5qcyc7XG5pbXBvcnQgd2luZG93SWNvbiBmcm9tICcuL3dpbmRvdy5qcyc7XG5pbXBvcnQgcGhvbmVJY29uIGZyb20gJy4vcGhvbmUuanMnO1xuaW1wb3J0IHRhZ0ljb24gZnJvbSAnLi90YWcuanMnO1xuaW1wb3J0IGRvY3VtZW50SWNvbiBmcm9tICcuL2RvY3VtZW50LmpzJztcbmltcG9ydCBjaGV2cm9uSWNvbiBmcm9tICcuL2NoZXZyb24uanMnO1xuaW1wb3J0IHN1cHBvcnRJY29uIGZyb20gJy4vc3VwcG9ydC5qcyc7XG5pbXBvcnQgeWV4dEljb24gZnJvbSAnLi95ZXh0LmpzJztcbmltcG9ydCBwaW5JY29uIGZyb20gJy4vcGluLmpzJztcbmltcG9ydCBnZWFySWNvbiBmcm9tICcuL2dlYXIuanMnO1xuaW1wb3J0IGxpZ2h0QnVsYkljb24gZnJvbSAnLi9saWdodF9idWxiLmpzJztcbmltcG9ydCBzdGFySWNvbiBmcm9tICcuL3N0YXIuanMnO1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vY2xvc2UuanMnO1xuXG5jb25zdCBpY29uc0FycmF5ID0gW1xuICB0aHVtYkljb24sXG4gIHJlY2VpcHRJY29uLFxuICBwYW50aGVvbkljb24sXG4gIG1pY0ljb24sXG4gIGRpcmVjdGlvbnNJY29uLFxuICBjYWxlbmRhckljb24sXG4gIGNhbGxvdXRJY29uLFxuICBpbmZvSWNvbixcbiAgYnJpZWZjYXNlSWNvbixcbiAga2Fib2JJY29uLFxuICBwZXJzb25JY29uLFxuICBtYWduaWZ5aW5nR2xhc3NJY29uLFxuICBvZmZpY2VJY29uLFxuICBsaW5rSWNvbixcbiAgd2luZG93SWNvbixcbiAgcGhvbmVJY29uLFxuICB0YWdJY29uLFxuICBkb2N1bWVudEljb24sXG4gIGNoZXZyb25JY29uLFxuICBzdXBwb3J0SWNvbixcbiAgeWV4dEljb24sXG4gIHBpbkljb24sXG4gIGdlYXJJY29uLFxuICBsaWdodEJ1bGJJY29uLFxuICBjbG9zZVxuXTtcblxuY29uc3QgSWNvbnMgPSB7fTtcblxuaWNvbnNBcnJheS5mb3JFYWNoKGljb24gPT4ge1xuICBJY29uc1tpY29uLm5hbWVdID0gaWNvbi5tYXJrdXAoKTtcbn0pO1xuXG5JY29ucy5kZWZhdWx0ID0gc3Rhckljb24ubWFya3VwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwiLyoqIEBtb2R1bGUgSWNvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbnMgZnJvbSAnLi4vLi4vaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEljb25Db21wb25lbnRcbiAgICogQHBhcmFtIG9wdHNcbiAgICogQHBhcmFtIG9wdHMuaWNvbk5hbWUge3N0cmluZ31cbiAgICogQHBhcmFtIG9wdHMuY3VzdG9tSWNvbiB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5pY29uVXJsIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIC8qKlxuICAgICAqIG5hbWUgb2YgYW4gaWNvbiBmcm9tIHRoZSBkZWZhdWx0IGljb24gc2V0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmljb25OYW1lID0gb3B0cy5pY29uTmFtZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAvKipcbiAgICAgKiB0aGUgbWFya3VwIGZvciBhIGZ1bGx5IGN1c3RvbSBpY29uXG4gICAgICogQHR5cGUgeyp8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmN1c3RvbUljb24gPSBvcHRzLmN1c3RvbUljb24gfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiB0aGUgdXJsIHRvIGEgY3VzdG9tIGltYWdlIGljb25cbiAgICAgKiBAdHlwZSB7bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmljb25VcmwgPSBvcHRzLmljb25VcmwgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXR0ZXIgZm9yIHRoZSBpbWFnZSBwYXN0ZWQgdG8gaGFuZGxlYmFyc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGltYWdlICgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21JY29uKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21JY29uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmljb25VcmwpIHtcbiAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke3RoaXMuaWNvblVybH1cIiBhbHQ9XCJcIiBjbGFzcz1cIkljb24taW1hZ2VcIj5gO1xuICAgIH1cblxuICAgIGlmIChJY29uc1t0aGlzLmljb25OYW1lXSkge1xuICAgICAgcmV0dXJuIEljb25zW3RoaXMuaWNvbk5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBJY29ucy5kZWZhdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ljb25Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdpY29ucy9pY29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBhbGxvd2luZyBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIG92ZXJyaWRlcyBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkgdG8gcHJvdmlkZSBuYW1lIGFuZCBtYXJrdXBcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge0ljb25Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgbmFtZTogdGhpcy5pY29uTmFtZSA/IHRoaXMuaWNvbk5hbWUgOiAnY3VzdG9tJ1xuICAgIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuaW1wb3J0IFNwZWxsQ2hlY2tDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvc3BlbGxjaGVja2NvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25CaWFzQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2xvY2F0aW9uYmlhc2NvbXBvbmVudCc7XG5cbmltcG9ydCBGaWx0ZXJCb3hDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50JztcbmltcG9ydCBHZW9Mb2NhdGlvbkNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZ2VvbG9jYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IFBhZ2luYXRpb25Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3BhZ2luYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnLi9pY29ucy9pY29uY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoU3BlbGxDaGVja0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKExvY2F0aW9uQmlhc0NvbXBvbmVudClcblxuLy8gRmlsdGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEZpbHRlckJveENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlck9wdGlvbnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKERhdGVSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoR2VvTG9jYXRpb25Db21wb25lbnQpXG5cbi8vIFJlc3VsdHMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRGlyZWN0QW5zd2VyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihQYWdpbmF0aW9uQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudClcblxuICAucmVnaXN0ZXIoTWFwQ29tcG9uZW50KVxuXG4vLyBRdWVzdGlvbnMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50KVxuXG4vLyBIZWxwZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoSWNvbkNvbXBvbmVudCk7XG4iLCIvKiogQG1vZHVsZSBUZW1wbGF0ZUxvYWRlciAqL1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IHsgQ09NUElMRURfVEVNUExBVEVTX1VSTCB9IGZyb20gJy4uLy4uL2NvcmUvY29uc3RhbnRzJztcblxuLyoqXG4gKiBUZW1wbGF0ZUxvYWRlciBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgbG9hZGluZyB0ZW1wbGF0ZXMgYXN5bmNocm9ub3VzbHlcbiAqIGZyb20gdGhlIHNlcnZlciBhbmQgcmVnaXN0ZXJzIHRoZW0gd2l0aCB0aGUgcHJvcGVyIHJlbmRlcmVyLlxuICogSXQgYWxzbyBhbGxvd3MgeW91IHRvIGFzc2lnbiB0aGVtIHN5bmNocm9ub3VzbHkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIGlmICghVGVtcGxhdGVMb2FkZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBUZW1wbGF0ZUxvYWRlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB1cmwgdG8gZmV0Y2ggY29tcGlsZWQgdGVtcGxhdGVzIGZyb21cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVVcmwgPSBjb25maWcudGVtcGxhdGVVcmwgfHwgQ09NUElMRURfVEVNUExBVEVTX1VSTDtcblxuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHt9O1xuICAgIHRoaXMuX29uTG9hZGVkID0gZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBfaW5pdCAoKSB7XG4gICAgdGhpcy5mZXRjaFRlbXBsYXRlcygpO1xuICB9XG5cbiAgZmV0Y2hUZW1wbGF0ZXMgKCkge1xuICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0ZW1wbGF0ZXMgbG9hZGVkLCBkbyBub3RoaW5nXG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoJyN5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbmplY3QgYSBzY3JpcHQgdG8gZmV0Y2ggdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyxcbiAgICAvLyB3cmFwcGluZyBpdCBhIFByb21pc2UgZm9yIGNsZWFubGluZXNzXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgICBpZDogJ3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnLFxuICAgICAgICBvbmxvYWQ6IHJlc29sdmUsXG4gICAgICAgIG9uZXJyb3I6IHJlamVjdCxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIHNyYzogdGhpcy5fdGVtcGxhdGVVcmxcbiAgICAgIH0pO1xuXG4gICAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBJbXBsbWVuZXQgZXJyb3IgaGFuZGxpbmcgaGVyZSAoZS5nLiByZXF1ZXN0IGNvdWxkIGZhaWwpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUZW1wbGF0ZXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVyIHRoZSB0ZW1wbGF0ZXMgaW50ZXJuYWxseSBzbyB0aGF0IHRoZXkgY2FuIGJlIGxhdGVyIGNvbnN1bWVkXG4gICAqIChlLmcuIGJ5IGNvbXBvbmVudHMgYW5kIHJlbmRlcmVycykgd2l0aCBjb252aWVuaWVuY2UuXG4gICAqXG4gICAqIGBmZXRjaFRlbXBsYXRlc2Agd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGwgdGhpcywgcHJvdmlkaW5nIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVnaXN0ZXIgKHRlbXBsYXRlcykge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIE5vdGlmeSBvdXIgY29uc3VtZXJzIHRoYXQgdGhlIHRlbXBsYXRlcyBhcmUgaGVyZSA6KVxuICAgIHRoaXMuX29uTG9hZGVkKHRoaXMuX3RlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0ICh0ZW1wbGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW3RlbXBsYXRlTmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBUaGUgaW50ZXJuYWwgdGVtcGxhdGUgY29sbGVjdGlvblxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5leHBvcnQgeyBDT01QT05FTlRfTUFOQUdFUiB9IGZyb20gJy4vY29tcG9uZW50cy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERPTSB9IGZyb20gJy4vZG9tL2RvbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbmV4cG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4vcmVuZGVyaW5nL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVtcGxhdGVMb2FkZXIgfSBmcm9tICcuL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlcic7XG4iLCIvKiogQG1vZHVsZSBFcnJvclJlcG9ydGVyICovXG5cbmltcG9ydCB7IEFuc3dlcnNCYXNlRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBMSUJfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zZXJ2aWNlcy9lcnJvcnJlcG9ydGVyc2VydmljZScpLmRlZmF1bHR9IEVycm9yUmVwb3J0ZXJTZXJ2aWNlICovXG5cbi8qKlxuICogRXJyb3JSZXBvcnRlciBpcyB1c2VkIGZvciByZXBvcnRpbmcgZXJyb3JzIHRvIHRoZSBjb25zb2xlIGFuZCBBUElcbiAqXG4gKiBAaW1wbGVtZW50cyB7RXJyb3JSZXBvcnRlclNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGV4cGVyaWVuY2VLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmV4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbnN3ZXJzIGNvbmZpZyB2ZXJzaW9uIHVzZWQgZm9yIGFwaSByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24gfHwgJ2NvbmZpZzEuMCc7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBwcmludCBlbnRpcmUgZXJyb3Igb2JqZWN0cyB0byB0aGUgY29uc29sZSBmb3IgaW5zcGVjdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucHJpbnRWZXJib3NlID0gY29uZmlnLnByaW50VmVyYm9zZTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlcG9ydCB0aGUgZXJyb3IgdGhlIHNlcnZlciBmb3IgbG9nZ2luZyBhbmQgbW9uaXRvcmluZ1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc2VuZFRvU2VydmVyID0gY29uZmlnLnNlbmRUb1NlcnZlcjtcblxuICAgIC8vIEF0dGFjaCByZXBvcnRpbmcgbGlzdGVuZXJzIHRvIHdpbmRvd1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4gdGhpcy5yZXBvcnQoZS5lcnJvcikpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMucmVwb3J0KGUuZXJyb3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBvcnQgcHJldHR5IHByaW50cyB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUsIG9wdGlvbmFsbHlcbiAgICogcHJpbnRzIHRoZSBlbnRpcmUgZXJyb3IgaWYgYHByaW50VmVyYm9zZWAgaXMgdHJ1ZSwgYW5kIHNlbmRzIHRoZVxuICAgKiBlcnJvciB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZCBpZiBgc2VuZFRvU2VydmVyYCBpcyB0cnVlXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gZXJyIFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKiBAcmV0dXJucyB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIHJlcG9ydGVkIGVycm9yXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLnByaW50RXJyb3IoZXJyKTtcblxuICAgIGlmICh0aGlzLnNlbmRUb1NlcnZlcikge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgJ2Vycm9yJzogZXJyLnRvSnNvbigpLFxuICAgICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICAgJ2V4cGVyaWVuY2VWZXJzaW9uJzogdGhpcy5leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuZXhwZXJpZW5jZUtleVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxdWVzdC5nZXQoKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnI7XG4gIH1cblxuICAvKipcbiAgICogcHJpbnRzIHRoZSBnaXZlbiBlcnJvciB0byB0aGUgYnJvd3NlciBjb25zb2xlXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gZXJyIFRoZSBlcnJvciB0byBiZSBwcmludGVkXG4gICAqL1xuICBwcmludEVycm9yIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcbiAgICBpZiAodGhpcy5wcmludFZlcmJvc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgLi4uZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NlcnZpY2VzL2Vycm9ycmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gRXJyb3JSZXBvcnRlclNlcnZpY2UgKi9cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7RXJyb3JSZXBvcnRlclNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVFcnJvclJlcG9ydGVyIHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHJlcG9ydCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIudG9TdHJpbmcoKSk7XG4gIH1cbn1cbiIsImltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuLyoqIEBtb2R1bGUgUGVyc2lzdGVudFN0b3JhZ2UgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc2lzdGVudFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwYXJhbXMgbW9kZWxcbiAgICAgKiBAdHlwZSB7U2VhcmNoUGFyYW1zfVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgaGlzdG9yeSBlZGl0IHRpbWVyLCBpZiBhbnlcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gZXZlcnkgc3RvcmFnZSB1cGRhdGVcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb25bXX1cbiAgICAgKi9cbiAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IGNvbmZpZy51cGRhdGVMaXN0ZW5lciB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBzdG9yYWdlIHJlc2V0c1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc2V0TGlzdGVuZXIgPSBjb25maWcucmVzZXRMaXN0ZW5lciB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3Jlc2V0TGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IHRoZSBnaXZlbiBrZXkvdmFsdWUgcGFpciBpbnRvIHN0b3JhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHRvIGluc2VydCB0aGUgZGF0YSBpblxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIGRhdGEgdG8gaW5zZXJ0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ1N0b3JhZ2UgZGF0YSBrZXkgbXVzdCBiZSBhIHN0cmluZycsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgbGV0IG5ld0RhdGEgPSBkYXRhO1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5ld0RhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdGhpcy5fcGFyYW1zLnNldChrZXksIG5ld0RhdGEpO1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGdpdmVuIGtleSBmcm9tIHN0b3JhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHRvIGRlbGV0ZVxuICAgKi9cbiAgZGVsZXRlIChrZXkpIHtcbiAgICB0aGlzLl9wYXJhbXMuZGVsZXRlKGtleSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgX3VwZGF0ZUhpc3RvcnkgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaXN0b3J5VGltZXIpO1xuICAgIH1cblxuICAgIC8vIGJhdGNoIHVwZGF0ZSBjYWxscyBhY3Jvc3MgY29tcG9uZW50cyB0byBhdm9pZCB1cGRhdGluZyB0aGUgdXJsIHRvbyBtdWNoXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gc2V0VGltZW91dChcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGA/JHt0aGlzLl9wYXJhbXMudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKTtcbiAgICAgIH0sXG4gICAgICAxMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSB0aGUgZ2l2ZW4gbGlzdCBvZiBjYWxsYmFja3Mgd2l0aCB0aGUgY3VycmVudCBzdG9yYWdlIGRhdGFcbiAgICogQHBhcmFtIHtmdW5jdGlvbltdfSBsaXN0ZW5lcnMgVGhlIGNhbGxiYWNrcyB0byBpbnZva2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jYWxsTGlzdGVuZXIgKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIodGhpcy5nZXRBbGwoKSwgdGhpcy5fcGFyYW1zLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIGtleS92YWx1ZSBwYWlycyBpbiBzdG9yYWdlXG4gICAqL1xuICBnZXRBbGwgKCkge1xuICAgIGNvbnN0IGFsbFBhcmFtcyA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzLl9wYXJhbXMuZW50cmllcygpKSB7XG4gICAgICBhbGxQYXJhbXNba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIGFsbFBhcmFtcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5zd2Vyc0NvbmZpZ0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKiBAbW9kdWxlIFNlYXJjaENvbmZpZyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb25maWcge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IHJlc3VsdHMgcGVyIHNlYXJjaC5cbiAgICAgKiBBbHNvIGRlZmluZXMgdGhlIG51bWJlciBvZiByZXN1bHRzIHBlciBwYWdlLCBpZiBwYWdpbmF0aW9uIGlzIGVuYWJsZWRcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubGltaXQgPSBjb25maWcubGltaXQgfHwgMjA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IHRvIHVzZSBmb3IgYWxsIHNlYXJjaGVzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZGVmYXVsdEluaXRpYWxTZWFyY2ggPSBjb25maWcuZGVmYXVsdEluaXRpYWxTZWFyY2g7XG5cbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHZhbGlkYXRlICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubGltaXQgIT09ICdudW1iZXInIHx8IHRoaXMubGltaXQgPCAxIHx8IHRoaXMubGltaXQgPiA1MCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb25maWdFcnJvcignU2VhcmNoIExpbWl0IG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1MCcsICdTZWFyY2hDb25maWcnKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGEgKi9cblxuaW1wb3J0IEhpZ2hsaWdodGVkVmFsdWUgZnJvbSAnLi9oaWdobGlnaHRlZHZhbHVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgJyc7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGxldCBzZWN0aW9ucztcbiAgICBpZiAocmVzcG9uc2Uuc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zID0gcmVzcG9uc2Uuc2VjdGlvbnMubWFwKHMgPT4gKHtcbiAgICAgICAgbGFiZWw6IHMubGFiZWwsXG4gICAgICAgIHJlc3VsdHM6IHMucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9ucyA9IFt7IHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSkgfV07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXV0b0NvbXBsZXRlRGF0YSh7IHNlY3Rpb25zLCBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5maWx0ZXIgPSBkYXRhLmZpbHRlciB8fCB7fTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkVmFsdWUgPSBuZXcgSGlnaGxpZ2h0ZWRWYWx1ZShkYXRhKS5nZXRJbnZlcnRlZCgpO1xuICAgIHRoaXMua2V5ID0gZGF0YS5rZXkgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgJyc7XG4gICAgdGhpcy5zaG9ydFZhbHVlID0gZGF0YS5zaG9ydFZhbHVlIHx8IHRoaXMudmFsdWU7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhIGZyb20gJy4uL21vZGVscy9hdXRvY29tcGxldGVkYXRhJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBBdXRvQ29tcGxldGUgcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqXG4gKiBUT0RPKGJpbGx5KSBDcmVhdGUgb3VyIG93biBmcm9udC1lbmQgZGF0YSBtb2RlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIGNsZWFuIChtb2R1bGVJZCwgZGF0YSkge1xuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMSAmJiBkYXRhLnNlY3Rpb25zWzBdLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgW21vZHVsZUlkXTogZGF0YVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdW5pdmVyc2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlciAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyB2ZXJ0aWNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9hdXRvY29tcGxldGVzZXJ2aWNlJykuZGVmYXVsdH0gQXV0b0NvbXBsZXRlU2VydmljZSAqL1xuXG4vKipcbiAqIEF1dG9Db21wbGV0ZUFwaSBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgbmV0d29yayByZWxhdGVkIG1hdHRlcnNcbiAqIGZvciBhbGwgdGhlIGF1dG9jb21wbGV0ZSBlbmRwb2ludHMuXG4gKlxuICogQGltcGxlbWVudHMge0F1dG9Db21wbGV0ZVNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5leHBlcmllbmNlS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9leHBlcmllbmNlS2V5ID0gY29uZmlnLmV4cGVyaWVuY2VLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbnN3ZXJzIGNvbmZpZyB2ZXJzaW9uIHRvIHVzZSBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uID0gY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGU7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlGaWx0ZXIgKGlucHV0LCBjb25maWcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZmlsdGVyc2VhcmNoJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAndmVydGljYWxLZXknOiBjb25maWcudmVydGljYWxLZXksXG4gICAgICAgICdpbnB1dEtleSc6IGNvbmZpZy5iYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgICdzZWFyY2hfcGFyYW1ldGVycyc6IEpTT04uc3RyaW5naWZ5KGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci5maWx0ZXIocmVzcG9uc2UucmVzcG9uc2UsIGNvbmZpZy5iYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdGaWx0ZXIgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHF1ZXJ5VmVydGljYWwgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdiYXJLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudmVydGljYWwocmVzcG9uc2UucmVzcG9uc2UsIHJlcXVlc3QuX3BhcmFtcy5iYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdWZXJ0aWNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlVbml2ZXJzYWwgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1VuaXZlcnNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBBdXRvQ29tcGxldGVEYXRhLCB7IEF1dG9Db21wbGV0ZVJlc3VsdCB9IGZyb20gJy4uL21vZGVscy9hdXRvY29tcGxldGVkYXRhJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NlcnZpY2VzL2F1dG9jb21wbGV0ZXNlcnZpY2UnKS5kZWZhdWx0fSBBdXRvQ29tcGxldGVTZXJ2aWNlICovXG5cbmNvbnN0IHVuaXZlcnNhbE9wdGlvbnMgPSBbXG4gICd3aGF0IGlzIHlleHQnLFxuICAnd2hvIGlzIHRoZSBjZW8gb2YgeWV4dCdcbl07XG5cbmNvbnN0IHZlcnRpY2FsT3B0aW9ucyA9IFtcbiAgJ25lYXIgbWUnLFxuICAnaW4gbmV3IHlvcmsnLFxuICAnYXZhaWxhYmxlIG5vdydcbl07XG5cbi8qKlxuICogTW9ja0F1dG9Db21wbGV0ZVNlcnZpY2Ugc2VydmVzIGF1dG9jb21wbGV0ZSBxdWVyaWVzIHdpdGggbW9jayBkYXRhXG4gKlxuICogQGltcGxlbWVudHMge0F1dG9Db21wbGV0ZVNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vY2tBdXRvQ29tcGxldGVTZXJ2aWNlIHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHF1ZXJ5RmlsdGVyIChpbnB1dCwgY29uZmlnKSB7XG4gICAgLy8gVE9ETyhhbXVsbGluZ3MpOiBTaW11bGF0ZSBmaWx0ZXIgc2VhcmNoLCB3aXRoIHNlY3Rpb25zXG4gICAgcmV0dXJuIGVtcHR5UmVzdWx0cygpO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHF1ZXJ5VmVydGljYWwgKGlucHV0LCB2ZXJ0aWNhbEtleSkge1xuICAgIHJldHVybiBmaWx0ZXJPcHRpb25zKGlucHV0LCB2ZXJ0aWNhbE9wdGlvbnNcbiAgICAgIC5tYXAob3B0ID0+IGAke3ZlcnRpY2FsS2V5fSAke29wdH1gKVxuICAgICAgLmNvbmNhdCh1bml2ZXJzYWxPcHRpb25zKVxuICAgICk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlVbml2ZXJzYWwgKGlucHV0KSB7XG4gICAgcmV0dXJuIGZpbHRlck9wdGlvbnMoaW5wdXQsIHVuaXZlcnNhbE9wdGlvbnMpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFF1ZXJ5IHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXX0gb3B0aW9ucyBIYXJkY29kZWQgYXV0b2NvbXBsZXRlIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtQcm9taXNlPEF1dG9Db21wbGV0ZURhdGE+fVxuICovXG5mdW5jdGlvbiBmaWx0ZXJPcHRpb25zIChpbnB1dCwgb3B0aW9ucykge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGVtcHR5UmVzdWx0cygpO1xuICB9XG5cbiAgY29uc3QgbG93ZXJjYXNlID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgcmVzdWx0cyA9IG9wdGlvbnNcbiAgICAuZmlsdGVyKG9wdCA9PiBvcHQuaW5jbHVkZXMobG93ZXJjYXNlKSlcbiAgICAubWFwKG9wdCA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHtcbiAgICAgIHZhbHVlOiBvcHQsXG4gICAgICBtYXRjaGVkU3Vic3RyaW5nczogW3tcbiAgICAgICAgb2Zmc2V0OiBvcHQuaW5kZXhPZihsb3dlcmNhc2UpLFxuICAgICAgICBsZW5ndGg6IGxvd2VyY2FzZS5sZW5ndGhcbiAgICAgIH1dXG4gICAgfSkpO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBBdXRvQ29tcGxldGVEYXRhKHtcbiAgICBzZWN0aW9uczogW3sgcmVzdWx0cyB9XSxcbiAgICBxdWVyeUlkOiByYW5kb21TdHJpbmcoKVxuICB9KSk7XG59XG5cbi8qKlxuICogQHJldHVybnMge1Byb21pc2U8QXV0b0NvbXBsZXRlRGF0YT59XG4gKi9cbmZ1bmN0aW9uIGVtcHR5UmVzdWx0cyAoKSB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEF1dG9Db21wbGV0ZURhdGEoe1xuICAgIHNlY3Rpb25zOiBbe31dLFxuICAgIHF1ZXJ5SWQ6IHJhbmRvbVN0cmluZygpXG4gIH0pKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByYW5kb21TdHJpbmcgKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25BbnN3ZXJBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vcXVlc3Rpb25hbnN3ZXJzZXJ2aWNlJykuZGVmYXVsdH0gUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlICovXG5cbi8qKlxuICogUXVlc3Rpb25BbnN3ZXJBcGkgc3VibWl0cyBxdWVzdGlvbnMgdmlhIHRoZSBRJkEgUkVTVCBBUElcbiAqXG4gKiBAaW1wbGVtZW50cyB7UXVlc3Rpb25BbnN3ZXJTZXJ2aWNlfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkFuc3dlckFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnUXVlc3Rpb25BbnN3ZXJBcGknKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGJhc2VVcmw6IEFQSV9CQVNFX1VSTCxcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL3F1ZXN0aW9ucycsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZW50aXR5SWQnOiBxdWVzdGlvbi5lbnRpdHlJZCxcbiAgICAgICAgJ3NpdGUnOiBxdWVzdGlvbi5zaXRlLFxuICAgICAgICAnbmFtZSc6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IHF1ZXN0aW9uLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogcXVlc3Rpb24ucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogcXVlc3Rpb24ucXVlc3Rpb25MYW5ndWFnZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucG9zdCh7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKFxuICAgICAgICAgICdRdWVzdGlvbiBzdWJtaXQgZmFpbGVkJyxcbiAgICAgICAgICAnUXVlc3Rpb25BbnN3ZXJBcGknLFxuICAgICAgICAgIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNb2NrUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlICovXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zZXJ2aWNlcy9xdWVzdGlvbmFuc3dlcnNlcnZpY2UnKS5kZWZhdWx0fSBRdWVzdGlvbkFuc3dlclNlcnZpY2UgKi9cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7UXVlc3Rpb25BbnN3ZXJTZXJ2aWNlfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2NrUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlIHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIC8vIFRPRE8oYW11bGxpbmdzKTogTWFrZSBhY3R1YWwgcmVzcG9uc2Ugb2JqZWN0IG9uY2Ugd2UncmUgdXNpbmcgaXQgZm9yXG4gICAgLy8gc29tZXRoaW5nXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vbW9kZWxzL3NlY3Rpb24nKS5kZWZhdWx0fSBTZWN0aW9uICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvc2VhcmNoc2VydmljZScpLmRlZmF1bHR9IFNlYXJjaFNlcnZpY2UgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZXN1bHREYXRhXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YVxuICogQHByb3BlcnR5IHtzdHJpbmcgfSBodG1sVGl0bGVcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBSZXN1bHRzTW9kaWZpZXJcbiAqIEBwYXJhbSB7UmVzdWx0RGF0YVtdfSByZXN1bHRzXG4gKiBAcmV0dXJucyB7UmVzdWx0RGF0YVtdfVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1vY2tEYXRhQ29uc3VtZXJcbiAqIEBwYXJhbSB7U2VjdGlvbltdfSBzZWN0aW9uc1xuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xuXG5jb25zdCBBUkJJVFJBUllfQlVTSU5FU1NfSUQgPSA5MTk4NzE7XG5cbi8qKlxuICogQGltcGxlbWVudHMge1NlYXJjaFNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vY2tTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQcm9taXNlPHN0cmluZz59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nZXRNb2NrRGF0YUpzb24gPSBmZXRjaCgnaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvdGVzdGRhdGEvc2VhcmNoL21vY2tkYXRhX3YxLmpzb24nKVxuICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLnRleHQoKSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHsgaW5wdXQsIGZpbHRlciwgZmFjZXRGaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGlkLCBnZW9sb2NhdGlvbiwgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsIHNraXBTcGVsbENoZWNrLCBxdWVyeVRyaWdnZXIgfSkge1xuICAgIHJldHVybiB0aGlzLnVzZU1vY2tEYXRhKHNlY3Rpb25zID0+IHtcbiAgICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGRlbGF5ZWRSZXNwb25zZShjb25zdHJ1Y3RWZXJ0aWNhbFJlc3BvbnNlKHtcbiAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgICBhcHBsaWVkUXVlcnlGaWx0ZXJzOiBbXVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVpdGhlciBmaW5kIGEgc2VjdGlvbiB3aXRoIG1hdGNoaW5nIElELCBvciBwaWNrIG9uZSBhdCByYW5kb21cbiAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvbnMuZmluZChcbiAgICAgICAgdmVydGljYWxNb2R1bGUgPT4gdmVydGljYWxLZXkgPT09IHZlcnRpY2FsTW9kdWxlWyd2ZXJ0aWNhbENvbmZpZ0lkJ11cbiAgICAgICk7XG4gICAgICBpZiAoc2VjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHNlY3Rpb24gPSBzZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzZWN0aW9ucy5sZW5ndGgpXTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZ5UmVzdWx0cyhzZWN0aW9uLCBnZXRSZXN1bHRzRmlsdGVyZXIoaW5wdXQpKTtcbiAgICAgIGlmIChvZmZzZXQgIT0gbnVsbCAmJiBsaW1pdCAhPSBudWxsKSB7XG4gICAgICAgIG1vZGlmeVJlc3VsdHMoc2VjdGlvbiwgZnVuY3Rpb24gbGltaXQgKHJlc3VsdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0cy5zbGljZShvZmZzZXQsIG9mZnNldCArIGxpbWl0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3AgPSBjb25zdHJ1Y3RWZXJ0aWNhbFJlc3BvbnNlKHNlY3Rpb24pO1xuICAgICAgcmV0dXJuIGRlbGF5ZWRSZXNwb25zZShyZXNwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB1bml2ZXJzYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy51c2VNb2NrRGF0YShzZWN0aW9ucyA9PiB7XG4gICAgICBpZiAocXVlcnlTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBkZWxheWVkUmVzcG9uc2UoY29uc3RydWN0VW5pdmVyc2FsUmVzcG9uc2UoW10pKTtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgbW9kaWZ5UmVzdWx0cyhzZWN0aW9uLCBnZXRSZXN1bHRzRmlsdGVyZXIocXVlcnlTdHJpbmcpKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWN0aW9ucyA9IHNlY3Rpb25zLmZpbHRlcihzZWN0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb24ucmVzdWx0cy5sZW5ndGggPiAwO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3AgPSBjb25zdHJ1Y3RVbml2ZXJzYWxSZXNwb25zZShzZWN0aW9ucyk7XG4gICAgICByZXR1cm4gZGVsYXllZFJlc3BvbnNlKHJlc3ApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TW9ja0RhdGFDb25zdW1lcn0gY29uc3VtZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVzZU1vY2tEYXRhIChjb25zdW1lcikge1xuICAgIHJldHVybiB0aGlzLl9nZXRNb2NrRGF0YUpzb24udGhlbihKU09OLnBhcnNlKS50aGVuKGNvbnN1bWVyKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVN0cmluZ1xuICogQHJldHVybiB7UmVzdWx0c01vZGlmaWVyfVxuICovXG5mdW5jdGlvbiBnZXRSZXN1bHRzRmlsdGVyZXIgKHF1ZXJ5U3RyaW5nKSB7XG4gIHJldHVybiByZXN1bHRzID0+IHJlc3VsdHMuZmlsdGVyKHJlc3VsdCA9PiB7XG4gICAgaWYgKHJlc3VsdC5odG1sVGl0bGUgJiYgcmVzdWx0Lmh0bWxUaXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5U3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcHJvcCBpbiByZXN1bHQuZGF0YSkge1xuICAgICAgY29uc3QgdmFsID0gcmVzdWx0LmRhdGFbcHJvcF07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmFsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnlTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U2VjdGlvbn0gc2VjdGlvblxuICogQHBhcmFtIHtSZXN1bHRzTW9kaWZpZXJ9IG1vZGlmeUZuXG4gKi9cbmZ1bmN0aW9uIG1vZGlmeVJlc3VsdHMgKHNlY3Rpb24sIG1vZGlmeUZuKSB7XG4gIHNlY3Rpb24ucmVzdWx0cyA9IG1vZGlmeUZuKHNlY3Rpb24ucmVzdWx0cyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtTZWN0aW9uW119IHNlY3Rpb25zIEEgbGlzdCBvZiBtb2NrIHNlY3Rpb24gZGF0YVxuICogQHJldHVybnMge09iamVjdH0gQSBtb2NrIEFuc3dlcnNBcGkgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0VW5pdmVyc2FsUmVzcG9uc2UgKHNlY3Rpb25zKSB7XG4gIC8vIFRPRE8oYW11bGxpbmdzKTogc3BlbGxjaGVjaywgZ2VvLCBmaWx0ZXJzXG4gIC8vIFRPRE8oYW11bGxpbmdzKTogRmFrZSBlbmNvZGVkU3RhdGUgb25jZSB0aGUgU0RLIHVzZXMgaXRcbiAgc2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoZmlsbFNlY3Rpb25GaWVsZHMpO1xuICByZXR1cm4ge1xuICAgIG1ldGE6IHtcbiAgICAgIHV1aWQ6IHV1aWRWNCgpLFxuICAgICAgZXJyb3JzOiBbXVxuICAgIH0sXG4gICAgcmVzcG9uc2U6IHtcbiAgICAgIGJ1c2luZXNzSWQ6IEFSQklUUkFSWV9CVVNJTkVTU19JRCxcbiAgICAgIG1vZHVsZXM6IHNlY3Rpb25zLFxuICAgICAgZmFpbGVkVmVydGljYWxzOiBbXSxcbiAgICAgIHF1ZXJ5SWQ6IHV1aWRWNCgpLFxuICAgICAgc2VhcmNoSW50ZW50czogW11cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtTZWN0aW9ufSBzZWN0aW9uIEEgbW9jayBzZWN0aW9uIGRhdGFcbiAqIEByZXR1cm5zIHtPYmplY3R9IEEgbW9jayBBbnN3ZXJzQXBpIHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdFZlcnRpY2FsUmVzcG9uc2UgKHNlY3Rpb24pIHtcbiAgLy8gVE9ETyhhbXVsbGluZ3MpOiBzcGVsbGNoZWNrLCBnZW8sIGZpbHRlcnNcbiAgLy8gVE9ETyhhbXVsbGluZ3MpOiBGYWtlIGVuY29kZWRTdGF0ZSBvbmNlIHRoZSBTREsgdXNlcyBpdFxuICBzZWN0aW9uID0gZmlsbFNlY3Rpb25GaWVsZHMoc2VjdGlvbik7XG4gIHJldHVybiB7XG4gICAgbWV0YToge1xuICAgICAgdXVpZDogdXVpZFY0KCksXG4gICAgICBlcnJvcnM6IFtdXG4gICAgfSxcbiAgICByZXNwb25zZTogT2JqZWN0LmFzc2lnbihzZWN0aW9uLCB7XG4gICAgICBidXNpbmVzc0lkOiBBUkJJVFJBUllfQlVTSU5FU1NfSUQsXG4gICAgICBxdWVyeUlkOiB1dWlkVjQoKSxcbiAgICAgIHNlYXJjaEludGVudHM6IFtdXG4gICAgfSlcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NlY3Rpb259XG4gKiBAcmV0dXJucyB7U2VjdGlvbn1cbiAqL1xuZnVuY3Rpb24gZmlsbFNlY3Rpb25GaWVsZHMgKHNlY3Rpb24pIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNhbENvbmZpZ0lkOiBzZWN0aW9uLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgcmVzdWx0c0NvdW50OiBzZWN0aW9uLnJlc3VsdHMubGVuZ3RoLFxuICAgIGVuY29kZWRTdGF0ZTogJycsXG4gICAgcmVzdWx0czogc2VjdGlvbi5yZXN1bHRzLFxuICAgIGFwcGxpZWRRdWVyeUZpbHRlcnM6IHNlY3Rpb24uYXBwbGllZFF1ZXJ5RmlsdGVycyxcbiAgICBxdWVyeUR1cmF0aW9uTWlsbGlzOiByYW5kb21JbnQoNTAsIDEwMDApLFxuICAgIGZhY2V0czogc2VjdGlvbi5mYWNldHMsXG4gICAgc291cmNlOiBzZWN0aW9uLnNvdXJjZVxuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXNwXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5mdW5jdGlvbiBkZWxheWVkUmVzcG9uc2UgKHJlc3ApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZShyZXNwKTtcbiAgICB9LCByYW5kb21JbnQoMjUwLCAxMDAwKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENvZGUtZ29sZi15IGJ1dCBsZWdpdCBiYXNpYyBVVUlEIHY0IGltcGxlbWVudGF0aW9uLiBOb3QgY3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlLlxuICogRnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWQvOTgyODgzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHY0LWNvbXBsaWFudCBVVUlEXG4gKi9cbmZ1bmN0aW9uIHV1aWRWNCAoKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gYiAoYSkgeyByZXR1cm4gYSA/IChhIF4gTWF0aC5yYW5kb20oKSAqIDE2ID4+IGEgLyA0KS50b1N0cmluZygxNikgOiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYik7IH0pKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBpbmNsdXNpdmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggZXhjbHVzaXZlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBzcGVjaWZpZWQgcmFuZ2VcbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50IChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVycyxcbiAgRE9NXG59IGZyb20gJy4vdWkvaW5kZXgnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL3VpL2NvbXBvbmVudHMvY29tcG9uZW50JztcblxuaW1wb3J0IEVycm9yUmVwb3J0ZXIgZnJvbSAnLi9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyJztcbmltcG9ydCBDb25zb2xlRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2NvbnNvbGVlcnJvcnJlcG9ydGVyJztcbmltcG9ydCB7IEFuYWx5dGljc1JlcG9ydGVyLCBOb29wQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IFBlcnNpc3RlbnRTdG9yYWdlIGZyb20gJy4vdWkvc3RvcmFnZS9wZXJzaXN0ZW50c3RvcmFnZSc7XG5pbXBvcnQgR2xvYmFsU3RvcmFnZSBmcm9tICcuL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoQ29uZmlnIGZyb20gJy4vY29yZS9tb2RlbHMvc2VhcmNoY29uZmlnJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVhcGknO1xuaW1wb3J0IE1vY2tBdXRvQ29tcGxldGVTZXJ2aWNlIGZyb20gJy4vY29yZS9zZWFyY2gvbW9ja2F1dG9jb21wbGV0ZXNlcnZpY2UnO1xuaW1wb3J0IFF1ZXN0aW9uQW5zd2VyQXBpIGZyb20gJy4vY29yZS9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGknO1xuaW1wb3J0IE1vY2tRdWVzdGlvbkFuc3dlclNlcnZpY2UgZnJvbSAnLi9jb3JlL3NlYXJjaC9tb2NrcXVlc3Rpb25hbnN3ZXJzZXJ2aWNlJztcbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9jb3JlL3NlYXJjaC9zZWFyY2hhcGknO1xuaW1wb3J0IE1vY2tTZWFyY2hTZXJ2aWNlIGZyb20gJy4vY29yZS9zZWFyY2gvbW9ja3NlYXJjaHNlcnZpY2UnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL3NlYXJjaHNlcnZpY2UnKS5kZWZhdWx0fSBTZWFyY2hTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL2F1dG9jb21wbGV0ZXNlcnZpY2UnKS5kZWZhdWx0fSBBdXRvQ29tcGxldGVTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL3F1ZXN0aW9uYW5zd2Vyc2VydmljZScpLmRlZmF1bHR9IFF1ZXN0aW9uQW5zd2VyU2VydmljZSAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS9zZXJ2aWNlcy9lcnJvcnJlcG9ydGVyc2VydmljZScpLmRlZmF1bHR9IEVycm9yUmVwb3J0ZXJTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL2FuYWx5dGljc3JlcG9ydGVyc2VydmljZScpLmRlZmF1bHR9IEFuYWx5dGljc1JlcG9ydGVyU2VydmljZSAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIFNlcnZpY2VzXG4gKiBAcHJvcGVydHkge1NlYXJjaFNlcnZpY2V9IHNlYXJjaFNlcnZpY2VcbiAqIEBwcm9wZXJ0eSB7QXV0b0NvbXBsZXRlU2VydmljZX0gYXV0b0NvbXBsZXRlU2VydmljZVxuICogQHByb3BlcnR5IHtRdWVzdGlvbkFuc3dlclNlcnZpY2V9IHF1ZXN0aW9uQW5zd2VyU2VydmljZVxuICogQHByb3BlcnR5IHtFcnJvclJlcG9ydGVyU2VydmljZX0gZXJyb3JSZXBvcnRlclNlcnZpY2VcbiAqL1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgbG9jYWxlOiAnZW4nXG59O1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBDb21wb25lbnQgYmFzZSBjbGFzcyBmb3IgY3VzdG9tXG4gICAgICogY29tcG9uZW50cyB0byBleHRlbmRcbiAgICAgKi9cbiAgICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBBbmFseXRpY3NFdmVudCBiYXNlIGNsYXNzIGZvciByZXBvcnRpbmdcbiAgICAgKiBjdXN0b20gYW5hbHl0aWNzXG4gICAgICovXG4gICAgdGhpcy5BbmFseXRpY3NFdmVudCA9IEFuYWx5dGljc0V2ZW50O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBhcGlcbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbGlnaWJsZUZvckFuYWx5dGljcyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1NlcnZpY2VzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VydmljZXMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0FuYWx5dGljc1JlcG9ydGVyU2VydmljZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyU2VydmljZSA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRTLCBjb25maWcpO1xuICAgIGlmICh0eXBlb2YgY29uZmlnLmFwaUtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYXBpS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZXhwZXJpZW5jZUtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgZXhwZXJpZW5jZUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGNvbmZpZy5zZWFyY2ggPSBuZXcgU2VhcmNoQ29uZmlnKGNvbmZpZy5zZWFyY2gpO1xuXG4gICAgY29uc3QgZ2xvYmFsU3RvcmFnZSA9IG5ldyBHbG9iYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgcGVyc2lzdGVudFN0b3JhZ2UgPSBuZXcgUGVyc2lzdGVudFN0b3JhZ2Uoe1xuICAgICAgdXBkYXRlTGlzdGVuZXI6IGNvbmZpZy5vblN0YXRlQ2hhbmdlLFxuICAgICAgcmVzZXRMaXN0ZW5lcjogZGF0YSA9PiBnbG9iYWxTdG9yYWdlLnNldEFsbChkYXRhKVxuICAgIH0pO1xuICAgIGdsb2JhbFN0b3JhZ2Uuc2V0QWxsKHBlcnNpc3RlbnRTdG9yYWdlLmdldEFsbCgpKTtcbiAgICBnbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRUFSQ0hfQ09ORklHLCBjb25maWcuc2VhcmNoKTtcbiAgICBsZXQgc2Vzc2lvblRyYWNraW5nRW5hYmxlZCA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiBjb25maWcuc2Vzc2lvblRyYWNraW5nRW5hYmxlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBzZXNzaW9uVHJhY2tpbmdFbmFibGVkID0gY29uZmlnLnNlc3Npb25UcmFja2luZ0VuYWJsZWQ7XG4gICAgfVxuICAgIGdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFU1NJT05TX09QVF9JTiwgc2Vzc2lvblRyYWNraW5nRW5hYmxlZCk7XG5cbiAgICB0aGlzLl9zZXJ2aWNlcyA9IGNvbmZpZy5tb2NrID8gZ2V0TW9ja1NlcnZpY2VzKCkgOiBnZXRTZXJ2aWNlcyhjb25maWcpO1xuXG4gICAgdGhpcy5jb3JlID0gbmV3IENvcmUoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZ2xvYmFsU3RvcmFnZTogZ2xvYmFsU3RvcmFnZSxcbiAgICAgIHBlcnNpc3RlbnRTdG9yYWdlOiBwZXJzaXN0ZW50U3RvcmFnZSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IGNvbmZpZy5leHBlcmllbmNlS2V5LFxuICAgICAgZmllbGRGb3JtYXR0ZXJzOiBjb25maWcuZmllbGRGb3JtYXR0ZXJzLFxuICAgICAgZXhwZXJpZW5jZVZlcnNpb246IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbixcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZSxcbiAgICAgIHNlYXJjaFNlcnZpY2U6IHRoaXMuX3NlcnZpY2VzLnNlYXJjaFNlcnZpY2UsXG4gICAgICBhdXRvQ29tcGxldGVTZXJ2aWNlOiB0aGlzLl9zZXJ2aWNlcy5hdXRvQ29tcGxldGVTZXJ2aWNlLFxuICAgICAgcXVlc3Rpb25BbnN3ZXJTZXJ2aWNlOiB0aGlzLl9zZXJ2aWNlcy5xdWVzdGlvbkFuc3dlclNlcnZpY2VcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcub25TdGF0ZUNoYW5nZSAmJiB0eXBlb2YgY29uZmlnLm9uU3RhdGVDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZy5vblN0YXRlQ2hhbmdlKHBlcnNpc3RlbnRTdG9yYWdlLmdldEFsbCgpLCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzXG4gICAgICAuc2V0Q29yZSh0aGlzLmNvcmUpXG4gICAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICB0aGlzLl9lbGlnaWJsZUZvckFuYWx5dGljcyA9IGNvbmZpZy5idXNpbmVzc0lkICE9IG51bGw7XG4gICAgaWYgKHRoaXMuX2VsaWdpYmxlRm9yQW5hbHl0aWNzKSB7XG4gICAgICAvLyBUT0RPKGFtdWxsaW5ncyk6IEluaXRpYWxpemUgd2l0aCBvdGhlciBzZXJ2aWNlc1xuICAgICAgY29uc3QgcmVwb3J0ZXIgPSBjb25maWcubW9ja1xuICAgICAgICA/IG5ldyBOb29wQW5hbHl0aWNzUmVwb3J0ZXIoKVxuICAgICAgICA6IG5ldyBBbmFseXRpY3NSZXBvcnRlcihcbiAgICAgICAgICB0aGlzLmNvcmUsXG4gICAgICAgICAgY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICAgICAgY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAgIGNvbmZpZy5idXNpbmVzc0lkLFxuICAgICAgICAgIGNvbmZpZy5hbmFseXRpY3NPcHRpb25zKTtcblxuICAgICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlID0gcmVwb3J0ZXI7XG5cbiAgICAgIHRoaXMuY29tcG9uZW50cy5zZXRBbmFseXRpY3NSZXBvcnRlcihyZXBvcnRlcik7XG4gICAgICBpbml0U2Nyb2xsTGlzdGVuZXIocmVwb3J0ZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX3NldERlZmF1bHRJbml0aWFsU2VhcmNoKGNvbmZpZy5zZWFyY2gpO1xuXG4gICAgdGhpcy5fb25SZWFkeSA9IGNvbmZpZy5vblJlYWR5IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgaWYgKGNvbmZpZy51c2VUZW1wbGF0ZXMgPT09IGZhbHNlIHx8IGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgaWYgKGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluaXQoY29uZmlnLnRlbXBsYXRlQnVuZGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGVzIGFyZSBjdXJyZW50bHkgZG93bmxvYWRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIENPUkUgYW5kIFVJIGJ1bmRsZS5cbiAgICAvLyBGdXR1cmUgZW5oYW5jZW1lbnQgaXMgdG8gc2hpcCB0aGUgY29tcG9uZW50cyB3aXRoIHRlbXBsYXRlcyBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZUxvYWRlcih7XG4gICAgICB0ZW1wbGF0ZVVybDogY29uZmlnLnRlbXBsYXRlVXJsXG4gICAgfSkub25Mb2FkZWQoKHRlbXBsYXRlcykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5pbml0KHRlbXBsYXRlcyk7XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZG9tUmVhZHkgKGNiKSB7XG4gICAgRE9NLm9uUmVhZHkoY2IpO1xuICB9XG5cbiAgb25SZWFkeSAoY2IpIHtcbiAgICB0aGlzLl9vblJlYWR5ID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBjdXN0b20gY29tcG9uZW50IHR5cGUgc28gaXQgY2FuIGJlIGNyZWF0ZWQgdmlhXG4gICAqIGFkZENvbXBvbmVudCBhbmQgdXNlZCBhcyBhIGNoaWxkIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50Q2xhc3NcbiAgICovXG4gIHJlZ2lzdGVyQ29tcG9uZW50VHlwZSAoY29tcG9uZW50Q2xhc3MpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMucmVnaXN0ZXIoY29tcG9uZW50Q2xhc3MpO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKHR5cGUsIG9wdHMpLm1vdW50KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignRmFpbGVkIHRvIGFkZCBjb21wb25lbnQnLCB0eXBlLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgLSBhbmQgYWxsIG9mIGl0cyBjaGlsZHJlbiAtIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNvbXBvbmVudCAobmFtZSkge1xuICAgIHRoaXMuY29tcG9uZW50cy5yZW1vdmVCeU5hbWUobmFtZSk7XG4gIH1cblxuICBjcmVhdGVDb21wb25lbnQgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMucmVuZGVyZXIucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wdCBpbiBvciBvdXQgb2YgY29udmVydGlvbiB0cmFja2luZyBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRJblxuICAgKi9cbiAgc2V0Q29udmVyc2lvbnNPcHRJbiAob3B0SW4pIHtcbiAgICBpZiAodGhpcy5fZWxpZ2libGVGb3JBbmFseXRpY3MpIHtcbiAgICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyU2VydmljZS5zZXRDb252ZXJzaW9uVHJhY2tpbmdFbmFibGVkKG9wdEluKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3B0IGluIG9yIG91dCBvZiBzZXNzaW9uIGNvb2tpZXNcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRJblxuICAgKi9cbiAgc2V0U2Vzc2lvbnNPcHRJbiAob3B0SW4pIHtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU0VTU0lPTlNfT1BUX0lOLCBvcHRJbik7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHNlYXJjaCBxdWVyeSBvbiBpbml0aWFsaXphdGlvbiBmb3IgdmVydGljYWwgc2VhcmNoZXJzIHRoYXQgaGF2ZSBhXG4gICAqIGRlZmF1bHRJbml0aWFsU2VhcmNoIHByb3ZpZGVkLCBpZiB0aGUgdXNlciBoYXNuJ3QgYWxyZWFkeSBwcm92aWRlZCB0aGVpclxuICAgKiBvd24gdmlhIFVSTCBwYXJhbS5cbiAgICogQHBhcmFtIHtTZWFyY2hDb25maWd9IHNlYXJjaENvbmZpZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldERlZmF1bHRJbml0aWFsU2VhcmNoIChzZWFyY2hDb25maWcpIHtcbiAgICBpZiAoc2VhcmNoQ29uZmlnLmRlZmF1bHRJbml0aWFsU2VhcmNoID09IG51bGwgfHwgIXNlYXJjaENvbmZpZy52ZXJ0aWNhbEtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmVwb3B1bGF0ZWRRdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcbiAgICBpZiAocHJlcG9wdWxhdGVkUXVlcnkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoJ3F1ZXJ5VHJpZ2dlcicsICdpbml0aWFsaXplJyk7XG4gICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHNlYXJjaENvbmZpZy5kZWZhdWx0SW5pdGlhbFNlYXJjaCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKiBAcmV0dXJucyB7U2VydmljZXN9XG4gKi9cbmZ1bmN0aW9uIGdldFNlcnZpY2VzIChjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hTZXJ2aWNlOiBuZXcgU2VhcmNoQXBpKHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IGNvbmZpZy5leHBlcmllbmNlS2V5LFxuICAgICAgZXhwZXJpZW5jZVZlcnNpb246IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbixcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pLFxuICAgIGF1dG9Db21wbGV0ZVNlcnZpY2U6IG5ldyBBdXRvQ29tcGxldGVBcGkoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSksXG4gICAgcXVlc3Rpb25BbnN3ZXJTZXJ2aWNlOiBuZXcgUXVlc3Rpb25BbnN3ZXJBcGkoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5XG4gICAgfSksXG4gICAgZXJyb3JSZXBvcnRlclNlcnZpY2U6IG5ldyBFcnJvclJlcG9ydGVyKHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IGNvbmZpZy5leHBlcmllbmNlS2V5LFxuICAgICAgZXhwZXJpZW5jZVZlcnNpb246IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbixcbiAgICAgIHByaW50VmVyYm9zZTogY29uZmlnLmRlYnVnLFxuICAgICAgc2VuZFRvU2VydmVyOiAhY29uZmlnLnN1cHByZXNzRXJyb3JSZXBvcnRzXG4gICAgfSlcbiAgfTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7U2VydmljZXN9XG4gKi9cbmZ1bmN0aW9uIGdldE1vY2tTZXJ2aWNlcyAoKSB7XG4gIHJldHVybiB7XG4gICAgc2VhcmNoU2VydmljZTogbmV3IE1vY2tTZWFyY2hTZXJ2aWNlKCksXG4gICAgYXV0b0NvbXBsZXRlU2VydmljZTogbmV3IE1vY2tBdXRvQ29tcGxldGVTZXJ2aWNlKCksXG4gICAgcXVlc3Rpb25BbnN3ZXJTZXJ2aWNlOiBuZXcgTW9ja1F1ZXN0aW9uQW5zd2VyU2VydmljZSgpLFxuICAgIGVycm9yUmVwb3J0ZXJTZXJ2aWNlOiBuZXcgQ29uc29sZUVycm9yUmVwb3J0ZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0byBzZW5kIGFuYWx5dGljcyBldmVudHNcbiAqIHdoZW4gdGhlIHVzZXIgc2Nyb2xscyB0byB0aGUgYm90dG9tLiBEZWJvdW5jZXMgc2Nyb2xsIGV2ZW50cyBzb1xuICogdGhleSBhcmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB1c2VyIHN0b3BzIHNjcm9sbGluZ1xuICovXG5mdW5jdGlvbiBpbml0U2Nyb2xsTGlzdGVuZXIgKHJlcG9ydGVyKSB7XG4gIGNvbnN0IERFQk9VTkNFX1RJTUUgPSAxMDA7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcblxuICBjb25zdCBzZW5kRXZlbnQgPSAoKSA9PiB7XG4gICAgaWYgKCh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cucGFnZVlPZmZzZXQpID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCgnU0NST0xMX1RPX0JPVFRPTV9PRl9QQUdFJyk7XG4gICAgICByZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHNlbmRFdmVudCwgREVCT1VOQ0VfVElNRSk7XG4gIH0pO1xufVxuXG5jb25zdCBBTlNXRVJTID0gbmV3IEFuc3dlcnMoKTtcbmV4cG9ydCBkZWZhdWx0IEFOU1dFUlM7XG4iXSwibmFtZXMiOlsiUFJFX1NFQVJDSCIsIlNFQVJDSF9MT0FESU5HIiwiU0VBUkNIX0NPTVBMRVRFIiwiUmVzdWx0IiwiZGF0YSIsIl9yYXciLCJyYXciLCJfZm9ybWF0dGVkIiwiZm9ybWF0dGVkIiwib3JkaW5hbCIsInRpdGxlIiwiZGV0YWlscyIsImxpbmsiLCJpZCIsInN1YnRpdGxlIiwibW9kaWZpZXIiLCJiaWdEYXRlIiwiaW1hZ2UiLCJjYWxsc1RvQWN0aW9uIiwiY29sbGFwc2VkIiwiUmVzdWx0RmFjdG9yeSIsInJlc3VsdHNEYXRhIiwiZm9ybWF0dGVycyIsInZlcnRpY2FsSWQiLCJzb3VyY2UiLCJyZXN1bHRzIiwiaSIsImZvcm1hdHRlZERhdGEiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWwiLCJwdXNoIiwiZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSIsImZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUiLCJmcm9tQWxnb2xpYVNlYXJjaEVuZ2luZSIsImZyb21HZW5lcmljIiwiaW5kZXgiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ0cnVuY2F0ZSIsIndlYnNpdGUiLCJodG1sVGl0bGUiLCJyZXBsYWNlIiwiaHRtbFNuaXBwZXQiLCJzbmlwcGV0IiwidXJsIiwiaHRtbF91cmwiLCJvYmplY3RJRCIsInN0ciIsImxpbWl0IiwidHJhaWxpbmciLCJzZXAiLCJ3b3JkcyIsInNwbGl0IiwibWF4IiwidHJ1bmNhdGVkIiwid29yZCIsIlNlY3Rpb24iLCJzZWFyY2hTdGF0ZSIsIlNlYXJjaFN0YXRlcyIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiQXBwbGllZFF1ZXJ5RmlsdGVyIiwiZnJvbSIsImZhY2V0cyIsIm1hcCIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJqIiwicmVzdWx0IiwieWV4dERpc3BsYXlDb29yZGluYXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJpdGVtIiwibGFiZWwiLCJtb2R1bGVzIiwidXJscyIsInNlY3Rpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwbGllZFF1ZXJ5RmlsdGVyIiwiZGlzcGxheUtleSIsInZhbHVlIiwiZGlzcGxheVZhbHVlIiwiZmlsdGVycyIsIlVuaXZlcnNhbFJlc3VsdHMiLCJxdWVyeUlkIiwicmVzcG9uc2UiLCJEaXJlY3RBbnN3ZXIiLCJkaXJlY3RBbnN3ZXIiLCJhc3NpZ24iLCJmcmVlemUiLCJhbnN3ZXIiLCJyZWxhdGVkSXRlbSIsImZpZWxkQXBpTmFtZSIsImZpZWxkVmFsdWVzIiwiTmF2aWdhdGlvbiIsInRhYk9yZGVyIiwibmF2IiwiVmVydGljYWxSZXN1bHRzIiwibWVyZ2VkIiwiY29uY2F0IiwiSGlnaGxpZ2h0ZWRWYWx1ZSIsInNob3J0VmFsdWUiLCJtYXRjaGVkU3Vic3RyaW5ncyIsIl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MiLCJfYnVpbGRIaWdobGlnaHRlZFZhbHVlIiwiaW52ZXJ0ZWRTdWJzdHJpbmdzIiwiX2dldEludmVydGVkU3Vic3RyaW5ncyIsInNvcnQiLCJhIiwiYiIsIm9mZnNldCIsInZhbHVlTGVuZ3RoIiwic3Vic3RyaW5nIiwibmV4dE9mZnNldCIsImhpZ2hsaWdodGVkU3Vic3RyaW5ncyIsImhpZ2hsaWdodGVkVmFsdWUiLCJuZXh0U3RhcnQiLCJzdGFydCIsIk51bWJlciIsImVuZCIsInNsaWNlIiwiam9pbiIsIlNwZWxsQ2hlY2siLCJxdWVyeSIsImNvcnJlY3RlZFF1ZXJ5IiwiY29ycmVjdGVkUXVlcnlEaXNwbGF5IiwidHlwZSIsInNob3VsZFNob3ciLCJvcmlnaW5hbFF1ZXJ5IiwiZ2V0IiwiTkFWSUdBVElPTiIsIlVOSVZFUlNBTF9SRVNVTFRTIiwiVkVSVElDQUxfUkVTVUxUUyIsIkFVVE9DT01QTEVURSIsIkRJUkVDVF9BTlNXRVIiLCJGSUxURVIiLCJRVUVSWSIsIlFVRVJZX0lEIiwiRkFDRVRfRklMVEVSIiwiRFlOQU1JQ19GSUxURVJTIiwiUEFSQU1TIiwiR0VPTE9DQVRJT04iLCJJTlRFTlRTIiwiUVVFU1RJT05fU1VCTUlTU0lPTiIsIlNFQVJDSF9DT05GSUciLCJTRUFSQ0hfT0ZGU0VUIiwiU1BFTExfQ0hFQ0siLCJMT0NBVElPTl9CSUFTIiwiU0VTU0lPTlNfT1BUX0lOIiwiRHluYW1pY0ZpbHRlcnMiLCJkeW5hbWljRmlsdGVycyIsImYiLCJmaWVsZElkIiwib3B0aW9ucyIsIm8iLCJjb3VudExhYmVsIiwic2VsZWN0ZWQiLCJmaWx0ZXIiLCJTZWFyY2hJbnRlbnRzIiwiaW50ZW50cyIsIm5lYXJNZSIsImluY2x1ZGVzIiwiTG9jYXRpb25CaWFzIiwiYWNjdXJhY3kiLCJsb2NhdGlvbkRpc3BsYXlOYW1lIiwiU2VhcmNoRGF0YVRyYW5zZm9ybWVyIiwiU3RvcmFnZUtleXMiLCJzZWFyY2hJbnRlbnRzIiwic3BlbGxDaGVjayIsImxvY2F0aW9uQmlhcyIsIlF1ZXN0aW9uU3VibWlzc2lvbiIsInF1ZXN0aW9uIiwiZXJyb3JzIiwiZW1haWwiLCJwcml2YWN5UG9saWN5IiwicXVlc3Rpb25UZXh0IiwicXVlc3Rpb25EZXNjcmlwdGlvbiIsInF1ZXN0aW9uU3VibWl0dGVkIiwiRmlsdGVyIiwicmVzcG9uc2VGaWx0ZXIiLCJKU09OIiwicGFyc2UiLCJncm91cHMiLCJncm91cEZpbHRlcnMiLCJmaWVsZCIsIm9yIiwiYW5kIiwiX2Zyb21NYXRjaGVyIiwibWluIiwibGF0IiwibG5nIiwicmFkaXVzIiwibWF0Y2hlciIsIkNvcmUiLCJjb25maWciLCJfYXBpS2V5IiwiYXBpS2V5IiwiX2V4cGVyaWVuY2VLZXkiLCJleHBlcmllbmNlS2V5IiwiX2V4cGVyaWVuY2VWZXJzaW9uIiwiZXhwZXJpZW5jZVZlcnNpb24iLCJfbG9jYWxlIiwibG9jYWxlIiwiX2ZpZWxkRm9ybWF0dGVycyIsImZpZWxkRm9ybWF0dGVycyIsImdsb2JhbFN0b3JhZ2UiLCJwZXJzaXN0ZW50U3RvcmFnZSIsIl9zZWFyY2hlciIsInNlYXJjaFNlcnZpY2UiLCJfYXV0b0NvbXBsZXRlIiwiYXV0b0NvbXBsZXRlU2VydmljZSIsIl9xdWVzdGlvbkFuc3dlciIsInF1ZXN0aW9uQW5zd2VyU2VydmljZSIsInZlcnRpY2FsS2V5IiwiYXBwZW5kIiwic2V0Iiwic2VhcmNoTG9hZGluZyIsInZlcnRpY2FsU2VhcmNoIiwiZ2V0U3RhdGUiLCJnZW9sb2NhdGlvbiIsImlzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwiX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwic2tpcFNwZWxsQ2hlY2siLCJxdWVyeVRyaWdnZXIiLCJzZXNzaW9uVHJhY2tpbmdFbmFibGVkIiwidGhlbiIsInRyYW5zZm9ybVZlcnRpY2FsIiwibWVyZ2VkUmVzdWx0cyIsImFsbEZpbHRlcnMiLCJnZXRBbGwiLCJ0b3RhbEZpbHRlciIsImZhY2V0RmlsdGVyIiwiaW5wdXQiLCJzdHJpbmdpZnkiLCJxdWVyeVN0cmluZyIsInVuaXZlcnNhbFNlYXJjaCIsInRyYW5zZm9ybSIsIm5hbWVzcGFjZSIsInF1ZXJ5VW5pdmVyc2FsIiwiYmFyS2V5IiwicXVlcnlWZXJ0aWNhbCIsInF1ZXJ5RmlsdGVyIiwic3VibWl0UXVlc3Rpb24iLCJzdWJtaXR0ZWQiLCJldnQiLCJtb2R1bGVJZCIsImNiIiwib24iLCJBbnN3ZXJzQmFzZUVycm9yIiwiZXJyb3JDb2RlIiwibWVzc2FnZSIsImJvdW5kYXJ5IiwiY2F1c2VkQnkiLCJlcnJvck1lc3NhZ2UiLCJyZXBvcnRlZCIsInN0cmluZyIsInRvU3RyaW5nIiwiYnVpbHRpbkVycm9yIiwiZXJyb3IiLCJBbnN3ZXJzQmFzaWNFcnJvciIsInN0YWNrIiwiRXJyb3IiLCJBbnN3ZXJzQ29uZmlnRXJyb3IiLCJBbnN3ZXJzQ29tcG9uZW50RXJyb3IiLCJjb21wb25lbnQiLCJBbnN3ZXJzRW5kcG9pbnRFcnJvciIsIkFuc3dlcnNDb3JlRXJyb3IiLCJBbnN3ZXJzU3RvcmFnZUVycm9yIiwic3RvcmFnZUtleSIsIkFuc3dlcnNBbmFseXRpY3NFcnJvciIsImV2ZW50IiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJET00iLCJkIiwicCIsImh0bWwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZnJhZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwicGFyZW50Iiwic2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsIkhUTUxEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVhZHlTdGF0ZSIsImVsIiwib3B0c19kYXRhIiwibm9kZSIsInByb3BzIiwiYWRkQ2xhc3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwibGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3R5bGVzIiwicHJvcCIsInN0eWxlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImF0dHJzIiwic2V0dGluZ3MiLCJlIiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiQ29tcG9uZW50TWFuYWdlciIsInNldEluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJfY29tcG9uZW50UmVnaXN0cnkiLCJfYWN0aXZlQ29tcG9uZW50cyIsIl9jb3JlIiwiX3JlbmRlcmVyIiwiX2FuYWx5dGljc1JlcG9ydGVyIiwicmVuZGVyZXIiLCJjb3JlIiwicmVwb3J0ZXIiLCJjb21wb25lbnRDbGF6eiIsImNvbXBvbmVudFR5cGUiLCJvcHRzIiwic3lzdGVtT3B0cyIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpc1R3aW4iLCJjb25zdHJ1Y3RvciIsImluaXQiLCJzZXRTdGF0ZSIsIm9mZiIsImZpbmRJbmRleCIsInNwbGljZSIsImZpbmQiLCJyZW1vdmUiLCJlbXB0eSIsIl9jb250YWluZXIiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwidGVtcGxhdGVOYW1lIiwiYXJnMSIsImFyZzIiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJtYXRjaCIsImludGxDb2RlIiwiYXJncyIsImFyZ3VtZW50cyIsInJvb3QiLCJ2IiwiUmVuZGVyZXJzIiwiU09ZIiwiSGFuZGxlYmFycyIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJrZWVwIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0IiwiZW1pdCIsIm9wdFByb3AiLCJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJyZXF1ZXN0IiwiZW5jb2RlUGFyYW1zIiwidXJsUGFyYW1zIiwianNvbkJvZHkiLCJyZXF1ZXN0Q29uZmlnIiwiY3JlZGVudGlhbHMiLCJtZXRob2QiLCJyZXFBcmdzIiwiZmV0Y2giLCJuYXZpZ2F0b3IiLCJzZW5kQmVhY29uIiwicGFyYW1zIiwiaGFzUGFyYW0iLCJpbmRleE9mIiwic2VhcmNoUXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMSUJfVkVSU0lPTiIsIkxJVkVfQVBJX0JBU0VfVVJMIiwiQVBJX0JBU0VfVVJMIiwiQ09NUElMRURfVEVNUExBVEVTX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTF9OT19DT09LSUUiLCJTZWFyY2hQYXJhbXMiLCJfcGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZW5jb2RlZFBhcmFtcyIsImtleVZhbCIsImRlY29kZSIsIlN0cmluZyIsImVuY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIkFwaVJlcXVlc3QiLCJfcmVxdWVzdGVyIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2VuZHBvaW50IiwiZW5kcG9pbnQiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJiYXNlUGFyYW1zIiwic2FuaXRpemVQYXJhbXMiLCJwb3N0IiwibG9jYXRpb24iLCJoYXMiLCJTZWFyY2hBcGkiLCJqc29uIiwiQW5hbHl0aWNzRXZlbnQiLCJldmVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsIkFuYWx5dGljc1JlcG9ydGVyIiwiYnVzaW5lc3NJZCIsImdsb2JhbE9wdGlvbnMiLCJfYnVzaW5lc3NJZCIsIl9nbG9iYWxPcHRpb25zIiwic2V0UXVlcnlJZCIsImFkZE9wdGlvbnMiLCJiZWFjb24iLCJ0b0FwaUV2ZW50IiwiaXNFbmFibGVkIiwiTm9vcEFuYWx5dGljc1JlcG9ydGVyIiwiTW9kdWxlRGF0YSIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJjYXB0dXJlUHJldmlvdXMiLCJzaGlmdCIsInByZXZpb3VzIiwiX3ByZXZpb3VzIiwicG9wIiwiR2xvYmFsU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb21wb25lbnQiLCJzeXN0ZW1Db25maWciLCJfY29uZmlnIiwiX3R5cGUiLCJfcGFyZW50Q29udGFpbmVyIiwicGFyZW50Q29udGFpbmVyIiwiX2NoaWxkcmVuIiwic3RhdGUiLCJfYW5hbHl0aWNzT3B0aW9ucyIsImFuYWx5dGljc09wdGlvbnMiLCJjcmVhdGVFbCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsImRlZmF1bHRUZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25DcmVhdGVPdmVycmlkZSIsImJpbmQiLCJvbk1vdW50Iiwib25Nb3VudE92ZXJyaWRlIiwib25VcGRhdGUiLCJvblVwZGF0ZU92ZXJyaWRlIiwidXNlck9uQ3JlYXRlIiwidXNlck9uTW91bnQiLCJ1c2VyT25VcGRhdGUiLCJ1bk1vdW50IiwibW91bnQiLCJjb25zb2xlIiwibG9nIiwibmV3U3RhdGUiLCJjaGlsZENvbXBvbmVudCIsImNyZWF0ZSIsIl9wYXJlbnRPcHRzIiwiY2hpbGQiLCJvblVuTW91bnQiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsImRvbUNvbXBvbmVudHMiLCJxdWVyeUFsbCIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJkb21Ib29rcyIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmVmb3JlUmVuZGVyIiwiYWZ0ZXJSZW5kZXIiLCJkb21Db21wb25lbnQiLCJkYXRhc2V0IiwiaXNDb21wb25lbnRNb3VudGVkIiwiY2hpbGREYXRhIiwiYWRkQ2hpbGQiLCJyZXZlcnNlIiwiaXNBbmFseXRpY3NBdHRhY2hlZCIsImV2ZW50dHlwZSIsImV2ZW50bGFiZWwiLCJldmVudG9wdGlvbnMiLCJyZXBvcnQiLCJSRVNJWkVfREVCT1VOQ0UiLCJUYWIiLCJjb25maWdJZCIsImlzRmlyc3QiLCJpc0FjdGl2ZSIsInRhYnNDb25maWciLCJ0YWJzIiwidGFiIiwiTmF2aWdhdGlvbkNvbXBvbmVudCIsImRyb3Bkb3duTGFiZWwiLCJkcm9wZG93bkljb24iLCJfdGFicyIsIl90YWJPcmRlciIsImdldERlZmF1bHRUYWJPcmRlciIsImdldFVybFBhcmFtcyIsIl9uYXZCcmVha3BvaW50cyIsIl9kZWJvdW5jZVRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlZml0TmF2IiwiY2hlY2tPdXRzaWRlQ2xpY2siLCJ0b2dnbGVNb3JlRHJvcGRvd24iLCJtb3JlQnV0dG9uIiwibWFpbkxpbmtzIiwiY29sbGFwc2VkTGlua3MiLCJuYXZXaWR0aCIsImNvbnRhaW5zIiwib2Zmc2V0V2lkdGgiLCJudW1CcmVha3BvaW50cyIsIm1haW5MaW5rc1dpZHRoIiwiY2hpbGRyZW4iLCJsYXN0TGluayIsInByZXBlbmQiLCJmaXJzdExpbmsiLCJjbG9zZU1vcmVEcm9wZG93biIsInRvZ2dsZSIsImNsb3Nlc3QiLCJtZXJnZVRhYk9yZGVyIiwiZ2VuZXJhdGVUYWJVcmwiLCJ1bnNoaWZ0Iiwib3RoZXJUYWJPcmRlciIsInRhYkNvbmZpZyIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwibGFiZWxUZXh0Iiwic3VibWl0VGV4dCIsInN1Ym1pdEljb24iLCJwcm9tcHRIZWFkZXIiLCJhdXRvRm9jdXMiLCJjbGVhckJ1dHRvbiIsImF1dG9jb21wbGV0ZU9uTG9hZCIsInJlZGlyZWN0VXJsIiwiX2lzVHdpbiIsInEiLCJfc2VhcmNoQ29vbGRvd24iLCJzZWFyY2hDb29sZG93biIsIl9wcm9tcHRGb3JMb2NhdGlvbiIsInByb21wdEZvckxvY2F0aW9uIiwiQm9vbGVhbiIsIl9zaG93Q2xlYXJCdXR0b24iLCJfYWxsb3dFbXB0eVNlYXJjaCIsImFsbG93RW1wdHlTZWFyY2giLCJzZXRRdWVyeSIsImluaXRMb2NhdGlvblByb21wdCIsImZvY3VzIiwiaW5pdFNlYXJjaCIsImluaXRBdXRvQ29tcGxldGUiLCJpbml0Q2xlYXJCdXR0b24iLCJfYXV0b2NvbXBsZXRlIiwiYnV0dG9uIiwiaW50ZW50IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZHMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYmx1ciIsImlucHV0U2VsZWN0b3IiLCJvblN1Ym1pdCIsInRyaWdnZXIiLCJfdGhyb3R0bGVkIiwiZ2V0QWN0aXZlQ29tcG9uZW50Iiwic2hvd0NsZWFyQnV0dG9uIiwiRmlsdGVyU2VhcmNoQ29tcG9uZW50IiwiaW5wdXRLZXkiLCJfc3RvcmVPbkNoYW5nZSIsInN0b3JlT25DaGFuZ2UiLCJzZWFyY2hUZXh0Iiwic2VhcmNoUGFyYW1ldGVycyIsIl9idWlsZFNlYXJjaFBhcmFtZXRlcnMiLCJpc0ZpbHRlclNlYXJjaCIsIm9yaWdpbmFsRmlsdGVyIiwiZnJvbVJlc3BvbnNlIiwic2V0RmlsdGVyIiwic2VhcmNoUGFyYW1ldGVyQ29uZmlncyIsInNlY3Rpb25lZCIsImZpZWxkcyIsIl9idWlsZEZpZWxkcyIsImZpZWxkQ29uZmlncyIsImZjIiwiZmV0Y2hFbnRpdGllcyIsIktleXMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQ0FQRSIsIkxFRlQiLCJSSUdIVCIsIlVQIiwiRE9XTiIsIkxFRlRfT1NfS0VZIiwiUklHSFRfT1NfS0VZIiwiU0VMRUNUX0tFWSIsIkF1dG9Db21wbGV0ZUNvbXBvbmVudCIsIl9hdXRvY29tcGxldGVFbHMiLCJhdXRvQ29tcGxldGVFbHMiLCJfb3JpZ2luYWxRdWVyeSIsIl9zZWN0aW9uSW5kZXgiLCJfcmVzdWx0SW5kZXgiLCJfYXV0b0ZvY3VzIiwiX29uU3VibWl0IiwiX3NlYXJjaFBhcmFtZXRlcnMiLCJoYXNSZXN1bHRzIiwic2VjdGlvbkluZGV4IiwicmVzdWx0SW5kZXgiLCJxdWVyeUlucHV0IiwiYXR0cmlidXRlcyIsImF1dG9jb21wbGV0ZSIsImF1dG9jb3JyZWN0Iiwic3BlbGxjaGVjayIsImNsb3NlIiwicmVzZXQiLCJhdXRvQ29tcGxldGUiLCJoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMiLCJrZXlDb2RlIiwiaGFuZGxlU3VibWl0UmVzdWx0IiwiZGVsZWdhdGUiLCJ1cGRhdGVRdWVyeSIsImhhbmRsZVR5cGluZyIsInVwZGF0ZVN0YXRlIiwib3B0VmFsdWUiLCJxdWVyeUVsIiwiaWdub3JlZEtleXMiLCJhdXRvQ29tcGxldGVGaWx0ZXIiLCJhdXRvQ29tcGxldGVWZXJ0aWNhbCIsImF1dG9Db21wbGV0ZVVuaXZlcnNhbCIsIlNwZWxsQ2hlY2tDb21wb25lbnQiLCJjb3JyZWN0ZWRRdWVyeVVybCIsIl9idWlsZFJlZGlyZWN0UXVlcnlVcmwiLCJoZWxwVGV4dCIsIl9nZXRIZWxwVGV4dCIsInRvTG93ZXJDYXNlIiwiTG9jYXRpb25CaWFzQ29tcG9uZW50IiwiX3VwZGF0ZUxvY2F0aW9uRWwiLCJ1cGRhdGVMb2NhdGlvbkVsIiwiX2xvY2F0aW9uRGlzcGxheU5hbWUiLCJfYWNjdXJhY3kiLCJfYWxsb3dVcGRhdGUiLCJfZG9TZWFyY2giLCJlcnIiLCJjb2RlIiwiX2dldExvY2F0aW9uRGlzcGxheU5hbWUiLCJhY2N1cmFjeVRleHQiLCJfZ2V0QWNjdXJhY3lIZWxwVGV4dCIsImlzUHJlY2lzZUxvY2F0aW9uIiwiaXNVbmtub3duTG9jYXRpb24iLCJhbGxvd1VwZGF0ZSIsIkZhY2V0IiwiZmxhdEZpbHRlcnMiLCJmbGF0TWFwIiwiJG9yIiwiRmlsdGVyQm94Q29tcG9uZW50IiwiX2ZpbHRlckNvbmZpZ3MiLCJfc2VhcmNoT25DaGFuZ2UiLCJzZWFyY2hPbkNoYW5nZSIsIl9hcHBseUJ1dHRvblNlbGVjdG9yIiwiYXBwbHlCdXR0b25TZWxlY3RvciIsIl9maWx0ZXJDb21wb25lbnRzIiwiX2ZpbHRlcnMiLCJfaXNEeW5hbWljIiwiaXNEeW5hbWljIiwiZmlsdGVyQ29uZmlncyIsInNob3dBcHBseUJ1dHRvbiIsIm9uQ2hhbmdlIiwib25GaWx0ZXJDaGFuZ2UiLCJnZXRGaWx0ZXIiLCJfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UiLCJfc2VhcmNoIiwidmFsaWRGaWx0ZXJzIiwiY29tYmluZWRGaWx0ZXIiLCJmcm9tRmlsdGVycyIsInNldEZhY2V0RmlsdGVyIiwiU1VQUE9SVEVEX0NPTlRST0xTIiwiRmlsdGVyT3B0aW9uc0NvbXBvbmVudCIsImNvbnRyb2wiLCJwcmV2aW91c09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbnMiLCJfb3B0aW9ucyIsIl9jb250cm9sIiwiX29wdGlvblNlbGVjdG9yIiwib3B0aW9uU2VsZWN0b3IiLCJfb25DaGFuZ2UiLCJfbGFiZWwiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJjaGVja2VkIiwiX2J1aWxkRmlsdGVyIiwiZWxlbWVudHMiLCJfYXBwbHlGaWx0ZXIiLCJlcXVhbCIsImdyb3VwIiwiUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfZmllbGQiLCJtaW5WYWwiLCJtYXhWYWwiLCJfcmFuZ2UiLCJpbml0aWFsTWluIiwiaW5pdGlhbE1heCIsIl90aXRsZSIsIl9taW5MYWJlbCIsIm1pbkxhYmVsIiwiX21heExhYmVsIiwibWF4TGFiZWwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiX3VwZGF0ZVJhbmdlIiwiaW5jbHVzaXZlUmFuZ2UiLCJEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfaXNFeGNsdXNpdmUiLCJpc0V4Y2x1c2l2ZSIsInRvZGF5IiwiRGF0ZSIsInRvZGF5U3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2RhdGUiLCJkYXRlTWluIiwiZGF0ZU1heCIsImRhdGUiLCJleGNsdXNpdmVSYW5nZSIsIkR5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IiwiX2ZpZWxkQ29udHJvbHMiLCJmaWVsZENvbnRyb2xzIiwiX2ZpbHRlcmJveCIsImVuYWJsZUR5bmFtaWNGaWx0ZXJzIiwiTUVURVJTX1BFUl9NSUxFIiwiREVGQVVMVF9DT05GSUciLCJnZW9CdXR0b25JY29uIiwiZ2VvQnV0dG9uVGV4dCIsImVuYWJsZWRUZXh0IiwibG9hZGluZ1RleHQiLCJlcnJvclRleHQiLCJidXR0b25TZWxlY3RvciIsIkdlb0xvY2F0aW9uQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJfZW5hYmxlZCIsImdlb0xvYWRpbmciLCJnZW9FcnJvciIsImdlb0VuYWJsZWQiLCJnZW9WYWx1ZSIsImdlb1BsYWNlaG9sZGVyIiwiX2luaXRBdXRvQ29tcGxldGUiLCJfdG9nZ2xlR2VvRmlsdGVyIiwiX3NhdmVEYXRhVG9TdG9yYWdlIiwiTWF0aCIsIkV2ZW50VHlwZXMiLCJUSFVNQlNfVVAiLCJUSFVNQlNfRE9XTiIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImZvcm1FbCIsIl90aHVtYnNVcFNlbGVjdG9yIiwidGh1bWJzVXBTZWxlY3RvciIsIl90aHVtYnNEb3duU2VsZWN0b3IiLCJ0aHVtYnNEb3duU2VsZWN0b3IiLCJfdmlld0RldGFpbHNUZXh0Iiwidmlld0RldGFpbHNUZXh0IiwiaGFzU3RhdGUiLCJjaGVja2VkVmFsdWUiLCJyZXBvcnRRdWFsaXR5IiwiZXZlbnRPcHRpb25zIiwic2VhcmNoZXIiLCJlbnRpdHlJZCIsImN0YUxhYmVsIiwiaXNHb29kIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJfdmVydGljYWxDb25maWdJZCIsIl9pc1VuaXZlcnNhbCIsImlzVW5pdmVyc2FsIiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIk1hcFByb3ZpZGVyIiwiX3pvb20iLCJ6b29tIiwiX2RlZmF1bHRQb3NpdGlvbiIsImRlZmF1bHRQb3NpdGlvbiIsIl9zaG93RW1wdHlNYXAiLCJzaG93RW1wdHlNYXAiLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uUGluQ2xpY2siLCJvblBpbkNsaWNrIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiX2NvbGxhcHNlUGlucyIsImNvbGxhcHNlUGlucyIsImlzTG9hZGVkIiwibWFwRGF0YSIsIm1hcmtlcnMiLCJsb2NhdGlvblRvSXRlbSIsIm0iLCJjb2xsYXBzZWRNYXJrZXJzIiwiY29sbGFwc2VkTWFya2VyIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl96b29tT2Zmc2V0IiwiX2NsaWVudElkIiwiY2xpZW50SWQiLCJfc2lnbmF0dXJlIiwic2lnbmF0dXJlIiwiaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyIsIm9uTG9hZCIsInNjcmlwdCIsIm9ubG9hZCIsImFzeW5jIiwic3JjIiwiZ2VuZXJhdGVDcmVkZW50aWFscyIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJjZW50ZXIiLCJnZXRDZW50ZXJNYXJrZXIiLCJfY29sbGFwc2VNYXJrZXJzIiwiZ29vZ2xlTWFwTWFya2VyQ29uZmlncyIsIkdvb2dsZU1hcE1hcmtlckNvbmZpZyIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsIm1hcmtlciIsIk1hcmtlciIsImFkZExpc3RlbmVyIiwiZXh0ZW5kIiwiZml0Qm91bmRzIiwibWFwQ2VudGVyIiwic2VyaWFsaXplZE1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiY3NzIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsIkxuZ0xhdEJvdW5kcyIsIndyYXBwZXIiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJnZXRMbmdMYXQiLCJhZGRUbyIsImdldEVsZW1lbnQiLCJwYWRkaW5nIiwic3RhdGljTWFwUGluIiwiUHJvdmlkZXJUeXBlcyIsIk1hcENvbXBvbmVudCIsIl9tYXBQcm92aWRlciIsIm1hcFByb3ZpZGVyIiwiZ2V0UHJvdmlkZXJJbnN0YW5jZSIsImxvYWRKUyIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsIl9pdGVtQ29uZmlnIiwiZ2xvYmFsIiwicmVuZGVySXRlbSIsIml0ZW1UZW1wbGF0ZSIsImNvbmZpZ3VyZUl0ZW0iLCJfdW5pdmVyc2FsVXJsIiwidW5pdmVyc2FsVXJsIiwiaXNQcmVTZWFyY2giLCJpc1NlYXJjaExvYWRpbmciLCJpc1NlYXJjaENvbXBsZXRlIiwiaW5jbHVkZU1hcCIsIm1hcENvbmZpZyIsInNob3dOb1Jlc3VsdHMiLCJzZXRJdGVtUmVuZGVyIiwic2V0SXRlbVRlbXBsYXRlIiwiY2xhenoiLCJnZXRJdGVtQ29tcG9uZW50IiwiY29tcCIsIm5ld09wdHMiLCJnbG9iYWxDb25maWciLCJpdGVtQ29uZmlnIiwiaGFzR2xvYmFsUmVuZGVyIiwiaGFzR2xvYmFsVGVtcGxhdGUiLCJzZXRSZW5kZXIiLCJzZXRUZW1wbGF0ZSIsIkFjY29yZGlvblJlc3VsdHNDb21wb25lbnQiLCJfc2VsZWN0b3JCYXNlIiwic2VsZWN0b3JCYXNlIiwiY29sbGFwc2VkQ2xhc3MiLCJhY2NvcmRpb25FbHMiLCJhY2NvcmRpb25FbCIsInRvZ2dsZUVsIiwidG9nZ2xlU2VsZWN0b3IiLCJjb250ZW50RWwiLCJib2R5U2VsZWN0b3IiLCJjaGFuZ2VIZWlnaHQiLCJoYW5kbGVDbGljayIsIndyYXBwZXJFbCIsImlzQ29sbGFwc2VkIiwidGFyZ2V0RWwiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJidWlsZFNlbGVjdG9yIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImNoaWxkT3B0cyIsImdldENoaWxkQ29uZmlnIiwidXNlQWNjb3JkaW9uIiwiZGVmYXVsdENvbmZpZyIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJfZmlyc3RQYWdlQnV0dG9uRW5hYmxlZCIsInNob3dGaXJzdCIsIl9sYXN0UGFnZUJ1dHRvbkVuYWJsZWQiLCJzaG93TGFzdCIsInNob3dDb250cm9scyIsInByZXZpb3VzUGFnZUJ1dHRvbiIsIm5leHRQYWdlQnV0dG9uIiwibWF4UGFnZSIsInRydW5jIiwidXBkYXRlUGFnZSIsImZpcnN0UGFnZUJ1dHRvbiIsImxhc3RQYWdlQnV0dG9uIiwic2Nyb2xsVG9Ub3AiLCJ2ZXJ0aWNhbFBhZ2UiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwYWdlTnVtYmVyIiwiaXNNb3JlUmVzdWx0cyIsImZpcnN0UGFnZUJ1dHRvbkVuYWJsZWQiLCJsYXN0UGFnZUJ1dHRvbkVuYWJsZWQiLCJzaG93Rmlyc3RQYWdlQnV0dG9uIiwic2hvd1ByZXZpb3VzUGFnZUJ1dHRvbiIsInNob3dOZXh0UGFnZUJ1dHRvbiIsInNob3dMYXN0UGFnZUJ1dHRvbiIsIlF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCIsInZhbGlkYXRlQ29uZmlnIiwiYmluZEFuYWx5dGljcyIsImJpbmRGb3JtU3VibWl0IiwicXVlc3Rpb25UZXh0RWwiLCJmb3JtRGF0YSIsInZhbGlkYXRlUmVxdWlyZWQiLCJsYW5ndWFnZSIsImlucHV0RmllbGRzIiwib2JqIiwiU1ZHSWNvbiIsInBhdGgiLCJjb21wbGV4Q29udGVudHMiLCJ2aWV3Qm94IiwiY29udGVudHMiLCJwYXRoRGVmaW5pdGlvbiIsImljb25zQXJyYXkiLCJ0aHVtYkljb24iLCJyZWNlaXB0SWNvbiIsInBhbnRoZW9uSWNvbiIsIm1pY0ljb24iLCJkaXJlY3Rpb25zSWNvbiIsImNhbGVuZGFySWNvbiIsImNhbGxvdXRJY29uIiwiaW5mb0ljb24iLCJicmllZmNhc2VJY29uIiwia2Fib2JJY29uIiwicGVyc29uSWNvbiIsIm1hZ25pZnlpbmdHbGFzc0ljb24iLCJvZmZpY2VJY29uIiwibGlua0ljb24iLCJ3aW5kb3dJY29uIiwicGhvbmVJY29uIiwidGFnSWNvbiIsImRvY3VtZW50SWNvbiIsImNoZXZyb25JY29uIiwic3VwcG9ydEljb24iLCJ5ZXh0SWNvbiIsInBpbkljb24iLCJnZWFySWNvbiIsImxpZ2h0QnVsYkljb24iLCJJY29ucyIsIm1hcmt1cCIsInN0YXJJY29uIiwiSWNvbkNvbXBvbmVudCIsImljb25OYW1lIiwiY3VzdG9tSWNvbiIsImljb25VcmwiLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJFcnJvclJlcG9ydGVyIiwicHJpbnRWZXJib3NlIiwic2VuZFRvU2VydmVyIiwicHJpbnRFcnJvciIsInRvSnNvbiIsIkNvbnNvbGVFcnJvclJlcG9ydGVyIiwiUGVyc2lzdGVudFN0b3JhZ2UiLCJfaGlzdG9yeVRpbWVyIiwiX3VwZGF0ZUxpc3RlbmVyIiwidXBkYXRlTGlzdGVuZXIiLCJfcmVzZXRMaXN0ZW5lciIsInJlc2V0TGlzdGVuZXIiLCJvbnBvcHN0YXRlIiwiX2NhbGxMaXN0ZW5lciIsIm5ld0RhdGEiLCJfdXBkYXRlSGlzdG9yeSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsaXN0ZW5lciIsImFsbFBhcmFtcyIsIlNlYXJjaENvbmZpZyIsImRlZmF1bHRJbml0aWFsU2VhcmNoIiwidmFsaWRhdGUiLCJBdXRvQ29tcGxldGVEYXRhIiwicyIsInIiLCJBdXRvQ29tcGxldGVSZXN1bHQiLCJnZXRJbnZlcnRlZCIsIkF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciIsIkF1dG9Db21wbGV0ZUFwaSIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwidW5pdmVyc2FsT3B0aW9ucyIsInZlcnRpY2FsT3B0aW9ucyIsIk1vY2tBdXRvQ29tcGxldGVTZXJ2aWNlIiwiZW1wdHlSZXN1bHRzIiwiZmlsdGVyT3B0aW9ucyIsIm9wdCIsImxvd2VyY2FzZSIsInJhbmRvbVN0cmluZyIsInJhbmRvbSIsIlF1ZXN0aW9uQW5zd2VyQXBpIiwic2l0ZSIsInF1ZXN0aW9uTGFuZ3VhZ2UiLCJtb2RlIiwiaGVhZGVycyIsIk1vY2tRdWVzdGlvbkFuc3dlclNlcnZpY2UiLCJBUkJJVFJBUllfQlVTSU5FU1NfSUQiLCJNb2NrU2VhcmNoU2VydmljZSIsIl9nZXRNb2NrRGF0YUpzb24iLCJyZXNwIiwidGV4dCIsInVzZU1vY2tEYXRhIiwiZGVsYXllZFJlc3BvbnNlIiwiY29uc3RydWN0VmVydGljYWxSZXNwb25zZSIsInNlY3Rpb24iLCJ2ZXJ0aWNhbE1vZHVsZSIsImZsb29yIiwibW9kaWZ5UmVzdWx0cyIsImdldFJlc3VsdHNGaWx0ZXJlciIsImNvbnN0cnVjdFVuaXZlcnNhbFJlc3BvbnNlIiwiY29uc3VtZXIiLCJtb2RpZnlGbiIsImZpbGxTZWN0aW9uRmllbGRzIiwibWV0YSIsInV1aWQiLCJ1dWlkVjQiLCJmYWlsZWRWZXJ0aWNhbHMiLCJxdWVyeUR1cmF0aW9uTWlsbGlzIiwicmFuZG9tSW50IiwiREVGQVVMVFMiLCJBbnN3ZXJzIiwiY29tcG9uZW50cyIsIl9vblJlYWR5IiwiX2VsaWdpYmxlRm9yQW5hbHl0aWNzIiwiX3NlcnZpY2VzIiwiX2FuYWx5dGljc1JlcG9ydGVyU2VydmljZSIsIm9uU3RhdGVDaGFuZ2UiLCJzZXRBbGwiLCJtb2NrIiwiZ2V0TW9ja1NlcnZpY2VzIiwiZ2V0U2VydmljZXMiLCJzdWJzdHIiLCJzZXRDb3JlIiwic2V0UmVuZGVyZXIiLCJzZXRBbmFseXRpY3NSZXBvcnRlciIsImluaXRTY3JvbGxMaXN0ZW5lciIsIl9zZXREZWZhdWx0SW5pdGlhbFNlYXJjaCIsIm9uUmVhZHkiLCJ1c2VUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZUJ1bmRsZSIsInJlbW92ZUJ5TmFtZSIsIm9wdEluIiwic2V0Q29udmVyc2lvblRyYWNraW5nRW5hYmxlZCIsInNlYXJjaENvbmZpZyIsInByZXBvcHVsYXRlZFF1ZXJ5IiwiZXJyb3JSZXBvcnRlclNlcnZpY2UiLCJkZWJ1ZyIsInN1cHByZXNzRXJyb3JSZXBvcnRzIiwiREVCT1VOQ0VfVElNRSIsInRpbWVvdXQiLCJzZW5kRXZlbnQiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiQU5TV0VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0VBRUE7Ozs7O0FBS0EscUJBQWU7RUFDYkEsRUFBQUEsVUFBVSxFQUFFLFlBREM7RUFFYkMsRUFBQUEsY0FBYyxFQUFFLGdCQUZIO0VBR2JDLEVBQUFBLGVBQWUsRUFBRTtFQUhKLENBQWY7O0VDUEE7TUFFcUJDLFNBQ25CLGtCQUF3QjtFQUFBLE1BQVhDLElBQVcsdUVBQUosRUFBSTs7RUFBQTs7RUFDdEI7Ozs7O0VBS0EsT0FBS0MsSUFBTCxHQUFZRCxJQUFJLENBQUNFLEdBQUwsSUFBWSxJQUF4QjtFQUVBOzs7Ozs7RUFLQSxPQUFLQyxVQUFMLEdBQWtCSCxJQUFJLENBQUNJLFNBQXZCO0VBRUE7Ozs7O0VBSUEsT0FBS0MsT0FBTCxHQUFlTCxJQUFJLENBQUNLLE9BQUwsSUFBZ0IsSUFBL0I7RUFFQTs7Ozs7RUFJQSxPQUFLQyxLQUFMLEdB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