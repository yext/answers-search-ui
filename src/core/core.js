/** @module Core */

import SearchDataTransformer from './search/searchdatatransformer';

import VerticalResults from './models/verticalresults';
import UniversalResults from './models/universalresults';
import QuestionSubmission from './models/questionsubmission';
import SearchIntents from './models/searchintents';
import Navigation from './models/navigation';
import AlternativeVerticals from './models/alternativeverticals';
import DirectAnswer from './models/directanswer';
import LocationBias from './models/locationbias';
import QueryTriggers from './models/querytriggers';

import StorageKeys from './storage/storagekeys';
import AnalyticsEvent from './analytics/analyticsevent';
import FilterRegistry from './filters/filterregistry';

/** @typedef {import('./services/searchservice').default} SearchService */
/** @typedef {import('./services/autocompleteservice').default} AutoCompleteService */
/** @typedef {import('./services/questionanswerservice').default} QuestionAnswerService */

/**
 * Core is the main application container for all of the network and storage
 * related behaviors of the application.
 */
export default class Core {
  constructor (config = {}) {
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
     * The filterRegistry is in charge of setting, removing, and retrieving filters
     * and facet filters from global storage.
     * @type {FilterRegistry}
     */
    this.filterRegistry = new FilterRegistry(this.globalStorage);

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

    /**
     * A local reference to the analytics reporter, used to report events for this component
     * @type {AnalyticsReporter}
     */
    this._analyticsReporter = config.analyticsReporter;

    /**
     * A user-given function that returns an analytics event to fire after a universal search.
     * @type {Function}
     */
    this.onUniversalSearch = config.onUniversalSearch || function () {};

    /**
     * A user-given function that returns an analytics event to fire after a vertical search.
     * @type {Function}
     */
    this.onVerticalSearch = config.onVerticalSearch || function () {};
  }

  /**
   * Search in the context of a vertical
   * @param {string} verticalKey vertical ID for the search
   * @param {Object} options additional settings for the search.
   * @param {Object} query The query details
   * @param {string} query.input The input to search for
   * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
   * @param {boolean} query.append If true, adds the results of this query to the end of the current results, defaults false
   */
  verticalSearch (verticalKey, options = {}, query = {}) {
    window.performance.mark('yext.answers.verticalQueryStart');
    if (!query.append) {
      this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
      this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
      this.globalStorage.set(StorageKeys.LOCATION_BIAS, {});
    }

    const { resetPagination, useFacets } = options;
    if (resetPagination) {
      this.persistentStorage.delete(StorageKeys.SEARCH_OFFSET);
      this.globalStorage.delete(StorageKeys.SEARCH_OFFSET);
    }

    if (!useFacets) {
      this.filterRegistry.setFacetFilterNodes([], []);
    }

    const { setQueryParams } = options;
    const context = this.globalStorage.getState(StorageKeys.API_CONTEXT);
    const referrerPageUrl = this.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);

    const defaultQueryInput = this.globalStorage.getState(StorageKeys.QUERY) || '';
    const parsedQuery = Object.assign({}, { input: defaultQueryInput }, query);

