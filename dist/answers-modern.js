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
  var LIB_VERSION = 'v0.9.5';
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

        this._disableLocationUpdateIfGeolocationDenied();

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
                _this2._disableLocationUpdate();
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
    }, {
      key: "_disableLocationUpdateIfGeolocationDenied",
      value: function _disableLocationUpdateIfGeolocationDenied() {
        var _this3 = this;

        if ('permissions' in navigator) {
          navigator.permissions.query({
            name: 'geolocation'
          }).then(function (result) {
            if (result.state === 'denied') {
              _this3._disableLocationUpdate();
            }
          });
        }
      }
    }, {
      key: "_disableLocationUpdate",
      value: function _disableLocationUpdate() {
        this.core.globalStorage["delete"](StorageKeys.GEOLOCATION);
        this._allowUpdate = false;
        this.setState({
          locationDisplayName: this._locationDisplayName,
          accuracy: this._accuracy
        });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdC5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHRmYWN0b3J5LmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlY3Rpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL21vZGVscy9kaXJlY3RhbnN3ZXIuanMiLCJzcmMvY29yZS9tb2RlbHMvbmF2aWdhdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvaGlnaGxpZ2h0ZWR2YWx1ZS5qcyIsInNyYy9jb3JlL21vZGVscy9zcGVsbGNoZWNrLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cy5qcyIsInNyYy9jb3JlL21vZGVscy9keW5hbWljZmlsdGVycy5qcyIsInNyYy9jb3JlL21vZGVscy9zZWFyY2hpbnRlbnRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2xvY2F0aW9uYmlhcy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL2ZpbHRlci5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JzLmpzIiwic3JjL3VpL2RvbS9kb20uanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zdGF0ZS5qcyIsInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvc2VhcmNoL3NlYXJjaGFwaS5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudC5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NyZXBvcnRlci5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9ub29wYW5hbHl0aWNzcmVwb3J0ZXIuanMiLCJzcmMvY29yZS9zdG9yYWdlL21vZHVsZWRhdGEuanMiLCJzcmMvY29yZS9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UuanMiLCJzcmMvY29yZS9pbmRleC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvZmlsdGVyc2VhcmNoY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9zcGVsbGNoZWNrY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2xvY2F0aW9uYmlhc2NvbXBvbmVudC5qcyIsInNyYy9jb3JlL21vZGVscy9mYWNldC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyYm94Y29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9yYW5nZWZpbHRlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZGF0ZXJhbmdlZmlsdGVyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9keW5hbWljZmlsdGVyc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZ2VvbG9jYXRpb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL21hcGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGFnaW5hdGlvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQuanMiLCJzcmMvdWkvaWNvbnMvaWNvbi5qcyIsInNyYy91aS9pY29ucy90aHVtYi5qcyIsInNyYy91aS9pY29ucy9yZWNlaXB0LmpzIiwic3JjL3VpL2ljb25zL3BhbnRoZW9uLmpzIiwic3JjL3VpL2ljb25zL21pYy5qcyIsInNyYy91aS9pY29ucy9kaXJlY3Rpb25zLmpzIiwic3JjL3VpL2ljb25zL2NhbGVuZGFyLmpzIiwic3JjL3VpL2ljb25zL2NhbGxvdXQuanMiLCJzcmMvdWkvaWNvbnMvaW5mby5qcyIsInNyYy91aS9pY29ucy9icmllZmNhc2UuanMiLCJzcmMvdWkvaWNvbnMva2Fib2IuanMiLCJzcmMvdWkvaWNvbnMvcGVyc29uLmpzIiwic3JjL3VpL2ljb25zL21hZ25pZnlpbmdfZ2xhc3MuanMiLCJzcmMvdWkvaWNvbnMvb2ZmaWNlLmpzIiwic3JjL3VpL2ljb25zL2xpbmsuanMiLCJzcmMvdWkvaWNvbnMvd2luZG93LmpzIiwic3JjL3VpL2ljb25zL3Bob25lLmpzIiwic3JjL3VpL2ljb25zL3RhZy5qcyIsInNyYy91aS9pY29ucy9kb2N1bWVudC5qcyIsInNyYy91aS9pY29ucy9jaGV2cm9uLmpzIiwic3JjL3VpL2ljb25zL3N1cHBvcnQuanMiLCJzcmMvdWkvaWNvbnMveWV4dC5qcyIsInNyYy91aS9pY29ucy9waW4uanMiLCJzcmMvdWkvaWNvbnMvZ2Vhci5qcyIsInNyYy91aS9pY29ucy9saWdodF9idWxiLmpzIiwic3JjL3VpL2ljb25zL3N0YXIuanMiLCJzcmMvdWkvaWNvbnMvY2xvc2UuanMiLCJzcmMvdWkvaWNvbnMvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9pY29ucy9pY29uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29uc3QuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyLmpzIiwic3JjL3VpL2luZGV4LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXIuanMiLCJzcmMvY29yZS9lcnJvcnMvY29uc29sZWVycm9ycmVwb3J0ZXIuanMiLCJzcmMvdWkvc3RvcmFnZS9wZXJzaXN0ZW50c3RvcmFnZS5qcyIsInNyYy9jb3JlL21vZGVscy9zZWFyY2hjb25maWcuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL21vY2thdXRvY29tcGxldGVzZXJ2aWNlLmpzIiwic3JjL2NvcmUvc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL21vY2txdWVzdGlvbmFuc3dlcnNlcnZpY2UuanMiLCJzcmMvY29yZS9zZWFyY2gvbW9ja3NlYXJjaHNlcnZpY2UuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgU2VhcmNoU3RhdGVzICovXG5cbi8qKlxuICogU2VhcmNoU3RhdGVzIGlzIGFuIEVOVU0gZm9yIHRoZSB2YXJpb3VzIHN0YWdlcyBvZiBzZWFyY2hpbmcsXG4gKiB1c2VkIHRvIHNob3cgZGlmZmVyZW50IHRlbXBsYXRlc1xuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBQUkVfU0VBUkNIOiAncHJlLXNlYXJjaCcsXG4gIFNFQVJDSF9MT0FESU5HOiAnc2VhcmNoLWxvYWRpbmcnLFxuICBTRUFSQ0hfQ09NUExFVEU6ICdzZWFyY2gtY29tcGxldGUnXG59O1xuIiwiLyoqIEBtb2R1bGUgUmVzdWx0ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF3IHByb2ZpbGUgZGF0YVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYXcgPSBkYXRhLnJhdyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZvcm1hdHRlZCBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZm9ybWF0dGVkID0gZGF0YS5mb3JtYXR0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggbnVtYmVyIG9mIHRoZSByZXN1bHRcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMub3JkaW5hbCA9IGRhdGEub3JkaW5hbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJvZHkgb2YgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgcmVzdWx0IGNhcmQsIGNhbiBjb250YWluIEhUTUxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfCBudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlc3RpbmF0aW9uIGxpbmsgZm9yIHRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5saW5rID0gZGF0YS5saW5rIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgRW50aXR5IElELCBvciBvdGhlciB1bmlxdWUgaWRlbnRpZmllciwgdXNlZCBmb3IgdG8gcG93ZXIgaW50ZXJhY3Rpdml0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1YnRpdGxlIG9uIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1YnRpdGxlID0gZGF0YS5zdWJ0aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIG1vZGlmaWVyLCB1c3VhbGx5IGRlcml2ZWQgZnJvbSB0aGUgdmVydGljYWwgY29uZmlndXJhdGlvbiBJRFxuICAgICAqIFVzZWQgdG8gYXBwbHkgZGlmZmVyZW50IHN0eWxpbmcgdG8gZGlmZmVyZW50IHJlc3VsdCBjYXJkIHR5cGVzXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSBkYXRhLm1vZGlmaWVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxhcmdlIGRhdGUsIG9mIHRoZSBmb3JtYXQgeyBtb250aDogJ0phbicsIGRheTogJzAxJyB9XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuYmlnRGF0ZSA9IGRhdGEuYmlnRGF0ZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW1hZ2UgcHJvZmlsZSBvYmplY3QsIGV4cGVjdGVkIHRvIGhhdmUgYSB1cmwgcHJvcGVydHlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pbWFnZSA9IGRhdGEuaW1hZ2UgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGNhbGxzIHRvIGFjdGlvbiwgb2YgdGhlIGZvcm1hdDpcbiAgICAgKiB7IGljb246ICcnLCB1cmw6ICcnLCB0ZXh0OiAnJywgZXZlbnRUeXBlOiAnJywgZXZlbnRPcHRpb25zOiB7fX1cbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jYWxsc1RvQWN0aW9uID0gZGF0YS5jYWxsc1RvQWN0aW9uIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBhY2NvcmRpYW4gcmVzdWx0IHNob3VsZCBiZSBjb2xsYXBzZWQgYnkgZGVmYXVsdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkID0gZGF0YS5jb2xsYXBzZWQgfHwgdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0RmFjdG9yeSAqL1xuXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0RmFjdG9yeSB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgUmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEluY2x1ZGVzIGRlZmF1bHQgbWFwcGluZ3Mgb2YgR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIHJlc3VsdHMgdG9cbiAgICogdGhlIGZpZWxkcyBleHBvc2VkIGJ5IHRoZSB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHJlc3VsdHNEYXRhICB7QXJyYXl9IGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmb3JtYXR0ZXJzIHRvIGFwcGx5IHRvIHRoZSByZXN1bHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsSWQgVGhlIHZlcnRpY2FsIG9mIHRoZXNlIHJlc3VsdHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBCYWNrZW5kIHNvdXJjZSBvZiB0aGVzZSByZXN1bHRzXG4gICAqIEByZXR1cm5zIHtSZXN1bHRbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXN1bHRzRGF0YSwgZm9ybWF0dGVycywgdmVydGljYWxJZCwgc291cmNlKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPIHVzZSByZXN1bHREYXRhLmhpZ2hsaWdodGVkRmllbGRzIHRvXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVzdWx0RGF0YS5kYXRhIGludG8gaHRtbC1mcmllbmRseSBzdHJpbmdzIHRoYXQgaGlnaGxpZ2h0IHZhbHVlcy5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcblxuICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV07XG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZm9ybWF0dGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgaWYgKGZvcm1hdHRlcnNba2V5XSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0YVtrZXldID0gZm9ybWF0dGVyc1trZXldKHZhbCwgZGF0YSwgdmVydGljYWxJZCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoc291cmNlKSB7XG4gICAgICAgIGNhc2UgJ0dPT0dMRV9DU0UnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdCSU5HX0NTRSc6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdaRU5ERVNLJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tWmVuZGVza1NlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0FMR09MSUEnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21BbGdvbGlhU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR2VuZXJpYyhkYXRhLCBmb3JtYXR0ZWREYXRhLCBpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIGdlbmVyaWMgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEBwYXJhbSBmb3JtYXR0ZWREYXRhXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21HZW5lcmljIChkYXRhLCBmb3JtYXR0ZWREYXRhLCBpbmRleCkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIGZvcm1hdHRlZDogZm9ybWF0dGVkRGF0YSxcbiAgICAgIHRpdGxlOiBmb3JtYXR0ZWREYXRhLm5hbWUgfHwgZGF0YS5uYW1lLFxuICAgICAgZGV0YWlsczogZm9ybWF0dGVkRGF0YS5kZXNjcmlwdGlvbiB8fCB0aGlzLnRydW5jYXRlKGRhdGEuZGVzY3JpcHRpb24pLFxuICAgICAgbGluazogZGF0YS53ZWJzaXRlLFxuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICBvcmRpbmFsOiBpbmRleCArIDFcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEdvb2dsZSBDdXN0b20gU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIHRpdGxlOiBkYXRhLmh0bWxUaXRsZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgJycpLFxuICAgICAgZGV0YWlsczogZGF0YS5odG1sU25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEubGlua1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSByZXN1bHQgdmlldyBtb2RlbC5cbiAgICogTWFwcyB2aWV3IG1vZGVsIGZpZWxkcyBiYXNlZCBvbiB0aGUgQVBJIGRhdGEgZm9yIGEgQmluZyBDdXN0b20gU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5uYW1lLFxuICAgICAgZGV0YWlsczogZGF0YS5zbmlwcGV0LFxuICAgICAgbGluazogZGF0YS51cmxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIFplbmRlc2sgU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIGRldGFpbHM6IGRhdGEuc25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEuaHRtbF91cmxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEFsZ29saWEgU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIERldGFpbHMgZmllbGQgaXMgc2V0IHRvIG9iamVjdElEIHNpbmNlIHJlc3BvbnNlIGhhcyBvbmx5IG9uZSBnZW5lcmFsIGZpZWxkIG9iamVjdElELlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21BbGdvbGlhU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgZGV0YWlsczogZGF0YS5vYmplY3RJRCxcbiAgICAgIGlkOiBkYXRhLm9iamVjdElEXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1bmNhdGVzIHN0cmluZ3MgdG8gMjUwIGNoYXJhY3RlcnMsIGF0dGVtcHRpbmcgdG8gcHJlc2VydmUgd2hvbGUgd29yZHNcbiAgICogQHBhcmFtIHN0ciB7c3RyaW5nfSB0aGUgc3RyaW5nIHRvIHRydW5jYXRlXG4gICAqIEBwYXJhbSBsaW1pdCB7TnVtYmVyfSB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgbGVuZ3RoIHRvIHJldHVyblxuICAgKiBAcGFyYW0gdHJhaWxpbmcge3N0cmluZ30gYSB0cmFpbGluZyBzdHJpbmcgdG8gZGVub3RlIHRydW5jYXRpb24sIGUuZy4gJy4uLidcbiAgICogQHBhcmFtIHNlcCB7c3RyaW5nfSB0aGUgd29yZCBzZXBhcmF0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyB0cnVuY2F0ZSAoc3RyLCBsaW1pdCA9IDI1MCwgdHJhaWxpbmcgPSAnLi4uJywgc2VwID0gJyAnKSB7XG4gICAgaWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA8PSBsaW1pdCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICAvLyBUT0RPIChibWNnaW5uaXMpOiBzcGxpdCBwdW5jdHVhdGlvbiB0b28gc28gd2UgZG9uJ3QgZW5kIHVwIHdpdGggXCJmb28sLi4uXCJcbiAgICBjb25zdCB3b3JkcyA9IHN0ci5zcGxpdChzZXApO1xuICAgIGNvbnN0IG1heCA9IGxpbWl0IC0gdHJhaWxpbmcubGVuZ3RoO1xuICAgIGxldCB0cnVuY2F0ZWQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpXTtcbiAgICAgIGlmICh0cnVuY2F0ZWQubGVuZ3RoICsgd29yZC5sZW5ndGggPiBtYXggfHxcbiAgICAgICAgKGkgIT09IDAgJiYgdHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoICsgc2VwLmxlbmd0aCA+IG1heCkpIHtcbiAgICAgICAgdHJ1bmNhdGVkICs9IHRyYWlsaW5nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdHJ1bmNhdGVkICs9IGkgPT09IDAgPyB3b3JkIDogc2VwICsgd29yZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVkO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWN0aW9uICovXG5cbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IFJlc3VsdEZhY3RvcnkgZnJvbSAnLi9yZXN1bHRmYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChkYXRhLCB1cmwsIGZvcm1hdHRlcnMpIHtcbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHNDb3VudCA9IGRhdGEucmVzdWx0c0NvdW50IHx8IDA7XG4gICAgdGhpcy5lbmNvZGVkU3RhdGUgPSBkYXRhLmVuY29kZWRTdGF0ZSB8fCAnJztcbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBBcHBsaWVkUXVlcnlGaWx0ZXIuZnJvbShkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMpO1xuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBSZXN1bHRGYWN0b3J5LmZyb20oZGF0YS5yZXN1bHRzLCBmb3JtYXR0ZXJzLCB0aGlzLnZlcnRpY2FsQ29uZmlnSWQsIGRhdGEuc291cmNlKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzZWN0aW9uIGZyb20gdGhlIHByb3ZpZGVkIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG1vZHVsZXMgVGhlIHJlc3VsdCBtb2R1bGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgRmllbGQgZm9ybWF0dGVycyBmb3IgcmVzdWx0c1xuICAgKi9cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMpIHtcbiAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuZXcgU2VjdGlvbihtb2R1bGVzLCBudWxsLCBmb3JtYXR0ZXJzKTtcbiAgICB9XG5cbiAgICAvLyBPdXIgc2VjdGlvbnMgc2hvdWxkIGNvbnRhaW4gYSBwcm9wZXJ0eSBvZiBtYXBNYXJrZXIgb2JqZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgbmV3IFNlY3Rpb24oXG4gICAgICAgICAgbW9kdWxlc1tpXSxcbiAgICAgICAgICB1cmxzW21vZHVsZXNbaV0udmVydGljYWxDb25maWdJZF0sXG4gICAgICAgICAgZm9ybWF0dGVyc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9ucztcbiAgfVxufVxuXG5jbGFzcyBBcHBsaWVkUXVlcnlGaWx0ZXIge1xuICAvLyBTdXBwb3J0IGxlZ2FjeSBtb2RlbCBhbmQgbmV3IG1vZGVsIHVudGlsIGZ1bGx5IG1pZ3JhdGVkLlxuICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgdGhlIGxlZnQgZXhwcmVzc2lvbiBkdXJpbmcgYXNzaWdubWVudCB3aGVuIG1pZ3JhdGVkLlxuICBjb25zdHJ1Y3RvciAoYXBwbGllZFF1ZXJ5RmlsdGVyKSB7XG4gICAgdGhpcy5rZXkgPSBhcHBsaWVkUXVlcnlGaWx0ZXIua2V5IHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5S2V5O1xuICAgIHRoaXMudmFsdWUgPSBhcHBsaWVkUXVlcnlGaWx0ZXIudmFsdWUgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChhcHBsaWVkUXVlcnlGaWx0ZXJzKSB7XG4gICAgbGV0IGZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcGxpZWRRdWVyeUZpbHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbHRlcnMucHVzaChuZXcgQXBwbGllZFF1ZXJ5RmlsdGVyKGFwcGxpZWRRdWVyeUZpbHRlcnNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcnM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgbnVsbDtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzZWFyY2gsIHVzZWQgdG8gcmVuZGVyIGRpZmZlcmVudCB0ZW1wbGF0ZXMgYmVmb3JlLCBkdXJpbmcsXG4gICAgICogYW5kIGFmdGVyIGxvYWRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHVuaXZlcnNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IHVybHMgVGhlIHRhYiB1cmxzXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZmllbGQgZm9ybWF0dGVycyB0byB1c2VcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFVuaXZlcnZhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VW5pdmVyc2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGlyZWN0QW5zd2VyIG1vZGVsIGZyb20gdGhlIGdpdmVuIHNlcnZlciBkYXRhIGFuZCBmb3JtYXR0ZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIGRpcmVjdCBhbnN3ZXJcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmb3JtYXR0ZXJzIHRvIGFwcGx5IHRvIHRoaXMgZGlyZWN0IGFuc3dlclxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgY29uc3QgZGF0YSA9IHsgLi4ucmVzcG9uc2UgfTtcbiAgICBjb25zdCB7IGFuc3dlciwgcmVsYXRlZEl0ZW0gfSA9IGRhdGE7XG5cbiAgICBpZiAoYW5zd2VyICYmIGZvcm1hdHRlcnNbYW5zd2VyLmZpZWxkQXBpTmFtZV0pIHtcbiAgICAgIGFuc3dlci52YWx1ZSA9IGZvcm1hdHRlcnNbYW5zd2VyLmZpZWxkQXBpTmFtZV0oXG4gICAgICAgIGFuc3dlci52YWx1ZSxcbiAgICAgICAgcmVsYXRlZEl0ZW0uZGF0YS5maWVsZFZhbHVlcyxcbiAgICAgICAgcmVsYXRlZEl0ZW0udmVydGljYWxDb25maWdJZCxcbiAgICAgICAgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEaXJlY3RBbnN3ZXIoZGF0YSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFIH0sIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBwcm92aWRlZCByZXN1bHRzIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICogQHBhcmFtIHtWZXJ0aWNhbFJlc3VsdHN9IHJlc3VsdHMgdGhlIHJlc3VsdHMgdG8gYXBwZW5kIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICovXG4gIGFwcGVuZCAocmVzdWx0cykge1xuICAgIGNvbnN0IG1lcmdlZCA9IHsgLi4udGhpcyB9O1xuICAgIG1lcmdlZC5yZXN1bHRzID0gdGhpcy5yZXN1bHRzLmNvbmNhdChyZXN1bHRzLnJlc3VsdHMpO1xuICAgIG1lcmdlZC5tYXAubWFwTWFya2VycyA9IHRoaXMubWFwLm1hcE1hcmtlcnMuY29uY2F0KHJlc3VsdHMubWFwLm1hcE1hcmtlcnMpO1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKG1lcmdlZCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHZlcnRpY2FsIHJlc3VsdHMgZnJvbSBzZXJ2ZXIgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UsIG51bGwsIGZvcm1hdHRlcnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBWZXJ0aWNhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VmVydGljYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIaWdobGlnaHRlZFZhbHVlICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgaGlnaGxpZ2h0ZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpZ2hsaWdodGVkVmFsdWUge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgZGF0YS5zaG9ydFZhbHVlIHx8ICcnO1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MgPSBkYXRhLm1hdGNoZWRTdWJzdHJpbmdzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBoaWdobGlnaHRlZCB2YWx1ZSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCAoKSB7XG4gICAgdGhpcy5fc29ydE1hdGNoZWRTdWJzdHJpbmdzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSh0aGlzLnZhbHVlLCB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgaW52ZXJ0ZWQgaGlnaGxpZ2h0ZWQgdmFsdWUgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRJbnZlcnRlZCAoKSB7XG4gICAgdGhpcy5fc29ydE1hdGNoZWRTdWJzdHJpbmdzKCk7XG4gICAgY29uc3QgaW52ZXJ0ZWRTdWJzdHJpbmdzID0gdGhpcy5fZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzKHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRIaWdobGlnaHRlZFZhbHVlKHRoaXMudmFsdWUsIGludmVydGVkU3Vic3RyaW5ncyk7XG4gIH1cblxuICBfc29ydE1hdGNoZWRTdWJzdHJpbmdzICgpIHtcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLm9mZnNldCA8IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEub2Zmc2V0ID4gYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldEludmVydGVkU3Vic3RyaW5ncyAobWF0Y2hlZFN1YnN0cmluZ3MsIHZhbHVlTGVuZ3RoKSB7XG4gICAgY29uc3QgaW52ZXJ0ZWRTdWJzdHJpbmdzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3Vic3RyaW5nID0gbWF0Y2hlZFN1YnN0cmluZ3NbaV07XG4gICAgICBjb25zdCBuZXh0T2Zmc2V0ID0gc3Vic3RyaW5nLm9mZnNldCArIHN1YnN0cmluZy5sZW5ndGg7XG4gICAgICBpZiAoaSA9PT0gMCAmJiBzdWJzdHJpbmcub2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgIGludmVydGVkU3Vic3RyaW5ncy5wdXNoKHsgb2Zmc2V0OiAwLCBsZW5ndGg6IHN1YnN0cmluZy5vZmZzZXQgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZUxlbmd0aCA+IG5leHRPZmZzZXQpIHtcbiAgICAgICAgaW52ZXJ0ZWRTdWJzdHJpbmdzLnB1c2goe1xuICAgICAgICAgIG9mZnNldDogbmV4dE9mZnNldCxcbiAgICAgICAgICBsZW5ndGg6IGkgPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxXG4gICAgICAgICAgICA/IG1hdGNoZWRTdWJzdHJpbmdzW2kgKyAxXS5vZmZzZXQgLSBuZXh0T2Zmc2V0XG4gICAgICAgICAgICA6IHZhbHVlTGVuZ3RoIC0gbmV4dE9mZnNldFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGludmVydGVkU3Vic3RyaW5ncztcbiAgfVxuXG4gIF9idWlsZEhpZ2hsaWdodGVkVmFsdWUgKHZhbCwgaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzKSB7XG4gICAgbGV0IGhpZ2hsaWdodGVkVmFsdWUgPSAnJztcbiAgICBsZXQgbmV4dFN0YXJ0ID0gMDtcblxuICAgIGlmIChoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3RhcnQgPSBOdW1iZXIoaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzW2pdLm9mZnNldCk7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBoaWdobGlnaHRlZFN1YnN0cmluZ3Nbal0ubGVuZ3RoO1xuXG4gICAgICBoaWdobGlnaHRlZFZhbHVlICs9IFt2YWwuc2xpY2UobmV4dFN0YXJ0LCBzdGFydCksICc8c3Ryb25nPicsIHZhbC5zbGljZShzdGFydCwgZW5kKSwgJzwvc3Ryb25nPiddLmpvaW4oJycpO1xuXG4gICAgICBpZiAoaiA9PT0gaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDEgJiYgZW5kIDwgdmFsLmxlbmd0aCkge1xuICAgICAgICBoaWdobGlnaHRlZFZhbHVlICs9IHZhbC5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkVmFsdWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNwZWxsQ2hlY2sgKi9cblxuaW1wb3J0IEhpZ2hsaWdodGVkVmFsdWUgZnJvbSAnLi9oaWdobGlnaHRlZHZhbHVlJztcblxuLyoqXG4gKiBTcGVsbENoZWNrIGlzIHRoZSBjb3JlIHN0YXRlIG1vZGVsXG4gKiB0byBwb3dlciB0aGUgU3BlbGxDaGVjayBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGxDaGVjayB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG9yaWdpbmFsIHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gZGF0YS5xdWVyeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvcnJlY3RlZCBxdWVyeVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb3JyZWN0ZWRRdWVyeSA9IGRhdGEuY29ycmVjdGVkUXVlcnkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb3JyZWN0ZWQgcXVlcnkgd2l0aCBoaWdobGlnaHRlZCB0YWdzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvcnJlY3RlZFF1ZXJ5RGlzcGxheSA9IGRhdGEuY29ycmVjdGVkUXVlcnlEaXNwbGF5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3BlbGwgY2hlY2sgdHlwZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50eXBlID0gZGF0YS50eXBlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgc2hvdyBzcGVsbCBjaGVjayBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnNob3VsZFNob3cgPSB0aGlzLmNvcnJlY3RlZFF1ZXJ5ICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNwZWxsIGNoZWNrIG1vZGVsIGZyb20gdGhlIHByb3ZpZGVkIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzcGVsbCBjaGVjayByZXNwb25zZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgU3BlbGxDaGVjayh7XG4gICAgICBxdWVyeTogcmVzcG9uc2Uub3JpZ2luYWxRdWVyeSxcbiAgICAgIGNvcnJlY3RlZFF1ZXJ5OiByZXNwb25zZS5jb3JyZWN0ZWRRdWVyeSxcbiAgICAgIGNvcnJlY3RlZFF1ZXJ5RGlzcGxheTogbmV3IEhpZ2hsaWdodGVkVmFsdWUocmVzcG9uc2UuY29ycmVjdGVkUXVlcnkpLmdldCgpLFxuICAgICAgdHlwZTogcmVzcG9uc2UudHlwZVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlS2V5cyAqL1xuXG4vKipcbiAqIFN0b3JhZ2VLZXlzIGlzIGFuIEVOVU0gYXJlIGNvbnNpZGVyZWQgdGhlIHJvb3QgY29udGV4dFxuICogZm9yIGhvdyBkYXRhIGlzIHN0b3JlZCBhbmQgc2NvcGVkIGluIHRoZSBzdG9yYWdlLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTkFWSUdBVElPTjogJ25hdmlnYXRpb24nLFxuICBVTklWRVJTQUxfUkVTVUxUUzogJ3VuaXZlcnNhbC1yZXN1bHRzJyxcbiAgVkVSVElDQUxfUkVTVUxUUzogJ3ZlcnRpY2FsLXJlc3VsdHMnLFxuICBBVVRPQ09NUExFVEU6ICdhdXRvY29tcGxldGUnLFxuICBESVJFQ1RfQU5TV0VSOiAnZGlyZWN0LWFuc3dlcicsXG4gIEZJTFRFUjogJ2ZpbHRlcicsXG4gIFFVRVJZOiAncXVlcnknLFxuICBRVUVSWV9JRDogJ3F1ZXJ5LWlkJyxcbiAgRkFDRVRfRklMVEVSOiAnZmFjZXQtZmlsdGVyJyxcbiAgRFlOQU1JQ19GSUxURVJTOiAnZHluYW1pYy1maWx0ZXJzJyxcbiAgUEFSQU1TOiAncGFyYW1zJyxcbiAgR0VPTE9DQVRJT046ICdnZW9sb2NhdGlvbicsXG4gIElOVEVOVFM6ICdpbnRlbnRzJyxcbiAgUVVFU1RJT05fU1VCTUlTU0lPTjogJ3F1ZXN0aW9uLXN1Ym1pc3Npb24nLFxuICBTRUFSQ0hfQ09ORklHOiAnc2VhcmNoLWNvbmZpZycsXG4gIFNFQVJDSF9PRkZTRVQ6ICdzZWFyY2gtb2Zmc2V0JyxcbiAgU1BFTExfQ0hFQ0s6ICdzcGVsbC1jaGVjaycsXG4gIExPQ0FUSU9OX0JJQVM6ICdsb2NhdGlvbi1iaWFzJyxcbiAgU0VTU0lPTlNfT1BUX0lOOiAnc2Vzc2lvbnMtb3B0LWluJ1xufTtcbiIsIi8qKiBAbW9kdWxlIER5bmFtaWNGaWx0ZXJzICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgc2V0IG9mIGR5bmFtaWMgZmlsdGVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVycyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVycyB0aGlzIG1vZGVsIGhvbGRzXG4gICAgICogQHR5cGUge3tsYWJlbDogc3RyaW5nLCBmaWVsZElkOiBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdFtdfX1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlcnMgPSBkYXRhLmZpbHRlcnMgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmdhbml6ZSAnZmFjZXRzJyBmcm9tIHRoZSBhcGkgcmVzcG9uc2UgaW50byBkeW5hbWljIGZpbHRlcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIGR5bmFtaWMgZmlsdGVyIHJlc3BvbnNlIGZyb20gdGhlIGFwaVxuICAgKiBAcmV0dXJucyB7RHluYW1pY0ZpbHRlcnN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgZHluYW1pY0ZpbHRlcnMgPSBmYWNldHMubWFwKGYgPT4gKHtcbiAgICAgIGxhYmVsOiBmWydkaXNwbGF5TmFtZSddLFxuICAgICAgZmllbGRJZDogZlsnZmllbGRJZCddLFxuICAgICAgb3B0aW9uczogZi5vcHRpb25zLm1hcChvID0+ICh7XG4gICAgICAgIGxhYmVsOiBvWydkaXNwbGF5TmFtZSddLFxuICAgICAgICBjb3VudExhYmVsOiBvWydjb3VudCddLFxuICAgICAgICBzZWxlY3RlZDogb1snc2VsZWN0ZWQnXSxcbiAgICAgICAgZmlsdGVyOiBvWydmaWx0ZXInXVxuICAgICAgfSkpXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIG5ldyBEeW5hbWljRmlsdGVycyh7IGZpbHRlcnM6IGR5bmFtaWNGaWx0ZXJzIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hJbnRlbnRzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEludGVudHMge1xuICBjb25zdHJ1Y3RvciAoaW50ZW50cykge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgdG8gZmluZCByZXN1bHRzIGJhc2VkIG9uIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLm5lYXJNZSA9IGludGVudHMubmVhck1lO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgU2VhcmNoSW50ZW50cyBmcm9tIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciByZXNwb25zZSBpbnRlbnRzXG4gICAqIEByZXR1cm5zIHtTZWFyY2hJbnRlbnRzfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgaW50ZW50cyA9IHJlc3BvbnNlIHx8IFtdO1xuXG4gICAgcmV0dXJuIG5ldyBTZWFyY2hJbnRlbnRzKHtcbiAgICAgIG5lYXJNZTogaW50ZW50cy5pbmNsdWRlcygnTkVBUl9NRScpXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uQmlhcyAqL1xuXG4vKipcbiAqIExvY2F0aW9uQmlhcyBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIExvY2F0aW9uQmlhcyBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25CaWFzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYXRpb24gYmlhcyBhY2N1cmFjeSB3aGljaCBhcmUgSVAsIERFVklDRSBhbmQgVU5LTldPTlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hY2N1cmFjeSA9IGRhdGEuYWNjdXJhY3kgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYXRpdHVkZSB1c2VkIGZvciBsb2NhdGlvbiBiaWFzXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxhdGl0dWRlID0gZGF0YS5sYXRpdHVkZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvbmdpdHVkZSB1c2VkIGZvciBsb2NhdGlvbiBiaWFzXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxvbmdpdHVkZSA9IGRhdGEubG9uZ2l0dWRlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYXRpb24gZGlzcGxheSBuYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxvY2F0aW9uRGlzcGxheU5hbWUgPSBkYXRhLmxvY2F0aW9uRGlzcGxheU5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsb2NhdGlvbiBiaWFzIG1vZGVsIGZyb20gdGhlIHByb3ZpZGVkIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBsb2NhdGlvbiBiaWFzIHJlc3BvbnNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbmV3IExvY2F0aW9uQmlhcyh7XG4gICAgICAgIGFjY3VyYWN5OiAnVU5LTk9XTidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTG9jYXRpb25CaWFzKHtcbiAgICAgIGFjY3VyYWN5OiByZXNwb25zZS5hY2N1cmFjeSxcbiAgICAgIGxhdGl0dWRlOiByZXNwb25zZS5sYXRpdHVkZSxcbiAgICAgIGxvbmdpdHVkZTogcmVzcG9uc2UubG9uZ2l0dWRlLFxuICAgICAgbG9jYXRpb25EaXNwbGF5TmFtZTogcmVzcG9uc2UubG9jYXRpb25EaXNwbGF5TmFtZVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IERpcmVjdEFuc3dlciBmcm9tICcuLi9tb2RlbHMvZGlyZWN0YW5zd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL21vZGVscy9uYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgU3BlbGxDaGVjayBmcm9tICcuLi9tb2RlbHMvc3BlbGxjaGVjayc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnMgZnJvbSAnLi4vbW9kZWxzL2R5bmFtaWNmaWx0ZXJzJztcbmltcG9ydCBTZWFyY2hJbnRlbnRzIGZyb20gJy4uL21vZGVscy9zZWFyY2hpbnRlbnRzJztcbmltcG9ydCBMb2NhdGlvbkJpYXMgZnJvbSAnLi4vbW9kZWxzL2xvY2F0aW9uYmlhcyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuSU5URU5UU106IFNlYXJjaEludGVudHMuZnJvbShyZXNwb25zZS5zZWFyY2hJbnRlbnRzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS106IFNwZWxsQ2hlY2suZnJvbShyZXNwb25zZS5zcGVsbENoZWNrKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5MT0NBVElPTl9CSUFTXTogTG9jYXRpb25CaWFzLmZyb20ocmVzcG9uc2UubG9jYXRpb25CaWFzKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5JTlRFTlRTXTogU2VhcmNoSW50ZW50cy5mcm9tKGRhdGEucmVzcG9uc2Uuc2VhcmNoSW50ZW50cyksXG4gICAgICBbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdOiBTcGVsbENoZWNrLmZyb20oZGF0YS5yZXNwb25zZS5zcGVsbENoZWNrKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5MT0NBVElPTl9CSUFTXTogTG9jYXRpb25CaWFzLmZyb20oZGF0YS5yZXNwb25zZS5sb2NhdGlvbkJpYXMpXG4gICAgfTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uICovXG5cbi8qKlxuICogUXVlc3Rpb25TdWJtaXNzaW9uIGlzIHRoZSBjb3JlIHN0YXRlIG1vZGVsXG4gKiB0byBwb3dlciB0aGUgUXVlc3Rpb25TdWJtaXNzaW9uIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblN1Ym1pc3Npb24ge1xuICBjb25zdHJ1Y3RvciAocXVlc3Rpb24gPSB7fSwgZXJyb3JzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGF1dGhvciBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IHF1ZXN0aW9uLm5hbWUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBxdWVzdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5lbWFpbCA9IHF1ZXN0aW9uLmVtYWlsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBwcml2YWN5IHBvbGljeSB3YXMgYXBwcm92ZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnByaXZhY3lQb2xpY3kgPSBxdWVzdGlvbi5wcml2YWN5UG9saWN5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlc3Rpb24gdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXN0aW9uVGV4dCA9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYXRpdmUgcXVlc3Rpb24gbWV0YSBpbmZvcm1hdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvbkRlc2NyaXB0aW9uID0gcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgYW55IGVycm9ycyBhYm91dCB0aGUgcXVlc3Rpb24gc3VibWlzc2lvblxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnMgfHwgbnVsbDtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgc3VibWl0dGVkICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25TdWJtaXR0ZWQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGVycm9ycyAocXVlc3Rpb24sIGVycm9ycykge1xuICAgIHJldHVybiBRdWVzdGlvblN1Ym1pc3Npb24ocXVlc3Rpb24sIGVycm9ycyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlciAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXBpIGZpbHRlciBhbmQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIGVhc2lseSBjb25zdHJ1Y3RpbmcgRmlsdGVycy5cbiAqIFNlZSBodHRwczovL2RldmVsb3Blci55ZXh0LmNvbS9kb2NzL2FwaS1yZWZlcmVuY2UvI29wZXJhdGlvbi9saXN0RW50aXRpZXMgZm9yIHN0cnVjdHVyZSBkZXRhaWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBKU09OIGZvcm1hdCBmaWx0ZXIgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyIGludG8gYSBGaWx0ZXJcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZUZpbHRlciBBIGZpbHRlciBpbiBKU09OIGZvcm1hdCByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZnJvbVJlc3BvbnNlIChyZXNwb25zZUZpbHRlcikge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKEpTT04ucGFyc2UocmVzcG9uc2VGaWx0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgT1Igb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIE9SIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgb3IgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJG9yJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBBTkQgb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIEFORCB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGFuZCAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckYW5kJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9SIGZpbHRlcnMgd2l0aCB0aGUgc2FtZSBrZXlzLCB0aGVuIEFORCB0aGUgcmVzdWx0aW5nIGdyb3Vwc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gZ3JvdXBcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncm91cCAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMpIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGZpbHRlcilbMF07XG4gICAgICBpZiAoIWdyb3Vwc1trZXldKSB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNba2V5XS5wdXNoKGZpbHRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBGaWx0ZXJzID0gW107XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3Qua2V5cyhncm91cHMpKSB7XG4gICAgICBncm91cEZpbHRlcnMucHVzaChncm91cHNbZmllbGRdLmxlbmd0aCA+IDEgPyBGaWx0ZXIub3IoLi4uZ3JvdXBzW2ZpZWxkXSkgOiBncm91cHNbZmllbGRdWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBGaWx0ZXJzLmxlbmd0aCA+IDEgPyBGaWx0ZXIuYW5kKC4uLmdyb3VwRmlsdGVycykgOiBncm91cEZpbHRlcnNbMF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRlcScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbHQnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbGUnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGd0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGdlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBpbmNsdXNpdmUgcmFuZ2UgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlXG4gICAqIEBwYXJhbSB7Kn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgaW5jbHVzaXZlUmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgJyRnZSc6IG1pbixcbiAgICAgICAgJyRsZSc6IG1heFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBleGNsdXNpdmUgcmFuZ2UgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlXG4gICAqIEBwYXJhbSB7Kn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXhjbHVzaXZlUmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgJyRndCc6IG1pbixcbiAgICAgICAgJyRsdCc6IG1heFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBwb3NpdGlvbiBmaWx0ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhdCBUaGUgbGF0aXR1ZGUgb2YgdGhlIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsbmcgVGhlIGxvbmdpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBUaGUgc2VhcmNoIHJhZGl1cyAoaW4gbWV0ZXJzKVxuICAgKi9cbiAgc3RhdGljIHBvc2l0aW9uIChsYXQsIGxuZywgcmFkaXVzKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoJ2J1aWx0aW4ubG9jYXRpb24nLCAnJG5lYXInLCB7IGxhdCwgbG5nLCByYWRpdXMgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZpbHRlciB3aXRoIHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyIFRoZSBtYXRjaGVyIGZvciB0aGUgZmlsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBmaWx0ZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBfZnJvbU1hdGNoZXIgKGZpZWxkLCBtYXRjaGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgW21hdGNoZXJdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9tb2RlbHMvZmlsdGVyJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2VydmljZXMvc2VhcmNoc2VydmljZScpLmRlZmF1bHR9IFNlYXJjaFNlcnZpY2UgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NlcnZpY2VzL2F1dG9jb21wbGV0ZXNlcnZpY2UnKS5kZWZhdWx0fSBBdXRvQ29tcGxldGVTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zZXJ2aWNlcy9xdWVzdGlvbmFuc3dlcnNlcnZpY2UnKS5kZWZhdWx0fSBRdWVzdGlvbkFuc3dlclNlcnZpY2UgKi9cblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlS2V5ID0gY29uZmlnLmV4cGVyaWVuY2VLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2VycyBjb25maWcgdmVyc2lvbiB0byB1c2UgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgbG9jYWxlIHVzZWQgZm9yIGFsbCByZXF1ZXN0cy4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJlblwiIChmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGU7XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiBmaWVsZCBmb3JtYXR0ZXJzIHVzZWQgdG8gZm9ybWF0IHJlc3VsdHMsIGlmIHByZXNlbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkRm9ybWF0dGVycyA9IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBkYXRhIHN0b3JhZ2UgdGhhdCBwb3dlcnMgdGhlIFVJXG4gICAgICogQHR5cGUge0dsb2JhbFN0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2UgPSBjb25maWcuZ2xvYmFsU3RvcmFnZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIHBlcnNpc3RlbnQgc3RvcmFnZVxuICAgICAqIEB0eXBlIHtQZXJzaXN0ZW50U3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGVyc2lzdGVudFN0b3JhZ2UgPSBjb25maWcucGVyc2lzdGVudFN0b3JhZ2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIHNlYXJjaCBBUElcbiAgICAgKiBGb3IgYm90aCB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaFxuICAgICAqIEB0eXBlIHtTZWFyY2hTZXJ2aWNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoZXIgPSBjb25maWcuc2VhcmNoU2VydmljZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgYXV0b2NvbXBsZXRlIEFQSVxuICAgICAqIEZvciBmaWx0ZXIgc2VhcmNoLCB2ZXJ0aWNhbCBhdXRvY29tcGxldGUsIGFuZCB1bml2ZXJzYWwgYXV0b2NvbXBsZXRlXG4gICAgICogQHR5cGUge0F1dG9Db21wbGV0ZVNlcnZpY2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvQ29tcGxldGUgPSBjb25maWcuYXV0b0NvbXBsZXRlU2VydmljZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBRJkEgcmVzdCBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7UXVlc3Rpb25BbnN3ZXJTZXJ2aWNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25BbnN3ZXIgPSBjb25maWcucXVlc3Rpb25BbnN3ZXJTZXJ2aWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5hcHBlbmQgSWYgdHJ1ZSwgYWRkcyB0aGUgcmVzdWx0cyBvZiB0aGlzIHF1ZXJ5IHRvIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgcmVzdWx0cywgZGVmYXVsdHMgZmFsc2VcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgcXVlcnkpIHtcbiAgICBpZiAoIXF1ZXJ5LmFwcGVuZCkge1xuICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBWZXJ0aWNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFNlYXJjaCh2ZXJ0aWNhbEtleSwge1xuICAgICAgICBsaW1pdDogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9DT05GSUcpLmxpbWl0LFxuICAgICAgICBnZW9sb2NhdGlvbjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OKSxcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkOiB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCxcbiAgICAgICAgc2tpcFNwZWxsQ2hlY2s6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSgnc2tpcFNwZWxsQ2hlY2snKSxcbiAgICAgICAgcXVlcnlUcmlnZ2VyOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3F1ZXJ5VHJpZ2dlcicpLFxuICAgICAgICBzZXNzaW9uVHJhY2tpbmdFbmFibGVkOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VTU0lPTlNfT1BUX0lOKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSwgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVtTdG9yYWdlS2V5cy5MT0NBVElPTl9CSUFTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTE9DQVRJT05fQklBUywgZGF0YVtTdG9yYWdlS2V5cy5MT0NBVElPTl9CSUFTXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYWdlIHdpdGhpbiB0aGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBxdWVyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgVGhlIHZlcnRpY2FsIGtleSB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICovXG4gIHZlcnRpY2FsUGFnZSAodmVydGljYWxLZXksIG9mZnNldCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuICAgIHRoaXMudmVydGljYWxTZWFyY2godmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpLFxuICAgICAgaWQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWV9JRCksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlciksXG4gICAgICBvZmZzZXRcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnlTdHJpbmcsIHVybHMpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBVbml2ZXJzYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TUEVMTF9DSEVDSywge30pO1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTE9DQVRJT05fQklBUywge30pO1xuXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudW5pdmVyc2FsU2VhcmNoKHF1ZXJ5U3RyaW5nLCB7XG4gICAgICAgIGdlb2xvY2F0aW9uOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04pLFxuICAgICAgICBza2lwU3BlbGxDaGVjazogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdza2lwU3BlbGxDaGVjaycpLFxuICAgICAgICBxdWVyeVRyaWdnZXI6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSgncXVlcnlUcmlnZ2VyJyksXG4gICAgICAgIHNlc3Npb25UcmFja2luZ0VuYWJsZWQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRVNTSU9OU19PUFRfSU4pXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwb25zZSwgdXJscywgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5JTlRFTlRTLCBkYXRhW1N0b3JhZ2VLZXlzLklOVEVOVFNdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OLCBuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKHtcbiAgICAgICAgICBxdWVzdGlvblRleHQ6IHF1ZXJ5U3RyaW5nXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TUEVMTF9DSEVDSywgZGF0YVtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS10pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkxPQ0FUSU9OX0JJQVMsIGRhdGFbU3RvcmFnZUtleXMuTE9DQVRJT05fQklBU10pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdza2lwU3BlbGxDaGVjaycpO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICB0aGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgIHRoZSBjb25maWcgdG8gc2VyYWNoIGZvciBmaWx0ZXJzIHdpdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5uYW1lc3BhY2UgIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy52ZXJ0aWNhbEtleSB0aGUgdmVydGljYWwga2V5IGZvciB0aGUgY29uZmlnXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuYmFyS2V5ICB0aGUgYmFyIGtleSBmb3IgdGhlIGNvbmZpZyB2MVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMgIHRoZSBzZWFyY2ggcGFyYW1ldGVycyBmb3IgdGhlIGNvbmZpZyB2MlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCBjb25maWcpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7Y29uZmlnLm5hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYSBxdWVzdGlvbiB0byB0aGUgc2VydmVyIGFuZCB1cGRhdGVzIHRoZSB1bmRlcmx5aW5nIHF1ZXN0aW9uIG1vZGVsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBUaGUgcXVlc3Rpb24gb2JqZWN0IHRvIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVzdGlvbi5lbnRpdHlJZCBUaGUgZW50aXR5IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBxdWVzdGlvbiAocmVxdWlyZWQpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5sYW51YWdlIFRoZSBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnNpdGUgVGhlIFwicHVibGlzaGVyXCIgb2YgdGhlIChlLmcuICdGSVJTVF9QQVJUWScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCBUaGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcXVlc3Rpb25cbiAgICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbkFuc3dlclxuICAgICAgLnN1Ym1pdFF1ZXN0aW9uKHF1ZXN0aW9uKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoXG4gICAgICAgICAgU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTixcbiAgICAgICAgICBRdWVzdGlvblN1Ym1pc3Npb24uc3VibWl0dGVkKCkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBxdWVyeSBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeSAocXVlcnkpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBwcm92aWRlZCBxdWVyeSBJRCwgdG8gYmUgdXNlZCBpbiBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5SWQgVGhlIHF1ZXJ5IGlkIHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgcXVlcnlJZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBmaWx0ZXIgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgICAgdGhlIGZpbHRlciB0byBzZXRcbiAgICovXG4gIHNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIHNldEZhY2V0RmlsdGVyIChuYW1lc3BhY2UsIGZpbHRlcikge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRkFDRVRfRklMVEVSfS4ke25hbWVzcGFjZX1gLCBmaWx0ZXIpO1xuICB9XG5cbiAgZW5hYmxlRHluYW1pY0ZpbHRlcnMgKCkge1xuICAgIHRoaXMuX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIHJldHVybiB0aGlzLmdsb2JhbFN0b3JhZ2Uub24oZXZ0LCBtb2R1bGVJZCwgY2IpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNhdXNlZEJ5KSB7XG4gICAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnkgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yXG4gICAgICAgID8gY2F1c2VkQnlcbiAgICAgICAgOiBBbnN3ZXJzQmFzZUVycm9yLmZyb20oY2F1c2VkQnkpO1xuICAgIH1cbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBgJHt0aGlzLmVycm9yTWVzc2FnZX0gKCR7dGhpcy5ib3VuZGFyeX0pYDtcbiAgICBpZiAodGhpcy5jYXVzZWRCeSkge1xuICAgICAgc3RyaW5nICs9IGBcXG4gIENhdXNlZCBCeTogJHt0aGlzLmNhdXNlZEJ5LnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvbmZpZ0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDEsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNBbmFseXRpY3NFcnJvciBpcyB1c2VkIGZvciBlcnJvcnMgd2hlbiByZXBvcnRpbmcgYW5hbHl0aWNzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERPTSAqL1xuXG4vKiBnbG9iYWwgSFRNTEVsZW1lbnQsIEhUTUxEb2N1bWVudCwgV2luZG93LCBFdmVudCAqL1xuXG5sZXQgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbi8qKlxuICogU3RhdGljIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIEFQSS5cbiAqIEBuYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcbiAgc3RhdGljIHNldHVwIChkLCBwKSB7XG4gICAgZG9jdW1lbnQgPSBkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIEhUTUxFbGVtZW50IGZyb20gYW5kIEhUTUwgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlIHRvIGEgRE9NIG5vZGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAoaHRtbCkge1xuICAgIGlmICgnY3JlYXRlUmFuZ2UnIGluIGRvY3VtZW50KSB7XG4gICAgICAvLyBwcmVmZXIgdGhpcyBpbXBsZW1lbnRhdGlvbiBhcyBpdCBoYXMgd2lkZXIgYnJvd3NlciBzdXBwb3J0XG4gICAgICAvLyBhbmQgaXQncyBiZXR0ZXIgcGVyZm9ybWluZy5cbiAgICAgIC8vIHNlZSBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9jb252ZXJ0LWh0bWwtc3RpbmdzLWRvbS1ub2Rlc1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrIHRvIHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBqc2RvbSB0aGF0IGNhdXNlcyB0ZXN0cyB0byBmYWlsXG4gICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20vaXNzdWVzLzM5OVxuICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5ib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5IChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheX0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5QWxsIChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGNsaWVudCBjb2RlIGlzIHVzaW5nIGEgcG9pbnRlciB0byBhIGRvbSBub2RlIGFuZCBpdCdzIG51bGwsIGUuZy4gdGhpcy5fY29udGFpbmVyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdykge1xuICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgfVxuXG4gIHN0YXRpYyBvblJlYWR5IChjYikge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICAgIGNiKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgRE9NLm9uKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGVFbGUgd2lsbCBjcmVhdGUgYSB7SFRNTEVsZW1lbnR9IGFuZCBhcHBseSB0aGUgcHJvcGVydGllcyBhdHRyaWJ1dGVzIHRocm91Z2ggYW4gb2JqZWN0IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZWwgVGhlIGVsZW1lbnQgYHRhZ2AgbmFtZSB0byBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNfZGF0YSBPcHRpb25hbCBhdHRyaWJ1dGVzIHRvIGFwcGx5IHRvIHRoZSBuZXcgSFRNTEVsZW1lbnRcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVFbCAoZWwsIG9wdHNfZGF0YSA9IHt9KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICBsZXQgcHJvcHMgPSBPYmplY3Qua2V5cyhvcHRzX2RhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb3BzW2ldID09PSAnY2xhc3MnKSB7XG4gICAgICAgIERPTS5hZGRDbGFzcyhub2RlLCBvcHRzX2RhdGFbcHJvcHNbaV1dKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVbcHJvcHNbaV1dID0gb3B0c19kYXRhW3Byb3BzW2ldXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmQgKHBhcmVudCwgbm9kZSkge1xuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudCA9IERPTS5xdWVyeShwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgSFRNTCBpbmplY3Rpb24gYXMgd2VsbCBhcyBIVE1MRWxlbWVudCBhcHBlbmRzXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZENsYXNzIChub2RlLCBjbGFzc05hbWUpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnLCcpO1xuICAgIGxldCBsZW4gPSBjbGFzc2VzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZW1wdHkgKHBhcmVudCkge1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBjc3MgKHNlbGVjdG9yLCBzdHlsZXMpIHtcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeShzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIHN0eWxlcykge1xuICAgICAgbm9kZS5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXR0ciAoc2VsZWN0b3IsIGF0dHIsIHZhbCkge1xuICAgIERPTS5xdWVyeShzZWxlY3Rvcikuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIH1cblxuICBzdGF0aWMgYXR0cmlidXRlcyAoc2VsZWN0b3IsIGF0dHJzKSB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cnMpXG4gICAgICAuZm9yRWFjaCgoW2F0dHIsIHZhbF0pID0+IHRoaXMuYXR0cihzZWxlY3RvciwgYXR0ciwgdmFsKSk7XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlciAoc2VsZWN0b3IsIGV2ZW50LCBzZXR0aW5ncykge1xuICAgIGxldCBlID0gbmV3IEV2ZW50KGV2ZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICdidWJibGVzJzogdHJ1ZSxcbiAgICAgICdjYW5jZWxhYmxlJzogdHJ1ZVxuICAgIH0sIHNldHRpbmdzIHx8IHt9KSk7XG5cbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxuICBzdGF0aWMgb24gKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBvbmNlIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIG9mZiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRlbGVnYXRlIChjdHh0LCBzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgbGV0IGVsID0gRE9NLnF1ZXJ5KGN0eHQpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB3aGlsZSAoIXRhcmdldC5pc0VxdWFsTm9kZShlbCkpIHtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGhhbmRsZXIoZXZlbnQsIHRhcmdldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudE1hbmFnZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgcmVnaXN0cnkgaXMgYW4gaW50ZXJuYWwgbWFwLCB0aGF0IGNvbnRhaW5zXG4gICAgICogYWxsIGF2YWlsYWJsZSBjb21wb25lbnQgQ0xBU1NFUyB1c2VkIGZvciBjcmVhdGlvbiBvciBvdmVycmlkZS5cbiAgICAgKiBFYWNoIGNvbXBvbmVudCBjbGFzcyBoYXMgYSB1bmlxdWUgVFlQRSwgd2hpY2ggaXMgdXNlZCBhcyB0aGUga2V5IGZvciB0aGUgcmVnaXN0cnlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIGNvbXBvbmVudHMgaXMgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gY29uc3RydWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBsaWJyYXJ5IGRlcGVuZGVuY3lcbiAgICAgKlxuICAgICAqIFRoZSBDb3JlIGNvbnRhaW5zIGJvdGggdGhlIHN0b3JhZ2UgQU5EIHNlcnZpY2VzIHRoYXQgYXJlIG5lZWRlZCBmb3IgcGVyZm9ybWluZyBvcGVyYXRpb25zXG4gICAgICogbGlrZSBzZWFyY2ggYW5kIGF1dG8gY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBUaGUgc3RvcmFnZSBpcyB0aGUgc291cmNlIG9mIHRydXRoIGZvciB0aGUgc3RhdGUgb2YgQUxMIGNvbXBvbmVudHMuXG4gICAgICogV2hlbmV2ZXIgdGhlIHN0b3JhZ2UgaXMgdXBkYXRlZCwgdGhlIHN0YXRlIGdldHMgcHVzaGVkIGRvd24gdG8gdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuX2NvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByaW1hcnkgcmVuZGVyZXIgdG8gdXNlIGZvciBhbGwgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29yZSAoY29yZSkge1xuICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QW5hbHl0aWNzUmVwb3J0ZXIgKHJlcG9ydGVyKSB7XG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSByZXBvcnRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlcnMgYSBjb21wb25lbnQgdG8gYmUgZWxpZ2libGUgZm9yIGNyZWF0aW9uIGFuZCBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFRoZSBDb21wb25lbnQgQ2xhc3MgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyIChjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUgKGNvbXBvbmVudFR5cGUsIG9wdHMpIHtcbiAgICAvLyBFdmVyeSBjb21wb25lbnQgbmVlZHMgbG9jYWwgYWNjZXNzIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgIC8vIGJlY2F1c2Ugc29tZXRpbWVzIGNvbXBvbmVudHMgaGF2ZSBzdWJjb21wb25lbnRzIHRoYXQgbmVlZCB0byBiZVxuICAgIC8vIGNvbnN0cnVjdGVkIGR1cmluZyBjcmVhdGlvblxuICAgIGxldCBzeXN0ZW1PcHRzID0ge1xuICAgICAgY29yZTogdGhpcy5fY29yZSxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLl9yZW5kZXJlcixcbiAgICAgIGFuYWx5dGljc1JlcG9ydGVyOiB0aGlzLl9hbmFseXRpY3NSZXBvcnRlcixcbiAgICAgIGNvbXBvbmVudE1hbmFnZXI6IHRoaXNcbiAgICB9O1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBpc1R3aW46IHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjb21wb25lbnQgPT4gY29tcG9uZW50LmNvbnN0cnVjdG9yLnR5cGUgPT09IGNvbXBvbmVudFR5cGUpLFxuICAgICAgLi4ub3B0c1xuICAgIH07XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKGNvbmZpZywgc3lzdGVtT3B0cylcbiAgICAgICAgLmluaXQoY29uZmlnKTtcblxuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBnbG9iYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZSAmJiB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChjb21wb25lbnQubW9kdWxlSWQgPT09IHVuZGVmaW5lZCB8fCBjb21wb25lbnQubW9kdWxlSWQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlXG4gICAgICAgIC5vbigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCBmcm9tIHRoZSBsaXN0IG9mIGFjdGl2ZSBjb21wb25lbnRzIGFuZCByZW1vdmVcbiAgICogdGhlIGFzc29jaWF0ZWQgc3RvcmFnZSBldmVudCBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmUgKGNvbXBvbmVudCkge1xuICAgIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZS5vZmYoJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCk7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZEluZGV4KGMgPT4gYy5uYW1lID09PSBjb21wb25lbnQubmFtZSk7XG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbXBuZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQnlOYW1lIChuYW1lKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5uYW1lID09PSBuYW1lKTtcbiAgICBjb21wb25lbnQucmVtb3ZlKCk7XG4gICAgRE9NLmVtcHR5KGNvbXBvbmVudC5fY29udGFpbmVyKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbXBvbmVudCAodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmQoYyA9PiBjLmNvbnN0cnVjdG9yLnR5cGUgPT09IHR5cGUpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZW5kZXJlciAqL1xuXG4vKipcbiAqIFJlbmRlcmVyIGlzIGFuIGFic3RyYWN0IGNsYXNzIHRoYXQgYWxsIFJlbmRlcmVycyBzaG91bGQgZXh0ZW5kIGFuZCBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAvKipcbiAgICogcmVuZGVyIGlzIGEgY29yZSBtZXRob2QgZm9yIGFsbCByZW5kZXJlcnMuXG4gICAqIEFsbCBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgY2xhc3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICByZW5kZXIgKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG5cbiAgfVxuXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG5cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgSGFuZGxlYmFyc1JlbmRlcmVyICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyoqXG4gKiBIYW5kbGViYXJzUmVuZGVyZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZhdGUgaGFuZGxlYmFycyByZW5kZXJlci5cbiAqIEBleHRlbmRzIFJlbmRlcmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZWJhcnNSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IgKHRlbXBsYXRlcyA9IHt9LCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXJcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcHJlLWNvbXBpbGVkIGhhbmRsZWJhcnMgdGVtcGxhdGVzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMgfHwge307XG4gIH1cblxuICBpbml0ICh0ZW1wbGF0ZXMpIHtcbiAgICAvLyBBc3NpZ24gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXIgYW5kIHRlbXBsYXRlcyBiYXNlZCBvblxuICAgIC8vIGluZm9ybWF0aW9uIHByb3ZpZGVkIGZyb20gZXh0ZXJuYWwgZGVwIChpbiBkZWZhdWx0IGNhc2UsIGl0IGNvbWVzIGZyb20gZXh0ZXJuYWwgc2VydmVyIHJlcXVlc3QpXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGI7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgT25jZSB3ZSByZS13cml0ZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIG5ldyBoZWxwZXJzIGxpYnJhcnlcbiAgICAvLyB3ZSBwcm9iYWJseSBkb24ndCBuZWVkIHRoZXNlIGN1c3RvbSBoZWxwZXJzIGFueW1vcmVcbiAgICB0aGlzLl9yZWdpc3RlckN1c3RvbUhlbHBlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlckhlbHBlciBpcyBhIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGV4dGVybmFsIGRlcGVuZGVuY2llcyB0b1xuICAgKiByZWdpc3RlciB0aGVpciBvd24gY3VzdG9tIGhlbHBlcnMgdG8gb3VyIGludGVybmFsIEhhbmRsZWJhcnMgQ29tcGlsZXJcbiAgICovXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMuX2hhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBpbGUgYSBoYW5kbGViYXJzIHRlbXBsYXRlIHNvIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkLFxuICAgKiB1c2luZyB0aGUge0hhbmRsZWJhcnN9IGNvbXBpbGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIGNvbXBpbGVcbiAgICovXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHdpbGwgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgUHJvdmlkZSBlaXRoZXIgYSB0ZW1wbGF0ZU5hbWUgb3IgYSBwcmUtY29tcGlsZWQgdGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSB0byB0aGUgdGVtcGxhdGVcbiAgICovXG4gIHJlbmRlciAoY29uZmlnLCBkYXRhKSB7XG4gICAgLy8gSWYgYSBjdXN0b20gdGVtcGxhdGUgaXMgcHJvdmlkZWQsIHVzZSBpdCxcbiAgICAvLyBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIHRoZSB0ZW1wbGF0ZSBuYW1lXG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBpbnRlcmZhY2Ugc2hvdWxkIHByb2JhYmx5IGJlIGxlc3MgdWdseVxuICAgIGlmIChjb25maWcudGVtcGxhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb25maWcudGVtcGxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbY29uZmlnLnRlbXBsYXRlTmFtZV0oZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQvcmVuZGVyIHRlbXBsYXRlOiAnICsgY29uZmlnLnRlbXBsYXRlTmFtZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyAoKSB7XG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgPT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmbm90ZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxICE9PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdmb3JtYXRQaG9uZU51bWJlcicsIGZ1bmN0aW9uIChwaG9uZU51bWJlclN0cmluZykge1xuICAgICAgdmFyIGNsZWFuZWQgPSAoJycgKyBwaG9uZU51bWJlclN0cmluZykucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgaW50bENvZGUgPSAobWF0Y2hbMV0gPyAnKzEgJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIFtpbnRsQ29kZSwgJygnLCBtYXRjaFsyXSwgJykgJywgbWF0Y2hbM10sICctJywgbWF0Y2hbNF1dLmpvaW4oJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdhc3NpZ24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFvcHRpb25zLmRhdGEucm9vdCkge1xuICAgICAgICBvcHRpb25zLmRhdGEucm9vdCA9IHt9O1xuICAgICAgfVxuXG4gICAgICBsZXQgdiA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB2ID0gdiArIGFyZ3NbaV07XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZGF0YS5yb290W25hbWVdID0gdjtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2pzb24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuYW1lID09PSB1bmRlZmluZWRcbiAgICAgICAgPyAnJ1xuICAgICAgICA6IEpTT04uc3RyaW5naWZ5KG5hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSGFuZGxlYmFyc1JlbmRlcmVyIGZyb20gJy4vaGFuZGxlYmFyc3JlbmRlcmVyJztcblxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhpcyB3aWxsIGNvbnRhaW4gYWxsIGRpZmZlcmVudCB0eXBlcyBvZiByZW5kZXJlcnNcbi8vIEUuZy4gTXVzdGFjaGUsIFNPWSwgSGFuZGxlQmFycywgUmVhY3QsIGV0Yy5cbmV4cG9ydCBjb25zdCBSZW5kZXJlcnMgPSB7XG4gIFNPWTogUmVuZGVyZXIsXG4gIEhhbmRsZWJhcnM6IEhhbmRsZWJhcnNSZW5kZXJlclxufTtcbiIsIi8qKiBAbW9kdWxlIEV2ZW50RW1pdHRlciAqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0YXRlICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vLi4vY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBTdGF0ZSBjb250YWlucyB0aGUgZGF0YSBmb3IgdGhlIGNvbXBvbmVudFxuICogYW5kIGV4cG9zZXMgYW4ge0V2ZW50RW1pdHRlcn0gaW50ZXJmYWNlIHNvIHRoYXQgZXh0ZXJuYWxcbiAqIGRlcGVuZGVuY2llcyBjYW4gbGlzdGVuL2hvb2sgc3Vic2NyaWJlIHRvIG1lc3NhZ2VzL3VwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogTk9URShiaWxseSk6IERvZXMgbm90IGZpcmUgYW4gdXBkYXRlIG1lc3NhZ2VcbiAgICovXG4gIGluaXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgT3B0aW9uYWwsIGlmIHByb3AgaXMgYSB7c3RyaW5nfSwgaXQgd2lsbCBhc3NpZ24gdGhlIHZhbHVlIHRvIHRoYXQgcHJvcGVydHlcbiAgICovXG4gIHNldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZSBlbmFibGVzIHlvdSB0byB1cGRhdGUgYSBzaW5nbGUgcHJvcGVydHksIG9yIGNvbXBsZXRlIHN0YXRlXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYXJndW1lbnRzIHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIElmIHByb3AgaXMgYSB7c3RyaW5nfSwgcHJvdmlkZSBpdHMgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIGlmIChvcHRWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBwcm9wO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ZVtwcm9wXSA9IG9wdFZhbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGE7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIHByb3BlcnRpZXMgdmFsdWUgZnJvbSB0aGUgc3RhdGVcbiAgICogSWYgbm8gcHJvcGVydHkgcHJvdmlkZWQsIHJldHVybiB0aGUgZnVsbCBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0UHJvcCBvcHRpb25hbCBwcm9wZXJ0eSB0byByZXRyaWV2ZVxuICAgKi9cbiAgZ2V0IChvcHRQcm9wKSB7XG4gICAgaWYgKG9wdFByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbb3B0UHJvcF07XG4gIH1cblxuICBoYXMgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbcHJvcF0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzSlNPTiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIdHRwUmVxdWVzdGVyICovXG5cbi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnXG59O1xuXG4vKipcbiAqIEh0dHBSZXF1ZXN0ZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIEFKQVhcbiAqIHJlbGF0ZWQgbWF0dGVycy4gSXQncyB1c2VkIHRvIG1ha2UgYWxsIHR5cGVzIG9mIG5ldHdvcmsgcmVxdWVzdHNcbiAqIGFuZCBleHBvc2VzIGEgcHJvbWlzZSBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBSZXF1ZXN0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgR0VUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIGdldCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChNZXRob2RzLkdFVCwgdGhpcy5lbmNvZGVQYXJhbXModXJsLCBkYXRhKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUE9TVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxQYXJhbXMgVGhlIHBhcmFtcyB0byBlbmNvZGUgaW50byB0aGUgVVJMXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uQm9keSBUaGUgcmVxdWVzdCBib2R5IChqc29uKSB0byBwcm92aWRlIHdpdGggdGhlIFBPU1QgcmVxdWVzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdENvbmZpZyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCB1cmxQYXJhbXMsIGpzb25Cb2R5LCByZXF1ZXN0Q29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgdXJsUGFyYW1zKSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoanNvbkJvZHkpLFxuICAgICAgICBjcmVkZW50aWFsczogdW5kZWZpbmVkXG4gICAgICB9LCByZXF1ZXN0Q29uZmlnKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0IChtZXRob2QsIHVybCwgb3B0cykge1xuICAgIGNvbnN0IHJlcUFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAnbWV0aG9kJzogbWV0aG9kLFxuICAgICAgJ2NyZWRlbnRpYWxzJzogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cyk7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCByZXFBcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgYmVhY29uIHRvIHRoZSBwcm92aWRlZCB1cmwgd2hpY2ggd2lsbCBzZW5kIGEgbm9uLWJsb2NraW5nIHJlcXVlc3RcbiAgICogdG8gdGhlIHNlcnZlciB0aGF0IGlzIGd1YXJhbnRlZWQgdG8gc2VuZCBiZWZvcmUgcGFnZSBsb2FkLiBObyByZXNwb25zZSBpcyByZXR1cm5lZCxcbiAgICogc28gYmVhY29ucyBhcmUgcHJpbWFyaWx5IHVzZWQgZm9yIGFuYWx5dGljcyByZXBvcnRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBzZW5kIHRoZSBiZWFjb24gdG9cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgcGF5bG9hZCB0byBzZW5kIGluIHRoZSBiZWFjb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsbHkgcXVldWVkXG4gICAqL1xuICBiZWFjb24gKHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIGVuY29kZVBhcmFtcyAodXJsLCBwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaGFzUGFyYW0gPSB1cmwuaW5kZXhPZignPycpID4gLTE7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSAnJztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWhhc1BhcmFtKSB7XG4gICAgICAgIGhhc1BhcmFtID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJyYnO1xuICAgICAgfVxuXG4gICAgICBzZWFyY2hRdWVyeSArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKiBUaGUgY3VycmVudCBsaWIgdmVyc2lvbiwgcmVwb3J0ZWQgd2l0aCBlcnJvcnMgYW5kIGFuYWx5dGljcyAqL1xuZXhwb3J0IGNvbnN0IExJQl9WRVJTSU9OID0gJ3YwLjkuNSc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBsaXZlIGFwaSBiYWNrZW5kICovXG5leHBvcnQgY29uc3QgTElWRV9BUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGtub3dsZWRnZSBhcGkgYmFja2VuZCAqL1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2FwaS55ZXh0LmNvbSc7XG5cbi8qKiBUaGUgZGVmYXVsdCB1cmwgZm9yIGNvbXBpbGVkIGNvbXBvbmVudCB0ZW1wbGF0ZXMgKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFRF9URU1QTEFURVNfVVJMID0gYGh0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzLyR7TElCX1ZFUlNJT059L2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzYDtcblxuLyoqIFRoZSBiYXNlIHVybHMgZm9yIHRoZSBhbmFseXRpY3MgYmFja2VuZCAgKi9cbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1NfQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZWFsdGltZWFuYWx5dGljcy55ZXh0LmNvbSc7XG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMX05PX0NPT0tJRSA9ICdodHRwczovL2Fuc3dlcnMueWV4dC1waXhlbC5jb20nO1xuIiwiLyoqIEBtb2R1bGUgU2VhcmNoUGFyYW1zICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuLyoqXG4gKiBTZWFyY2hQYXJhbXMgaXMgYSBjbGFzcyB0byBnZXQgdGhlIHNlYXJjaCBwYXJhbXMgaW4gYSBVUkwuXG4gKiBJdCBpcyBhIHJlcGxhY2VtZW50IGZvciBVUkwuc2VhcmNoUGFyYW1zIGFuZCBVUkxTZWFyY2hQYXJhbXMgZm9yIGJyb3dzZXJzIGxpa2UgSUUxMVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hQYXJhbXMge1xuICBjb25zdHJ1Y3RvciAodXJsKSB7XG4gICAgLyoqXG4gICAgICogTWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gdXJsLCBxdWVyeSBwYXJhbSAtPiB2YWx1ZVxuICAgICAqIE9ubHkgdXNlZCBpZiBVUkxTZWFyY2hQYXJhbXMgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdpbmRvd1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSB7fTtcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LlVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBjcmVhdGVzIGEgbWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1zIGluIGEgZ2l2ZW4gdXJsXG4gICAqIFRoZSBxdWVyeSBwYXJhbSB2YWx1ZXMgYXJlIGRlY29kZWQgYmVmb3JlIGJlaW5nIHB1dCBpbiB0aGUgbWFwXG4gICAqIFRocmVlIHR5cGVzIG9mIGlucHV0IGFyZSBzdXBwb3J0ZWRcbiAgICogICAoMSkgZnVsbCBVUkwgZS5nLiBodHRwOi8vd3d3LnlleHQuY29tLz9xPWhlbGxvXG4gICAqICAgKDIpIHBhcmFtcyB3aXRoID8gZS5nLiA/cT1oZWxsb1xuICAgKiAgICgxKSBwYXJhbXMgd2l0aG91dCA/IGUuZy4gcT1oZWxsb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmxcbiAgICogQHJldHVybnMge09iamVjdH0gbWFwcGluZyBmcm9tIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlIHdoZXJlIHZhbHVlIGlzICcnIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYXJzZSAodXJsKSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSB1cmw7XG5cbiAgICBpZiAoc2VhcmNoID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHVybCBpbnB1dHMgdG8gc3RyaW5nIG9mIHF1ZXJ5IHBhcmFtcyBzZXBhcmF0ZWQgYnkgJlxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHNlYXJjaCA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5VmFsID0gZW5jb2RlZFBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKGtleVZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gU2VhcmNoUGFyYW1zLmRlY29kZShrZXlWYWxbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSBrZXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHBhcmFtIHZhbHVlLCBudWxsIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IChxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGFyYW1zW1N0cmluZyhxdWVyeSldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJhbXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBxdWVyeSBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW0gdXBkYXRlIHdpdGhcbiAgICovXG4gIHNldCAobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLl9wYXJhbXNbU3RyaW5nKG5hbWUpXSA9IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogaGFzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtIGtleSBleGlzdHMgaW4gdGhlIHBhcmFtcyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBwYXJhbSBpcyBpbiB0aGUgcGFyYW1zIG9iamVjdCwgZmFsc2Ugby93XG4gICAqL1xuICBoYXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluIHRoaXMuX3BhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0b1N0cmluZyByZXR1cm5zIGEgdXJsIHdpdGggYWxsIHRoZSBxdWVyeSBwYXJhbXMgaW4gdGhlIHBhcmFtcyBvYmplY3QgKHdpdGhvdXQgYSA/KVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHN0cmluZyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHN0cmluZy5wdXNoKGAke2tleX09JHtTZWFyY2hQYXJhbXMuZW5jb2RlKHRoaXMuX3BhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuICBlbnRyaWVzICgpIHtcbiAgICBsZXQgZW50cmllcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChba2V5LCB0aGlzLl9wYXJhbXNba2V5XV0pO1xuICAgIH1cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgTElWRV9BUElfQkFTRV9VUkwsIExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vdWkvZG9tL3NlYXJjaHBhcmFtcyc7IC8vIFRPRE8gaWRlYWxseSB0aGlzIHdvdWxkIGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtXG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiB1c2VkIGZvciBtYWtpbmcgbmV0d29yayByZXF1ZXN0IGFuZCBoYW5kbGluZyBlcnJvcnNcbiAgICAgKiBAdHlwZSB7SHR0cFJlcXVlc3Rlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlcXVlc3RlciA9IG5ldyBIdHRwUmVxdWVzdGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdHMuYmFzZVVybCB8fCBMSVZFX0FQSV9CQVNFX1VSTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbmRwb2ludCB0byB1c2UgaW4gdGhlIHVybCAoYXBwZW5kZWQgdG8gdGhlIHtiYXNlVXJsfSlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZW5kcG9pbnQgPSBvcHRzLmVuZHBvaW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDE7XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIGRhdGEgcGFyYW1zIHRoYXQgYXJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBvcHRzLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgY3JlYXRlcyBhIG5ldyBgR0VUYCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHJlcXVlc3QgY2xhc3NcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldChcbiAgICAgIHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYmFzZVBhcmFtcygpLCB0aGlzLnNhbml0aXplUGFyYW1zKHRoaXMuX3BhcmFtcykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBwb3N0IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5wb3N0KFxuICAgICAgdGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LFxuICAgICAgdGhpcy5iYXNlUGFyYW1zKCkgLyogdXJsUGFyYW1zICovLFxuICAgICAgdGhpcy5zYW5pdGl6ZVBhcmFtcyh0aGlzLl9wYXJhbXMpIC8qIGpzb25Cb2R5ICovLFxuICAgICAgb3B0cyAvKiByZXF1ZXN0Q29uZmlnICovKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYmFzZVBhcmFtcyAoKSB7XG4gICAgbGV0IGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleSxcbiAgICAgICdqc0xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTlxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICBpZiAodXJsUGFyYW1zLmhhcygnYmV0YScpKSB7XG4gICAgICBiYXNlUGFyYW1zWydiZXRhJ10gPSB1cmxQYXJhbXMuZ2V0KCdiZXRhJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VQYXJhbXM7XG4gIH1cblxuICBzYW5pdGl6ZVBhcmFtcyAocGFyYW1zID0ge30pIHtcbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hBcGkgKi9cblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2VhcmNoc2VydmljZScpLmRlZmF1bHR9IFNlYXJjaFNlcnZpY2UgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzQ29yZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU2VhcmNoQXBpIGlzIHRoZSBBUEkgZm9yIGRvaW5nIHZhcmlvdXMgdHlwZXMgb2Ygc2VhcmNoXG4gKiBvdmVyIHRoZSBuZXR3b3JrIChlLmcuIHZlcnRpY2FsIG9yIHVuaXZlcnNhbClcbiAqXG4gKiBAaW1wbGVtZW50cyB7U2VhcmNoU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbnN3ZXJzIGNvbmZpZyB2ZXJzaW9uIHRvIHVzZSBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uID0gY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gY29uZmlnLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHsgaW5wdXQsIGZpbHRlciwgZmFjZXRGaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGlkLCBnZW9sb2NhdGlvbiwgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsIHNraXBTcGVsbENoZWNrLCBxdWVyeVRyaWdnZXIsIHNlc3Npb25UcmFja2luZ0VuYWJsZWQgfSkge1xuICAgIGlmIChsaW1pdCA+IDUwKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvcmVFcnJvcignUHJvdmlkZWQgc2VhcmNoIGxpbWl0IHVuc3VwcG9ydGVkJywgJ1NlYXJjaEFwaScpO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2ZpbHRlcnMnOiBmaWx0ZXIsXG4gICAgICAgICdmYWNldEZpbHRlcnMnOiBmYWNldEZpbHRlcixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdsaW1pdCc6IGxpbWl0LFxuICAgICAgICAnb2Zmc2V0Jzogb2Zmc2V0LFxuICAgICAgICAnbG9jYXRpb24nOiBnZW9sb2NhdGlvbiA/IGAke2dlb2xvY2F0aW9uLmxhdH0sJHtnZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBnZW9sb2NhdGlvbiA/IGdlb2xvY2F0aW9uLnJhZGl1cyA6IG51bGwsXG4gICAgICAgICdxdWVyeUlkJzogaWQsXG4gICAgICAgICdyZXRyaWV2ZUZhY2V0cyc6IGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkLFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlLFxuICAgICAgICAnc2tpcFNwZWxsQ2hlY2snOiBza2lwU3BlbGxDaGVjayxcbiAgICAgICAgJ3F1ZXJ5VHJpZ2dlcic6IHF1ZXJ5VHJpZ2dlcixcbiAgICAgICAgJ3Nlc3Npb25UcmFja2luZ0VuYWJsZWQnOiBzZXNzaW9uVHJhY2tpbmdFbmFibGVkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB1bml2ZXJzYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCBwYXJhbXMpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICdsb2NhdGlvbic6IHBhcmFtcy5nZW9sb2NhdGlvbiA/IGAke3BhcmFtcy5nZW9sb2NhdGlvbi5sYXR9LCR7cGFyYW1zLmdlb2xvY2F0aW9uLmxuZ31gIDogbnVsbCxcbiAgICAgICAgJ3JhZGl1cyc6IHBhcmFtcy5nZW9sb2NhdGlvbiA/IHBhcmFtcy5nZW9sb2NhdGlvbi5yYWRpdXMgOiBudWxsLFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlLFxuICAgICAgICAnc2tpcFNwZWxsQ2hlY2snOiBwYXJhbXMuc2tpcFNwZWxsQ2hlY2ssXG4gICAgICAgICdxdWVyeVRyaWdnZXInOiBwYXJhbXMucXVlcnlUcmlnZ2VyLFxuICAgICAgICAnc2Vzc2lvblRyYWNraW5nRW5hYmxlZCc6IHBhcmFtcy5zZXNzaW9uVHJhY2tpbmdFbmFibGVkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGFuYWx5dGljcyBldmVudCB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc0V2ZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGxhYmVsKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVwb3J0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmV2ZW50VHlwZSA9IHR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIGJlIHByb3ZpZGVkIGZvciB0aGUgZXZlbnRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCwgQU5BTFlUSUNTX0JBU0VfVVJMX05PX0NPT0tJRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvYW5hbHl0aWNzcmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gQW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlICovXG5cbi8qKlxuICogQ2xhc3MgZm9yIHJlcG9ydGluZyBhbmFseXRpY3MgZXZlbnRzIHRvIHRoZSBzZXJ2ZXIgdmlhIEhUVFBcbiAqXG4gKiBAaW1wbGVtZW50cyB7QW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb3JlLCBleHBlcmllbmNlS2V5LCBleHBlcmllbmNlVmVyc2lvbiwgYnVzaW5lc3NJZCwgZ2xvYmFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVybmFsIGJ1c2luZXNzIGlkZW50aWZpZXIgdXNlZCBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9idXNpbmVzc0lkID0gYnVzaW5lc3NJZDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGV2ZXJ5IGFuYWx5dGljIGV2ZW50IHJlcG9ydGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbE9wdGlvbnMsIHsgZXhwZXJpZW5jZUtleSB9KTtcblxuICAgIC8qKlxuICAgICAqIEJhc2UgVVJMIGZvciB0aGUgYW5hbHl0aWNzIEFQSVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gQU5BTFlUSUNTX0JBU0VfVVJMX05PX0NPT0tJRTtcblxuICAgIGlmIChleHBlcmllbmNlVmVyc2lvbikge1xuICAgICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5leHBlcmllbmNlVmVyc2lvbiA9IGV4cGVyaWVuY2VWZXJzaW9uO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbiB0byBxdWVyeSBpZCB1cGRhdGVzXG4gICAgY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWV9JRCwgaWQgPT4gdGhpcy5zZXRRdWVyeUlkKGlkKSk7XG4gIH1cblxuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICByZXBvcnQgKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBBbmFseXRpY3NFdmVudCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IoJ1RyaWVkIHRvIHNlbmQgaW52YWxpZCBhbmFseXRpY3MgZXZlbnQnLCBldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnQuYWRkT3B0aW9ucyh0aGlzLl9nbG9iYWxPcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgSHR0cFJlcXVlc3RlcigpLmJlYWNvbihcbiAgICAgIGAke3RoaXMuX2Jhc2VVcmx9L3JlYWx0aW1lYW5hbHl0aWNzL2RhdGEvYW5zd2Vycy8ke3RoaXMuX2J1c2luZXNzSWR9YCxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEnOiBldmVudC50b0FwaUV2ZW50KClcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHNldENvbnZlcnNpb25UcmFja2luZ0VuYWJsZWQgKGlzRW5hYmxlZCkge1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBpc0VuYWJsZWQgPyBBTkFMWVRJQ1NfQkFTRV9VUkwgOiBBTkFMWVRJQ1NfQkFTRV9VUkxfTk9fQ09PS0lFO1xuICB9XG59XG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvYW5hbHl0aWNzcmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gQW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlICovXG5cbi8qKlxuICogQGltcGxlbWVudHMge0FuYWx5dGljc1JlcG9ydGVyU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9vcEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHJlcG9ydCAoZXZlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzZXRDb252ZXJzaW9uVHJhY2tpbmdFbmFibGVkIChpc0VuYWJsZWQpIHt9XG59XG4iLCIvKiogQG1vZHVsZSBNb2R1bGVEYXRhICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogTW9kdWxlRGF0YSBpcyB1c2VkIGFzIGEgZ2VuZXJpYyBtb2RlbCBmb3IgU3RvcmFnZS5cbiAqIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBNb2R1bGVEYXRhIHBvd2VycyBhIHNpbmdsZSBjb21wb25lbnQuXG5cbiAqIEEgZGF0YSBtb2RlbCB0aGF0IGV4cG9zZXMgYW4gZXZlbnQgZW1pdHRlciBpbnRlcmZhY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlRGF0YSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgdGhpcy5jYXB0dXJlUHJldmlvdXMoKTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShkYXRhKSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBzaGFsbG93IGVxdWFsaXR5XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gIT09IGRhdGFba2V5XSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhcHR1cmVQcmV2aW91cyAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCArIDEgPiA1KSB7XG4gICAgICB0aGlzLl9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YSBpcyBldmVyIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSB8fCB7fSkpO1xuICB9XG5cbiAgdW5kbyAoKSB7XG4gICAgbGV0IHByZXZpb3VzID0ge307XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByZXZpb3VzID0gSlNPTi5wYXJzZSh0aGlzLl9wcmV2aW91cy5wb3AoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YS5zZXQocHJldmlvdXMpO1xuICB9XG5cbiAgcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR2xvYmFsU3RvcmFnZSAqL1xuXG5pbXBvcnQgTW9kdWxlRGF0YSBmcm9tICcuL21vZHVsZWRhdGEnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIFN0b3JhZ2UgaXMgYSBjb250YWluZXIgYXJvdW5kIGFwcGxpY2F0aW9uIHN0YXRlLlxuICogSXQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIENSVUQgb3BlcmF0aW9ucyBhcyB3ZWxsIGFzIGxpc3RlbmluZ1xuICogZm9yIHN0YXRlZnVsIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lciA9IHt9O1xuICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogY29tcGxldGVseSBvdmVyd3JpdGluZyBhbnkgZXhpc3RpbmcgZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gc2V0XG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byBzZXRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgdGhpcy5faW5pdERhdGFDb250YWluZXIoa2V5LCBkYXRhKTtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0uc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbGwga2V5L3ZhbHVlIHBhaXJzIGluIHRoZSBwcm92aWRlZCBtYXAgdG8gdGhlIHN0b3JhZ2VcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBrZXkvdmFsdWUgcGFpcnMgdG8gc2V0IGluIHRoZSBzdG9yYWdlXG4gICAqL1xuICBzZXRBbGwgKGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgIGlmIChrZXkgPT09IFN0b3JhZ2VLZXlzLlFVRVJZKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXQoa2V5LCB2YWwpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBxdWVyeSBsYXN0IHNpbmNlIGl0IHRyaWdnZXJzIGEgc2VhcmNoXG4gICAgLy8gVE9ETzogbW92ZSBsaXN0ZW5lcnMgdXAgc28gYWxsIG9mIHN0b3JhZ2UgY2FuIGJlIHVwZGF0ZWQgYXQgdGhlIHNhbWUgdGltZVxuICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZXSkge1xuICAgICAgdGhpcy5zZXQoU3RvcmFnZUtleXMuUVVFUlksIGRhdGFbU3RvcmFnZUtleXMuUVVFUlldKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBkZWxldGVcbiAgICovXG4gIGRlbGV0ZSAoa2V5KSB7XG4gICAgLy8gTm90ZTogRG8gd2UgbmVlZCB0byBjbGVhbiB1cCBsaXN0ZW5lcnMgaGVyZT9cbiAgICBkZWxldGUgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgICAgY2I6IGNiXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9uKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vZmYoZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfYXBwbHlGdXR1cmVMaXN0ZW5lcnMgKG1vZHVsZUlkKSB7XG4gICAgbGV0IGZ1dHVyZXMgPSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICAgIGlmICghZnV0dXJlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnV0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGZ1dHVyZSA9IGZ1dHVyZXNbaV07XG4gICAgICB0aGlzLm9uKGZ1dHVyZS5ldmVudCwgbW9kdWxlSWQsIGZ1dHVyZS5jYik7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaEFwaSB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi9hbmFseXRpY3MvYW5hbHl0aWNzcmVwb3J0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOb29wQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2FuYWx5dGljcy9ub29wYW5hbHl0aWNzcmVwb3J0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2R1bGVEYXRhIH0gZnJvbSAnLi9zdG9yYWdlL21vZHVsZWRhdGEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UnO1xuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50ICovXG5cbmltcG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4uL3JlbmRlcmluZy9jb25zdCc7XG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4uLy4uL2NvcmUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci50eXBlO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnRDb250YWluZXIgPSBjb25maWcucGFyZW50Q29udGFpbmVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgKGRhdGEpIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gbmV3IFN0YXRlKGNvbmZpZy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gc3lzdGVtQ29uZmlnLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBzeXN0ZW1Db25maWcuY29tcG9uZW50TWFuYWdlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciwgdXNlZCB0byByZXBvcnQgZXZlbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtBbmFseXRpY3NSZXBvcnRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyID0gc3lzdGVtQ29uZmlnLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IGNvbmZpZy5hbmFseXRpY3NPcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHdoZW4gbW91bnRlZC9yZW5kZXJlZC5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgaWYgKHRoaXMuX3BhcmVudENvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KGNvbmZpZy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnRDb250YWluZXIsIGNvbmZpZy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogY29uZmlnLmNvbnRhaW5lci5zdWJzdHJpbmcoMSwgY29uZmlnLmNvbnRhaW5lci5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgICAgICBET00uYXBwZW5kKHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5fY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGNvbnRhaW5lciBET00gbm9kZTogJyArIGNvbmZpZy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8ge3RoaXMuX2NvbnRhaW5lcn0gbm9kZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBjb25maWcucmVuZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCB7UmVuZGVyZXJ9IHRoYXQgd2lsbCBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gc3lzdGVtQ29uZmlnLnJlbmRlcmVyIHx8IFJlbmRlcmVycy5IYW5kbGViYXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHN0cmluZyB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAgICogSWYgdGhpcyBpcyBsZWZ0IGVtcHR5LCB3ZSBsb29rdXAgdGhlIHRlbXBsYXRlIHRoZSBiYXNlIHRlbXBsYXRlcyB1c2luZyB0aGUgdGVtcGxhdGVOYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUoY29uZmlnLnRlbXBsYXRlKSA6IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGVOYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogVGhpcyBpcyBvbmx5IHVzZWQgaWYgX3RlbXBsYXRlIGlzIGVtcHR5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gY29uZmlnLnRlbXBsYXRlTmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRUZW1wbGF0ZU5hbWUoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBjb25maWcudHJhbnNmb3JtRGF0YSB8fCB0aGlzLnRyYW5zZm9ybURhdGEgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgY3JlYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbkNyZWF0ZSA9IGNvbmZpZy5vbkNyZWF0ZU92ZXJyaWRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5vbkNyZWF0ZSA9IHRoaXMub25DcmVhdGUuYmluZCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBNb3VudGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uTW91bnQgPSBjb25maWcub25Nb3VudE92ZXJyaWRlIHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLm9uTW91bnQgPSB0aGlzLm9uTW91bnQuYmluZCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudHMgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZU92ZXJyaWRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICAgIHRoaXMub25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25DcmVhdGUgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25DcmVhdGUgPSBjb25maWcub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25Nb3VudCBjYWxsYmFja1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnVzZXJPbk1vdW50ID0gY29uZmlnLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25VcGRhdGUgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25VcGRhdGUgPSBjb25maWcub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2RlZmF1bHQnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgICAgdGhpcy51c2VyT25DcmVhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRXJyb3IgaW5pdGlhbGl6aW5nIGNvbXBvbmVudCcsXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudHlwZSxcbiAgICAgICAgZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgdGhpcy51c2VyT25VcGRhdGUoKTtcbiAgICAgICAgdGhpcy51bk1vdW50KCk7XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICAgJ0Vycm9yIHVwZGF0aW5nIGNvbXBvbmVudCcsXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50eXBlLFxuICAgICAgICAgIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9jb25maWdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbm1vdW50IGFuZCByZW1vdmUgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0XG4gICAqIG9mIGFjdGl2ZSBjb21wb25lbnRzXG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQudW5Nb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5vblVuTW91bnQoKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBjb25zdCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWNvbXBvbmVudF06bm90KFtkYXRhLWlzLWNvbXBvbmVudC1tb3VudGVkXSknKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdGUuZ2V0KCkpKSk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQubW91bnQoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIHRoaXMudXNlck9uTW91bnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICAvLyBUZW1wb3JhcnkgZml4IGZvciBwYXNzaW5nIGltbXV0YWJsZSBkYXRhIHRvIHRyYW5zZm9ybURhdGEoKS5cbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQ29tcG9uZW50TW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBjb25zdCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXSB8fCB7fTtcblxuICAgIG9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgICB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hpbGREYXRhLnJldmVyc2UoKTtcbiAgICBjaGlsZERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBkZWJvdW5jZSBkdXJhdGlvbiBmb3IgcmVzaXplIGV2ZW50c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMTAwO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IGNvbmZpZy5kcm9wZG93bkxhYmVsIHx8ICdNb3JlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpY29uIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9IGNvbmZpZy5kcm9wZG93bkljb24gfHwgJ2thYm9iJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlbmRlciBhIHN0YXRpYyBuYXZpZ2F0aW9uIHdpdGggbm8gXCJtb3JlXCIgbWVudVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljID0gY29uZmlnLnN0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogQnJlYWtwb2ludHMgYXQgd2hpY2ggbmF2aWdhdGlvbiBpdGVtcyBtb3ZlIHRvIHRoZSBcIm1vcmVcIiBkcm9wZG93blxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2RlYm91bmNlVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJlZml0TmF2LmJpbmQodGhpcyksIFJFU0laRV9ERUJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIERPTS5vbih3aW5kb3csICdjbGljaycsIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgICAgRE9NLm9uKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyksICdjbGljaycsIHRoaXMudG9nZ2xlTW9yZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZml0TmF2ICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgY29uc3QgbWFpbkxpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY29sbGFwc2VkTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcblxuICAgIGNvbnN0IG5hdldpZHRoID0gbW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpXG4gICAgICA/IGNvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgOiBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtb3JlQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgIGxldCBudW1CcmVha3BvaW50cyA9IHRoaXMuX25hdkJyZWFrcG9pbnRzLmxlbmd0aDtcblxuICAgIC8vIHN1bSBjaGlsZCB3aWR0aHMgaW5zdGVhZCBvZiB1c2luZyBwYXJlbnQncyB3aWR0aCB0byBhdm9pZFxuICAgIC8vIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gICAgbGV0IG1haW5MaW5rc1dpZHRoID0gMDtcbiAgICBmb3IgKGxldCBlbCBvZiBtYWluTGlua3MuY2hpbGRyZW4pIHtcbiAgICAgIG1haW5MaW5rc1dpZHRoICs9IGVsLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoKSB7XG4gICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wdXNoKG1haW5MaW5rc1dpZHRoKTtcbiAgICAgIGNvbnN0IGxhc3RMaW5rID0gbWFpbkxpbmtzLmNoaWxkcmVuLml0ZW0obWFpbkxpbmtzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGxhc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZExpbmtzLnByZXBlbmQobGFzdExpbmspO1xuXG4gICAgICBpZiAobW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChudW1CcmVha3BvaW50cyAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rID0gY29sbGFwc2VkTGlua3MuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgICAgaWYgKGZpcnN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYWluTGlua3MuYXBwZW5kKGZpcnN0TGluayk7XG4gICAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICBudW1CcmVha3BvaW50cy0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGFwc2VkTGlua3MuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoIHx8XG4gICAgICAobnVtQnJlYWtwb2ludHMgPiAwICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgb3Blbk1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGNvbGxhcHNlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKTtcbiAgfVxuXG4gIGNoZWNrT3V0c2lkZUNsaWNrIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy55eHQtTmF2LWNvbnRhaW5lcicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsXG4gICAgICBkcm9wZG93bkljb246IHRoaXMuZHJvcGRvd25JY29uLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpY1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogU2VhcmNoQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGluIG9yZGVyIHRvIGNyZWF0ZVxuICogYSBVSSBTZWFyY2ggZXhwZXJpZW5jZSBmb3IgdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2guXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gY29uZmlnLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBjb25maWcuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZSB8fCAnQW5zd2VycyBVbml2ZXJzYWwgU2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbFRleHQgPSBjb25maWcubGFiZWxUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBzdWJtaXQgYnV0dG9uLCBhbHNvIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0VGV4dCA9IGNvbmZpZy5zdWJtaXRUZXh0IHx8ICdTdWJtaXQnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCBpY29uIGlzIGFuIGljb24gZm9yIHRoZSBzdWJtaXQgYnV0dG9uLCBpZiBwcm92aWRlZCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlXG4gICAgICogc3VibWl0IHRleHQgd2lsbCBiZSB1c2VkIGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRJY29uID0gY29uZmlnLnN1Ym1pdEljb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzaG93IGFuIFwieFwiIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGNsZWFyIHRoZSBjdXJyZW50XG4gICAgICogcXVlcnlcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNsZWFyQnV0dG9uID0gY29uZmlnLmNsZWFyQnV0dG9uID09PSB1bmRlZmluZWRcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBjb25maWcuY2xlYXJCdXR0b247XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGF1dG9mb2N1c2luZyBvbiBsb2FkLCBvcHRpb25hbGx5IG9wZW4gdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqIChwcmVzZXQgcHJvbXB0cylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCA9IGNvbmZpZy5hdXRvY29tcGxldGVPbkxvYWQgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiB0cnVlIGlmIHRoZXJlIGlzIGFub3RoZXIgc2VhcmNoIGJhciBwcmVzZW50IG9uIHRoZSBwYWdlLlxuICAgICAqIFR3aW5zIG9ubHkgdXBkYXRlIHRoZSBxdWVyeSwgYW5kIGRvIG5vdCBzZWFyY2hcbiAgICAgKi9cbiAgICB0aGlzLl9pc1R3aW4gPSBjb25maWcuaXNUd2luO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuUVVFUlksIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgICB0aGlzLnNlYXJjaChxKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRpbWUgYWxsb3dlZCBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBzZWFyY2hlcyB0byBwcmV2ZW50XG4gICAgICogbWFueSBkdXBsaWNhdGUgc2VhcmNoZXMgYmFjay10by1iYWNrXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaENvb2xkb3duID0gY29uZmlnLnNlYXJjaENvb2xkb3duIHx8IDMwMDtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSBhbmQgXCJuZWFyIG1lXCIgaW50ZW50IGlzIGV4cHJlc3NlZCwgcHJvbXB0IHRoZSB1c2VyIGZvciB0aGVpciBnZW9sb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJvbXB0Rm9yTG9jYXRpb24gPSBjb25maWcucHJvbXB0Rm9yTG9jYXRpb24gPT09IHVuZGVmaW5lZFxuICAgICAgPyB0cnVlXG4gICAgICA6IEJvb2xlYW4oY29uZmlnLnByb21wdEZvckxvY2F0aW9uKTtcblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgc2VhcmNoIGNsZWFyIGJ1dHRvblxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IHRoaXMuY2xlYXJCdXR0b24gJiYgdGhpcy5xdWVyeTtcblxuICAgIC8qKlxuICAgICAqIEZvciB2ZXJ0aWNhbCBzZWFyY2ggYmFycywgd2hldGhlciBvciBub3QgdG8gYWxsb3cgZW1wdHkgc2VhcmNoZXMuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbGxvd0VtcHR5U2VhcmNoID0gISFjb25maWcuYWxsb3dFbXB0eVNlYXJjaDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdTZWFyY2hCYXInO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAhPSBudWxsICYmICF0aGlzLnJlZGlyZWN0VXJsKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbikge1xuICAgICAgdGhpcy5pbml0TG9jYXRpb25Qcm9tcHQoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBOT1RFKGFtdWxsaW5ncyk6IElmIGF1dG9jb21wbGV0ZU9uTG9hZCBpcyBmYWxzZSwgd2UgZm9jdXMgdGhlIGlucHV0XG4gICAgLy8gZWxlbWVudCBiZWZvcmUgbG9hZGluZyB0aGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudCBzbyB0aGF0IGl0cyBmb2N1c1xuICAgIC8vIGhhbmRsZXIgd29uJ3QgYmUgdHJpZ2dlcmVkXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmICF0aGlzLnF1ZXJ5ICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRTZWFyY2godGhpcy5fZm9ybUVsKTtcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5jbGVhckJ1dHRvbikge1xuICAgICAgdGhpcy5pbml0Q2xlYXJCdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgIXRoaXMucXVlcnkgJiYgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQpIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICBpbml0Q2xlYXJCdXR0b24gKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LVNlYXJjaEJhci1jbGVhcicpO1xuICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IHRoaXMuX3Nob3dDbGVhckJ1dHRvbiB8fCB0aGlzLnF1ZXJ5O1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCd5eHQtU2VhcmNoQmFyLS1oaWRkZW4nLCAhdGhpcy5fc2hvd0NsZWFyQnV0dG9uKTtcblxuICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCB0aGlzLnF1ZXJ5KTtcbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfSk7XG5cbiAgICBET00ub24odGhpcy5faW5wdXRFbCwgJ2lucHV0JywgZSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKCF0aGlzLl9zaG93Q2xlYXJCdXR0b24gJiYgaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24gPSB0cnVlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3Nob3dDbGVhckJ1dHRvbiAmJiBpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRMb2NhdGlvblByb21wdCAoKSB7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLklOVEVOVFMsIGludGVudCA9PiB7XG4gICAgICBpZiAoIWludGVudC5uZWFyTWUgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04pICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiwge1xuICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICByYWRpdXM6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSB8fCAnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLXdyYXBwZXInKTtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBpbnB1dEVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgICBsZXQgcXVlcnkgPSBpbnB1dEVsLnZhbHVlO1xuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dEVsLmJsdXIoKTtcblxuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueXh0LVNlYXJjaEJhci1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBhdXRvRm9jdXM6IHRoaXMuYXV0b0ZvY3VzICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCksICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcbiAgICovXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICAvLyBEb24ndCBzZWFyY2ggaWYgd2UgcmVjZW50bHkgc2VhcmNoZWQsXG4gICAgLy8gaWYgdGhlcmUncyBubyBxdWVyeSBmb3IgdW5pdmVyc2FsIHNlYXJjaCxcbiAgICAvLyBvciBpZiB0aGlzIGlzIGEgdHdpbiBzZWFyY2hiYXJcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkIHx8XG4gICAgICAoIXF1ZXJ5ICYmICF0aGlzLl92ZXJ0aWNhbEtleSkgfHxcbiAgICAgICghcXVlcnkgJiYgdGhpcy5fdmVydGljYWxLZXkgJiYgIXRoaXMuX2FsbG93RW1wdHlTZWFyY2gpIHx8XG4gICAgICB0aGlzLl9pc1R3aW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgb2Zmc2V0OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKSB8fCAwLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URShiaWxseSkgVGVtcG9yYXJ5IGhhY2sgZm9yIERFTU9cbiAgICAgIC8vIFJlbW92ZSBtZSBhZnRlciB0aGUgZGVtb1xuICAgICAgbGV0IG5hdiA9IHRoaXMuY29tcG9uZW50TWFuYWdlclxuICAgICAgICAuZ2V0QWN0aXZlQ29tcG9uZW50KCdOYXZpZ2F0aW9uJyk7XG5cbiAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBuYXYuZ2V0U3RhdGUoJ3RhYnMnKTtcbiAgICAgICAgbGV0IHVybHMgPSB7fTtcblxuICAgICAgICBpZiAodGFicyAmJiBBcnJheS5pc0FycmF5KHRhYnMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBzdWJtaXRJY29uOiB0aGlzLnN1Ym1pdEljb24sXG4gICAgICBzdWJtaXRUZXh0OiB0aGlzLnN1Ym1pdFRleHQsXG4gICAgICBzaG93Q2xlYXJCdXR0b246IHRoaXMuX3Nob3dDbGVhckJ1dHRvbixcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5IHx8ICcnXG4gICAgfSwgZGF0YSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBGaWx0ZXJTZWFyY2hDb21wb25lbnQgaXMgdXNlZCBmb3IgYXV0b2NvbXBsZXRlIHVzaW5nIHRoZSBGaWx0ZXJTZWFyY2ggYmFja2VuZC5cbiAqIEl0J2xsIGFsbG93IHlvdSB0byBwaWNrIHByZS1zZXQgZmlsdGVycyB0aGF0IGFyZSBzZXR1cCBvbiB0aGUgYmFja2VuZCB3aXRoaW5cbiAqIGEgdmVydGljYWwgc2VhcmNoIGNvbnRleHQuXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgY29uZmlnLmlucHV0S2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlIHRoZSBmaWx0ZXIgdmFsdWUgYnV0IGRvIG5vdCBzZWFyY2ggb24gY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIHRleHQgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFRleHQgPSBjb25maWcuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgcHJvdmlkZWQgcXVlcnlcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IGNvbmZpZy5maWx0ZXIgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBKU09OLnBhcnNlKHRoaXMuZmlsdGVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2hQYXJhbWV0ZXJzID0gdGhpcy5fYnVpbGRTZWFyY2hQYXJhbWV0ZXJzKGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzKTtcblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlclNlYXJjaCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9maWx0ZXJzZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLnl4dC1TZWFyY2hCYXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgc2VhcmNoUGFyYW1ldGVyczogdGhpcy5zZWFyY2hQYXJhbWV0ZXJzLFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0ucXVlcnlgLCBxdWVyeSk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgcGFyYW1zIHRvIGJlXG4gICAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIGZpbHRlciB0byBzdG9yYWdlIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmZpbHRlciA9IEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgdGhpcy5xdWVyeSk7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSB0aGUgdmVydGljYWwgc2VhcmNoIHdpdGggYWxsIHNhdmVkIGZpbHRlcnMgYW5kIHF1ZXJ5LFxuICAgKiBvcHRpb25hbGx5IHJlZGlyZWN0aW5nIGJhc2VkIG9uIGNvbmZpZ1xuICAgKi9cbiAgc2VhcmNoICgpIHtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpO1xuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXG4gICAgfSwgZGF0YSkpO1xuICB9XG5cbiAgX2J1aWxkU2VhcmNoUGFyYW1ldGVycyAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncykge1xuICAgIGxldCBzZWFyY2hQYXJhbWV0ZXJzID0ge1xuICAgICAgc2VjdGlvbmVkOiBmYWxzZSxcbiAgICAgIGZpZWxkczogW11cbiAgICB9O1xuICAgIGlmIChzZWFyY2hQYXJhbWV0ZXJDb25maWdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzZWFyY2hQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5zZWN0aW9uZWQpIHtcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnMuc2VjdGlvbmVkID0gc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5zZWN0aW9uZWQ7XG4gICAgfVxuICAgIHNlYXJjaFBhcmFtZXRlcnMuZmllbGRzID0gdGhpcy5fYnVpbGRGaWVsZHMoc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5maWVsZHMpO1xuICAgIHJldHVybiBzZWFyY2hQYXJhbWV0ZXJzO1xuICB9XG5cbiAgX2J1aWxkRmllbGRzIChmaWVsZENvbmZpZ3MpIHtcbiAgICBpZiAoZmllbGRDb25maWdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRDb25maWdzLm1hcChmYyA9PiAoeyBmZXRjaEVudGl0aWVzOiBmYWxzZSwgLi4uZmMgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBLZXlzID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBTSElGVDogMTYsXG4gIENUUkw6IDE3LFxuICBBTFQ6IDE4LFxuICBFU0NBUEU6IDI3LFxuXG4gIExFRlQ6IDM3LFxuICBSSUdIVDogMzksXG4gIFVQOiAzOCxcblxuICBERUxFVEU6IDQ2LFxuICBET1dOOiA0MCxcbiAgTEVGVF9PU19LRVk6IDkxLFxuICBSSUdIVF9PU19LRVk6IDkyLFxuICBTRUxFQ1RfS0VZOiA5M1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGF1dG9jb21wbGV0ZSBpcyBzaW1wbGUgb3IgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpbHRlclNlYXJjaCA9IG9wdHMuaXNGaWx0ZXJTZWFyY2ggfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGJhcktleWAgaW4gdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHZlcnRpY2FsS2V5YCBvZiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBvcHRzLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgZWwgc2VsZWN0b3IgZm9yIGF1dG8gY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0b3IgZm9yIHRoZSBhdXRvY29tcGxldGUgZWxlbWVudGVzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvY29tcGxldGVFbHMgPSBvcHRzLmF1dG9Db21wbGV0ZUVscyB8fCAnLmpzLXlleHQtYXV0b2NvbWxldGUtb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEtc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke3RoaXMubmFtZX1gO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIHR5cGluZy5cbiAgICAgKiBXZSB1c2UgdGhpcyBmb3IgcmVzZXR0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUgd2hlbiBvdGhlciBpbnRlcmFjdGlvbnMgKGUuZy4gcmVzdWx0IG5hdmlnYXRpb24pXG4gICAgICogY2hhbmdlIGJhc2VkIG9uIGludGVyYWN0aW9ucy4gRm9yIGluc3RhbmNlLCBoaXR0aW5nIGVzY2FwZSBzaG91bGQgcmVzZXQgdGhlIHZhbHVlIHRvIHRoZSBvcmlnaW5hbCB0eXBlZCBxdWVyeS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSBvcHRzLm9yaWdpbmFsUXVlcnkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VjdGlvbiB3ZSdyZSBuYXZpZ2F0aW5nIGluLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCByZXN1bHQgaW5kZXggd2UncmUgbmF2aWdhdGluZyBvbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gb3B0cy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGF1dG9jb21hdGljYWxseSBmb2N1c2VkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkIG9uIGF1dG8gY29tcGxldGUuXG4gICAgICovXG4gICAgdGhpcy5fb25TdWJtaXQgPSBvcHRzLm9uU3VibWl0IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgdGhpcy5fc2VhcmNoUGFyYW1ldGVycyA9IG9wdHMuc2VhcmNoUGFyYW1ldGVycyB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGhhc1Jlc3VsdHM6IHRoaXMuaGFzUmVzdWx0cyhkYXRhKSxcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG9jb21wbGV0ZSwgYXV0b2NvcnJlY3QgJiBzcGVsbGNoZWNrXG4gICAgRE9NLmF0dHJpYnV0ZXMocXVlcnlJbnB1dCwge1xuICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIGF1dG9jb3JyZWN0OiAnb2ZmJyxcbiAgICAgIHNwZWxsY2hlY2s6ICdmYWxzZSdcbiAgICB9KTtcblxuICAgIC8vIFRoZSB1c2VyIGV4aXRzIHRoZSBpbnB1dCwgc28gd2Ugd2FudCB0byByZXNldCB0aGUgc3RhdGUgYW5kIGNsb3NlXG4gICAgLy8gdGhlIGF1dG8gY29tcGxldGVcbiAgICAvLyBUT0RPKGpkZWxlcm1lKTogQ2xvc2UgbG9naWMgdG8gYmUgbW92ZWQgdG8gcGFyZW50XG4gICAgRE9NLm9uKGRvY3VtZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuanMteXh0LUF1dG9Db21wbGV0ZS13cmFwcGVyIConKSB8fCBlLnRhcmdldC5tYXRjaGVzKHRoaXMuX2lucHV0RWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fYXV0b0ZvY3VzKSB7XG4gICAgICBET00ub25jZShxdWVyeUlucHV0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnY2xpY2snLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuRU5URVIsXG4gICAgICBLZXlzLlRBQixcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB7XG4gICAgICAgIG5hbWVzcGFjZTogdGhpcy5uYW1lLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB0aGlzLl9zZWFyY2hQYXJhbWV0ZXJzXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgd2UgaGF2ZSByZXN1bHRzIGluIGFueSBzZWN0aW9uXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhc1Jlc3VsdHMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNlY3Rpb25zID0gZGF0YVsnc2VjdGlvbnMnXTtcbiAgICBpZiAoIXNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IHNlY3Rpb25zW2ldO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2ggJiYgdGhpcy5fcmVzdWx0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+PSAwICYmIHRoaXMuX3Jlc3VsdEluZGV4ID49IDApIHtcbiAgICAgICAgZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5maWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbHVlKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbHVlLCBmaWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3BlbGxDaGVja0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogU3BlbGxDaGVja0NvbXBvbmVudCB3aWxsIHN1cHBvcnQgZGlzcGxheWluZyBzdWdnZXN0aW9uLCBhdXRvY29ycmVjdCBhbmQgY29tYmluZWQobWF5YmUgaW4gdGhlIGZ1dHVyZSlcbiAqIHByb3ZpZGVkIGZyb20gc3BlbGxpbmcgY29ycmVjdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGxDaGVja0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0s7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU3BlbGxDaGVjayc7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc3BlbGxjaGVjayc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgc2hvdWxkU2hvdzogZGF0YS5jb3JyZWN0ZWRRdWVyeSAhPT0gdW5kZWZpbmVkLFxuICAgICAgY29ycmVjdGVkUXVlcnlVcmw6IHRoaXMuX2J1aWxkUmVkaXJlY3RRdWVyeVVybChkYXRhLmNvcnJlY3RlZFF1ZXJ5LCBkYXRhLnR5cGUpLFxuICAgICAgaGVscFRleHQ6IHRoaXMuX2dldEhlbHBUZXh0KGRhdGEudHlwZSlcbiAgICB9LCB2YWwpKTtcbiAgfVxuXG4gIF9idWlsZFJlZGlyZWN0UXVlcnlVcmwgKHF1ZXJ5LCB0eXBlKSB7XG4gICAgaWYgKHF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkudmFsdWUpO1xuICAgIHBhcmFtcy5zZXQoJ3NraXBTcGVsbENoZWNrJywgdHJ1ZSk7XG4gICAgcGFyYW1zLnNldCgncXVlcnlUcmlnZ2VyJywgdHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH1cblxuICBfZ2V0SGVscFRleHQgKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ1NVR0dFU1QnOlxuICAgICAgICByZXR1cm4gJ0RpZCB5b3UgbWVhbjonO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIExvY2F0aW9uQmlhc0NvbXBvbmVudCB3aWxsIHNob3cgdGhlIHVzZXIgd2hlcmUgaXMgdXNlZCBmb3IgbG9jYXRpb24gYmlhcyBhbmQgYWxsb3cgdXNlciB0b1xuICogaW1wcm92ZSBhY2N1cmFjeSB3aXRoIEhUTUw1IGdlb2xvY2F0aW9uLlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbkJpYXNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkxPQ0FUSU9OX0JJQVM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgd2hlbiBsb2NhdGlvbiB1cGRhdGVkLFxuICAgICAqIGEgdW5pdmVyc2FsIHNlYXJjaCB3aWxsIGJlIHRyaWdnZXJlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB1c2VkIGZvciB1cGRhdGluZyBsb2NhdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fdXBkYXRlTG9jYXRpb25FbCA9IGNvbmZpZy51cGRhdGVMb2NhdGlvbkVsIHx8ICcuanMtbG9jYXRpb25CaWFzLXVwZGF0ZS1sb2NhdGlvbic7XG5cbiAgICB0aGlzLl9sb2NhdGlvbkRpc3BsYXlOYW1lID0gJyc7XG5cbiAgICB0aGlzLl9hY2N1cmFjeSA9ICcnO1xuXG4gICAgdGhpcy5fYWxsb3dVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uQmlhcyc7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvbG9jYXRpb25iaWFzJztcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5fYWxsb3dVcGRhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGlzYWJsZUxvY2F0aW9uVXBkYXRlSWZHZW9sb2NhdGlvbkRlbmllZCgpO1xuICAgIERPTS5vbih0aGlzLl91cGRhdGVMb2NhdGlvbkVsLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OLCB7XG4gICAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICAgIHJhZGl1czogcG9zaXRpb24uY29vcmRzLmFjY3VyYWN5XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fZG9TZWFyY2goKTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZUxvY2F0aW9uVXBkYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IFNob3VsZCB3ZSB0aHJvdyBlcnJvciBvciB3YXJuaW5nIGhlcmUgaWYgbm8gZ2VvbG9jYXRpb24/XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgdGhpcy5fbG9jYXRpb25EaXNwbGF5TmFtZSA9IGRhdGEubG9jYXRpb25EaXNwbGF5TmFtZTtcbiAgICB0aGlzLl9hY2N1cmFjeSA9IGRhdGEuYWNjdXJhY3k7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGxvY2F0aW9uRGlzcGxheU5hbWU6IHRoaXMuX2dldExvY2F0aW9uRGlzcGxheU5hbWUoZGF0YSksXG4gICAgICBhY2N1cmFjeVRleHQ6IHRoaXMuX2dldEFjY3VyYWN5SGVscFRleHQoZGF0YS5hY2N1cmFjeSksXG4gICAgICBpc1ByZWNpc2VMb2NhdGlvbjogZGF0YS5hY2N1cmFjeSA9PT0gJ0RFVklDRScgJiYgdGhpcy5fYWxsb3dVcGRhdGUsXG4gICAgICBpc1Vua25vd25Mb2NhdGlvbjogZGF0YS5hY2N1cmFjeSA9PT0gJ1VOS05PV04nLFxuICAgICAgc2hvdWxkU2hvdzogZGF0YS5hY2N1cmFjeSAhPT0gdW5kZWZpbmVkLFxuICAgICAgYWxsb3dVcGRhdGU6IHRoaXMuX2FsbG93VXBkYXRlXG4gICAgfSwgdmFsKSk7XG4gIH1cblxuICBfZ2V0TG9jYXRpb25EaXNwbGF5TmFtZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLmFjY3VyYWN5ID09PSAnVU5LTk9XTicpIHtcbiAgICAgIHJldHVybiAnVW5rbm93biBMb2NhdGlvbic7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmxvY2F0aW9uRGlzcGxheU5hbWU7XG4gIH1cblxuICBfZ2V0QWNjdXJhY3lIZWxwVGV4dCAoYWNjdXJhY3kpIHtcbiAgICBzd2l0Y2ggKGFjY3VyYWN5KSB7XG4gICAgICBjYXNlICdJUCc6XG4gICAgICAgIHJldHVybiAnYmFzZWQgb24geW91ciBpbnRlcm5ldCBhZGRyZXNzJztcbiAgICAgIGNhc2UgJ0RFVklDRSc6XG4gICAgICAgIHJldHVybiAnYmFzZWQgb24geW91ciBkZXZpY2UnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIF9kb1NlYXJjaCAoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpO1xuICAgIGlmICh0aGlzLl92ZXJ0aWNhbEtleSkge1xuICAgICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICAgIDogYWxsRmlsdGVyc1swXTtcbiAgICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG4gICAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgb2Zmc2V0OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKSB8fCAwLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgX2Rpc2FibGVMb2NhdGlvblVwZGF0ZUlmR2VvbG9jYXRpb25EZW5pZWQgKCkge1xuICAgIGlmICgncGVybWlzc2lvbnMnIGluIG5hdmlnYXRvcikge1xuICAgICAgbmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHsgbmFtZTogJ2dlb2xvY2F0aW9uJyB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0ZSA9PT0gJ2RlbmllZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVMb2NhdGlvblVwZGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2Rpc2FibGVMb2NhdGlvblVwZGF0ZSAoKSB7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OKTtcbiAgICB0aGlzLl9hbGxvd1VwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9jYXRpb25EaXNwbGF5TmFtZTogdGhpcy5fbG9jYXRpb25EaXNwbGF5TmFtZSxcbiAgICAgIGFjY3VyYWN5OiB0aGlzLl9hY2N1cmFjeVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGYWNldCAqL1xuXG4vKipcbiAqIE1vZGVsIHJlcHJlc2VudGluZyBhIGZhY2V0IGZpbHRlciB3aXRoIHRoZSBmb3JtYXQgb2ZcbiAqIHtcbiAqICAgXCJmaWVsZF9uYW1lXCI6IFsgRmlsdGVycy4uLiBdLFxuICogICAuLi5cbiAqIH1cbiAqXG4gKiBAc2VlIHtAbGluayBGaWx0ZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBmYWNldCBmaWx0ZXIgZnJvbSBhIGxpc3Qgb2YgRmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gdXNlIGluIHRoaXMgZmFjZXRcbiAgICogQHJldHVybnMge0ZhY2V0fVxuICAgKi9cbiAgc3RhdGljIGZyb21GaWx0ZXJzICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgY29uc3QgZmxhdEZpbHRlcnMgPSBmaWx0ZXJzLmZsYXRNYXAoZiA9PiBmLiRvciB8fCBmKTtcbiAgICBmbGF0RmlsdGVycy5mb3JFYWNoKGYgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZilbMF07XG4gICAgICBpZiAoIWdyb3Vwc1trZXldKSB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNba2V5XS5wdXNoKGYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBGYWNldChncm91cHMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJCb3hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBGYWNldCBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9mYWNldCc7XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBmaWx0ZXJzLCBhbmQgc2VhcmNoZXMgd2l0aCB0aGVtIHdoZW4gYXBwbGllZC5cbiAqIE11bHRpcGxlIEZpbHRlckJveCBjb21wb25lbnRzIHdpbGwgQU5EIHRvZ2V0aGVyIGJ1dCB3aWxsIG5vdCBzaGFyZSBzdGF0ZS5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJCb3hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuZmlsdGVycyB8fCAhKGNvbmZpZy5maWx0ZXJzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyQm94IHJlcXVpcmVzIGZpbHRlcnMgdG8gYmUgcHJvdmlkZWQgYXMgYW4gYXJyYXknLFxuICAgICAgICAnRmlsdGVyQm94Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVycyB0byBkaXNwbGF5IGFuZCBjb250cm9sXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29uZmlncyA9IGNvbmZpZy5maWx0ZXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdHJpZ2dlciBhIHNlYXJjaCBvbiBlYWNoIGNoYW5nZSB0byBhIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoT25DaGFuZ2UgPSBjb25maWcuc2VhcmNoT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3Igb2YgdGhlIGFwcGx5IGJ1dHRvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yID0gY29uZmlnLmFwcGx5QnV0dG9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlcmJveC1hcHBseSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50cyBjcmVhdGVkIGZvciBlYWNoIGZpbHRlciBjb25maWdcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsdGVyIGNvbXBvbmVudHMgaW4gdGhlIGJveFxuICAgICAqIEB0eXBlIHtGaWx0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGZpbHRlcmJveCBjb250YWlucyBkeW5hbWljIGZpbHRlcnMuIFRoaXMgYWZmZWN0cyB0aGVcbiAgICAgKiB0aGUgd2F5IHRoZSBmaWx0ZXJzIGFyZSB1c2VkIGluIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzRHluYW1pYyA9IGNvbmZpZy5pc0R5bmFtaWMgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBmaWx0ZXJzL2ZpbHRlcmJveGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyQm94JztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBmaWx0ZXJDb25maWdzOiB0aGlzLl9maWx0ZXJDb25maWdzLFxuICAgICAgc2hvd0FwcGx5QnV0dG9uOiAhdGhpcy5fc2VhcmNoT25DaGFuZ2VcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyQ29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuICAgICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmcm9tIGNvbmZpZ3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpbHRlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2ZpbHRlckNvbmZpZ3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKGNvbmZpZy50eXBlLCBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlciR7aX1gLFxuICAgICAgICAgIHN0b3JlT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgIGNvbnRhaW5lcjogYC5qcy15ZXh0LWZpbHRlcmJveC1maWx0ZXIke2l9YCxcbiAgICAgICAgICBvbkNoYW5nZTogKGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZShpLCBmaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgIHRoaXMuX2ZpbHRlcnNbaV0gPSBjb21wb25lbnQuZ2V0RmlsdGVyKCk7XG4gICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXBwbHkgYnV0dG9uXG4gICAgaWYgKCF0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3Rvcik7XG5cbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGZpbHRlciBjb21wb25lbnRzIGFsb25nIHdpdGggdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBjdXJyZW50IGZpbHRlcnMgdG8gc3RvcmFnZSB0byBiZSB1c2VkIGluIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NhdmVGaWx0ZXJzVG9TdG9yYWdlICgpIHtcbiAgICBjb25zdCB2YWxpZEZpbHRlcnMgPSB0aGlzLl9maWx0ZXJzLmZpbHRlcihmID0+XG4gICAgICBmICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGYgIT09IG51bGwgJiZcbiAgICAgIE9iamVjdC5rZXlzKGYpLmxlbmd0aCA+IDApO1xuXG4gICAgaWYgKHRoaXMuX2lzRHluYW1pYykge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSBGYWNldC5mcm9tRmlsdGVycyguLi52YWxpZEZpbHRlcnMpO1xuICAgICAgdGhpcy5jb3JlLnNldEZhY2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IHZhbGlkRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi52YWxpZEZpbHRlcnMpXG4gICAgICAgIDogdmFsaWRGaWx0ZXJzWzBdO1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHNlYXJjaCB3aXRoIGFsbCBmaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIF9zZWFyY2ggKCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcblxuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBxdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGxldCBwcmV2aW91c09wdGlvbnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSh0aGlzLm5hbWUpO1xuICAgIGlmICh0eXBlb2YgcHJldmlvdXNPcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJldmlvdXNPcHRpb25zID0gSlNPTi5wYXJzZShwcmV2aW91c09wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHByZXZpb3VzT3B0aW9ucyB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiAoe1xuICAgICAgLi4ubyxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoXG4gICAgICAgID8gc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKG8ubGFiZWwpXG4gICAgICAgIDogby5zZWxlY3RlZFxuICAgIH0pKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250cm9sID0gY29uZmlnLmNvbnRyb2w7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdXNlZCBmb3Igb3B0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IgPSBjb25maWcub3B0aW9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlci1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gYmUgdXNlZCBpbiB0aGUgbGVnZW5kXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhYmVsID0gY29uZmlnLmxhYmVsIHx8ICdGaWx0ZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJPcHRpb25zJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyLCBiYXNlZCBvbiB0aGUgY29udHJvbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gYGNvbnRyb2xzLyR7Y29uZmlnLmNvbnRyb2x9YDtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zLFxuICAgICAgbGFiZWw6IHRoaXMuX2xhYmVsXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKFxuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgYC4ke3RoaXMuX2NvbnRyb2x9LWZpZWxkc2V0YCksXG4gICAgICB0aGlzLl9vcHRpb25TZWxlY3RvcixcbiAgICAgICdjbGljaycsXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbihwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCksIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgICAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZU9wdGlvbiAoaW5kZXgsIHNlbGVjdGVkKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgPT09ICdzaW5nbGVvcHRpb24nKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fb3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IHNlbGVjdGVkOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9uc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zW2luZGV4XSwgeyBzZWxlY3RlZCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBvcHRpb25zXG4gICAqL1xuICBjbGVhciAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3Rvcik7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2ZhbHNlJykpO1xuICAgIHRoaXMuX2FwcGx5RmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYW5kIHJldHVybiB0aGUgRmlsdGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5fb3B0aW9uc1xuICAgICAgLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpXG4gICAgICAubWFwKG8gPT4gby5maWx0ZXJcbiAgICAgICAgPyBvLmZpbHRlclxuICAgICAgICA6IEZpbHRlci5lcXVhbChvLmZpZWxkLCBvLnZhbHVlKSk7XG5cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KHRoaXMubmFtZSwgdGhpcy5fb3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKS5tYXAobyA9PiBvLmxhYmVsKSk7XG4gICAgcmV0dXJuIGZpbHRlcnMubGVuZ3RoID4gMFxuICAgICAgPyBGaWx0ZXIuZ3JvdXAoLi4uZmlsdGVycylcbiAgICAgIDoge307XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJhbmdlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWVsZCB0byBmaWx0ZXIgb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBmaWx0ZXIgdmFsdWUgY2hhbmdlc1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgbGV0IG1pblZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtaW5WYWwgPSBOdW1iZXIucGFyc2VJbnQobWluVmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBtYXhWYWwgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuICAgIGlmICh0eXBlb2YgbWluVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbWF4VmFsID0gTnVtYmVyLnBhcnNlSW50KG1heFZhbCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJhbmdlIHJlcHJlc2VudGVkXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhbmdlID0ge1xuICAgICAgbWluOiBtaW5WYWwgfHwgY29uZmlnLmluaXRpYWxNaW4gfHwgMCxcbiAgICAgIG1heDogbWF4VmFsIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IDEwXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGZvciB0aGUgcmFuZ2UgY29udHJvbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWluIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1heCBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvcmFuZ2VgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1JhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgbWluVmFsdWU6IHRoaXMuX3JhbmdlLm1pbixcbiAgICAgIG1heFZhbHVlOiB0aGlzLl9yYW5nZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LXJhbmdlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBOdW1iZXIucGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNaW4gKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIHZhbHVlKTtcbiAgfVxuXG4gIHNldE1heCAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcmFuZ2Ugc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmFuZ2Uga2V5IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGtleVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yYW5nZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9yYW5nZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9yYW5nZS5tYXgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsdGVyIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIHJldHVybiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX3JhbmdlLm1pbiwgdGhpcy5fcmFuZ2UubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGF0ZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEEgZmlsdGVyIGZvciBhIHJhbmdlIG9mIGRhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBpIGZpZWxkIHRoaXMgZmlsdGVyIGNvbnRyb2xzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSBkYXRlIHJhbmdlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtaW4gZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtYXggZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHVzZWQgd2hlbiBhIGRhdGUgaXMgY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhpcyBmaWx0ZXIgcmVwcmVzZW50cyBhbiBleGNsdXNpdmUgcmFuZ2UsIHJhdGhlciB0aGFuIGFuIGluY2x1c2l2ZSBvbmVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzRXhjbHVzaXZlID0gY29uZmlnLmlzRXhjbHVzaXZlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL2RhdGVgO1xuXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5U3RyaW5nID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtgJHt0b2RheS5nZXRNb250aCgpICsgMX1gLnBhZFN0YXJ0KDIsICcwJyl9LSR7YCR7dG9kYXkuZ2V0RGF0ZSgpfWAucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIGNvbnN0IG1pbkRhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1pbmApO1xuICAgIGNvbnN0IG1heERhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZGF0ZSByYW5nZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGF0ZSA9IHtcbiAgICAgIG1pbjogbWluRGF0ZSB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCB0b2RheVN0cmluZyxcbiAgICAgIG1heDogbWF4RGF0ZSB8fCBjb25maWcuaW5pdGlhbE1heCB8fCB0b2RheVN0cmluZ1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGF0ZVJhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgZGF0ZU1pbjogdGhpcy5fZGF0ZS5taW4sXG4gICAgICBkYXRlTWF4OiB0aGlzLl9kYXRlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtZGF0ZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1pbiBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNaW4gKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXggZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWF4IChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIGRhdGUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBkYXRlIHJhbmdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGRhdGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHJpbmcgZGF0ZSB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fZGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RhdGUsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWluYCwgdGhpcy5fZGF0ZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9kYXRlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhbiBhcGkgZmlsdGVyIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBpZiAodGhpcy5fZGF0ZS5taW4gPT09ICcnIHx8IHRoaXMuX2RhdGUubWF4ID09PSAnJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdXNpdmVcbiAgICAgID8gRmlsdGVyLmV4Y2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpXG4gICAgICA6IEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzIHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRyb2xzIHRvIHVzZSBmb3IgZWFjaCBmaWVsZC4gRWFjaCB0eXBlIG9mIGZpbHRlciBoYXMgYSBkZWZhdWx0XG4gICAgICogJGVxIDogbXVsdGlvcHRpb24gKGNoZWNrYm94KVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZmllbGRDb250cm9scyA9IGNvbmZpZy5maWVsZENvbnRyb2xzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnZmlsdGVycy9keW5hbWljJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEgc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBib3ggdGhhdCBkaXNwbGF5cyB0aGUgZHluYW1pYyBmaWx0ZXJzXG4gICAgICogQHR5cGUge0ZpbHRlckJveENvbXBvbmVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcmJveCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRHluYW1pY0ZpbHRlcnMnO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5jb3JlLmVuYWJsZUR5bmFtaWNGaWx0ZXJzKCk7XG5cbiAgICBpZiAodGhpcy5fZmlsdGVyYm94KSB7XG4gICAgICB0aGlzLl9maWx0ZXJib3gucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHsgZmlsdGVycyB9ID0gdGhpcy5fc3RhdGUuZ2V0KCk7XG5cbiAgICBpZiAoIWZpbHRlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWx0ZXJzID0gZmlsdGVycy5tYXAoZiA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZiwge1xuICAgICAgICB0eXBlOiAnRmlsdGVyT3B0aW9ucycsXG4gICAgICAgIGNvbnRyb2w6IHRoaXMuX2ZpZWxkQ29udHJvbHNbZi5maWVsZElkXSB8fCAnbXVsdGlvcHRpb24nXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICAnRmlsdGVyQm94JyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyYm94YCxcbiAgICAgICAgY29udGFpbmVyOiAnLmpzLXlleHQtZHluYW1pYy1maWx0ZXJzJyxcbiAgICAgICAgc2VhcmNoT25DaGFuZ2U6IHRoaXMuX3NlYXJjaE9uQ2hhbmdlLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcbiAgICAgICAgZmlsdGVyc1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94Lm1vdW50KCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdlb0xvY2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgTUVURVJTX1BFUl9NSUxFID0gMTYwOS4zNDQ7XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIHJhZGl1cywgaW4gbWlsZXMsIGFyb3VuZCB0aGUgdXNlcidzIGxvY2F0aW9uIHRvIGZpbmQgcmVzdWx0cy5cbiAgICogSWYgbG9jYXRpb24gYWNjdXJhY3kgaXMgbG93LCBhIGxhcmdlciByYWRpdXMgbWF5IGJlIHVzZWQgYXV0b21hdGljYWxseVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgcmFkaXVzOiA1MCxcblxuICAvKipcbiAgICogVGhlIHZlcnRpY2FsIGtleSB0byB1c2VcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHZlcnRpY2FsS2V5OiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzdWJtaXRzIGEgc2VhcmNoIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzZWFyY2hPbkNoYW5nZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aXRsZTogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIGRpc3BsYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxhYmVsOiAnTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB1cmwgdG8gc2hvdyBpbiB0aGUgZ2VvIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2VvQnV0dG9uSWNvbjogJycsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvblRleHQ6ICdVc2UgTXkgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IHdoZW4gZ2VvbG9jYXRpb24gaXMgZW5hYmxlZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZW5hYmxlZFRleHQ6ICdDdXJyZW50IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGxvYWRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9hZGluZ1RleHQ6ICdGaW5kaW5nIFlvdXIgTG9jYXRpb24uLi4nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGlmIHRoZSB1c2VyJ3MgbG9jYXRpb24gY2Fubm90IGJlIGZvdW5kXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBlcnJvclRleHQ6ICdDb3VsZCBOb3QgRmluZCBZb3VyIExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgYnV0dG9uU2VsZWN0b3I6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWJ1dHRvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHF1ZXJ5IGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBpbnB1dFNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1pbnB1dCdcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIGJ1dHRvbiB0aGF0IHdoZW4gY2xpY2tlZCBhZGRzIGEgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb0xvY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9LCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgdG8gdXNlIGZvciB0aGUgY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtGaWx0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApIHx8IHt9O1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmZpbHRlciA9IEpTT04ucGFyc2UodGhpcy5maWx0ZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdHZW9Mb2NhdGlvbkZpbHRlcic7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdjb250cm9scy9nZW9sb2NhdGlvbic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGxldCBwbGFjZWhvbGRlciA9ICcnO1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuZ2VvTG9hZGluZykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcubG9hZGluZ1RleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0Vycm9yKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lcnJvclRleHQ7XG4gICAgfVxuICAgIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICB0aXRsZTogdGhpcy5fY29uZmlnLnRpdGxlLFxuICAgICAgZ2VvRW5hYmxlZDogdGhpcy5fZW5hYmxlZCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgbGFiZWxUZXh0OiB0aGlzLl9jb25maWcubGFiZWwsXG4gICAgICBlbmFibGVkVGV4dDogdGhpcy5fY29uZmlnLmVuYWJsZWRUZXh0LFxuICAgICAgbG9hZGluZ1RleHQ6IHRoaXMuX2NvbmZpZy5sb2FkaW5nVGV4dCxcbiAgICAgIGVycm9yVGV4dDogdGhpcy5fY29uZmlnLmVycm9yVGV4dCxcbiAgICAgIGdlb0J1dHRvbkljb246IHRoaXMuX2NvbmZpZy5nZW9CdXR0b25JY29uLFxuICAgICAgZ2VvVmFsdWU6IHRoaXMuX2VuYWJsZWQgfHwgZGF0YS5nZW9Mb2FkaW5nIHx8IGRhdGEuZ2VvRXJyb3IgPyAnJyA6IHRoaXMucXVlcnksXG4gICAgICBnZW9QbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBnZW9CdXR0b25UZXh0OiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2luaXRBdXRvQ29tcGxldGUodGhpcy5fY29uZmlnLmlucHV0U2VsZWN0b3IpO1xuICAgIERPTS5vbih0aGlzLl9jb25maWcuYnV0dG9uU2VsZWN0b3IsICdjbGljaycsICgpID0+IHRoaXMuX3RvZ2dsZUdlb0ZpbHRlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWF1dG9jb21wbGV0ZScsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gRmlsdGVyLmZyb21SZXNwb25zZShmaWx0ZXIpO1xuICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZShxdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3RvZ2dsZUdlb0ZpbHRlciAoKSB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW9FcnJvcjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW9Mb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgcG9zaXRpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKHBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZSgnJywgZmlsdGVyLCBwb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBwcm92aWRlZCBmaWx0ZXIgdW5kZXIgdGhpcyBjb21wb25lbnQncyBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgcXVlcnkgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBmaWx0ZXIgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gVGhlIHBvc2l0aW9uIHRvIHNhdmVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRGF0YVRvU3RvcmFnZSAocXVlcnksIGZpbHRlciwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxdWVyeSk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGZpbHRlcik7XG4gICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiwge1xuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICByYWRpdXM6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdG90YWxGaWx0ZXIgPSBGaWx0ZXIuYW5kKC4uLmZpbHRlcnMpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpO1xuICAgICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpO1xuICAgICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX2NvbmZpZy52ZXJ0aWNhbEtleSwge1xuICAgICAgICBpbnB1dDogc2VhcmNoUXVlcnksXG4gICAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBwb3NpdGlvbiwgY29uc3RydWN0IGEgRmlsdGVyIG9iamVjdFxuICAgKiBAcGFyYW0ge1Bvc3RpdGlvbn0gcG9zaXRpb24gVGhlIHBvc2l0aW9uXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBhY2N1cmFjeSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KGFjY3VyYWN5LCB0aGlzLl9jb25maWcucmFkaXVzICogTUVURVJTX1BFUl9NSUxFKTtcbiAgICByZXR1cm4gRmlsdGVyLnBvc2l0aW9uKGxhdGl0dWRlLCBsb25naXR1ZGUsIHJhZGl1cyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEV2ZW50VHlwZXMgYXJlIGV4cGxpY2l0IHN0cmluZ3MgZGVmaW5lZFxuICogZm9yIHdoYXQgdGhlIHNlcnZlciBleHBlY3RzIGZvciBhbmFseXRpY3MuXG4gKlxuICogQGVudW1cbiAqL1xuY29uc3QgRXZlbnRUeXBlcyA9IHtcbiAgVEhVTUJTX1VQOiAnVEhVTUJTX1VQJyxcbiAgVEhVTUJTX0RPV046ICdUSFVNQlNfRE9XTidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBSZWNpZXZlIHVwZGF0ZXMgZnJvbSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMgaW5kZXhcbiAgICAgKiBAdHlwZSB7U3RvcmFnZUtleX1cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtIHVzZWQgZm9yIHN1Ym1pdHRpbmcgdGhlIGZlZWRiYWNrXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybUVsIHx8ICcuanMtZGlyZWN0QW5zd2VyLWZlZWRiYWNrLWZvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB0aHVtYnMgdXBgIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic1VwU2VsZWN0b3IgPSBjb25maWcudGh1bWJzVXBTZWxlY3RvciB8fCAnLmpzLWRpcmVjdEFuc3dlci10aHVtYlVwJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIGRvd25gIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciA9IGNvbmZpZy50aHVtYnNEb3duU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJEb3duJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwbGF5IHRleHQgZm9yIHRoZSBWaWV3IERldGFpbHMgY2xpY2sgdG8gYWN0aW9uIGxpbmtcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZpZXdEZXRhaWxzVGV4dCA9IGNvbmZpZy52aWV3RGV0YWlsc1RleHQgfHwgJ1ZpZXcgRGV0YWlscyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9kaXJlY3RhbnN3ZXInO1xuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50LCBvbmx5IGRpc3BsYXkgdGhlIGRpcmVjdCBhbnN3ZXIgY29tcG9uZW50IGlmIGl0IGhhcyBkYXRhXG4gICAqL1xuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIERPTSBpcyBjb25zdHJ1Y3RlZCxcbiAgICogd2Ugd2FudCB0byB3aXJlIHVwIHRoZSBiZWhhdmlvciBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVhbGl0eSBmZWVkYmFjayByZXBvcnRpbmcgKHRodW1ic3VwL2Rvd24pXG4gICAqL1xuICBvbk1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBiaW5kaW5ncyBpZiB0aGUgZmVlZGJhY2sgaGFzIHByZXZpb3VzbHkgYmVlbiBzdWJtaXR0ZWRcbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgnZmVlZGJhY2tTdWJtaXR0ZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRm9yIFdDQUcgY29tcGxpYW5jZSwgdGhlIGZlZWRiYWNrIHNob3VsZCBiZSBhIHN1Ym1pdHRhYmxlIGZvcm1cbiAgICBET00ub24odGhpcy5fZm9ybUVsLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGxldCBmb3JtRWwgPSBlLnRhcmdldDtcbiAgICAgIGxldCBjaGVja2VkVmFsdWUgPSBET00ucXVlcnkoZm9ybUVsLCAnaW5wdXQ6Y2hlY2tlZCcpLnZhbHVlID09PSAndHJ1ZSc7XG5cbiAgICAgIHRoaXMucmVwb3J0UXVhbGl0eShjaGVja2VkVmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICdmZWVkYmFja1N1Ym1pdHRlZCc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSXMgdGhpcyBhY3R1YWxseSBuZWNlc3Nhcnk/IEkgZ3Vlc3MgaXQncyBvbmx5IG5lY2Vzc2FyeSBpZiB0aGVcbiAgICAvLyBzdWJtaXQgYnV0dG9uIGlzIGhpZGRlbi5cbiAgICBET00ub24odGhpcy5fdGh1bWJzVXBTZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4geyBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTsgfSk7XG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4geyBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTsgfSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgZW5hYmxlcyBmb3IgcGFydGlhbCB1cGRhdGVzICh0aGUgZGVsdGEgYmV0d2VlbiB0aGUgb2xkIGFuZCBuZXcpXG4gICAqIEB0eXBlIHtvYmplY3R9IFRoZSBuZXcgc3RhdGUgdG8gYXBwbHkgdG8gdGhlIG9sZFxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKHN0YXRlID0ge30pIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0U3RhdGUoKSwgc3RhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhKSxcbiAgICAgIHZpZXdEZXRhaWxzVGV4dDogdGhpcy5fdmlld0RldGFpbHNUZXh0XG4gICAgfSkpO1xuICB9XG5cbiAgZXZlbnRPcHRpb25zIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiBkYXRhLnJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogJ1VOSVZFUlNBTCcsXG4gICAgICBlbnRpdHlJZDogZGF0YS5yZWxhdGVkSXRlbS5kYXRhLmlkLFxuICAgICAgY3RhTGFiZWw6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0UXVhbGl0eSB3aWxsIHNlbmQgdGhlIHF1YWxpdHkgZmVlZGJhY2sgdG8gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHb29kIHRydWUgaWYgdGhlIGFuc3dlciBpcyB3aGF0IHlvdSB3ZXJlIGxvb2tpbmcgZm9yXG4gICAqL1xuICByZXBvcnRRdWFsaXR5IChpc0dvb2QpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBpc0dvb2QgPT09IHRydWUgPyBFdmVudFR5cGVzLlRIVU1CU19VUCA6IEV2ZW50VHlwZXMuVEhVTUJTX0RPV047XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQoZXZlbnRUeXBlKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICAnZGlyZWN0QW5zd2VyJzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbENvbmZpZ0lkIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQgPSBvcHRzLnZlcnRpY2FsQ29uZmlnSWQ7XG5cbiAgICAvKipcbiAgICAgKiBpc1VuaXZlcnNhbCBpcyB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlbiBhbmQgaXMgc2V0IHRvXG4gICAgICogdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhZGRlZCBieSB0aGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNVbml2ZXJzYWwgPSBvcHRzLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Jlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdGl0bGUgbGlua1xuICAgKiBAcGFyYW0gZW50aXR5SWQgVGhlIElEIG9mIHRoZSByZXN1bHQgaXRlbSwgaWYgcHJlc2VudFxuICAgKiBAcGFyYW0gdXJsIFRoZSB1cmwgb2YgdGhlIHJlc3VsdCBpdGVtLCBpZiBwcmVzZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBldmVudE9wdGlvbnMgKGVudGl0eUlkLCB1cmwpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZCxcbiAgICAgIHNlYXJjaGVyOiB0aGlzLl9pc1VuaXZlcnNhbCA/ICdVTklWRVJTQUwnIDogJ1ZFUlRJQ0FMJ1xuICAgIH07XG5cbiAgICBpZiAoZW50aXR5SWQpIHtcbiAgICAgIG9wdGlvbnMuZW50aXR5SWQgPSBlbnRpdHlJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhc3NlcyBldmVudE9wdGlvbnMgdG8gdGhlIHZpZXdNb2RlbFxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdHNJdGVtQ29tcG9uZW50fVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKGRhdGEuaWQsIGRhdGEubGluaylcbiAgICB9KSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbUNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtQ29uZmlnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcFByb3ZpZGVyICovXG5cbi8qKlxuICogQSBNYXBQcm92aWRlciBpcyBhbiBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHRoYXQgc2hvdWxkIGJlIGltcGxlbWVudGVkXG4gKiBpbiBvcmRlciB0byBpbnRlZ3JhdGUgd2l0aCBhIFRoaXJkIFBhcnR5IE1hcCBwcm92aWRlciBmb3JcbiAqIGludGVyYWN0aXZlIG1hcHMuIE1hcFByb3ZpZGVycyBhcmUgdXNlZCBieSB0aGUgTWFwQ29tcG9uZW50LlxuICpcbiAqIEltcGxlbWVudGF0aW9ucyBzaG91bGQgZXh0ZW5kIHRoaXMgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHVzZWQgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIG1hcCBwcm92aWRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB6b29tIGxldmVsIG9mIHRoZSBtYXAsIGRlZmF1bHRzIHRvIDE0XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gY29uZmlnLnpvb20gfHwgMTQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjb29yZGluYXRlcyB0byBkaXNwbGF5IGlmIHRoZXJlIGFyZSBubyByZXN1bHRzIHJldHVybmVkXG4gICAgICogT25seSB1c2VkIGlmIHNob3dFbXB0eU1hcCBpcyBzZXQgdG8gdHJ1ZVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZGVmYXVsdFBvc2l0aW9uID0gY29uZmlnLmRlZmF1bHRQb3NpdGlvbiB8fCB7IGxhdDogMzcuMDkwMiwgbG5nOiAtOTUuNzEyOSB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBlbXB0eSBtYXAgc2hvdWxkIGJlIHNob3duIHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9zaG93RW1wdHlNYXAgPSBjb25maWcuc2hvd0VtcHR5TWFwIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgbWFwIGluc3RhbmNlLCBjcmVhdGVkIGJ5IHRoZSBleHRlcm5hbCBsaWIuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IGJvb2xlYW4gdHJhY2tpbmcgd2hldGhlciBvciBub3QgdGhlIGV4dGVybmFsIEpTIGxpYnJhcnkgaXMgbG9hZGVkIChzZWUgVE9ETyBiZWxvdylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBwaW4gaXMgY2xpY2tlZC4gVGhlIGNsaWNrZWQgaXRlbShzKSBhcmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFja1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vblBpbkNsaWNrID0gY29uZmlnLm9uUGluQ2xpY2sgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKYXZhc2NyaXB0IGlzIGxvYWRlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNvbmZpZy5vbkxvYWRlZCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBvdmVycmlkZSB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgICAqIEB0eXBlIHtPYmplY3R8RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fcGluQ29uZmlnID0gdHlwZW9mIGNvbmZpZy5waW4gPT09ICdmdW5jdGlvbicgPyBjb25maWcucGluIDogT2JqZWN0LmFzc2lnbihNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsIGNvbmZpZy5waW4pO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBjb2xsYXBzZSBwaW5zIGF0IHRoZSBzYW1lIGxhdC9sbmdcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9jb2xsYXBzZVBpbnMgPSBjb25maWcuY29sbGFwc2VQaW5zIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogVE9ETyhiaWxseSkgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBtb2RlbFxuICAgKi9cbiAgc3RhdGljIGdldCBERUZBVUxUX1BJTl9DT05GSUcgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIGFuY2hvcjogbnVsbCwgLy8gZS5nLiB7IHg6IDEsIHk6IDEgfVxuICAgICAgICBzdmc6IG51bGwsXG4gICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgc2NhbGVkU2l6ZTogbnVsbCAvLyBlLmcuIHsgdzogMjAsIGg6IDIwIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbFR5cGU6ICdudW1lcmljJ1xuICAgIH07XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzTG9hZGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XG4gIH1cblxuICBsb2FkSlMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRKUycpO1xuICB9XG5cbiAgaW5pdCAobWFwRGF0YSkge1xuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlIGJhc2VkIG9mZiBhIHByb21pc2UgdGhhdCBnZXRzIGNyZWF0ZWQgZnJvbSBsb2FkSlNcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBpbml0Jyk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBsaXN0IG9mIG1hcmtlcnMsIGNvbWJpbmUgbWFya2VycyB3aXRoIHRoZSBzYW1lIGxhdC9sbmcgaW50byBhIHNpbmdsZSBtYXJrZXJcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgbWFya2VycyB0byBjb2xsYXBzZVxuICAgKi9cbiAgX2NvbGxhcHNlTWFya2VycyAobWFya2Vycykge1xuICAgIGNvbnN0IGxvY2F0aW9uVG9JdGVtID0ge307XG4gICAgbWFya2Vycy5mb3JFYWNoKG0gPT4ge1xuICAgICAgbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdXG4gICAgICAgID8gbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdLnB1c2gobSlcbiAgICAgICAgOiBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0gPSBbbV07XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gW107XG4gICAgZm9yIChsZXQgWywgbWFya2Vyc10gb2YgT2JqZWN0LmVudHJpZXMobG9jYXRpb25Ub0l0ZW0pKSB7XG4gICAgICBpZiAobWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlciA9IHtcbiAgICAgICAgICBpdGVtOiBtYXJrZXJzLm1hcChtID0+IG0uaXRlbSksXG4gICAgICAgICAgbGFiZWw6IG1hcmtlcnMubGVuZ3RoLFxuICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXJzWzBdLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogbWFya2Vyc1swXS5sb25naXR1ZGVcbiAgICAgICAgfTtcbiAgICAgICAgY29sbGFwc2VkTWFya2Vycy5wdXNoKGNvbGxhcHNlZE1hcmtlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2gobWFya2Vyc1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxhcHNlZE1hcmtlcnM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdvb2dsZU1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBnb29nbGUgKi9cblxuLyoqXG4gKiBHb29nbGVNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZU1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLy8gbm9ybWFsaXplIGJlY2F1c2UgZ29vZ2xlJ3Mgem9vbSBpcyBlZmZlY3RpdmVseSAxIHVuaXQgb2YgZGlmZmVyZW5jZSBhd2F5IGZyb20gbWFwYm94IHpvb21cbiAgICB0aGlzLl96b29tT2Zmc2V0ID0gMTtcbiAgICB0aGlzLl96b29tICs9IHRoaXMuX3pvb21PZmZzZXQ7XG4gICAgdGhpcy5fY2xpZW50SWQgPSBvcHRzLmNsaWVudElkO1xuICAgIHRoaXMuX3NpZ25hdHVyZSA9IG9wdHMuc2lnbmF0dXJlO1xuXG4gICAgaWYgKCF0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSAmJiAhdGhpcy5fYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZU1hcHNQcm92aWRlcjogTWlzc2luZyBgYXBpS2V5YCBvciB7YGNsaWVudElkYCwgYHNpZ25hdHVyZWB9Jyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBpZiAoRE9NLnF1ZXJ5KCcjeWV4dC1tYXAtanMnKSkge1xuICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPyR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9YFxuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBnZW5lcmF0ZUNyZWRlbnRpYWxzICgpIHtcbiAgICBpZiAodGhpcy5oYXNWYWxpZENsaWVudENyZWRlbnRpYWxzKCkpIHtcbiAgICAgIHJldHVybiBgY2xpZW50PSR7dGhpcy5fY2xpZW50SWR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBrZXk9JHt0aGlzLl9hcGlLZXl9YDtcbiAgICB9XG4gIH1cblxuICBoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQ7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gTk9URShiaWxseSkgVGhpcyB0aW1lb3V0IGlzIGEgaGFjayBmb3IgZGVhbGluZyB3aXRoIGFzeW5jIG5hdHVyZS5cbiAgICAvLyBPbmx5IGhlcmUgZm9yIGRlbW8gcHVycG9zZXMsIHNvIHdlJ2xsIGZpeCBsYXRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tLFxuICAgICAgICBjZW50ZXI6IHRoaXMuZ2V0Q2VudGVyTWFya2VyKG1hcERhdGEpXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGlmIChtYXBEYXRhICYmIG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlUGluc1xuICAgICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgICA6IG1hcERhdGEubWFwTWFya2VycztcbiAgICAgICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgICB0aGlzLm1hcCk7XG5cbiAgICAgICAgbGV0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb29nbGVNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5sZW5ndGggPj0gMikge1xuICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGdldENlbnRlck1hcmtlciAobWFwRGF0YSkge1xuICAgIHJldHVybiBtYXBEYXRhICYmIG1hcERhdGEubWFwQ2VudGVyICYmIG1hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSAmJiBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZVxuICAgICAgPyB7IGxuZzogbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBsYXQ6IG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlIH1cbiAgICAgIDogeyBsbmc6IHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcsIGxhdDogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxhdCB9O1xuICB9XG59XG5cbi8vIFRPRE8oYmlsbHkpIE1vdmUgdG8gb3duIGNsYXNzXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwTWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge0dvb2dsZU1hcH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0OiB1bmRlZmluZWQsXG4gICAgICBsbmc6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcGVydGllcy9zZXR0aW5ncyBvZiB0aGUgaWNvbiB1c2VkIGZvciB0aGUgbWFya2VyXG4gICAgICogZS5nLiB7XG4gICAgICogICAgICAgIGFuY2hvcjogeyB4OiAwLCB5OiAwIH1cbiAgICAgKiAgICAgICAgdXJsOiAncGF0aC90by91cmwuanBnJ1xuICAgICAqICAgICAgICBzY2FsZWRTaXplOiB7IHc6IDAsIGg6IDAgfVxuICAgICAqICAgICAgIH1cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5pY29uID0gb3B0cy5pY29uIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX0gZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChnb29nbGVNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYG1hcmtlcnM9bGFiZWw6JHttYXJrZXIubGFiZWx9fCR7bWFya2VyLnBvc2l0aW9uLmxhdH0sJHttYXJrZXIucG9zaXRpb24ubG5nfWApO1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gbWFwIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWdPYmouc2NhbGVkU2l6ZS53LCBwaW5Db25maWdPYmouc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBwaW5Db25maWdPYmoudXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnN2Zykge1xuICAgICAgICBpY29uLnVybCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwgJHtlbmNvZGVVUklDb21wb25lbnQocGluQ29uZmlnT2JqLnN2Zyl9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsO1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IHBpbkNvbmZpZ09iai5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbWFya2VyLmxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5PVEUoYmlsbHkpIEdvb2dsZSBtYXBzIGRvZXNuJ3QgaGFuZGxlIGVtcHR5IGljb24gb2JqZWN0cyBuaWNlbHlcbiAgICAgIC8vIE1ha2UgZ29vZ2xlIG1hcHMgaGFwcHkgaWYgbm8gc2V0dGluZ3MgZm9yIGljb24gYXJlIHByb3ZpZGVkO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGljb24pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBHb29nbGVNYXBNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ29vZ2xlTWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQm94TWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIG1hcGJveGdsICovXG5cbi8qKlxuICogTWFwQm94TWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25Mb2FkZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogdGhpcy5nZXRDZW50ZXJNYXJrZXIobWFwRGF0YSlcbiAgICB9KTtcblxuICAgIGlmIChtYXBEYXRhICYmIG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSB0aGlzLl9jb2xsYXBzZVBpbnNcbiAgICAgICAgPyB0aGlzLl9jb2xsYXBzZU1hcmtlcnMobWFwRGF0YS5tYXBNYXJrZXJzKVxuICAgICAgICA6IG1hcERhdGEubWFwTWFya2VycztcbiAgICAgIGNvbnN0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgY29sbGFwc2VkTWFya2VycyxcbiAgICAgICAgdGhpcy5fcGluQ29uZmlnLFxuICAgICAgICB0aGlzLl9tYXApO1xuXG4gICAgICBjb25zdCBib3VuZHMgPSBuZXcgbWFwYm94Z2wuTG5nTGF0Qm91bmRzKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLndyYXBwZXI7XG4gICAgICAgIGxldCBjb29yZHMgPSBuZXcgbWFwYm94Z2wuTG5nTGF0KFxuICAgICAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ucG9zaXRpb24ubG9uZ2l0dWRlLFxuICAgICAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ucG9zaXRpb24ubGF0aXR1ZGUpO1xuICAgICAgICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcih3cmFwcGVyKS5zZXRMbmdMYXQoY29vcmRzKTtcbiAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIuZ2V0TG5nTGF0KCkpO1xuICAgICAgICBtYXJrZXIuYWRkVG8odGhpcy5fbWFwKTtcbiAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICBtYXJrZXIuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdGhpcy5fbWFwLmZpdEJvdW5kcyhib3VuZHMsIHsgcGFkZGluZzogNTAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2VudGVyTWFya2VyIChtYXBEYXRhKSB7XG4gICAgcmV0dXJuIG1hcERhdGEgJiYgbWFwRGF0YS5tYXBDZW50ZXIgJiYgbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlICYmIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXG4gICAgICA/IFttYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUsIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXVxuICAgICAgOiB7IGxuZzogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZywgbGF0OiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0IH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHBpbiBmb3IgdGhlIHN0YXRpYyBtYXBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljTWFwUGluID0gb3B0cy5zdGF0aWNNYXBQaW4gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtNYXBCb3hNYXJrZXJDb25maWdbXX0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChtYXBib3hNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3RhdGljTWFwUGluKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHVybC0ke21hcmtlci5zdGF0aWNNYXBQaW59KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgcGluLXMtJHttYXJrZXIubGFiZWx9KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gTWFwQm94TWFya2VyQ29uZmlnXG4gICAqIEBwYXJhbSB7TWFwQm94fSBBIHJlZmVyZW5jZSB0byB0aGUgbWFwYm94IG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge01hcEJveE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG4gICAgICBjb25zdCBzdGF0aWNNYXBQaW4gPSBwaW5Db25maWdPYmouc3RhdGljTWFwUGluID8gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXG4gICAgICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgICAgICBzdGF0aWNNYXBQaW46IHN0YXRpY01hcFBpblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBib3hNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgR29vZ2xlTWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBjb21wb25lbnQgdG8gbGlzdGVuIHRvIHRoZSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMga2V5XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhc2VkIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIG1hcCBwcm92aWRlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX21hcFByb3ZpZGVyID0gb3B0cy5tYXBQcm92aWRlcjtcbiAgICBpZiAoIXRoaXMuX21hcFByb3ZpZGVyIHx8ICEodGhpcy5fbWFwUHJvdmlkZXIudG9Mb3dlckNhc2UoKSBpbiBQcm92aWRlclR5cGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXBDb21wb25lbnQ6IEludmFsaWQgTWFwIFByb3ZpZGVyOyBtdXN0IGJlIGBnb29nbGVgIG9yIGBtYXBCb3hgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9tYXAnO1xuICB9XG5cbiAgLy8gVE9ETyhiaWxseSkgTWFrZSBQcm92aWRlclR5cGVzIGEgZmFjdG9yeSBjbGFzc1xuICBnZXRQcm92aWRlckluc3RhbmNlICh0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlclR5cGVzW3R5cGUudG9Mb3dlckNhc2UoKV0odGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIHRoaXMuX21hcC5sb2FkSlMoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuX21hcC5vbkxvYWRlZCgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXAuaW5pdCh0aGlzLl9jb250YWluZXIsIHRoaXMuZ2V0U3RhdGUoJ21hcCcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoZGF0YSwgdmFsKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuY29uc3QgUmVzdWx0VHlwZSA9IHtcbiAgRVZFTlQ6ICdldmVudCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBQRU9QTEU6ICdwZW9wbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsQ29uZmlnSWQgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxDb25maWdJZCA9IGNvbmZpZy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgc2V0IHRvIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gY29uZmlnLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLnJlbmRlckl0ZW0gPSBjb25maWcuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLml0ZW1UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuaXRlbVRlbXBsYXRlID0gY29uZmlnLl9wYXJlbnRPcHRzLml0ZW1UZW1wbGF0ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZ3VyZUl0ZW0oe1xuICAgICAgcmVuZGVyOiBjb25maWcucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBjb25maWcuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIHRvIHRoZSB1bml2ZXJzYWwgcGFnZSBmb3IgdGhlIG5vIHJlc3VsdHMgcGFnZSB0byBsaW5rIGJhY2sgdG8gd2l0aCBjdXJyZW50IHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuX3VuaXZlcnNhbFVybCA9IGNvbmZpZy51bml2ZXJzYWxVcmw7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHVwbGljYXRlc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgcmVzdWx0czogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fY29uZmlnLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX2NvbmZpZy5tYXBDb25maWcsXG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKCksXG4gICAgICB1bml2ZXJzYWxVcmw6IHRoaXMuX3VuaXZlcnNhbFVybCA/IHRoaXMuX3VuaXZlcnNhbFVybCArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggOiAnJyxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHJlc3VsdHMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBvYmplY3QgZm9yIHRoZSB2aWV3IGFsbCBsaW5rXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLm1hcENvbmZpZywgb3B0cyk7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgbmV3T3B0cyk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHByb3BlciBpdGVtIHJlbmRlcnMgdG8gdGhlIHRoZSBjb21wb25lbnRzXG4gICAgLy8gaGF2ZSBqdXN0IGJlZW4gY29uc3RydWN0ZWQuIFByaW9yaXRpemUgZ2xvYmFsIG92ZXIgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBsZXQgY29tcCA9IHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZCxcbiAgICAgIGlzVW5pdmVyc2FsOiB0aGlzLl9pc1VuaXZlcnNhbFxuICAgIH0pKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgKi9cbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogYmFzZSBzZWxlY3RvciB0byB1c2Ugd2hlbiBmaW5kaW5nIERPTSB0YXJnZXRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9zZWxlY3RvckJhc2UgPSBjb25maWcuc2VsZWN0b3JCYXNlIHx8ICcuanMteXh0LUFjY29yZGlvblJlc3VsdCc7XG5cbiAgICAvKipcbiAgICAgKiBjb2xsYXBzZWQgc3RhdGUgY2xhc3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkQ2xhc3MgPSBjb25maWcuY29sbGFwc2VkQ2xhc3MgfHwgJ2lzLWNvbGxhcHNlZCc7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbCBjb25maWcgaWQgaXMgcmVxdWlyZWQgZm9yIGFuYWx5dGljc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZCB8fCBjb25maWcuX3BhcmVudE9wdHMudmVydGljYWxDb25maWdJZCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBY2NvcmRpb25SZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzYWNjb3JkaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZXMgb25Nb3VudCB0byBhZGQgYmluZGluZ3MgdG8gY2hhbmdlIHRoZSBoZWlnaHQgb24gY2xpY2tcbiAgICogQHJldHVybnMge0FjY29yZGlvblJlc3VsdHNDb21wb25lbnR9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgc3VwZXIub25Nb3VudCgpO1xuXG4gICAgY29uc3QgYWNjb3JkaW9uRWxzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fc2VsZWN0b3JCYXNlKTtcbiAgICBhY2NvcmRpb25FbHMuZm9yRWFjaCgoYWNjb3JkaW9uRWwpID0+IHtcbiAgICAgIGNvbnN0IHRvZ2dsZUVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLnRvZ2dsZVNlbGVjdG9yKCkpO1xuICAgICAgY29uc3QgY29udGVudEVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLmJvZHlTZWxlY3RvcigpKTtcbiAgICAgIHRoaXMuY2hhbmdlSGVpZ2h0KGNvbnRlbnRFbCwgYWNjb3JkaW9uRWwpO1xuICAgICAgdG9nZ2xlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2soYWNjb3JkaW9uRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG1vZGlmaWVyOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWRcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogY2xpY2sgaGFuZGxlciBmb3IgdGhlIGFjY29yZGlvbiB0b2dnbGUgYnV0dG9uXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0gdG9nZ2xlRWwge0hUTUxFbGVtZW50fSB0aGUgYnV0dG9uXG4gICAqIEBwYXJhbSBjb250ZW50RWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIHRhcmdldFxuICAgKi9cbiAgaGFuZGxlQ2xpY2sgKHdyYXBwZXJFbCwgdG9nZ2xlRWwsIGNvbnRlbnRFbCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdST1dfRVhQQU5EJyA6ICdST1dfQ09MTEFQU0UnKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIGVudGl0eUlkOiB0b2dnbGVFbC5kYXRhc2V0LmVudGl0eUlkXG4gICAgICB9KTtcbiAgICB3cmFwcGVyRWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIHdyYXBwZXJFbCk7XG4gICAgdG9nZ2xlRWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgY29sbGFwc2VkXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ29sbGFwc2VkICh3cmFwcGVyRWwpIHtcbiAgICBpZiAoIXdyYXBwZXJFbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwcGVyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY29sbGFwc2VkQ2xhc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZXMgdGhlIGhlaWdodCBiZXR3ZWVuIDAgYW5kIHRoZSBjb250ZW50IGhlaWdodCBmb3Igc21vb3RoIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gdGFyZ2V0RWwge0hUTUxFbGVtZW50fVxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGNoYW5nZUhlaWdodCAodGFyZ2V0RWwsIHdyYXBwZXJFbCkge1xuICAgIHRhcmdldEVsLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/IDAgOiB0YXJnZXRFbC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgY29tcG9zaW5nIGNoaWxkIGVsZW1lbnQgc2VsZWN0b3JzXG4gICAqIEBwYXJhbSBjaGlsZCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYnVpbGRTZWxlY3RvciAoY2hpbGQpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fc2VsZWN0b3JCYXNlfSR7Y2hpbGR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSB0b2dnbGUgYnV0dG9uIHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0b2dnbGVTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLXRvZ2dsZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgdGhlIGNvbnRlbnQgZWxlbWVudCBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYm9keVNlbGVjdG9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFNlbGVjdG9yKCctYm9keScpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVW5pdmVyc2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICBzdXBlci5pbml0KG9wdHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyBzZWN0aW9uczogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgc2hvd05vUmVzdWx0czogc2VjdGlvbnMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSwgb3B0cykge1xuICAgIGNvbnN0IGNoaWxkT3B0cyA9IHsgLi4ub3B0cywgLi4udGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSkgfTtcbiAgICBpZiAoY2hpbGRPcHRzLnVzZUFjY29yZGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQudHlwZSwgY2hpbGRPcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIGNoaWxkT3B0cyk7XG4gIH1cblxuICBnZXRDaGlsZENvbmZpZyAoY29uZmlnSWQpIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgdmVydGljYWxDb25maWdJZDogY29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdHJ1ZVxuICAgIH07XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgdGhpcy5fY29uZmlnWydjb25maWcnXVtjb25maWdJZF0gfHwgdGhpcy5fY29uZmlnWydjb25maWcnXSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFBhZ2luYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSB0byB1c2UgZm9yIHNlYXJjaGVzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX0NPTkZJRykudmVydGljYWxLZXk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl92ZXJ0aWNhbEtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICd2ZXJ0aWNhbEtleSBub3QgcHJvdmlkZWQsIGJ1dCBuZWNlc3NhcnkgZm9yIHBhZ2luYXRpb24nLFxuICAgICAgICAnUGFnaW5hdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIGRpc3BsYXlzIHRoZSBmaXJzdCBwYWdlIGJ1dHRvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlyc3RQYWdlQnV0dG9uRW5hYmxlZCA9IGNvbmZpZy5zaG93Rmlyc3QgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBjb25maWcuc2hvd0ZpcnN0O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgZGlzcGxheXMgdGhlIGxhc3QgcGFnZSBidXR0b25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhc3RQYWdlQnV0dG9uRW5hYmxlZCA9IGNvbmZpZy5zaG93TGFzdCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGNvbmZpZy5zaG93TGFzdDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGFsbCBhbmFseXRpYyBldmVudHMgc2VudCBieSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NPcHRpb25zID0ge1xuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5XG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpIHx8IDA7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQsIE51bWJlcihvZmZzZXQpKTtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCwgb2Zmc2V0ID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCwgTnVtYmVyKG9mZnNldCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIHJlc3VsdHMgPT4ge1xuICAgICAgaWYgKHJlc3VsdHMuc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1BhZ2luYXRpb24nO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAncmVzdWx0cy9wYWdpbmF0aW9uJztcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTKSB8fCB7fTtcbiAgICBjb25zdCBsaW1pdCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9DT05GSUcpLmxpbWl0O1xuICAgIGNvbnN0IHNob3dDb250cm9scyA9IHJlc3VsdHMuc2VhcmNoU3RhdGUgPT09ICdzZWFyY2gtY29tcGxldGUnICYmIHJlc3VsdHMucmVzdWx0c0NvdW50ID4gbGltaXQ7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCkgfHwgMDtcbiAgICBpZiAoIXNob3dDb250cm9scykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzUGFnZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LVBhZ2luYXRpb24tcHJldmlvdXMnKTtcbiAgICBjb25zdCBuZXh0UGFnZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LVBhZ2luYXRpb24tbmV4dCcpO1xuICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLnRydW5jKChyZXN1bHRzLnJlc3VsdHNDb3VudCAtIDEpIC8gbGltaXQpO1xuXG4gICAgRE9NLm9uKHByZXZpb3VzUGFnZUJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4gdGhpcy51cGRhdGVQYWdlKG9mZnNldCAtIGxpbWl0KSk7XG4gICAgRE9NLm9uKG5leHRQYWdlQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB0aGlzLnVwZGF0ZVBhZ2Uob2Zmc2V0ICsgbGltaXQpKTtcblxuICAgIGlmICh0aGlzLl9maXJzdFBhZ2VCdXR0b25FbmFibGVkKSB7XG4gICAgICBjb25zdCBmaXJzdFBhZ2VCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLmpzLXl4dC1QYWdpbmF0aW9uLWZpcnN0Jyk7XG4gICAgICBET00ub24oZmlyc3RQYWdlQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB0aGlzLnVwZGF0ZVBhZ2UoMCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9sYXN0UGFnZUJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IGxhc3RQYWdlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy5qcy15eHQtUGFnaW5hdGlvbi1sYXN0Jyk7XG4gICAgICBET00ub24obGFzdFBhZ2VCdXR0b24sICdjbGljaycsICgpID0+IHRoaXMudXBkYXRlUGFnZShtYXhQYWdlICogbGltaXQpKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlIChvZmZzZXQpIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQsIG9mZnNldCk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VULCBvZmZzZXQpO1xuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFBhZ2UodGhpcy5fdmVydGljYWxLZXksIG9mZnNldCk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgLy8gU2FmYXJpXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUykgfHwge307XG4gICAgbGV0IG9mZnNldCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpIHx8IDA7XG4gICAgY29uc3QgbGltaXQgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfQ09ORklHKS5saW1pdDtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gb2Zmc2V0IC8gbGltaXQ7XG4gICAgY29uc3Qgc2hvd0NvbnRyb2xzID0gcmVzdWx0cy5zZWFyY2hTdGF0ZSA9PT0gJ3NlYXJjaC1jb21wbGV0ZScgJiYgcmVzdWx0cy5yZXN1bHRzQ291bnQgPiBsaW1pdDtcbiAgICBjb25zdCBpc01vcmVSZXN1bHRzID0gcmVzdWx0cy5yZXN1bHRzQ291bnQgPiBvZmZzZXQgKyBsaW1pdDtcbiAgICBjb25zdCBtYXhQYWdlID0gTWF0aC50cnVuYygocmVzdWx0cy5yZXN1bHRzQ291bnQgLSAxKSAvIGxpbWl0KTtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgc2hvd0NvbnRyb2xzOiBzaG93Q29udHJvbHMsXG4gICAgICBmaXJzdFBhZ2VCdXR0b25FbmFibGVkOiB0aGlzLl9maXJzdFBhZ2VCdXR0b25FbmFibGVkLFxuICAgICAgbGFzdFBhZ2VCdXR0b25FbmFibGVkOiB0aGlzLl9sYXN0UGFnZUJ1dHRvbkVuYWJsZWQsXG4gICAgICBwYWdlTnVtYmVyOiBwYWdlTnVtYmVyICsgMSxcbiAgICAgIHNob3dGaXJzdFBhZ2VCdXR0b246IHBhZ2VOdW1iZXIgPiAxLFxuICAgICAgc2hvd1ByZXZpb3VzUGFnZUJ1dHRvbjogcGFnZU51bWJlciA+IDAsXG4gICAgICBzaG93TmV4dFBhZ2VCdXR0b246IGlzTW9yZVJlc3VsdHMsXG4gICAgICBzaG93TGFzdFBhZ2VCdXR0b246IHBhZ2VOdW1iZXIgPCBtYXhQYWdlIC0gMSxcbiAgICAgIC4uLmRhdGFcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuXG4vKipcbiAqIENvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciB0aGUgY29tcG9uZW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgLyoqXG4gICAqIFRoZSBlbnRpdHkgaWRlbnRpZmllciB0aGF0IHRoZSBxdWVzdGlvbiBpcyBhc3NvY2lhdGVkIHdpdGguXG4gICAqIFRoaXMgaXMgdHlwaWNhbGx5IGFuIG9yZ2FuaXphdGlvbiBvYmplY3RcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gICdlbnRpdHlJZCc6IG51bGwsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGxhbmd1YWdlIG9mIHRoZSBxdWVzdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2xhbmd1YWdlJzogJ0VOJyxcblxuICAvKipcbiAgICogVGhlIG1haW4gQ1NTIHNlbGVjdG9yIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSBmb3JtIGZvciB0aGUgY29tcG9uZW50LlxuICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICovXG4gICdmb3JtU2VsZWN0b3InOiAnZm9ybScsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIGUtbWFpbCBhZGRyZXNzIGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnZW1haWxMYWJlbCc6ICdFbWFpbCBBZGRyZXNzOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG5hbWUgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICduYW1lTGFiZWwnOiAnTmFtZTonLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBxdWVzdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ3F1ZXN0aW9uTGFiZWwnOiAnV2hhdCBpcyB5b3VyIHF1ZXN0aW9uPycsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFByaXZhY3kgUG9saWN5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncHJpdmFjeVBvbGljeUxhYmVsJzogJ0kgYWdyZWUgdG8gb3VyIFByaXZhY3kgUG9saWN5OicsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBTdWJtaXQgYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnYnV0dG9uTGFiZWwnOiAnU3VibWl0J1xufTtcblxuLyoqXG4gKiBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgaXMgYSBjb21wb25lbnQgdGhhdCBjcmVhdGVzIGEgZm9ybVxuICogdGhhdHMgZGlzcGxheWVkIHdoZW5ldmVyIGEgcXVlcnkgaXMgcnVuLiBJdCBlbmFibGVzIHRoZSB1c2VyXG4gKiB0byBzdWJtaXQgcXVlc3Rpb25zIHRoYXQgdGhleSBjYW50IGZpbmQgdGhlIGFuc3dlciBmb3IuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0NPTkZJRywgY29uZmlnKSwgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgc3RvcmFnZSBtb2RlbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT047XG5cbiAgICAvKipcbiAgICAgKiBOT1RFKGJpbGx5KSBpZiB0aGlzIGlzIGEgcGF0dGVybiB3ZSB3YW50IHRvIGZvbGxvdyBmb3IgY29uZmlndXJhdGlvblxuICAgICAqIHdlIHNob3VsZCBiYWtlIGl0IGludG8gdGhlIGNvcmUgY2xhc3MuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0ZUNvbmZpZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdxdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHVibGljIGludGVyZmFjZSBhbGlhcyBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIHZhbGlkYXRpb25Db25maWcgY29udGFpbnMgYSBidW5jaCBvZiBydWxlc1xuICAgKiB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIGFnaW5zdCBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAqL1xuICB2YWxpZGF0ZUNvbmZpZyAoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5lbnRpdHlJZCA9PT0gbnVsbCB8fCB0aGlzLl9jb25maWcuZW50aXR5SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ2BlbnRpdHlJZGAgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgUXVlc3Rpb24gU3VibWlzc2lvbicsXG4gICAgICAgICdRdWVzdGlvblN1Ym1pc3Npb24nKTtcbiAgICB9XG4gIH1cblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgbW91bnRpbmcgdGhlIGNvbXBvbmVudCBpZiB0aGVyZXMgbm8gZGF0YVxuICAgIC8vIE5vdGUsIDEgYmVjYXVzZSBgY29uZmlnYCBpcyBhbHdheXMgcGFydCBvZiB0aGUgc3RhdGUuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGxldCBmb3JtRWwgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9jb25maWcuZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoZm9ybUVsID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQW5hbHl0aWNzKGZvcm1FbCk7XG4gICAgdGhpcy5iaW5kRm9ybVN1Ym1pdChmb3JtRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRBbmFseXRpY3Mgd2lsbCB3aXJlIHVwIERPTSBldmVudCBob29rcyB0byBzZXJ2ZXJzaWRlIHJlcG9ydGluZ1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICovXG4gIGJpbmRBbmFseXRpY3MgKGZvcm1FbCkge1xuICAgIGlmICh0aGlzLmFuYWx5dGljc1JlcG9ydGVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcXVlc3Rpb25UZXh0RWwgPSBET00ucXVlcnkoZm9ybUVsLCAnLmpzLXF1ZXN0aW9uLXRleHQnKTtcbiAgICBET00ub24ocXVlc3Rpb25UZXh0RWwsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KG5ldyBBbmFseXRpY3NFdmVudCgnUVVFU1RJT05fRk9DVVMnKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEZvcm1TdWJtaXQgaGFuZGxlcyBzdWJtaXR0aW5nIHRoZSBxdWVzdGlvbiB0byB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICovXG4gIGJpbmRGb3JtU3VibWl0IChmb3JtRWwpIHtcbiAgICBET00ub24oZm9ybUVsLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIHdlIHByb2JhYmx5IHdhbnQgdG8gZGlzYWJsZSB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZCB0d2ljZVxuICAgICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLnBhcnNlKGZvcm1FbCk7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlUmVxdWlyZWQoZm9ybURhdGEpO1xuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZShuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKGZvcm1EYXRhLCBlcnJvcnMpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb3JlLnN1Ym1pdFF1ZXN0aW9uKHtcbiAgICAgICAgJ2VudGl0eUlkJzogdGhpcy5fY29uZmlnLmVudGl0eUlkLFxuICAgICAgICAncXVlc3Rpb25MYW5ndWFnZSc6IHRoaXMuX2NvbmZpZy5sYW5ndWFnZSxcbiAgICAgICAgJ3NpdGUnOiAnRklSU1RQQVJUWScsXG4gICAgICAgICduYW1lJzogZm9ybURhdGEubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBmb3JtRGF0YS5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogZm9ybURhdGEucXVlc3Rpb25EZXNjcmlwdGlvblxuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAnbmV0d29yayc6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHN1Ym1pdHRpbmcgeW91ciBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBmb3JtLCBhbmQgYnVpbGRzIGEgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgaW5wdXQgbmFtZXNcbiAgICogYW5kIHRleHQgZmllbGRzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcnNlIChmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IERPTS5xdWVyeUFsbChmb3JtRWwsICcuanMtcXVlc3Rpb24tZmllbGQnKTtcbiAgICBpZiAoIWlucHV0RmllbGRzIHx8IGlucHV0RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gaW5wdXRGaWVsZHNbaV0udmFsdWU7XG4gICAgICBpZiAoaW5wdXRGaWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgb2JqW2lucHV0RmllbGRzW2ldLm5hbWVdID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSByZXF1aXJlZCBmaWVsZHMgKG9yIHJ1bGVzKSBmb3IgdGhlIGZvcm0gZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdHxib29sZWFufSBlcnJvcnMgb2JqZWN0IGlmIGFueSBlcnJvcnMgZm91bmRcbiAgICovXG4gIHZhbGlkYXRlUmVxdWlyZWQgKGZvcm1EYXRhKSB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEuZW1haWwgfHwgdHlwZW9mIGZvcm1EYXRhLmVtYWlsICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydlbWFpbCddID0gJ01pc3NpbmcgZW1haWwgYWRkcmVzcyEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucHJpdmFjeVBvbGljeSB8fCBmb3JtRGF0YS5wcml2YWN5UG9saWN5ICE9PSB0cnVlKSB7XG4gICAgICBlcnJvcnNbJ3ByaXZhY3lQb2xpY3knXSA9ICdBcHByb3Zpbmcgb3VyIHByaXZhY3kgcG9saWN5IHRlcm1zIGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5xdWVzdGlvblRleHQgfHwgdHlwZW9mIGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1sncXVlc3Rpb25UZXh0J10gPSAnUXVlc3Rpb24gdGV4dCBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdJY29uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZy5uYW1lXG4gICAqIEBwYXJhbSBjb25maWcucGF0aFxuICAgKiBAcGFyYW0gY29uZmlnLmNvbXBsZXhDb250ZW50c1xuICAgKiBAcGFyYW0gY29uZmlnLnZpZXdCb3hcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogdGhlIG5hbWUgb2YgdGhlIGljb25cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAvKipcbiAgICAgKiBhbiBzdmcgcGF0aCBkZWZpbml0aW9uXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG4gICAgLyoqXG4gICAgICogaWYgbm90IHVzaW5nIGEgcGF0aCwgYSB0aGUgbWFya3VwIGZvciBhIGNvbXBsZXggU1ZHXG4gICAgICovXG4gICAgdGhpcy5jb21wbGV4Q29udGVudHMgPSBjb25maWcuY29tcGxleENvbnRlbnRzO1xuICAgIC8qKlxuICAgICAqIHRoZSB2aWV3IGJveCBkZWZpbml0aW9uLCBkZWZhdWx0cyB0byAyNHgyNFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy52aWV3Qm94ID0gY29uZmlnLnZpZXdCb3ggfHwgJzAgMCAyNCAyNCc7XG4gICAgLyoqXG4gICAgICogYWN0dWFsIGNvbnRlbnRzIHVzZWRcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5wYXRoRGVmaW5pdGlvbigpO1xuICB9XG5cbiAgcGF0aERlZmluaXRpb24gKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXhDb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxleENvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7dGhpcy5wYXRofVwiPjwvcGF0aD5gO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHN2ZyBtYXJrdXBcbiAgICovXG4gIG1hcmt1cCAoKSB7XG4gICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCIke3RoaXMudmlld0JveH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHt0aGlzLmNvbnRlbnRzfTwvc3ZnPmA7XG4gIH1cbn1cbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0aHVtYicsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjInLFxuICBwYXRoOiAnTTE1LjI3MyAxSDUuNDU1Yy0uOTA2IDAtMS42OC41NS0yLjAwOCAxLjM0MkwuMTUzIDEwLjA5N0EyLjE5IDIuMTkgMCAwMDAgMTAuOXYyLjJjMCAxLjIxLjk4MiAyLjIgMi4xODIgMi4yaDYuODgzTDguMDMgMjAuMzI3bC0uMDMzLjM1MmMwIC40NTEuMTg2Ljg2OS40OCAxLjE2Nkw5LjYzMyAyM2w3LjE3OC03LjI0OWEyLjE2IDIuMTYgMCAwMC42NDQtMS41NTF2LTExYzAtMS4yMS0uOTgyLTIuMi0yLjE4Mi0yLjJ6bTAgMTMuMmwtNC43MzUgNC43NzRMMTEuNzUgMTMuMUgyLjE4MnYtMi4ybDMuMjczLTcuN2g5LjgxOHYxMXpNMTkuNjM2IDFIMjR2MTMuMmgtNC4zNjRWMXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgcGF0aDogJ00xNC42MDYgOS41Yy0uNjcxLS41MTUtMS41OTEtLjgzMy0yLjYwNi0uODMzIDEuMDE1IDAgMS45MzUuMzE4IDIuNjA2LjgzM3ptLTcuOTg1IDBIMS42NTVBMS42NiAxLjY2IDAgMDEwIDcuODMzVjMuNjY3QzAgMi43NDcuNzQxIDIgMS42NTUgMmgyMC42OUExLjY2IDEuNjYgMCAwMTI0IDMuNjY3djQuMTY2QTEuNjYgMS42NiAwIDAxMjIuMzQ1IDkuNWgtNC45NjZWMjJINi42MjFWOS41aDIuNzczSDYuNjJ6bTEwLjc1OC0xLjY2N2g0Ljk2NlYzLjY2N0gxLjY1NXY0LjE2Nmg0Ljk2NnYtMi41aDEwLjc1OHYyLjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGFudGhlb24nLFxuICBwYXRoOiAnTTkuOTQ3IDE2LjU5OGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjVjLS4wNy0uMDQzLS4xMDYtLjA5My0uMTA2LS4xNUw5LjE1IDcuODJ2LS4xNWMwLS4wNDQuMDI4LS4wOC4wODQtLjEwOWEuNjkxLjY5MSAwIDAxLjEwNS0uMDg2LjI1NC4yNTQgMCAwMS4xNDYtLjA0M0gxMy42Yy4wNTYgMCAuMTA0LjAxNS4xNDYuMDQzLjA0Mi4wMy4wOTEuMDU4LjE0Ny4wODZhLjI3MS4yNzEgMCAwMS4wNjMuMTA4Yy4wMTQuMDQzLjAwNy4wOTMtLjAyLjE1bC0uNDIgMS4zNzhhLjM3NC4zNzQgMCAwMS0uMTQ3LjE1LjM3LjM3IDAgMDEtLjE5LjA2NWgtLjI1MXY3LjE4NmguMjUyYS4zNy4zNyAwIDAxLjE4OS4wNjVjLjA3LjA0My4xMTkuMDkzLjE0Ny4xNWwuNDIgMS4zNzhjLjAyNy4wMjguMDM0LjA3MS4wMi4xMjlhLjI3NS4yNzUgMCAwMS0uMDYzLjEyOSAxLjM2NCAxLjM2NCAwIDAwLS4xNDcuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M0g5LjQ4NWEuMjU0LjI1NCAwIDAxLS4xNDYtLjA0My42OTEuNjkxIDAgMDEtLjEwNS0uMDg2Yy0uMDU2LS4wMjktLjA4NC0uMDcyLS4wODQtLjEzdi0uMTI4bC40NjEtMS4zNzdjMC0uMDU4LjAzNS0uMTA4LjEwNS0uMTUxYS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bTUuNzkyIDBoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1LjM3NC4zNzQgMCAwMS0uMTQ4LS4xNWwtLjQyLTEuMzc3Yy0uMDI3LS4wMjktLjAzNC0uMDcyLS4wMi0uMTNhLjI3NS4yNzUgMCAwMS4wNjMtLjEyOWMuMDU2LS4wMjguMTA1LS4wNTcuMTQ2LS4wODZhLjI1NC4yNTQgMCAwMS4xNDctLjA0M2g0LjExNGMuMDU1IDAgLjEwNC4wMTUuMTQ2LjA0M2EuNjkxLjY5MSAwIDAxLjEwNS4wODZjLjA1Ni4wMy4wODQuMDcyLjA4NC4xM3YuMTI5bC0uNDIgMS4zNzdhLjM3NC4zNzQgMCAwMS0uMTQ2LjE1LjQzMi40MzIgMCAwMS0uMjMxLjA2NWgtLjIxdjcuMTg2aC4yMWEuNDMuNDMgMCAwMS4yMy4wNjVjLjA3LjA0My4xMi4wOTMuMTQ4LjE1bC40MiAxLjM3OHYuMTVjMCAuMDQzLS4wMjkuMDgtLjA4NS4xMDhhLjY5MS42OTEgMCAwMS0uMTA1LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNoLTQuMTE0YS4yNTQuMjU0IDAgMDEtLjE0Ny0uMDQzIDEuMzY0IDEuMzY0IDAgMDAtLjE0Ni0uMDg2LjI3MS4yNzEgMCAwMS0uMDYzLS4xMDhjLS4wMTQtLjA0My0uMDA3LS4wOTMuMDItLjE1bC40Mi0xLjM3N2EuMzc0LjM3NCAwIDAxLjE0Ny0uMTUxLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptLTExLjc5NC0uMDg2aC4yNTJWOS40OThoLS4yNTJhLjMzNC4zMzQgMCAwMS0uMjEtLjA2NS4zODYuMzg2IDAgMDEtLjEyNi0uMTkzbC0uNDItMS4zNzdhLjI0OC4yNDggMCAwMS0uMDItLjE3Mi44NTQuODU0IDAgMDEuMDYzLS4xNzNjLjAyOC0uMDU3LjA3LS4xLjEyNi0uMTI5YS4zNjUuMzY1IDAgMDEuMTY4LS4wNDNoNC4wN2MuMDU3IDAgLjExMy4wMTUuMTY5LjA0M2EuMjc4LjI3OCAwIDAxLjEyNi4xMy44NTQuODU0IDAgMDEuMDYyLjE3Mi4yNDguMjQ4IDAgMDEtLjAyLjE3MmwtLjQyIDEuMzc3YS4zODYuMzg2IDAgMDEtLjEyNi4xOTMuMzM0LjMzNCAwIDAxLS4yMS4wNjVoLS4yMXY3LjAxNGguMjFjLjA4NCAwIC4xNTQuMDI5LjIxLjA4NmEuNjczLjY3MyAwIDAxLjEyNi4xNzJsLjQyIDEuMzc4YS4yNDguMjQ4IDAgMDEuMDIuMTcyLjg1NC44NTQgMCAwMS0uMDYyLjE3Mi4yNzguMjc4IDAgMDEtLjEyNi4xMjkuMzY1LjM2NSAwIDAxLS4xNjguMDQzSDMuNTI2YS4zNjUuMzY1IDAgMDEtLjE2OC0uMDQzLjI3OC4yNzggMCAwMS0uMTI2LS4xMy44NTQuODU0IDAgMDEtLjA2My0uMTcxLjI0OC4yNDggMCAwMS4wMi0uMTcybC40Mi0xLjM3OGEuNjczLjY3MyAwIDAxLjEyNi0uMTcyLjI4MS4yODEgMCAwMS4yMS0uMDg2ek0xLjc2MyA2LjY1OGEuNzE3LjcxNyAwIDAxLS41MDQtLjE5NC42NDQuNjQ0IDAgMDEtLjIxLS40OTV2LS40M2EuNzMuNzMgMCAwMS4xMDUtLjM4Ny42OC42OCAwIDAxLjI3My0uMjU5QzQuMzA5IDMuNDAyIDYuNTQgMi4yNzYgOC4xMjEgMS41MTUgOS43MDIuNzU1IDEwLjQ5My4zNjEgMTAuNDkzLjMzMmMuNTMxLS4yNTguOTcyLS4zNjYgMS4zMjItLjMyMy4zNS4wNDMuNzM0LjE2NSAxLjE1NC4zNjZsOC4zMSA0LjUxOGMuMTQuMDU4LjI0NS4xNDQuMzE1LjI1OWEuNzMuNzMgMCAwMS4xMDUuMzg3di40M2MwIC4yMDEtLjA3LjM2Ni0uMjEuNDk1YS43MTcuNzE3IDAgMDEtLjUwNC4xOTRIMS43NjN6bS0uNzE0IDEzLjM0YS41NC41NCAwIDAxLjE2OC0uMzg3LjUxNi41MTYgMCAwMS4zNzgtLjE3MmgxOS42NDJjLjE2OCAwIC4zMDguMDU3LjQyLjE3MmEuNTQxLjU0MSAwIDAxLjE2OC4zODd2LjgxOGEuNTIyLjUyMiAwIDAxLS4xNjguNDA4LjYwNS42MDUgMCAwMS0uNDIuMTUxSDEuNTk1YS41NTEuNTUxIDAgMDEtLjM3OC0uMTUuNTIyLjUyMiAwIDAxLS4xNjgtLjQxdi0uODE3em0yMS40MDUgMi4wMjJjLjE0IDAgLjI2Ni4wNTguMzc4LjE3M2EuNTkyLjU5MiAwIDAxLjE2OC40M3YuODE4YS41NDEuNTQxIDAgMDEtLjE2OC4zODcuNTE2LjUxNiAwIDAxLS4zNzguMTcyTC41NDYgMjMuOTU3YS41MTYuNTE2IDAgMDEtLjM3OC0uMTcyLjU0MS41NDEgMCAwMS0uMTY4LS4zODd2LS44MThhLjU5LjU5IDAgMDEuMTY4LS40My41MTYuNTE2IDAgMDEuMzc4LS4xNzNsMjEuOTA4LjA0M3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtaWMnLFxuICBwYXRoOiAnTTEyIDE1YzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDZjMC0xLjY2LTEuMzQtMy0zLTNTOSA0LjM0IDkgNnY2YzAgMS42NiAxLjM0IDMgMyAzem01LjMtM2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTUgNi43IDEySDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjJoMnYtMy4yOGMzLjI4LS40OCA2LTMuMyA2LTYuNzJoLTEuN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkaXJlY3Rpb25zJyxcbiAgcGF0aDogJ00yMy42NDkgMTEuMTU0TDEyLjg0Ni4zNWExLjE5NSAxLjE5NSAwIDAwLTEuNjkyIDBMLjM1IDExLjE1NGExLjE5NSAxLjE5NSAwIDAwMCAxLjY5MkwxMS4xNTQgMjMuNjVhMS4xOTUgMS4xOTUgMCAwMDEuNjkyIDBMMjMuNjUgMTIuODQ2Yy40NjgtLjQ1Ni40NjgtMS4yMTIgMC0xLjY5MnptLTkuMjU0IDMuODUzdi0zLjAwMUg5LjU5M3YzLjZoLTIuNHYtNC44YzAtLjY2LjU0LTEuMiAxLjItMS4yaDYuMDAyVjYuNjA0bDQuMiA0LjItNC4yIDQuMjAyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGVuZGFyJyxcbiAgcGF0aDogJ00xOC4xMTEgMTMuMkgxMnY2aDYuMTExdi02ek0xNi44OSAwdjIuNEg3LjExVjBINC42Njd2Mi40SDMuNDQ0Yy0xLjM1NiAwLTIuNDMyIDEuMDgtMi40MzIgMi40TDEgMjEuNkMxIDIyLjkyIDIuMDg4IDI0IDMuNDQ0IDI0aDE3LjExMkMyMS45IDI0IDIzIDIyLjkyIDIzIDIxLjZWNC44YzAtMS4zMi0xLjEtMi40LTIuNDQ0LTIuNGgtMS4yMjNWMEgxNi44OXptMy42NjcgMjEuNkgzLjQ0NFY4LjRoMTcuMTEydjEzLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsbG91dCcsXG4gIHBhdGg6ICdNMjEuOTkgNGMwLTEuMS0uODktMi0xLjk5LTJINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNGw0IDQtLjAxLTE4eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2luZm8nLFxuICBwYXRoOiAnTTEyIDguNEExLjIgMS4yIDAgMTAxMiA2YTEuMiAxLjIgMCAwMDAgMi40ek0xMiAwYzYuNjI0IDAgMTIgNS4zNzYgMTIgMTJzLTUuMzc2IDEyLTEyIDEyUzAgMTguNjI0IDAgMTIgNS4zNzYgMCAxMiAwem0wIDE4Yy42NiAwIDEuMi0uNTQgMS4yLTEuMlYxMmMwLS42Ni0uNTQtMS4yLTEuMi0xLjItLjY2IDAtMS4yLjU0LTEuMiAxLjJ2NC44YzAgLjY2LjU0IDEuMiAxLjIgMS4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2JyaWVmY2FzZScsXG4gIHBhdGg6ICdNMjAgN2gtNFY1YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAyMGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY5YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNWg0djJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAna2Fib2InLFxuICB2aWV3Qm94OiAnMCAwIDMgMTEnLFxuICBjb21wbGV4Q29udGVudHM6IGA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjUuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiOS41XCIgcj1cIjEuNVwiLz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwZXJzb24nLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ005IDljMi40ODYgMCA0LjUtMi4wMTQgNC41LTQuNVMxMS40ODYgMCA5IDBhNC40OTkgNC40OTkgMCAwMC00LjUgNC41QzQuNSA2Ljk4NiA2LjUxNCA5IDkgOXptMCAyLjI1Yy0zLjAwNCAwLTkgMS41MDgtOSA0LjV2MS4xMjVDMCAxNy40OTQuNTA2IDE4IDEuMTI1IDE4aDE1Ljc1Yy42MTkgMCAxLjEyNS0uNTA2IDEuMTI1LTEuMTI1VjE1Ljc1YzAtMi45OTItNS45OTYtNC41LTktNC41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21hZ25pZnlpbmdfZ2xhc3MnLFxuICBwYXRoOiAnTTE2LjEyNCAxMy4wNTFhNS4xNTQgNS4xNTQgMCAxMTAtMTAuMzA4IDUuMTU0IDUuMTU0IDAgMDEwIDEwLjMwOE0xNi4xMTQgMGE3Ljg4NiA3Ljg4NiAwIDAwLTYuNDYgMTIuNDA3TDAgMjIuMDYgMS45NCAyNGw5LjY1My05LjY1M0E3Ljg4NiA3Ljg4NiAwIDEwMTYuMTEzIDAnXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdvZmZpY2UnLFxuICBwYXRoOiAnTTEyIDdWM0gydjE4aDIwVjdIMTJ6TTYgMTlINHYtMmgydjJ6bTAtNEg0di0yaDJ2MnptMC00SDRWOWgydjJ6bTAtNEg0VjVoMnYyem00IDEySDh2LTJoMnYyem0wLTRIOHYtMmgydjJ6bTAtNEg4VjloMnYyem0wLTRIOFY1aDJ2MnptMTAgMTJoLTh2LTJoMnYtMmgtMnYtMmgydi0yaC0yVjloOHYxMHptLTItOGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGluaycsXG4gIHBhdGg6ICdNMi4yOCAxMkEzLjcyMyAzLjcyMyAwIDAxNiA4LjI4aDQuOFY2SDZjLTMuMzEyIDAtNiAyLjY4OC02IDZzMi42ODggNiA2IDZoNC44di0yLjI4SDZBMy43MjMgMy43MjMgMCAwMTIuMjggMTJ6bTQuOTIgMS4yaDkuNnYtMi40SDcuMnYyLjR6TTE4IDZoLTQuOHYyLjI4SDE4QTMuNzIzIDMuNzIzIDAgMDEyMS43MiAxMiAzLjcyMyAzLjcyMyAwIDAxMTggMTUuNzJoLTQuOFYxOEgxOGMzLjMxMiAwIDYtMi42ODggNi02cy0yLjY4OC02LTYtNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd3aW5kb3cnLFxuICBwYXRoOiAnTTMgMTNoOFYzSDN2MTB6bTAgOGg4di02SDN2NnptMTAgMGg4VjExaC04djEwem0wLTE4djZoOFYzaC04eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3Bob25lJyxcbiAgcGF0aDogJ000LjgyNyAxMC4zODdhMjAuMTk4IDIwLjE5OCAwIDAwOC43ODYgOC43ODZsMi45MzQtMi45MzNjLjM2LS4zNi44OTMtLjQ4IDEuMzYtLjMyYTE1LjIxIDE1LjIxIDAgMDA0Ljc2Ljc2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzdjQuNjU0QzI0IDIzLjQgMjMuNCAyNCAyMi42NjcgMjQgMTAuMTQ3IDI0IDAgMTMuODUzIDAgMS4zMzMgMCAuNi42IDAgMS4zMzMgMEg2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzIDAgMS42NjcuMjY3IDMuMjY3Ljc2IDQuNzYuMTQ3LjQ2Ny4wNC45ODctLjMzMyAxLjM2bC0yLjkzMyAyLjkzNHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0YWcnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ00xNy40NjkgOC42MjJsLTguMS04LjFBMS43ODkgMS43ODkgMCAwMDguMSAwSDEuOEMuODEgMCAwIC44MSAwIDEuOHY2LjNjMCAuNDk1LjE5OC45NDUuNTMxIDEuMjc4bDguMSA4LjFjLjMyNC4zMjQuNzc0LjUyMiAxLjI2OS41MjJhMS43NiAxLjc2IDAgMDAxLjI2OS0uNTMxbDYuMy02LjNBMS43NiAxLjc2IDAgMDAxOCA5LjljMC0uNDk1LS4yMDctLjk1NC0uNTMxLTEuMjc4ek0zLjE1IDQuNWMtLjc0NyAwLTEuMzUtLjYwMy0xLjM1LTEuMzUgMC0uNzQ3LjYwMy0xLjM1IDEuMzUtMS4zNS43NDcgMCAxLjM1LjYwMyAxLjM1IDEuMzUgMCAuNzQ3LS42MDMgMS4zNS0xLjM1IDEuMzV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZG9jdW1lbnQnLFxuICBwYXRoOiAnTTQgNkgydjE0YzAgMS4xLjkgMiAyIDJoMTR2LTJINFY2em0xNi00SDhjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTEgOUg5VjloMTB2MnptLTQgNEg5di0yaDZ2MnptNC04SDlWNWgxMHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NoZXZyb24nLFxuICB2aWV3Qm94OiAnMCAwIDcgOScsXG4gIGNvbXBsZXhDb250ZW50czogYDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTgpXCI+PHBhdGggZD1cIm0yLjY0MTcwMDQgOC0xLjE0MTcwMDQgMS4wNTc1IDMuNzA4NTAyMDIgMy40NDI1LTMuNzA4NTAyMDIgMy40NDI1IDEuMTQxNzAwNCAxLjA1NzUgNC44NTgyOTk2LTQuNXpcIi8+PC9nPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3N1cHBvcnQnLFxuICBwYXRoOiAnTTEyLjUgMkM3LjgxIDIgNCA1LjgxIDQgMTAuNWMwIDQuNjkgMy44MSA4LjUgOC41IDguNWguNXYzYzQuODYtMi4zNCA4LTcgOC0xMS41QzIxIDUuODEgMTcuMTkgMiAxMi41IDJ6bTEgMTQuNWgtMnYtMmgydjJ6bTAtMy41aC0yYzAtMy4yNSAzLTMgMy01IDAtMS4xLS45LTItMi0ycy0yIC45LTIgMmgtMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgMi41LTMgMi43NS0zIDV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAneWV4dCcsXG4gIHZpZXdCb3g6ICcwIDAgMzAgMzAnLFxuICBwYXRoOiAnTTI1LjUxNyAyOC4xNDJ2LjA5NWgtLjIwNHYuOTA1aC0uMDY2di0uOTA1aC0uMTk3di0uMDk1aC40Njd6bS42NjcgMGguMDY2djFoLS4wNjZ2LS44MjVsLS4yNC41OTVoLS4wMTNsLS4yNC0uNTk1di44MjVoLS4wNjZ2LTFoLjA2NmwuMjQ3LjYxLjI0Ni0uNjF6TTE1IDI4LjhjNy42MjIgMCAxMy44LTYuMTc4IDEzLjgtMTMuOCAwLTcuNjIyLTYuMTc4LTEzLjgtMTMuOC0xMy44QzcuMzc4IDEuMiAxLjIgNy4zNzggMS4yIDE1YzAgNy42MjIgNi4xNzggMTMuOCAxMy44IDEzLjh6TTE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTVDMCA2LjcxNiA2LjcxNiAwIDE1IDB6bS40NSAxNi42NXYtMS4yaDYuNnYxLjJoLTIuN3Y1LjRoLTEuMnYtNS40aC0yLjd6bS0xLjU5OS0xLjM1bC44NDkuODQ5LTIuNjAxIDIuNjAxIDIuNjAxIDIuNjAxLS44NDkuODQ5LTIuNjAxLTIuNjAxTDguNjQ5IDIyLjJsLS44NDktLjg0OSAyLjYwMS0yLjYwMUw3LjggMTYuMTQ5bC44NDktLjg0OSAyLjYwMSAyLjYwMSAyLjYwMS0yLjYwMXpNMTguNjc1IDlhMi4xNzUgMi4xNzUgMCAwMC0xLjg0NyAzLjMyM2wyLjk5NS0yLjk5NUEyLjE2MyAyLjE2MyAwIDAwMTguNjc1IDl6bTAgNS41NWEzLjM3NSAzLjM3NSAwIDExMi44MzMtNS4yMDlsLTMuNzg5IDMuNzg4YTIuMTc1IDIuMTc1IDAgMDAzLjEzLTEuOTU0aDEuMjAxYTMuMzc1IDMuMzc1IDAgMDEtMy4zNzUgMy4zNzV6bS03LjQyNS0zLjczNEwxMy43OCA3LjhsLjkyLjc3MS0yLjg1IDMuMzk3djIuNTgyaC0xLjJ2LTIuNTgyTDcuOCA4LjU3bC45Mi0uNzcxIDIuNTMgMy4wMTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGluJyxcbiAgdmlld0JveDogJzAgMCAxMyAxOCcsXG4gIHBhdGg6ICdtOS4zNzUgMGMtMy41MjQ0NjQyOSAwLTYuMzc1IDIuODE3LTYuMzc1IDYuMyAwIDQuNzI1IDYuMzc1IDExLjcgNi4zNzUgMTEuN3M2LjM3NS02Ljk3NSA2LjM3NS0xMS43YzAtMy40ODMtMi44NTA1MzU3LTYuMy02LjM3NS02LjN6bS4wMDAwMDAxOCA4LjU1MDAwMDA3Yy0xLjI1Njc4NTc2IDAtMi4yNzY3ODU3OS0xLjAwOC0yLjI3Njc4NTc5LTIuMjVzMS4wMjAwMDAwMy0yLjI1IDIuMjc2Nzg1NzktMi4yNWMxLjI1Njc4NTcyIDAgMi4yNzY3ODU4MiAxLjAwOCAyLjI3Njc4NTgyIDIuMjVzLTEuMDIwMDAwMSAyLjI1LTIuMjc2Nzg1ODIgMi4yNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdnZWFyJyxcbiAgcGF0aDogJ00xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmEuMzUzLjM1MyAwIDAxLjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmEuMzUzLjM1MyAwIDAxLS4wOC0uNDVsMS40LTIuNDJjLjA5LS4xNS4yNy0uMjEuNDMtLjE1bDEuNzQuN2MuMzYtLjI4Ljc2LS41MSAxLjE4LS42OWwuMjYtMS44NWMuMDMtLjE3LjE4LS4zLjM1LS4zaDIuOGMuMTcgMCAuMzIuMTMuMzUuMjlsLjI2IDEuODVjLjQzLjE4LjgyLjQxIDEuMTguNjlsMS43NC0uN2MuMTYtLjA2LjM0IDAgLjQzLjE1bDEuNCAyLjQyYy4wOS4xNS4wNS4zNC0uMDguNDVsLTEuNDggMS4xNmMuMDMuMjMuMDUuNDYuMDUuNjl6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGlnaHRfYnVsYicsXG4gIHZpZXdCb3g6ICcwIDAgMzIgMzUnLFxuICBwYXRoOiAnTTExLjU4NSAzMS4wNTZsOC4zOC0uNDkzdi0uOTg2bC04LjM4LjQ5M3pNMTEuNTg1IDMzLjAyOEwxNS43NzUgMzVsNC4xOS0xLjk3MlYzMS41NWwtOC4zOC40OTN2Ljk4NnptNi45MjYtLjQwN2wtMi43MzYgMS4yOS0yLjEzLTEuMDA0IDQuODY2LS4yODZ6TTE1Ljc3NSA3LjM5NGMtNC42MyAwLTguMzggMy4yMDUtOC4zOCA4LjM4IDAgNS4xNzcgNC4xOSA2LjkwMiA0LjE5IDEyLjgxOHYuNDkzbDguMzgtLjQ5M2MwLTUuOTE2IDQuMTktOC4xODggNC4xOS0xMi44MTdhOC4zOCA4LjM4IDAgMDAtOC4zOC04LjM4em01LjYxNyAxMy40OGMtMS4wMjUgMS44MzctMi4xNzQgMy44OTItMi4zODEgNi43ODZsLTYuNDQuMzhjLS4xMjktMy4wMS0xLjI5LTUuMDIxLTIuMzItNi44MDgtLjQ5My0uOC0uOTI4LTEuNjM2LTEuMjk5LTIuNWgxMy41NTZjLS4zMjUuNzA4LS43MDQgMS40MDMtMS4xMTYgMi4xNDJ6bTEuNDc5LTMuMTI4SDguNjI3YTcuNzkzIDcuNzkzIDAgMDEtLjI0Ny0xLjk3MWMwLTQuMzUzIDMuMDQyLTcuMzk1IDcuMzk1LTcuMzk1YTcuMzk0IDcuMzk0IDAgMDE3LjM5NCA3LjM5NSA2LjczOSA2LjczOSAwIDAxLS4zIDEuOTcxaC4wMDJ6TTI2LjYyIDE1LjI4Mmg0LjkzdjFoLTQuOTN6TTIzLjA5NCA3Ljc1NmwyLjA5MS0yLjA5MS42OTguNjk3LTIuMDkyIDIuMDkyek0xNS4yODIgMGgxdjQuOTNoLTF6TTUuNjY2IDYuMzYybC42OTctLjY5NyAyLjA5MSAyLjA5MS0uNjk3LjY5N3pNMCAxNS4yODJoNC45M3YxSDB6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTguOTkxIDBDNC4wMjMgMCAwIDQuMDMyIDAgOXM0LjAyMyA5IDguOTkxIDlDMTMuOTY4IDE4IDE4IDEzLjk2OCAxOCA5cy00LjAzMi05LTkuMDA5LTl6bTMuODE2IDE0LjRMOSAxMi4xMDUgNS4xOTMgMTQuNGwxLjAwOC00LjMyOS0zLjM1Ny0yLjkwNyA0LjQyOC0uMzc4TDkgMi43bDEuNzI4IDQuMDc3IDQuNDI4LjM3OC0zLjM1NyAyLjkwN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjbG9zZScsXG4gIGNvbXBsZXhDb250ZW50czogYFxuICAgIDxwYXRoIGQ9XCJNNyA4bDkuNzE2IDkuNzE2bTAtOS43MTZMNyAxNy43MTZcIiBcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCIvPlxuICBgXG59KTtcbiIsImltcG9ydCB0aHVtYkljb24gZnJvbSAnLi90aHVtYi5qcyc7XG5pbXBvcnQgcmVjZWlwdEljb24gZnJvbSAnLi9yZWNlaXB0LmpzJztcbmltcG9ydCBwYW50aGVvbkljb24gZnJvbSAnLi9wYW50aGVvbi5qcyc7XG5pbXBvcnQgbWljSWNvbiBmcm9tICcuL21pYy5qcyc7XG5pbXBvcnQgZGlyZWN0aW9uc0ljb24gZnJvbSAnLi9kaXJlY3Rpb25zLmpzJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9jYWxlbmRhci5qcyc7XG5pbXBvcnQgY2FsbG91dEljb24gZnJvbSAnLi9jYWxsb3V0LmpzJztcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IGJyaWVmY2FzZUljb24gZnJvbSAnLi9icmllZmNhc2UuanMnO1xuaW1wb3J0IGthYm9iSWNvbiBmcm9tICcuL2thYm9iLmpzJztcbmltcG9ydCBwZXJzb25JY29uIGZyb20gJy4vcGVyc29uLmpzJztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3NJY29uIGZyb20gJy4vbWFnbmlmeWluZ19nbGFzcy5qcyc7XG5pbXBvcnQgb2ZmaWNlSWNvbiBmcm9tICcuL29mZmljZS5qcyc7XG5pbXBvcnQgbGlua0ljb24gZnJvbSAnLi9saW5rLmpzJztcbmltcG9ydCB3aW5kb3dJY29uIGZyb20gJy4vd2luZG93LmpzJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9waG9uZS5qcyc7XG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuL3RhZy5qcyc7XG5pbXBvcnQgZG9jdW1lbnRJY29uIGZyb20gJy4vZG9jdW1lbnQuanMnO1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJy4vY2hldnJvbi5qcyc7XG5pbXBvcnQgc3VwcG9ydEljb24gZnJvbSAnLi9zdXBwb3J0LmpzJztcbmltcG9ydCB5ZXh0SWNvbiBmcm9tICcuL3lleHQuanMnO1xuaW1wb3J0IHBpbkljb24gZnJvbSAnLi9waW4uanMnO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gJy4vZ2Vhci5qcyc7XG5pbXBvcnQgbGlnaHRCdWxiSWNvbiBmcm9tICcuL2xpZ2h0X2J1bGIuanMnO1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJy4vc3Rhci5qcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5qcyc7XG5cbmNvbnN0IGljb25zQXJyYXkgPSBbXG4gIHRodW1iSWNvbixcbiAgcmVjZWlwdEljb24sXG4gIHBhbnRoZW9uSWNvbixcbiAgbWljSWNvbixcbiAgZGlyZWN0aW9uc0ljb24sXG4gIGNhbGVuZGFySWNvbixcbiAgY2FsbG91dEljb24sXG4gIGluZm9JY29uLFxuICBicmllZmNhc2VJY29uLFxuICBrYWJvYkljb24sXG4gIHBlcnNvbkljb24sXG4gIG1hZ25pZnlpbmdHbGFzc0ljb24sXG4gIG9mZmljZUljb24sXG4gIGxpbmtJY29uLFxuICB3aW5kb3dJY29uLFxuICBwaG9uZUljb24sXG4gIHRhZ0ljb24sXG4gIGRvY3VtZW50SWNvbixcbiAgY2hldnJvbkljb24sXG4gIHN1cHBvcnRJY29uLFxuICB5ZXh0SWNvbixcbiAgcGluSWNvbixcbiAgZ2Vhckljb24sXG4gIGxpZ2h0QnVsYkljb24sXG4gIGNsb3NlXG5dO1xuXG5jb25zdCBJY29ucyA9IHt9O1xuXG5pY29uc0FycmF5LmZvckVhY2goaWNvbiA9PiB7XG4gIEljb25zW2ljb24ubmFtZV0gPSBpY29uLm1hcmt1cCgpO1xufSk7XG5cbkljb25zLmRlZmF1bHQgPSBzdGFySWNvbi5tYXJrdXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKiogQG1vZHVsZSBJY29uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBJY29ucyBmcm9tICcuLi8uLi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogSWNvbkNvbXBvbmVudFxuICAgKiBAcGFyYW0gb3B0c1xuICAgKiBAcGFyYW0gb3B0cy5pY29uTmFtZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5jdXN0b21JY29uIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmljb25Vcmwge3N0cmluZ31cbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogbmFtZSBvZiBhbiBpY29uIGZyb20gdGhlIGRlZmF1bHQgaWNvbiBzZXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaWNvbk5hbWUgPSBvcHRzLmljb25OYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIHRoZSBtYXJrdXAgZm9yIGEgZnVsbHkgY3VzdG9tIGljb25cbiAgICAgKiBAdHlwZSB7KnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VzdG9tSWNvbiA9IG9wdHMuY3VzdG9tSWNvbiB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIHRoZSB1cmwgdG8gYSBjdXN0b20gaW1hZ2UgaWNvblxuICAgICAqIEB0eXBlIHtudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaWNvblVybCA9IG9wdHMuaWNvblVybCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHRlciBmb3IgdGhlIGltYWdlIHBhc3RlZCB0byBoYW5kbGViYXJzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW1hZ2UgKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUljb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbUljb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaWNvblVybCkge1xuICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7dGhpcy5pY29uVXJsfVwiIGFsdD1cIlwiIGNsYXNzPVwiSWNvbi1pbWFnZVwiPmA7XG4gICAgfVxuXG4gICAgaWYgKEljb25zW3RoaXMuaWNvbk5hbWVdKSB7XG4gICAgICByZXR1cm4gSWNvbnNbdGhpcy5pY29uTmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEljb25zLmRlZmF1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnSWNvbkNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2ljb25zL2ljb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIGFsbG93aW5nIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIGRlZmF1bHQgZnVuY3Rpb25hbGl0eSB0byBwcm92aWRlIG5hbWUgYW5kIG1hcmt1cFxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7SWNvbkNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICBuYW1lOiB0aGlzLmljb25OYW1lID8gdGhpcy5pY29uTmFtZSA6ICdjdXN0b20nXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5pbXBvcnQgU3BlbGxDaGVja0NvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zcGVsbGNoZWNrY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvbkJpYXNDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvbG9jYXRpb25iaWFzY29tcG9uZW50JztcblxuaW1wb3J0IEZpbHRlckJveENvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyYm94Y29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50JztcbmltcG9ydCBSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuaW1wb3J0IERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZGF0ZXJhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQnO1xuaW1wb3J0IEdlb0xvY2F0aW9uQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgUGFnaW5hdGlvbkNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGFnaW5hdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBmcm9tICcuL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQnO1xuXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2ljb25zL2ljb25jb21wb25lbnQuanMnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX01BTkFHRVIgPSBuZXcgQ29tcG9uZW50TWFuYWdlcigpXG4vLyBDb3JlIENvbXBvbmVudFxuICAucmVnaXN0ZXIoQ29tcG9uZW50KVxuXG4vLyBOYXZpZ2F0aW9uIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKE5hdmlnYXRpb25Db21wb25lbnQpXG5cbi8vIFNlYXJjaCBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihBdXRvQ29tcGxldGVDb21wb25lbnQpXG4gIC5yZWdpc3RlcihTcGVsbENoZWNrQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoTG9jYXRpb25CaWFzQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRHluYW1pY0ZpbHRlcnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihHZW9Mb2NhdGlvbkNvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBhZ2luYXRpb25Db21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpXG5cbi8vIEhlbHBlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihJY29uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IENPTVBPTkVOVF9NQU5BR0VSIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRE9NIH0gZnJvbSAnLi9kb20vZG9tJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi9yZW5kZXJpbmcvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZW1wbGF0ZUxvYWRlciB9IGZyb20gJy4vcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyJztcbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NlcnZpY2VzL2Vycm9ycmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gRXJyb3JSZXBvcnRlclNlcnZpY2UgKi9cblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIGNvbnNvbGUgYW5kIEFQSVxuICpcbiAqIEBpbXBsZW1lbnRzIHtFcnJvclJlcG9ydGVyU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXBpS2V5IHRvIHVzZSBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXhwZXJpZW5jZUtleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZXhwZXJpZW5jZUtleSA9IGNvbmZpZy5leHBlcmllbmNlS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdXNlZCBmb3IgYXBpIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbiB8fCAnY29uZmlnMS4wJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHByaW50IGVudGlyZSBlcnJvciBvYmplY3RzIHRvIHRoZSBjb25zb2xlIGZvciBpbnNwZWN0aW9uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcmludFZlcmJvc2UgPSBjb25maWcucHJpbnRWZXJib3NlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgcmVwb3J0IHRoZSBlcnJvciB0aGUgc2VydmVyIGZvciBsb2dnaW5nIGFuZCBtb25pdG9yaW5nXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5zZW5kVG9TZXJ2ZXIgPSBjb25maWcuc2VuZFRvU2VydmVyO1xuXG4gICAgLy8gQXR0YWNoIHJlcG9ydGluZyBsaXN0ZW5lcnMgdG8gd2luZG93XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZSA9PiB0aGlzLnJlcG9ydChlLmVycm9yKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGUgPT4gdGhpcy5yZXBvcnQoZS5lcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBwcmV0dHkgcHJpbnRzIHRoZSBlcnJvciB0byB0aGUgY29uc29sZSwgb3B0aW9uYWxseVxuICAgKiBwcmludHMgdGhlIGVudGlyZSBlcnJvciBpZiBgcHJpbnRWZXJib3NlYCBpcyB0cnVlLCBhbmQgc2VuZHMgdGhlXG4gICAqIGVycm9yIHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkIGlmIGBzZW5kVG9TZXJ2ZXJgIGlzIHRydWVcbiAgICogQHBhcmFtIHtBbnN3ZXJzQmFzZUVycm9yfSBlcnIgVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqIEByZXR1cm5zIHtBbnN3ZXJzQmFzZUVycm9yfSBUaGUgcmVwb3J0ZWQgZXJyb3JcbiAgICovXG4gIHJlcG9ydCAoZXJyKSB7XG4gICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgQW5zd2Vyc0Jhc2VFcnJvcikgfHwgZXJyLnJlcG9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyLnJlcG9ydGVkID0gdHJ1ZTtcblxuICAgIHRoaXMucHJpbnRFcnJvcihlcnIpO1xuXG4gICAgaWYgKHRoaXMuc2VuZFRvU2VydmVyKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2Vycm9ycycsXG4gICAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgICAnZXhwZXJpZW5jZVZlcnNpb24nOiB0aGlzLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5leHBlcmllbmNlS2V5XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXF1ZXN0LmdldCgpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcmludHMgdGhlIGdpdmVuIGVycm9yIHRvIHRoZSBicm93c2VyIGNvbnNvbGVcbiAgICogQHBhcmFtIHtBbnN3ZXJzQmFzZUVycm9yfSBlcnIgVGhlIGVycm9yIHRvIGJlIHByaW50ZWRcbiAgICovXG4gIHByaW50RXJyb3IgKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xuICAgIGlmICh0aGlzLnByaW50VmVyYm9zZSkge1xuICAgICAgY29uc29sZS5sb2coeyAuLi5lcnIgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvZXJyb3JyZXBvcnRlcnNlcnZpY2UnKS5kZWZhdWx0fSBFcnJvclJlcG9ydGVyU2VydmljZSAqL1xuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHtFcnJvclJlcG9ydGVyU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUVycm9yUmVwb3J0ZXIge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKiogQG1vZHVsZSBQZXJzaXN0ZW50U3RvcmFnZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBhcmFtcyBtb2RlbFxuICAgICAqIEB0eXBlIHtTZWFyY2hQYXJhbXN9XG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBoaXN0b3J5IGVkaXQgdGltZXIsIGlmIGFueVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBldmVyeSBzdG9yYWdlIHVwZGF0ZVxuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gY29uZmlnLnVwZGF0ZUxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHN0b3JhZ2UgcmVzZXRzXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fcmVzZXRMaXN0ZW5lciA9IGNvbmZpZy5yZXNldExpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fcmVzZXRMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgdGhlIGdpdmVuIGtleS92YWx1ZSBwYWlyIGludG8gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gaW5zZXJ0IHRoZSBkYXRhIGluXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBpbnNlcnRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignU3RvcmFnZSBkYXRhIGtleSBtdXN0IGJlIGEgc3RyaW5nJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3RGF0YSA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgbmV3RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0aGlzLl9wYXJhbXMuc2V0KGtleSwgbmV3RGF0YSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgZ2l2ZW4ga2V5IGZyb20gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIHRoaXMuX3BhcmFtcy5kZWxldGUoa2V5KTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICBfdXBkYXRlSGlzdG9yeSAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpc3RvcnlUaW1lcik7XG4gICAgfVxuXG4gICAgLy8gYmF0Y2ggdXBkYXRlIGNhbGxzIGFjcm9zcyBjb21wb25lbnRzIHRvIGF2b2lkIHVwZGF0aW5nIHRoZSB1cmwgdG9vIG11Y2hcbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYD8ke3RoaXMuX3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgfSxcbiAgICAgIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIHRoZSBnaXZlbiBsaXN0IG9mIGNhbGxiYWNrcyB3aXRoIHRoZSBjdXJyZW50IHN0b3JhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uW119IGxpc3RlbmVycyBUaGUgY2FsbGJhY2tzIHRvIGludm9rZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NhbGxMaXN0ZW5lciAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcih0aGlzLmdldEFsbCgpLCB0aGlzLl9wYXJhbXMudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUga2V5L3ZhbHVlIHBhaXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIGdldEFsbCAoKSB7XG4gICAgY29uc3QgYWxsUGFyYW1zID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMuX3BhcmFtcy5lbnRyaWVzKCkpIHtcbiAgICAgIGFsbFBhcmFtc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWxsUGFyYW1zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBbnN3ZXJzQ29uZmlnRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqIEBtb2R1bGUgU2VhcmNoQ29uZmlnICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXggcmVzdWx0cyBwZXIgc2VhcmNoLlxuICAgICAqIEFsc28gZGVmaW5lcyB0aGUgbnVtYmVyIG9mIHJlc3VsdHMgcGVyIHBhZ2UsIGlmIHBhZ2luYXRpb24gaXMgZW5hYmxlZFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5saW1pdCA9IGNvbmZpZy5saW1pdCB8fCAyMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgdG8gdXNlIGZvciBhbGwgc2VhcmNoZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5kZWZhdWx0SW5pdGlhbFNlYXJjaCA9IGNvbmZpZy5kZWZhdWx0SW5pdGlhbFNlYXJjaDtcblxuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5saW1pdCAhPT0gJ251bWJlcicgfHwgdGhpcy5saW1pdCA8IDEgfHwgdGhpcy5saW1pdCA+IDUwKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbmZpZ0Vycm9yKCdTZWFyY2ggTGltaXQgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUwJywgJ1NlYXJjaENvbmZpZycpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IG5ldyBIaWdobGlnaHRlZFZhbHVlKGRhdGEpLmdldEludmVydGVkKCk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2F1dG9jb21wbGV0ZXNlcnZpY2UnKS5kZWZhdWx0fSBBdXRvQ29tcGxldGVTZXJ2aWNlICovXG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqXG4gKiBAaW1wbGVtZW50cyB7QXV0b0NvbXBsZXRlU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IGNvbmZpZy52ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogY29uZmlnLmJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NlYXJjaF9wYXJhbWV0ZXJzJzogSlNPTi5zdHJpbmdpZnkoY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgY29uZmlnLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2JhcktleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1ZlcnRpY2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBxdWVyeVVuaXZlcnNhbCAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudW5pdmVyc2FsKHJlc3BvbnNlLnJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVW5pdmVyc2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEsIHsgQXV0b0NvbXBsZXRlUmVzdWx0IH0gZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvYXV0b2NvbXBsZXRlc2VydmljZScpLmRlZmF1bHR9IEF1dG9Db21wbGV0ZVNlcnZpY2UgKi9cblxuY29uc3QgdW5pdmVyc2FsT3B0aW9ucyA9IFtcbiAgJ3doYXQgaXMgeWV4dCcsXG4gICd3aG8gaXMgdGhlIGNlbyBvZiB5ZXh0J1xuXTtcblxuY29uc3QgdmVydGljYWxPcHRpb25zID0gW1xuICAnbmVhciBtZScsXG4gICdpbiBuZXcgeW9yaycsXG4gICdhdmFpbGFibGUgbm93J1xuXTtcblxuLyoqXG4gKiBNb2NrQXV0b0NvbXBsZXRlU2VydmljZSBzZXJ2ZXMgYXV0b2NvbXBsZXRlIHF1ZXJpZXMgd2l0aCBtb2NrIGRhdGFcbiAqXG4gKiBAaW1wbGVtZW50cyB7QXV0b0NvbXBsZXRlU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9ja0F1dG9Db21wbGV0ZVNlcnZpY2Uge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlGaWx0ZXIgKGlucHV0LCBjb25maWcpIHtcbiAgICAvLyBUT0RPKGFtdWxsaW5ncyk6IFNpbXVsYXRlIGZpbHRlciBzZWFyY2gsIHdpdGggc2VjdGlvbnNcbiAgICByZXR1cm4gZW1wdHlSZXN1bHRzKCk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIHZlcnRpY2FsS2V5KSB7XG4gICAgcmV0dXJuIGZpbHRlck9wdGlvbnMoaW5wdXQsIHZlcnRpY2FsT3B0aW9uc1xuICAgICAgLm1hcChvcHQgPT4gYCR7dmVydGljYWxLZXl9ICR7b3B0fWApXG4gICAgICAuY29uY2F0KHVuaXZlcnNhbE9wdGlvbnMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBxdWVyeVVuaXZlcnNhbCAoaW5wdXQpIHtcbiAgICByZXR1cm4gZmlsdGVyT3B0aW9ucyhpbnB1dCwgdW5pdmVyc2FsT3B0aW9ucyk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgUXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zIEhhcmRjb2RlZCBhdXRvY29tcGxldGUgb3B0aW9uc1xuICogQHJldHVybnMge1Byb21pc2U8QXV0b0NvbXBsZXRlRGF0YT59XG4gKi9cbmZ1bmN0aW9uIGZpbHRlck9wdGlvbnMgKGlucHV0LCBvcHRpb25zKSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZW1wdHlSZXN1bHRzKCk7XG4gIH1cblxuICBjb25zdCBsb3dlcmNhc2UgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCByZXN1bHRzID0gb3B0aW9uc1xuICAgIC5maWx0ZXIob3B0ID0+IG9wdC5pbmNsdWRlcyhsb3dlcmNhc2UpKVxuICAgIC5tYXAob3B0ID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQoe1xuICAgICAgdmFsdWU6IG9wdCxcbiAgICAgIG1hdGNoZWRTdWJzdHJpbmdzOiBbe1xuICAgICAgICBvZmZzZXQ6IG9wdC5pbmRleE9mKGxvd2VyY2FzZSksXG4gICAgICAgIGxlbmd0aDogbG93ZXJjYXNlLmxlbmd0aFxuICAgICAgfV1cbiAgICB9KSk7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEF1dG9Db21wbGV0ZURhdGEoe1xuICAgIHNlY3Rpb25zOiBbeyByZXN1bHRzIH1dLFxuICAgIHF1ZXJ5SWQ6IHJhbmRvbVN0cmluZygpXG4gIH0pKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBdXRvQ29tcGxldGVEYXRhPn1cbiAqL1xuZnVuY3Rpb24gZW1wdHlSZXN1bHRzICgpIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQXV0b0NvbXBsZXRlRGF0YSh7XG4gICAgc2VjdGlvbnM6IFt7fV0sXG4gICAgcXVlcnlJZDogcmFuZG9tU3RyaW5nKClcbiAgfSkpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbVN0cmluZyAoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvbkFuc3dlckFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9xdWVzdGlvbmFuc3dlcnNlcnZpY2UnKS5kZWZhdWx0fSBRdWVzdGlvbkFuc3dlclNlcnZpY2UgKi9cblxuLyoqXG4gKiBRdWVzdGlvbkFuc3dlckFwaSBzdWJtaXRzIHF1ZXN0aW9ucyB2aWEgdGhlIFEmQSBSRVNUIEFQSVxuICpcbiAqIEBpbXBsZW1lbnRzIHtRdWVzdGlvbkFuc3dlclNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uQW5zd2VyQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdRdWVzdGlvbkFuc3dlckFwaScpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgYmFzZVVybDogQVBJX0JBU0VfVVJMLFxuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvcXVlc3Rpb25zJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlbnRpdHlJZCc6IHF1ZXN0aW9uLmVudGl0eUlkLFxuICAgICAgICAnc2l0ZSc6IHF1ZXN0aW9uLnNpdGUsXG4gICAgICAgICduYW1lJzogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogcXVlc3Rpb24uZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBxdWVzdGlvbi5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbixcbiAgICAgICAgJ3F1ZXN0aW9uTGFuZ3VhZ2UnOiBxdWVzdGlvbi5xdWVzdGlvbkxhbmd1YWdlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5wb3N0KHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoXG4gICAgICAgICAgJ1F1ZXN0aW9uIHN1Ym1pdCBmYWlsZWQnLFxuICAgICAgICAgICdRdWVzdGlvbkFuc3dlckFwaScsXG4gICAgICAgICAgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1vY2tRdWVzdGlvbkFuc3dlclNlcnZpY2UgKi9cblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NlcnZpY2VzL3F1ZXN0aW9uYW5zd2Vyc2VydmljZScpLmRlZmF1bHR9IFF1ZXN0aW9uQW5zd2VyU2VydmljZSAqL1xuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHtRdWVzdGlvbkFuc3dlclNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vY2tRdWVzdGlvbkFuc3dlclNlcnZpY2Uge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3VibWl0UXVlc3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgLy8gVE9ETyhhbXVsbGluZ3MpOiBNYWtlIGFjdHVhbCByZXNwb25zZSBvYmplY3Qgb25jZSB3ZSdyZSB1c2luZyBpdCBmb3JcbiAgICAvLyBzb21ldGhpbmdcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTtcbiAgfVxufVxuIiwiLyogZ2xvYmFsIGZldGNoICovXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9tb2RlbHMvc2VjdGlvbicpLmRlZmF1bHR9IFNlY3Rpb24gKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zZXJ2aWNlcy9zZWFyY2hzZXJ2aWNlJykuZGVmYXVsdH0gU2VhcmNoU2VydmljZSAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlc3VsdERhdGFcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhXG4gKiBAcHJvcGVydHkge3N0cmluZyB9IGh0bWxUaXRsZVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFJlc3VsdHNNb2RpZmllclxuICogQHBhcmFtIHtSZXN1bHREYXRhW119IHJlc3VsdHNcbiAqIEByZXR1cm5zIHtSZXN1bHREYXRhW119XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTW9ja0RhdGFDb25zdW1lclxuICogQHBhcmFtIHtTZWN0aW9uW119IHNlY3Rpb25zXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5cbmNvbnN0IEFSQklUUkFSWV9CVVNJTkVTU19JRCA9IDkxOTg3MTtcblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7U2VhcmNoU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9ja1NlYXJjaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1Byb21pc2U8c3RyaW5nPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2dldE1vY2tEYXRhSnNvbiA9IGZldGNoKCdodHRwczovL2Fzc2V0cy5zaXRlc2Nkbi5uZXQvYW5zd2Vycy90ZXN0ZGF0YS9zZWFyY2gvbW9ja2RhdGFfdjEuanNvbicpXG4gICAgICAudGhlbihyZXNwID0+IHJlc3AudGV4dCgpKVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgeyBpbnB1dCwgZmlsdGVyLCBmYWNldEZpbHRlciwgbGltaXQsIG9mZnNldCwgaWQsIGdlb2xvY2F0aW9uLCBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCwgc2tpcFNwZWxsQ2hlY2ssIHF1ZXJ5VHJpZ2dlciB9KSB7XG4gICAgcmV0dXJuIHRoaXMudXNlTW9ja0RhdGEoc2VjdGlvbnMgPT4ge1xuICAgICAgaWYgKGlucHV0ID09PSAnJykge1xuICAgICAgICByZXR1cm4gZGVsYXllZFJlc3BvbnNlKGNvbnN0cnVjdFZlcnRpY2FsUmVzcG9uc2Uoe1xuICAgICAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgICAgIGFwcGxpZWRRdWVyeUZpbHRlcnM6IFtdXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgLy8gRWl0aGVyIGZpbmQgYSBzZWN0aW9uIHdpdGggbWF0Y2hpbmcgSUQsIG9yIHBpY2sgb25lIGF0IHJhbmRvbVxuICAgICAgbGV0IHNlY3Rpb24gPSBzZWN0aW9ucy5maW5kKFxuICAgICAgICB2ZXJ0aWNhbE1vZHVsZSA9PiB2ZXJ0aWNhbEtleSA9PT0gdmVydGljYWxNb2R1bGVbJ3ZlcnRpY2FsQ29uZmlnSWQnXVxuICAgICAgKTtcbiAgICAgIGlmIChzZWN0aW9uID09IG51bGwpIHtcbiAgICAgICAgc2VjdGlvbiA9IHNlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNlY3Rpb25zLmxlbmd0aCldO1xuICAgICAgfVxuXG4gICAgICBtb2RpZnlSZXN1bHRzKHNlY3Rpb24sIGdldFJlc3VsdHNGaWx0ZXJlcihpbnB1dCkpO1xuICAgICAgaWYgKG9mZnNldCAhPSBudWxsICYmIGxpbWl0ICE9IG51bGwpIHtcbiAgICAgICAgbW9kaWZ5UmVzdWx0cyhzZWN0aW9uLCBmdW5jdGlvbiBsaW1pdCAocmVzdWx0cykge1xuICAgICAgICAgIHJldHVybiByZXN1bHRzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbGltaXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcCA9IGNvbnN0cnVjdFZlcnRpY2FsUmVzcG9uc2Uoc2VjdGlvbik7XG4gICAgICByZXR1cm4gZGVsYXllZFJlc3BvbnNlKHJlc3ApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHVuaXZlcnNhbFNlYXJjaCAocXVlcnlTdHJpbmcsIHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnVzZU1vY2tEYXRhKHNlY3Rpb25zID0+IHtcbiAgICAgIGlmIChxdWVyeVN0cmluZyA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGRlbGF5ZWRSZXNwb25zZShjb25zdHJ1Y3RVbml2ZXJzYWxSZXNwb25zZShbXSkpO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICBtb2RpZnlSZXN1bHRzKHNlY3Rpb24sIGdldFJlc3VsdHNGaWx0ZXJlcihxdWVyeVN0cmluZykpO1xuICAgICAgfSk7XG5cbiAgICAgIHNlY3Rpb25zID0gc2VjdGlvbnMuZmlsdGVyKHNlY3Rpb24gPT4ge1xuICAgICAgICByZXR1cm4gc2VjdGlvbi5yZXN1bHRzLmxlbmd0aCA+IDA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcCA9IGNvbnN0cnVjdFVuaXZlcnNhbFJlc3BvbnNlKHNlY3Rpb25zKTtcbiAgICAgIHJldHVybiBkZWxheWVkUmVzcG9uc2UocmVzcCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtNb2NrRGF0YUNvbnN1bWVyfSBjb25zdW1lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdXNlTW9ja0RhdGEgKGNvbnN1bWVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1vY2tEYXRhSnNvbi50aGVuKEpTT04ucGFyc2UpLnRoZW4oY29uc3VtZXIpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5U3RyaW5nXG4gKiBAcmV0dXJuIHtSZXN1bHRzTW9kaWZpZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFJlc3VsdHNGaWx0ZXJlciAocXVlcnlTdHJpbmcpIHtcbiAgcmV0dXJuIHJlc3VsdHMgPT4gcmVzdWx0cy5maWx0ZXIocmVzdWx0ID0+IHtcbiAgICBpZiAocmVzdWx0Lmh0bWxUaXRsZSAmJiByZXN1bHQuaHRtbFRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnlTdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHJlc3VsdC5kYXRhKSB7XG4gICAgICBjb25zdCB2YWwgPSByZXN1bHQuZGF0YVtwcm9wXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeVN0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtTZWN0aW9ufSBzZWN0aW9uXG4gKiBAcGFyYW0ge1Jlc3VsdHNNb2RpZmllcn0gbW9kaWZ5Rm5cbiAqL1xuZnVuY3Rpb24gbW9kaWZ5UmVzdWx0cyAoc2VjdGlvbiwgbW9kaWZ5Rm4pIHtcbiAgc2VjdGlvbi5yZXN1bHRzID0gbW9kaWZ5Rm4oc2VjdGlvbi5yZXN1bHRzKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NlY3Rpb25bXX0gc2VjdGlvbnMgQSBsaXN0IG9mIG1vY2sgc2VjdGlvbiBkYXRhXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIG1vY2sgQW5zd2Vyc0FwaSByZXNwb25zZVxuICovXG5mdW5jdGlvbiBjb25zdHJ1Y3RVbml2ZXJzYWxSZXNwb25zZSAoc2VjdGlvbnMpIHtcbiAgLy8gVE9ETyhhbXVsbGluZ3MpOiBzcGVsbGNoZWNrLCBnZW8sIGZpbHRlcnNcbiAgLy8gVE9ETyhhbXVsbGluZ3MpOiBGYWtlIGVuY29kZWRTdGF0ZSBvbmNlIHRoZSBTREsgdXNlcyBpdFxuICBzZWN0aW9ucyA9IHNlY3Rpb25zLm1hcChmaWxsU2VjdGlvbkZpZWxkcyk7XG4gIHJldHVybiB7XG4gICAgbWV0YToge1xuICAgICAgdXVpZDogdXVpZFY0KCksXG4gICAgICBlcnJvcnM6IFtdXG4gICAgfSxcbiAgICByZXNwb25zZToge1xuICAgICAgYnVzaW5lc3NJZDogQVJCSVRSQVJZX0JVU0lORVNTX0lELFxuICAgICAgbW9kdWxlczogc2VjdGlvbnMsXG4gICAgICBmYWlsZWRWZXJ0aWNhbHM6IFtdLFxuICAgICAgcXVlcnlJZDogdXVpZFY0KCksXG4gICAgICBzZWFyY2hJbnRlbnRzOiBbXVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NlY3Rpb259IHNlY3Rpb24gQSBtb2NrIHNlY3Rpb24gZGF0YVxuICogQHJldHVybnMge09iamVjdH0gQSBtb2NrIEFuc3dlcnNBcGkgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0VmVydGljYWxSZXNwb25zZSAoc2VjdGlvbikge1xuICAvLyBUT0RPKGFtdWxsaW5ncyk6IHNwZWxsY2hlY2ssIGdlbywgZmlsdGVyc1xuICAvLyBUT0RPKGFtdWxsaW5ncyk6IEZha2UgZW5jb2RlZFN0YXRlIG9uY2UgdGhlIFNESyB1c2VzIGl0XG4gIHNlY3Rpb24gPSBmaWxsU2VjdGlvbkZpZWxkcyhzZWN0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBtZXRhOiB7XG4gICAgICB1dWlkOiB1dWlkVjQoKSxcbiAgICAgIGVycm9yczogW11cbiAgICB9LFxuICAgIHJlc3BvbnNlOiBPYmplY3QuYXNzaWduKHNlY3Rpb24sIHtcbiAgICAgIGJ1c2luZXNzSWQ6IEFSQklUUkFSWV9CVVNJTkVTU19JRCxcbiAgICAgIHF1ZXJ5SWQ6IHV1aWRWNCgpLFxuICAgICAgc2VhcmNoSW50ZW50czogW11cbiAgICB9KVxuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U2VjdGlvbn1cbiAqIEByZXR1cm5zIHtTZWN0aW9ufVxuICovXG5mdW5jdGlvbiBmaWxsU2VjdGlvbkZpZWxkcyAoc2VjdGlvbikge1xuICByZXR1cm4ge1xuICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHNlY3Rpb24udmVydGljYWxDb25maWdJZCxcbiAgICByZXN1bHRzQ291bnQ6IHNlY3Rpb24ucmVzdWx0cy5sZW5ndGgsXG4gICAgZW5jb2RlZFN0YXRlOiAnJyxcbiAgICByZXN1bHRzOiBzZWN0aW9uLnJlc3VsdHMsXG4gICAgYXBwbGllZFF1ZXJ5RmlsdGVyczogc2VjdGlvbi5hcHBsaWVkUXVlcnlGaWx0ZXJzLFxuICAgIHF1ZXJ5RHVyYXRpb25NaWxsaXM6IHJhbmRvbUludCg1MCwgMTAwMCksXG4gICAgZmFjZXRzOiBzZWN0aW9uLmZhY2V0cyxcbiAgICBzb3VyY2U6IHNlY3Rpb24uc291cmNlXG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IHJlc3BcbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59XG4gKi9cbmZ1bmN0aW9uIGRlbGF5ZWRSZXNwb25zZSAocmVzcCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKHJlc3ApO1xuICAgIH0sIHJhbmRvbUludCgyNTAsIDEwMDApKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29kZS1nb2xmLXkgYnV0IGxlZ2l0IGJhc2ljIFVVSUQgdjQgaW1wbGVtZW50YXRpb24uIE5vdCBjcnlwdG9ncmFwaGljYWxseSBzZWN1cmUuXG4gKiBGcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2plZC85ODI4ODNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgdjQtY29tcGxpYW50IFVVSURcbiAqL1xuZnVuY3Rpb24gdXVpZFY0ICgpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBiIChhKSB7IHJldHVybiBhID8gKGEgXiBNYXRoLnJhbmRvbSgpICogMTYgPj4gYSAvIDQpLnRvU3RyaW5nKDE2KSA6IChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBiKTsgfSkoKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIGluY2x1c2l2ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBleGNsdXNpdmVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgaW4gdGhlIHNwZWNpZmllZCByYW5nZVxuICovXG5mdW5jdGlvbiByYW5kb21JbnQgKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vdWkvY29tcG9uZW50cy9jb21wb25lbnQnO1xuXG5pbXBvcnQgRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXInO1xuaW1wb3J0IENvbnNvbGVFcnJvclJlcG9ydGVyIGZyb20gJy4vY29yZS9lcnJvcnMvY29uc29sZWVycm9ycmVwb3J0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIsIE5vb3BBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgUGVyc2lzdGVudFN0b3JhZ2UgZnJvbSAnLi91aS9zdG9yYWdlL3BlcnNpc3RlbnRzdG9yYWdlJztcbmltcG9ydCBHbG9iYWxTdG9yYWdlIGZyb20gJy4vY29yZS9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hDb25maWcgZnJvbSAnLi9jb3JlL21vZGVscy9zZWFyY2hjb25maWcnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUFwaSBmcm9tICcuL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZWFwaSc7XG5pbXBvcnQgTW9ja0F1dG9Db21wbGV0ZVNlcnZpY2UgZnJvbSAnLi9jb3JlL3NlYXJjaC9tb2NrYXV0b2NvbXBsZXRlc2VydmljZSc7XG5pbXBvcnQgUXVlc3Rpb25BbnN3ZXJBcGkgZnJvbSAnLi9jb3JlL3NlYXJjaC9xdWVzdGlvbmFuc3dlcmFwaSc7XG5pbXBvcnQgTW9ja1F1ZXN0aW9uQW5zd2VyU2VydmljZSBmcm9tICcuL2NvcmUvc2VhcmNoL21vY2txdWVzdGlvbmFuc3dlcnNlcnZpY2UnO1xuaW1wb3J0IFNlYXJjaEFwaSBmcm9tICcuL2NvcmUvc2VhcmNoL3NlYXJjaGFwaSc7XG5pbXBvcnQgTW9ja1NlYXJjaFNlcnZpY2UgZnJvbSAnLi9jb3JlL3NlYXJjaC9tb2Nrc2VhcmNoc2VydmljZSc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvc2VydmljZXMvc2VhcmNoc2VydmljZScpLmRlZmF1bHR9IFNlYXJjaFNlcnZpY2UgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvc2VydmljZXMvYXV0b2NvbXBsZXRlc2VydmljZScpLmRlZmF1bHR9IEF1dG9Db21wbGV0ZVNlcnZpY2UgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvc2VydmljZXMvcXVlc3Rpb25hbnN3ZXJzZXJ2aWNlJykuZGVmYXVsdH0gUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL2Vycm9ycmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gRXJyb3JSZXBvcnRlclNlcnZpY2UgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUvc2VydmljZXMvYW5hbHl0aWNzcmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gQW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlICovXG5cbi8qKlxuICogQHR5cGVkZWYgU2VydmljZXNcbiAqIEBwcm9wZXJ0eSB7U2VhcmNoU2VydmljZX0gc2VhcmNoU2VydmljZVxuICogQHByb3BlcnR5IHtBdXRvQ29tcGxldGVTZXJ2aWNlfSBhdXRvQ29tcGxldGVTZXJ2aWNlXG4gKiBAcHJvcGVydHkge1F1ZXN0aW9uQW5zd2VyU2VydmljZX0gcXVlc3Rpb25BbnN3ZXJTZXJ2aWNlXG4gKiBAcHJvcGVydHkge0Vycm9yUmVwb3J0ZXJTZXJ2aWNlfSBlcnJvclJlcG9ydGVyU2VydmljZVxuICovXG5cbmNvbnN0IERFRkFVTFRTID0ge1xuICBsb2NhbGU6ICdlbidcbn07XG5cbi8qKlxuICogVGhlIG1haW4gQW5zd2VycyBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIENvbXBvbmVudCBiYXNlIGNsYXNzIGZvciBjdXN0b21cbiAgICAgKiBjb21wb25lbnRzIHRvIGV4dGVuZFxuICAgICAqL1xuICAgIHRoaXMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEFuYWx5dGljc0V2ZW50IGJhc2UgY2xhc3MgZm9yIHJlcG9ydGluZ1xuICAgICAqIGN1c3RvbSBhbmFseXRpY3NcbiAgICAgKi9cbiAgICB0aGlzLkFuYWx5dGljc0V2ZW50ID0gQW5hbHl0aWNzRXZlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSBvZiB0aGUgcmVuZGVyZXIgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50c1xuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLlxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVycy5IYW5kbGViYXJzKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudHMgPSBDT01QT05FTlRfTUFOQUdFUjtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGFwaVxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VsaWdpYmxlRm9yQW5hbHl0aWNzID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7U2VydmljZXN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZXJ2aWNlcyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgaW5pdCAoY29uZmlnKSB7XG4gICAgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVFMsIGNvbmZpZyk7XG4gICAgaWYgKHR5cGVvZiBjb25maWcuYXBpS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhcGlLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5leHBlcmllbmNlS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBleHBlcmllbmNlS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgY29uZmlnLnNlYXJjaCA9IG5ldyBTZWFyY2hDb25maWcoY29uZmlnLnNlYXJjaCk7XG5cbiAgICBjb25zdCBnbG9iYWxTdG9yYWdlID0gbmV3IEdsb2JhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBwZXJzaXN0ZW50U3RvcmFnZSA9IG5ldyBQZXJzaXN0ZW50U3RvcmFnZSh7XG4gICAgICB1cGRhdGVMaXN0ZW5lcjogY29uZmlnLm9uU3RhdGVDaGFuZ2UsXG4gICAgICByZXNldExpc3RlbmVyOiBkYXRhID0+IGdsb2JhbFN0b3JhZ2Uuc2V0QWxsKGRhdGEpXG4gICAgfSk7XG4gICAgZ2xvYmFsU3RvcmFnZS5zZXRBbGwocGVyc2lzdGVudFN0b3JhZ2UuZ2V0QWxsKCkpO1xuICAgIGdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9DT05GSUcsIGNvbmZpZy5zZWFyY2gpO1xuICAgIGxldCBzZXNzaW9uVHJhY2tpbmdFbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5zZXNzaW9uVHJhY2tpbmdFbmFibGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHNlc3Npb25UcmFja2luZ0VuYWJsZWQgPSBjb25maWcuc2Vzc2lvblRyYWNraW5nRW5hYmxlZDtcbiAgICB9XG4gICAgZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU0VTU0lPTlNfT1BUX0lOLCBzZXNzaW9uVHJhY2tpbmdFbmFibGVkKTtcblxuICAgIHRoaXMuX3NlcnZpY2VzID0gY29uZmlnLm1vY2sgPyBnZXRNb2NrU2VydmljZXMoKSA6IGdldFNlcnZpY2VzKGNvbmZpZyk7XG5cbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBnbG9iYWxTdG9yYWdlOiBnbG9iYWxTdG9yYWdlLFxuICAgICAgcGVyc2lzdGVudFN0b3JhZ2U6IHBlcnNpc3RlbnRTdG9yYWdlLFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBmaWVsZEZvcm1hdHRlcnM6IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMsXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlLFxuICAgICAgc2VhcmNoU2VydmljZTogdGhpcy5fc2VydmljZXMuc2VhcmNoU2VydmljZSxcbiAgICAgIGF1dG9Db21wbGV0ZVNlcnZpY2U6IHRoaXMuX3NlcnZpY2VzLmF1dG9Db21wbGV0ZVNlcnZpY2UsXG4gICAgICBxdWVzdGlvbkFuc3dlclNlcnZpY2U6IHRoaXMuX3NlcnZpY2VzLnF1ZXN0aW9uQW5zd2VyU2VydmljZVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5vblN0YXRlQ2hhbmdlICYmIHR5cGVvZiBjb25maWcub25TdGF0ZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnLm9uU3RhdGVDaGFuZ2UocGVyc2lzdGVudFN0b3JhZ2UuZ2V0QWxsKCksIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNcbiAgICAgIC5zZXRDb3JlKHRoaXMuY29yZSlcbiAgICAgIC5zZXRSZW5kZXJlcih0aGlzLnJlbmRlcmVyKTtcblxuICAgIHRoaXMuX2VsaWdpYmxlRm9yQW5hbHl0aWNzID0gY29uZmlnLmJ1c2luZXNzSWQgIT0gbnVsbDtcbiAgICBpZiAodGhpcy5fZWxpZ2libGVGb3JBbmFseXRpY3MpIHtcbiAgICAgIC8vIFRPRE8oYW11bGxpbmdzKTogSW5pdGlhbGl6ZSB3aXRoIG90aGVyIHNlcnZpY2VzXG4gICAgICBjb25zdCByZXBvcnRlciA9IGNvbmZpZy5tb2NrXG4gICAgICAgID8gbmV3IE5vb3BBbmFseXRpY3NSZXBvcnRlcigpXG4gICAgICAgIDogbmV3IEFuYWx5dGljc1JlcG9ydGVyKFxuICAgICAgICAgIHRoaXMuY29yZSxcbiAgICAgICAgICBjb25maWcuZXhwZXJpZW5jZUtleSxcbiAgICAgICAgICBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICAgY29uZmlnLmJ1c2luZXNzSWQsXG4gICAgICAgICAgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpO1xuXG4gICAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlclNlcnZpY2UgPSByZXBvcnRlcjtcblxuICAgICAgdGhpcy5jb21wb25lbnRzLnNldEFuYWx5dGljc1JlcG9ydGVyKHJlcG9ydGVyKTtcbiAgICAgIGluaXRTY3JvbGxMaXN0ZW5lcihyZXBvcnRlcik7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RGVmYXVsdEluaXRpYWxTZWFyY2goY29uZmlnLnNlYXJjaCk7XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkb21SZWFkeSAoY2IpIHtcbiAgICBET00ub25SZWFkeShjYik7XG4gIH1cblxuICBvblJlYWR5IChjYikge1xuICAgIHRoaXMuX29uUmVhZHkgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGN1c3RvbSBjb21wb25lbnQgdHlwZSBzbyBpdCBjYW4gYmUgY3JlYXRlZCB2aWFcbiAgICogYWRkQ29tcG9uZW50IGFuZCB1c2VkIGFzIGEgY2hpbGQgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRDbGFzc1xuICAgKi9cbiAgcmVnaXN0ZXJDb21wb25lbnRUeXBlIChjb21wb25lbnRDbGFzcykge1xuICAgIHRoaXMuY29tcG9uZW50cy5yZWdpc3Rlcihjb21wb25lbnRDbGFzcyk7XG4gIH1cblxuICBhZGRDb21wb25lbnQgKHR5cGUsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRzID0ge1xuICAgICAgICBjb250YWluZXI6IG9wdHNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdGYWlsZWQgdG8gYWRkIGNvbXBvbmVudCcsIHR5cGUsIGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCAtIGFuZCBhbGwgb2YgaXRzIGNoaWxkcmVuIC0gd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ29tcG9uZW50IChuYW1lKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnJlbW92ZUJ5TmFtZShuYW1lKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogT3B0IGluIG9yIG91dCBvZiBjb252ZXJ0aW9uIHRyYWNraW5nIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdEluXG4gICAqL1xuICBzZXRDb252ZXJzaW9uc09wdEluIChvcHRJbikge1xuICAgIGlmICh0aGlzLl9lbGlnaWJsZUZvckFuYWx5dGljcykge1xuICAgICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlLnNldENvbnZlcnNpb25UcmFja2luZ0VuYWJsZWQob3B0SW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcHQgaW4gb3Igb3V0IG9mIHNlc3Npb24gY29va2llc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdEluXG4gICAqL1xuICBzZXRTZXNzaW9uc09wdEluIChvcHRJbikge1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRVNTSU9OU19PUFRfSU4sIG9wdEluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc2VhcmNoIHF1ZXJ5IG9uIGluaXRpYWxpemF0aW9uIGZvciB2ZXJ0aWNhbCBzZWFyY2hlcnMgdGhhdCBoYXZlIGFcbiAgICogZGVmYXVsdEluaXRpYWxTZWFyY2ggcHJvdmlkZWQsIGlmIHRoZSB1c2VyIGhhc24ndCBhbHJlYWR5IHByb3ZpZGVkIHRoZWlyXG4gICAqIG93biB2aWEgVVJMIHBhcmFtLlxuICAgKiBAcGFyYW0ge1NlYXJjaENvbmZpZ30gc2VhcmNoQ29uZmlnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0RGVmYXVsdEluaXRpYWxTZWFyY2ggKHNlYXJjaENvbmZpZykge1xuICAgIGlmIChzZWFyY2hDb25maWcuZGVmYXVsdEluaXRpYWxTZWFyY2ggPT0gbnVsbCB8fCAhc2VhcmNoQ29uZmlnLnZlcnRpY2FsS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZXBvcHVsYXRlZFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpO1xuICAgIGlmIChwcmVwb3B1bGF0ZWRRdWVyeSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldCgncXVlcnlUcmlnZ2VyJywgJ2luaXRpYWxpemUnKTtcbiAgICB0aGlzLmNvcmUuc2V0UXVlcnkoc2VhcmNoQ29uZmlnLmRlZmF1bHRJbml0aWFsU2VhcmNoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAqIEByZXR1cm5zIHtTZXJ2aWNlc31cbiAqL1xuZnVuY3Rpb24gZ2V0U2VydmljZXMgKGNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHNlYXJjaFNlcnZpY2U6IG5ldyBTZWFyY2hBcGkoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSksXG4gICAgYXV0b0NvbXBsZXRlU2VydmljZTogbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBleHBlcmllbmNlS2V5OiBjb25maWcuZXhwZXJpZW5jZUtleSxcbiAgICAgIGV4cGVyaWVuY2VWZXJzaW9uOiBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IGNvbmZpZy5sb2NhbGVcbiAgICB9KSxcbiAgICBxdWVzdGlvbkFuc3dlclNlcnZpY2U6IG5ldyBRdWVzdGlvbkFuc3dlckFwaSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXlcbiAgICB9KSxcbiAgICBlcnJvclJlcG9ydGVyU2VydmljZTogbmV3IEVycm9yUmVwb3J0ZXIoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgcHJpbnRWZXJib3NlOiBjb25maWcuZGVidWcsXG4gICAgICBzZW5kVG9TZXJ2ZXI6ICFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHNcbiAgICB9KVxuICB9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtTZXJ2aWNlc31cbiAqL1xuZnVuY3Rpb24gZ2V0TW9ja1NlcnZpY2VzICgpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hTZXJ2aWNlOiBuZXcgTW9ja1NlYXJjaFNlcnZpY2UoKSxcbiAgICBhdXRvQ29tcGxldGVTZXJ2aWNlOiBuZXcgTW9ja0F1dG9Db21wbGV0ZVNlcnZpY2UoKSxcbiAgICBxdWVzdGlvbkFuc3dlclNlcnZpY2U6IG5ldyBNb2NrUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlKCksXG4gICAgZXJyb3JSZXBvcnRlclNlcnZpY2U6IG5ldyBDb25zb2xlRXJyb3JSZXBvcnRlcigpXG4gIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRvIHNlbmQgYW5hbHl0aWNzIGV2ZW50c1xuICogd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRvIHRoZSBib3R0b20uIERlYm91bmNlcyBzY3JvbGwgZXZlbnRzIHNvXG4gKiB0aGV5IGFyZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHVzZXIgc3RvcHMgc2Nyb2xsaW5nXG4gKi9cbmZ1bmN0aW9uIGluaXRTY3JvbGxMaXN0ZW5lciAocmVwb3J0ZXIpIHtcbiAgY29uc3QgREVCT1VOQ0VfVElNRSA9IDEwMDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gIGNvbnN0IHNlbmRFdmVudCA9ICgpID0+IHtcbiAgICBpZiAoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldCkgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KCdTQ1JPTExfVE9fQk9UVE9NX09GX1BBR0UnKTtcbiAgICAgIHJlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoc2VuZEV2ZW50LCBERUJPVU5DRV9USU1FKTtcbiAgfSk7XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJQUkVfU0VBUkNIIiwiU0VBUkNIX0xPQURJTkciLCJTRUFSQ0hfQ09NUExFVEUiLCJSZXN1bHQiLCJkYXRhIiwiX3JhdyIsInJhdyIsIl9mb3JtYXR0ZWQiLCJmb3JtYXR0ZWQiLCJvcmRpbmFsIiwidGl0bGUiLCJkZXRhaWxzIiwibGluayIsImlkIiwic3VidGl0bGUiLCJtb2RpZmllciIsImJpZ0RhdGUiLCJpbWFnZSIsImNhbGxzVG9BY3Rpb24iLCJjb2xsYXBzZWQiLCJSZXN1bHRGYWN0b3J5IiwicmVzdWx0c0RhdGEiLCJmb3JtYXR0ZXJzIiwidmVydGljYWxJZCIsInNvdXJjZSIsInJlc3VsdHMiLCJpIiwiZm9ybWF0dGVkRGF0YSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImtleSIsInZhbCIsInB1c2giLCJmcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUiLCJmcm9tWmVuZGVza1NlYXJjaEVuZ2luZSIsImZyb21BbGdvbGlhU2VhcmNoRW5naW5lIiwiZnJvbUdlbmVyaWMiLCJpbmRleCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRydW5jYXRlIiwid2Vic2l0ZSIsImh0bWxUaXRsZSIsInJlcGxhY2UiLCJodG1sU25pcHBldCIsInNuaXBwZXQiLCJ1cmwiLCJodG1sX3VybCIsIm9iamVjdElEIiwic3RyIiwibGltaXQiLCJ0cmFpbGluZyIsInNlcCIsIndvcmRzIiwic3BsaXQiLCJtYXgiLCJ0cnVuY2F0ZWQiLCJ3b3JkIiwiU2VjdGlvbiIsInNlYXJjaFN0YXRlIiwiU2VhcmNoU3RhdGVzIiwidmVydGljYWxDb25maWdJZCIsInJlc3VsdHNDb3VudCIsImVuY29kZWRTdGF0ZSIsImFwcGxpZWRRdWVyeUZpbHRlcnMiLCJBcHBsaWVkUXVlcnlGaWx0ZXIiLCJmcm9tIiwiZmFjZXRzIiwibWFwIiwicGFyc2VNYXAiLCJ2ZXJ0aWNhbFVSTCIsIm1hcE1hcmtlcnMiLCJjZW50ZXJDb29yZGluYXRlcyIsImoiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJsYWJlbCIsIm1vZHVsZXMiLCJ1cmxzIiwic2VjdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBsaWVkUXVlcnlGaWx0ZXIiLCJkaXNwbGF5S2V5IiwidmFsdWUiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsInF1ZXJ5SWQiLCJyZXNwb25zZSIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsImFzc2lnbiIsImZyZWV6ZSIsImFuc3dlciIsInJlbGF0ZWRJdGVtIiwiZmllbGRBcGlOYW1lIiwiZmllbGRWYWx1ZXMiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJtZXJnZWQiLCJjb25jYXQiLCJIaWdobGlnaHRlZFZhbHVlIiwic2hvcnRWYWx1ZSIsIm1hdGNoZWRTdWJzdHJpbmdzIiwiX3NvcnRNYXRjaGVkU3Vic3RyaW5ncyIsIl9idWlsZEhpZ2hsaWdodGVkVmFsdWUiLCJpbnZlcnRlZFN1YnN0cmluZ3MiLCJfZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzIiwic29ydCIsImEiLCJiIiwib2Zmc2V0IiwidmFsdWVMZW5ndGgiLCJzdWJzdHJpbmciLCJuZXh0T2Zmc2V0IiwiaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzIiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsIm5leHRTdGFydCIsInN0YXJ0IiwiTnVtYmVyIiwiZW5kIiwic2xpY2UiLCJqb2luIiwiU3BlbGxDaGVjayIsInF1ZXJ5IiwiY29ycmVjdGVkUXVlcnkiLCJjb3JyZWN0ZWRRdWVyeURpc3BsYXkiLCJ0eXBlIiwic2hvdWxkU2hvdyIsIm9yaWdpbmFsUXVlcnkiLCJnZXQiLCJOQVZJR0FUSU9OIiwiVU5JVkVSU0FMX1JFU1VMVFMiLCJWRVJUSUNBTF9SRVNVTFRTIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUX0FOU1dFUiIsIkZJTFRFUiIsIlFVRVJZIiwiUVVFUllfSUQiLCJGQUNFVF9GSUxURVIiLCJEWU5BTUlDX0ZJTFRFUlMiLCJQQVJBTVMiLCJHRU9MT0NBVElPTiIsIklOVEVOVFMiLCJRVUVTVElPTl9TVUJNSVNTSU9OIiwiU0VBUkNIX0NPTkZJRyIsIlNFQVJDSF9PRkZTRVQiLCJTUEVMTF9DSEVDSyIsIkxPQ0FUSU9OX0JJQVMiLCJTRVNTSU9OU19PUFRfSU4iLCJEeW5hbWljRmlsdGVycyIsImR5bmFtaWNGaWx0ZXJzIiwiZiIsImZpZWxkSWQiLCJvcHRpb25zIiwibyIsImNvdW50TGFiZWwiLCJzZWxlY3RlZCIsImZpbHRlciIsIlNlYXJjaEludGVudHMiLCJpbnRlbnRzIiwibmVhck1lIiwiaW5jbHVkZXMiLCJMb2NhdGlvbkJpYXMiLCJhY2N1cmFjeSIsImxvY2F0aW9uRGlzcGxheU5hbWUiLCJTZWFyY2hEYXRhVHJhbnNmb3JtZXIiLCJTdG9yYWdlS2V5cyIsInNlYXJjaEludGVudHMiLCJzcGVsbENoZWNrIiwibG9jYXRpb25CaWFzIiwiUXVlc3Rpb25TdWJtaXNzaW9uIiwicXVlc3Rpb24iLCJlcnJvcnMiLCJlbWFpbCIsInByaXZhY3lQb2xpY3kiLCJxdWVzdGlvblRleHQiLCJxdWVzdGlvbkRlc2NyaXB0aW9uIiwicXVlc3Rpb25TdWJtaXR0ZWQiLCJGaWx0ZXIiLCJyZXNwb25zZUZpbHRlciIsIkpTT04iLCJwYXJzZSIsImdyb3VwcyIsImdyb3VwRmlsdGVycyIsImZpZWxkIiwib3IiLCJhbmQiLCJfZnJvbU1hdGNoZXIiLCJtaW4iLCJsYXQiLCJsbmciLCJyYWRpdXMiLCJtYXRjaGVyIiwiQ29yZSIsImNvbmZpZyIsIl9hcGlLZXkiLCJhcGlLZXkiLCJfZXhwZXJpZW5jZUtleSIsImV4cGVyaWVuY2VLZXkiLCJfZXhwZXJpZW5jZVZlcnNpb24iLCJleHBlcmllbmNlVmVyc2lvbiIsIl9sb2NhbGUiLCJsb2NhbGUiLCJfZmllbGRGb3JtYXR0ZXJzIiwiZmllbGRGb3JtYXR0ZXJzIiwiZ2xvYmFsU3RvcmFnZSIsInBlcnNpc3RlbnRTdG9yYWdlIiwiX3NlYXJjaGVyIiwic2VhcmNoU2VydmljZSIsIl9hdXRvQ29tcGxldGUiLCJhdXRvQ29tcGxldGVTZXJ2aWNlIiwiX3F1ZXN0aW9uQW5zd2VyIiwicXVlc3Rpb25BbnN3ZXJTZXJ2aWNlIiwidmVydGljYWxLZXkiLCJhcHBlbmQiLCJzZXQiLCJzZWFyY2hMb2FkaW5nIiwidmVydGljYWxTZWFyY2giLCJnZXRTdGF0ZSIsImdlb2xvY2F0aW9uIiwiaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJfaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJza2lwU3BlbGxDaGVjayIsInF1ZXJ5VHJpZ2dlciIsInNlc3Npb25UcmFja2luZ0VuYWJsZWQiLCJ0aGVuIiwidHJhbnNmb3JtVmVydGljYWwiLCJtZXJnZWRSZXN1bHRzIiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwiZmFjZXRGaWx0ZXIiLCJpbnB1dCIsInN0cmluZ2lmeSIsInF1ZXJ5U3RyaW5nIiwidW5pdmVyc2FsU2VhcmNoIiwidHJhbnNmb3JtIiwibmFtZXNwYWNlIiwicXVlcnlVbml2ZXJzYWwiLCJiYXJLZXkiLCJxdWVyeVZlcnRpY2FsIiwicXVlcnlGaWx0ZXIiLCJzdWJtaXRRdWVzdGlvbiIsInN1Ym1pdHRlZCIsImV2dCIsIm1vZHVsZUlkIiwiY2IiLCJvbiIsIkFuc3dlcnNCYXNlRXJyb3IiLCJlcnJvckNvZGUiLCJtZXNzYWdlIiwiYm91bmRhcnkiLCJjYXVzZWRCeSIsImVycm9yTWVzc2FnZSIsInJlcG9ydGVkIiwic3RyaW5nIiwidG9TdHJpbmciLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb25maWdFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc0NvcmVFcnJvciIsIkFuc3dlcnNTdG9yYWdlRXJyb3IiLCJzdG9yYWdlS2V5IiwiQW5zd2Vyc0FuYWx5dGljc0Vycm9yIiwiZXZlbnQiLCJkb2N1bWVudCIsIndpbmRvdyIsIkRPTSIsImQiLCJwIiwiaHRtbCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJmcmFnIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJwYXJlbnQiLCJzZWxlY3RvciIsInVuZGVmaW5lZCIsIkhUTUxFbGVtZW50IiwiV2luZG93IiwiSFRNTERvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWFkeVN0YXRlIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwicHJvcHMiLCJhZGRDbGFzcyIsImluc2VydEFkamFjZW50SFRNTCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJsZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJwcm9wIiwic3R5bGUiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiYXR0cnMiLCJzZXR0aW5ncyIsImUiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3R4dCIsInRhcmdldCIsImlzRXF1YWxOb2RlIiwibWF0Y2hlcyIsInBhcmVudE5vZGUiLCJDb21wb25lbnRNYW5hZ2VyIiwic2V0SW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIl9jb21wb25lbnRSZWdpc3RyeSIsIl9hY3RpdmVDb21wb25lbnRzIiwiX2NvcmUiLCJfcmVuZGVyZXIiLCJfYW5hbHl0aWNzUmVwb3J0ZXIiLCJyZW5kZXJlciIsImNvcmUiLCJyZXBvcnRlciIsImNvbXBvbmVudENsYXp6IiwiY29tcG9uZW50VHlwZSIsIm9wdHMiLCJzeXN0ZW1PcHRzIiwiYW5hbHl0aWNzUmVwb3J0ZXIiLCJjb21wb25lbnRNYW5hZ2VyIiwiY29tcG9uZW50Q2xhc3MiLCJhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQiLCJzb21lIiwiYyIsImlzVHdpbiIsImNvbnN0cnVjdG9yIiwiaW5pdCIsInNldFN0YXRlIiwib2ZmIiwiZmluZEluZGV4Iiwic3BsaWNlIiwiZmluZCIsInJlbW92ZSIsImVtcHR5IiwiX2NvbnRhaW5lciIsImluc3RhbmNlIiwiUmVuZGVyZXIiLCJ0ZW1wbGF0ZSIsIkhhbmRsZWJhcnNSZW5kZXJlciIsInRlbXBsYXRlcyIsIl9oYW5kbGViYXJzIiwiX2hiIiwiX3RlbXBsYXRlcyIsIl9yZWdpc3RlckN1c3RvbUhlbHBlcnMiLCJyZWdpc3RlckhlbHBlciIsImNvbXBpbGUiLCJ0ZW1wbGF0ZU5hbWUiLCJhcmcxIiwiYXJnMiIsImZuIiwiaW52ZXJzZSIsInBob25lTnVtYmVyU3RyaW5nIiwiY2xlYW5lZCIsIm1hdGNoIiwiaW50bENvZGUiLCJhcmdzIiwiYXJndW1lbnRzIiwicm9vdCIsInYiLCJSZW5kZXJlcnMiLCJTT1kiLCJIYW5kbGViYXJzIiwiRXZlbnRFbWl0dGVyIiwiX2xpc3RlbmVycyIsImxpc3RlbmVycyIsImtlZXAiLCJTdGF0ZSIsIl9zdGF0ZSIsIm9wdFZhbCIsIl9zZXQiLCJlbWl0Iiwib3B0UHJvcCIsIk1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiSHR0cFJlcXVlc3RlciIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJ1cmxQYXJhbXMiLCJqc29uQm9keSIsInJlcXVlc3RDb25maWciLCJjcmVkZW50aWFscyIsIm1ldGhvZCIsInJlcUFyZ3MiLCJmZXRjaCIsIm5hdmlnYXRvciIsInNlbmRCZWFjb24iLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkxJQl9WRVJTSU9OIiwiTElWRV9BUElfQkFTRV9VUkwiLCJBUElfQkFTRV9VUkwiLCJDT01QSUxFRF9URU1QTEFURVNfVVJMIiwiQU5BTFlUSUNTX0JBU0VfVVJMIiwiQU5BTFlUSUNTX0JBU0VfVVJMX05PX0NPT0tJRSIsIlNlYXJjaFBhcmFtcyIsIl9wYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJlbmNvZGVkUGFyYW1zIiwia2V5VmFsIiwiZGVjb2RlIiwiU3RyaW5nIiwiZW5jb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiQXBpUmVxdWVzdCIsIl9yZXF1ZXN0ZXIiLCJfYmFzZVVybCIsImJhc2VVcmwiLCJfZW5kcG9pbnQiLCJlbmRwb2ludCIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImJhc2VQYXJhbXMiLCJzYW5pdGl6ZVBhcmFtcyIsInBvc3QiLCJsb2NhdGlvbiIsImhhcyIsIlNlYXJjaEFwaSIsImpzb24iLCJBbmFseXRpY3NFdmVudCIsImV2ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwiQW5hbHl0aWNzUmVwb3J0ZXIiLCJidXNpbmVzc0lkIiwiZ2xvYmFsT3B0aW9ucyIsIl9idXNpbmVzc0lkIiwiX2dsb2JhbE9wdGlvbnMiLCJzZXRRdWVyeUlkIiwiYWRkT3B0aW9ucyIsImJlYWNvbiIsInRvQXBpRXZlbnQiLCJpc0VuYWJsZWQiLCJOb29wQW5hbHl0aWNzUmVwb3J0ZXIiLCJNb2R1bGVEYXRhIiwiX2lkIiwiX2hpc3RvcnkiLCJfZGF0YSIsImNhcHR1cmVQcmV2aW91cyIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwb3AiLCJHbG9iYWxTdG9yYWdlIiwiX21vZHVsZURhdGFDb250YWluZXIiLCJfZnV0dXJlTGlzdGVuZXJzIiwiX2luaXREYXRhQ29udGFpbmVyIiwiX2FwcGx5RnV0dXJlTGlzdGVuZXJzIiwiZGF0YUtleSIsInN0YXJ0c1dpdGgiLCJtb2R1bGVEYXRhIiwiZnV0dXJlcyIsImZ1dHVyZSIsIkNvbXBvbmVudCIsInN5c3RlbUNvbmZpZyIsIl9jb25maWciLCJfdHlwZSIsIl9wYXJlbnRDb250YWluZXIiLCJwYXJlbnRDb250YWluZXIiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsIl9hbmFseXRpY3NPcHRpb25zIiwiYW5hbHl0aWNzT3B0aW9ucyIsImNyZWF0ZUVsIiwiX2NsYXNzTmFtZSIsIl9yZW5kZXIiLCJyZW5kZXIiLCJfdGVtcGxhdGUiLCJfdGVtcGxhdGVOYW1lIiwiZGVmYXVsdFRlbXBsYXRlTmFtZSIsIl9pc01vdW50ZWQiLCJ0cmFuc2Zvcm1EYXRhIiwib25DcmVhdGUiLCJvbkNyZWF0ZU92ZXJyaWRlIiwiYmluZCIsIm9uTW91bnQiLCJvbk1vdW50T3ZlcnJpZGUiLCJvblVwZGF0ZSIsIm9uVXBkYXRlT3ZlcnJpZGUiLCJ1c2VyT25DcmVhdGUiLCJ1c2VyT25Nb3VudCIsInVzZXJPblVwZGF0ZSIsInVuTW91bnQiLCJtb3VudCIsImNvbnNvbGUiLCJsb2ciLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJjaGlsZCIsIm9uVW5Nb3VudCIsImJlZm9yZU1vdW50IiwiYXNKU09OIiwiZG9tQ29tcG9uZW50cyIsInF1ZXJ5QWxsIiwiX2NyZWF0ZVN1YmNvbXBvbmVudCIsImRvbUhvb2tzIiwiX2NyZWF0ZUFuYWx5dGljc0hvb2siLCJiZWZvcmVSZW5kZXIiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJpc0NvbXBvbmVudE1vdW50ZWQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsInJldmVyc2UiLCJpc0FuYWx5dGljc0F0dGFjaGVkIiwiZXZlbnR0eXBlIiwiZXZlbnRsYWJlbCIsImV2ZW50b3B0aW9ucyIsInJlcG9ydCIsIlJFU0laRV9ERUJPVU5DRSIsIlRhYiIsImNvbmZpZ0lkIiwiaXNGaXJzdCIsImlzQWN0aXZlIiwidGFic0NvbmZpZyIsInRhYnMiLCJ0YWIiLCJOYXZpZ2F0aW9uQ29tcG9uZW50IiwiZHJvcGRvd25MYWJlbCIsImRyb3Bkb3duSWNvbiIsIl90YWJzIiwiX3RhYk9yZGVyIiwiZ2V0RGVmYXVsdFRhYk9yZGVyIiwiZ2V0VXJsUGFyYW1zIiwiX25hdkJyZWFrcG9pbnRzIiwiX2RlYm91bmNlVGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVmaXROYXYiLCJjaGVja091dHNpZGVDbGljayIsInRvZ2dsZU1vcmVEcm9wZG93biIsIm1vcmVCdXR0b24iLCJtYWluTGlua3MiLCJjb2xsYXBzZWRMaW5rcyIsIm5hdldpZHRoIiwiY29udGFpbnMiLCJvZmZzZXRXaWR0aCIsIm51bUJyZWFrcG9pbnRzIiwibWFpbkxpbmtzV2lkdGgiLCJjaGlsZHJlbiIsImxhc3RMaW5rIiwicHJlcGVuZCIsImZpcnN0TGluayIsImNsb3NlTW9yZURyb3Bkb3duIiwidG9nZ2xlIiwiY2xvc2VzdCIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsInVuc2hpZnQiLCJvdGhlclRhYk9yZGVyIiwidGFiQ29uZmlnIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJsYWJlbFRleHQiLCJzdWJtaXRUZXh0Iiwic3VibWl0SWNvbiIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsImNsZWFyQnV0dG9uIiwiYXV0b2NvbXBsZXRlT25Mb2FkIiwicmVkaXJlY3RVcmwiLCJfaXNUd2luIiwicSIsIl9zZWFyY2hDb29sZG93biIsInNlYXJjaENvb2xkb3duIiwiX3Byb21wdEZvckxvY2F0aW9uIiwicHJvbXB0Rm9yTG9jYXRpb24iLCJCb29sZWFuIiwiX3Nob3dDbGVhckJ1dHRvbiIsIl9hbGxvd0VtcHR5U2VhcmNoIiwiYWxsb3dFbXB0eVNlYXJjaCIsInNldFF1ZXJ5IiwiaW5pdExvY2F0aW9uUHJvbXB0IiwiZm9jdXMiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImluaXRDbGVhckJ1dHRvbiIsIl9hdXRvY29tcGxldGUiLCJidXR0b24iLCJpbnRlbnQiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJibHVyIiwiaW5wdXRTZWxlY3RvciIsIm9uU3VibWl0IiwidHJpZ2dlciIsIl90aHJvdHRsZWQiLCJnZXRBY3RpdmVDb21wb25lbnQiLCJzaG93Q2xlYXJCdXR0b24iLCJGaWx0ZXJTZWFyY2hDb21wb25lbnQiLCJpbnB1dEtleSIsIl9zdG9yZU9uQ2hhbmdlIiwic3RvcmVPbkNoYW5nZSIsInNlYXJjaFRleHQiLCJzZWFyY2hQYXJhbWV0ZXJzIiwiX2J1aWxkU2VhcmNoUGFyYW1ldGVycyIsImlzRmlsdGVyU2VhcmNoIiwib3JpZ2luYWxGaWx0ZXIiLCJmcm9tUmVzcG9uc2UiLCJzZXRGaWx0ZXIiLCJzZWFyY2hQYXJhbWV0ZXJDb25maWdzIiwic2VjdGlvbmVkIiwiZmllbGRzIiwiX2J1aWxkRmllbGRzIiwiZmllbGRDb25maWdzIiwiZmMiLCJmZXRjaEVudGl0aWVzIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX2F1dG9jb21wbGV0ZUVscyIsImF1dG9Db21wbGV0ZUVscyIsIl9vcmlnaW5hbFF1ZXJ5IiwiX3NlY3Rpb25JbmRleCIsIl9yZXN1bHRJbmRleCIsIl9hdXRvRm9jdXMiLCJfb25TdWJtaXQiLCJfc2VhcmNoUGFyYW1ldGVycyIsImhhc1Jlc3VsdHMiLCJzZWN0aW9uSW5kZXgiLCJyZXN1bHRJbmRleCIsInF1ZXJ5SW5wdXQiLCJhdHRyaWJ1dGVzIiwiYXV0b2NvbXBsZXRlIiwiYXV0b2NvcnJlY3QiLCJzcGVsbGNoZWNrIiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInVwZGF0ZVF1ZXJ5IiwiaGFuZGxlVHlwaW5nIiwidXBkYXRlU3RhdGUiLCJvcHRWYWx1ZSIsInF1ZXJ5RWwiLCJpZ25vcmVkS2V5cyIsImF1dG9Db21wbGV0ZUZpbHRlciIsImF1dG9Db21wbGV0ZVZlcnRpY2FsIiwiYXV0b0NvbXBsZXRlVW5pdmVyc2FsIiwiU3BlbGxDaGVja0NvbXBvbmVudCIsImNvcnJlY3RlZFF1ZXJ5VXJsIiwiX2J1aWxkUmVkaXJlY3RRdWVyeVVybCIsImhlbHBUZXh0IiwiX2dldEhlbHBUZXh0IiwidG9Mb3dlckNhc2UiLCJMb2NhdGlvbkJpYXNDb21wb25lbnQiLCJfdXBkYXRlTG9jYXRpb25FbCIsInVwZGF0ZUxvY2F0aW9uRWwiLCJfbG9jYXRpb25EaXNwbGF5TmFtZSIsIl9hY2N1cmFjeSIsIl9hbGxvd1VwZGF0ZSIsIl9kaXNhYmxlTG9jYXRpb25VcGRhdGVJZkdlb2xvY2F0aW9uRGVuaWVkIiwiX2RvU2VhcmNoIiwiZXJyIiwiY29kZSIsIl9kaXNhYmxlTG9jYXRpb25VcGRhdGUiLCJfZ2V0TG9jYXRpb25EaXNwbGF5TmFtZSIsImFjY3VyYWN5VGV4dCIsIl9nZXRBY2N1cmFjeUhlbHBUZXh0IiwiaXNQcmVjaXNlTG9jYXRpb24iLCJpc1Vua25vd25Mb2NhdGlvbiIsImFsbG93VXBkYXRlIiwicGVybWlzc2lvbnMiLCJGYWNldCIsImZsYXRGaWx0ZXJzIiwiZmxhdE1hcCIsIiRvciIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiX2lzRHluYW1pYyIsImlzRHluYW1pYyIsImZpbHRlckNvbmZpZ3MiLCJzaG93QXBwbHlCdXR0b24iLCJvbkNoYW5nZSIsIm9uRmlsdGVyQ2hhbmdlIiwiZ2V0RmlsdGVyIiwiX3NhdmVGaWx0ZXJzVG9TdG9yYWdlIiwiX3NlYXJjaCIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiZnJvbUZpbHRlcnMiLCJzZXRGYWNldEZpbHRlciIsIlNVUFBPUlRFRF9DT05UUk9MUyIsIkZpbHRlck9wdGlvbnNDb21wb25lbnQiLCJjb250cm9sIiwicHJldmlvdXNPcHRpb25zIiwic2VsZWN0ZWRPcHRpb25zIiwiX29wdGlvbnMiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX29uQ2hhbmdlIiwiX2xhYmVsIiwiX3VwZGF0ZU9wdGlvbiIsInBhcnNlSW50IiwiY2hlY2tlZCIsIl9idWlsZEZpbHRlciIsImVsZW1lbnRzIiwiX2FwcGx5RmlsdGVyIiwiZXF1YWwiLCJncm91cCIsIlJhbmdlRmlsdGVyQ29tcG9uZW50IiwiX2ZpZWxkIiwibWluVmFsIiwibWF4VmFsIiwiX3JhbmdlIiwiaW5pdGlhbE1pbiIsImluaXRpYWxNYXgiLCJfdGl0bGUiLCJfbWluTGFiZWwiLCJtaW5MYWJlbCIsIl9tYXhMYWJlbCIsIm1heExhYmVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIl91cGRhdGVSYW5nZSIsImluY2x1c2l2ZVJhbmdlIiwiRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IiwiX2lzRXhjbHVzaXZlIiwiaXNFeGNsdXNpdmUiLCJ0b2RheSIsIkRhdGUiLCJ0b2RheVN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImdldERhdGUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIl9kYXRlIiwiZGF0ZU1pbiIsImRhdGVNYXgiLCJkYXRlIiwiZXhjbHVzaXZlUmFuZ2UiLCJEeW5hbWljRmlsdGVyc0NvbXBvbmVudCIsIl9maWVsZENvbnRyb2xzIiwiZmllbGRDb250cm9scyIsIl9maWx0ZXJib3giLCJlbmFibGVEeW5hbWljRmlsdGVycyIsIk1FVEVSU19QRVJfTUlMRSIsIkRFRkFVTFRfQ09ORklHIiwiZ2VvQnV0dG9uSWNvbiIsImdlb0J1dHRvblRleHQiLCJlbmFibGVkVGV4dCIsImxvYWRpbmdUZXh0IiwiZXJyb3JUZXh0IiwiYnV0dG9uU2VsZWN0b3IiLCJHZW9Mb2NhdGlvbkNvbXBvbmVudCIsInBsYWNlaG9sZGVyIiwiX2VuYWJsZWQiLCJnZW9Mb2FkaW5nIiwiZ2VvRXJyb3IiLCJnZW9FbmFibGVkIiwiZ2VvVmFsdWUiLCJnZW9QbGFjZWhvbGRlciIsIl9pbml0QXV0b0NvbXBsZXRlIiwiX3RvZ2dsZUdlb0ZpbHRlciIsIl9zYXZlRGF0YVRvU3RvcmFnZSIsIk1hdGgiLCJFdmVudFR5cGVzIiwiVEhVTUJTX1VQIiwiVEhVTUJTX0RPV04iLCJEaXJlY3RBbnN3ZXJDb21wb25lbnQiLCJmb3JtRWwiLCJfdGh1bWJzVXBTZWxlY3RvciIsInRodW1ic1VwU2VsZWN0b3IiLCJfdGh1bWJzRG93blNlbGVjdG9yIiwidGh1bWJzRG93blNlbGVjdG9yIiwiX3ZpZXdEZXRhaWxzVGV4dCIsInZpZXdEZXRhaWxzVGV4dCIsImhhc1N0YXRlIiwiY2hlY2tlZFZhbHVlIiwicmVwb3J0UXVhbGl0eSIsImV2ZW50T3B0aW9ucyIsInNlYXJjaGVyIiwiZW50aXR5SWQiLCJjdGFMYWJlbCIsImlzR29vZCIsIlJlc3VsdHNJdGVtQ29tcG9uZW50IiwiX3ZlcnRpY2FsQ29uZmlnSWQiLCJfaXNVbml2ZXJzYWwiLCJpc1VuaXZlcnNhbCIsIkxvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IiwiUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJNYXBQcm92aWRlciIsIl96b29tIiwiem9vbSIsIl9kZWZhdWx0UG9zaXRpb24iLCJkZWZhdWx0UG9zaXRpb24iLCJfc2hvd0VtcHR5TWFwIiwic2hvd0VtcHR5TWFwIiwiX21hcCIsIl9pc0xvYWRlZCIsIl9vblBpbkNsaWNrIiwib25QaW5DbGljayIsIl9vbkxvYWRlZCIsIm9uTG9hZGVkIiwiX3BpbkNvbmZpZyIsInBpbiIsIkRFRkFVTFRfUElOX0NPTkZJRyIsIl9jb2xsYXBzZVBpbnMiLCJjb2xsYXBzZVBpbnMiLCJpc0xvYWRlZCIsIm1hcERhdGEiLCJtYXJrZXJzIiwibG9jYXRpb25Ub0l0ZW0iLCJtIiwiY29sbGFwc2VkTWFya2VycyIsImNvbGxhcHNlZE1hcmtlciIsImljb24iLCJhbmNob3IiLCJzdmciLCJzY2FsZWRTaXplIiwibGFiZWxUeXBlIiwiR29vZ2xlTWFwUHJvdmlkZXIiLCJfem9vbU9mZnNldCIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiY2VudGVyIiwiZ2V0Q2VudGVyTWFya2VyIiwiX2NvbGxhcHNlTWFya2VycyIsImdvb2dsZU1hcE1hcmtlckNvbmZpZ3MiLCJHb29nbGVNYXBNYXJrZXJDb25maWciLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJtYXJrZXIiLCJNYXJrZXIiLCJhZGRMaXN0ZW5lciIsImV4dGVuZCIsImZpdEJvdW5kcyIsIm1hcENlbnRlciIsInNlcmlhbGl6ZWRNYXJrZXJzIiwicGluQ29uZmlnIiwicGluQ29uZmlnT2JqIiwiUG9pbnQiLCJ4IiwieSIsIlNpemUiLCJ3IiwiaCIsIk1hcEJveE1hcFByb3ZpZGVyIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsImNzcyIsInJlbCIsIm1hcGJveE1hcE1hcmtlckNvbmZpZ3MiLCJNYXBCb3hNYXJrZXJDb25maWciLCJMbmdMYXRCb3VuZHMiLCJ3cmFwcGVyIiwiTG5nTGF0Iiwic2V0TG5nTGF0IiwiZ2V0TG5nTGF0IiwiYWRkVG8iLCJnZXRFbGVtZW50IiwicGFkZGluZyIsInN0YXRpY01hcFBpbiIsIlByb3ZpZGVyVHlwZXMiLCJNYXBDb21wb25lbnQiLCJfbWFwUHJvdmlkZXIiLCJtYXBQcm92aWRlciIsImdldFByb3ZpZGVySW5zdGFuY2UiLCJsb2FkSlMiLCJSZXN1bHRUeXBlIiwiRVZFTlQiLCJMT0NBVElPTiIsIlBFT1BMRSIsIlJlc3VsdHNDb21wb25lbnQiLCJfaXRlbUNvbmZpZyIsImdsb2JhbCIsInJlbmRlckl0ZW0iLCJpdGVtVGVtcGxhdGUiLCJjb25maWd1cmVJdGVtIiwiX3VuaXZlcnNhbFVybCIsInVuaXZlcnNhbFVybCIsImlzUHJlU2VhcmNoIiwiaXNTZWFyY2hMb2FkaW5nIiwiaXNTZWFyY2hDb21wbGV0ZSIsImluY2x1ZGVNYXAiLCJtYXBDb25maWciLCJzaG93Tm9SZXN1bHRzIiwic2V0SXRlbVJlbmRlciIsInNldEl0ZW1UZW1wbGF0ZSIsImNsYXp6IiwiZ2V0SXRlbUNvbXBvbmVudCIsImNvbXAiLCJuZXdPcHRzIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwic2V0VGVtcGxhdGUiLCJBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IiwiX3NlbGVjdG9yQmFzZSIsInNlbGVjdG9yQmFzZSIsImNvbGxhcHNlZENsYXNzIiwiYWNjb3JkaW9uRWxzIiwiYWNjb3JkaW9uRWwiLCJ0b2dnbGVFbCIsInRvZ2dsZVNlbGVjdG9yIiwiY29udGVudEVsIiwiYm9keVNlbGVjdG9yIiwiY2hhbmdlSGVpZ2h0IiwiaGFuZGxlQ2xpY2siLCJ3cmFwcGVyRWwiLCJpc0NvbGxhcHNlZCIsInRhcmdldEVsIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYnVpbGRTZWxlY3RvciIsIlVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQiLCJfbGltaXQiLCJjaGlsZE9wdHMiLCJnZXRDaGlsZENvbmZpZyIsInVzZUFjY29yZGlvbiIsImRlZmF1bHRDb25maWciLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiX2ZpcnN0UGFnZUJ1dHRvbkVuYWJsZWQiLCJzaG93Rmlyc3QiLCJfbGFzdFBhZ2VCdXR0b25FbmFibGVkIiwic2hvd0xhc3QiLCJzaG93Q29udHJvbHMiLCJwcmV2aW91c1BhZ2VCdXR0b24iLCJuZXh0UGFnZUJ1dHRvbiIsIm1heFBhZ2UiLCJ0cnVuYyIsInVwZGF0ZVBhZ2UiLCJmaXJzdFBhZ2VCdXR0b24iLCJsYXN0UGFnZUJ1dHRvbiIsInNjcm9sbFRvVG9wIiwidmVydGljYWxQYWdlIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGFnZU51bWJlciIsImlzTW9yZVJlc3VsdHMiLCJmaXJzdFBhZ2VCdXR0b25FbmFibGVkIiwibGFzdFBhZ2VCdXR0b25FbmFibGVkIiwic2hvd0ZpcnN0UGFnZUJ1dHRvbiIsInNob3dQcmV2aW91c1BhZ2VCdXR0b24iLCJzaG93TmV4dFBhZ2VCdXR0b24iLCJzaG93TGFzdFBhZ2VCdXR0b24iLCJRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQiLCJ2YWxpZGF0ZUNvbmZpZyIsImJpbmRBbmFseXRpY3MiLCJiaW5kRm9ybVN1Ym1pdCIsInF1ZXN0aW9uVGV4dEVsIiwiZm9ybURhdGEiLCJ2YWxpZGF0ZVJlcXVpcmVkIiwibGFuZ3VhZ2UiLCJpbnB1dEZpZWxkcyIsIm9iaiIsIlNWR0ljb24iLCJwYXRoIiwiY29tcGxleENvbnRlbnRzIiwidmlld0JveCIsImNvbnRlbnRzIiwicGF0aERlZmluaXRpb24iLCJpY29uc0FycmF5IiwidGh1bWJJY29uIiwicmVjZWlwdEljb24iLCJwYW50aGVvbkljb24iLCJtaWNJY29uIiwiZGlyZWN0aW9uc0ljb24iLCJjYWxlbmRhckljb24iLCJjYWxsb3V0SWNvbiIsImluZm9JY29uIiwiYnJpZWZjYXNlSWNvbiIsImthYm9iSWNvbiIsInBlcnNvbkljb24iLCJtYWduaWZ5aW5nR2xhc3NJY29uIiwib2ZmaWNlSWNvbiIsImxpbmtJY29uIiwid2luZG93SWNvbiIsInBob25lSWNvbiIsInRhZ0ljb24iLCJkb2N1bWVudEljb24iLCJjaGV2cm9uSWNvbiIsInN1cHBvcnRJY29uIiwieWV4dEljb24iLCJwaW5JY29uIiwiZ2Vhckljb24iLCJsaWdodEJ1bGJJY29uIiwiSWNvbnMiLCJtYXJrdXAiLCJzdGFySWNvbiIsIkljb25Db21wb25lbnQiLCJpY29uTmFtZSIsImN1c3RvbUljb24iLCJpY29uVXJsIiwiQ09NUE9ORU5UX01BTkFHRVIiLCJyZWdpc3RlciIsIlRlbXBsYXRlTG9hZGVyIiwiX3RlbXBsYXRlVXJsIiwidGVtcGxhdGVVcmwiLCJfaW5pdCIsImZldGNoVGVtcGxhdGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmVycm9yIiwiRXJyb3JSZXBvcnRlciIsInByaW50VmVyYm9zZSIsInNlbmRUb1NlcnZlciIsInByaW50RXJyb3IiLCJ0b0pzb24iLCJDb25zb2xlRXJyb3JSZXBvcnRlciIsIlBlcnNpc3RlbnRTdG9yYWdlIiwiX2hpc3RvcnlUaW1lciIsIl91cGRhdGVMaXN0ZW5lciIsInVwZGF0ZUxpc3RlbmVyIiwiX3Jlc2V0TGlzdGVuZXIiLCJyZXNldExpc3RlbmVyIiwib25wb3BzdGF0ZSIsIl9jYWxsTGlzdGVuZXIiLCJuZXdEYXRhIiwiX3VwZGF0ZUhpc3RvcnkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibGlzdGVuZXIiLCJhbGxQYXJhbXMiLCJTZWFyY2hDb25maWciLCJkZWZhdWx0SW5pdGlhbFNlYXJjaCIsInZhbGlkYXRlIiwiQXV0b0NvbXBsZXRlRGF0YSIsInMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiZ2V0SW52ZXJ0ZWQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJBdXRvQ29tcGxldGVBcGkiLCJ2ZXJ0aWNhbCIsInVuaXZlcnNhbCIsInVuaXZlcnNhbE9wdGlvbnMiLCJ2ZXJ0aWNhbE9wdGlvbnMiLCJNb2NrQXV0b0NvbXBsZXRlU2VydmljZSIsImVtcHR5UmVzdWx0cyIsImZpbHRlck9wdGlvbnMiLCJvcHQiLCJsb3dlcmNhc2UiLCJyYW5kb21TdHJpbmciLCJyYW5kb20iLCJRdWVzdGlvbkFuc3dlckFwaSIsInNpdGUiLCJxdWVzdGlvbkxhbmd1YWdlIiwibW9kZSIsImhlYWRlcnMiLCJNb2NrUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlIiwiQVJCSVRSQVJZX0JVU0lORVNTX0lEIiwiTW9ja1NlYXJjaFNlcnZpY2UiLCJfZ2V0TW9ja0RhdGFKc29uIiwicmVzcCIsInRleHQiLCJ1c2VNb2NrRGF0YSIsImRlbGF5ZWRSZXNwb25zZSIsImNvbnN0cnVjdFZlcnRpY2FsUmVzcG9uc2UiLCJzZWN0aW9uIiwidmVydGljYWxNb2R1bGUiLCJmbG9vciIsIm1vZGlmeVJlc3VsdHMiLCJnZXRSZXN1bHRzRmlsdGVyZXIiLCJjb25zdHJ1Y3RVbml2ZXJzYWxSZXNwb25zZSIsImNvbnN1bWVyIiwibW9kaWZ5Rm4iLCJmaWxsU2VjdGlvbkZpZWxkcyIsIm1ldGEiLCJ1dWlkIiwidXVpZFY0IiwiZmFpbGVkVmVydGljYWxzIiwicXVlcnlEdXJhdGlvbk1pbGxpcyIsInJhbmRvbUludCIsIkRFRkFVTFRTIiwiQW5zd2VycyIsImNvbXBvbmVudHMiLCJfb25SZWFkeSIsIl9lbGlnaWJsZUZvckFuYWx5dGljcyIsIl9zZXJ2aWNlcyIsIl9hbmFseXRpY3NSZXBvcnRlclNlcnZpY2UiLCJvblN0YXRlQ2hhbmdlIiwic2V0QWxsIiwibW9jayIsImdldE1vY2tTZXJ2aWNlcyIsImdldFNlcnZpY2VzIiwic3Vic3RyIiwic2V0Q29yZSIsInNldFJlbmRlcmVyIiwic2V0QW5hbHl0aWNzUmVwb3J0ZXIiLCJpbml0U2Nyb2xsTGlzdGVuZXIiLCJfc2V0RGVmYXVsdEluaXRpYWxTZWFyY2giLCJvblJlYWR5IiwidXNlVGVtcGxhdGVzIiwidGVtcGxhdGVCdW5kbGUiLCJyZW1vdmVCeU5hbWUiLCJvcHRJbiIsInNldENvbnZlcnNpb25UcmFja2luZ0VuYWJsZWQiLCJzZWFyY2hDb25maWciLCJwcmVwb3B1bGF0ZWRRdWVyeSIsImVycm9yUmVwb3J0ZXJTZXJ2aWNlIiwiZGVidWciLCJzdXBwcmVzc0Vycm9yUmVwb3J0cyIsIkRFQk9VTkNFX1RJTUUiLCJ0aW1lb3V0Iiwic2VuZEV2ZW50IiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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