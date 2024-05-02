/** @module Core */
import { provideCore } from '@yext/search-core/lib/commonjs';
// Using the ESM build for importing the Environment enum due to an issue importing the commonjs version
import { Environment } from '@yext/search-core';
import { generateUUID } from './utils/uuid';
import SearchDataTransformer from './search/searchdatatransformer';

import VerticalResults from './models/verticalresults';
import UniversalResults from './models/universalresults';
import QuestionSubmission from './models/questionsubmission';
import Navigation from './models/navigation';
import AlternativeVerticals from './models/alternativeverticals';
import LocationBias from './models/locationbias';
import QueryTriggers from './models/querytriggers';

import StorageKeys from './storage/storagekeys';
import AnalyticsEvent from './analytics/analyticsevent';
import FilterRegistry from './filters/filterregistry';
import DirectAnswer from './models/directanswer';
import AutoCompleteResponseTransformer from './search/autocompleteresponsetransformer';

import { PRODUCTION, LIB_VERSION, CLOUD_REGION, SANDBOX } from './constants';
import { SearchParams } from '../ui';
import SearchStates from './storage/searchstates';
import Searcher from './models/searcher';
import { mergeAdditionalHttpHeaders } from './utils/mergeAdditionalHttpHeaders';

/** @typedef {import('./storage/storage').default} Storage */

/**
 * Core is the main application container for all of the network and storage
 * related behaviors of the application. It uses an instance of the external Core
 * library to perform the actual network calls.
 */
export default class Core {
  constructor (config = {}) {
    /**
     * A reference to the auth token used for all requests
     * @type {string}
     * @private
     */
    this._token = config.token;

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
     * @type {Object<string, function>}
     * @private
     */
    this._fieldFormatters = config.fieldFormatters || {};

    /**
     * A reference to the core data storage that powers the UI
     * @type {Storage}
     */
    this.storage = config.storage;

    /**
     * The filterRegistry is in charge of setting, removing, and retrieving filters
     * and facet filters from storage.
     * @type {FilterRegistry}
     */
    this.filterRegistry = new FilterRegistry(this.storage);

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

    /**
     * The environment which determines which URLs the requests use.
     * @type {string}
     */
    this._environment = config.environment || PRODUCTION;

    /**
     * Determines the region of the api endpoints used when making search requests.
     * @type {string}
     */
    this._cloudRegion = CLOUD_REGION;

    /** @type {string} */
    this._verticalKey = config.verticalKey;

    /** @type {ComponentManager} */
    this._componentManager = config.componentManager;

    /** @type {import('@yext/search-core').AdditionalHttpHeaders} */
    this._additionalHttpHeaders = mergeAdditionalHttpHeaders(config.additionalHttpHeaders);
  }

  /**
   * Sets a reference in core to the global QueryUpdateListener.
   *
   * @param {QueryUpdateListener} queryUpdateListener
   */
  setQueryUpdateListener (queryUpdateListener) {
    this.queryUpdateListener = queryUpdateListener;
  }

  /**
   * Initializes the {@link Core} by providing it with an instance of the Core library.
   */
  init (config) {
    const environment = this._environment === SANDBOX ? Environment.SANDBOX : Environment.PROD;
    const params = {
      ...(this._token && { token: this._token }),
      ...(this._apiKey && { apiKey: this._apiKey }),
      experienceKey: this._experienceKey,
      locale: this._locale,
      experienceVersion: this._experienceVersion,
      additionalQueryParams: {
        jsLibVersion: LIB_VERSION
      },
      cloudRegion: this._cloudRegion,
      environment,
      ...config
    };

    this._coreLibrary = provideCore(params);
  }

  /**
   * @returns {boolean} A boolean indicating if the {@link Core} has been
   *                    initailized.
   */
  isInitialized () {
    return !!this._coreLibrary;
  }

  /**
   * Send a FOLLOW_UP_QUERY analytics event for subsequent searches from the initial search.
   * The following search must contains a different query id from the previous search.
   *
   * @param {string} newQueryId - id of the new query
   * @param {string} searcher - searcher type of the new query ("UNIVERSAL" or "VERTICAL")
   */
  _reportFollowUpQueryEvent (newQueryId, searcher) {
    const previousQueryId = this.storage.get(StorageKeys.QUERY_ID);
    if (previousQueryId && previousQueryId !== newQueryId) {
      const event = new AnalyticsEvent('FOLLOW_UP_QUERY').addOptions({ searcher });
      this._analyticsReporter.report(event);
    }
  }

