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
    SPELL_CHECK: 'spell-check'
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
        return _ref = {}, _defineProperty(_ref, StorageKeys.QUERY_ID, response.queryId), _defineProperty(_ref, StorageKeys.NAVIGATION, Navigation.from(response.modules)), _defineProperty(_ref, StorageKeys.DIRECT_ANSWER, DirectAnswer.from(response.directAnswer, formatters)), _defineProperty(_ref, StorageKeys.UNIVERSAL_RESULTS, UniversalResults.from(response, urls, formatters)), _defineProperty(_ref, StorageKeys.INTENTS, SearchIntents.from(response.searchIntents)), _defineProperty(_ref, StorageKeys.SPELL_CHECK, SpellCheck.from(response.spellCheck)), _ref;
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data, formatters) {
        var _ref2;

        return _ref2 = {}, _defineProperty(_ref2, StorageKeys.QUERY_ID, data.response.queryId), _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(data.response, formatters)), _defineProperty(_ref2, StorageKeys.DYNAMIC_FILTERS, DynamicFilters.from(data.response)), _defineProperty(_ref2, StorageKeys.INTENTS, SearchIntents.from(data.response.searchIntents)), _defineProperty(_ref2, StorageKeys.SPELL_CHECK, SpellCheck.from(data.response.spellCheck)), _ref2;
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
          queryTrigger: this.globalStorage.getState('queryTrigger')
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
        return this._searcher.universalSearch(queryString, {
          geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
          skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
          queryTrigger: this.globalStorage.getState('queryTrigger')
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
        return this.request(Methods.POST, this.encodeParams(url, urlParams), Object.assign({
          body: JSON.stringify(jsonBody),
          credentials: undefined
        }, requestConfig));
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
  var LIB_VERSION = 'v0.9.3';
  /** The base url for the api backend */

  var API_BASE_URL = 'https://liveapi.yext.com';
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
            queryTrigger = _ref.queryTrigger;

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
            'queryTrigger': queryTrigger
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
            'queryTrigger': params.queryTrigger
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
       * The zoom level of the map, defaults to 9
       * @type {number}
       */

      this._zoom = config.zoom || 9;
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
            zoom: _this3._zoom
          }); // Apply our search data to our GoogleMap

          var bounds = new google.maps.LatLngBounds();

          if (mapData && mapData.mapMarkers.length) {
            (function () {
              var collapsedMarkers = _this3._collapsePins ? _this3._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
              var googleMapMarkerConfigs = GoogleMapMarkerConfig.from(collapsedMarkers, _this3._pinConfig, _this3.map);

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

              _this3.map.fitBounds(bounds);
            })();
          } else {
            _this3.map.setCenter(new google.maps.LatLng(_this3._defaultPosition.lat, _this3._defaultPosition.lng));
          }
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

        if (mapData) {
          (function () {
            var collapsedMarkers = _this2._collapsePins ? _this2._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
            var mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(collapsedMarkers, _this2._pinConfig, _this2._map);

            var _loop = function _loop(i) {
              var wrapper = mapboxMapMarkerConfigs[i].wrapper;
              var coords = new mapboxgl.LngLat(mapboxMapMarkerConfigs[i].position.longitude, mapboxMapMarkerConfigs[i].position.latitude);
              var marker = new mapboxgl.Marker(wrapper).setLngLat(coords);
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
        if (this._config.entityId === null || typeof this._config.entityId !== 'number') {
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
  .register(SearchComponent).register(FilterSearchComponent).register(AutoCompleteComponent).register(SpellCheckComponent) // Filter Components
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
        return request.post().then(function (response) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdC5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHRmYWN0b3J5LmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlY3Rpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL21vZGVscy9kaXJlY3RhbnN3ZXIuanMiLCJzcmMvY29yZS9tb2RlbHMvbmF2aWdhdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvaGlnaGxpZ2h0ZWR2YWx1ZS5qcyIsInNyYy9jb3JlL21vZGVscy9zcGVsbGNoZWNrLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cy5qcyIsInNyYy9jb3JlL21vZGVscy9keW5hbWljZmlsdGVycy5qcyIsInNyYy9jb3JlL21vZGVscy9zZWFyY2hpbnRlbnRzLmpzIiwic3JjL2NvcmUvc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lci5qcyIsInNyYy9jb3JlL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24uanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL2NvcmUvY29yZS5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnMuanMiLCJzcmMvdWkvZG9tL2RvbS5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudG1hbmFnZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9oYW5kbGViYXJzcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2NvbnN0LmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvaHR0cC9odHRwcmVxdWVzdGVyLmpzIiwic3JjL2NvcmUvY29uc3RhbnRzLmpzIiwic3JjL3VpL2RvbS9zZWFyY2hwYXJhbXMuanMiLCJzcmMvY29yZS9odHRwL2FwaXJlcXVlc3QuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoYXBpLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL25vb3BhbmFseXRpY3NyZXBvcnRlci5qcyIsInNyYy9jb3JlL3N0b3JhZ2UvbW9kdWxlZGF0YS5qcyIsInNyYy9jb3JlL3N0b3JhZ2UvZ2xvYmFsc3RvcmFnZS5qcyIsInNyYy9jb3JlL2luZGV4LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NwZWxsY2hlY2tjb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmFjZXQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3BhZ2luYXRpb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2ljb25zL2ljb24uanMiLCJzcmMvdWkvaWNvbnMvdGh1bWIuanMiLCJzcmMvdWkvaWNvbnMvcmVjZWlwdC5qcyIsInNyYy91aS9pY29ucy9wYW50aGVvbi5qcyIsInNyYy91aS9pY29ucy9taWMuanMiLCJzcmMvdWkvaWNvbnMvZGlyZWN0aW9ucy5qcyIsInNyYy91aS9pY29ucy9jYWxlbmRhci5qcyIsInNyYy91aS9pY29ucy9jYWxsb3V0LmpzIiwic3JjL3VpL2ljb25zL2luZm8uanMiLCJzcmMvdWkvaWNvbnMvYnJpZWZjYXNlLmpzIiwic3JjL3VpL2ljb25zL2thYm9iLmpzIiwic3JjL3VpL2ljb25zL3BlcnNvbi5qcyIsInNyYy91aS9pY29ucy9tYWduaWZ5aW5nX2dsYXNzLmpzIiwic3JjL3VpL2ljb25zL29mZmljZS5qcyIsInNyYy91aS9pY29ucy9saW5rLmpzIiwic3JjL3VpL2ljb25zL3dpbmRvdy5qcyIsInNyYy91aS9pY29ucy9waG9uZS5qcyIsInNyYy91aS9pY29ucy90YWcuanMiLCJzcmMvdWkvaWNvbnMvZG9jdW1lbnQuanMiLCJzcmMvdWkvaWNvbnMvY2hldnJvbi5qcyIsInNyYy91aS9pY29ucy9zdXBwb3J0LmpzIiwic3JjL3VpL2ljb25zL3lleHQuanMiLCJzcmMvdWkvaWNvbnMvcGluLmpzIiwic3JjL3VpL2ljb25zL2dlYXIuanMiLCJzcmMvdWkvaWNvbnMvbGlnaHRfYnVsYi5qcyIsInNyYy91aS9pY29ucy9zdGFyLmpzIiwic3JjL3VpL2ljb25zL2Nsb3NlLmpzIiwic3JjL3VpL2ljb25zL2luZGV4LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvaWNvbnMvaWNvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbnN0LmpzIiwic3JjL3VpL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlci5qcyIsInNyYy91aS9pbmRleC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL2NvcmUvZXJyb3JzL2NvbnNvbGVlcnJvcnJlcG9ydGVyLmpzIiwic3JjL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VhcmNoY29uZmlnLmpzIiwic3JjL2NvcmUvbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZWFwaS5qcyIsInNyYy9jb3JlL3NlYXJjaC9tb2NrYXV0b2NvbXBsZXRlc2VydmljZS5qcyIsInNyYy9jb3JlL3NlYXJjaC9xdWVzdGlvbmFuc3dlcmFwaS5qcyIsInNyYy9jb3JlL3NlYXJjaC9tb2NrcXVlc3Rpb25hbnN3ZXJzZXJ2aWNlLmpzIiwic3JjL2NvcmUvc2VhcmNoL21vY2tzZWFyY2hzZXJ2aWNlLmpzIiwic3JjL2Fuc3dlcnMtdW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIFNlYXJjaFN0YXRlcyAqL1xuXG4vKipcbiAqIFNlYXJjaFN0YXRlcyBpcyBhbiBFTlVNIGZvciB0aGUgdmFyaW91cyBzdGFnZXMgb2Ygc2VhcmNoaW5nLFxuICogdXNlZCB0byBzaG93IGRpZmZlcmVudCB0ZW1wbGF0ZXNcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJFX1NFQVJDSDogJ3ByZS1zZWFyY2gnLFxuICBTRUFSQ0hfTE9BRElORzogJ3NlYXJjaC1sb2FkaW5nJyxcbiAgU0VBUkNIX0NPTVBMRVRFOiAnc2VhcmNoLWNvbXBsZXRlJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFJlc3VsdCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJhdyBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmF3ID0gZGF0YS5yYXcgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtYXR0ZWQgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1hdHRlZCA9IGRhdGEuZm9ybWF0dGVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG51bWJlciBvZiB0aGUgcmVzdWx0XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9yZGluYWwgPSBkYXRhLm9yZGluYWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBib2R5IG9mIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIHJlc3VsdCBjYXJkLCBjYW4gY29udGFpbiBIVE1MXG4gICAgICogQHR5cGUge3N0cmluZ3wgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHMgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZXN0aW5hdGlvbiBsaW5rIGZvciB0aGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGluayA9IGRhdGEubGluayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEVudGl0eSBJRCwgb3Igb3RoZXIgdW5pcXVlIGlkZW50aWZpZXIsIHVzZWQgZm9yIHRvIHBvd2VyIGludGVyYWN0aXZpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJ0aXRsZSBvbiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJ0aXRsZSA9IGRhdGEuc3VidGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyBtb2RpZmllciwgdXN1YWxseSBkZXJpdmVkIGZyb20gdGhlIHZlcnRpY2FsIGNvbmZpZ3VyYXRpb24gSURcbiAgICAgKiBVc2VkIHRvIGFwcGx5IGRpZmZlcmVudCBzdHlsaW5nIHRvIGRpZmZlcmVudCByZXN1bHQgY2FyZCB0eXBlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gZGF0YS5tb2RpZmllciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsYXJnZSBkYXRlLCBvZiB0aGUgZm9ybWF0IHsgbW9udGg6ICdKYW4nLCBkYXk6ICcwMScgfVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmJpZ0RhdGUgPSBkYXRhLmJpZ0RhdGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGltYWdlIHByb2ZpbGUgb2JqZWN0LCBleHBlY3RlZCB0byBoYXZlIGEgdXJsIHByb3BlcnR5XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjYWxscyB0byBhY3Rpb24sIG9mIHRoZSBmb3JtYXQ6XG4gICAgICogeyBpY29uOiAnJywgdXJsOiAnJywgdGV4dDogJycsIGV2ZW50VHlwZTogJycsIGV2ZW50T3B0aW9uczoge319XG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY2FsbHNUb0FjdGlvbiA9IGRhdGEuY2FsbHNUb0FjdGlvbiB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gYWNjb3JkaWFuIHJlc3VsdCBzaG91bGQgYmUgY29sbGFwc2VkIGJ5IGRlZmF1bHRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZCA9IGRhdGEuY29sbGFwc2VkIHx8IHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdEZhY3RvcnkgKi9cblxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdEZhY3Rvcnkge1xuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIFJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBJbmNsdWRlcyBkZWZhdWx0IG1hcHBpbmdzIG9mIEdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSByZXN1bHRzIHRvXG4gICAqIHRoZSBmaWVsZHMgZXhwb3NlZCBieSB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSByZXN1bHRzRGF0YSAge0FycmF5fSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGUgcmVzdWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbElkIFRoZSB2ZXJ0aWNhbCBvZiB0aGVzZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgQmFja2VuZCBzb3VyY2Ugb2YgdGhlc2UgcmVzdWx0c1xuICAgKiBAcmV0dXJucyB7UmVzdWx0W119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzdWx0c0RhdGEsIGZvcm1hdHRlcnMsIHZlcnRpY2FsSWQsIHNvdXJjZSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG4gICAgICAvLyBDaGVjayBmb3IgbmV3IGRhdGEgZm9ybWF0LCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gbGVnYWN5XG5cbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRzRGF0YVtpXS5kYXRhIHx8IHJlc3VsdHNEYXRhW2ldO1xuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IHt9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGZvcm1hdHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgIGlmIChmb3JtYXR0ZXJzW2tleV0pIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGFba2V5XSA9IGZvcm1hdHRlcnNba2V5XSh2YWwsIGRhdGEsIHZlcnRpY2FsSWQsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgICBjYXNlICdHT09HTEVfQ1NFJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQklOR19DU0UnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWkVOREVTSyc6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBTEdPTElBJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tQWxnb2xpYVNlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZm9ybWF0dGVkRGF0YVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBmb3JtYXR0ZWQ6IGZvcm1hdHRlZERhdGEsXG4gICAgICB0aXRsZTogZm9ybWF0dGVkRGF0YS5uYW1lIHx8IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdHRlZERhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy50cnVuY2F0ZShkYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIGxpbms6IGRhdGEud2Vic2l0ZSxcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgb3JkaW5hbDogaW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBHb29nbGUgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5odG1sVGl0bGUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKSxcbiAgICAgIGRldGFpbHM6IGRhdGEuaHRtbFNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmxpbmtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEJpbmcgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGRhdGEuc25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEudXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBaZW5kZXNrIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21aZW5kZXNrU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBkZXRhaWxzOiBkYXRhLnNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmh0bWxfdXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBBbGdvbGlhIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBEZXRhaWxzIGZpZWxkIGlzIHNldCB0byBvYmplY3RJRCBzaW5jZSByZXNwb25zZSBoYXMgb25seSBvbmUgZ2VuZXJhbCBmaWVsZCBvYmplY3RJRC5cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tQWxnb2xpYVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIGRldGFpbHM6IGRhdGEub2JqZWN0SUQsXG4gICAgICBpZDogZGF0YS5vYmplY3RJRFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydW5jYXRlcyBzdHJpbmdzIHRvIDI1MCBjaGFyYWN0ZXJzLCBhdHRlbXB0aW5nIHRvIHByZXNlcnZlIHdob2xlIHdvcmRzXG4gICAqIEBwYXJhbSBzdHIge3N0cmluZ30gdGhlIHN0cmluZyB0byB0cnVuY2F0ZVxuICAgKiBAcGFyYW0gbGltaXQge051bWJlcn0gdGhlIG1heGltdW0gY2hhcmFjdGVyIGxlbmd0aCB0byByZXR1cm5cbiAgICogQHBhcmFtIHRyYWlsaW5nIHtzdHJpbmd9IGEgdHJhaWxpbmcgc3RyaW5nIHRvIGRlbm90ZSB0cnVuY2F0aW9uLCBlLmcuICcuLi4nXG4gICAqIEBwYXJhbSBzZXAge3N0cmluZ30gdGhlIHdvcmQgc2VwYXJhdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgdHJ1bmNhdGUgKHN0ciwgbGltaXQgPSAyNTAsIHRyYWlsaW5nID0gJy4uLicsIHNlcCA9ICcgJykge1xuICAgIGlmICghc3RyIHx8IHN0ci5sZW5ndGggPD0gbGltaXQpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgLy8gVE9ETyAoYm1jZ2lubmlzKTogc3BsaXQgcHVuY3R1YXRpb24gdG9vIHNvIHdlIGRvbid0IGVuZCB1cCB3aXRoIFwiZm9vLC4uLlwiXG4gICAgY29uc3Qgd29yZHMgPSBzdHIuc3BsaXQoc2VwKTtcbiAgICBjb25zdCBtYXggPSBsaW1pdCAtIHRyYWlsaW5nLmxlbmd0aDtcbiAgICBsZXQgdHJ1bmNhdGVkID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB3b3JkID0gd29yZHNbaV07XG4gICAgICBpZiAodHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoID4gbWF4IHx8XG4gICAgICAgIChpICE9PSAwICYmIHRydW5jYXRlZC5sZW5ndGggKyB3b3JkLmxlbmd0aCArIHNlcC5sZW5ndGggPiBtYXgpKSB7XG4gICAgICAgIHRydW5jYXRlZCArPSB0cmFpbGluZztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRydW5jYXRlZCArPSBpID09PSAwID8gd29yZCA6IHNlcCArIHdvcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VjdGlvbiAqL1xuXG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBSZXN1bHRGYWN0b3J5IGZyb20gJy4vcmVzdWx0ZmFjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsLCBmb3JtYXR0ZXJzKSB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0RmFjdG9yeS5mcm9tKGRhdGEucmVzdWx0cywgZm9ybWF0dGVycywgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLCBkYXRhLnNvdXJjZSk7XG4gICAgdGhpcy5tYXAgPSBTZWN0aW9uLnBhcnNlTWFwKGRhdGEucmVzdWx0cyk7XG4gICAgdGhpcy52ZXJ0aWNhbFVSTCA9IHVybCB8fCBudWxsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlTWFwIChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXTtcblxuICAgIGxldCBjZW50ZXJDb29yZGluYXRlcyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgbGVnYWN5IGZhbGxiYWNrIGZyb20gYWxsIGRhdGEgZm9ybWF0XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tqXS5kYXRhIHx8IHJlc3VsdHNbal07XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKCFjZW50ZXJDb29yZGluYXRlcy5sYXRpdHVkZSkge1xuICAgICAgICAgIGNlbnRlckNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtYXBNYXJrZXJzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHJlc3VsdCxcbiAgICAgICAgICBsYWJlbDogbWFwTWFya2Vycy5sZW5ndGggKyAxLFxuICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2VjdGlvbiBmcm9tIHRoZSBwcm92aWRlZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtb2R1bGVzIFRoZSByZXN1bHQgbW9kdWxlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJscyBUaGUgdGFiIHVybHNcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIEZpZWxkIGZvcm1hdHRlcnMgZm9yIHJlc3VsdHNcbiAgICovXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcywgbnVsbCwgZm9ybWF0dGVycyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdLFxuICAgICAgICAgIGZvcm1hdHRlcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2VhcmNoLCB1c2VkIHRvIHJlbmRlciBkaWZmZXJlbnQgdGVtcGxhdGVzIGJlZm9yZSwgZHVyaW5nLFxuICAgICAqIGFuZCBhZnRlciBsb2FkaW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1bml2ZXJzYWwgcmVzdWx0cyBmcm9tIHNlcnZlciBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoe1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIHNlY3Rpb25zOiBTZWN0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcywgdXJscywgZm9ybWF0dGVycylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBVbml2ZXJ2YWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1VuaXZlcnNhbFJlc3VsdHN9XG4gICAqL1xuICBzdGF0aWMgc2VhcmNoTG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yIChkaXJlY3RBbnN3ZXIgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGlyZWN0QW5zd2VyKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERpcmVjdEFuc3dlciBtb2RlbCBmcm9tIHRoZSBnaXZlbiBzZXJ2ZXIgZGF0YSBhbmQgZm9ybWF0dGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciBkaXJlY3QgYW5zd2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGlzIGRpcmVjdCBhbnN3ZXJcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgZm9ybWF0dGVycykge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgY29uc3QgeyBhbnN3ZXIsIHJlbGF0ZWRJdGVtIH0gPSBkYXRhO1xuXG4gICAgaWYgKGFuc3dlciAmJiBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKSB7XG4gICAgICBhbnN3ZXIudmFsdWUgPSBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKFxuICAgICAgICBhbnN3ZXIudmFsdWUsXG4gICAgICAgIHJlbGF0ZWRJdGVtLmRhdGEuZmllbGRWYWx1ZXMsXG4gICAgICAgIHJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlyZWN0QW5zd2VyKGRhdGEpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvciAodGFiT3JkZXIpIHtcbiAgICB0aGlzLnRhYk9yZGVyID0gdGFiT3JkZXIgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzKSB7XG4gICAgbGV0IG5hdiA9IFtdO1xuICAgIGlmICghbW9kdWxlcyB8fCAhQXJyYXkuaXNBcnJheShtb2R1bGVzKSkge1xuICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXYucHVzaChtb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE5hdmlnYXRpb24obmF2KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVmVydGljYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSB9LCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgcHJvdmlkZWQgcmVzdWx0cyB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqIEBwYXJhbSB7VmVydGljYWxSZXN1bHRzfSByZXN1bHRzIHRoZSByZXN1bHRzIHRvIGFwcGVuZCB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqL1xuICBhcHBlbmQgKHJlc3VsdHMpIHtcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnRoaXMgfTtcbiAgICBtZXJnZWQucmVzdWx0cyA9IHRoaXMucmVzdWx0cy5jb25jYXQocmVzdWx0cy5yZXN1bHRzKTtcbiAgICBtZXJnZWQubWFwLm1hcE1hcmtlcnMgPSB0aGlzLm1hcC5tYXBNYXJrZXJzLmNvbmNhdChyZXN1bHRzLm1hcC5tYXBNYXJrZXJzKTtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhtZXJnZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB2ZXJ0aWNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmaWVsZCBmb3JtYXR0ZXJzIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlLCBudWxsLCBmb3JtYXR0ZXJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgVmVydGljYWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1ZlcnRpY2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyh7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcgfSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgSGlnaGxpZ2h0ZWRWYWx1ZSAqL1xuXG4vKipcbiAqIE1vZGVsIHJlcHJlc2VudGluZyBhIGhpZ2hsaWdodGVkIHZhbHVlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaWdobGlnaHRlZFZhbHVlIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8IGRhdGEuc2hvcnRWYWx1ZSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgaGlnaGxpZ2h0ZWQgdmFsdWUgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgKCkge1xuICAgIHRoaXMuX3NvcnRNYXRjaGVkU3Vic3RyaW5ncygpO1xuICAgIHJldHVybiB0aGlzLl9idWlsZEhpZ2hsaWdodGVkVmFsdWUodGhpcy52YWx1ZSwgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGludmVydGVkIGhpZ2hsaWdodGVkIHZhbHVlIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0SW52ZXJ0ZWQgKCkge1xuICAgIHRoaXMuX3NvcnRNYXRjaGVkU3Vic3RyaW5ncygpO1xuICAgIGNvbnN0IGludmVydGVkU3Vic3RyaW5ncyA9IHRoaXMuX2dldEludmVydGVkU3Vic3RyaW5ncyh0aGlzLm1hdGNoZWRTdWJzdHJpbmdzLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSh0aGlzLnZhbHVlLCBpbnZlcnRlZFN1YnN0cmluZ3MpO1xuICB9XG5cbiAgX3NvcnRNYXRjaGVkU3Vic3RyaW5ncyAoKSB7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5vZmZzZXQgPCBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhLm9mZnNldCA+IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRJbnZlcnRlZFN1YnN0cmluZ3MgKG1hdGNoZWRTdWJzdHJpbmdzLCB2YWx1ZUxlbmd0aCkge1xuICAgIGNvbnN0IGludmVydGVkU3Vic3RyaW5ncyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN1YnN0cmluZyA9IG1hdGNoZWRTdWJzdHJpbmdzW2ldO1xuICAgICAgY29uc3QgbmV4dE9mZnNldCA9IHN1YnN0cmluZy5vZmZzZXQgKyBzdWJzdHJpbmcubGVuZ3RoO1xuICAgICAgaWYgKGkgPT09IDAgJiYgc3Vic3RyaW5nLm9mZnNldCAhPT0gMCkge1xuICAgICAgICBpbnZlcnRlZFN1YnN0cmluZ3MucHVzaCh7IG9mZnNldDogMCwgbGVuZ3RoOiBzdWJzdHJpbmcub2Zmc2V0IH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVMZW5ndGggPiBuZXh0T2Zmc2V0KSB7XG4gICAgICAgIGludmVydGVkU3Vic3RyaW5ncy5wdXNoKHtcbiAgICAgICAgICBvZmZzZXQ6IG5leHRPZmZzZXQsXG4gICAgICAgICAgbGVuZ3RoOiBpIDwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMVxuICAgICAgICAgICAgPyBtYXRjaGVkU3Vic3RyaW5nc1tpICsgMV0ub2Zmc2V0IC0gbmV4dE9mZnNldFxuICAgICAgICAgICAgOiB2YWx1ZUxlbmd0aCAtIG5leHRPZmZzZXRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbnZlcnRlZFN1YnN0cmluZ3M7XG4gIH1cblxuICBfYnVpbGRIaWdobGlnaHRlZFZhbHVlICh2YWwsIGhpZ2hsaWdodGVkU3Vic3RyaW5ncykge1xuICAgIGxldCBoaWdobGlnaHRlZFZhbHVlID0gJyc7XG4gICAgbGV0IG5leHRTdGFydCA9IDA7XG5cbiAgICBpZiAoaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhpZ2hsaWdodGVkU3Vic3RyaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKGhpZ2hsaWdodGVkU3Vic3RyaW5nc1tqXS5vZmZzZXQpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzW2pdLmxlbmd0aDtcblxuICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSBbdmFsLnNsaWNlKG5leHRTdGFydCwgc3RhcnQpLCAnPHN0cm9uZz4nLCB2YWwuc2xpY2Uoc3RhcnQsIGVuZCksICc8L3N0cm9uZz4nXS5qb2luKCcnKTtcblxuICAgICAgaWYgKGogPT09IGhpZ2hsaWdodGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxICYmIGVuZCA8IHZhbC5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWwuc2xpY2UoZW5kKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXJ0ID0gZW5kO1xuICAgIH1cblxuICAgIHJldHVybiBoaWdobGlnaHRlZFZhbHVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTcGVsbENoZWNrICovXG5cbmltcG9ydCBIaWdobGlnaHRlZFZhbHVlIGZyb20gJy4vaGlnaGxpZ2h0ZWR2YWx1ZSc7XG5cbi8qKlxuICogU3BlbGxDaGVjayBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIFNwZWxsQ2hlY2sgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWxsQ2hlY2sge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBvcmlnaW5hbCBxdWVyeVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGRhdGEucXVlcnkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb3JyZWN0ZWQgcXVlcnlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29ycmVjdGVkUXVlcnkgPSBkYXRhLmNvcnJlY3RlZFF1ZXJ5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29ycmVjdGVkIHF1ZXJ5IHdpdGggaGlnaGxpZ2h0ZWQgdGFnc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb3JyZWN0ZWRRdWVyeURpc3BsYXkgPSBkYXRhLmNvcnJlY3RlZFF1ZXJ5RGlzcGxheSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwZWxsIGNoZWNrIHR5cGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIHNob3cgc3BlbGwgY2hlY2sgb3Igbm90XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5zaG91bGRTaG93ID0gdGhpcy5jb3JyZWN0ZWRRdWVyeSAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzcGVsbCBjaGVjayBtb2RlbCBmcm9tIHRoZSBwcm92aWRlZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc3BlbGwgY2hlY2sgcmVzcG9uc2VcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFNwZWxsQ2hlY2soe1xuICAgICAgcXVlcnk6IHJlc3BvbnNlLm9yaWdpbmFsUXVlcnksXG4gICAgICBjb3JyZWN0ZWRRdWVyeTogcmVzcG9uc2UuY29ycmVjdGVkUXVlcnksXG4gICAgICBjb3JyZWN0ZWRRdWVyeURpc3BsYXk6IG5ldyBIaWdobGlnaHRlZFZhbHVlKHJlc3BvbnNlLmNvcnJlY3RlZFF1ZXJ5KS5nZXQoKSxcbiAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGVcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RvcmFnZUtleXMgKi9cblxuLyoqXG4gKiBTdG9yYWdlS2V5cyBpcyBhbiBFTlVNIGFyZSBjb25zaWRlcmVkIHRoZSByb290IGNvbnRleHRcbiAqIGZvciBob3cgZGF0YSBpcyBzdG9yZWQgYW5kIHNjb3BlZCBpbiB0aGUgc3RvcmFnZS5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE5BVklHQVRJT046ICduYXZpZ2F0aW9uJyxcbiAgVU5JVkVSU0FMX1JFU1VMVFM6ICd1bml2ZXJzYWwtcmVzdWx0cycsXG4gIFZFUlRJQ0FMX1JFU1VMVFM6ICd2ZXJ0aWNhbC1yZXN1bHRzJyxcbiAgQVVUT0NPTVBMRVRFOiAnYXV0b2NvbXBsZXRlJyxcbiAgRElSRUNUX0FOU1dFUjogJ2RpcmVjdC1hbnN3ZXInLFxuICBGSUxURVI6ICdmaWx0ZXInLFxuICBRVUVSWTogJ3F1ZXJ5JyxcbiAgUVVFUllfSUQ6ICdxdWVyeS1pZCcsXG4gIEZBQ0VUX0ZJTFRFUjogJ2ZhY2V0LWZpbHRlcicsXG4gIERZTkFNSUNfRklMVEVSUzogJ2R5bmFtaWMtZmlsdGVycycsXG4gIFBBUkFNUzogJ3BhcmFtcycsXG4gIEdFT0xPQ0FUSU9OOiAnZ2VvbG9jYXRpb24nLFxuICBJTlRFTlRTOiAnaW50ZW50cycsXG4gIFFVRVNUSU9OX1NVQk1JU1NJT046ICdxdWVzdGlvbi1zdWJtaXNzaW9uJyxcbiAgU0VBUkNIX0NPTkZJRzogJ3NlYXJjaC1jb25maWcnLFxuICBTRUFSQ0hfT0ZGU0VUOiAnc2VhcmNoLW9mZnNldCcsXG4gIFNQRUxMX0NIRUNLOiAnc3BlbGwtY2hlY2snXG59O1xuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnMgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRoaXMgbW9kZWwgaG9sZHNcbiAgICAgKiBAdHlwZSB7e2xhYmVsOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgb3B0aW9uczogb2JqZWN0W119fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVycyA9IGRhdGEuZmlsdGVycyB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZ2FuaXplICdmYWNldHMnIGZyb20gdGhlIGFwaSByZXNwb25zZSBpbnRvIGR5bmFtaWMgZmlsdGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgZHluYW1pYyBmaWx0ZXIgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gICAqIEByZXR1cm5zIHtEeW5hbWljRmlsdGVyc31cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBkeW5hbWljRmlsdGVycyA9IGZhY2V0cy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGZbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICBmaWVsZElkOiBmWydmaWVsZElkJ10sXG4gICAgICBvcHRpb25zOiBmLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgICAgbGFiZWw6IG9bJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGNvdW50TGFiZWw6IG9bJ2NvdW50J10sXG4gICAgICAgIHNlbGVjdGVkOiBvWydzZWxlY3RlZCddLFxuICAgICAgICBmaWx0ZXI6IG9bJ2ZpbHRlciddXG4gICAgICB9KSlcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IER5bmFtaWNGaWx0ZXJzKHsgZmlsdGVyczogZHluYW1pY0ZpbHRlcnMgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEludGVudHMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoSW50ZW50cyB7XG4gIGNvbnN0cnVjdG9yIChpbnRlbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCB0byBmaW5kIHJlc3VsdHMgYmFzZWQgb24gdGhlIHVzZXIncyBsb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubmVhck1lID0gaW50ZW50cy5uZWFyTWU7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBTZWFyY2hJbnRlbnRzIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlIGludGVudHNcbiAgICogQHJldHVybnMge1NlYXJjaEludGVudHN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCBpbnRlbnRzID0gcmVzcG9uc2UgfHwgW107XG5cbiAgICByZXR1cm4gbmV3IFNlYXJjaEludGVudHMoe1xuICAgICAgbmVhck1lOiBpbnRlbnRzLmluY2x1ZGVzKCdORUFSX01FJylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBEaXJlY3RBbnN3ZXIgZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGFuc3dlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9tb2RlbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFNwZWxsQ2hlY2sgZnJvbSAnLi4vbW9kZWxzL3NwZWxsY2hlY2snO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzIGZyb20gJy4uL21vZGVscy9keW5hbWljZmlsdGVycyc7XG5pbXBvcnQgU2VhcmNoSW50ZW50cyBmcm9tICcuLi9tb2RlbHMvc2VhcmNoaW50ZW50cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuSU5URU5UU106IFNlYXJjaEludGVudHMuZnJvbShyZXNwb25zZS5zZWFyY2hJbnRlbnRzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS106IFNwZWxsQ2hlY2suZnJvbShyZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5JTlRFTlRTXTogU2VhcmNoSW50ZW50cy5mcm9tKGRhdGEucmVzcG9uc2Uuc2VhcmNoSW50ZW50cyksXG4gICAgICBbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdOiBTcGVsbENoZWNrLmZyb20oZGF0YS5yZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbiAqL1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbiBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIFF1ZXN0aW9uU3VibWlzc2lvbiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uIHtcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uID0ge30sIGVycm9ycykge1xuICAgIC8qKlxuICAgICAqIFRoZSBhdXRob3Igb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBxdWVzdGlvbi5uYW1lIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZW1haWwgPSBxdWVzdGlvbi5lbWFpbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgcHJpdmFjeSBwb2xpY3kgd2FzIGFwcHJvdmVkXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcml2YWN5UG9saWN5ID0gcXVlc3Rpb24ucHJpdmFjeVBvbGljeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXN0aW9uIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBxdWVzdGlvbi5xdWVzdGlvblRleHQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHF1ZXN0aW9uIG1ldGEgaW5mb3JtYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25EZXNjcmlwdGlvbiA9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGFueSBlcnJvcnMgYWJvdXQgdGhlIHF1ZXN0aW9uIHN1Ym1pc3Npb25cbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IG51bGw7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHN1Ym1pdHRlZCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uU3VibWl0dGVkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcnMgKHF1ZXN0aW9uLCBlcnJvcnMpIHtcbiAgICByZXR1cm4gUXVlc3Rpb25TdWJtaXNzaW9uKHF1ZXN0aW9uLCBlcnJvcnMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXIgKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFwaSBmaWx0ZXIgYW5kIHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBlYXNpbHkgY29uc3RydWN0aW5nIEZpbHRlcnMuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIueWV4dC5jb20vZG9jcy9hcGktcmVmZXJlbmNlLyNvcGVyYXRpb24vbGlzdEVudGl0aWVzIGZvciBzdHJ1Y3R1cmUgZGV0YWlsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgSlNPTiBmb3JtYXQgZmlsdGVyIHJldHVybmVkIGZyb20gdGhlIHNlcnZlciBpbnRvIGEgRmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2VGaWx0ZXIgQSBmaWx0ZXIgaW4gSlNPTiBmb3JtYXQgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGZyb21SZXNwb25zZSAocmVzcG9uc2VGaWx0ZXIpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcihKU09OLnBhcnNlKHJlc3BvbnNlRmlsdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIE9SIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBPUiB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIG9yICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRvcic6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgQU5EIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBBTkQgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBhbmQgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJGFuZCc6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPUiBmaWx0ZXJzIHdpdGggdGhlIHNhbWUga2V5cywgdGhlbiBBTkQgdGhlIHJlc3VsdGluZyBncm91cHNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIGdyb3VwXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JvdXAgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXIpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmaWx0ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwRmlsdGVycyA9IFtdO1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSkge1xuICAgICAgZ3JvdXBGaWx0ZXJzLnB1c2goZ3JvdXBzW2ZpZWxkXS5sZW5ndGggPiAxID8gRmlsdGVyLm9yKC4uLmdyb3Vwc1tmaWVsZF0pIDogZ3JvdXBzW2ZpZWxkXVswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwRmlsdGVycy5sZW5ndGggPiAxID8gRmlsdGVyLmFuZCguLi5ncm91cEZpbHRlcnMpIDogZ3JvdXBGaWx0ZXJzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBlcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZXEnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGx0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGxlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRndCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRnZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5jbHVzaXZlIHJhbmdlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGluY2x1c2l2ZVJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgICckZ2UnOiBtaW4sXG4gICAgICAgICckbGUnOiBtYXhcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZXhjbHVzaXZlIHJhbmdlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGV4Y2x1c2l2ZVJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgICckZ3QnOiBtaW4sXG4gICAgICAgICckbHQnOiBtYXhcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcG9zaXRpb24gZmlsdGVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYXQgVGhlIGxhdGl0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gbG5nIFRoZSBsb25naXR1ZGUgb2YgdGhlIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgVGhlIHNlYXJjaCByYWRpdXMgKGluIG1ldGVycylcbiAgICovXG4gIHN0YXRpYyBwb3NpdGlvbiAobGF0LCBsbmcsIHJhZGl1cykge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKCdidWlsdGluLmxvY2F0aW9uJywgJyRuZWFyJywgeyBsYXQsIGxuZywgcmFkaXVzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmaWx0ZXIgd2l0aCB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlciBUaGUgbWF0Y2hlciBmb3IgdGhlIGZpbGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgZmlsdGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgX2Zyb21NYXRjaGVyIChmaWVsZCwgbWF0Y2hlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgIFttYXRjaGVyXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29yZSAqL1xuXG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uIGZyb20gJy4vbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vbW9kZWxzL2ZpbHRlcic7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NlcnZpY2VzL3NlYXJjaHNlcnZpY2UnKS5kZWZhdWx0fSBTZWFyY2hTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zZXJ2aWNlcy9hdXRvY29tcGxldGVzZXJ2aWNlJykuZGVmYXVsdH0gQXV0b0NvbXBsZXRlU2VydmljZSAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2VydmljZXMvcXVlc3Rpb25hbnN3ZXJzZXJ2aWNlJykuZGVmYXVsdH0gUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlICovXG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBbnN3ZXJzIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZUtleSA9IGNvbmZpZy5leHBlcmllbmNlS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IGxvY2FsZSB1c2VkIGZvciBhbGwgcmVxdWVzdHMuIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFwiZW5cIiAoZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlO1xuXG4gICAgLyoqXG4gICAgICogQSBtYXAgb2YgZmllbGQgZm9ybWF0dGVycyB1c2VkIHRvIGZvcm1hdCByZXN1bHRzLCBpZiBwcmVzZW50XG4gICAgICogQHR5cGUge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZEZvcm1hdHRlcnMgPSBjb25maWcuZmllbGRGb3JtYXR0ZXJzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtHbG9iYWxTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlID0gY29uZmlnLmdsb2JhbFN0b3JhZ2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBwZXJzaXN0ZW50IHN0b3JhZ2VcbiAgICAgKiBAdHlwZSB7UGVyc2lzdGVudFN0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBlcnNpc3RlbnRTdG9yYWdlID0gY29uZmlnLnBlcnNpc3RlbnRTdG9yYWdlO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBzZWFyY2ggQVBJXG4gICAgICogRm9yIGJvdGggdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2hcbiAgICAgKiBAdHlwZSB7U2VhcmNoU2VydmljZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gY29uZmlnLnNlYXJjaFNlcnZpY2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIGF1dG9jb21wbGV0ZSBBUElcbiAgICAgKiBGb3IgZmlsdGVyIHNlYXJjaCwgdmVydGljYWwgYXV0b2NvbXBsZXRlLCBhbmQgdW5pdmVyc2FsIGF1dG9jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtBdXRvQ29tcGxldGVTZXJ2aWNlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gY29uZmlnLmF1dG9Db21wbGV0ZVNlcnZpY2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgUSZBIHJlc3QgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge1F1ZXN0aW9uQW5zd2VyU2VydmljZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3F1ZXN0aW9uQW5zd2VyID0gY29uZmlnLnF1ZXN0aW9uQW5zd2VyU2VydmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggaW4gdGhlIGNvbnRleHQgb2YgYSB2ZXJ0aWNhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdmVydGljYWwgSUQgZm9yIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IFRoZSBxdWVyeSBkZXRhaWxzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pbnB1dCBUaGUgaW5wdXQgdG8gc2VhcmNoIGZvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmlsdGVyIFRoZSBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZhY2V0RmlsdGVyIFRoZSBmYWNldCBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5LmxpbWl0IFRoZSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgdG8gaW5jbHVkZSwgbWF4IG9mIDUwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5vZmZzZXQgVGhlIHJlc3VsdHMgb2Zmc2V0LCBmb3IgZmV0Y2hpbmcgbW9yZSByZXN1bHRzIG9mIHRoZSBzYW1lIHF1ZXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pZCBUaGUgcXVlcnkgSUQgdG8gdXNlLiBJZiBwYWdpbmcgd2l0aGluIGEgcXVlcnksIHRoZSBzYW1lIElEIHNob3VsZCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuYXBwZW5kIElmIHRydWUsIGFkZHMgdGhlIHJlc3VsdHMgb2YgdGhpcyBxdWVyeSB0byB0aGUgZW5kIG9mIHRoZSBjdXJyZW50IHJlc3VsdHMsIGRlZmF1bHRzIGZhbHNlXG4gICAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHF1ZXJ5KSB7XG4gICAgaWYgKCFxdWVyeS5hcHBlbmQpIHtcbiAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgVmVydGljYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudmVydGljYWxTZWFyY2godmVydGljYWxLZXksIHtcbiAgICAgICAgbGltaXQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfQ09ORklHKS5saW1pdCxcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZDogdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSwgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdza2lwU3BlbGxDaGVjaycpO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhZ2Ugd2l0aGluIHRoZSByZXN1bHRzIG9mIHRoZSBsYXN0IHF1ZXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSBUaGUgdmVydGljYWwga2V5IHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKi9cbiAgdmVydGljYWxQYWdlICh2ZXJ0aWNhbEtleSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG4gICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG4gICAgdGhpcy52ZXJ0aWNhbFNlYXJjaCh2ZXJ0aWNhbEtleSwge1xuICAgICAgaW5wdXQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSksXG4gICAgICBpZDogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZX0lEKSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKSxcbiAgICAgIG9mZnNldFxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIFVuaXZlcnNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLLCB7fSk7XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC51bml2ZXJzYWxTZWFyY2gocXVlcnlTdHJpbmcsIHtcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcG9uc2UsIHVybHMsIHRoaXMuX2ZpZWxkRm9ybWF0dGVycykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV9JRF0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVIsIGRhdGFbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXSwgdXJscyk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTiwgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbih7XG4gICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVyeVN0cmluZ1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICovXG4gIGF1dG9Db21wbGV0ZVVuaXZlcnNhbCAoaW5wdXQsIG5hbWVzcGFjZSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVVuaXZlcnNhbChpbnB1dClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkIHZlcnRpY2FsXG4gICAqIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZVZlcnRpY2FsIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VmVydGljYWwoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHByb3ZpZGUgYSBsaXN0IG9mIHN1aXRhYmxlIGZpbHRlcnMgZm9yIGF1dG9jb21wbGV0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnICB0aGUgY29uZmlnIHRvIHNlcmFjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcubmFtZXNwYWNlICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSAgdGhlIGJhciBrZXkgZm9yIHRoZSBjb25maWcgdjFcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzICB0aGUgc2VhcmNoIHBhcmFtZXRlcnMgZm9yIHRoZSBjb25maWcgdjJcbiAgICovXG4gIGF1dG9Db21wbGV0ZUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeUZpbHRlcihpbnB1dCwgY29uZmlnKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke2NvbmZpZy5uYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIGEgcXVlc3Rpb24gdG8gdGhlIHNlcnZlciBhbmQgdXBkYXRlcyB0aGUgdW5kZXJseWluZyBxdWVzdGlvbiBtb2RlbFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25BbnN3ZXJcbiAgICAgIC5zdWJtaXRRdWVzdGlvbihxdWVzdGlvbilcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFxuICAgICAgICAgIFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT04sXG4gICAgICAgICAgUXVlc3Rpb25TdWJtaXNzaW9uLnN1Ym1pdHRlZCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBzZXRGYWNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIGVuYWJsZUR5bmFtaWNGaWx0ZXJzICgpIHtcbiAgICB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxTdG9yYWdlLm9uKGV2dCwgbW9kdWxlSWQsIGNiKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXJyb3JzICovXG5cbi8qKlxuICogQW5zd2Vyc0Jhc2VFcnJvciBpcyBhbiBleHRlbnNpb24gb2YgdGhlIGJhc2UgRXJyb3Igb2JqZWN0LlxuICogVGhpcyBpcyB0aGUgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byB3aGVuIHJlcG9ydGluZyB0byB0aGUgc2VydmVyLlxuICogQGV4dGVuZHMgRXJyb3JcbiAqXG4gKiBFcnJvciBjb2RlcyBmYWxsIGludG8gb25lIG9mIGZvdXIgY2F0ZWdvcmllczpcbiAqIDFYWCBlcnJvcnM6IEJhc2ljIGVycm9yc1xuICogMlhYIGVycm9yczogVUkgZXJyb3JzXG4gKiAzWFggZXJyb3JzOiBFbmRwb2ludCBlcnJvcnNcbiAqIDRYWCBlcnJvcnM6IENvcmUgZXJyb3JzXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoZXJyb3JDb2RlLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5ib3VuZGFyeSA9IGJvdW5kYXJ5O1xuICAgIHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcblxuICAgIGlmIChjYXVzZWRCeSkge1xuICAgICAgdGhpcy5jYXVzZWRCeSA9IGNhdXNlZEJ5IGluc3RhbmNlb2YgQW5zd2Vyc0Jhc2VFcnJvclxuICAgICAgICA/IGNhdXNlZEJ5XG4gICAgICAgIDogQW5zd2Vyc0Jhc2VFcnJvci5mcm9tKGNhdXNlZEJ5KTtcbiAgICB9XG4gIH1cblxuICB0b0pzb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICBsZXQgc3RyaW5nID0gYCR7dGhpcy5lcnJvck1lc3NhZ2V9ICgke3RoaXMuYm91bmRhcnl9KWA7XG4gICAgaWYgKHRoaXMuY2F1c2VkQnkpIHtcbiAgICAgIHN0cmluZyArPSBgXFxuICBDYXVzZWQgQnk6ICR7dGhpcy5jYXVzZWRCeS50b1N0cmluZygpfWA7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYnVpbHRpbkVycm9yLCBib3VuZGFyeSkge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEFuc3dlcnNCYXNpY0Vycm9yKGJ1aWx0aW5FcnJvci5tZXNzYWdlLCBib3VuZGFyeSk7XG4gICAgZXJyb3Iuc3RhY2sgPSBidWlsdGluRXJyb3Iuc3RhY2s7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0Jhc2ljRXJyb3IgaXMgYSB3cmFwcGVyIGFyb3VuZCBhbGwgdGhlIGJ1aWx0LWluIGVycm9yc1xuICogZS5nLiB1bmRlZmluZWQgdmFyaWFibGVzLCBpbmNvcnJlY3Qgc3ludGF4LCB0eXBlcywgbWlzc2luZyBtZXRob2RzLCBldGMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzaWNFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMTAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc1VpRXJyb3IgdXNlZCBmb3IgdGhpbmdzIGxpa2UgRE9NIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb25maWdFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMTAxLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc1VpRXJyb3IgdXNlZCBmb3IgdGhpbmdzIGxpa2UgRE9NIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNVaUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgaXMgdXNlZCBmb3IgQ29tcG9uZW50IG9yaWVudGVkIGVycm9yc1xuICogZS5nLiBmYWlsdXJlIHRvIHJlbmRlciwgb3IgY2F0Y2hpbmcgdW5rbm93bnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDEsIG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0VuZHBvaW50RXJyb3IgcmVwcmVzZW50cyBhbGwgbmV0d29yayByZWxhdGVkIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNFbmRwb2ludEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigzMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29yZUVycm9yIHJlcHJlc2VudHMgZXJyb3JzIGZvciBwcmVjb25kaXRpb24gZmFpbHVyZXMgaW4gdGhlIGNvcmUgbGlicmFyeVxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvcmVFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc1N0b3JhZ2VFcnJvciByZXByZXNlbnRzIHN0b3JhZ2UgcmVsYXRlZCBlcnJvcnNcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNTdG9yYWdlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIHN0b3JhZ2VLZXksIGRhdGEsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAxLCBtZXNzYWdlLCAnU3RvcmFnZScsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLnN0b3JhZ2VLZXkgPSBzdG9yYWdlS2V5O1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgaXMgdXNlZCBmb3IgZXJyb3JzIHdoZW4gcmVwb3J0aW5nIGFuYWx5dGljc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBldmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDIsIG1lc3NhZ2UsICdBbmFseXRpY3MnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGF0dHJpYnV0ZXMgKHNlbGVjdG9yLCBhdHRycykge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgICAgLmZvckVhY2goKFthdHRyLCB2YWxdKSA9PiB0aGlzLmF0dHIoc2VsZWN0b3IsIGF0dHIsIHZhbCkpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb25jZSAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBvZmYgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxlZ2F0ZSAoY3R4dCwgc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIGxldCBlbCA9IERPTS5xdWVyeShjdHh0KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgd2hpbGUgKCF0YXJnZXQuaXNFcXVhbE5vZGUoZWwpKSB7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb21wb25lbnRNYW5hZ2VyICovXG5cbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIENvbXBvbmVudE1hbmFnZXIgaXMgYSBTaW5nbGV0b25lIHRoYXQgY29udGFpbnMgYm90aCBhbiBpbnRlcm5hbCByZWdpc3RyeSBvZlxuICogZWxpZ2libGUgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkLCBhcyB3ZWxsIGFzIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50XG4gKiBpbnN0YW50aWF0ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEFMTCBjb21wb25lbnRzIHNob3VsZCBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUge0NvbXBvbmVudE1hbmFnZXJ9IHZpYSBpdHMgYGNyZWF0ZWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuYWx5dGljc1JlcG9ydGVyIChyZXBvcnRlcikge1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlciAoY29tcG9uZW50Q2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRDbGF6ei50eXBlXSA9IGNvbXBvbmVudENsYXp6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGNvbnN0cnVjdGluZyBhbnkgYW5kIGFsbCBjb21wb25lbnRzLlxuICAgKiBJdCB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQsIGFuZCBib3RoIGFwcGx5XG4gICAqIGluaXRpYWwgc3RhdGUgZnJvbSB0aGUgc3RvcmFnZSBhbmQgYmluZCBpdCB0byB0aGUgc3RvcmFnZSBmb3IgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBUaGUgb3B0aW9ucyB0byBwaXBlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY3JlYXRlIChjb21wb25lbnRUeXBlLCBvcHRzKSB7XG4gICAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGxvY2FsIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAvLyBiZWNhdXNlIHNvbWV0aW1lcyBjb21wb25lbnRzIGhhdmUgc3ViY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gYmVcbiAgICAvLyBjb25zdHJ1Y3RlZCBkdXJpbmcgY3JlYXRpb25cbiAgICBsZXQgc3lzdGVtT3B0cyA9IHtcbiAgICAgIGNvcmU6IHRoaXMuX2NvcmUsXG4gICAgICByZW5kZXJlcjogdGhpcy5fcmVuZGVyZXIsXG4gICAgICBhbmFseXRpY3NSZXBvcnRlcjogdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIsXG4gICAgICBjb21wb25lbnRNYW5hZ2VyOiB0aGlzXG4gICAgfTtcblxuICAgIGxldCBjb21wb25lbnRDbGFzcyA9IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKFxuICAgICAgIWNvbXBvbmVudENsYXNzLmFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCgpICYmXG4gICAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNvbWUoYyA9PiBjLm5hbWUgPT09IG9wdHMubmFtZSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgIGBBbm90aGVyIGNvbXBvbmVudCB3aXRoIG5hbWUgJHtvcHRzLm5hbWV9IGFscmVhZHkgZXhpc3RzYCxcbiAgICAgICAgY29tcG9uZW50VHlwZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgaXNUd2luOiB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNvbWUoY29tcG9uZW50ID0+IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci50eXBlID09PSBjb21wb25lbnRUeXBlKSxcbiAgICAgIC4uLm9wdHNcbiAgICB9O1xuXG4gICAgLy8gSW5zdGFudGlhdGUgb3VyIG5ldyBjb21wb25lbnQgYW5kIGtlZXAgdHJhY2sgb2YgaXRcbiAgICBsZXQgY29tcG9uZW50ID1cbiAgICAgIG5ldyB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXShjb25maWcsIHN5c3RlbU9wdHMpXG4gICAgICAgIC5pbml0KGNvbmZpZyk7XG5cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgZ2xvYmFsIHN0b3JhZ2UgdG8gcG93ZXIgc3RhdGUsIGFwcGx5IHRoZSBzdGF0ZVxuICAgIC8vIGZyb20gdGhlIHN0b3JhZ2UgdG8gdGhlIGNvbXBvbmVudCwgYW5kIHRoZW4gYmluZCB0aGUgY29tcG9uZW50XG4gICAgLy8gc3RhdGUgdG8gdGhlIHN0b3JhZ2UgdmlhIGl0cyB1cGRhdGVzXG4gICAgaWYgKHRoaXMuX2NvcmUgJiYgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBwcm92aWRlZCBjb21wb25lbnQgZnJvbSB0aGUgbGlzdCBvZiBhY3RpdmUgY29tcG9uZW50cyBhbmQgcmVtb3ZlXG4gICAqIHRoZSBhc3NvY2lhdGVkIHN0b3JhZ2UgZXZlbnQgbGlzdGVuZXJcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlIChjb21wb25lbnQpIHtcbiAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2Uub2ZmKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQpO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmRJbmRleChjID0+IGMubmFtZSA9PT0gY29tcG9uZW50Lm5hbWUpO1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb21wbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUJ5TmFtZSAobmFtZSkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZChjID0+IGMubmFtZSA9PT0gbmFtZSk7XG4gICAgY29tcG9uZW50LnJlbW92ZSgpO1xuICAgIERPTS5lbXB0eShjb21wb25lbnQuX2NvbnRhaW5lcik7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5jb25zdHJ1Y3Rvci50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBFdmVudEVtaXR0ZXIgKi9cblxuLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Vic2NyaWJlcnMgb2YgbWVzc2FnZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbiAoZXZ0LCBjYiwgb25jZSkge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaGFuZGxlciBzaG91bGQgYmUgb2YgdHlwZSB7ZnVuY3Rpb259Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tldnRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0ucHVzaCh7XG4gICAgICBldmVudDogZXZ0LFxuICAgICAgY2I6IGNiLFxuICAgICAgb25jZTogb25jZSB8fCBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogb25jZSBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBoYW5kbGVyIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uY2UgKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZiAoZXZ0KSB7XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXQgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGJyb2FkY2FzdGluZyBtZXNzYWdlcy9ldmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBwdWJsaXNoIGZyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdGhlIGRhdGEgdG8gc2VuZCBhbG9uZyB0byB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIGVtaXQgKGV2dCwgZGF0YSkge1xuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICBpZiAobGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbnZva2UgZWFjaCBvZiBhbGwgdGhlIGxpc3RlbmVyIGhhbmRsZXJzIGFuZCByZW1vdmUgdGhlIG9uZXMgdGhhdCBzaG91bGQgZmlyZSBvbmx5IG9uY2UuXG4gICAgbGV0IGtlZXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmNiKGRhdGEpO1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnN0ZWFkIG9mIGhhdmluZyBhICdkaXJ0eScgYXJyYXkgd2l0aCBkZWxldGVkIG9yICd1bmRlZmluZWQnIGVudHJpZXMsXG4gICAgICAvLyB3ZSBqdXN0IGNyZWF0ZSBhIGJyYW5kIG5ldyBhcnJheSB3aXRob3V0IHRoZSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIHJlbW92ZWRcbiAgICAgIGtlZXAucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBvdXIgb2xkIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBrZWVwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdGF0ZSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uLy4uL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogU3RhdGUgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoZSBjb21wb25lbnRcbiAqIGFuZCBleHBvc2VzIGFuIHtFdmVudEVtaXR0ZXJ9IGludGVyZmFjZSBzbyB0aGF0IGV4dGVybmFsXG4gKiBkZXBlbmRlbmNpZXMgY2FuIGxpc3Rlbi9ob29rIHN1YnNjcmliZSB0byBtZXNzYWdlcy91cGRhdGVzLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIE5PVEUoYmlsbHkpOiBEb2VzIG5vdCBmaXJlIGFuIHVwZGF0ZSBtZXNzYWdlXG4gICAqL1xuICBpbml0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIE9wdGlvbmFsLCBpZiBwcm9wIGlzIGEge3N0cmluZ30sIGl0IHdpbGwgYXNzaWduIHRoZSB2YWx1ZSB0byB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBzZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGUgZW5hYmxlcyB5b3UgdG8gdXBkYXRlIGEgc2luZ2xlIHByb3BlcnR5LCBvciBjb21wbGV0ZSBzdGF0ZVxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGFyZ3VtZW50cyBwcm92aWRlZC5cbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBJZiBwcm9wIGlzIGEge3N0cmluZ30sIHByb3ZpZGUgaXRzIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICBpZiAob3B0VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gcHJvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGVbcHJvcF0gPSBvcHRWYWw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlIChkYXRhKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBwcm9wZXJ0aWVzIHZhbHVlIGZyb20gdGhlIHN0YXRlXG4gICAqIElmIG5vIHByb3BlcnR5IHByb3ZpZGVkLCByZXR1cm4gdGhlIGZ1bGwgc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFByb3Agb3B0aW9uYWwgcHJvcGVydHkgdG8gcmV0cmlldmVcbiAgICovXG4gIGdldCAob3B0UHJvcCkge1xuICAgIGlmIChvcHRQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW29wdFByb3BdO1xuICB9XG5cbiAgaGFzIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW3Byb3BdICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc0pTT04gKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgSHR0cFJlcXVlc3RlciAqL1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cblxuLyoqXG4gKiBUeXBlcyBvZiBIVFRQIHJlcXVlc3RzXG4gKi9cbmNvbnN0IE1ldGhvZHMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxuLyoqXG4gKiBIdHRwUmVxdWVzdGVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBBSkFYXG4gKiByZWxhdGVkIG1hdHRlcnMuIEl0J3MgdXNlZCB0byBtYWtlIGFsbCB0eXBlcyBvZiBuZXR3b3JrIHJlcXVlc3RzXG4gKiBhbmQgZXhwb3NlcyBhIHByb21pc2UgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zIFRoZSBwYXJhbXMgdG8gZW5jb2RlIGludG8gdGhlIFVSTFxuICAgKiBAcGFyYW0ge09iamVjdH0ganNvbkJvZHkgVGhlIHJlcXVlc3QgYm9keSAoanNvbikgdG8gcHJvdmlkZSB3aXRoIHRoZSBQT1NUIHJlcXVlc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RDb25maWcgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBvc3QgKHVybCwgdXJsUGFyYW1zLCBqc29uQm9keSwgcmVxdWVzdENvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB0aGlzLmVuY29kZVBhcmFtcyh1cmwsIHVybFBhcmFtcyksXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoanNvbkJvZHkpLFxuICAgICAgICBjcmVkZW50aWFsczogdW5kZWZpbmVkXG4gICAgICB9LCByZXF1ZXN0Q29uZmlnKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0IChtZXRob2QsIHVybCwgb3B0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWV0aG9kLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0sIG9wdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgYmVhY29uIHRvIHRoZSBwcm92aWRlZCB1cmwgd2hpY2ggd2lsbCBzZW5kIGEgbm9uLWJsb2NraW5nIHJlcXVlc3RcbiAgICogdG8gdGhlIHNlcnZlciB0aGF0IGlzIGd1YXJhbnRlZWQgdG8gc2VuZCBiZWZvcmUgcGFnZSBsb2FkLiBObyByZXNwb25zZSBpcyByZXR1cm5lZCxcbiAgICogc28gYmVhY29ucyBhcmUgcHJpbWFyaWx5IHVzZWQgZm9yIGFuYWx5dGljcyByZXBvcnRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBzZW5kIHRoZSBiZWFjb24gdG9cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgcGF5bG9hZCB0byBzZW5kIGluIHRoZSBiZWFjb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsbHkgcXVldWVkXG4gICAqL1xuICBiZWFjb24gKHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIGVuY29kZVBhcmFtcyAodXJsLCBwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaGFzUGFyYW0gPSB1cmwuaW5kZXhPZignPycpID4gLTE7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSAnJztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWhhc1BhcmFtKSB7XG4gICAgICAgIGhhc1BhcmFtID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJyYnO1xuICAgICAgfVxuXG4gICAgICBzZWFyY2hRdWVyeSArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKiBUaGUgY3VycmVudCBsaWIgdmVyc2lvbiwgcmVwb3J0ZWQgd2l0aCBlcnJvcnMgYW5kIGFuYWx5dGljcyAqL1xuZXhwb3J0IGNvbnN0IExJQl9WRVJTSU9OID0gJ3YwLjkuMyc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhcGkgYmFja2VuZCAqL1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4vKiogVGhlIGRlZmF1bHQgdXJsIGZvciBjb21waWxlZCBjb21wb25lbnQgdGVtcGxhdGVzICovXG5leHBvcnQgY29uc3QgQ09NUElMRURfVEVNUExBVEVTX1VSTCA9IGBodHRwczovL2Fzc2V0cy5zaXRlc2Nkbi5uZXQvYW5zd2Vycy8ke0xJQl9WRVJTSU9OfS9hbnN3ZXJzdGVtcGxhdGVzLmNvbXBpbGVkLm1pbi5qc2A7XG5cbi8qKiBUaGUgYmFzZSB1cmxzIGZvciB0aGUgYW5hbHl0aWNzIGJhY2tlbmQgICovXG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMID0gJ2h0dHBzOi8vcmVhbHRpbWVhbmFseXRpY3MueWV4dC5jb20nO1xuZXhwb3J0IGNvbnN0IEFOQUxZVElDU19CQVNFX1VSTF9OT19DT09LSUUgPSAnaHR0cHM6Ly9hbnN3ZXJzLnlleHQtcGl4ZWwuY29tJztcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFBhcmFtcyAqL1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG5cbi8qKlxuICogU2VhcmNoUGFyYW1zIGlzIGEgY2xhc3MgdG8gZ2V0IHRoZSBzZWFyY2ggcGFyYW1zIGluIGEgVVJMLlxuICogSXQgaXMgYSByZXBsYWNlbWVudCBmb3IgVVJMLnNlYXJjaFBhcmFtcyBhbmQgVVJMU2VhcmNoUGFyYW1zIGZvciBicm93c2VycyBsaWtlIElFMTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUGFyYW1zIHtcbiAgY29uc3RydWN0b3IgKHVybCkge1xuICAgIC8qKlxuICAgICAqIE1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHVybCwgcXVlcnkgcGFyYW0gLT4gdmFsdWVcbiAgICAgKiBPbmx5IHVzZWQgaWYgVVJMU2VhcmNoUGFyYW1zIGRvZXMgbm90IGV4aXN0IGluIHRoZSB3aW5kb3dcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0ge307XG5cbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5VUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IHRoaXMucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgY3JlYXRlcyBhIG1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtcyBpbiBhIGdpdmVuIHVybFxuICAgKiBUaGUgcXVlcnkgcGFyYW0gdmFsdWVzIGFyZSBkZWNvZGVkIGJlZm9yZSBiZWluZyBwdXQgaW4gdGhlIG1hcFxuICAgKiBUaHJlZSB0eXBlcyBvZiBpbnB1dCBhcmUgc3VwcG9ydGVkXG4gICAqICAgKDEpIGZ1bGwgVVJMIGUuZy4gaHR0cDovL3d3dy55ZXh0LmNvbS8/cT1oZWxsb1xuICAgKiAgICgyKSBwYXJhbXMgd2l0aCA/IGUuZy4gP3E9aGVsbG9cbiAgICogICAoMSkgcGFyYW1zIHdpdGhvdXQgPyBlLmcuIHE9aGVsbG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IG1hcHBpbmcgZnJvbSBxdWVyeSBwYXJhbSAtPiB2YWx1ZSB3aGVyZSB2YWx1ZSBpcyAnJyBpZiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKi9cbiAgcGFyc2UgKHVybCkge1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgc2VhcmNoID0gdXJsO1xuXG4gICAgaWYgKHNlYXJjaCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIGFsbCB1cmwgaW5wdXRzIHRvIHN0cmluZyBvZiBxdWVyeSBwYXJhbXMgc2VwYXJhdGVkIGJ5ICZcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICBzZWFyY2ggPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoJz8nKSArIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRQYXJhbXMgPSBzZWFyY2guc3BsaXQoJyYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleVZhbCA9IGVuY29kZWRQYXJhbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGlmIChrZXlWYWwubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9IFNlYXJjaFBhcmFtcy5kZWNvZGUoa2V5VmFsWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0ga2V5IHRvIGdldCB0aGUgdmFsdWUgb2ZcbiAgICogQHJldHVybiB7c3RyaW5nfSBwYXJhbSB2YWx1ZSwgbnVsbCBvdGhlcndpc2VcbiAgICovXG4gIGdldCAocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3BhcmFtc1tTdHJpbmcocXVlcnkpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgY2hhbmdlcyB0aGUgdmFsdWUgb2YgYSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgcXVlcnkgcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIHF1ZXJ5IHBhcmFtIHVwZGF0ZSB3aXRoXG4gICAqL1xuICBzZXQgKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5fcGFyYW1zW1N0cmluZyhuYW1lKV0gPSBTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhcyBjaGVja3MgdG8gc2VlIGlmIHRoZSBnaXZlbiBxdWVyeSBwYXJhbSBrZXkgZXhpc3RzIGluIHRoZSBwYXJhbXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0gdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgcGFyYW0gaXMgaW4gdGhlIHBhcmFtcyBvYmplY3QsIGZhbHNlIG8vd1xuICAgKi9cbiAgaGFzIChxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSBpbiB0aGlzLl9wYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogdG9TdHJpbmcgcmV0dXJucyBhIHVybCB3aXRoIGFsbCB0aGUgcXVlcnkgcGFyYW1zIGluIHRoZSBwYXJhbXMgb2JqZWN0ICh3aXRob3V0IGEgPylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBzdHJpbmcucHVzaChgJHtrZXl9PSR7U2VhcmNoUGFyYW1zLmVuY29kZSh0aGlzLl9wYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmcuam9pbignJicpO1xuICB9XG5cbiAgZW50cmllcyAoKSB7XG4gICAgbGV0IGVudHJpZXMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBlbnRyaWVzLnB1c2goW2tleSwgdGhpcy5fcGFyYW1zW2tleV1dKTtcbiAgICB9XG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGRlY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZGVjb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBkZWNvZGUgKHN0cmluZykge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyaW5nLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nIChlLmcuICsgLT4gJTJCKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZW5jb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBlbmNvZGUgKHN0cmluZykge1xuICAgIGxldCByZXBsYWNlID0ge1xuICAgICAgJyEnOiAnJTIxJyxcbiAgICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAgICcoJzogJyUyOCcsXG4gICAgICAnKSc6ICclMjknLFxuICAgICAgJyUyMCc6ICcrJ1xuICAgIH07XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpLnJlcGxhY2UoL1shJygpXXwlMjAvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFwaVJlcXVlc3QgKi9cblxuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi9odHRwcmVxdWVzdGVyJztcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCwgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi91aS9kb20vc2VhcmNocGFyYW1zJzsgLy8gVE9ETyBpZGVhbGx5IHRoaXMgd291bGQgYmUgcGFzc2VkIGluIGFzIGEgcGFyYW1cblxuLyoqXG4gKiBBcGlSZXF1ZXN0IGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgQVBJIHJlcXVlc3RzLlxuICogSXQgZGVmaW5lcyBhbGwgb2YgdGhlIGNvcmUgcHJvcGVydGllcyByZXF1aXJlZCB0byBtYWtlIGEgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIHVzZWQgZm9yIG1ha2luZyBuZXR3b3JrIHJlcXVlc3QgYW5kIGhhbmRsaW5nIGVycm9yc1xuICAgICAqIEB0eXBlIHtIdHRwUmVxdWVzdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gb3B0cy5iYXNlVXJsIHx8IEFQSV9CQVNFX1VSTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbmRwb2ludCB0byB1c2UgaW4gdGhlIHVybCAoYXBwZW5kZWQgdG8gdGhlIHtiYXNlVXJsfSlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZW5kcG9pbnQgPSBvcHRzLmVuZHBvaW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDE7XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIGRhdGEgcGFyYW1zIHRoYXQgYXJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBvcHRzLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgY3JlYXRlcyBhIG5ldyBgR0VUYCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHJlcXVlc3QgY2xhc3NcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldChcbiAgICAgIHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYmFzZVBhcmFtcygpLCB0aGlzLnNhbml0aXplUGFyYW1zKHRoaXMuX3BhcmFtcykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBwb3N0IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5wb3N0KFxuICAgICAgdGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LFxuICAgICAgdGhpcy5iYXNlUGFyYW1zKCkgLyogdXJsUGFyYW1zICovLFxuICAgICAgdGhpcy5zYW5pdGl6ZVBhcmFtcyh0aGlzLl9wYXJhbXMpIC8qIGpzb25Cb2R5ICovLFxuICAgICAgb3B0cyAvKiByZXF1ZXN0Q29uZmlnICovKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYmFzZVBhcmFtcyAoKSB7XG4gICAgbGV0IGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleSxcbiAgICAgICdqc0xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTlxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICBpZiAodXJsUGFyYW1zLmhhcygnYmV0YScpKSB7XG4gICAgICBiYXNlUGFyYW1zWydiZXRhJ10gPSB1cmxQYXJhbXMuZ2V0KCdiZXRhJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VQYXJhbXM7XG4gIH1cblxuICBzYW5pdGl6ZVBhcmFtcyAocGFyYW1zID0ge30pIHtcbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hBcGkgKi9cblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vc2VhcmNoc2VydmljZScpLmRlZmF1bHR9IFNlYXJjaFNlcnZpY2UgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzQ29yZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU2VhcmNoQXBpIGlzIHRoZSBBUEkgZm9yIGRvaW5nIHZhcmlvdXMgdHlwZXMgb2Ygc2VhcmNoXG4gKiBvdmVyIHRoZSBuZXR3b3JrIChlLmcuIHZlcnRpY2FsIG9yIHVuaXZlcnNhbClcbiAqXG4gKiBAaW1wbGVtZW50cyB7U2VhcmNoU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbnN3ZXJzIGNvbmZpZyB2ZXJzaW9uIHRvIHVzZSBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uID0gY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gY29uZmlnLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHsgaW5wdXQsIGZpbHRlciwgZmFjZXRGaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGlkLCBnZW9sb2NhdGlvbiwgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsIHNraXBTcGVsbENoZWNrLCBxdWVyeVRyaWdnZXIgfSkge1xuICAgIGlmIChsaW1pdCA+IDUwKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvcmVFcnJvcignUHJvdmlkZWQgc2VhcmNoIGxpbWl0IHVuc3VwcG9ydGVkJywgJ1NlYXJjaEFwaScpO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2ZpbHRlcnMnOiBmaWx0ZXIsXG4gICAgICAgICdmYWNldEZpbHRlcnMnOiBmYWNldEZpbHRlcixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdsaW1pdCc6IGxpbWl0LFxuICAgICAgICAnb2Zmc2V0Jzogb2Zmc2V0LFxuICAgICAgICAnbG9jYXRpb24nOiBnZW9sb2NhdGlvbiA/IGAke2dlb2xvY2F0aW9uLmxhdH0sJHtnZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBnZW9sb2NhdGlvbiA/IGdlb2xvY2F0aW9uLnJhZGl1cyA6IG51bGwsXG4gICAgICAgICdxdWVyeUlkJzogaWQsXG4gICAgICAgICdyZXRyaWV2ZUZhY2V0cyc6IGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkLFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlLFxuICAgICAgICAnc2tpcFNwZWxsQ2hlY2snOiBza2lwU3BlbGxDaGVjayxcbiAgICAgICAgJ3F1ZXJ5VHJpZ2dlcic6IHF1ZXJ5VHJpZ2dlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgdW5pdmVyc2FsU2VhcmNoIChxdWVyeVN0cmluZywgcGFyYW1zKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAnbG9jYXRpb24nOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBgJHtwYXJhbXMuZ2VvbG9jYXRpb24ubGF0fSwke3BhcmFtcy5nZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBwYXJhbXMuZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NraXBTcGVsbENoZWNrJzogcGFyYW1zLnNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcGFyYW1zLnF1ZXJ5VHJpZ2dlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlcG9ydFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5ldmVudFR5cGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byBiZSBwcm92aWRlZCBmb3IgdGhlIGV2ZW50XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciB0aGUgZXZlbnRcbiAgICovXG4gIGFkZE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZXZlbnQgaW4gdGhlIGFwaSBmb3JtYXQsIHR5cGljYWxseSBmb3IgcmVwb3J0aW5nIHRvIHRoZSBhcGlcbiAgICovXG4gIHRvQXBpRXZlbnQgKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQW5hbHl0aWNzUmVwb3J0ZXIgKi9cblxuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgeyBBTkFMWVRJQ1NfQkFTRV9VUkwsIEFOQUxZVElDU19CQVNFX1VSTF9OT19DT09LSUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi4vaHR0cC9odHRwcmVxdWVzdGVyJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NlcnZpY2VzL2FuYWx5dGljc3JlcG9ydGVyc2VydmljZScpLmRlZmF1bHR9IEFuYWx5dGljc1JlcG9ydGVyU2VydmljZSAqL1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyIHZpYSBIVFRQXG4gKlxuICogQGltcGxlbWVudHMge0FuYWx5dGljc1JlcG9ydGVyU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5hbHl0aWNzUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29yZSwgZXhwZXJpZW5jZUtleSwgZXhwZXJpZW5jZVZlcnNpb24sIGJ1c2luZXNzSWQsIGdsb2JhbE9wdGlvbnMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlcm5hbCBidXNpbmVzcyBpZGVudGlmaWVyIHVzZWQgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fYnVzaW5lc3NJZCA9IGJ1c2luZXNzSWQ7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBldmVyeSBhbmFseXRpYyBldmVudCByZXBvcnRlZCB0byB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2dsb2JhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBnbG9iYWxPcHRpb25zLCB7IGV4cGVyaWVuY2VLZXkgfSk7XG5cbiAgICAvKipcbiAgICAgKiBCYXNlIFVSTCBmb3IgdGhlIGFuYWx5dGljcyBBUElcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IEFOQUxZVElDU19CQVNFX1VSTF9OT19DT09LSUU7XG5cbiAgICBpZiAoZXhwZXJpZW5jZVZlcnNpb24pIHtcbiAgICAgIHRoaXMuX2dsb2JhbE9wdGlvbnMuZXhwZXJpZW5jZVZlcnNpb24gPSBleHBlcmllbmNlVmVyc2lvbjtcbiAgICB9XG5cbiAgICAvLyBsaXN0ZW4gdG8gcXVlcnkgaWQgdXBkYXRlc1xuICAgIGNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuUVVFUllfSUQsIGlkID0+IHRoaXMuc2V0UXVlcnlJZChpZCkpO1xuICB9XG5cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuX2dsb2JhbE9wdGlvbnMucXVlcnlJZCA9IHF1ZXJ5SWQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fZ2xvYmFsT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IEh0dHBSZXF1ZXN0ZXIoKS5iZWFjb24oXG4gICAgICBgJHt0aGlzLl9iYXNlVXJsfS9yZWFsdGltZWFuYWx5dGljcy9kYXRhL2Fuc3dlcnMvJHt0aGlzLl9idXNpbmVzc0lkfWAsXG4gICAgICB7XG4gICAgICAgICdkYXRhJzogZXZlbnQudG9BcGlFdmVudCgpXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzZXRDb252ZXJzaW9uVHJhY2tpbmdFbmFibGVkIChpc0VuYWJsZWQpIHtcbiAgICB0aGlzLl9iYXNlVXJsID0gaXNFbmFibGVkID8gQU5BTFlUSUNTX0JBU0VfVVJMIDogQU5BTFlUSUNTX0JBU0VfVVJMX05PX0NPT0tJRTtcbiAgfVxufVxuIiwiLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NlcnZpY2VzL2FuYWx5dGljc3JlcG9ydGVyc2VydmljZScpLmRlZmF1bHR9IEFuYWx5dGljc1JlcG9ydGVyU2VydmljZSAqL1xuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHtBbmFseXRpY3NSZXBvcnRlclNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vb3BBbmFseXRpY3NSZXBvcnRlciB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICByZXBvcnQgKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc2V0Q29udmVyc2lvblRyYWNraW5nRW5hYmxlZCAoaXNFbmFibGVkKSB7fVxufVxuIiwiLyoqIEBtb2R1bGUgTW9kdWxlRGF0YSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIE1vZHVsZURhdGEgaXMgdXNlZCBhcyBhIGdlbmVyaWMgbW9kZWwgZm9yIFN0b3JhZ2UuXG4gKiBUeXBpY2FsbHkgYW4gaW5zdGFuY2Ugb2YgTW9kdWxlRGF0YSBwb3dlcnMgYSBzaW5nbGUgY29tcG9uZW50LlxuXG4gKiBBIGRhdGEgbW9kZWwgdGhhdCBleHBvc2VzIGFuIGV2ZW50IGVtaXR0ZXIgaW50ZXJmYWNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZURhdGEgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaWQsIGRhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIHRoaXMuY2FwdHVyZVByZXZpb3VzKCk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3Igc2hhbGxvdyBlcXVhbGl0eVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YVtrZXldICE9PSBkYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeS5sZW5ndGggKyAxID4gNSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIElmIGRhdGEgaXMgZXZlciB1bmRlZmluZWQsIHdlIGRlZmF1bHQgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEgfHwge30pKTtcbiAgfVxuXG4gIHVuZG8gKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmV2aW91cyA9IEpTT04ucGFyc2UodGhpcy5fcHJldmlvdXMucG9wKCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEuc2V0KHByZXZpb3VzKTtcbiAgfVxuXG4gIHJhdyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdsb2JhbFN0b3JhZ2UgKi9cblxuaW1wb3J0IE1vZHVsZURhdGEgZnJvbSAnLi9tb2R1bGVkYXRhJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBTdG9yYWdlIGlzIGEgY29udGFpbmVyIGFyb3VuZCBhcHBsaWNhdGlvbiBzdGF0ZS5cbiAqIEl0IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBDUlVEIG9wZXJhdGlvbnMgYXMgd2VsbCBhcyBsaXN0ZW5pbmdcbiAqIGZvciBzdGF0ZWZ1bCBjaGFuZ2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXIgPSB7fTtcbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgaW4gc3RvcmFnZSB3aXRoIHRoZSBnaXZlbiBrZXkgdG8gdGhlIHByb3ZpZGVkIGRhdGEsXG4gICAqIGNvbXBsZXRlbHkgb3ZlcndyaXRpbmcgYW55IGV4aXN0aW5nIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIHN0b3JhZ2Uga2V5IHRvIHNldFxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gc2V0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIHRoaXMuX2luaXREYXRhQ29udGFpbmVyKGtleSwgZGF0YSk7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIGtleS92YWx1ZSBwYWlycyBpbiB0aGUgcHJvdmlkZWQgbWFwIHRvIHRoZSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUga2V5L3ZhbHVlIHBhaXJzIHRvIHNldCBpbiB0aGUgc3RvcmFnZVxuICAgKi9cbiAgc2V0QWxsIChkYXRhKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICBpZiAoa2V5ID09PSBTdG9yYWdlS2V5cy5RVUVSWSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0KGtleSwgdmFsKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgcXVlcnkgbGFzdCBzaW5jZSBpdCB0cmlnZ2VycyBhIHNlYXJjaFxuICAgIC8vIFRPRE86IG1vdmUgbGlzdGVuZXJzIHVwIHNvIGFsbCBvZiBzdG9yYWdlIGNhbiBiZSB1cGRhdGVkIGF0IHRoZSBzYW1lIHRpbWVcbiAgICBpZiAoZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV0pIHtcbiAgICAgIHRoaXMuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZXSk7XG4gICAgfVxuICB9XG5cbiAgX2luaXREYXRhQ29udGFpbmVyIChrZXksIGRhdGEpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignSW52YWxpZCBzdG9yYWdlIGtleSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ05vIGRhdGEgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID0gbmV3IE1vZHVsZURhdGEoa2V5KTtcbiAgICAgIHRoaXMuX2FwcGx5RnV0dXJlTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgKG1vZHVsZUlkKSB7XG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ucmF3KCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsIChrZXkpIHtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChjb25zdCBkYXRhS2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX21vZHVsZURhdGFDb250YWluZXIpKSB7XG4gICAgICBpZiAoZGF0YUtleS5zdGFydHNXaXRoKGtleSkgJiYgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIC8vIE5vdGU6IERvIHdlIG5lZWQgdG8gY2xlYW4gdXAgbGlzdGVuZXJzIGhlcmU/XG4gICAgZGVsZXRlIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTm9vcEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi9hbmFseXRpY3Mvbm9vcGFuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGlzIGFuIGFic3RyYWN0aW9uIHRoYXQgZW5jYXBzdWxhdGVzIHN0YXRlLCBiZWhhdmlvcixcbiAqIGFuZCB2aWV3IGZvciBhIHBhcnRpY3VsYXIgY2h1bmsgb2YgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgQVBJIGV4cG9zZXMgZXZlbnQgbGlmZSBjeWNsZSBob29rcyBmb3Igd2hlbiB0aGluZ3MgYXJlIHJlbmRlcmVkLFxuICogbW91bnRlZCwgY3JlYXRlZCwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5tb2R1bGVJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVbmlxdWUgbmFtZSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAqIFVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBvdGhlciBjb21wb25lbnRzIG9mIHRoZSBzYW1lIHR5cGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IudHlwZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpZGVudGlmaWVyIHVzZWQgdG8gY2xhc3NpZnkgdGhlIHR5cGUgb2YgY29tcG9uZW50LlxuICAgICAqIFRoZSBjb21wb25lbnQgbWFuYWdlciB1c2VzIHRoaXMgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG8gcGVyc2lzdCBhbmQgb3JnYW5pemUgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8Q29tcG9uZW50VHlwZX1cbiAgICAgKi9cbiAgICB0aGlzLl90eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb21wb25lbnQsIGlmIGV4aXN0c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnR9XG4gICAgICovXG4gICAgdGhpcy5fcGFyZW50Q29udGFpbmVyID0gY29uZmlnLnBhcmVudENvbnRhaW5lciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShjb25maWcuc3RhdGUpO1xuXG4gICAgLyoqXG4gICAgICogVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgJ3NlcnZpY2VzJ1xuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IHN5c3RlbUNvbmZpZy5jb3JlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgY29tcG9uZW50IGNsYXNzZXNcbiAgICAgKiBlbGlnaWJsZSB0byBiZSBjcmVhdGVkXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyID0gc3lzdGVtQ29uZmlnLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IHN5c3RlbUNvbmZpZy5hbmFseXRpY3NSZXBvcnRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggYWxsIGFuYWx5dGljIGV2ZW50cyBzZW50IGJ5IHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc09wdGlvbnMgPSBjb25maWcuYW5hbHl0aWNzT3B0aW9ucyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnRDb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRhaW5lciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGBjb250YWluZXJgIG9wdGlvbiBmb3IgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24uIE11c3QgYmUgb2YgdHlwZSBgc3RyaW5nYC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeShjb25maWcuY29udGFpbmVyKSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCBjb25maWcuY29udGFpbmVyKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBhcmVudCwgYW5kIHRoZSBjb250YWluZXIgaXMgbWlzc2luZyBmcm9tIHRoZSBET00sXG4gICAgICAvLyB3ZSBjb25zdHJ1Y3QgdGhlIGNvbnRhaW5lciBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwYXJlbnRcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGNvbmZpZy5jb250YWluZXIuc3Vic3RyaW5nKDEsIGNvbmZpZy5jb250YWluZXIubGVuZ3RoKVxuICAgICAgICB9KTtcbiAgICAgICAgRE9NLmFwcGVuZCh0aGlzLl9wYXJlbnRDb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IHN5c3RlbUNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0VGVtcGxhdGVOYW1lKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gY29uZmlnLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBjb25maWcub25DcmVhdGVPdmVycmlkZSB8fCB0aGlzLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMub25DcmVhdGUgPSB0aGlzLm9uQ3JlYXRlLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gY29uZmlnLm9uTW91bnRPdmVycmlkZSB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5vbk1vdW50ID0gdGhpcy5vbk1vdW50LmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBjb25maWcub25VcGRhdGVPdmVycmlkZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgICB0aGlzLm9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uQ3JlYXRlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudXNlck9uQ3JlYXRlID0gY29uZmlnLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uTW91bnQgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25Nb3VudCA9IGNvbmZpZy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uVXBkYXRlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudXNlck9uVXBkYXRlID0gY29uZmlnLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdkZWZhdWx0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldFN0YXRlKG9wdHMuZGF0YSB8fCBvcHRzLnN0YXRlIHx8IHt9KTtcbiAgICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICAgIHRoaXMudXNlck9uQ3JlYXRlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0Vycm9yIGluaXRpYWxpemluZyBjb21wb25lbnQnLFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnR5cGUsXG4gICAgICAgIGUpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudXNlck9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudW5Nb3VudCgpO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICAgJ0Vycm9yIHVwZGF0aW5nIGNvbXBvbmVudCcsXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50eXBlLFxuICAgICAgICAgIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9jb25maWdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbm1vdW50IGFuZCByZW1vdmUgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0XG4gICAqIG9mIGFjdGl2ZSBjb21wb25lbnRzXG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQudW5Nb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5vblVuTW91bnQoKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBjb25zdCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWNvbXBvbmVudF06bm90KFtkYXRhLWlzLWNvbXBvbmVudC1tb3VudGVkXSknKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdGUuZ2V0KCkpKSk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQubW91bnQoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIHRoaXMudXNlck9uTW91bnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICAvLyBUZW1wb3JhcnkgZml4IGZvciBwYXNzaW5nIGltbXV0YWJsZSBkYXRhIHRvIHRyYW5zZm9ybURhdGEoKS5cbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQ29tcG9uZW50TW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBjb25zdCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXSB8fCB7fTtcblxuICAgIG9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgICB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hpbGREYXRhLnJldmVyc2UoKTtcbiAgICBjaGlsZERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBkZWJvdW5jZSBkdXJhdGlvbiBmb3IgcmVzaXplIGV2ZW50c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMTAwO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IGNvbmZpZy5kcm9wZG93bkxhYmVsIHx8ICdNb3JlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpY29uIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9IGNvbmZpZy5kcm9wZG93bkljb24gfHwgJ2thYm9iJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlbmRlciBhIHN0YXRpYyBuYXZpZ2F0aW9uIHdpdGggbm8gXCJtb3JlXCIgbWVudVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljID0gY29uZmlnLnN0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogQnJlYWtwb2ludHMgYXQgd2hpY2ggbmF2aWdhdGlvbiBpdGVtcyBtb3ZlIHRvIHRoZSBcIm1vcmVcIiBkcm9wZG93blxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2RlYm91bmNlVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJlZml0TmF2LmJpbmQodGhpcyksIFJFU0laRV9ERUJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIERPTS5vbih3aW5kb3csICdjbGljaycsIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgICAgRE9NLm9uKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyksICdjbGljaycsIHRoaXMudG9nZ2xlTW9yZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZml0TmF2ICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgY29uc3QgbWFpbkxpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY29sbGFwc2VkTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcblxuICAgIGNvbnN0IG5hdldpZHRoID0gbW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpXG4gICAgICA/IGNvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgOiBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtb3JlQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgIGxldCBudW1CcmVha3BvaW50cyA9IHRoaXMuX25hdkJyZWFrcG9pbnRzLmxlbmd0aDtcblxuICAgIC8vIHN1bSBjaGlsZCB3aWR0aHMgaW5zdGVhZCBvZiB1c2luZyBwYXJlbnQncyB3aWR0aCB0byBhdm9pZFxuICAgIC8vIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gICAgbGV0IG1haW5MaW5rc1dpZHRoID0gMDtcbiAgICBmb3IgKGxldCBlbCBvZiBtYWluTGlua3MuY2hpbGRyZW4pIHtcbiAgICAgIG1haW5MaW5rc1dpZHRoICs9IGVsLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoKSB7XG4gICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wdXNoKG1haW5MaW5rc1dpZHRoKTtcbiAgICAgIGNvbnN0IGxhc3RMaW5rID0gbWFpbkxpbmtzLmNoaWxkcmVuLml0ZW0obWFpbkxpbmtzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGxhc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZExpbmtzLnByZXBlbmQobGFzdExpbmspO1xuXG4gICAgICBpZiAobW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChudW1CcmVha3BvaW50cyAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rID0gY29sbGFwc2VkTGlua3MuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgICAgaWYgKGZpcnN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYWluTGlua3MuYXBwZW5kKGZpcnN0TGluayk7XG4gICAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICBudW1CcmVha3BvaW50cy0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGFwc2VkTGlua3MuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoIHx8XG4gICAgICAobnVtQnJlYWtwb2ludHMgPiAwICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgb3Blbk1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGNvbGxhcHNlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKTtcbiAgfVxuXG4gIGNoZWNrT3V0c2lkZUNsaWNrIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy55eHQtTmF2LWNvbnRhaW5lcicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsXG4gICAgICBkcm9wZG93bkljb246IHRoaXMuZHJvcGRvd25JY29uLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpY1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogU2VhcmNoQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGluIG9yZGVyIHRvIGNyZWF0ZVxuICogYSBVSSBTZWFyY2ggZXhwZXJpZW5jZSBmb3IgdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2guXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gY29uZmlnLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBjb25maWcuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZSB8fCAnQW5zd2VycyBVbml2ZXJzYWwgU2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbFRleHQgPSBjb25maWcubGFiZWxUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBzdWJtaXQgYnV0dG9uLCBhbHNvIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0VGV4dCA9IGNvbmZpZy5zdWJtaXRUZXh0IHx8ICdTdWJtaXQnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCBpY29uIGlzIGFuIGljb24gZm9yIHRoZSBzdWJtaXQgYnV0dG9uLCBpZiBwcm92aWRlZCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlXG4gICAgICogc3VibWl0IHRleHQgd2lsbCBiZSB1c2VkIGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRJY29uID0gY29uZmlnLnN1Ym1pdEljb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzaG93IGFuIFwieFwiIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGNsZWFyIHRoZSBjdXJyZW50XG4gICAgICogcXVlcnlcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNsZWFyQnV0dG9uID0gY29uZmlnLmNsZWFyQnV0dG9uID09PSB1bmRlZmluZWRcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBjb25maWcuY2xlYXJCdXR0b247XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGF1dG9mb2N1c2luZyBvbiBsb2FkLCBvcHRpb25hbGx5IG9wZW4gdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqIChwcmVzZXQgcHJvbXB0cylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCA9IGNvbmZpZy5hdXRvY29tcGxldGVPbkxvYWQgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiB0cnVlIGlmIHRoZXJlIGlzIGFub3RoZXIgc2VhcmNoIGJhciBwcmVzZW50IG9uIHRoZSBwYWdlLlxuICAgICAqIFR3aW5zIG9ubHkgdXBkYXRlIHRoZSBxdWVyeSwgYW5kIGRvIG5vdCBzZWFyY2hcbiAgICAgKi9cbiAgICB0aGlzLl9pc1R3aW4gPSBjb25maWcuaXNUd2luO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuUVVFUlksIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgICB0aGlzLnNlYXJjaChxKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRpbWUgYWxsb3dlZCBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBzZWFyY2hlcyB0byBwcmV2ZW50XG4gICAgICogbWFueSBkdXBsaWNhdGUgc2VhcmNoZXMgYmFjay10by1iYWNrXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaENvb2xkb3duID0gY29uZmlnLnNlYXJjaENvb2xkb3duIHx8IDMwMDtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSBhbmQgXCJuZWFyIG1lXCIgaW50ZW50IGlzIGV4cHJlc3NlZCwgcHJvbXB0IHRoZSB1c2VyIGZvciB0aGVpciBnZW9sb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJvbXB0Rm9yTG9jYXRpb24gPSBjb25maWcucHJvbXB0Rm9yTG9jYXRpb24gPT09IHVuZGVmaW5lZFxuICAgICAgPyB0cnVlXG4gICAgICA6IEJvb2xlYW4oY29uZmlnLnByb21wdEZvckxvY2F0aW9uKTtcblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgc2VhcmNoIGNsZWFyIGJ1dHRvblxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IHRoaXMuY2xlYXJCdXR0b24gJiYgdGhpcy5xdWVyeTtcblxuICAgIC8qKlxuICAgICAqIEZvciB2ZXJ0aWNhbCBzZWFyY2ggYmFycywgd2hldGhlciBvciBub3QgdG8gYWxsb3cgZW1wdHkgc2VhcmNoZXMuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbGxvd0VtcHR5U2VhcmNoID0gISFjb25maWcuYWxsb3dFbXB0eVNlYXJjaDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdTZWFyY2hCYXInO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAhPSBudWxsICYmICF0aGlzLnJlZGlyZWN0VXJsKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbikge1xuICAgICAgdGhpcy5pbml0TG9jYXRpb25Qcm9tcHQoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBOT1RFKGFtdWxsaW5ncyk6IElmIGF1dG9jb21wbGV0ZU9uTG9hZCBpcyBmYWxzZSwgd2UgZm9jdXMgdGhlIGlucHV0XG4gICAgLy8gZWxlbWVudCBiZWZvcmUgbG9hZGluZyB0aGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudCBzbyB0aGF0IGl0cyBmb2N1c1xuICAgIC8vIGhhbmRsZXIgd29uJ3QgYmUgdHJpZ2dlcmVkXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmICF0aGlzLnF1ZXJ5ICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRTZWFyY2godGhpcy5fZm9ybUVsKTtcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5jbGVhckJ1dHRvbikge1xuICAgICAgdGhpcy5pbml0Q2xlYXJCdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgIXRoaXMucXVlcnkgJiYgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQpIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICBpbml0Q2xlYXJCdXR0b24gKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LVNlYXJjaEJhci1jbGVhcicpO1xuICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IHRoaXMuX3Nob3dDbGVhckJ1dHRvbiB8fCB0aGlzLnF1ZXJ5O1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCd5eHQtU2VhcmNoQmFyLS1oaWRkZW4nLCAhdGhpcy5fc2hvd0NsZWFyQnV0dG9uKTtcblxuICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCB0aGlzLnF1ZXJ5KTtcbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfSk7XG5cbiAgICBET00ub24odGhpcy5faW5wdXRFbCwgJ2lucHV0JywgZSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKCF0aGlzLl9zaG93Q2xlYXJCdXR0b24gJiYgaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24gPSB0cnVlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3Nob3dDbGVhckJ1dHRvbiAmJiBpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRMb2NhdGlvblByb21wdCAoKSB7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLklOVEVOVFMsIGludGVudCA9PiB7XG4gICAgICBpZiAoIWludGVudC5uZWFyTWUgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04pICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiwge1xuICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICByYWRpdXM6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSB8fCAnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLXdyYXBwZXInKTtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBpbnB1dEVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgICBsZXQgcXVlcnkgPSBpbnB1dEVsLnZhbHVlO1xuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dEVsLmJsdXIoKTtcblxuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueXh0LVNlYXJjaEJhci1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBhdXRvRm9jdXM6IHRoaXMuYXV0b0ZvY3VzICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCksICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcbiAgICovXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICAvLyBEb24ndCBzZWFyY2ggaWYgd2UgcmVjZW50bHkgc2VhcmNoZWQsXG4gICAgLy8gaWYgdGhlcmUncyBubyBxdWVyeSBmb3IgdW5pdmVyc2FsIHNlYXJjaCxcbiAgICAvLyBvciBpZiB0aGlzIGlzIGEgdHdpbiBzZWFyY2hiYXJcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkIHx8XG4gICAgICAoIXF1ZXJ5ICYmICF0aGlzLl92ZXJ0aWNhbEtleSkgfHxcbiAgICAgICghcXVlcnkgJiYgdGhpcy5fdmVydGljYWxLZXkgJiYgIXRoaXMuX2FsbG93RW1wdHlTZWFyY2gpIHx8XG4gICAgICB0aGlzLl9pc1R3aW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgb2Zmc2V0OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKSB8fCAwLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URShiaWxseSkgVGVtcG9yYXJ5IGhhY2sgZm9yIERFTU9cbiAgICAgIC8vIFJlbW92ZSBtZSBhZnRlciB0aGUgZGVtb1xuICAgICAgbGV0IG5hdiA9IHRoaXMuY29tcG9uZW50TWFuYWdlclxuICAgICAgICAuZ2V0QWN0aXZlQ29tcG9uZW50KCdOYXZpZ2F0aW9uJyk7XG5cbiAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBuYXYuZ2V0U3RhdGUoJ3RhYnMnKTtcbiAgICAgICAgbGV0IHVybHMgPSB7fTtcblxuICAgICAgICBpZiAodGFicyAmJiBBcnJheS5pc0FycmF5KHRhYnMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBzdWJtaXRJY29uOiB0aGlzLnN1Ym1pdEljb24sXG4gICAgICBzdWJtaXRUZXh0OiB0aGlzLnN1Ym1pdFRleHQsXG4gICAgICBzaG93Q2xlYXJCdXR0b246IHRoaXMuX3Nob3dDbGVhckJ1dHRvbixcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5IHx8ICcnXG4gICAgfSwgZGF0YSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBGaWx0ZXJTZWFyY2hDb21wb25lbnQgaXMgdXNlZCBmb3IgYXV0b2NvbXBsZXRlIHVzaW5nIHRoZSBGaWx0ZXJTZWFyY2ggYmFja2VuZC5cbiAqIEl0J2xsIGFsbG93IHlvdSB0byBwaWNrIHByZS1zZXQgZmlsdGVycyB0aGF0IGFyZSBzZXR1cCBvbiB0aGUgYmFja2VuZCB3aXRoaW5cbiAqIGEgdmVydGljYWwgc2VhcmNoIGNvbnRleHQuXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgY29uZmlnLmlucHV0S2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlIHRoZSBmaWx0ZXIgdmFsdWUgYnV0IGRvIG5vdCBzZWFyY2ggb24gY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIHRleHQgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFRleHQgPSBjb25maWcuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgcHJvdmlkZWQgcXVlcnlcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IGNvbmZpZy5maWx0ZXIgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBKU09OLnBhcnNlKHRoaXMuZmlsdGVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2hQYXJhbWV0ZXJzID0gdGhpcy5fYnVpbGRTZWFyY2hQYXJhbWV0ZXJzKGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzKTtcblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlclNlYXJjaCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9maWx0ZXJzZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLnl4dC1TZWFyY2hCYXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgc2VhcmNoUGFyYW1ldGVyczogdGhpcy5zZWFyY2hQYXJhbWV0ZXJzLFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0ucXVlcnlgLCBxdWVyeSk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgcGFyYW1zIHRvIGJlXG4gICAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIGZpbHRlciB0byBzdG9yYWdlIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmZpbHRlciA9IEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgdGhpcy5xdWVyeSk7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSB0aGUgdmVydGljYWwgc2VhcmNoIHdpdGggYWxsIHNhdmVkIGZpbHRlcnMgYW5kIHF1ZXJ5LFxuICAgKiBvcHRpb25hbGx5IHJlZGlyZWN0aW5nIGJhc2VkIG9uIGNvbmZpZ1xuICAgKi9cbiAgc2VhcmNoICgpIHtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpO1xuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXG4gICAgfSwgZGF0YSkpO1xuICB9XG5cbiAgX2J1aWxkU2VhcmNoUGFyYW1ldGVycyAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncykge1xuICAgIGxldCBzZWFyY2hQYXJhbWV0ZXJzID0ge1xuICAgICAgc2VjdGlvbmVkOiBmYWxzZSxcbiAgICAgIGZpZWxkczogW11cbiAgICB9O1xuICAgIGlmIChzZWFyY2hQYXJhbWV0ZXJDb25maWdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzZWFyY2hQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5zZWN0aW9uZWQpIHtcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnMuc2VjdGlvbmVkID0gc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5zZWN0aW9uZWQ7XG4gICAgfVxuICAgIHNlYXJjaFBhcmFtZXRlcnMuZmllbGRzID0gdGhpcy5fYnVpbGRGaWVsZHMoc2VhcmNoUGFyYW1ldGVyQ29uZmlncy5maWVsZHMpO1xuICAgIHJldHVybiBzZWFyY2hQYXJhbWV0ZXJzO1xuICB9XG5cbiAgX2J1aWxkRmllbGRzIChmaWVsZENvbmZpZ3MpIHtcbiAgICBpZiAoZmllbGRDb25maWdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRDb25maWdzLm1hcChmYyA9PiAoeyBmZXRjaEVudGl0aWVzOiBmYWxzZSwgLi4uZmMgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBLZXlzID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBTSElGVDogMTYsXG4gIENUUkw6IDE3LFxuICBBTFQ6IDE4LFxuICBFU0NBUEU6IDI3LFxuXG4gIExFRlQ6IDM3LFxuICBSSUdIVDogMzksXG4gIFVQOiAzOCxcblxuICBERUxFVEU6IDQ2LFxuICBET1dOOiA0MCxcbiAgTEVGVF9PU19LRVk6IDkxLFxuICBSSUdIVF9PU19LRVk6IDkyLFxuICBTRUxFQ1RfS0VZOiA5M1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGF1dG9jb21wbGV0ZSBpcyBzaW1wbGUgb3IgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpbHRlclNlYXJjaCA9IG9wdHMuaXNGaWx0ZXJTZWFyY2ggfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGJhcktleWAgaW4gdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHZlcnRpY2FsS2V5YCBvZiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBvcHRzLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgZWwgc2VsZWN0b3IgZm9yIGF1dG8gY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0b3IgZm9yIHRoZSBhdXRvY29tcGxldGUgZWxlbWVudGVzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvY29tcGxldGVFbHMgPSBvcHRzLmF1dG9Db21wbGV0ZUVscyB8fCAnLmpzLXlleHQtYXV0b2NvbWxldGUtb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEtc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke3RoaXMubmFtZX1gO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIHR5cGluZy5cbiAgICAgKiBXZSB1c2UgdGhpcyBmb3IgcmVzZXR0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUgd2hlbiBvdGhlciBpbnRlcmFjdGlvbnMgKGUuZy4gcmVzdWx0IG5hdmlnYXRpb24pXG4gICAgICogY2hhbmdlIGJhc2VkIG9uIGludGVyYWN0aW9ucy4gRm9yIGluc3RhbmNlLCBoaXR0aW5nIGVzY2FwZSBzaG91bGQgcmVzZXQgdGhlIHZhbHVlIHRvIHRoZSBvcmlnaW5hbCB0eXBlZCBxdWVyeS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSBvcHRzLm9yaWdpbmFsUXVlcnkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VjdGlvbiB3ZSdyZSBuYXZpZ2F0aW5nIGluLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCByZXN1bHQgaW5kZXggd2UncmUgbmF2aWdhdGluZyBvbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gb3B0cy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGF1dG9jb21hdGljYWxseSBmb2N1c2VkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkIG9uIGF1dG8gY29tcGxldGUuXG4gICAgICovXG4gICAgdGhpcy5fb25TdWJtaXQgPSBvcHRzLm9uU3VibWl0IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgdGhpcy5fc2VhcmNoUGFyYW1ldGVycyA9IG9wdHMuc2VhcmNoUGFyYW1ldGVycyB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGhhc1Jlc3VsdHM6IHRoaXMuaGFzUmVzdWx0cyhkYXRhKSxcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG9jb21wbGV0ZSwgYXV0b2NvcnJlY3QgJiBzcGVsbGNoZWNrXG4gICAgRE9NLmF0dHJpYnV0ZXMocXVlcnlJbnB1dCwge1xuICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIGF1dG9jb3JyZWN0OiAnb2ZmJyxcbiAgICAgIHNwZWxsY2hlY2s6ICdmYWxzZSdcbiAgICB9KTtcblxuICAgIC8vIFRoZSB1c2VyIGV4aXRzIHRoZSBpbnB1dCwgc28gd2Ugd2FudCB0byByZXNldCB0aGUgc3RhdGUgYW5kIGNsb3NlXG4gICAgLy8gdGhlIGF1dG8gY29tcGxldGVcbiAgICAvLyBUT0RPKGpkZWxlcm1lKTogQ2xvc2UgbG9naWMgdG8gYmUgbW92ZWQgdG8gcGFyZW50XG4gICAgRE9NLm9uKGRvY3VtZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuanMteXh0LUF1dG9Db21wbGV0ZS13cmFwcGVyIConKSB8fCBlLnRhcmdldC5tYXRjaGVzKHRoaXMuX2lucHV0RWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fYXV0b0ZvY3VzKSB7XG4gICAgICBET00ub25jZShxdWVyeUlucHV0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnY2xpY2snLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuRU5URVIsXG4gICAgICBLZXlzLlRBQixcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB7XG4gICAgICAgIG5hbWVzcGFjZTogdGhpcy5uYW1lLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB0aGlzLl9zZWFyY2hQYXJhbWV0ZXJzXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgd2UgaGF2ZSByZXN1bHRzIGluIGFueSBzZWN0aW9uXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhc1Jlc3VsdHMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNlY3Rpb25zID0gZGF0YVsnc2VjdGlvbnMnXTtcbiAgICBpZiAoIXNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IHNlY3Rpb25zW2ldO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2ggJiYgdGhpcy5fcmVzdWx0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+PSAwICYmIHRoaXMuX3Jlc3VsdEluZGV4ID49IDApIHtcbiAgICAgICAgZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5maWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbHVlKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbHVlLCBmaWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3BlbGxDaGVja0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogU3BlbGxDaGVja0NvbXBvbmVudCB3aWxsIHN1cHBvcnQgZGlzcGxheWluZyBzdWdnZXN0aW9uLCBhdXRvY29ycmVjdCBhbmQgY29tYmluZWQobWF5YmUgaW4gdGhlIGZ1dHVyZSlcbiAqIHByb3ZpZGVkIGZyb20gc3BlbGxpbmcgY29ycmVjdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGxDaGVja0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0s7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU3BlbGxDaGVjayc7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc3BlbGxjaGVjayc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgc2hvdWxkU2hvdzogZGF0YS5jb3JyZWN0ZWRRdWVyeSAhPT0gdW5kZWZpbmVkLFxuICAgICAgY29ycmVjdGVkUXVlcnlVcmw6IHRoaXMuX2J1aWxkUmVkaXJlY3RRdWVyeVVybChkYXRhLmNvcnJlY3RlZFF1ZXJ5LCBkYXRhLnR5cGUpLFxuICAgICAgaGVscFRleHQ6IHRoaXMuX2dldEhlbHBUZXh0KGRhdGEudHlwZSlcbiAgICB9LCB2YWwpKTtcbiAgfVxuXG4gIF9idWlsZFJlZGlyZWN0UXVlcnlVcmwgKHF1ZXJ5LCB0eXBlKSB7XG4gICAgaWYgKHF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkudmFsdWUpO1xuICAgIHBhcmFtcy5zZXQoJ3NraXBTcGVsbENoZWNrJywgdHJ1ZSk7XG4gICAgcGFyYW1zLnNldCgncXVlcnlUcmlnZ2VyJywgdHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH1cblxuICBfZ2V0SGVscFRleHQgKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ1NVR0dFU1QnOlxuICAgICAgICByZXR1cm4gJ0RpZCB5b3UgbWVhbjonO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmFjZXQgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBmYWNldCBmaWx0ZXIgd2l0aCB0aGUgZm9ybWF0IG9mXG4gKiB7XG4gKiAgIFwiZmllbGRfbmFtZVwiOiBbIEZpbHRlcnMuLi4gXSxcbiAqICAgLi4uXG4gKiB9XG4gKlxuICogQHNlZSB7QGxpbmsgRmlsdGVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZmFjZXQgZmlsdGVyIGZyb20gYSBsaXN0IG9mIEZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIHVzZSBpbiB0aGlzIGZhY2V0XG4gICAqIEByZXR1cm5zIHtGYWNldH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRmlsdGVycyAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGNvbnN0IGZsYXRGaWx0ZXJzID0gZmlsdGVycy5mbGF0TWFwKGYgPT4gZi4kb3IgfHwgZik7XG4gICAgZmxhdEZpbHRlcnMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGYpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRmFjZXQoZ3JvdXBzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyQm94Q29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRmFjZXQgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmFjZXQnO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhpcyBmaWx0ZXJib3ggY29udGFpbnMgZHluYW1pYyBmaWx0ZXJzLiBUaGlzIGFmZmVjdHMgdGhlXG4gICAgICogdGhlIHdheSB0aGUgZmlsdGVycyBhcmUgdXNlZCBpbiB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0R5bmFtaWMgPSBjb25maWcuaXNEeW5hbWljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlckJveCc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZmlsdGVyQ29uZmlnczogdGhpcy5fZmlsdGVyQ29uZmlncyxcbiAgICAgIHNob3dBcHBseUJ1dHRvbjogIXRoaXMuX3NlYXJjaE9uQ2hhbmdlXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcbiAgICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGZpbHRlcnMgZnJvbSBjb25maWdzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9maWx0ZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9maWx0ZXJDb25maWdzW2ldO1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShjb25maWcudHlwZSwgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoaSwgZmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLl9maWx0ZXJzW2ldID0gY29tcG9uZW50LmdldEZpbHRlcigpO1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZXMgdG8gY2hpbGQgZmlsdGVyIGNvbXBvbmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhbmdlZCBmaWx0ZXJcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgbmV3IGZpbHRlclxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UgKGluZGV4LCBmaWx0ZXIpIHtcbiAgICB0aGlzLl9maWx0ZXJzW2luZGV4XSA9IGZpbHRlcjtcbiAgICBpZiAodGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBmaWx0ZXIgY29tcG9uZW50cyBhbG9uZyB3aXRoIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY3VycmVudCBmaWx0ZXJzIHRvIHN0b3JhZ2UgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRmlsdGVyc1RvU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdmFsaWRGaWx0ZXJzID0gdGhpcy5fZmlsdGVycy5maWx0ZXIoZiA9PlxuICAgICAgZiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBmICE9PSBudWxsICYmXG4gICAgICBPYmplY3Qua2V5cyhmKS5sZW5ndGggPiAwKTtcblxuICAgIGlmICh0aGlzLl9pc0R5bmFtaWMpIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gRmFjZXQuZnJvbUZpbHRlcnMoLi4udmFsaWRGaWx0ZXJzKTtcbiAgICAgIHRoaXMuY29yZS5zZXRGYWNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSB2YWxpZEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4udmFsaWRGaWx0ZXJzKVxuICAgICAgICA6IHZhbGlkRmlsdGVyc1swXTtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBzZWFyY2ggd2l0aCBhbGwgZmlsdGVycyBpbiBzdG9yYWdlXG4gICAqL1xuICBfc2VhcmNoICgpIHtcbiAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSk7XG5cbiAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5kZWxldGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCk7XG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX3ZlcnRpY2FsS2V5LCB7XG4gICAgICBpbnB1dDogcXVlcnksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBjb250cm9sc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBTVVBQT1JURURfQ09OVFJPTFMgPSBbXG4gICdzaW5nbGVvcHRpb24nLFxuICAnbXVsdGlvcHRpb24nXG5dO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2Ygb3B0aW9ucywgZWFjaCBvbmUgcmVwcmVzZW50aW5nIGEgZmlsdGVyIGluIGEgc2VhcmNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmNvbnRyb2wgfHwgIVNVUFBPUlRFRF9DT05UUk9MUy5pbmNsdWRlcyhjb25maWcuY29udHJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIHJlcXVpcmVzIGEgdmFsaWQgXCJjb250cm9sXCIgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIGNvbXBvbmVudCByZXF1aXJlcyBvcHRpb25zIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNPcHRpb25zID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUodGhpcy5uYW1lKTtcbiAgICBpZiAodHlwZW9mIHByZXZpb3VzT3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2UocHJldmlvdXNPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSBwcmV2aW91c09wdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXIgb3B0aW9ucyB0byBkaXNwbGF5IHdpdGggY2hlY2tlZCBzdGF0dXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25zID0gY29uZmlnLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgIC4uLm8sXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRPcHRpb25zLmxlbmd0aFxuICAgICAgICA/IHNlbGVjdGVkT3B0aW9ucy5pbmNsdWRlcyhvLmxhYmVsKVxuICAgICAgICA6IG8uc2VsZWN0ZWRcbiAgICB9KSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBjb250cm9sIHRvIGRpc3BsYXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29udHJvbCA9IGNvbmZpZy5jb250cm9sO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIHVzZWQgZm9yIG9wdGlvbnMgaW4gdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvblNlbGVjdG9yID0gY29uZmlnLm9wdGlvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXItb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIGJlIHVzZWQgaW4gdGhlIGxlZ2VuZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sYWJlbCA9IGNvbmZpZy5sYWJlbCB8fCAnRmlsdGVycyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyT3B0aW9ucyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlciwgYmFzZWQgb24gdGhlIGNvbnRyb2xcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGBjb250cm9scy8ke2NvbmZpZy5jb250cm9sfWA7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgb3B0aW9uczogdGhpcy5fb3B0aW9ucyxcbiAgICAgIGxhYmVsOiB0aGlzLl9sYWJlbFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIERPTS5kZWxlZ2F0ZShcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGAuJHt0aGlzLl9jb250cm9sfS1maWVsZHNldGApLFxuICAgICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IsXG4gICAgICAnY2xpY2snLFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVPcHRpb24ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCBldmVudC50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVPcHRpb24gKGluZGV4LCBzZWxlY3RlZCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sID09PSAnc2luZ2xlb3B0aW9uJykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBzZWxlY3RlZDogZmFsc2UgfSkpO1xuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0aW9uc1tpbmRleF0sIHsgc2VsZWN0ZWQgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgb3B0aW9uc1xuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdmYWxzZScpKTtcbiAgICB0aGlzLl9hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIEZpbHRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuX29wdGlvbnNcbiAgICAgIC5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKVxuICAgICAgLm1hcChvID0+IG8uZmlsdGVyXG4gICAgICAgID8gby5maWx0ZXJcbiAgICAgICAgOiBGaWx0ZXIuZXF1YWwoby5maWVsZCwgby52YWx1ZSkpO1xuXG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldCh0aGlzLm5hbWUsIHRoaXMuX29wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCkubWFwKG8gPT4gby5sYWJlbCkpO1xuICAgIHJldHVybiBmaWx0ZXJzLmxlbmd0aCA+IDBcbiAgICAgID8gRmlsdGVyLmdyb3VwKC4uLmZpbHRlcnMpXG4gICAgICA6IHt9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSYW5nZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmllbGQgdG8gZmlsdGVyIG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZmlsdGVyIHZhbHVlIGNoYW5nZXNcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIGxldCBtaW5WYWwgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1pbmApO1xuICAgIGlmICh0eXBlb2YgbWluVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbWluVmFsID0gTnVtYmVyLnBhcnNlSW50KG1pblZhbCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICBsZXQgbWF4VmFsID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5tYXhgKTtcbiAgICBpZiAodHlwZW9mIG1pblZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1heFZhbCA9IE51bWJlci5wYXJzZUludChtYXhWYWwpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCByYW5nZSByZXByZXNlbnRlZFxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYW5nZSA9IHtcbiAgICAgIG1pbjogbWluVmFsIHx8IGNvbmZpZy5pbml0aWFsTWluIHx8IDAsXG4gICAgICBtYXg6IG1heFZhbCB8fCBjb25maWcuaW5pdGlhbE1heCB8fCAxMFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIHJhbmdlIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1pbiBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtYXggaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWF4TGFiZWwgPSBjb25maWcubWF4TGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL3JhbmdlYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSYW5nZUZpbHRlcic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLl90aXRsZSxcbiAgICAgIG1pbkxhYmVsOiB0aGlzLl9taW5MYWJlbCxcbiAgICAgIG1heExhYmVsOiB0aGlzLl9tYXhMYWJlbCxcbiAgICAgIG1pblZhbHVlOiB0aGlzLl9yYW5nZS5taW4sXG4gICAgICBtYXhWYWx1ZTogdGhpcy5fcmFuZ2UubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1yYW5nZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgTnVtYmVyLnBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWluICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCB2YWx1ZSk7XG4gIH1cblxuICBzZXRNYXggKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIHZhbHVlKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjdXJyZW50IHJhbmdlIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJhbmdlIGtleSB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBrZXlcbiAgICovXG4gIF91cGRhdGVSYW5nZSAoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuX3JhbmdlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmFuZ2UsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWluYCwgdGhpcy5fcmFuZ2UubWluKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWF4YCwgdGhpcy5fcmFuZ2UubWF4KTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbHRlciByZXByZXNlbnRhdGlvbiBvZiB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICByZXR1cm4gRmlsdGVyLmluY2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9yYW5nZS5taW4sIHRoaXMuX3JhbmdlLm1heCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERhdGVGaWx0ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBBIGZpbHRlciBmb3IgYSByYW5nZSBvZiBkYXRlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFwaSBmaWVsZCB0aGlzIGZpbHRlciBjb250cm9sc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZCA9IGNvbmZpZy5maWVsZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGZvciB0aGUgZGF0ZSByYW5nZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBzaG93IGZvciB0aGUgbWluIGRhdGUgaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWluTGFiZWwgPSBjb25maWcubWluTGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBzaG93IGZvciB0aGUgbWF4IGRhdGUgaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWF4TGFiZWwgPSBjb25maWcubWF4TGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayB1c2VkIHdoZW4gYSBkYXRlIGlzIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoaXMgZmlsdGVyIHJlcHJlc2VudHMgYW4gZXhjbHVzaXZlIHJhbmdlLCByYXRoZXIgdGhhbiBhbiBpbmNsdXNpdmUgb25lXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0V4Y2x1c2l2ZSA9IGNvbmZpZy5pc0V4Y2x1c2l2ZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy9kYXRlYDtcblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0b2RheVN0cmluZyA9IGAke3RvZGF5LmdldEZ1bGxZZWFyKCl9LSR7YCR7dG9kYXkuZ2V0TW9udGgoKSArIDF9YC5wYWRTdGFydCgyLCAnMCcpfS0ke2Ake3RvZGF5LmdldERhdGUoKX1gLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICBjb25zdCBtaW5EYXRlID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5taW5gKTtcbiAgICBjb25zdCBtYXhEYXRlID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5tYXhgKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGRhdGUgcmFuZ2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RhdGUgPSB7XG4gICAgICBtaW46IG1pbkRhdGUgfHwgY29uZmlnLmluaXRpYWxNaW4gfHwgdG9kYXlTdHJpbmcsXG4gICAgICBtYXg6IG1heERhdGUgfHwgY29uZmlnLmluaXRpYWxNYXggfHwgdG9kYXlTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RhdGVSYW5nZUZpbHRlcic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLl90aXRsZSxcbiAgICAgIG1pbkxhYmVsOiB0aGlzLl9taW5MYWJlbCxcbiAgICAgIG1heExhYmVsOiB0aGlzLl9tYXhMYWJlbCxcbiAgICAgIGRhdGVNaW46IHRoaXMuX2RhdGUubWluLFxuICAgICAgZGF0ZU1heDogdGhpcy5fZGF0ZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWRhdGUnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtaW4gZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWluIChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWF4IGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1heCAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCBkYXRlKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSBkYXRlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3RyaW5nIGRhdGUgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGVSYW5nZSAoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuX2RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kYXRlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1pbmAsIHRoaXMuX2RhdGUubWluKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWF4YCwgdGhpcy5fZGF0ZS5tYXgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYW4gYXBpIGZpbHRlciB3aXRoIHRoZSBjdXJyZW50IGRhdGUgc3RhdGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgaWYgKHRoaXMuX2RhdGUubWluID09PSAnJyB8fCB0aGlzLl9kYXRlLm1heCA9PT0gJycpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2lzRXhjbHVzaXZlXG4gICAgICA/IEZpbHRlci5leGNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KVxuICAgICAgOiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX2RhdGUubWluLCB0aGlzLl9kYXRlLm1heCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIERpc3BsYXlzIGEgc2V0IG9mIGR5bmFtaWMgZmlsdGVycyByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdHJpZ2dlciBhIHNlYXJjaCBvbiBlYWNoIGNoYW5nZSB0byBhIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoT25DaGFuZ2UgPSBjb25maWcuc2VhcmNoT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3Igb2YgdGhlIGFwcGx5IGJ1dHRvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yID0gY29uZmlnLmFwcGx5QnV0dG9uU2VsZWN0b3IgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250cm9scyB0byB1c2UgZm9yIGVhY2ggZmllbGQuIEVhY2ggdHlwZSBvZiBmaWx0ZXIgaGFzIGEgZGVmYXVsdFxuICAgICAqICRlcSA6IG11bHRpb3B0aW9uIChjaGVja2JveClcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkQ29udHJvbHMgPSBjb25maWcuZmllbGRDb250cm9scyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ2ZpbHRlcnMvZHluYW1pYyc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhIHN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSUztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgYm94IHRoYXQgZGlzcGxheXMgdGhlIGR5bmFtaWMgZmlsdGVyc1xuICAgICAqIEB0eXBlIHtGaWx0ZXJCb3hDb21wb25lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJib3ggPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0R5bmFtaWNGaWx0ZXJzJztcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuY29yZS5lbmFibGVEeW5hbWljRmlsdGVycygpO1xuXG4gICAgaWYgKHRoaXMuX2ZpbHRlcmJveCkge1xuICAgICAgdGhpcy5fZmlsdGVyYm94LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGxldCB7IGZpbHRlcnMgfSA9IHRoaXMuX3N0YXRlLmdldCgpO1xuXG4gICAgaWYgKCFmaWx0ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsdGVycyA9IGZpbHRlcnMubWFwKGYgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGYsIHtcbiAgICAgICAgdHlwZTogJ0ZpbHRlck9wdGlvbnMnLFxuICAgICAgICBjb250cm9sOiB0aGlzLl9maWVsZENvbnRyb2xzW2YuZmllbGRJZF0gfHwgJ211bHRpb3B0aW9uJ1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9maWx0ZXJib3ggPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgJ0ZpbHRlckJveCcsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlcmJveGAsXG4gICAgICAgIGNvbnRhaW5lcjogJy5qcy15ZXh0LWR5bmFtaWMtZmlsdGVycycsXG4gICAgICAgIHNlYXJjaE9uQ2hhbmdlOiB0aGlzLl9zZWFyY2hPbkNoYW5nZSxcbiAgICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXG4gICAgICAgIGZpbHRlcnNcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveC5tb3VudCgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHZW9Mb2NhdGlvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IE1FVEVSU19QRVJfTUlMRSA9IDE2MDkuMzQ0O1xuXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgLyoqXG4gICAqIFRoZSByYWRpdXMsIGluIG1pbGVzLCBhcm91bmQgdGhlIHVzZXIncyBsb2NhdGlvbiB0byBmaW5kIHJlc3VsdHMuXG4gICAqIElmIGxvY2F0aW9uIGFjY3VyYWN5IGlzIGxvdywgYSBsYXJnZXIgcmFkaXVzIG1heSBiZSB1c2VkIGF1dG9tYXRpY2FsbHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHJhZGl1czogNTAsXG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJ0aWNhbCBrZXkgdG8gdXNlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB2ZXJ0aWNhbEtleTogbnVsbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgc3VibWl0cyBhIHNlYXJjaCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc2VhcmNoT25DaGFuZ2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGl0bGU6ICdMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsYWJlbDogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGljb24gdXJsIHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvbkljb246ICcnLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGluIHRoZSBnZW8gYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZW9CdXR0b25UZXh0OiAnVXNlIE15IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGdlb2xvY2F0aW9uIGlzIGVuYWJsZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGVuYWJsZWRUZXh0OiAnQ3VycmVudCBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgd2hlbiBsb2FkaW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxvYWRpbmdUZXh0OiAnRmluZGluZyBZb3VyIExvY2F0aW9uLi4uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyBpZiB0aGUgdXNlcidzIGxvY2F0aW9uIGNhbm5vdCBiZSBmb3VuZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZXJyb3JUZXh0OiAnQ291bGQgTm90IEZpbmQgWW91ciBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHRvZ2dsZSBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGJ1dHRvblNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1idXR0b24nLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIHNlbGVjdG9yIG9mIHRoZSBxdWVyeSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgaW5wdXRTZWxlY3RvcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItaW5wdXQnXG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYSBidXR0b24gdGhhdCB3aGVuIGNsaWNrZWQgYWRkcyBhIHN0YXRpYyBmaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9Mb2NhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcih7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfSwgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIHRvIHVzZSBmb3IgdGhlIGN1cnJlbnQgcXVlcnlcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKSB8fCB7fTtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBKU09OLnBhcnNlKHRoaXMuZmlsdGVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZiA9PiB7IHRoaXMuZmlsdGVyID0gZjsgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnR2VvTG9jYXRpb25GaWx0ZXInO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnY29udHJvbHMvZ2VvbG9jYXRpb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnJztcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcuZW5hYmxlZFRleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0xvYWRpbmcpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgIH1cbiAgICBpZiAoZGF0YS5nZW9FcnJvcikge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcuZXJyb3JUZXh0O1xuICAgIH1cbiAgICBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgdGl0bGU6IHRoaXMuX2NvbmZpZy50aXRsZSxcbiAgICAgIGdlb0VuYWJsZWQ6IHRoaXMuX2VuYWJsZWQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5fY29uZmlnLmxhYmVsLFxuICAgICAgZW5hYmxlZFRleHQ6IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dCxcbiAgICAgIGxvYWRpbmdUZXh0OiB0aGlzLl9jb25maWcubG9hZGluZ1RleHQsXG4gICAgICBlcnJvclRleHQ6IHRoaXMuX2NvbmZpZy5lcnJvclRleHQsXG4gICAgICBnZW9CdXR0b25JY29uOiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uSWNvbixcbiAgICAgIGdlb1ZhbHVlOiB0aGlzLl9lbmFibGVkIHx8IGRhdGEuZ2VvTG9hZGluZyB8fCBkYXRhLmdlb0Vycm9yID8gJycgOiB0aGlzLnF1ZXJ5LFxuICAgICAgZ2VvUGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgZ2VvQnV0dG9uVGV4dDogdGhpcy5fY29uZmlnLmdlb0J1dHRvblRleHRcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKTtcbiAgICBET00ub24odGhpcy5fY29uZmlnLmJ1dHRvblNlbGVjdG9yLCAnY2xpY2snLCAoKSA9PiB0aGlzLl90b2dnbGVHZW9GaWx0ZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1hdXRvY29tcGxldGUnLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBvblN1Ym1pdDogKHF1ZXJ5LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmZpbHRlciA9IEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5fc2F2ZURhdGFUb1N0b3JhZ2UocXVlcnksIHRoaXMuZmlsdGVyKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIHN0YXRpYyBmaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90b2dnbGVHZW9GaWx0ZXIgKCkge1xuICAgIGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvTG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIHBvc2l0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcihwb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy5fc2F2ZURhdGFUb1N0b3JhZ2UoJycsIGZpbHRlciwgcG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApO1xuICAgICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlb0Vycm9yOiB0cnVlIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgcHJvdmlkZWQgZmlsdGVyIHVuZGVyIHRoaXMgY29tcG9uZW50J3MgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNhdmVcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgZmlsdGVyIHRvIHNhdmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIFRoZSBwb3NpdGlvbiB0byBzYXZlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZURhdGFUb1N0b3JhZ2UgKHF1ZXJ5LCBmaWx0ZXIsIHBvc2l0aW9uKSB7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcXVlcnkpO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmaWx0ZXIpO1xuICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04sIHtcbiAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgcmFkaXVzOiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3lcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGxldCB0b3RhbEZpbHRlciA9IGZpbHRlcnNbMF07XG4gICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmRlbGV0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VUKTtcbiAgICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl9jb25maWcudmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgcG9zaXRpb24sIGNvbnN0cnVjdCBhIEZpbHRlciBvYmplY3RcbiAgICogQHBhcmFtIHtQb3N0aXRpb259IHBvc2l0aW9uIFRoZSBwb3NpdGlvblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyIChwb3NpdGlvbikge1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYWNjdXJhY3kgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChhY2N1cmFjeSwgdGhpcy5fY29uZmlnLnJhZGl1cyAqIE1FVEVSU19QRVJfTUlMRSk7XG4gICAgcmV0dXJuIEZpbHRlci5wb3NpdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlLCByYWRpdXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBFdmVudFR5cGVzIGFyZSBleHBsaWNpdCBzdHJpbmdzIGRlZmluZWRcbiAqIGZvciB3aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cyBmb3IgYW5hbHl0aWNzLlxuICpcbiAqIEBlbnVtXG4gKi9cbmNvbnN0IEV2ZW50VHlwZXMgPSB7XG4gIFRIVU1CU19VUDogJ1RIVU1CU19VUCcsXG4gIFRIVU1CU19ET1dOOiAnVEhVTUJTX0RPV04nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybSB1c2VkIGZvciBzdWJtaXR0aW5nIHRoZSBmZWVkYmFja1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1FbCB8fCAnLmpzLWRpcmVjdEFuc3dlci1mZWVkYmFjay1mb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIHVwYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNVcFNlbGVjdG9yID0gY29uZmlnLnRodW1ic1VwU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJVcCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRodW1icyBkb3duYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IgPSBjb25maWcudGh1bWJzRG93blNlbGVjdG9yIHx8ICcuanMtZGlyZWN0QW5zd2VyLXRodW1iRG93bic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSB0ZXh0IGZvciB0aGUgVmlldyBEZXRhaWxzIGNsaWNrIHRvIGFjdGlvbiBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92aWV3RGV0YWlsc1RleHQgPSBjb25maWcudmlld0RldGFpbHNUZXh0IHx8ICdWaWV3IERldGFpbHMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCwgb25seSBkaXNwbGF5IHRoZSBkaXJlY3QgYW5zd2VyIGNvbXBvbmVudCBpZiBpdCBoYXMgZGF0YVxuICAgKi9cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZSgnYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQsXG4gICAqIHdlIHdhbnQgdG8gd2lyZSB1cCB0aGUgYmVoYXZpb3IgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1YWxpdHkgZmVlZGJhY2sgcmVwb3J0aW5nICh0aHVtYnN1cC9kb3duKVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgYmluZGluZ3MgaWYgdGhlIGZlZWRiYWNrIGhhcyBwcmV2aW91c2x5IGJlZW4gc3VibWl0dGVkXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoJ2ZlZWRiYWNrU3VibWl0dGVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZvciBXQ0FHIGNvbXBsaWFuY2UsIHRoZSBmZWVkYmFjayBzaG91bGQgYmUgYSBzdWJtaXR0YWJsZSBmb3JtXG4gICAgRE9NLm9uKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBsZXQgZm9ybUVsID0gZS50YXJnZXQ7XG4gICAgICBsZXQgY2hlY2tlZFZhbHVlID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJ2lucHV0OmNoZWNrZWQnKS52YWx1ZSA9PT0gJ3RydWUnO1xuXG4gICAgICB0aGlzLnJlcG9ydFF1YWxpdHkoY2hlY2tlZFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAnZmVlZGJhY2tTdWJtaXR0ZWQnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElzIHRoaXMgYWN0dWFsbHkgbmVjZXNzYXJ5PyBJIGd1ZXNzIGl0J3Mgb25seSBuZWNlc3NhcnkgaWYgdGhlXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBpcyBoaWRkZW4uXG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic1VwU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICAgIERPTS5vbih0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGVuYWJsZXMgZm9yIHBhcnRpYWwgdXBkYXRlcyAodGhlIGRlbHRhIGJldHdlZW4gdGhlIG9sZCBhbmQgbmV3KVxuICAgKiBAdHlwZSB7b2JqZWN0fSBUaGUgbmV3IHN0YXRlIHRvIGFwcGx5IHRvIHRoZSBvbGRcbiAgICovXG4gIHVwZGF0ZVN0YXRlIChzdGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFN0YXRlKCksIHN0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YSksXG4gICAgICB2aWV3RGV0YWlsc1RleHQ6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dFxuICAgIH0pKTtcbiAgfVxuXG4gIGV2ZW50T3B0aW9ucyAoZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogZGF0YS5yZWxhdGVkSXRlbS52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6ICdVTklWRVJTQUwnLFxuICAgICAgZW50aXR5SWQ6IGRhdGEucmVsYXRlZEl0ZW0uZGF0YS5pZCxcbiAgICAgIGN0YUxhYmVsOiB0aGlzLl92aWV3RGV0YWlsc1RleHQudG9VcHBlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydFF1YWxpdHkgd2lsbCBzZW5kIHRoZSBxdWFsaXR5IGZlZWRiYWNrIHRvIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzR29vZCB0cnVlIGlmIHRoZSBhbnN3ZXIgaXMgd2hhdCB5b3Ugd2VyZSBsb29raW5nIGZvclxuICAgKi9cbiAgcmVwb3J0UXVhbGl0eSAoaXNHb29kKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gaXNHb29kID09PSB0cnVlID8gRXZlbnRUeXBlcy5USFVNQlNfVVAgOiBFdmVudFR5cGVzLlRIVU1CU19ET1dOO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KGV2ZW50VHlwZSlcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgJ2RpcmVjdEFuc3dlcic6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWxDb25maWdJZCB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkID0gb3B0cy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW4gYW5kIGlzIHNldCB0b1xuICAgICAqIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gb3B0cy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIG9iamVjdCBmb3IgdGhlIHRpdGxlIGxpbmtcbiAgICogQHBhcmFtIGVudGl0eUlkIFRoZSBJRCBvZiB0aGUgcmVzdWx0IGl0ZW0sIGlmIHByZXNlbnRcbiAgICogQHBhcmFtIHVybCBUaGUgdXJsIG9mIHRoZSByZXN1bHQgaXRlbSwgaWYgcHJlc2VudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zIChlbnRpdHlJZCwgdXJsKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogdGhpcy5faXNVbml2ZXJzYWwgPyAnVU5JVkVSU0FMJyA6ICdWRVJUSUNBTCdcbiAgICB9O1xuXG4gICAgaWYgKGVudGl0eUlkKSB7XG4gICAgICBvcHRpb25zLmVudGl0eUlkID0gZW50aXR5SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXNzZXMgZXZlbnRPcHRpb25zIHRvIHRoZSB2aWV3TW9kZWxcbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHRzSXRlbUNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhLmlkLCBkYXRhLmxpbmspXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbUNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yXG4gKiBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBtYXAgcHJvdmlkZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gY29uZmlnLnpvb20gfHwgOTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNvb3JkaW5hdGVzIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIHJlc3VsdHMgcmV0dXJuZWRcbiAgICAgKiBPbmx5IHVzZWQgaWYgc2hvd0VtcHR5TWFwIGlzIHNldCB0byB0cnVlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9kZWZhdWx0UG9zaXRpb24gPSBjb25maWcuZGVmYXVsdFBvc2l0aW9uIHx8IHsgbGF0OiAzNy4wOTAyLCBsbmc6IC05NS43MTI5IH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVtcHR5IG1hcCBzaG91bGQgYmUgc2hvd24gd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dFbXB0eU1hcCA9IGNvbmZpZy5zaG93RW1wdHlNYXAgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIHBpbiBpcyBjbGlja2VkLiBUaGUgY2xpY2tlZCBpdGVtKHMpIGFyZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uUGluQ2xpY2sgPSBjb25maWcub25QaW5DbGljayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gY29uZmlnLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2YgY29uZmlnLnBpbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgY29uZmlnLnBpbik7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbGxhcHNlIHBpbnMgYXQgdGhlIHNhbWUgbGF0L2xuZ1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2NvbGxhcHNlUGlucyA9IGNvbmZpZy5jb2xsYXBzZVBpbnMgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGxpc3Qgb2YgbWFya2VycywgY29tYmluZSBtYXJrZXJzIHdpdGggdGhlIHNhbWUgbGF0L2xuZyBpbnRvIGEgc2luZ2xlIG1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBtYXJrZXJzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBfY29sbGFwc2VNYXJrZXJzIChtYXJrZXJzKSB7XG4gICAgY29uc3QgbG9jYXRpb25Ub0l0ZW0gPSB7fTtcbiAgICBtYXJrZXJzLmZvckVhY2gobSA9PiB7XG4gICAgICBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF1cbiAgICAgICAgPyBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0ucHVzaChtKVxuICAgICAgICA6IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXSA9IFttXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBbLCBtYXJrZXJzXSBvZiBPYmplY3QuZW50cmllcyhsb2NhdGlvblRvSXRlbSkpIHtcbiAgICAgIGlmIChtYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VyID0ge1xuICAgICAgICAgIGl0ZW06IG1hcmtlcnMubWFwKG0gPT4gbS5pdGVtKSxcbiAgICAgICAgICBsYWJlbDogbWFya2Vycy5sZW5ndGgsXG4gICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlcnNbMF0ubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXJzWzBdLmxvbmdpdHVkZVxuICAgICAgICB9O1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2goY29sbGFwc2VkTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChtYXJrZXJzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VkTWFya2VycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ3JlZGVudGlhbHMgKCkge1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSkge1xuICAgICAgcmV0dXJuIGBjbGllbnQ9JHt0aGlzLl9jbGllbnRJZH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYGtleT0ke3RoaXMuX2FwaUtleX1gO1xuICAgIH1cbiAgfVxuXG4gIGhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMgKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZDtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8gTk9URShiaWxseSkgVGhpcyB0aW1lb3V0IGlzIGEgaGFjayBmb3IgZGVhbGluZyB3aXRoIGFzeW5jIG5hdHVyZS5cbiAgICAvLyBPbmx5IGhlcmUgZm9yIGRlbW8gcHVycG9zZXMsIHNvIHdlJ2xsIGZpeCBsYXRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICAgIGlmIChtYXBEYXRhICYmIG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlUGluc1xuICAgICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgICA6IG1hcERhdGEubWFwTWFya2VycztcbiAgICAgICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgICB0aGlzLm1hcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb29nbGVNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwLnNldENlbnRlcihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sYXQsIHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcpKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbi8vIFRPRE8oYmlsbHkpIE1vdmUgdG8gb3duIGNsYXNzXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwTWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge0dvb2dsZU1hcH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0OiB1bmRlZmluZWQsXG4gICAgICBsbmc6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcGVydGllcy9zZXR0aW5ncyBvZiB0aGUgaWNvbiB1c2VkIGZvciB0aGUgbWFya2VyXG4gICAgICogZS5nLiB7XG4gICAgICogICAgICAgIGFuY2hvcjogeyB4OiAwLCB5OiAwIH1cbiAgICAgKiAgICAgICAgdXJsOiAncGF0aC90by91cmwuanBnJ1xuICAgICAqICAgICAgICBzY2FsZWRTaXplOiB7IHc6IDAsIGg6IDAgfVxuICAgICAqICAgICAgIH1cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5pY29uID0gb3B0cy5pY29uIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX0gZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChnb29nbGVNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYG1hcmtlcnM9bGFiZWw6JHttYXJrZXIubGFiZWx9fCR7bWFya2VyLnBvc2l0aW9uLmxhdH0sJHttYXJrZXIucG9zaXRpb24ubG5nfWApO1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gbWFwIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWdPYmouc2NhbGVkU2l6ZS53LCBwaW5Db25maWdPYmouc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBwaW5Db25maWdPYmoudXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnN2Zykge1xuICAgICAgICBpY29uLnVybCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwgJHtlbmNvZGVVUklDb21wb25lbnQocGluQ29uZmlnT2JqLnN2Zyl9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsO1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IHBpbkNvbmZpZ09iai5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbWFya2VyLmxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5PVEUoYmlsbHkpIEdvb2dsZSBtYXBzIGRvZXNuJ3QgaGFuZGxlIGVtcHR5IGljb24gb2JqZWN0cyBuaWNlbHlcbiAgICAgIC8vIE1ha2UgZ29vZ2xlIG1hcHMgaGFwcHkgaWYgbm8gc2V0dGluZ3MgZm9yIGljb24gYXJlIHByb3ZpZGVkO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGljb24pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBHb29nbGVNYXBNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ29vZ2xlTWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQm94TWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIG1hcGJveGdsICovXG5cbi8qKlxuICogTWFwQm94TWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25Mb2FkZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogdGhpcy5nZXRDZW50ZXJNYXJrZXIobWFwRGF0YSlcbiAgICB9KTtcblxuICAgIGlmIChtYXBEYXRhKSB7XG4gICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VQaW5zXG4gICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5fbWFwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIod3JhcHBlcikuc2V0TG5nTGF0KGNvb3Jkcyk7XG4gICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgICAgICBpZiAodGhpcy5fb25QaW5DbGljaykge1xuICAgICAgICAgIG1hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2VudGVyTWFya2VyIChtYXBEYXRhKSB7XG4gICAgcmV0dXJuIG1hcERhdGEgJiYgbWFwRGF0YS5tYXBDZW50ZXIgJiYgbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlICYmIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXG4gICAgICA/IFttYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUsIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXVxuICAgICAgOiB7IGxuZzogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZywgbGF0OiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0IH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHBpbiBmb3IgdGhlIHN0YXRpYyBtYXBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljTWFwUGluID0gb3B0cy5zdGF0aWNNYXBQaW4gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtNYXBCb3hNYXJrZXJDb25maWdbXX0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChtYXBib3hNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3RhdGljTWFwUGluKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHVybC0ke21hcmtlci5zdGF0aWNNYXBQaW59KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgcGluLXMtJHttYXJrZXIubGFiZWx9KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7TWFwQm94fSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge01hcEJveE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG4gICAgICBjb25zdCBzdGF0aWNNYXBQaW4gPSBwaW5Db25maWdPYmouc3RhdGljTWFwUGluID8gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXG4gICAgICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgICAgICBzdGF0aWNNYXBQaW46IHN0YXRpY01hcFBpblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBib3hNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgR29vZ2xlTWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBjb21wb25lbnQgdG8gbGlzdGVuIHRvIHRoZSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMga2V5XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhc2VkIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIG1hcCBwcm92aWRlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX21hcFByb3ZpZGVyID0gb3B0cy5tYXBQcm92aWRlcjtcbiAgICBpZiAoIXRoaXMuX21hcFByb3ZpZGVyIHx8ICEodGhpcy5fbWFwUHJvdmlkZXIudG9Mb3dlckNhc2UoKSBpbiBQcm92aWRlclR5cGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXBDb21wb25lbnQ6IEludmFsaWQgTWFwIFByb3ZpZGVyOyBtdXN0IGJlIGBnb29nbGVgIG9yIGBtYXBCb3hgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9tYXAnO1xuICB9XG5cbiAgLy8gVE9ETyhiaWxseSkgTWFrZSBQcm92aWRlclR5cGVzIGEgZmFjdG9yeSBjbGFzc1xuICBnZXRQcm92aWRlckluc3RhbmNlICh0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlclR5cGVzW3R5cGUudG9Mb3dlckNhc2UoKV0odGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIHRoaXMuX21hcC5sb2FkSlMoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuX21hcC5vbkxvYWRlZCgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXAuaW5pdCh0aGlzLl9jb250YWluZXIsIHRoaXMuZ2V0U3RhdGUoJ21hcCcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoZGF0YSwgdmFsKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuY29uc3QgUmVzdWx0VHlwZSA9IHtcbiAgRVZFTlQ6ICdldmVudCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBQRU9QTEU6ICdwZW9wbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsQ29uZmlnSWQgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxDb25maWdJZCA9IGNvbmZpZy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgc2V0IHRvIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gY29uZmlnLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLnJlbmRlckl0ZW0gPSBjb25maWcuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLml0ZW1UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuaXRlbVRlbXBsYXRlID0gY29uZmlnLl9wYXJlbnRPcHRzLml0ZW1UZW1wbGF0ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZ3VyZUl0ZW0oe1xuICAgICAgcmVuZGVyOiBjb25maWcucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBjb25maWcuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIHRvIHRoZSB1bml2ZXJzYWwgcGFnZSBmb3IgdGhlIG5vIHJlc3VsdHMgcGFnZSB0byBsaW5rIGJhY2sgdG8gd2l0aCBjdXJyZW50IHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuX3VuaXZlcnNhbFVybCA9IGNvbmZpZy51bml2ZXJzYWxVcmw7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHVwbGljYXRlc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgcmVzdWx0czogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fY29uZmlnLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX2NvbmZpZy5tYXBDb25maWcsXG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKCksXG4gICAgICB1bml2ZXJzYWxVcmw6IHRoaXMuX3VuaXZlcnNhbFVybCA/IHRoaXMuX3VuaXZlcnNhbFVybCArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggOiAnJyxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHJlc3VsdHMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBvYmplY3QgZm9yIHRoZSB2aWV3IGFsbCBsaW5rXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLm1hcENvbmZpZywgb3B0cyk7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgbmV3T3B0cyk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHByb3BlciBpdGVtIHJlbmRlcnMgdG8gdGhlIHRoZSBjb21wb25lbnRzXG4gICAgLy8gaGF2ZSBqdXN0IGJlZW4gY29uc3RydWN0ZWQuIFByaW9yaXRpemUgZ2xvYmFsIG92ZXIgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBsZXQgY29tcCA9IHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZCxcbiAgICAgIGlzVW5pdmVyc2FsOiB0aGlzLl9pc1VuaXZlcnNhbFxuICAgIH0pKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgKi9cbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogYmFzZSBzZWxlY3RvciB0byB1c2Ugd2hlbiBmaW5kaW5nIERPTSB0YXJnZXRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9zZWxlY3RvckJhc2UgPSBjb25maWcuc2VsZWN0b3JCYXNlIHx8ICcuanMteXh0LUFjY29yZGlvblJlc3VsdCc7XG5cbiAgICAvKipcbiAgICAgKiBjb2xsYXBzZWQgc3RhdGUgY2xhc3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkQ2xhc3MgPSBjb25maWcuY29sbGFwc2VkQ2xhc3MgfHwgJ2lzLWNvbGxhcHNlZCc7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbCBjb25maWcgaWQgaXMgcmVxdWlyZWQgZm9yIGFuYWx5dGljc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZCB8fCBjb25maWcuX3BhcmVudE9wdHMudmVydGljYWxDb25maWdJZCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBY2NvcmRpb25SZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzYWNjb3JkaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZXMgb25Nb3VudCB0byBhZGQgYmluZGluZ3MgdG8gY2hhbmdlIHRoZSBoZWlnaHQgb24gY2xpY2tcbiAgICogQHJldHVybnMge0FjY29yZGlvblJlc3VsdHNDb21wb25lbnR9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgc3VwZXIub25Nb3VudCgpO1xuXG4gICAgY29uc3QgYWNjb3JkaW9uRWxzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fc2VsZWN0b3JCYXNlKTtcbiAgICBhY2NvcmRpb25FbHMuZm9yRWFjaCgoYWNjb3JkaW9uRWwpID0+IHtcbiAgICAgIGNvbnN0IHRvZ2dsZUVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLnRvZ2dsZVNlbGVjdG9yKCkpO1xuICAgICAgY29uc3QgY29udGVudEVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLmJvZHlTZWxlY3RvcigpKTtcbiAgICAgIHRoaXMuY2hhbmdlSGVpZ2h0KGNvbnRlbnRFbCwgYWNjb3JkaW9uRWwpO1xuICAgICAgdG9nZ2xlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2soYWNjb3JkaW9uRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG1vZGlmaWVyOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWRcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogY2xpY2sgaGFuZGxlciBmb3IgdGhlIGFjY29yZGlvbiB0b2dnbGUgYnV0dG9uXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0gdG9nZ2xlRWwge0hUTUxFbGVtZW50fSB0aGUgYnV0dG9uXG4gICAqIEBwYXJhbSBjb250ZW50RWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIHRhcmdldFxuICAgKi9cbiAgaGFuZGxlQ2xpY2sgKHdyYXBwZXJFbCwgdG9nZ2xlRWwsIGNvbnRlbnRFbCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdST1dfRVhQQU5EJyA6ICdST1dfQ09MTEFQU0UnKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIGVudGl0eUlkOiB0b2dnbGVFbC5kYXRhc2V0LmVudGl0eUlkXG4gICAgICB9KTtcbiAgICB3cmFwcGVyRWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIHdyYXBwZXJFbCk7XG4gICAgdG9nZ2xlRWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgY29sbGFwc2VkXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ29sbGFwc2VkICh3cmFwcGVyRWwpIHtcbiAgICBpZiAoIXdyYXBwZXJFbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwcGVyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY29sbGFwc2VkQ2xhc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZXMgdGhlIGhlaWdodCBiZXR3ZWVuIDAgYW5kIHRoZSBjb250ZW50IGhlaWdodCBmb3Igc21vb3RoIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gdGFyZ2V0RWwge0hUTUxFbGVtZW50fVxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGNoYW5nZUhlaWdodCAodGFyZ2V0RWwsIHdyYXBwZXJFbCkge1xuICAgIHRhcmdldEVsLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/IDAgOiB0YXJnZXRFbC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgY29tcG9zaW5nIGNoaWxkIGVsZW1lbnQgc2VsZWN0b3JzXG4gICAqIEBwYXJhbSBjaGlsZCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYnVpbGRTZWxlY3RvciAoY2hpbGQpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fc2VsZWN0b3JCYXNlfSR7Y2hpbGR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSB0b2dnbGUgYnV0dG9uIHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0b2dnbGVTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLXRvZ2dsZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgdGhlIGNvbnRlbnQgZWxlbWVudCBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYm9keVNlbGVjdG9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFNlbGVjdG9yKCctYm9keScpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVW5pdmVyc2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICBzdXBlci5pbml0KG9wdHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyBzZWN0aW9uczogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgc2hvd05vUmVzdWx0czogc2VjdGlvbnMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSwgb3B0cykge1xuICAgIGNvbnN0IGNoaWxkT3B0cyA9IHsgLi4ub3B0cywgLi4udGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSkgfTtcbiAgICBpZiAoY2hpbGRPcHRzLnVzZUFjY29yZGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQudHlwZSwgY2hpbGRPcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIGNoaWxkT3B0cyk7XG4gIH1cblxuICBnZXRDaGlsZENvbmZpZyAoY29uZmlnSWQpIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgdmVydGljYWxDb25maWdJZDogY29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdHJ1ZVxuICAgIH07XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgdGhpcy5fY29uZmlnWydjb25maWcnXVtjb25maWdJZF0gfHwgdGhpcy5fY29uZmlnWydjb25maWcnXSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFBhZ2luYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSB0byB1c2UgZm9yIHNlYXJjaGVzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX0NPTkZJRykudmVydGljYWxLZXk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl92ZXJ0aWNhbEtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICd2ZXJ0aWNhbEtleSBub3QgcHJvdmlkZWQsIGJ1dCBuZWNlc3NhcnkgZm9yIHBhZ2luYXRpb24nLFxuICAgICAgICAnUGFnaW5hdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIGRpc3BsYXlzIHRoZSBmaXJzdCBwYWdlIGJ1dHRvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlyc3RQYWdlQnV0dG9uRW5hYmxlZCA9IGNvbmZpZy5zaG93Rmlyc3QgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBjb25maWcuc2hvd0ZpcnN0O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgZGlzcGxheXMgdGhlIGxhc3QgcGFnZSBidXR0b25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhc3RQYWdlQnV0dG9uRW5hYmxlZCA9IGNvbmZpZy5zaG93TGFzdCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGNvbmZpZy5zaG93TGFzdDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGFsbCBhbmFseXRpYyBldmVudHMgc2VudCBieSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NPcHRpb25zID0ge1xuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5XG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpIHx8IDA7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQsIE51bWJlcihvZmZzZXQpKTtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCwgb2Zmc2V0ID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCwgTnVtYmVyKG9mZnNldCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIHJlc3VsdHMgPT4ge1xuICAgICAgaWYgKHJlc3VsdHMuc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1BhZ2luYXRpb24nO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAncmVzdWx0cy9wYWdpbmF0aW9uJztcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTKSB8fCB7fTtcbiAgICBjb25zdCBsaW1pdCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9DT05GSUcpLmxpbWl0O1xuICAgIGNvbnN0IHNob3dDb250cm9scyA9IHJlc3VsdHMuc2VhcmNoU3RhdGUgPT09ICdzZWFyY2gtY29tcGxldGUnICYmIHJlc3VsdHMucmVzdWx0c0NvdW50ID4gbGltaXQ7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX09GRlNFVCkgfHwgMDtcbiAgICBpZiAoIXNob3dDb250cm9scykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzUGFnZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LVBhZ2luYXRpb24tcHJldmlvdXMnKTtcbiAgICBjb25zdCBuZXh0UGFnZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LVBhZ2luYXRpb24tbmV4dCcpO1xuICAgIGNvbnN0IG1heFBhZ2UgPSBNYXRoLnRydW5jKChyZXN1bHRzLnJlc3VsdHNDb3VudCAtIDEpIC8gbGltaXQpO1xuXG4gICAgRE9NLm9uKHByZXZpb3VzUGFnZUJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4gdGhpcy51cGRhdGVQYWdlKG9mZnNldCAtIGxpbWl0KSk7XG4gICAgRE9NLm9uKG5leHRQYWdlQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB0aGlzLnVwZGF0ZVBhZ2Uob2Zmc2V0ICsgbGltaXQpKTtcblxuICAgIGlmICh0aGlzLl9maXJzdFBhZ2VCdXR0b25FbmFibGVkKSB7XG4gICAgICBjb25zdCBmaXJzdFBhZ2VCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLmpzLXl4dC1QYWdpbmF0aW9uLWZpcnN0Jyk7XG4gICAgICBET00ub24oZmlyc3RQYWdlQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB0aGlzLnVwZGF0ZVBhZ2UoMCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9sYXN0UGFnZUJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IGxhc3RQYWdlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy5qcy15eHQtUGFnaW5hdGlvbi1sYXN0Jyk7XG4gICAgICBET00ub24obGFzdFBhZ2VCdXR0b24sICdjbGljaycsICgpID0+IHRoaXMudXBkYXRlUGFnZShtYXhQYWdlICogbGltaXQpKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlIChvZmZzZXQpIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQsIG9mZnNldCk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRUFSQ0hfT0ZGU0VULCBvZmZzZXQpO1xuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFBhZ2UodGhpcy5fdmVydGljYWxLZXksIG9mZnNldCk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgLy8gU2FmYXJpXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUykgfHwge307XG4gICAgbGV0IG9mZnNldCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9PRkZTRVQpIHx8IDA7XG4gICAgY29uc3QgbGltaXQgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfQ09ORklHKS5saW1pdDtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gb2Zmc2V0IC8gbGltaXQ7XG4gICAgY29uc3Qgc2hvd0NvbnRyb2xzID0gcmVzdWx0cy5zZWFyY2hTdGF0ZSA9PT0gJ3NlYXJjaC1jb21wbGV0ZScgJiYgcmVzdWx0cy5yZXN1bHRzQ291bnQgPiBsaW1pdDtcbiAgICBjb25zdCBpc01vcmVSZXN1bHRzID0gcmVzdWx0cy5yZXN1bHRzQ291bnQgPiBvZmZzZXQgKyBsaW1pdDtcbiAgICBjb25zdCBtYXhQYWdlID0gTWF0aC50cnVuYygocmVzdWx0cy5yZXN1bHRzQ291bnQgLSAxKSAvIGxpbWl0KTtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgc2hvd0NvbnRyb2xzOiBzaG93Q29udHJvbHMsXG4gICAgICBmaXJzdFBhZ2VCdXR0b25FbmFibGVkOiB0aGlzLl9maXJzdFBhZ2VCdXR0b25FbmFibGVkLFxuICAgICAgbGFzdFBhZ2VCdXR0b25FbmFibGVkOiB0aGlzLl9sYXN0UGFnZUJ1dHRvbkVuYWJsZWQsXG4gICAgICBwYWdlTnVtYmVyOiBwYWdlTnVtYmVyICsgMSxcbiAgICAgIHNob3dGaXJzdFBhZ2VCdXR0b246IHBhZ2VOdW1iZXIgPiAxLFxuICAgICAgc2hvd1ByZXZpb3VzUGFnZUJ1dHRvbjogcGFnZU51bWJlciA+IDAsXG4gICAgICBzaG93TmV4dFBhZ2VCdXR0b246IGlzTW9yZVJlc3VsdHMsXG4gICAgICBzaG93TGFzdFBhZ2VCdXR0b246IHBhZ2VOdW1iZXIgPCBtYXhQYWdlIC0gMSxcbiAgICAgIC4uLmRhdGFcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuXG4vKipcbiAqIENvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciB0aGUgY29tcG9uZW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgLyoqXG4gICAqIFRoZSBlbnRpdHkgaWRlbnRpZmllciB0aGF0IHRoZSBxdWVzdGlvbiBpcyBhc3NvY2lhdGVkIHdpdGguXG4gICAqIFRoaXMgaXMgdHlwaWNhbGx5IGFuIG9yZ2FuaXphdGlvbiBvYmplY3RcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gICdlbnRpdHlJZCc6IG51bGwsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGxhbmd1YWdlIG9mIHRoZSBxdWVzdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2xhbmd1YWdlJzogJ0VOJyxcblxuICAvKipcbiAgICogVGhlIG1haW4gQ1NTIHNlbGVjdG9yIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSBmb3JtIGZvciB0aGUgY29tcG9uZW50LlxuICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICovXG4gICdmb3JtU2VsZWN0b3InOiAnZm9ybScsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIGUtbWFpbCBhZGRyZXNzIGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnZW1haWxMYWJlbCc6ICdFbWFpbCBBZGRyZXNzOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG5hbWUgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICduYW1lTGFiZWwnOiAnTmFtZTonLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBxdWVzdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ3F1ZXN0aW9uTGFiZWwnOiAnV2hhdCBpcyB5b3VyIHF1ZXN0aW9uPycsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFByaXZhY3kgUG9saWN5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncHJpdmFjeVBvbGljeUxhYmVsJzogJ0kgYWdyZWUgdG8gb3VyIFByaXZhY3kgUG9saWN5OicsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBTdWJtaXQgYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnYnV0dG9uTGFiZWwnOiAnU3VibWl0J1xufTtcblxuLyoqXG4gKiBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgaXMgYSBjb21wb25lbnQgdGhhdCBjcmVhdGVzIGEgZm9ybVxuICogdGhhdHMgZGlzcGxheWVkIHdoZW5ldmVyIGEgcXVlcnkgaXMgcnVuLiBJdCBlbmFibGVzIHRoZSB1c2VyXG4gKiB0byBzdWJtaXQgcXVlc3Rpb25zIHRoYXQgdGhleSBjYW50IGZpbmQgdGhlIGFuc3dlciBmb3IuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0NPTkZJRywgY29uZmlnKSwgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgc3RvcmFnZSBtb2RlbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT047XG5cbiAgICAvKipcbiAgICAgKiBOT1RFKGJpbGx5KSBpZiB0aGlzIGlzIGEgcGF0dGVybiB3ZSB3YW50IHRvIGZvbGxvdyBmb3IgY29uZmlndXJhdGlvblxuICAgICAqIHdlIHNob3VsZCBiYWtlIGl0IGludG8gdGhlIGNvcmUgY2xhc3MuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0ZUNvbmZpZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdxdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHVibGljIGludGVyZmFjZSBhbGlhcyBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIHZhbGlkYXRpb25Db25maWcgY29udGFpbnMgYSBidW5jaCBvZiBydWxlc1xuICAgKiB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIGFnaW5zdCBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAqL1xuICB2YWxpZGF0ZUNvbmZpZyAoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5lbnRpdHlJZCA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgdGhpcy5fY29uZmlnLmVudGl0eUlkICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ2BlbnRpdHlJZGAgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgUXVlc3Rpb24gU3VibWlzc2lvbicsXG4gICAgICAgICdRdWVzdGlvblN1Ym1pc3Npb24nKTtcbiAgICB9XG4gIH1cblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgbW91bnRpbmcgdGhlIGNvbXBvbmVudCBpZiB0aGVyZXMgbm8gZGF0YVxuICAgIC8vIE5vdGUsIDEgYmVjYXVzZSBgY29uZmlnYCBpcyBhbHdheXMgcGFydCBvZiB0aGUgc3RhdGUuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGxldCBmb3JtRWwgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9jb25maWcuZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoZm9ybUVsID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQW5hbHl0aWNzKGZvcm1FbCk7XG4gICAgdGhpcy5iaW5kRm9ybVN1Ym1pdChmb3JtRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRBbmFseXRpY3Mgd2lsbCB3aXJlIHVwIERPTSBldmVudCBob29rcyB0byBzZXJ2ZXJzaWRlIHJlcG9ydGluZ1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICovXG4gIGJpbmRBbmFseXRpY3MgKGZvcm1FbCkge1xuICAgIGlmICh0aGlzLmFuYWx5dGljc1JlcG9ydGVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcXVlc3Rpb25UZXh0RWwgPSBET00ucXVlcnkoZm9ybUVsLCAnLmpzLXF1ZXN0aW9uLXRleHQnKTtcbiAgICBET00ub24ocXVlc3Rpb25UZXh0RWwsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KG5ldyBBbmFseXRpY3NFdmVudCgnUVVFU1RJT05fRk9DVVMnKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEZvcm1TdWJtaXQgaGFuZGxlcyBzdWJtaXR0aW5nIHRoZSBxdWVzdGlvbiB0byB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICovXG4gIGJpbmRGb3JtU3VibWl0IChmb3JtRWwpIHtcbiAgICBET00ub24oZm9ybUVsLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIHdlIHByb2JhYmx5IHdhbnQgdG8gZGlzYWJsZSB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZCB0d2ljZVxuICAgICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLnBhcnNlKGZvcm1FbCk7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlUmVxdWlyZWQoZm9ybURhdGEpO1xuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZShuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKGZvcm1EYXRhLCBlcnJvcnMpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb3JlLnN1Ym1pdFF1ZXN0aW9uKHtcbiAgICAgICAgJ2VudGl0eUlkJzogdGhpcy5fY29uZmlnLmVudGl0eUlkLFxuICAgICAgICAncXVlc3Rpb25MYW5ndWFnZSc6IHRoaXMuX2NvbmZpZy5sYW5ndWFnZSxcbiAgICAgICAgJ3NpdGUnOiAnRklSU1RQQVJUWScsXG4gICAgICAgICduYW1lJzogZm9ybURhdGEubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBmb3JtRGF0YS5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogZm9ybURhdGEucXVlc3Rpb25EZXNjcmlwdGlvblxuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAnbmV0d29yayc6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHN1Ym1pdHRpbmcgeW91ciBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBmb3JtLCBhbmQgYnVpbGRzIGEgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgaW5wdXQgbmFtZXNcbiAgICogYW5kIHRleHQgZmllbGRzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcnNlIChmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IERPTS5xdWVyeUFsbChmb3JtRWwsICcuanMtcXVlc3Rpb24tZmllbGQnKTtcbiAgICBpZiAoIWlucHV0RmllbGRzIHx8IGlucHV0RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gaW5wdXRGaWVsZHNbaV0udmFsdWU7XG4gICAgICBpZiAoaW5wdXRGaWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgb2JqW2lucHV0RmllbGRzW2ldLm5hbWVdID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSByZXF1aXJlZCBmaWVsZHMgKG9yIHJ1bGVzKSBmb3IgdGhlIGZvcm0gZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdHxib29sZWFufSBlcnJvcnMgb2JqZWN0IGlmIGFueSBlcnJvcnMgZm91bmRcbiAgICovXG4gIHZhbGlkYXRlUmVxdWlyZWQgKGZvcm1EYXRhKSB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEuZW1haWwgfHwgdHlwZW9mIGZvcm1EYXRhLmVtYWlsICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydlbWFpbCddID0gJ01pc3NpbmcgZW1haWwgYWRkcmVzcyEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucHJpdmFjeVBvbGljeSB8fCBmb3JtRGF0YS5wcml2YWN5UG9saWN5ICE9PSB0cnVlKSB7XG4gICAgICBlcnJvcnNbJ3ByaXZhY3lQb2xpY3knXSA9ICdBcHByb3Zpbmcgb3VyIHByaXZhY3kgcG9saWN5IHRlcm1zIGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5xdWVzdGlvblRleHQgfHwgdHlwZW9mIGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1sncXVlc3Rpb25UZXh0J10gPSAnUXVlc3Rpb24gdGV4dCBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdJY29uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZy5uYW1lXG4gICAqIEBwYXJhbSBjb25maWcucGF0aFxuICAgKiBAcGFyYW0gY29uZmlnLmNvbXBsZXhDb250ZW50c1xuICAgKiBAcGFyYW0gY29uZmlnLnZpZXdCb3hcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogdGhlIG5hbWUgb2YgdGhlIGljb25cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAvKipcbiAgICAgKiBhbiBzdmcgcGF0aCBkZWZpbml0aW9uXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG4gICAgLyoqXG4gICAgICogaWYgbm90IHVzaW5nIGEgcGF0aCwgYSB0aGUgbWFya3VwIGZvciBhIGNvbXBsZXggU1ZHXG4gICAgICovXG4gICAgdGhpcy5jb21wbGV4Q29udGVudHMgPSBjb25maWcuY29tcGxleENvbnRlbnRzO1xuICAgIC8qKlxuICAgICAqIHRoZSB2aWV3IGJveCBkZWZpbml0aW9uLCBkZWZhdWx0cyB0byAyNHgyNFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy52aWV3Qm94ID0gY29uZmlnLnZpZXdCb3ggfHwgJzAgMCAyNCAyNCc7XG4gICAgLyoqXG4gICAgICogYWN0dWFsIGNvbnRlbnRzIHVzZWRcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5wYXRoRGVmaW5pdGlvbigpO1xuICB9XG5cbiAgcGF0aERlZmluaXRpb24gKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXhDb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxleENvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7dGhpcy5wYXRofVwiPjwvcGF0aD5gO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHN2ZyBtYXJrdXBcbiAgICovXG4gIG1hcmt1cCAoKSB7XG4gICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCIke3RoaXMudmlld0JveH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHt0aGlzLmNvbnRlbnRzfTwvc3ZnPmA7XG4gIH1cbn1cbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0aHVtYicsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjInLFxuICBwYXRoOiAnTTE1LjI3MyAxSDUuNDU1Yy0uOTA2IDAtMS42OC41NS0yLjAwOCAxLjM0MkwuMTUzIDEwLjA5N0EyLjE5IDIuMTkgMCAwMDAgMTAuOXYyLjJjMCAxLjIxLjk4MiAyLjIgMi4xODIgMi4yaDYuODgzTDguMDMgMjAuMzI3bC0uMDMzLjM1MmMwIC40NTEuMTg2Ljg2OS40OCAxLjE2Nkw5LjYzMyAyM2w3LjE3OC03LjI0OWEyLjE2IDIuMTYgMCAwMC42NDQtMS41NTF2LTExYzAtMS4yMS0uOTgyLTIuMi0yLjE4Mi0yLjJ6bTAgMTMuMmwtNC43MzUgNC43NzRMMTEuNzUgMTMuMUgyLjE4MnYtMi4ybDMuMjczLTcuN2g5LjgxOHYxMXpNMTkuNjM2IDFIMjR2MTMuMmgtNC4zNjRWMXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgcGF0aDogJ00xNC42MDYgOS41Yy0uNjcxLS41MTUtMS41OTEtLjgzMy0yLjYwNi0uODMzIDEuMDE1IDAgMS45MzUuMzE4IDIuNjA2LjgzM3ptLTcuOTg1IDBIMS42NTVBMS42NiAxLjY2IDAgMDEwIDcuODMzVjMuNjY3QzAgMi43NDcuNzQxIDIgMS42NTUgMmgyMC42OUExLjY2IDEuNjYgMCAwMTI0IDMuNjY3djQuMTY2QTEuNjYgMS42NiAwIDAxMjIuMzQ1IDkuNWgtNC45NjZWMjJINi42MjFWOS41aDIuNzczSDYuNjJ6bTEwLjc1OC0xLjY2N2g0Ljk2NlYzLjY2N0gxLjY1NXY0LjE2Nmg0Ljk2NnYtMi41aDEwLjc1OHYyLjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGFudGhlb24nLFxuICBwYXRoOiAnTTkuOTQ3IDE2LjU5OGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjVjLS4wNy0uMDQzLS4xMDYtLjA5My0uMTA2LS4xNUw5LjE1IDcuODJ2LS4xNWMwLS4wNDQuMDI4LS4wOC4wODQtLjEwOWEuNjkxLjY5MSAwIDAxLjEwNS0uMDg2LjI1NC4yNTQgMCAwMS4xNDYtLjA0M0gxMy42Yy4wNTYgMCAuMTA0LjAxNS4xNDYuMDQzLjA0Mi4wMy4wOTEuMDU4LjE0Ny4wODZhLjI3MS4yNzEgMCAwMS4wNjMuMTA4Yy4wMTQuMDQzLjAwNy4wOTMtLjAyLjE1bC0uNDIgMS4zNzhhLjM3NC4zNzQgMCAwMS0uMTQ3LjE1LjM3LjM3IDAgMDEtLjE5LjA2NWgtLjI1MXY3LjE4NmguMjUyYS4zNy4zNyAwIDAxLjE4OS4wNjVjLjA3LjA0My4xMTkuMDkzLjE0Ny4xNWwuNDIgMS4zNzhjLjAyNy4wMjguMDM0LjA3MS4wMi4xMjlhLjI3NS4yNzUgMCAwMS0uMDYzLjEyOSAxLjM2NCAxLjM2NCAwIDAwLS4xNDcuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M0g5LjQ4NWEuMjU0LjI1NCAwIDAxLS4xNDYtLjA0My42OTEuNjkxIDAgMDEtLjEwNS0uMDg2Yy0uMDU2LS4wMjktLjA4NC0uMDcyLS4wODQtLjEzdi0uMTI4bC40NjEtMS4zNzdjMC0uMDU4LjAzNS0uMTA4LjEwNS0uMTUxYS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bTUuNzkyIDBoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1LjM3NC4zNzQgMCAwMS0uMTQ4LS4xNWwtLjQyLTEuMzc3Yy0uMDI3LS4wMjktLjAzNC0uMDcyLS4wMi0uMTNhLjI3NS4yNzUgMCAwMS4wNjMtLjEyOWMuMDU2LS4wMjguMTA1LS4wNTcuMTQ2LS4wODZhLjI1NC4yNTQgMCAwMS4xNDctLjA0M2g0LjExNGMuMDU1IDAgLjEwNC4wMTUuMTQ2LjA0M2EuNjkxLjY5MSAwIDAxLjEwNS4wODZjLjA1Ni4wMy4wODQuMDcyLjA4NC4xM3YuMTI5bC0uNDIgMS4zNzdhLjM3NC4zNzQgMCAwMS0uMTQ2LjE1LjQzMi40MzIgMCAwMS0uMjMxLjA2NWgtLjIxdjcuMTg2aC4yMWEuNDMuNDMgMCAwMS4yMy4wNjVjLjA3LjA0My4xMi4wOTMuMTQ4LjE1bC40MiAxLjM3OHYuMTVjMCAuMDQzLS4wMjkuMDgtLjA4NS4xMDhhLjY5MS42OTEgMCAwMS0uMTA1LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNoLTQuMTE0YS4yNTQuMjU0IDAgMDEtLjE0Ny0uMDQzIDEuMzY0IDEuMzY0IDAgMDAtLjE0Ni0uMDg2LjI3MS4yNzEgMCAwMS0uMDYzLS4xMDhjLS4wMTQtLjA0My0uMDA3LS4wOTMuMDItLjE1bC40Mi0xLjM3N2EuMzc0LjM3NCAwIDAxLjE0Ny0uMTUxLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptLTExLjc5NC0uMDg2aC4yNTJWOS40OThoLS4yNTJhLjMzNC4zMzQgMCAwMS0uMjEtLjA2NS4zODYuMzg2IDAgMDEtLjEyNi0uMTkzbC0uNDItMS4zNzdhLjI0OC4yNDggMCAwMS0uMDItLjE3Mi44NTQuODU0IDAgMDEuMDYzLS4xNzNjLjAyOC0uMDU3LjA3LS4xLjEyNi0uMTI5YS4zNjUuMzY1IDAgMDEuMTY4LS4wNDNoNC4wN2MuMDU3IDAgLjExMy4wMTUuMTY5LjA0M2EuMjc4LjI3OCAwIDAxLjEyNi4xMy44NTQuODU0IDAgMDEuMDYyLjE3Mi4yNDguMjQ4IDAgMDEtLjAyLjE3MmwtLjQyIDEuMzc3YS4zODYuMzg2IDAgMDEtLjEyNi4xOTMuMzM0LjMzNCAwIDAxLS4yMS4wNjVoLS4yMXY3LjAxNGguMjFjLjA4NCAwIC4xNTQuMDI5LjIxLjA4NmEuNjczLjY3MyAwIDAxLjEyNi4xNzJsLjQyIDEuMzc4YS4yNDguMjQ4IDAgMDEuMDIuMTcyLjg1NC44NTQgMCAwMS0uMDYyLjE3Mi4yNzguMjc4IDAgMDEtLjEyNi4xMjkuMzY1LjM2NSAwIDAxLS4xNjguMDQzSDMuNTI2YS4zNjUuMzY1IDAgMDEtLjE2OC0uMDQzLjI3OC4yNzggMCAwMS0uMTI2LS4xMy44NTQuODU0IDAgMDEtLjA2My0uMTcxLjI0OC4yNDggMCAwMS4wMi0uMTcybC40Mi0xLjM3OGEuNjczLjY3MyAwIDAxLjEyNi0uMTcyLjI4MS4yODEgMCAwMS4yMS0uMDg2ek0xLjc2MyA2LjY1OGEuNzE3LjcxNyAwIDAxLS41MDQtLjE5NC42NDQuNjQ0IDAgMDEtLjIxLS40OTV2LS40M2EuNzMuNzMgMCAwMS4xMDUtLjM4Ny42OC42OCAwIDAxLjI3My0uMjU5QzQuMzA5IDMuNDAyIDYuNTQgMi4yNzYgOC4xMjEgMS41MTUgOS43MDIuNzU1IDEwLjQ5My4zNjEgMTAuNDkzLjMzMmMuNTMxLS4yNTguOTcyLS4zNjYgMS4zMjItLjMyMy4zNS4wNDMuNzM0LjE2NSAxLjE1NC4zNjZsOC4zMSA0LjUxOGMuMTQuMDU4LjI0NS4xNDQuMzE1LjI1OWEuNzMuNzMgMCAwMS4xMDUuMzg3di40M2MwIC4yMDEtLjA3LjM2Ni0uMjEuNDk1YS43MTcuNzE3IDAgMDEtLjUwNC4xOTRIMS43NjN6bS0uNzE0IDEzLjM0YS41NC41NCAwIDAxLjE2OC0uMzg3LjUxNi41MTYgMCAwMS4zNzgtLjE3MmgxOS42NDJjLjE2OCAwIC4zMDguMDU3LjQyLjE3MmEuNTQxLjU0MSAwIDAxLjE2OC4zODd2LjgxOGEuNTIyLjUyMiAwIDAxLS4xNjguNDA4LjYwNS42MDUgMCAwMS0uNDIuMTUxSDEuNTk1YS41NTEuNTUxIDAgMDEtLjM3OC0uMTUuNTIyLjUyMiAwIDAxLS4xNjgtLjQxdi0uODE3em0yMS40MDUgMi4wMjJjLjE0IDAgLjI2Ni4wNTguMzc4LjE3M2EuNTkyLjU5MiAwIDAxLjE2OC40M3YuODE4YS41NDEuNTQxIDAgMDEtLjE2OC4zODcuNTE2LjUxNiAwIDAxLS4zNzguMTcyTC41NDYgMjMuOTU3YS41MTYuNTE2IDAgMDEtLjM3OC0uMTcyLjU0MS41NDEgMCAwMS0uMTY4LS4zODd2LS44MThhLjU5LjU5IDAgMDEuMTY4LS40My41MTYuNTE2IDAgMDEuMzc4LS4xNzNsMjEuOTA4LjA0M3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtaWMnLFxuICBwYXRoOiAnTTEyIDE1YzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDZjMC0xLjY2LTEuMzQtMy0zLTNTOSA0LjM0IDkgNnY2YzAgMS42NiAxLjM0IDMgMyAzem01LjMtM2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTUgNi43IDEySDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjJoMnYtMy4yOGMzLjI4LS40OCA2LTMuMyA2LTYuNzJoLTEuN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkaXJlY3Rpb25zJyxcbiAgcGF0aDogJ00yMy42NDkgMTEuMTU0TDEyLjg0Ni4zNWExLjE5NSAxLjE5NSAwIDAwLTEuNjkyIDBMLjM1IDExLjE1NGExLjE5NSAxLjE5NSAwIDAwMCAxLjY5MkwxMS4xNTQgMjMuNjVhMS4xOTUgMS4xOTUgMCAwMDEuNjkyIDBMMjMuNjUgMTIuODQ2Yy40NjgtLjQ1Ni40NjgtMS4yMTIgMC0xLjY5MnptLTkuMjU0IDMuODUzdi0zLjAwMUg5LjU5M3YzLjZoLTIuNHYtNC44YzAtLjY2LjU0LTEuMiAxLjItMS4yaDYuMDAyVjYuNjA0bDQuMiA0LjItNC4yIDQuMjAyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGVuZGFyJyxcbiAgcGF0aDogJ00xOC4xMTEgMTMuMkgxMnY2aDYuMTExdi02ek0xNi44OSAwdjIuNEg3LjExVjBINC42Njd2Mi40SDMuNDQ0Yy0xLjM1NiAwLTIuNDMyIDEuMDgtMi40MzIgMi40TDEgMjEuNkMxIDIyLjkyIDIuMDg4IDI0IDMuNDQ0IDI0aDE3LjExMkMyMS45IDI0IDIzIDIyLjkyIDIzIDIxLjZWNC44YzAtMS4zMi0xLjEtMi40LTIuNDQ0LTIuNGgtMS4yMjNWMEgxNi44OXptMy42NjcgMjEuNkgzLjQ0NFY4LjRoMTcuMTEydjEzLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsbG91dCcsXG4gIHBhdGg6ICdNMjEuOTkgNGMwLTEuMS0uODktMi0xLjk5LTJINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNGw0IDQtLjAxLTE4eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2luZm8nLFxuICBwYXRoOiAnTTEyIDguNEExLjIgMS4yIDAgMTAxMiA2YTEuMiAxLjIgMCAwMDAgMi40ek0xMiAwYzYuNjI0IDAgMTIgNS4zNzYgMTIgMTJzLTUuMzc2IDEyLTEyIDEyUzAgMTguNjI0IDAgMTIgNS4zNzYgMCAxMiAwem0wIDE4Yy42NiAwIDEuMi0uNTQgMS4yLTEuMlYxMmMwLS42Ni0uNTQtMS4yLTEuMi0xLjItLjY2IDAtMS4yLjU0LTEuMiAxLjJ2NC44YzAgLjY2LjU0IDEuMiAxLjIgMS4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2JyaWVmY2FzZScsXG4gIHBhdGg6ICdNMjAgN2gtNFY1YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAyMGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY5YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNWg0djJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAna2Fib2InLFxuICB2aWV3Qm94OiAnMCAwIDMgMTEnLFxuICBjb21wbGV4Q29udGVudHM6IGA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjUuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiOS41XCIgcj1cIjEuNVwiLz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwZXJzb24nLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ005IDljMi40ODYgMCA0LjUtMi4wMTQgNC41LTQuNVMxMS40ODYgMCA5IDBhNC40OTkgNC40OTkgMCAwMC00LjUgNC41QzQuNSA2Ljk4NiA2LjUxNCA5IDkgOXptMCAyLjI1Yy0zLjAwNCAwLTkgMS41MDgtOSA0LjV2MS4xMjVDMCAxNy40OTQuNTA2IDE4IDEuMTI1IDE4aDE1Ljc1Yy42MTkgMCAxLjEyNS0uNTA2IDEuMTI1LTEuMTI1VjE1Ljc1YzAtMi45OTItNS45OTYtNC41LTktNC41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21hZ25pZnlpbmdfZ2xhc3MnLFxuICBwYXRoOiAnTTE2LjEyNCAxMy4wNTFhNS4xNTQgNS4xNTQgMCAxMTAtMTAuMzA4IDUuMTU0IDUuMTU0IDAgMDEwIDEwLjMwOE0xNi4xMTQgMGE3Ljg4NiA3Ljg4NiAwIDAwLTYuNDYgMTIuNDA3TDAgMjIuMDYgMS45NCAyNGw5LjY1My05LjY1M0E3Ljg4NiA3Ljg4NiAwIDEwMTYuMTEzIDAnXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdvZmZpY2UnLFxuICBwYXRoOiAnTTEyIDdWM0gydjE4aDIwVjdIMTJ6TTYgMTlINHYtMmgydjJ6bTAtNEg0di0yaDJ2MnptMC00SDRWOWgydjJ6bTAtNEg0VjVoMnYyem00IDEySDh2LTJoMnYyem0wLTRIOHYtMmgydjJ6bTAtNEg4VjloMnYyem0wLTRIOFY1aDJ2MnptMTAgMTJoLTh2LTJoMnYtMmgtMnYtMmgydi0yaC0yVjloOHYxMHptLTItOGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGluaycsXG4gIHBhdGg6ICdNMi4yOCAxMkEzLjcyMyAzLjcyMyAwIDAxNiA4LjI4aDQuOFY2SDZjLTMuMzEyIDAtNiAyLjY4OC02IDZzMi42ODggNiA2IDZoNC44di0yLjI4SDZBMy43MjMgMy43MjMgMCAwMTIuMjggMTJ6bTQuOTIgMS4yaDkuNnYtMi40SDcuMnYyLjR6TTE4IDZoLTQuOHYyLjI4SDE4QTMuNzIzIDMuNzIzIDAgMDEyMS43MiAxMiAzLjcyMyAzLjcyMyAwIDAxMTggMTUuNzJoLTQuOFYxOEgxOGMzLjMxMiAwIDYtMi42ODggNi02cy0yLjY4OC02LTYtNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd3aW5kb3cnLFxuICBwYXRoOiAnTTMgMTNoOFYzSDN2MTB6bTAgOGg4di02SDN2NnptMTAgMGg4VjExaC04djEwem0wLTE4djZoOFYzaC04eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3Bob25lJyxcbiAgcGF0aDogJ000LjgyNyAxMC4zODdhMjAuMTk4IDIwLjE5OCAwIDAwOC43ODYgOC43ODZsMi45MzQtMi45MzNjLjM2LS4zNi44OTMtLjQ4IDEuMzYtLjMyYTE1LjIxIDE1LjIxIDAgMDA0Ljc2Ljc2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzdjQuNjU0QzI0IDIzLjQgMjMuNCAyNCAyMi42NjcgMjQgMTAuMTQ3IDI0IDAgMTMuODUzIDAgMS4zMzMgMCAuNi42IDAgMS4zMzMgMEg2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzIDAgMS42NjcuMjY3IDMuMjY3Ljc2IDQuNzYuMTQ3LjQ2Ny4wNC45ODctLjMzMyAxLjM2bC0yLjkzMyAyLjkzNHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0YWcnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ00xNy40NjkgOC42MjJsLTguMS04LjFBMS43ODkgMS43ODkgMCAwMDguMSAwSDEuOEMuODEgMCAwIC44MSAwIDEuOHY2LjNjMCAuNDk1LjE5OC45NDUuNTMxIDEuMjc4bDguMSA4LjFjLjMyNC4zMjQuNzc0LjUyMiAxLjI2OS41MjJhMS43NiAxLjc2IDAgMDAxLjI2OS0uNTMxbDYuMy02LjNBMS43NiAxLjc2IDAgMDAxOCA5LjljMC0uNDk1LS4yMDctLjk1NC0uNTMxLTEuMjc4ek0zLjE1IDQuNWMtLjc0NyAwLTEuMzUtLjYwMy0xLjM1LTEuMzUgMC0uNzQ3LjYwMy0xLjM1IDEuMzUtMS4zNS43NDcgMCAxLjM1LjYwMyAxLjM1IDEuMzUgMCAuNzQ3LS42MDMgMS4zNS0xLjM1IDEuMzV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZG9jdW1lbnQnLFxuICBwYXRoOiAnTTQgNkgydjE0YzAgMS4xLjkgMiAyIDJoMTR2LTJINFY2em0xNi00SDhjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTEgOUg5VjloMTB2MnptLTQgNEg5di0yaDZ2MnptNC04SDlWNWgxMHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NoZXZyb24nLFxuICB2aWV3Qm94OiAnMCAwIDcgOScsXG4gIGNvbXBsZXhDb250ZW50czogYDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTgpXCI+PHBhdGggZD1cIm0yLjY0MTcwMDQgOC0xLjE0MTcwMDQgMS4wNTc1IDMuNzA4NTAyMDIgMy40NDI1LTMuNzA4NTAyMDIgMy40NDI1IDEuMTQxNzAwNCAxLjA1NzUgNC44NTgyOTk2LTQuNXpcIi8+PC9nPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3N1cHBvcnQnLFxuICBwYXRoOiAnTTEyLjUgMkM3LjgxIDIgNCA1LjgxIDQgMTAuNWMwIDQuNjkgMy44MSA4LjUgOC41IDguNWguNXYzYzQuODYtMi4zNCA4LTcgOC0xMS41QzIxIDUuODEgMTcuMTkgMiAxMi41IDJ6bTEgMTQuNWgtMnYtMmgydjJ6bTAtMy41aC0yYzAtMy4yNSAzLTMgMy01IDAtMS4xLS45LTItMi0ycy0yIC45LTIgMmgtMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgMi41LTMgMi43NS0zIDV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAneWV4dCcsXG4gIHZpZXdCb3g6ICcwIDAgMzAgMzAnLFxuICBwYXRoOiAnTTI1LjUxNyAyOC4xNDJ2LjA5NWgtLjIwNHYuOTA1aC0uMDY2di0uOTA1aC0uMTk3di0uMDk1aC40Njd6bS42NjcgMGguMDY2djFoLS4wNjZ2LS44MjVsLS4yNC41OTVoLS4wMTNsLS4yNC0uNTk1di44MjVoLS4wNjZ2LTFoLjA2NmwuMjQ3LjYxLjI0Ni0uNjF6TTE1IDI4LjhjNy42MjIgMCAxMy44LTYuMTc4IDEzLjgtMTMuOCAwLTcuNjIyLTYuMTc4LTEzLjgtMTMuOC0xMy44QzcuMzc4IDEuMiAxLjIgNy4zNzggMS4yIDE1YzAgNy42MjIgNi4xNzggMTMuOCAxMy44IDEzLjh6TTE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTVDMCA2LjcxNiA2LjcxNiAwIDE1IDB6bS40NSAxNi42NXYtMS4yaDYuNnYxLjJoLTIuN3Y1LjRoLTEuMnYtNS40aC0yLjd6bS0xLjU5OS0xLjM1bC44NDkuODQ5LTIuNjAxIDIuNjAxIDIuNjAxIDIuNjAxLS44NDkuODQ5LTIuNjAxLTIuNjAxTDguNjQ5IDIyLjJsLS44NDktLjg0OSAyLjYwMS0yLjYwMUw3LjggMTYuMTQ5bC44NDktLjg0OSAyLjYwMSAyLjYwMSAyLjYwMS0yLjYwMXpNMTguNjc1IDlhMi4xNzUgMi4xNzUgMCAwMC0xLjg0NyAzLjMyM2wyLjk5NS0yLjk5NUEyLjE2MyAyLjE2MyAwIDAwMTguNjc1IDl6bTAgNS41NWEzLjM3NSAzLjM3NSAwIDExMi44MzMtNS4yMDlsLTMuNzg5IDMuNzg4YTIuMTc1IDIuMTc1IDAgMDAzLjEzLTEuOTU0aDEuMjAxYTMuMzc1IDMuMzc1IDAgMDEtMy4zNzUgMy4zNzV6bS03LjQyNS0zLjczNEwxMy43OCA3LjhsLjkyLjc3MS0yLjg1IDMuMzk3djIuNTgyaC0xLjJ2LTIuNTgyTDcuOCA4LjU3bC45Mi0uNzcxIDIuNTMgMy4wMTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGluJyxcbiAgdmlld0JveDogJzAgMCAxMyAxOCcsXG4gIHBhdGg6ICdtOS4zNzUgMGMtMy41MjQ0NjQyOSAwLTYuMzc1IDIuODE3LTYuMzc1IDYuMyAwIDQuNzI1IDYuMzc1IDExLjcgNi4zNzUgMTEuN3M2LjM3NS02Ljk3NSA2LjM3NS0xMS43YzAtMy40ODMtMi44NTA1MzU3LTYuMy02LjM3NS02LjN6bS4wMDAwMDAxOCA4LjU1MDAwMDA3Yy0xLjI1Njc4NTc2IDAtMi4yNzY3ODU3OS0xLjAwOC0yLjI3Njc4NTc5LTIuMjVzMS4wMjAwMDAwMy0yLjI1IDIuMjc2Nzg1NzktMi4yNWMxLjI1Njc4NTcyIDAgMi4yNzY3ODU4MiAxLjAwOCAyLjI3Njc4NTgyIDIuMjVzLTEuMDIwMDAwMSAyLjI1LTIuMjc2Nzg1ODIgMi4yNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdnZWFyJyxcbiAgcGF0aDogJ00xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmEuMzUzLjM1MyAwIDAxLjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmEuMzUzLjM1MyAwIDAxLS4wOC0uNDVsMS40LTIuNDJjLjA5LS4xNS4yNy0uMjEuNDMtLjE1bDEuNzQuN2MuMzYtLjI4Ljc2LS41MSAxLjE4LS42OWwuMjYtMS44NWMuMDMtLjE3LjE4LS4zLjM1LS4zaDIuOGMuMTcgMCAuMzIuMTMuMzUuMjlsLjI2IDEuODVjLjQzLjE4LjgyLjQxIDEuMTguNjlsMS43NC0uN2MuMTYtLjA2LjM0IDAgLjQzLjE1bDEuNCAyLjQyYy4wOS4xNS4wNS4zNC0uMDguNDVsLTEuNDggMS4xNmMuMDMuMjMuMDUuNDYuMDUuNjl6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGlnaHRfYnVsYicsXG4gIHZpZXdCb3g6ICcwIDAgMzIgMzUnLFxuICBwYXRoOiAnTTExLjU4NSAzMS4wNTZsOC4zOC0uNDkzdi0uOTg2bC04LjM4LjQ5M3pNMTEuNTg1IDMzLjAyOEwxNS43NzUgMzVsNC4xOS0xLjk3MlYzMS41NWwtOC4zOC40OTN2Ljk4NnptNi45MjYtLjQwN2wtMi43MzYgMS4yOS0yLjEzLTEuMDA0IDQuODY2LS4yODZ6TTE1Ljc3NSA3LjM5NGMtNC42MyAwLTguMzggMy4yMDUtOC4zOCA4LjM4IDAgNS4xNzcgNC4xOSA2LjkwMiA0LjE5IDEyLjgxOHYuNDkzbDguMzgtLjQ5M2MwLTUuOTE2IDQuMTktOC4xODggNC4xOS0xMi44MTdhOC4zOCA4LjM4IDAgMDAtOC4zOC04LjM4em01LjYxNyAxMy40OGMtMS4wMjUgMS44MzctMi4xNzQgMy44OTItMi4zODEgNi43ODZsLTYuNDQuMzhjLS4xMjktMy4wMS0xLjI5LTUuMDIxLTIuMzItNi44MDgtLjQ5My0uOC0uOTI4LTEuNjM2LTEuMjk5LTIuNWgxMy41NTZjLS4zMjUuNzA4LS43MDQgMS40MDMtMS4xMTYgMi4xNDJ6bTEuNDc5LTMuMTI4SDguNjI3YTcuNzkzIDcuNzkzIDAgMDEtLjI0Ny0xLjk3MWMwLTQuMzUzIDMuMDQyLTcuMzk1IDcuMzk1LTcuMzk1YTcuMzk0IDcuMzk0IDAgMDE3LjM5NCA3LjM5NSA2LjczOSA2LjczOSAwIDAxLS4zIDEuOTcxaC4wMDJ6TTI2LjYyIDE1LjI4Mmg0LjkzdjFoLTQuOTN6TTIzLjA5NCA3Ljc1NmwyLjA5MS0yLjA5MS42OTguNjk3LTIuMDkyIDIuMDkyek0xNS4yODIgMGgxdjQuOTNoLTF6TTUuNjY2IDYuMzYybC42OTctLjY5NyAyLjA5MSAyLjA5MS0uNjk3LjY5N3pNMCAxNS4yODJoNC45M3YxSDB6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTguOTkxIDBDNC4wMjMgMCAwIDQuMDMyIDAgOXM0LjAyMyA5IDguOTkxIDlDMTMuOTY4IDE4IDE4IDEzLjk2OCAxOCA5cy00LjAzMi05LTkuMDA5LTl6bTMuODE2IDE0LjRMOSAxMi4xMDUgNS4xOTMgMTQuNGwxLjAwOC00LjMyOS0zLjM1Ny0yLjkwNyA0LjQyOC0uMzc4TDkgMi43bDEuNzI4IDQuMDc3IDQuNDI4LjM3OC0zLjM1NyAyLjkwN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjbG9zZScsXG4gIGNvbXBsZXhDb250ZW50czogYFxuICAgIDxwYXRoIGQ9XCJNNyA4bDkuNzE2IDkuNzE2bTAtOS43MTZMNyAxNy43MTZcIiBcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCIvPlxuICBgXG59KTtcbiIsImltcG9ydCB0aHVtYkljb24gZnJvbSAnLi90aHVtYi5qcyc7XG5pbXBvcnQgcmVjZWlwdEljb24gZnJvbSAnLi9yZWNlaXB0LmpzJztcbmltcG9ydCBwYW50aGVvbkljb24gZnJvbSAnLi9wYW50aGVvbi5qcyc7XG5pbXBvcnQgbWljSWNvbiBmcm9tICcuL21pYy5qcyc7XG5pbXBvcnQgZGlyZWN0aW9uc0ljb24gZnJvbSAnLi9kaXJlY3Rpb25zLmpzJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9jYWxlbmRhci5qcyc7XG5pbXBvcnQgY2FsbG91dEljb24gZnJvbSAnLi9jYWxsb3V0LmpzJztcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IGJyaWVmY2FzZUljb24gZnJvbSAnLi9icmllZmNhc2UuanMnO1xuaW1wb3J0IGthYm9iSWNvbiBmcm9tICcuL2thYm9iLmpzJztcbmltcG9ydCBwZXJzb25JY29uIGZyb20gJy4vcGVyc29uLmpzJztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3NJY29uIGZyb20gJy4vbWFnbmlmeWluZ19nbGFzcy5qcyc7XG5pbXBvcnQgb2ZmaWNlSWNvbiBmcm9tICcuL29mZmljZS5qcyc7XG5pbXBvcnQgbGlua0ljb24gZnJvbSAnLi9saW5rLmpzJztcbmltcG9ydCB3aW5kb3dJY29uIGZyb20gJy4vd2luZG93LmpzJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9waG9uZS5qcyc7XG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuL3RhZy5qcyc7XG5pbXBvcnQgZG9jdW1lbnRJY29uIGZyb20gJy4vZG9jdW1lbnQuanMnO1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJy4vY2hldnJvbi5qcyc7XG5pbXBvcnQgc3VwcG9ydEljb24gZnJvbSAnLi9zdXBwb3J0LmpzJztcbmltcG9ydCB5ZXh0SWNvbiBmcm9tICcuL3lleHQuanMnO1xuaW1wb3J0IHBpbkljb24gZnJvbSAnLi9waW4uanMnO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gJy4vZ2Vhci5qcyc7XG5pbXBvcnQgbGlnaHRCdWxiSWNvbiBmcm9tICcuL2xpZ2h0X2J1bGIuanMnO1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJy4vc3Rhci5qcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5qcyc7XG5cbmNvbnN0IGljb25zQXJyYXkgPSBbXG4gIHRodW1iSWNvbixcbiAgcmVjZWlwdEljb24sXG4gIHBhbnRoZW9uSWNvbixcbiAgbWljSWNvbixcbiAgZGlyZWN0aW9uc0ljb24sXG4gIGNhbGVuZGFySWNvbixcbiAgY2FsbG91dEljb24sXG4gIGluZm9JY29uLFxuICBicmllZmNhc2VJY29uLFxuICBrYWJvYkljb24sXG4gIHBlcnNvbkljb24sXG4gIG1hZ25pZnlpbmdHbGFzc0ljb24sXG4gIG9mZmljZUljb24sXG4gIGxpbmtJY29uLFxuICB3aW5kb3dJY29uLFxuICBwaG9uZUljb24sXG4gIHRhZ0ljb24sXG4gIGRvY3VtZW50SWNvbixcbiAgY2hldnJvbkljb24sXG4gIHN1cHBvcnRJY29uLFxuICB5ZXh0SWNvbixcbiAgcGluSWNvbixcbiAgZ2Vhckljb24sXG4gIGxpZ2h0QnVsYkljb24sXG4gIGNsb3NlXG5dO1xuXG5jb25zdCBJY29ucyA9IHt9O1xuXG5pY29uc0FycmF5LmZvckVhY2goaWNvbiA9PiB7XG4gIEljb25zW2ljb24ubmFtZV0gPSBpY29uLm1hcmt1cCgpO1xufSk7XG5cbkljb25zLmRlZmF1bHQgPSBzdGFySWNvbi5tYXJrdXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKiogQG1vZHVsZSBJY29uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBJY29ucyBmcm9tICcuLi8uLi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogSWNvbkNvbXBvbmVudFxuICAgKiBAcGFyYW0gb3B0c1xuICAgKiBAcGFyYW0gb3B0cy5pY29uTmFtZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5jdXN0b21JY29uIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmljb25Vcmwge3N0cmluZ31cbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogbmFtZSBvZiBhbiBpY29uIGZyb20gdGhlIGRlZmF1bHQgaWNvbiBzZXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaWNvbk5hbWUgPSBvcHRzLmljb25OYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIHRoZSBtYXJrdXAgZm9yIGEgZnVsbHkgY3VzdG9tIGljb25cbiAgICAgKiBAdHlwZSB7KnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VzdG9tSWNvbiA9IG9wdHMuY3VzdG9tSWNvbiB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIHRoZSB1cmwgdG8gYSBjdXN0b20gaW1hZ2UgaWNvblxuICAgICAqIEB0eXBlIHtudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaWNvblVybCA9IG9wdHMuaWNvblVybCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHRlciBmb3IgdGhlIGltYWdlIHBhc3RlZCB0byBoYW5kbGViYXJzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW1hZ2UgKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUljb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbUljb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaWNvblVybCkge1xuICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7dGhpcy5pY29uVXJsfVwiIGFsdD1cIlwiIGNsYXNzPVwiSWNvbi1pbWFnZVwiPmA7XG4gICAgfVxuXG4gICAgaWYgKEljb25zW3RoaXMuaWNvbk5hbWVdKSB7XG4gICAgICByZXR1cm4gSWNvbnNbdGhpcy5pY29uTmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEljb25zLmRlZmF1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnSWNvbkNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2ljb25zL2ljb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIGFsbG93aW5nIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIGRlZmF1bHQgZnVuY3Rpb25hbGl0eSB0byBwcm92aWRlIG5hbWUgYW5kIG1hcmt1cFxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7SWNvbkNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICBuYW1lOiB0aGlzLmljb25OYW1lID8gdGhpcy5pY29uTmFtZSA6ICdjdXN0b20nXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5pbXBvcnQgU3BlbGxDaGVja0NvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zcGVsbGNoZWNrY29tcG9uZW50JztcblxuaW1wb3J0IEZpbHRlckJveENvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyYm94Y29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50JztcbmltcG9ydCBSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuaW1wb3J0IERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZGF0ZXJhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQnO1xuaW1wb3J0IEdlb0xvY2F0aW9uQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgUGFnaW5hdGlvbkNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGFnaW5hdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBmcm9tICcuL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQnO1xuXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2ljb25zL2ljb25jb21wb25lbnQuanMnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX01BTkFHRVIgPSBuZXcgQ29tcG9uZW50TWFuYWdlcigpXG4vLyBDb3JlIENvbXBvbmVudFxuICAucmVnaXN0ZXIoQ29tcG9uZW50KVxuXG4vLyBOYXZpZ2F0aW9uIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKE5hdmlnYXRpb25Db21wb25lbnQpXG5cbi8vIFNlYXJjaCBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihBdXRvQ29tcGxldGVDb21wb25lbnQpXG4gIC5yZWdpc3RlcihTcGVsbENoZWNrQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRHluYW1pY0ZpbHRlcnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihHZW9Mb2NhdGlvbkNvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBhZ2luYXRpb25Db21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpXG5cbi8vIEhlbHBlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihJY29uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IENPTVBPTkVOVF9NQU5BR0VSIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRE9NIH0gZnJvbSAnLi9kb20vZG9tJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi9yZW5kZXJpbmcvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZW1wbGF0ZUxvYWRlciB9IGZyb20gJy4vcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyJztcbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3NlcnZpY2VzL2Vycm9ycmVwb3J0ZXJzZXJ2aWNlJykuZGVmYXVsdH0gRXJyb3JSZXBvcnRlclNlcnZpY2UgKi9cblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIGNvbnNvbGUgYW5kIEFQSVxuICpcbiAqIEBpbXBsZW1lbnRzIHtFcnJvclJlcG9ydGVyU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXBpS2V5IHRvIHVzZSBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXhwZXJpZW5jZUtleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZXhwZXJpZW5jZUtleSA9IGNvbmZpZy5leHBlcmllbmNlS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdXNlZCBmb3IgYXBpIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbiB8fCAnY29uZmlnMS4wJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHByaW50IGVudGlyZSBlcnJvciBvYmplY3RzIHRvIHRoZSBjb25zb2xlIGZvciBpbnNwZWN0aW9uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcmludFZlcmJvc2UgPSBjb25maWcucHJpbnRWZXJib3NlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgcmVwb3J0IHRoZSBlcnJvciB0aGUgc2VydmVyIGZvciBsb2dnaW5nIGFuZCBtb25pdG9yaW5nXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5zZW5kVG9TZXJ2ZXIgPSBjb25maWcuc2VuZFRvU2VydmVyO1xuXG4gICAgLy8gQXR0YWNoIHJlcG9ydGluZyBsaXN0ZW5lcnMgdG8gd2luZG93XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZSA9PiB0aGlzLnJlcG9ydChlLmVycm9yKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGUgPT4gdGhpcy5yZXBvcnQoZS5lcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBwcmV0dHkgcHJpbnRzIHRoZSBlcnJvciB0byB0aGUgY29uc29sZSwgb3B0aW9uYWxseVxuICAgKiBwcmludHMgdGhlIGVudGlyZSBlcnJvciBpZiBgcHJpbnRWZXJib3NlYCBpcyB0cnVlLCBhbmQgc2VuZHMgdGhlXG4gICAqIGVycm9yIHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkIGlmIGBzZW5kVG9TZXJ2ZXJgIGlzIHRydWVcbiAgICogQHBhcmFtIHtBbnN3ZXJzQmFzZUVycm9yfSBlcnIgVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqIEByZXR1cm5zIHtBbnN3ZXJzQmFzZUVycm9yfSBUaGUgcmVwb3J0ZWQgZXJyb3JcbiAgICovXG4gIHJlcG9ydCAoZXJyKSB7XG4gICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgQW5zd2Vyc0Jhc2VFcnJvcikgfHwgZXJyLnJlcG9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyLnJlcG9ydGVkID0gdHJ1ZTtcblxuICAgIHRoaXMucHJpbnRFcnJvcihlcnIpO1xuXG4gICAgaWYgKHRoaXMuc2VuZFRvU2VydmVyKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2Vycm9ycycsXG4gICAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgICAnZXhwZXJpZW5jZVZlcnNpb24nOiB0aGlzLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5leHBlcmllbmNlS2V5XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXF1ZXN0LmdldCgpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcmludHMgdGhlIGdpdmVuIGVycm9yIHRvIHRoZSBicm93c2VyIGNvbnNvbGVcbiAgICogQHBhcmFtIHtBbnN3ZXJzQmFzZUVycm9yfSBlcnIgVGhlIGVycm9yIHRvIGJlIHByaW50ZWRcbiAgICovXG4gIHByaW50RXJyb3IgKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xuICAgIGlmICh0aGlzLnByaW50VmVyYm9zZSkge1xuICAgICAgY29uc29sZS5sb2coeyAuLi5lcnIgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvZXJyb3JyZXBvcnRlcnNlcnZpY2UnKS5kZWZhdWx0fSBFcnJvclJlcG9ydGVyU2VydmljZSAqL1xuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHtFcnJvclJlcG9ydGVyU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUVycm9yUmVwb3J0ZXIge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKiogQG1vZHVsZSBQZXJzaXN0ZW50U3RvcmFnZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBhcmFtcyBtb2RlbFxuICAgICAqIEB0eXBlIHtTZWFyY2hQYXJhbXN9XG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBoaXN0b3J5IGVkaXQgdGltZXIsIGlmIGFueVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBldmVyeSBzdG9yYWdlIHVwZGF0ZVxuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gY29uZmlnLnVwZGF0ZUxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHN0b3JhZ2UgcmVzZXRzXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fcmVzZXRMaXN0ZW5lciA9IGNvbmZpZy5yZXNldExpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fcmVzZXRMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgdGhlIGdpdmVuIGtleS92YWx1ZSBwYWlyIGludG8gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gaW5zZXJ0IHRoZSBkYXRhIGluXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBpbnNlcnRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignU3RvcmFnZSBkYXRhIGtleSBtdXN0IGJlIGEgc3RyaW5nJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3RGF0YSA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgbmV3RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0aGlzLl9wYXJhbXMuc2V0KGtleSwgbmV3RGF0YSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgZ2l2ZW4ga2V5IGZyb20gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIHRoaXMuX3BhcmFtcy5kZWxldGUoa2V5KTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICBfdXBkYXRlSGlzdG9yeSAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpc3RvcnlUaW1lcik7XG4gICAgfVxuXG4gICAgLy8gYmF0Y2ggdXBkYXRlIGNhbGxzIGFjcm9zcyBjb21wb25lbnRzIHRvIGF2b2lkIHVwZGF0aW5nIHRoZSB1cmwgdG9vIG11Y2hcbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYD8ke3RoaXMuX3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgfSxcbiAgICAgIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIHRoZSBnaXZlbiBsaXN0IG9mIGNhbGxiYWNrcyB3aXRoIHRoZSBjdXJyZW50IHN0b3JhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uW119IGxpc3RlbmVycyBUaGUgY2FsbGJhY2tzIHRvIGludm9rZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NhbGxMaXN0ZW5lciAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcih0aGlzLmdldEFsbCgpLCB0aGlzLl9wYXJhbXMudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUga2V5L3ZhbHVlIHBhaXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIGdldEFsbCAoKSB7XG4gICAgY29uc3QgYWxsUGFyYW1zID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMuX3BhcmFtcy5lbnRyaWVzKCkpIHtcbiAgICAgIGFsbFBhcmFtc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWxsUGFyYW1zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBbnN3ZXJzQ29uZmlnRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqIEBtb2R1bGUgU2VhcmNoQ29uZmlnICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXggcmVzdWx0cyBwZXIgc2VhcmNoLlxuICAgICAqIEFsc28gZGVmaW5lcyB0aGUgbnVtYmVyIG9mIHJlc3VsdHMgcGVyIHBhZ2UsIGlmIHBhZ2luYXRpb24gaXMgZW5hYmxlZFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5saW1pdCA9IGNvbmZpZy5saW1pdCB8fCAyMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgdG8gdXNlIGZvciBhbGwgc2VhcmNoZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5kZWZhdWx0SW5pdGlhbFNlYXJjaCA9IGNvbmZpZy5kZWZhdWx0SW5pdGlhbFNlYXJjaDtcblxuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgdmFsaWRhdGUgKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5saW1pdCAhPT0gJ251bWJlcicgfHwgdGhpcy5saW1pdCA8IDEgfHwgdGhpcy5saW1pdCA+IDUwKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbmZpZ0Vycm9yKCdTZWFyY2ggTGltaXQgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUwJywgJ1NlYXJjaENvbmZpZycpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IG5ldyBIaWdobGlnaHRlZFZhbHVlKGRhdGEpLmdldEludmVydGVkKCk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2F1dG9jb21wbGV0ZXNlcnZpY2UnKS5kZWZhdWx0fSBBdXRvQ29tcGxldGVTZXJ2aWNlICovXG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqXG4gKiBAaW1wbGVtZW50cyB7QXV0b0NvbXBsZXRlU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IGNvbmZpZy52ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogY29uZmlnLmJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NlYXJjaF9wYXJhbWV0ZXJzJzogSlNPTi5zdHJpbmdpZnkoY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgY29uZmlnLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2JhcktleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1ZlcnRpY2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBxdWVyeVVuaXZlcnNhbCAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudW5pdmVyc2FsKHJlc3BvbnNlLnJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVW5pdmVyc2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEsIHsgQXV0b0NvbXBsZXRlUmVzdWx0IH0gZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvYXV0b2NvbXBsZXRlc2VydmljZScpLmRlZmF1bHR9IEF1dG9Db21wbGV0ZVNlcnZpY2UgKi9cblxuY29uc3QgdW5pdmVyc2FsT3B0aW9ucyA9IFtcbiAgJ3doYXQgaXMgeWV4dCcsXG4gICd3aG8gaXMgdGhlIGNlbyBvZiB5ZXh0J1xuXTtcblxuY29uc3QgdmVydGljYWxPcHRpb25zID0gW1xuICAnbmVhciBtZScsXG4gICdpbiBuZXcgeW9yaycsXG4gICdhdmFpbGFibGUgbm93J1xuXTtcblxuLyoqXG4gKiBNb2NrQXV0b0NvbXBsZXRlU2VydmljZSBzZXJ2ZXMgYXV0b2NvbXBsZXRlIHF1ZXJpZXMgd2l0aCBtb2NrIGRhdGFcbiAqXG4gKiBAaW1wbGVtZW50cyB7QXV0b0NvbXBsZXRlU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9ja0F1dG9Db21wbGV0ZVNlcnZpY2Uge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlGaWx0ZXIgKGlucHV0LCBjb25maWcpIHtcbiAgICAvLyBUT0RPKGFtdWxsaW5ncyk6IFNpbXVsYXRlIGZpbHRlciBzZWFyY2gsIHdpdGggc2VjdGlvbnNcbiAgICByZXR1cm4gZW1wdHlSZXN1bHRzKCk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIHZlcnRpY2FsS2V5KSB7XG4gICAgcmV0dXJuIGZpbHRlck9wdGlvbnMoaW5wdXQsIHZlcnRpY2FsT3B0aW9uc1xuICAgICAgLm1hcChvcHQgPT4gYCR7dmVydGljYWxLZXl9ICR7b3B0fWApXG4gICAgICAuY29uY2F0KHVuaXZlcnNhbE9wdGlvbnMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBxdWVyeVVuaXZlcnNhbCAoaW5wdXQpIHtcbiAgICByZXR1cm4gZmlsdGVyT3B0aW9ucyhpbnB1dCwgdW5pdmVyc2FsT3B0aW9ucyk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgUXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zIEhhcmRjb2RlZCBhdXRvY29tcGxldGUgb3B0aW9uc1xuICogQHJldHVybnMge1Byb21pc2U8QXV0b0NvbXBsZXRlRGF0YT59XG4gKi9cbmZ1bmN0aW9uIGZpbHRlck9wdGlvbnMgKGlucHV0LCBvcHRpb25zKSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZW1wdHlSZXN1bHRzKCk7XG4gIH1cblxuICBjb25zdCBsb3dlcmNhc2UgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCByZXN1bHRzID0gb3B0aW9uc1xuICAgIC5maWx0ZXIob3B0ID0+IG9wdC5pbmNsdWRlcyhsb3dlcmNhc2UpKVxuICAgIC5tYXAob3B0ID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQoe1xuICAgICAgdmFsdWU6IG9wdCxcbiAgICAgIG1hdGNoZWRTdWJzdHJpbmdzOiBbe1xuICAgICAgICBvZmZzZXQ6IG9wdC5pbmRleE9mKGxvd2VyY2FzZSksXG4gICAgICAgIGxlbmd0aDogbG93ZXJjYXNlLmxlbmd0aFxuICAgICAgfV1cbiAgICB9KSk7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEF1dG9Db21wbGV0ZURhdGEoe1xuICAgIHNlY3Rpb25zOiBbeyByZXN1bHRzIH1dLFxuICAgIHF1ZXJ5SWQ6IHJhbmRvbVN0cmluZygpXG4gIH0pKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBdXRvQ29tcGxldGVEYXRhPn1cbiAqL1xuZnVuY3Rpb24gZW1wdHlSZXN1bHRzICgpIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQXV0b0NvbXBsZXRlRGF0YSh7XG4gICAgc2VjdGlvbnM6IFt7fV0sXG4gICAgcXVlcnlJZDogcmFuZG9tU3RyaW5nKClcbiAgfSkpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbVN0cmluZyAoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvbkFuc3dlckFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3F1ZXN0aW9uYW5zd2Vyc2VydmljZScpLmRlZmF1bHR9IFF1ZXN0aW9uQW5zd2VyU2VydmljZSAqL1xuXG4vKipcbiAqIFF1ZXN0aW9uQW5zd2VyQXBpIHN1Ym1pdHMgcXVlc3Rpb25zIHZpYSB0aGUgUSZBIFJFU1QgQVBJXG4gKlxuICogQGltcGxlbWVudHMge1F1ZXN0aW9uQW5zd2VyU2VydmljZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25BbnN3ZXJBcGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1F1ZXN0aW9uQW5zd2VyQXBpJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3VibWl0UXVlc3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9xdWVzdGlvbnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2VudGl0eUlkJzogcXVlc3Rpb24uZW50aXR5SWQsXG4gICAgICAgICdzaXRlJzogcXVlc3Rpb24uc2l0ZSxcbiAgICAgICAgJ25hbWUnOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICAnZW1haWwnOiBxdWVzdGlvbi5lbWFpbCxcbiAgICAgICAgJ3F1ZXN0aW9uVGV4dCc6IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCxcbiAgICAgICAgJ3F1ZXN0aW9uRGVzY3JpcHRpb24nOiBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uLFxuICAgICAgICAncXVlc3Rpb25MYW5ndWFnZSc6IHF1ZXN0aW9uLnF1ZXN0aW9uTGFuZ3VhZ2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBvc3QoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKFxuICAgICAgICAgICdRdWVzdGlvbiBzdWJtaXQgZmFpbGVkJyxcbiAgICAgICAgICAnUXVlc3Rpb25BbnN3ZXJBcGknLFxuICAgICAgICAgIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNb2NrUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlICovXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9zZXJ2aWNlcy9xdWVzdGlvbmFuc3dlcnNlcnZpY2UnKS5kZWZhdWx0fSBRdWVzdGlvbkFuc3dlclNlcnZpY2UgKi9cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7UXVlc3Rpb25BbnN3ZXJTZXJ2aWNlfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2NrUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlIHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIC8vIFRPRE8oYW11bGxpbmdzKTogTWFrZSBhY3R1YWwgcmVzcG9uc2Ugb2JqZWN0IG9uY2Ugd2UncmUgdXNpbmcgaXQgZm9yXG4gICAgLy8gc29tZXRoaW5nXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vbW9kZWxzL3NlY3Rpb24nKS5kZWZhdWx0fSBTZWN0aW9uICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vc2VydmljZXMvc2VhcmNoc2VydmljZScpLmRlZmF1bHR9IFNlYXJjaFNlcnZpY2UgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZXN1bHREYXRhXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YVxuICogQHByb3BlcnR5IHtzdHJpbmcgfSBodG1sVGl0bGVcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBSZXN1bHRzTW9kaWZpZXJcbiAqIEBwYXJhbSB7UmVzdWx0RGF0YVtdfSByZXN1bHRzXG4gKiBAcmV0dXJucyB7UmVzdWx0RGF0YVtdfVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1vY2tEYXRhQ29uc3VtZXJcbiAqIEBwYXJhbSB7U2VjdGlvbltdfSBzZWN0aW9uc1xuICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn1cbiAqL1xuXG5jb25zdCBBUkJJVFJBUllfQlVTSU5FU1NfSUQgPSA5MTk4NzE7XG5cbi8qKlxuICogQGltcGxlbWVudHMge1NlYXJjaFNlcnZpY2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vY2tTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtQcm9taXNlPHN0cmluZz59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nZXRNb2NrRGF0YUpzb24gPSBmZXRjaCgnaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvdGVzdGRhdGEvc2VhcmNoL21vY2tkYXRhX3YxLmpzb24nKVxuICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLnRleHQoKSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHsgaW5wdXQsIGZpbHRlciwgZmFjZXRGaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGlkLCBnZW9sb2NhdGlvbiwgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsIHNraXBTcGVsbENoZWNrLCBxdWVyeVRyaWdnZXIgfSkge1xuICAgIHJldHVybiB0aGlzLnVzZU1vY2tEYXRhKHNlY3Rpb25zID0+IHtcbiAgICAgIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGRlbGF5ZWRSZXNwb25zZShjb25zdHJ1Y3RWZXJ0aWNhbFJlc3BvbnNlKHtcbiAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgICBhcHBsaWVkUXVlcnlGaWx0ZXJzOiBbXVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVpdGhlciBmaW5kIGEgc2VjdGlvbiB3aXRoIG1hdGNoaW5nIElELCBvciBwaWNrIG9uZSBhdCByYW5kb21cbiAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvbnMuZmluZChcbiAgICAgICAgdmVydGljYWxNb2R1bGUgPT4gdmVydGljYWxLZXkgPT09IHZlcnRpY2FsTW9kdWxlWyd2ZXJ0aWNhbENvbmZpZ0lkJ11cbiAgICAgICk7XG4gICAgICBpZiAoc2VjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHNlY3Rpb24gPSBzZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzZWN0aW9ucy5sZW5ndGgpXTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZ5UmVzdWx0cyhzZWN0aW9uLCBnZXRSZXN1bHRzRmlsdGVyZXIoaW5wdXQpKTtcbiAgICAgIGlmIChvZmZzZXQgIT0gbnVsbCAmJiBsaW1pdCAhPSBudWxsKSB7XG4gICAgICAgIG1vZGlmeVJlc3VsdHMoc2VjdGlvbiwgZnVuY3Rpb24gbGltaXQgKHJlc3VsdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0cy5zbGljZShvZmZzZXQsIG9mZnNldCArIGxpbWl0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3AgPSBjb25zdHJ1Y3RWZXJ0aWNhbFJlc3BvbnNlKHNlY3Rpb24pO1xuICAgICAgcmV0dXJuIGRlbGF5ZWRSZXNwb25zZShyZXNwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICB1bml2ZXJzYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy51c2VNb2NrRGF0YShzZWN0aW9ucyA9PiB7XG4gICAgICBpZiAocXVlcnlTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBkZWxheWVkUmVzcG9uc2UoY29uc3RydWN0VW5pdmVyc2FsUmVzcG9uc2UoW10pKTtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgbW9kaWZ5UmVzdWx0cyhzZWN0aW9uLCBnZXRSZXN1bHRzRmlsdGVyZXIocXVlcnlTdHJpbmcpKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWN0aW9ucyA9IHNlY3Rpb25zLmZpbHRlcihzZWN0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb24ucmVzdWx0cy5sZW5ndGggPiAwO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3AgPSBjb25zdHJ1Y3RVbml2ZXJzYWxSZXNwb25zZShzZWN0aW9ucyk7XG4gICAgICByZXR1cm4gZGVsYXllZFJlc3BvbnNlKHJlc3ApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TW9ja0RhdGFDb25zdW1lcn0gY29uc3VtZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVzZU1vY2tEYXRhIChjb25zdW1lcikge1xuICAgIHJldHVybiB0aGlzLl9nZXRNb2NrRGF0YUpzb24udGhlbihKU09OLnBhcnNlKS50aGVuKGNvbnN1bWVyKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVN0cmluZ1xuICogQHJldHVybiB7UmVzdWx0c01vZGlmaWVyfVxuICovXG5mdW5jdGlvbiBnZXRSZXN1bHRzRmlsdGVyZXIgKHF1ZXJ5U3RyaW5nKSB7XG4gIHJldHVybiByZXN1bHRzID0+IHJlc3VsdHMuZmlsdGVyKHJlc3VsdCA9PiB7XG4gICAgaWYgKHJlc3VsdC5odG1sVGl0bGUgJiYgcmVzdWx0Lmh0bWxUaXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5U3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcHJvcCBpbiByZXN1bHQuZGF0YSkge1xuICAgICAgY29uc3QgdmFsID0gcmVzdWx0LmRhdGFbcHJvcF07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmFsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnlTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U2VjdGlvbn0gc2VjdGlvblxuICogQHBhcmFtIHtSZXN1bHRzTW9kaWZpZXJ9IG1vZGlmeUZuXG4gKi9cbmZ1bmN0aW9uIG1vZGlmeVJlc3VsdHMgKHNlY3Rpb24sIG1vZGlmeUZuKSB7XG4gIHNlY3Rpb24ucmVzdWx0cyA9IG1vZGlmeUZuKHNlY3Rpb24ucmVzdWx0cyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtTZWN0aW9uW119IHNlY3Rpb25zIEEgbGlzdCBvZiBtb2NrIHNlY3Rpb24gZGF0YVxuICogQHJldHVybnMge09iamVjdH0gQSBtb2NrIEFuc3dlcnNBcGkgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0VW5pdmVyc2FsUmVzcG9uc2UgKHNlY3Rpb25zKSB7XG4gIC8vIFRPRE8oYW11bGxpbmdzKTogc3BlbGxjaGVjaywgZ2VvLCBmaWx0ZXJzXG4gIC8vIFRPRE8oYW11bGxpbmdzKTogRmFrZSBlbmNvZGVkU3RhdGUgb25jZSB0aGUgU0RLIHVzZXMgaXRcbiAgc2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoZmlsbFNlY3Rpb25GaWVsZHMpO1xuICByZXR1cm4ge1xuICAgIG1ldGE6IHtcbiAgICAgIHV1aWQ6IHV1aWRWNCgpLFxuICAgICAgZXJyb3JzOiBbXVxuICAgIH0sXG4gICAgcmVzcG9uc2U6IHtcbiAgICAgIGJ1c2luZXNzSWQ6IEFSQklUUkFSWV9CVVNJTkVTU19JRCxcbiAgICAgIG1vZHVsZXM6IHNlY3Rpb25zLFxuICAgICAgZmFpbGVkVmVydGljYWxzOiBbXSxcbiAgICAgIHF1ZXJ5SWQ6IHV1aWRWNCgpLFxuICAgICAgc2VhcmNoSW50ZW50czogW11cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtTZWN0aW9ufSBzZWN0aW9uIEEgbW9jayBzZWN0aW9uIGRhdGFcbiAqIEByZXR1cm5zIHtPYmplY3R9IEEgbW9jayBBbnN3ZXJzQXBpIHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdFZlcnRpY2FsUmVzcG9uc2UgKHNlY3Rpb24pIHtcbiAgLy8gVE9ETyhhbXVsbGluZ3MpOiBzcGVsbGNoZWNrLCBnZW8sIGZpbHRlcnNcbiAgLy8gVE9ETyhhbXVsbGluZ3MpOiBGYWtlIGVuY29kZWRTdGF0ZSBvbmNlIHRoZSBTREsgdXNlcyBpdFxuICBzZWN0aW9uID0gZmlsbFNlY3Rpb25GaWVsZHMoc2VjdGlvbik7XG4gIHJldHVybiB7XG4gICAgbWV0YToge1xuICAgICAgdXVpZDogdXVpZFY0KCksXG4gICAgICBlcnJvcnM6IFtdXG4gICAgfSxcbiAgICByZXNwb25zZTogT2JqZWN0LmFzc2lnbihzZWN0aW9uLCB7XG4gICAgICBidXNpbmVzc0lkOiBBUkJJVFJBUllfQlVTSU5FU1NfSUQsXG4gICAgICBxdWVyeUlkOiB1dWlkVjQoKSxcbiAgICAgIHNlYXJjaEludGVudHM6IFtdXG4gICAgfSlcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NlY3Rpb259XG4gKiBAcmV0dXJucyB7U2VjdGlvbn1cbiAqL1xuZnVuY3Rpb24gZmlsbFNlY3Rpb25GaWVsZHMgKHNlY3Rpb24pIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNhbENvbmZpZ0lkOiBzZWN0aW9uLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgcmVzdWx0c0NvdW50OiBzZWN0aW9uLnJlc3VsdHMubGVuZ3RoLFxuICAgIGVuY29kZWRTdGF0ZTogJycsXG4gICAgcmVzdWx0czogc2VjdGlvbi5yZXN1bHRzLFxuICAgIGFwcGxpZWRRdWVyeUZpbHRlcnM6IHNlY3Rpb24uYXBwbGllZFF1ZXJ5RmlsdGVycyxcbiAgICBxdWVyeUR1cmF0aW9uTWlsbGlzOiByYW5kb21JbnQoNTAsIDEwMDApLFxuICAgIGZhY2V0czogc2VjdGlvbi5mYWNldHMsXG4gICAgc291cmNlOiBzZWN0aW9uLnNvdXJjZVxuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXNwXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fVxuICovXG5mdW5jdGlvbiBkZWxheWVkUmVzcG9uc2UgKHJlc3ApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZShyZXNwKTtcbiAgICB9LCByYW5kb21JbnQoMjUwLCAxMDAwKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENvZGUtZ29sZi15IGJ1dCBsZWdpdCBiYXNpYyBVVUlEIHY0IGltcGxlbWVudGF0aW9uLiBOb3QgY3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlLlxuICogRnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWQvOTgyODgzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHY0LWNvbXBsaWFudCBVVUlEXG4gKi9cbmZ1bmN0aW9uIHV1aWRWNCAoKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gYiAoYSkgeyByZXR1cm4gYSA/IChhIF4gTWF0aC5yYW5kb20oKSAqIDE2ID4+IGEgLyA0KS50b1N0cmluZygxNikgOiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYik7IH0pKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBpbmNsdXNpdmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggZXhjbHVzaXZlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBzcGVjaWZpZWQgcmFuZ2VcbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50IChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVycyxcbiAgRE9NXG59IGZyb20gJy4vdWkvaW5kZXgnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL3VpL2NvbXBvbmVudHMvY29tcG9uZW50JztcblxuaW1wb3J0IEVycm9yUmVwb3J0ZXIgZnJvbSAnLi9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyJztcbmltcG9ydCBDb25zb2xlRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2NvbnNvbGVlcnJvcnJlcG9ydGVyJztcbmltcG9ydCB7IEFuYWx5dGljc1JlcG9ydGVyLCBOb29wQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IFBlcnNpc3RlbnRTdG9yYWdlIGZyb20gJy4vdWkvc3RvcmFnZS9wZXJzaXN0ZW50c3RvcmFnZSc7XG5pbXBvcnQgR2xvYmFsU3RvcmFnZSBmcm9tICcuL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoQ29uZmlnIGZyb20gJy4vY29yZS9tb2RlbHMvc2VhcmNoY29uZmlnJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVhcGknO1xuaW1wb3J0IE1vY2tBdXRvQ29tcGxldGVTZXJ2aWNlIGZyb20gJy4vY29yZS9zZWFyY2gvbW9ja2F1dG9jb21wbGV0ZXNlcnZpY2UnO1xuaW1wb3J0IFF1ZXN0aW9uQW5zd2VyQXBpIGZyb20gJy4vY29yZS9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGknO1xuaW1wb3J0IE1vY2tRdWVzdGlvbkFuc3dlclNlcnZpY2UgZnJvbSAnLi9jb3JlL3NlYXJjaC9tb2NrcXVlc3Rpb25hbnN3ZXJzZXJ2aWNlJztcbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9jb3JlL3NlYXJjaC9zZWFyY2hhcGknO1xuaW1wb3J0IE1vY2tTZWFyY2hTZXJ2aWNlIGZyb20gJy4vY29yZS9zZWFyY2gvbW9ja3NlYXJjaHNlcnZpY2UnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL3NlYXJjaHNlcnZpY2UnKS5kZWZhdWx0fSBTZWFyY2hTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL2F1dG9jb21wbGV0ZXNlcnZpY2UnKS5kZWZhdWx0fSBBdXRvQ29tcGxldGVTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL3F1ZXN0aW9uYW5zd2Vyc2VydmljZScpLmRlZmF1bHR9IFF1ZXN0aW9uQW5zd2VyU2VydmljZSAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS9zZXJ2aWNlcy9lcnJvcnJlcG9ydGVyc2VydmljZScpLmRlZmF1bHR9IEVycm9yUmVwb3J0ZXJTZXJ2aWNlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlL3NlcnZpY2VzL2FuYWx5dGljc3JlcG9ydGVyc2VydmljZScpLmRlZmF1bHR9IEFuYWx5dGljc1JlcG9ydGVyU2VydmljZSAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIFNlcnZpY2VzXG4gKiBAcHJvcGVydHkge1NlYXJjaFNlcnZpY2V9IHNlYXJjaFNlcnZpY2VcbiAqIEBwcm9wZXJ0eSB7QXV0b0NvbXBsZXRlU2VydmljZX0gYXV0b0NvbXBsZXRlU2VydmljZVxuICogQHByb3BlcnR5IHtRdWVzdGlvbkFuc3dlclNlcnZpY2V9IHF1ZXN0aW9uQW5zd2VyU2VydmljZVxuICogQHByb3BlcnR5IHtFcnJvclJlcG9ydGVyU2VydmljZX0gZXJyb3JSZXBvcnRlclNlcnZpY2VcbiAqL1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgbG9jYWxlOiAnZW4nXG59O1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBDb21wb25lbnQgYmFzZSBjbGFzcyBmb3IgY3VzdG9tXG4gICAgICogY29tcG9uZW50cyB0byBleHRlbmRcbiAgICAgKi9cbiAgICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBBbmFseXRpY3NFdmVudCBiYXNlIGNsYXNzIGZvciByZXBvcnRpbmdcbiAgICAgKiBjdXN0b20gYW5hbHl0aWNzXG4gICAgICovXG4gICAgdGhpcy5BbmFseXRpY3NFdmVudCA9IEFuYWx5dGljc0V2ZW50O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBhcGlcbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbGlnaWJsZUZvckFuYWx5dGljcyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge1NlcnZpY2VzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VydmljZXMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0FuYWx5dGljc1JlcG9ydGVyU2VydmljZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyU2VydmljZSA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRTLCBjb25maWcpO1xuICAgIGlmICh0eXBlb2YgY29uZmlnLmFwaUtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYXBpS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZXhwZXJpZW5jZUtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgZXhwZXJpZW5jZUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGNvbmZpZy5zZWFyY2ggPSBuZXcgU2VhcmNoQ29uZmlnKGNvbmZpZy5zZWFyY2gpO1xuXG4gICAgY29uc3QgZ2xvYmFsU3RvcmFnZSA9IG5ldyBHbG9iYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgcGVyc2lzdGVudFN0b3JhZ2UgPSBuZXcgUGVyc2lzdGVudFN0b3JhZ2Uoe1xuICAgICAgdXBkYXRlTGlzdGVuZXI6IGNvbmZpZy5vblN0YXRlQ2hhbmdlLFxuICAgICAgcmVzZXRMaXN0ZW5lcjogZGF0YSA9PiBnbG9iYWxTdG9yYWdlLnNldEFsbChkYXRhKVxuICAgIH0pO1xuICAgIGdsb2JhbFN0b3JhZ2Uuc2V0QWxsKHBlcnNpc3RlbnRTdG9yYWdlLmdldEFsbCgpKTtcbiAgICBnbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRUFSQ0hfQ09ORklHLCBjb25maWcuc2VhcmNoKTtcblxuICAgIHRoaXMuX3NlcnZpY2VzID0gY29uZmlnLm1vY2sgPyBnZXRNb2NrU2VydmljZXMoKSA6IGdldFNlcnZpY2VzKGNvbmZpZyk7XG5cbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBnbG9iYWxTdG9yYWdlOiBnbG9iYWxTdG9yYWdlLFxuICAgICAgcGVyc2lzdGVudFN0b3JhZ2U6IHBlcnNpc3RlbnRTdG9yYWdlLFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBmaWVsZEZvcm1hdHRlcnM6IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMsXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlLFxuICAgICAgc2VhcmNoU2VydmljZTogdGhpcy5fc2VydmljZXMuc2VhcmNoU2VydmljZSxcbiAgICAgIGF1dG9Db21wbGV0ZVNlcnZpY2U6IHRoaXMuX3NlcnZpY2VzLmF1dG9Db21wbGV0ZVNlcnZpY2UsXG4gICAgICBxdWVzdGlvbkFuc3dlclNlcnZpY2U6IHRoaXMuX3NlcnZpY2VzLnF1ZXN0aW9uQW5zd2VyU2VydmljZVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5vblN0YXRlQ2hhbmdlICYmIHR5cGVvZiBjb25maWcub25TdGF0ZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnLm9uU3RhdGVDaGFuZ2UocGVyc2lzdGVudFN0b3JhZ2UuZ2V0QWxsKCksIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNcbiAgICAgIC5zZXRDb3JlKHRoaXMuY29yZSlcbiAgICAgIC5zZXRSZW5kZXJlcih0aGlzLnJlbmRlcmVyKTtcblxuICAgIHRoaXMuX2VsaWdpYmxlRm9yQW5hbHl0aWNzID0gY29uZmlnLmJ1c2luZXNzSWQgIT0gbnVsbDtcbiAgICBpZiAodGhpcy5fZWxpZ2libGVGb3JBbmFseXRpY3MpIHtcbiAgICAgIC8vIFRPRE8oYW11bGxpbmdzKTogSW5pdGlhbGl6ZSB3aXRoIG90aGVyIHNlcnZpY2VzXG4gICAgICBjb25zdCByZXBvcnRlciA9IGNvbmZpZy5tb2NrXG4gICAgICAgID8gbmV3IE5vb3BBbmFseXRpY3NSZXBvcnRlcigpXG4gICAgICAgIDogbmV3IEFuYWx5dGljc1JlcG9ydGVyKFxuICAgICAgICAgIHRoaXMuY29yZSxcbiAgICAgICAgICBjb25maWcuZXhwZXJpZW5jZUtleSxcbiAgICAgICAgICBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICAgY29uZmlnLmJ1c2luZXNzSWQsXG4gICAgICAgICAgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpO1xuXG4gICAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlclNlcnZpY2UgPSByZXBvcnRlcjtcblxuICAgICAgdGhpcy5jb21wb25lbnRzLnNldEFuYWx5dGljc1JlcG9ydGVyKHJlcG9ydGVyKTtcbiAgICAgIGluaXRTY3JvbGxMaXN0ZW5lcihyZXBvcnRlcik7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RGVmYXVsdEluaXRpYWxTZWFyY2goY29uZmlnLnNlYXJjaCk7XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkb21SZWFkeSAoY2IpIHtcbiAgICBET00ub25SZWFkeShjYik7XG4gIH1cblxuICBvblJlYWR5IChjYikge1xuICAgIHRoaXMuX29uUmVhZHkgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGN1c3RvbSBjb21wb25lbnQgdHlwZSBzbyBpdCBjYW4gYmUgY3JlYXRlZCB2aWFcbiAgICogYWRkQ29tcG9uZW50IGFuZCB1c2VkIGFzIGEgY2hpbGQgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRDbGFzc1xuICAgKi9cbiAgcmVnaXN0ZXJDb21wb25lbnRUeXBlIChjb21wb25lbnRDbGFzcykge1xuICAgIHRoaXMuY29tcG9uZW50cy5yZWdpc3Rlcihjb21wb25lbnRDbGFzcyk7XG4gIH1cblxuICBhZGRDb21wb25lbnQgKHR5cGUsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRzID0ge1xuICAgICAgICBjb250YWluZXI6IG9wdHNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdGYWlsZWQgdG8gYWRkIGNvbXBvbmVudCcsIHR5cGUsIGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCAtIGFuZCBhbGwgb2YgaXRzIGNoaWxkcmVuIC0gd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ29tcG9uZW50IChuYW1lKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnJlbW92ZUJ5TmFtZShuYW1lKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogT3B0IGluIG9yIG91dCBvZiBjb252ZXJ0aW9uIHRyYWNraW5nIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdEluXG4gICAqL1xuICBzZXRDb252ZXJzaW9uc09wdEluIChvcHRJbikge1xuICAgIGlmICh0aGlzLl9lbGlnaWJsZUZvckFuYWx5dGljcykge1xuICAgICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlLnNldENvbnZlcnNpb25UcmFja2luZ0VuYWJsZWQob3B0SW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc2VhcmNoIHF1ZXJ5IG9uIGluaXRpYWxpemF0aW9uIGZvciB2ZXJ0aWNhbCBzZWFyY2hlcnMgdGhhdCBoYXZlIGFcbiAgICogZGVmYXVsdEluaXRpYWxTZWFyY2ggcHJvdmlkZWQsIGlmIHRoZSB1c2VyIGhhc24ndCBhbHJlYWR5IHByb3ZpZGVkIHRoZWlyXG4gICAqIG93biB2aWEgVVJMIHBhcmFtLlxuICAgKiBAcGFyYW0ge1NlYXJjaENvbmZpZ30gc2VhcmNoQ29uZmlnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0RGVmYXVsdEluaXRpYWxTZWFyY2ggKHNlYXJjaENvbmZpZykge1xuICAgIGlmIChzZWFyY2hDb25maWcuZGVmYXVsdEluaXRpYWxTZWFyY2ggPT0gbnVsbCB8fCAhc2VhcmNoQ29uZmlnLnZlcnRpY2FsS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZXBvcHVsYXRlZFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpO1xuICAgIGlmIChwcmVwb3B1bGF0ZWRRdWVyeSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldCgncXVlcnlUcmlnZ2VyJywgJ2luaXRpYWxpemUnKTtcbiAgICB0aGlzLmNvcmUuc2V0UXVlcnkoc2VhcmNoQ29uZmlnLmRlZmF1bHRJbml0aWFsU2VhcmNoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAqIEByZXR1cm5zIHtTZXJ2aWNlc31cbiAqL1xuZnVuY3Rpb24gZ2V0U2VydmljZXMgKGNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHNlYXJjaFNlcnZpY2U6IG5ldyBTZWFyY2hBcGkoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSksXG4gICAgYXV0b0NvbXBsZXRlU2VydmljZTogbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBleHBlcmllbmNlS2V5OiBjb25maWcuZXhwZXJpZW5jZUtleSxcbiAgICAgIGV4cGVyaWVuY2VWZXJzaW9uOiBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IGNvbmZpZy5sb2NhbGVcbiAgICB9KSxcbiAgICBxdWVzdGlvbkFuc3dlclNlcnZpY2U6IG5ldyBRdWVzdGlvbkFuc3dlckFwaSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXlcbiAgICB9KSxcbiAgICBlcnJvclJlcG9ydGVyU2VydmljZTogbmV3IEVycm9yUmVwb3J0ZXIoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgcHJpbnRWZXJib3NlOiBjb25maWcuZGVidWcsXG4gICAgICBzZW5kVG9TZXJ2ZXI6ICFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHNcbiAgICB9KVxuICB9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtTZXJ2aWNlc31cbiAqL1xuZnVuY3Rpb24gZ2V0TW9ja1NlcnZpY2VzICgpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hTZXJ2aWNlOiBuZXcgTW9ja1NlYXJjaFNlcnZpY2UoKSxcbiAgICBhdXRvQ29tcGxldGVTZXJ2aWNlOiBuZXcgTW9ja0F1dG9Db21wbGV0ZVNlcnZpY2UoKSxcbiAgICBxdWVzdGlvbkFuc3dlclNlcnZpY2U6IG5ldyBNb2NrUXVlc3Rpb25BbnN3ZXJTZXJ2aWNlKCksXG4gICAgZXJyb3JSZXBvcnRlclNlcnZpY2U6IG5ldyBDb25zb2xlRXJyb3JSZXBvcnRlcigpXG4gIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRvIHNlbmQgYW5hbHl0aWNzIGV2ZW50c1xuICogd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRvIHRoZSBib3R0b20uIERlYm91bmNlcyBzY3JvbGwgZXZlbnRzIHNvXG4gKiB0aGV5IGFyZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHVzZXIgc3RvcHMgc2Nyb2xsaW5nXG4gKi9cbmZ1bmN0aW9uIGluaXRTY3JvbGxMaXN0ZW5lciAocmVwb3J0ZXIpIHtcbiAgY29uc3QgREVCT1VOQ0VfVElNRSA9IDEwMDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gIGNvbnN0IHNlbmRFdmVudCA9ICgpID0+IHtcbiAgICBpZiAoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldCkgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KCdTQ1JPTExfVE9fQk9UVE9NX09GX1BBR0UnKTtcbiAgICAgIHJlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoc2VuZEV2ZW50LCBERUJPVU5DRV9USU1FKTtcbiAgfSk7XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJQUkVfU0VBUkNIIiwiU0VBUkNIX0xPQURJTkciLCJTRUFSQ0hfQ09NUExFVEUiLCJSZXN1bHQiLCJkYXRhIiwiX3JhdyIsInJhdyIsIl9mb3JtYXR0ZWQiLCJmb3JtYXR0ZWQiLCJvcmRpbmFsIiwidGl0bGUiLCJkZXRhaWxzIiwibGluayIsImlkIiwic3VidGl0bGUiLCJtb2RpZmllciIsImJpZ0RhdGUiLCJpbWFnZSIsImNhbGxzVG9BY3Rpb24iLCJjb2xsYXBzZWQiLCJSZXN1bHRGYWN0b3J5IiwicmVzdWx0c0RhdGEiLCJmb3JtYXR0ZXJzIiwidmVydGljYWxJZCIsInNvdXJjZSIsInJlc3VsdHMiLCJpIiwiZm9ybWF0dGVkRGF0YSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImtleSIsInZhbCIsInB1c2giLCJmcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUiLCJmcm9tWmVuZGVza1NlYXJjaEVuZ2luZSIsImZyb21BbGdvbGlhU2VhcmNoRW5naW5lIiwiZnJvbUdlbmVyaWMiLCJpbmRleCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRydW5jYXRlIiwid2Vic2l0ZSIsImh0bWxUaXRsZSIsInJlcGxhY2UiLCJodG1sU25pcHBldCIsInNuaXBwZXQiLCJ1cmwiLCJodG1sX3VybCIsIm9iamVjdElEIiwic3RyIiwibGltaXQiLCJ0cmFpbGluZyIsInNlcCIsIndvcmRzIiwic3BsaXQiLCJtYXgiLCJ0cnVuY2F0ZWQiLCJ3b3JkIiwiU2VjdGlvbiIsInNlYXJjaFN0YXRlIiwiU2VhcmNoU3RhdGVzIiwidmVydGljYWxDb25maWdJZCIsInJlc3VsdHNDb3VudCIsImVuY29kZWRTdGF0ZSIsImFwcGxpZWRRdWVyeUZpbHRlcnMiLCJBcHBsaWVkUXVlcnlGaWx0ZXIiLCJmcm9tIiwiZmFjZXRzIiwibWFwIiwicGFyc2VNYXAiLCJ2ZXJ0aWNhbFVSTCIsIm1hcE1hcmtlcnMiLCJjZW50ZXJDb29yZGluYXRlcyIsImoiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJsYWJlbCIsIm1vZHVsZXMiLCJ1cmxzIiwic2VjdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBsaWVkUXVlcnlGaWx0ZXIiLCJkaXNwbGF5S2V5IiwidmFsdWUiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsInF1ZXJ5SWQiLCJyZXNwb25zZSIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsImFzc2lnbiIsImZyZWV6ZSIsImFuc3dlciIsInJlbGF0ZWRJdGVtIiwiZmllbGRBcGlOYW1lIiwiZmllbGRWYWx1ZXMiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJtZXJnZWQiLCJjb25jYXQiLCJIaWdobGlnaHRlZFZhbHVlIiwic2hvcnRWYWx1ZSIsIm1hdGNoZWRTdWJzdHJpbmdzIiwiX3NvcnRNYXRjaGVkU3Vic3RyaW5ncyIsIl9idWlsZEhpZ2hsaWdodGVkVmFsdWUiLCJpbnZlcnRlZFN1YnN0cmluZ3MiLCJfZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzIiwic29ydCIsImEiLCJiIiwib2Zmc2V0IiwidmFsdWVMZW5ndGgiLCJzdWJzdHJpbmciLCJuZXh0T2Zmc2V0IiwiaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzIiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsIm5leHRTdGFydCIsInN0YXJ0IiwiTnVtYmVyIiwiZW5kIiwic2xpY2UiLCJqb2luIiwiU3BlbGxDaGVjayIsInF1ZXJ5IiwiY29ycmVjdGVkUXVlcnkiLCJjb3JyZWN0ZWRRdWVyeURpc3BsYXkiLCJ0eXBlIiwic2hvdWxkU2hvdyIsIm9yaWdpbmFsUXVlcnkiLCJnZXQiLCJOQVZJR0FUSU9OIiwiVU5JVkVSU0FMX1JFU1VMVFMiLCJWRVJUSUNBTF9SRVNVTFRTIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUX0FOU1dFUiIsIkZJTFRFUiIsIlFVRVJZIiwiUVVFUllfSUQiLCJGQUNFVF9GSUxURVIiLCJEWU5BTUlDX0ZJTFRFUlMiLCJQQVJBTVMiLCJHRU9MT0NBVElPTiIsIklOVEVOVFMiLCJRVUVTVElPTl9TVUJNSVNTSU9OIiwiU0VBUkNIX0NPTkZJRyIsIlNFQVJDSF9PRkZTRVQiLCJTUEVMTF9DSEVDSyIsIkR5bmFtaWNGaWx0ZXJzIiwiZHluYW1pY0ZpbHRlcnMiLCJmIiwiZmllbGRJZCIsIm9wdGlvbnMiLCJvIiwiY291bnRMYWJlbCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiU2VhcmNoSW50ZW50cyIsImludGVudHMiLCJuZWFyTWUiLCJpbmNsdWRlcyIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIlN0b3JhZ2VLZXlzIiwic2VhcmNoSW50ZW50cyIsInNwZWxsQ2hlY2siLCJRdWVzdGlvblN1Ym1pc3Npb24iLCJxdWVzdGlvbiIsImVycm9ycyIsImVtYWlsIiwicHJpdmFjeVBvbGljeSIsInF1ZXN0aW9uVGV4dCIsInF1ZXN0aW9uRGVzY3JpcHRpb24iLCJxdWVzdGlvblN1Ym1pdHRlZCIsIkZpbHRlciIsInJlc3BvbnNlRmlsdGVyIiwiSlNPTiIsInBhcnNlIiwiZ3JvdXBzIiwiZ3JvdXBGaWx0ZXJzIiwiZmllbGQiLCJvciIsImFuZCIsIl9mcm9tTWF0Y2hlciIsIm1pbiIsImxhdCIsImxuZyIsInJhZGl1cyIsIm1hdGNoZXIiLCJDb3JlIiwiY29uZmlnIiwiX2FwaUtleSIsImFwaUtleSIsIl9leHBlcmllbmNlS2V5IiwiZXhwZXJpZW5jZUtleSIsIl9leHBlcmllbmNlVmVyc2lvbiIsImV4cGVyaWVuY2VWZXJzaW9uIiwiX2xvY2FsZSIsImxvY2FsZSIsIl9maWVsZEZvcm1hdHRlcnMiLCJmaWVsZEZvcm1hdHRlcnMiLCJnbG9iYWxTdG9yYWdlIiwicGVyc2lzdGVudFN0b3JhZ2UiLCJfc2VhcmNoZXIiLCJzZWFyY2hTZXJ2aWNlIiwiX2F1dG9Db21wbGV0ZSIsImF1dG9Db21wbGV0ZVNlcnZpY2UiLCJfcXVlc3Rpb25BbnN3ZXIiLCJxdWVzdGlvbkFuc3dlclNlcnZpY2UiLCJ2ZXJ0aWNhbEtleSIsImFwcGVuZCIsInNldCIsInNlYXJjaExvYWRpbmciLCJ2ZXJ0aWNhbFNlYXJjaCIsImdldFN0YXRlIiwiZ2VvbG9jYXRpb24iLCJpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCIsIl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCIsInNraXBTcGVsbENoZWNrIiwicXVlcnlUcmlnZ2VyIiwidGhlbiIsInRyYW5zZm9ybVZlcnRpY2FsIiwibWVyZ2VkUmVzdWx0cyIsImFsbEZpbHRlcnMiLCJnZXRBbGwiLCJ0b3RhbEZpbHRlciIsImZhY2V0RmlsdGVyIiwiaW5wdXQiLCJzdHJpbmdpZnkiLCJxdWVyeVN0cmluZyIsInVuaXZlcnNhbFNlYXJjaCIsInRyYW5zZm9ybSIsIm5hbWVzcGFjZSIsInF1ZXJ5VW5pdmVyc2FsIiwiYmFyS2V5IiwicXVlcnlWZXJ0aWNhbCIsInF1ZXJ5RmlsdGVyIiwic3VibWl0UXVlc3Rpb24iLCJzdWJtaXR0ZWQiLCJldnQiLCJtb2R1bGVJZCIsImNiIiwib24iLCJBbnN3ZXJzQmFzZUVycm9yIiwiZXJyb3JDb2RlIiwibWVzc2FnZSIsImJvdW5kYXJ5IiwiY2F1c2VkQnkiLCJlcnJvck1lc3NhZ2UiLCJyZXBvcnRlZCIsInN0cmluZyIsInRvU3RyaW5nIiwiYnVpbHRpbkVycm9yIiwiZXJyb3IiLCJBbnN3ZXJzQmFzaWNFcnJvciIsInN0YWNrIiwiRXJyb3IiLCJBbnN3ZXJzQ29uZmlnRXJyb3IiLCJBbnN3ZXJzQ29tcG9uZW50RXJyb3IiLCJjb21wb25lbnQiLCJBbnN3ZXJzRW5kcG9pbnRFcnJvciIsIkFuc3dlcnNDb3JlRXJyb3IiLCJBbnN3ZXJzU3RvcmFnZUVycm9yIiwic3RvcmFnZUtleSIsIkFuc3dlcnNBbmFseXRpY3NFcnJvciIsImV2ZW50IiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJET00iLCJkIiwicCIsImh0bWwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZnJhZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwicGFyZW50Iiwic2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsIkhUTUxEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVhZHlTdGF0ZSIsImVsIiwib3B0c19kYXRhIiwibm9kZSIsInByb3BzIiwiYWRkQ2xhc3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwibGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3R5bGVzIiwicHJvcCIsInN0eWxlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImF0dHJzIiwic2V0dGluZ3MiLCJlIiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiQ29tcG9uZW50TWFuYWdlciIsInNldEluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJfY29tcG9uZW50UmVnaXN0cnkiLCJfYWN0aXZlQ29tcG9uZW50cyIsIl9jb3JlIiwiX3JlbmRlcmVyIiwiX2FuYWx5dGljc1JlcG9ydGVyIiwicmVuZGVyZXIiLCJjb3JlIiwicmVwb3J0ZXIiLCJjb21wb25lbnRDbGF6eiIsImNvbXBvbmVudFR5cGUiLCJvcHRzIiwic3lzdGVtT3B0cyIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpc1R3aW4iLCJjb25zdHJ1Y3RvciIsImluaXQiLCJzZXRTdGF0ZSIsIm9mZiIsImZpbmRJbmRleCIsInNwbGljZSIsImZpbmQiLCJyZW1vdmUiLCJlbXB0eSIsIl9jb250YWluZXIiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwidGVtcGxhdGVOYW1lIiwiYXJnMSIsImFyZzIiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJtYXRjaCIsImludGxDb2RlIiwiYXJncyIsImFyZ3VtZW50cyIsInJvb3QiLCJ2IiwiUmVuZGVyZXJzIiwiU09ZIiwiSGFuZGxlYmFycyIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJrZWVwIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0IiwiZW1pdCIsIm9wdFByb3AiLCJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJyZXF1ZXN0IiwiZW5jb2RlUGFyYW1zIiwidXJsUGFyYW1zIiwianNvbkJvZHkiLCJyZXF1ZXN0Q29uZmlnIiwiY3JlZGVudGlhbHMiLCJtZXRob2QiLCJmZXRjaCIsIm5hdmlnYXRvciIsInNlbmRCZWFjb24iLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkxJQl9WRVJTSU9OIiwiQVBJX0JBU0VfVVJMIiwiQ09NUElMRURfVEVNUExBVEVTX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTF9OT19DT09LSUUiLCJTZWFyY2hQYXJhbXMiLCJfcGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZW5jb2RlZFBhcmFtcyIsImtleVZhbCIsImRlY29kZSIsIlN0cmluZyIsImVuY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIkFwaVJlcXVlc3QiLCJfcmVxdWVzdGVyIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2VuZHBvaW50IiwiZW5kcG9pbnQiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJiYXNlUGFyYW1zIiwic2FuaXRpemVQYXJhbXMiLCJwb3N0IiwibG9jYXRpb24iLCJoYXMiLCJTZWFyY2hBcGkiLCJqc29uIiwiQW5hbHl0aWNzRXZlbnQiLCJldmVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsIkFuYWx5dGljc1JlcG9ydGVyIiwiYnVzaW5lc3NJZCIsImdsb2JhbE9wdGlvbnMiLCJfYnVzaW5lc3NJZCIsIl9nbG9iYWxPcHRpb25zIiwic2V0UXVlcnlJZCIsImFkZE9wdGlvbnMiLCJiZWFjb24iLCJ0b0FwaUV2ZW50IiwiaXNFbmFibGVkIiwiTm9vcEFuYWx5dGljc1JlcG9ydGVyIiwiTW9kdWxlRGF0YSIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJjYXB0dXJlUHJldmlvdXMiLCJzaGlmdCIsInByZXZpb3VzIiwiX3ByZXZpb3VzIiwicG9wIiwiR2xvYmFsU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb21wb25lbnQiLCJzeXN0ZW1Db25maWciLCJfY29uZmlnIiwiX3R5cGUiLCJfcGFyZW50Q29udGFpbmVyIiwicGFyZW50Q29udGFpbmVyIiwiX2NoaWxkcmVuIiwic3RhdGUiLCJfYW5hbHl0aWNzT3B0aW9ucyIsImFuYWx5dGljc09wdGlvbnMiLCJjcmVhdGVFbCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsImRlZmF1bHRUZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25DcmVhdGVPdmVycmlkZSIsImJpbmQiLCJvbk1vdW50Iiwib25Nb3VudE92ZXJyaWRlIiwib25VcGRhdGUiLCJvblVwZGF0ZU92ZXJyaWRlIiwidXNlck9uQ3JlYXRlIiwidXNlck9uTW91bnQiLCJ1c2VyT25VcGRhdGUiLCJ1bk1vdW50IiwibW91bnQiLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJjaGlsZCIsIm9uVW5Nb3VudCIsImJlZm9yZU1vdW50IiwiYXNKU09OIiwiZG9tQ29tcG9uZW50cyIsInF1ZXJ5QWxsIiwiX2NyZWF0ZVN1YmNvbXBvbmVudCIsImRvbUhvb2tzIiwiX2NyZWF0ZUFuYWx5dGljc0hvb2siLCJiZWZvcmVSZW5kZXIiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJpc0NvbXBvbmVudE1vdW50ZWQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsInJldmVyc2UiLCJpc0FuYWx5dGljc0F0dGFjaGVkIiwiZXZlbnR0eXBlIiwiZXZlbnRsYWJlbCIsImV2ZW50b3B0aW9ucyIsInJlcG9ydCIsIlJFU0laRV9ERUJPVU5DRSIsIlRhYiIsImNvbmZpZ0lkIiwiaXNGaXJzdCIsImlzQWN0aXZlIiwidGFic0NvbmZpZyIsInRhYnMiLCJ0YWIiLCJOYXZpZ2F0aW9uQ29tcG9uZW50IiwiZHJvcGRvd25MYWJlbCIsImRyb3Bkb3duSWNvbiIsIl90YWJzIiwiX3RhYk9yZGVyIiwiZ2V0RGVmYXVsdFRhYk9yZGVyIiwiZ2V0VXJsUGFyYW1zIiwiX25hdkJyZWFrcG9pbnRzIiwiX2RlYm91bmNlVGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVmaXROYXYiLCJjaGVja091dHNpZGVDbGljayIsInRvZ2dsZU1vcmVEcm9wZG93biIsIm1vcmVCdXR0b24iLCJtYWluTGlua3MiLCJjb2xsYXBzZWRMaW5rcyIsIm5hdldpZHRoIiwiY29udGFpbnMiLCJvZmZzZXRXaWR0aCIsIm51bUJyZWFrcG9pbnRzIiwibWFpbkxpbmtzV2lkdGgiLCJjaGlsZHJlbiIsImxhc3RMaW5rIiwicHJlcGVuZCIsImZpcnN0TGluayIsImNsb3NlTW9yZURyb3Bkb3duIiwidG9nZ2xlIiwiY2xvc2VzdCIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsInVuc2hpZnQiLCJvdGhlclRhYk9yZGVyIiwidGFiQ29uZmlnIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJsYWJlbFRleHQiLCJzdWJtaXRUZXh0Iiwic3VibWl0SWNvbiIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsImNsZWFyQnV0dG9uIiwiYXV0b2NvbXBsZXRlT25Mb2FkIiwicmVkaXJlY3RVcmwiLCJfaXNUd2luIiwicSIsIl9zZWFyY2hDb29sZG93biIsInNlYXJjaENvb2xkb3duIiwiX3Byb21wdEZvckxvY2F0aW9uIiwicHJvbXB0Rm9yTG9jYXRpb24iLCJCb29sZWFuIiwiX3Nob3dDbGVhckJ1dHRvbiIsIl9hbGxvd0VtcHR5U2VhcmNoIiwiYWxsb3dFbXB0eVNlYXJjaCIsInNldFF1ZXJ5IiwiaW5pdExvY2F0aW9uUHJvbXB0IiwiZm9jdXMiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImluaXRDbGVhckJ1dHRvbiIsIl9hdXRvY29tcGxldGUiLCJidXR0b24iLCJpbnRlbnQiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImFjY3VyYWN5IiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImJsdXIiLCJpbnB1dFNlbGVjdG9yIiwib25TdWJtaXQiLCJ0cmlnZ2VyIiwiX3Rocm90dGxlZCIsImdldEFjdGl2ZUNvbXBvbmVudCIsInNob3dDbGVhckJ1dHRvbiIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5IiwiX3N0b3JlT25DaGFuZ2UiLCJzdG9yZU9uQ2hhbmdlIiwic2VhcmNoVGV4dCIsInNlYXJjaFBhcmFtZXRlcnMiLCJfYnVpbGRTZWFyY2hQYXJhbWV0ZXJzIiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsImZyb21SZXNwb25zZSIsInNldEZpbHRlciIsInNlYXJjaFBhcmFtZXRlckNvbmZpZ3MiLCJzZWN0aW9uZWQiLCJmaWVsZHMiLCJfYnVpbGRGaWVsZHMiLCJmaWVsZENvbmZpZ3MiLCJmYyIsImZldGNoRW50aXRpZXMiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfYXV0b2NvbXBsZXRlRWxzIiwiYXV0b0NvbXBsZXRlRWxzIiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX2F1dG9Gb2N1cyIsIl9vblN1Ym1pdCIsIl9zZWFyY2hQYXJhbWV0ZXJzIiwiaGFzUmVzdWx0cyIsInNlY3Rpb25JbmRleCIsInJlc3VsdEluZGV4IiwicXVlcnlJbnB1dCIsImF0dHJpYnV0ZXMiLCJhdXRvY29tcGxldGUiLCJhdXRvY29ycmVjdCIsInNwZWxsY2hlY2siLCJjbG9zZSIsInJlc2V0IiwiYXV0b0NvbXBsZXRlIiwiaGFuZGxlTmF2aWdhdGVSZXN1bHRzIiwia2V5Q29kZSIsImhhbmRsZVN1Ym1pdFJlc3VsdCIsImRlbGVnYXRlIiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJTcGVsbENoZWNrQ29tcG9uZW50IiwiY29ycmVjdGVkUXVlcnlVcmwiLCJfYnVpbGRSZWRpcmVjdFF1ZXJ5VXJsIiwiaGVscFRleHQiLCJfZ2V0SGVscFRleHQiLCJ0b0xvd2VyQ2FzZSIsIkZhY2V0IiwiZmxhdEZpbHRlcnMiLCJmbGF0TWFwIiwiJG9yIiwiRmlsdGVyQm94Q29tcG9uZW50IiwiX2ZpbHRlckNvbmZpZ3MiLCJfc2VhcmNoT25DaGFuZ2UiLCJzZWFyY2hPbkNoYW5nZSIsIl9hcHBseUJ1dHRvblNlbGVjdG9yIiwiYXBwbHlCdXR0b25TZWxlY3RvciIsIl9maWx0ZXJDb21wb25lbnRzIiwiX2ZpbHRlcnMiLCJfaXNEeW5hbWljIiwiaXNEeW5hbWljIiwiZmlsdGVyQ29uZmlncyIsInNob3dBcHBseUJ1dHRvbiIsIm9uQ2hhbmdlIiwib25GaWx0ZXJDaGFuZ2UiLCJnZXRGaWx0ZXIiLCJfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UiLCJfc2VhcmNoIiwidmFsaWRGaWx0ZXJzIiwiY29tYmluZWRGaWx0ZXIiLCJmcm9tRmlsdGVycyIsInNldEZhY2V0RmlsdGVyIiwiU1VQUE9SVEVEX0NPTlRST0xTIiwiRmlsdGVyT3B0aW9uc0NvbXBvbmVudCIsImNvbnRyb2wiLCJwcmV2aW91c09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbnMiLCJfb3B0aW9ucyIsIl9jb250cm9sIiwiX29wdGlvblNlbGVjdG9yIiwib3B0aW9uU2VsZWN0b3IiLCJfb25DaGFuZ2UiLCJfbGFiZWwiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJjaGVja2VkIiwiX2J1aWxkRmlsdGVyIiwiZWxlbWVudHMiLCJfYXBwbHlGaWx0ZXIiLCJlcXVhbCIsImdyb3VwIiwiUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfZmllbGQiLCJtaW5WYWwiLCJtYXhWYWwiLCJfcmFuZ2UiLCJpbml0aWFsTWluIiwiaW5pdGlhbE1heCIsIl90aXRsZSIsIl9taW5MYWJlbCIsIm1pbkxhYmVsIiwiX21heExhYmVsIiwibWF4TGFiZWwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiX3VwZGF0ZVJhbmdlIiwiaW5jbHVzaXZlUmFuZ2UiLCJEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfaXNFeGNsdXNpdmUiLCJpc0V4Y2x1c2l2ZSIsInRvZGF5IiwiRGF0ZSIsInRvZGF5U3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2RhdGUiLCJkYXRlTWluIiwiZGF0ZU1heCIsImRhdGUiLCJleGNsdXNpdmVSYW5nZSIsIkR5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IiwiX2ZpZWxkQ29udHJvbHMiLCJmaWVsZENvbnRyb2xzIiwiX2ZpbHRlcmJveCIsImVuYWJsZUR5bmFtaWNGaWx0ZXJzIiwiTUVURVJTX1BFUl9NSUxFIiwiREVGQVVMVF9DT05GSUciLCJnZW9CdXR0b25JY29uIiwiZ2VvQnV0dG9uVGV4dCIsImVuYWJsZWRUZXh0IiwibG9hZGluZ1RleHQiLCJlcnJvclRleHQiLCJidXR0b25TZWxlY3RvciIsIkdlb0xvY2F0aW9uQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJfZW5hYmxlZCIsImdlb0xvYWRpbmciLCJnZW9FcnJvciIsImdlb0VuYWJsZWQiLCJnZW9WYWx1ZSIsImdlb1BsYWNlaG9sZGVyIiwiX2luaXRBdXRvQ29tcGxldGUiLCJfdG9nZ2xlR2VvRmlsdGVyIiwiX3NhdmVEYXRhVG9TdG9yYWdlIiwiTWF0aCIsIkV2ZW50VHlwZXMiLCJUSFVNQlNfVVAiLCJUSFVNQlNfRE9XTiIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImZvcm1FbCIsIl90aHVtYnNVcFNlbGVjdG9yIiwidGh1bWJzVXBTZWxlY3RvciIsIl90aHVtYnNEb3duU2VsZWN0b3IiLCJ0aHVtYnNEb3duU2VsZWN0b3IiLCJfdmlld0RldGFpbHNUZXh0Iiwidmlld0RldGFpbHNUZXh0IiwiaGFzU3RhdGUiLCJjaGVja2VkVmFsdWUiLCJyZXBvcnRRdWFsaXR5IiwiZXZlbnRPcHRpb25zIiwic2VhcmNoZXIiLCJlbnRpdHlJZCIsImN0YUxhYmVsIiwiaXNHb29kIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJfdmVydGljYWxDb25maWdJZCIsIl9pc1VuaXZlcnNhbCIsImlzVW5pdmVyc2FsIiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIk1hcFByb3ZpZGVyIiwiX3pvb20iLCJ6b29tIiwiX2RlZmF1bHRQb3NpdGlvbiIsImRlZmF1bHRQb3NpdGlvbiIsIl9zaG93RW1wdHlNYXAiLCJzaG93RW1wdHlNYXAiLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uUGluQ2xpY2siLCJvblBpbkNsaWNrIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiX2NvbGxhcHNlUGlucyIsImNvbGxhcHNlUGlucyIsImlzTG9hZGVkIiwibWFwRGF0YSIsIm1hcmtlcnMiLCJsb2NhdGlvblRvSXRlbSIsIm0iLCJjb2xsYXBzZWRNYXJrZXJzIiwiY29sbGFwc2VkTWFya2VyIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwiX2NvbGxhcHNlTWFya2VycyIsImdvb2dsZU1hcE1hcmtlckNvbmZpZ3MiLCJHb29nbGVNYXBNYXJrZXJDb25maWciLCJtYXJrZXIiLCJNYXJrZXIiLCJhZGRMaXN0ZW5lciIsImV4dGVuZCIsImZpdEJvdW5kcyIsInNldENlbnRlciIsIkxhdExuZyIsInNlcmlhbGl6ZWRNYXJrZXJzIiwicGluQ29uZmlnIiwicGluQ29uZmlnT2JqIiwiUG9pbnQiLCJ4IiwieSIsIlNpemUiLCJ3IiwiaCIsIk1hcEJveE1hcFByb3ZpZGVyIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsImNzcyIsInJlbCIsImNlbnRlciIsImdldENlbnRlck1hcmtlciIsIm1hcGJveE1hcE1hcmtlckNvbmZpZ3MiLCJNYXBCb3hNYXJrZXJDb25maWciLCJ3cmFwcGVyIiwiTG5nTGF0Iiwic2V0TG5nTGF0IiwiYWRkVG8iLCJnZXRFbGVtZW50IiwibWFwQ2VudGVyIiwic3RhdGljTWFwUGluIiwiUHJvdmlkZXJUeXBlcyIsIk1hcENvbXBvbmVudCIsIl9tYXBQcm92aWRlciIsIm1hcFByb3ZpZGVyIiwiZ2V0UHJvdmlkZXJJbnN0YW5jZSIsImxvYWRKUyIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsIl9pdGVtQ29uZmlnIiwiZ2xvYmFsIiwicmVuZGVySXRlbSIsIml0ZW1UZW1wbGF0ZSIsImNvbmZpZ3VyZUl0ZW0iLCJfdW5pdmVyc2FsVXJsIiwidW5pdmVyc2FsVXJsIiwiaXNQcmVTZWFyY2giLCJpc1NlYXJjaExvYWRpbmciLCJpc1NlYXJjaENvbXBsZXRlIiwiaW5jbHVkZU1hcCIsIm1hcENvbmZpZyIsInNob3dOb1Jlc3VsdHMiLCJzZXRJdGVtUmVuZGVyIiwic2V0SXRlbVRlbXBsYXRlIiwiY2xhenoiLCJnZXRJdGVtQ29tcG9uZW50IiwiY29tcCIsIm5ld09wdHMiLCJnbG9iYWxDb25maWciLCJpdGVtQ29uZmlnIiwiaGFzR2xvYmFsUmVuZGVyIiwiaGFzR2xvYmFsVGVtcGxhdGUiLCJzZXRSZW5kZXIiLCJzZXRUZW1wbGF0ZSIsIkFjY29yZGlvblJlc3VsdHNDb21wb25lbnQiLCJfc2VsZWN0b3JCYXNlIiwic2VsZWN0b3JCYXNlIiwiY29sbGFwc2VkQ2xhc3MiLCJhY2NvcmRpb25FbHMiLCJhY2NvcmRpb25FbCIsInRvZ2dsZUVsIiwidG9nZ2xlU2VsZWN0b3IiLCJjb250ZW50RWwiLCJib2R5U2VsZWN0b3IiLCJjaGFuZ2VIZWlnaHQiLCJoYW5kbGVDbGljayIsIndyYXBwZXJFbCIsImlzQ29sbGFwc2VkIiwidGFyZ2V0RWwiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJidWlsZFNlbGVjdG9yIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImNoaWxkT3B0cyIsImdldENoaWxkQ29uZmlnIiwidXNlQWNjb3JkaW9uIiwiZGVmYXVsdENvbmZpZyIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJfZmlyc3RQYWdlQnV0dG9uRW5hYmxlZCIsInNob3dGaXJzdCIsIl9sYXN0UGFnZUJ1dHRvbkVuYWJsZWQiLCJzaG93TGFzdCIsInNob3dDb250cm9scyIsInByZXZpb3VzUGFnZUJ1dHRvbiIsIm5leHRQYWdlQnV0dG9uIiwibWF4UGFnZSIsInRydW5jIiwidXBkYXRlUGFnZSIsImZpcnN0UGFnZUJ1dHRvbiIsImxhc3RQYWdlQnV0dG9uIiwic2Nyb2xsVG9Ub3AiLCJ2ZXJ0aWNhbFBhZ2UiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwYWdlTnVtYmVyIiwiaXNNb3JlUmVzdWx0cyIsImZpcnN0UGFnZUJ1dHRvbkVuYWJsZWQiLCJsYXN0UGFnZUJ1dHRvbkVuYWJsZWQiLCJzaG93Rmlyc3RQYWdlQnV0dG9uIiwic2hvd1ByZXZpb3VzUGFnZUJ1dHRvbiIsInNob3dOZXh0UGFnZUJ1dHRvbiIsInNob3dMYXN0UGFnZUJ1dHRvbiIsIlF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCIsInZhbGlkYXRlQ29uZmlnIiwiYmluZEFuYWx5dGljcyIsImJpbmRGb3JtU3VibWl0IiwicXVlc3Rpb25UZXh0RWwiLCJmb3JtRGF0YSIsInZhbGlkYXRlUmVxdWlyZWQiLCJsYW5ndWFnZSIsImlucHV0RmllbGRzIiwib2JqIiwiU1ZHSWNvbiIsInBhdGgiLCJjb21wbGV4Q29udGVudHMiLCJ2aWV3Qm94IiwiY29udGVudHMiLCJwYXRoRGVmaW5pdGlvbiIsImljb25zQXJyYXkiLCJ0aHVtYkljb24iLCJyZWNlaXB0SWNvbiIsInBhbnRoZW9uSWNvbiIsIm1pY0ljb24iLCJkaXJlY3Rpb25zSWNvbiIsImNhbGVuZGFySWNvbiIsImNhbGxvdXRJY29uIiwiaW5mb0ljb24iLCJicmllZmNhc2VJY29uIiwia2Fib2JJY29uIiwicGVyc29uSWNvbiIsIm1hZ25pZnlpbmdHbGFzc0ljb24iLCJvZmZpY2VJY29uIiwibGlua0ljb24iLCJ3aW5kb3dJY29uIiwicGhvbmVJY29uIiwidGFnSWNvbiIsImRvY3VtZW50SWNvbiIsImNoZXZyb25JY29uIiwic3VwcG9ydEljb24iLCJ5ZXh0SWNvbiIsInBpbkljb24iLCJnZWFySWNvbiIsImxpZ2h0QnVsYkljb24iLCJJY29ucyIsIm1hcmt1cCIsInN0YXJJY29uIiwiSWNvbkNvbXBvbmVudCIsImljb25OYW1lIiwiY3VzdG9tSWNvbiIsImljb25VcmwiLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3JSZXBvcnRlciIsInByaW50VmVyYm9zZSIsInNlbmRUb1NlcnZlciIsImVyciIsInByaW50RXJyb3IiLCJ0b0pzb24iLCJDb25zb2xlRXJyb3JSZXBvcnRlciIsIlBlcnNpc3RlbnRTdG9yYWdlIiwiX2hpc3RvcnlUaW1lciIsIl91cGRhdGVMaXN0ZW5lciIsInVwZGF0ZUxpc3RlbmVyIiwiX3Jlc2V0TGlzdGVuZXIiLCJyZXNldExpc3RlbmVyIiwib25wb3BzdGF0ZSIsIl9jYWxsTGlzdGVuZXIiLCJuZXdEYXRhIiwiX3VwZGF0ZUhpc3RvcnkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibGlzdGVuZXIiLCJhbGxQYXJhbXMiLCJTZWFyY2hDb25maWciLCJkZWZhdWx0SW5pdGlhbFNlYXJjaCIsInZhbGlkYXRlIiwiQXV0b0NvbXBsZXRlRGF0YSIsInMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiZ2V0SW52ZXJ0ZWQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJBdXRvQ29tcGxldGVBcGkiLCJ2ZXJ0aWNhbCIsInVuaXZlcnNhbCIsInVuaXZlcnNhbE9wdGlvbnMiLCJ2ZXJ0aWNhbE9wdGlvbnMiLCJNb2NrQXV0b0NvbXBsZXRlU2VydmljZSIsImVtcHR5UmVzdWx0cyIsImZpbHRlck9wdGlvbnMiLCJvcHQiLCJsb3dlcmNhc2UiLCJyYW5kb21TdHJpbmciLCJyYW5kb20iLCJRdWVzdGlvbkFuc3dlckFwaSIsInNpdGUiLCJxdWVzdGlvbkxhbmd1YWdlIiwiTW9ja1F1ZXN0aW9uQW5zd2VyU2VydmljZSIsIkFSQklUUkFSWV9CVVNJTkVTU19JRCIsIk1vY2tTZWFyY2hTZXJ2aWNlIiwiX2dldE1vY2tEYXRhSnNvbiIsInJlc3AiLCJ0ZXh0IiwidXNlTW9ja0RhdGEiLCJkZWxheWVkUmVzcG9uc2UiLCJjb25zdHJ1Y3RWZXJ0aWNhbFJlc3BvbnNlIiwic2VjdGlvbiIsInZlcnRpY2FsTW9kdWxlIiwiZmxvb3IiLCJtb2RpZnlSZXN1bHRzIiwiZ2V0UmVzdWx0c0ZpbHRlcmVyIiwiY29uc3RydWN0VW5pdmVyc2FsUmVzcG9uc2UiLCJjb25zdW1lciIsIm1vZGlmeUZuIiwiZmlsbFNlY3Rpb25GaWVsZHMiLCJtZXRhIiwidXVpZCIsInV1aWRWNCIsImZhaWxlZFZlcnRpY2FscyIsInF1ZXJ5RHVyYXRpb25NaWxsaXMiLCJyYW5kb21JbnQiLCJERUZBVUxUUyIsIkFuc3dlcnMiLCJjb21wb25lbnRzIiwiX29uUmVhZHkiLCJfZWxpZ2libGVGb3JBbmFseXRpY3MiLCJfc2VydmljZXMiLCJfYW5hbHl0aWNzUmVwb3J0ZXJTZXJ2aWNlIiwib25TdGF0ZUNoYW5nZSIsInNldEFsbCIsIm1vY2siLCJnZXRNb2NrU2VydmljZXMiLCJnZXRTZXJ2aWNlcyIsInN1YnN0ciIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsInNldEFuYWx5dGljc1JlcG9ydGVyIiwiaW5pdFNjcm9sbExpc3RlbmVyIiwiX3NldERlZmF1bHRJbml0aWFsU2VhcmNoIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwicmVtb3ZlQnlOYW1lIiwib3B0SW4iLCJzZXRDb252ZXJzaW9uVHJhY2tpbmdFbmFibGVkIiwic2VhcmNoQ29uZmlnIiwicHJlcG9wdWxhdGVkUXVlcnkiLCJlcnJvclJlcG9ydGVyU2VydmljZSIsImRlYnVnIiwic3VwcHJlc3NFcnJvclJlcG9ydHMiLCJERUJPVU5DRV9USU1FIiwidGltZW91dCIsInNlbmRFdmVudCIsImlubmVySGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJBTlNXRVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTs7RUFFQTs7Ozs7QUFLQSxxQkFBZTtFQUNiQSxFQUFBQSxVQUFVLEVBQUUsWUFEQztFQUViQyxFQUFBQSxjQUFjLEVBQUUsZ0JBRkg7RUFHYkMsRUFBQUEsZUFBZSxFQUFFO0VBSEosQ0FBZjs7RUNQQTtNQUVxQkMsU0FDbkIsa0JBQXdCO0VBQUEsTUFBWEMsSUFBVyx1RUFBSixFQUFJOztFQUFBOztFQUN0Qjs7Ozs7RUFLQSxPQUFLQyxJQUFMLEdBQVlELElBQUksQ0FBQ0UsR0FBTCxJQUFZLElBQXhCO0VBRUE7Ozs7OztFQUtBLE9BQUtDLFVBQUwsR0FBa0JILElBQUksQ0FBQ0ksU0FBdkI7RUFFQTs7Ozs7RUFJQSxPQUFLQyxPQUFMLEdBQWVMLElBQUksQ0FBQ0ssT0FBTCxJQUFnQixJQUEvQjtFQUVBOzs7OztFQUlBLE9BQUtDLEtBQUwsR0FBYU4sSUFBSSxDQUFDTSxLQUFMLElBQWMsSUFBM0I7RUFFQTs7Ozs7RUFJQSxPQUFLQyxPQUFMLEdBQWVQLElBQUksQ0FBQ08sT0FBTCxJQUFnQixJQUEvQjtFQUVBOzs7OztFQUlBLE9BQUtDLElBQUwsR0FBWVIsSUFBSSxDQUFDUSxJQUFMLElBQWEsSUFBekI7RUFFQTs7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