    if (setQueryParams) {
      if (context) {
        this.persistentStorage.set(StorageKeys.API_CONTEXT, context, true);
      }
      if (referrerPageUrl !== null) {
        this.persistentStorage.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl, true);
      }
    }

    const searchConfig = this.globalStorage.getState(StorageKeys.SEARCH_CONFIG) || {};
    if (!searchConfig.verticalKey) {
      this.globalStorage.set(StorageKeys.SEARCH_CONFIG, {
        ...searchConfig,
        verticalKey: verticalKey
      });
    }

    const locationRadiusFilterNode = this.getLocationRadiusFilterNode();
    const queryTrigger = this.getQueryTriggerForSearchApi(
      this.globalStorage.getState(StorageKeys.QUERY_TRIGGER)
    );
    return this._searcher
      .verticalSearch(verticalKey, {
        limit: this.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit,
        geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
        ...parsedQuery,
        filter: this.filterRegistry.getStaticFilterPayload(),
        facetFilter: this.filterRegistry.getFacetFilterPayload(),
        offset: this.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0,
        isDynamicFiltersEnabled: this._isDynamicFiltersEnabled,
        skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
        queryTrigger: queryTrigger,
        sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN).value,
        sortBys: this.globalStorage.getState(StorageKeys.SORT_BYS),
        locationRadius: locationRadiusFilterNode ? locationRadiusFilterNode.getFilter().value : null,
        context: context,
        referrerPageUrl: referrerPageUrl,
        querySource: this.globalStorage.getState(StorageKeys.QUERY_SOURCE)
      })
      .then(response => SearchDataTransformer.transformVertical(response, this._fieldFormatters, verticalKey))
      .then(data => {
        this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);
        this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);
        this.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);
        this.globalStorage.set(StorageKeys.ALTERNATIVE_VERTICALS, data[StorageKeys.ALTERNATIVE_VERTICALS]);

        if (query.append) {
          const mergedResults = this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS)
            .append(data[StorageKeys.VERTICAL_RESULTS]);
          this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
        } else {
          this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
        }

        if (data[StorageKeys.DYNAMIC_FILTERS]) {
          this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
          this.globalStorage.set(StorageKeys.RESULTS_HEADER, data[StorageKeys.DYNAMIC_FILTERS]);
        }
        if (data[StorageKeys.SPELL_CHECK]) {
          this.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
        }
        if (data[StorageKeys.LOCATION_BIAS]) {
          this.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);
        }
        this.globalStorage.delete('skipSpellCheck');
        this.globalStorage.delete(StorageKeys.QUERY_TRIGGER);

        const exposedParams = {
          verticalKey: verticalKey,
          queryString: parsedQuery.input,
          resultsCount: this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS).resultsCount,
          resultsContext: data[StorageKeys.VERTICAL_RESULTS].resultsContext
        };
        const analyticsEvent = this.onVerticalSearch(exposedParams);
        if (typeof analyticsEvent === 'object') {
          this._analyticsReporter.report(AnalyticsEvent.fromData(analyticsEvent));
        }
        window.performance.mark('yext.answers.verticalQueryResponseRendered');
      });
  }

  clearResults () {
    this.globalStorage.set(StorageKeys.QUERY, null);
    this.globalStorage.set(StorageKeys.QUERY_ID, '');
    this.globalStorage.set(StorageKeys.RESULTS_HEADER, {});
    this.globalStorage.set(StorageKeys.SPELL_CHECK, {}); // TODO has a model but not cleared w new
    this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, {}); // TODO has a model but not cleared w new
    this.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, new QuestionSubmission({}));
    this.globalStorage.set(StorageKeys.INTENTS, new SearchIntents({}));
    this.globalStorage.set(StorageKeys.NAVIGATION, new Navigation());
    this.globalStorage.set(StorageKeys.ALTERNATIVE_VERTICALS, new AlternativeVerticals({}));
    this.globalStorage.set(StorageKeys.DIRECT_ANSWER, new DirectAnswer({}));
    this.globalStorage.set(StorageKeys.LOCATION_BIAS, new LocationBias({}));
    this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, new VerticalResults({}));
    this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, new UniversalResults({}));
  }

  /**
   * Page within the results of the last query
   * TODO: Should id be in all searches? Currently is only in searches done by the pagination
   * component
   * @param {string} verticalKey The vertical key to use in the search
   */
  verticalPage (verticalKey) {
    this.verticalSearch(verticalKey, { useFacets: true, setQueryParams: true }, {
      id: this.globalStorage.getState(StorageKeys.QUERY_ID)
    });
  }

  search (queryString, urls, options = {}) {
    window.performance.mark('yext.answers.universalQueryStart');
    const { setQueryParams } = options;
    const context = this.globalStorage.getState(StorageKeys.API_CONTEXT);
    const referrerPageUrl = this.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);

    if (setQueryParams) {
      if (context) {
        this.persistentStorage.set(StorageKeys.API_CONTEXT, context, true);
      }
      if (referrerPageUrl !== null) {
        this.persistentStorage.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl, true);
      }
    }

    this.globalStorage.set(StorageKeys.DIRECT_ANSWER, {});
    this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
    this.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, {});
    this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
    this.globalStorage.set(StorageKeys.LOCATION_BIAS, {});

    const queryTrigger = this.getQueryTriggerForSearchApi(
      this.globalStorage.getState(StorageKeys.QUERY_TRIGGER)
    );
    return this._searcher
      .universalSearch(queryString, {
        geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
        skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
        queryTrigger: queryTrigger,
        sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN).value,
        context: context,
        referrerPageUrl: referrerPageUrl,
        querySource: this.globalStorage.getState(StorageKeys.QUERY_SOURCE)
      })
      .then(response => SearchDataTransformer.transform(response, urls, this._fieldFormatters))
      .then(data => {
        this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);
        this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);
        this.globalStorage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);
        this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);
        this.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);
        this.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
        this.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);
        this.globalStorage.delete('skipSpellCheck');
        this.globalStorage.delete(StorageKeys.QUERY_TRIGGER);

        const exposedParams = this._getOnUniversalSearchParams(
          data[StorageKeys.UNIVERSAL_RESULTS].sections,
          queryString);
        const analyticsEvent = this.onUniversalSearch(exposedParams);
        if (typeof analyticsEvent === 'object') {
          this._analyticsReporter.report(AnalyticsEvent.fromData(analyticsEvent));
        }
        window.performance.mark('yext.answers.universalQueryResponseRendered');
      });
  }

  /**
   * Builds the object passed as a parameter to onUniversalSearch. This object
   * contains information about the universal search's query and result counts.
   *
   * @param {Array<Section>} sections The sections of results.
   * @param {string} queryString The search query.
   * @return {Object<string, ?>}
   */
  _getOnUniversalSearchParams (sections, queryString) {
    const resultsCountByVertical = sections.reduce(
      (resultsCountMap, section) => {
        const { verticalConfigId, resultsCount, results } = section;
        resultsCountMap[verticalConfigId] = {
          totalResultsCount: resultsCount,
          displayedResultsCount: results.length
        };
        return resultsCountMap;
      },
      {});
    const exposedParams = {
      queryString,
      sectionsCount: sections.length,
      resultsCountByVertical
    };

    return exposedParams;
  }

  /**
   * Given an input, query for a list of similar results and set into storage
   *
   * @param {string} input     the string to autocomplete
   * @param {string} namespace the namespace to use for the storage key
   */
  autoCompleteUniversal (input, namespace) {
    return this._autoComplete
      .queryUniversal(input)
      .then(data => {
        this.globalStorage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
        return data;
      });
  }

  /**
   * Given an input, query for a list of similar results in the provided vertical
   * and set into storage
   *
   * @param {string} input       the string to autocomplete
   * @param {string} namespace the namespace to use for the storage key
   * @param {string} verticalKey the vertical key for the experience
   */
  autoCompleteVertical (input, namespace, verticalKey) {
    return this._autoComplete
      .queryVertical(input, verticalKey)
      .then(data => {
        this.globalStorage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
        return data;
      });
  }

  /**
   * Given an input, provide a list of suitable filters for autocompletion
   *
   * @param {string} input  the string to search for filters with
   * @param {object} config  the config to serach for filters with
   * @param {string} config.namespace  the namespace to use for the storage key
   * @param {string} config.verticalKey the vertical key for the config
   * @param {object} config.searchParameters  the search parameters for the config v2
   */
  autoCompleteFilter (input, config) {
    return this._autoComplete
      .queryFilter(input, config)
      .then(data => {
        this.globalStorage.set(`${StorageKeys.AUTOCOMPLETE}.${config.namespace}`, data);
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
  submitQuestion (question) {
    return this._questionAnswer
      .submitQuestion(question)
      .then(data => {
        this.globalStorage.set(
          StorageKeys.QUESTION_SUBMISSION,
          QuestionSubmission.submitted());
      });
  }

  /**
   * Stores the given sortBy into storage, to be used for the next search
   * @param {Object} sortByOptions
   */
  setSortBys (...sortByOptions) {
    const sortBys = sortByOptions.map(option => {
      return {
        type: option.type,
        field: option.field,
        direction: option.direction
      };
    });
    this.globalStorage.set(StorageKeys.SORT_BYS, JSON.stringify(sortBys));
  }

  /**
   * Clears the sortBys key in global storage.
   */
  clearSortBys () {
    this.globalStorage.delete(StorageKeys.SORT_BYS);
  }

  /**
   * Stores the given query into storage, to be used for the next search
   * @param {string} query the query to store
   */
  setQuery (query) {
    this.globalStorage.set(StorageKeys.QUERY, query);
  }

  /**
   * Stores the provided query ID, to be used in analytics
   * @param {string} queryId The query id to store
   */
  setQueryId (queryId) {
    this.globalStorage.set(StorageKeys.QUERY_ID, queryId);
  }

  /**
   * Get all of the {@link FilterNode}s for static filters.
   * @returns {Array<FilterNode>}
   */
  getStaticFilterNodes () {
    return this.filterRegistry.getStaticFilterNodes();
  }

  /**
   * Get all of the active {@link FilterNode}s for facets.
   * @returns {Array<FilterNode>}
   */
  getFacetFilterNodes () {
    return this.filterRegistry.getFacetFilterNodes();
  }

  /**
   * Get the {@link FilterNode} affecting the locationRadius url parameter.
   * @returns {FilterNode}
   */
  getLocationRadiusFilterNode () {
    return this.filterRegistry.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS);
  }

  /**
   * Sets the filter nodes used for the current facet filters.
   *
   * Because the search response only sends back one
   * set of facet filters, there can only be one active facet filter node
   * at a time.
   * @param {Array<string>} availableFieldIds
   * @param {Array<FilterNode>} filterNodes
   */
  setFacetFilterNodes (availableFieldids = [], filterNodes = []) {
    this.filterRegistry.setFacetFilterNodes(availableFieldids, filterNodes);
  }

  /**
   * Sets the specified {@link FilterNode} under the given key.
   * Will replace a preexisting node if there is one.
   * @param {string} namespace
   * @param {FilterNode} filterNode
   */
  setStaticFilterNodes (namespace, filterNode) {
    this.filterRegistry.setStaticFilterNodes(namespace, filterNode);
  }

  /**
   * Sets the locationRadius filterNode.
   * @param {FilterNode} filterNode
   */
  setLocationRadiusFilterNode (filterNode) {
    this.filterRegistry.setLocationRadiusFilterNode(filterNode);
  }

  /**
   * Remove the static FilterNode with this namespace.
   * @param {string} namespace
   */
  clearStaticFilterNode (namespace) {
    this.filterRegistry.clearStaticFilterNode(namespace);
  }

  /**
   * Remove all facet FilterNodes.
   */
  clearFacetFilterNodes () {
    this.filterRegistry.clearFacetFilterNodes();
  }

  /**
   * Clears the locationRadius filterNode.
   */
  clearLocationRadiusFilterNode () {
    this.filterRegistry.clearLocationRadiusFilterNode();
  }

  /**
   * Returns the query trigger for the search API given the SDK query trigger
   * @param {QueryTriggers} queryTrigger SDK query trigger
   * @returns {QueryTriggers} query trigger if accepted by the search API, null o/w
   */
  getQueryTriggerForSearchApi (queryTrigger) {
    if (queryTrigger === QueryTriggers.QUERY_PARAMETER) {
      return null;
    }
    return queryTrigger;
  }

  enableDynamicFilters () {
    this._isDynamicFiltersEnabled = true;
  }

  on (evt, moduleId, cb) {
    return this.globalStorage.on(evt, moduleId, cb);
  }
}