  /**
   * Search in the context of a vertical
   * @param {string} verticalKey vertical ID for the search
   * @param {Object} options additional settings for the search.
   * @param {boolean} options.useFacets Whether to apply facets to this search, or to reset them instead
   * @param {boolean} options.resetPagination Whether to reset the search offset, going back to page 1.
   * @param {boolean} options.setQueryParams Whether to persist certain params in the url
   * @param {string} options.sendQueryId Whether to send the queryId currently in storage.
   *                                     If paging within a query, the same ID should be used.
   * @param {Object} query The query details
   * @param {string} query.input The input to search for
   * @param {boolean} query.append If true, adds the results of this query to the end of
   *                               the current results, defaults false
   */
  verticalSearch (verticalKey, options = {}, query = {}) {
    window.performance.mark('yext.answers.verticalQueryStart');
    if (!query.append) {
      const verticalResults = this.storage.get(StorageKeys.VERTICAL_RESULTS);
      if (!verticalResults || verticalResults.searchState !== SearchStates.SEARCH_LOADING) {
        this.storage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
      }
      this.storage.set(StorageKeys.DIRECT_ANSWER, DirectAnswer.searchLoading());
      this.storage.set(StorageKeys.SPELL_CHECK, {});
      this.storage.set(StorageKeys.LOCATION_BIAS, LocationBias.searchLoading());
    }

    const { resetPagination, useFacets, sendQueryId, setQueryParams } = options;
    if (resetPagination) {
      this.storage.delete(StorageKeys.SEARCH_OFFSET);
    }

    if (!useFacets) {
      this.filterRegistry.setFacetFilterNodes([], []);
    }

    const context = this.storage.get(StorageKeys.API_CONTEXT);
    const referrerPageUrl = this.storage.get(StorageKeys.REFERRER_PAGE_URL);

    const defaultQueryInput = this.storage.get(StorageKeys.QUERY) || '';
    const parsedQuery = Object.assign({}, { input: defaultQueryInput }, query);

    if (setQueryParams) {
      if (context) {
        this.storage.setWithPersist(StorageKeys.API_CONTEXT, context);
      }
      if (referrerPageUrl !== undefined) {
        this.storage.setWithPersist(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
      }
    }

    const searchConfig = this.storage.get(StorageKeys.SEARCH_CONFIG) || {};
    if (!searchConfig.verticalKey) {
      this.storage.set(StorageKeys.SEARCH_CONFIG, {
        ...searchConfig,
        verticalKey: verticalKey
      });
    }
    const locationRadius = this._getLocationRadius();
    const queryTrigger = this.storage.get(StorageKeys.QUERY_TRIGGER);
    const queryTriggerForApi = this.getQueryTriggerForSearchApi(queryTrigger);

    return this._coreLibrary
      .verticalSearch({
        verticalKey: verticalKey || searchConfig.verticalKey,
        limit: this.storage.get(StorageKeys.SEARCH_CONFIG)?.limitForVertical,
        location: this._getLocationPayload(),
        query: parsedQuery.input,
        queryId: sendQueryId && this.storage.get(StorageKeys.QUERY_ID),
        retrieveFacets: this._isDynamicFiltersEnabled,
        facets: this.filterRegistry.getFacetsPayload(),
        staticFilter: this.filterRegistry.getStaticFilterPayload(),
        offset: this.storage.get(StorageKeys.SEARCH_OFFSET) || 0,
        skipSpellCheck: this.storage.get(StorageKeys.SKIP_SPELL_CHECK),
        queryTrigger: queryTriggerForApi,
        sessionId: this.getOrSetupSessionId(),
        sessionTrackingEnabled: this.storage.get(StorageKeys.SESSIONS_OPT_IN).value,
        sortBys: this.storage.get(StorageKeys.SORT_BYS),
        /** In the SDK a locationRadius of 0 means "unset my locationRadius" */
        locationRadius: locationRadius === 0 ? undefined : locationRadius,
        context: context && JSON.parse(context),
        referrerPageUrl: referrerPageUrl,
        querySource: this.storage.get(StorageKeys.QUERY_SOURCE),
        additionalHttpHeaders: this._additionalHttpHeaders
      })
      .then(response => SearchDataTransformer.transformVertical(response, this._fieldFormatters, verticalKey))
      .then(data => {
        this._persistFacets();
        this._persistFilters();
        this._persistLocationRadius();
        this._reportFollowUpQueryEvent(data[StorageKeys.QUERY_ID], Searcher.VERTICAL);

        this.storage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);
        this.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);
        this.storage.set(StorageKeys.ALTERNATIVE_VERTICALS, data[StorageKeys.ALTERNATIVE_VERTICALS]);

        if (query.append) {
          const mergedResults = this.storage.get(StorageKeys.VERTICAL_RESULTS)
            .append(data[StorageKeys.VERTICAL_RESULTS]);
          this.storage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
          if (data[StorageKeys.DIRECT_ANSWER].answer) {
            this.storage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);
          }
        } else {
          this.storage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
          this.storage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);
        }

