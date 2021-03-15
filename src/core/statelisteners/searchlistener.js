import QueryTriggers from '../models/querytriggers';
import SearchOptionsFactory from '../search/searchoptionsfactory';
import StorageKeys from '../storage/storagekeys';

/**
 * SearchListener is responsible for running a vertical or universal search when
 * the QUERY storage key is updated.
 */
export default class SearchListener {
  constructor (systemConfig, config) {
    this.storage = systemConfig.storage;
    this.componentManager = systemConfig.componentManager;
    this.core = systemConfig.core;
    this.config = {
      searchCooldown: 300,
      verticalKey: undefined,
      allowEmptySearch: true,
      defaultInitialSearch: undefined,
      ...config
    };

    /**
     * Middleware functions to be run before a search. Can be either async or sync.
     */
    this.middleware = [];

    this.searchOptionsFactory = new SearchOptionsFactory();
  }

  /**
   * Update the config of SearchListener. This function is needed for backwards compatibility from when
   * this listener used to live in the SearchBar component.
   *
   * @param {Object} newConfig
   */
  updateConfig (newConfig) {
    this.config = {
      ...this.config,
      ...newConfig
    };
  }

  /**
   * Register a middleware, to be called before searches are run.
   * Middleware must return a Promise if they are async.
   *
   * @param {Function} middlewareFunction
   */
  registerMiddleware (middlewareFunction) {
    this.middleware.push(middlewareFunction);
  }

  /**
   * Initialize the QUERY update storage listener.
   *
   * @returns {SearchListener}
   */
  init () {
    this.storage.registerListener({
      storageKey: StorageKeys.QUERY,
      eventType: 'update',
      callback: query => this._handleQueryUpdate(query)
    });
    return this;
  }

  /**
   * Runs a debounced search. If the query is null, set the query to the defaultInitialSearch,
   * which retriggers the QUERY listener.
   *
   * @param {string} query
   */
  _handleQueryUpdate (query) {
    if (query === null) {
      if (this.config.defaultInitialSearch || this.config.defaultInitialSearch === '') {
        this.storage.set(StorageKeys.QUERY_TRIGGER, QueryTriggers.INITIALIZE);
        this.storage.set(StorageKeys.QUERY, this.config.defaultInitialSearch);
      }
      return;
    }
    this._debouncedSearch(query);
  }

  _debouncedSearch (query) {
    if (this._throttled ||
      (!query && !this.config.allowEmptySearch &&
        this.storage.get(StorageKeys.QUERY_TRIGGER) !== QueryTriggers.FILTER_COMPONENT)) {
      return;
    }

    this._throttled = true;
    setTimeout(() => { this._throttled = false; }, this._searchCooldown);
    return this._search(query);
  }

  _search (query) {
    const middlewarePromises = this.middleware.map(middleware => middleware(query));
    const queryTrigger = this.storage.get(StorageKeys.QUERY_TRIGGER);
    return Promise.all(middlewarePromises).then(() => {
      if (this.config.verticalKey) {
        return this.core.verticalSearch(
          this.config.verticalKey, this.searchOptionsFactory.create(queryTrigger), { input: query });
      } else {
        return this.core.search(query, this.searchOptionsFactory.create(queryTrigger));
      }
    });
  }
}