        if (data[StorageKeys.DYNAMIC_FILTERS]) {
          this.storage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
          this.storage.set(StorageKeys.RESULTS_HEADER, data[StorageKeys.DYNAMIC_FILTERS]);
        }
        if (data[StorageKeys.SPELL_CHECK]) {
          this.storage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
        }
        if (data[StorageKeys.LOCATION_BIAS]) {
          this.storage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);
        }
        this.storage.delete(StorageKeys.SKIP_SPELL_CHECK);
        this.storage.delete(StorageKeys.QUERY_TRIGGER);

        const exposedParams = {
          verticalKey: verticalKey,
          queryString: parsedQuery.input,
          resultsCount: this.storage.get(StorageKeys.VERTICAL_RESULTS).resultsCount,
          resultsContext: data[StorageKeys.VERTICAL_RESULTS].resultsContext
        };
        const analyticsEvent = this.onVerticalSearch(exposedParams);
        if (typeof analyticsEvent === 'object') {
          this._analyticsReporter.report(AnalyticsEvent.fromData(analyticsEvent));
        }
        this.updateHistoryAfterSearch(queryTrigger);
        window.performance.mark('yext.answers.verticalQueryResponseRendered');
      })
      .catch(error => {
        this._markSearchComplete(Searcher.VERTICAL);
        throw error;
      })
      .catch(error => {
        console.error('The following problem was encountered during vertical search: ' + error);
      });
  }

  clearResults () {
    this.storage.set(StorageKeys.QUERY, null);
    this.storage.set(StorageKeys.QUERY_ID, '');
    this.storage.set(StorageKeys.RESULTS_HEADER, {});
    this.storage.set(StorageKeys.SPELL_CHECK, {}); // TODO has a model but not cleared w new
    this.storage.set(StorageKeys.DYNAMIC_FILTERS, {}); // TODO has a model but not cleared w new
    this.storage.set(StorageKeys.QUESTION_SUBMISSION, new QuestionSubmission({}));
    this.storage.set(StorageKeys.NAVIGATION, new Navigation());
    this.storage.set(StorageKeys.ALTERNATIVE_VERTICALS, new AlternativeVerticals({}));
    this.storage.set(StorageKeys.DIRECT_ANSWER, new DirectAnswer({}));
    this.storage.set(StorageKeys.LOCATION_BIAS, new LocationBias({}));
    this.storage.set(StorageKeys.VERTICAL_RESULTS, new VerticalResults({}));
    this.storage.set(StorageKeys.UNIVERSAL_RESULTS, new UniversalResults({}));
  }

  /**
   * Page within the results of the last query
   */
  verticalPage () {
    this.triggerSearch(QueryTriggers.PAGINATION);
  }

  search (queryString, options = {}) {
    const urls = this._getUrls(queryString);
    window.performance.mark('yext.answers.universalQueryStart');
    const { setQueryParams } = options;
    const context = this.storage.get(StorageKeys.API_CONTEXT);
    const referrerPageUrl = this.storage.get(StorageKeys.REFERRER_PAGE_URL);

    if (setQueryParams) {
      if (context) {
        this.storage.setWithPersist(StorageKeys.API_CONTEXT, context);
      }
      if (referrerPageUrl !== undefined) {
        this.storage.setWithPersist(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
      }
    }

    this.storage.set(StorageKeys.DIRECT_ANSWER, DirectAnswer.searchLoading());
    const universalResults = this.storage.get(StorageKeys.UNIVERSAL_RESULTS);
    if (!universalResults || universalResults.searchState !== SearchStates.SEARCH_LOADING) {
      this.storage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
    }
    this.storage.set(StorageKeys.QUESTION_SUBMISSION, {});
    this.storage.set(StorageKeys.SPELL_CHECK, {});
    this.storage.set(StorageKeys.LOCATION_BIAS, LocationBias.searchLoading());

    const queryTrigger = this.storage.get(StorageKeys.QUERY_TRIGGER);
    const queryTriggerForApi = this.getQueryTriggerForSearchApi(queryTrigger);

    return this._coreLibrary
      .universalSearch({
        query: queryString,
        limit: this.storage.get(StorageKeys.SEARCH_CONFIG)?.universalLimit,
        location: this._getLocationPayload(),
        skipSpellCheck: this.storage.get(StorageKeys.SKIP_SPELL_CHECK),
        queryTrigger: queryTriggerForApi,
        sessionId: this.getOrSetupSessionId(),
        sessionTrackingEnabled: this.storage.get(StorageKeys.SESSIONS_OPT_IN).value,
        context: context && JSON.parse(context),
        referrerPageUrl: referrerPageUrl,
        querySource: this.storage.get(StorageKeys.QUERY_SOURCE),
        additionalHttpHeaders: this._additionalHttpHeaders
      })
      .then(response => SearchDataTransformer.transformUniversal(response, urls, this._fieldFormatters))
      .then(data => {
        this._reportFollowUpQueryEvent(data[StorageKeys.QUERY_ID], Searcher.UNIVERSAL);
        this.storage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);
        this.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);
        this.storage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);
        this.storage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS]);
        this.storage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
        this.storage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);

        this.storage.delete(StorageKeys.SKIP_SPELL_CHECK);
        this.storage.delete(StorageKeys.QUERY_TRIGGER);

        const exposedParams = this._getOnUniversalSearchParams(
          data[StorageKeys.UNIVERSAL_RESULTS].sections,
          queryString);
        const analyticsEvent = this.onUniversalSearch(exposedParams);
        if (typeof analyticsEvent === 'object') {
          this._analyticsReporter.report(AnalyticsEvent.fromData(analyticsEvent));
        }
        this.updateHistoryAfterSearch(queryTrigger);
        window.performance.mark('yext.answers.universalQueryResponseRendered');
      })
      .catch(error => {
        this._markSearchComplete(Searcher.UNIVERSAL);
        throw error;
      })
      .catch(error => {
        console.error('The following problem was encountered during universal search: ' + error);
      });
  }

  /**
   * Update the search state of the results in storage to SEARCH_COMPLETE
   * when handling errors from universal and vertical search. This will
   * trigger a rerender of the components, which could potentially throw
   * a new error.
   *
   * @param {Searcher} searcherType
   */
  _markSearchComplete (searcherType) {
    const resultStorageKey = searcherType === Searcher.UNIVERSAL
      ? StorageKeys.UNIVERSAL_RESULTS
      : StorageKeys.VERTICAL_RESULTS;
    const results = this.storage.get(resultStorageKey);
    if (results && results.searchState !== SearchStates.SEARCH_COMPLETE) {
      results.searchState = SearchStates.SEARCH_COMPLETE;
      this.storage.set(resultStorageKey, results);
    }
    const directanswer = this.storage.get(StorageKeys.DIRECT_ANSWER);
    if (directanswer && directanswer.searchState !== SearchStates.SEARCH_COMPLETE) {
      directanswer.searchState = SearchStates.SEARCH_COMPLETE;
      this.storage.set(StorageKeys.DIRECT_ANSWER, directanswer);
    }
    const locationbias = this.storage.get(StorageKeys.LOCATION_BIAS);
    if (locationbias && locationbias.searchState !== SearchStates.SEARCH_COMPLETE) {
      locationbias.searchState = SearchStates.SEARCH_COMPLETE;
      this.storage.set(StorageKeys.LOCATION_BIAS, locationbias);
    }
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
    return this._coreLibrary
      .universalAutocomplete({
        input: input,
        sessionTrackingEnabled: this.storage.get(StorageKeys.SESSIONS_OPT_IN).value,
        additionalHttpHeaders: this._additionalHttpHeaders
      })
      .then(response => AutoCompleteResponseTransformer.transformAutoCompleteResponse(response))
      .then(data => {
        this.storage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
        return data;
      }).catch(error => {
        console.error('Universal autocomplete failed with the following error: ' + error);
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
    return this._coreLibrary
      .verticalAutocomplete({
        input: input,
        verticalKey: verticalKey,
        sessionTrackingEnabled: this.storage.get(StorageKeys.SESSIONS_OPT_IN).value,
        additionalHttpHeaders: this._additionalHttpHeaders
      })
      .then(response => AutoCompleteResponseTransformer.transformAutoCompleteResponse(response))
      .then(data => {
        this.storage.set(`${StorageKeys.AUTOCOMPLETE}.${namespace}`, data);
        return data;
      }).catch(error => {
        console.error('Vertical autocomplete failed with the following error: ' + error);
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
    const searchParamFields = config.searchParameters.fields.map(field => ({
      fieldApiName: field.fieldId,
      entityType: field.entityTypeId,
      fetchEntities: field.shouldFetchEntities
    }));
    return this._coreLibrary
      .filterSearch({
        input: input,
        verticalKey: config.verticalKey,
        fields: searchParamFields,
        sectioned: config.searchParameters.sectioned,
        sessionTrackingEnabled: this.storage.get(StorageKeys.SESSIONS_OPT_IN).value,
        additionalHttpHeaders: this._additionalHttpHeaders
      })
      .then(
        response => AutoCompleteResponseTransformer.transformFilterSearchResponse(response),
        error => console.error(error))
      .then(data => {
        this.storage.set(`${StorageKeys.AUTOCOMPLETE}.${config.namespace}`, data);
      }).catch(error => {
        console.error('Filter search failed with the following error: ' + error);
      });
  }

  /**
   * Submits a question to the server and updates the underlying question model
   * @param {object} question The question object to submit to the server
   * @param {number} question.entityId The entity to associate with the question (required)
   * @param {string} question.site The "publisher" of the (e.g. 'FIRST_PARTY')
   * @param {string} question.name The name of the author
   * @param {string} question.email The email address of the author
   * @param {string} question.questionText The question
   * @param {string} question.questionDescription Additional information about the question
   */
  submitQuestion (question) {
    return this._coreLibrary
      .submitQuestion({
        ...question,
        sessionTrackingEnabled: this.storage.get(StorageKeys.SESSIONS_OPT_IN).value,
        additionalHttpHeaders: this._additionalHttpHeaders
      })
      .then(() => {
        this.storage.set(
          StorageKeys.QUESTION_SUBMISSION,
          QuestionSubmission.submitted());
      }).catch(error => {
        console.error('Question submission failed with the following error: ' + error);
        throw error;
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
    this.storage.setWithPersist(StorageKeys.SORT_BYS, sortBys);
  }

  /**
   * Clears the sortBys key in storage.
   */
  clearSortBys () {
    this.storage.delete(StorageKeys.SORT_BYS);
  }

  /**
   * Stores the given query into storage, to be used for the next search
   * @param {string} query the query to store
   */
  setQuery (query) {
    this.storage.setWithPersist(StorageKeys.QUERY, query);
  }

  /**
   * Stores the provided query ID, to be used in analytics
   * @param {string} queryId The query id to store
   */
  setQueryId (queryId) {
    this.storage.set(StorageKeys.QUERY_ID, queryId);
  }

  triggerSearch (queryTrigger, newQuery) {
    const query = newQuery !== undefined
      ? newQuery
      : this.storage.get(StorageKeys.QUERY) || '';
    queryTrigger
      ? this.storage.set(StorageKeys.QUERY_TRIGGER, queryTrigger)
      : this.storage.delete(StorageKeys.QUERY_TRIGGER);
    this.setQuery(query);
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
    return this.filterRegistry.getFilterNodeByKey(StorageKeys.LOCATION_RADIUS_FILTER_NODE);
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
   * Gets the location object needed for search-core
   *
   * @returns {LatLong|undefined} from search-core
   */
  _getLocationPayload () {
    const geolocation = this.storage.get(StorageKeys.GEOLOCATION);
    return geolocation && {
      latitude: geolocation.lat,
      longitude: geolocation.lng
    };
  }

  /**
   * Returns the query trigger for the search API given the SDK query trigger
   * @param {QueryTriggers} queryTrigger SDK query trigger
   * @returns {QueryTriggers} query trigger if accepted by the search API, null o/w
   */
  getQueryTriggerForSearchApi (queryTrigger) {
    if (![QueryTriggers.INITIALIZE, QueryTriggers.SUGGEST, QueryTriggers.VOICE_SEARCH]
      .includes(queryTrigger)) {
      return null;
    }
    return queryTrigger;
  }

  /**
   * Depending on the QUERY_TRIGGER, either replaces the history state
   * for searches on load/back navigation (INITIALIZE, SUGGEST, QUERY_PARAMETER),
   * or pushes a new state.
   *
   * @param {QueryTriggers} queryTrigger SDK query trigger
   * @returns {boolean}
   */
  updateHistoryAfterSearch (queryTrigger) {
    const replaceStateTriggers = [
      QueryTriggers.INITIALIZE,
      QueryTriggers.SUGGEST,
      QueryTriggers.QUERY_PARAMETER
    ];
    if (replaceStateTriggers.includes(queryTrigger)) {
      this.storage.replaceHistoryWithState();
    } else {
      this.storage.pushStateToHistory();
    }
  }

  /**
   * Returns the current `locationRadius` state
   * @returns {number|null}
   */
  _getLocationRadius () {
    const locationRadiusFilterNode = this.getLocationRadiusFilterNode();
    return locationRadiusFilterNode
      ? locationRadiusFilterNode.getFilter().value
      : null;
  }

  /**
   * Persists the current `facetFilters` state into the URL.
   */
  _persistFacets () {
    const persistedFacets = this.filterRegistry.getFacets();
    this.storage.setWithPersist(StorageKeys.PERSISTED_FACETS, persistedFacets);
  }

  /**
   * Persists the current `filters` state into the URL.
   */
  _persistFilters () {
    const totalFilterNode = this.filterRegistry.getAllStaticFilterNodesCombined();
    const persistedFilter = totalFilterNode.getFilter();
    this.storage.setWithPersist(StorageKeys.PERSISTED_FILTER, persistedFilter);
  }

  /**
   * Persists the current `locationRadius` state into the URL.
   */
  _persistLocationRadius () {
    const locationRadius = this._getLocationRadius();
    if (locationRadius || locationRadius === 0) {
      this.storage.setWithPersist(StorageKeys.PERSISTED_LOCATION_RADIUS, locationRadius);
    } else {
      this.storage.delete(StorageKeys.PERSISTED_LOCATION_RADIUS);
    }
  }

  enableDynamicFilters () {
    this._isDynamicFiltersEnabled = true;
  }

  on (evt, storageKey, cb) {
    this.storage.registerListener({
      eventType: evt,
      storageKey: storageKey,
      callback: cb
    });
    return this.storage;
  }

  /**
   * This is needed to support very old usages of the SDK that have not been updated
   * to use StorageKeys.VERTICAL_PAGES_CONFIG
   */
  _getUrls (query) {
    const nav = this._componentManager.getActiveComponent('Navigation');
    if (!nav) {
      return undefined;
    }

    const tabs = nav.getState('tabs');
    const urls = {};

    if (tabs && Array.isArray(tabs)) {
      for (let i = 0; i < tabs.length; i++) {
        const params = new SearchParams(tabs[i].url.split('?')[1]);
        params.set('query', query);

        let url = tabs[i].baseUrl;
        if (params.toString().length > 0) {
          url += '?' + params.toString();
        }
        urls[tabs[i].configId] = url;
      }
    }
    return urls;
  }

  getOrSetupSessionId () {
    if (this.storage.get(StorageKeys.SESSIONS_OPT_IN).value) {
      try {
        let sessionId = window.sessionStorage.getItem('sessionId');
        if (!sessionId) {
          sessionId = generateUUID();
          window.sessionStorage.setItem('sessionId', sessionId);
        }
        return sessionId;
      } catch (err) {
        console.warn('Unable to use browser sessionStorage for sessionId.\n', err);
      }
    }
    return null;
  }
}
