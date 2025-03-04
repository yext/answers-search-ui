import GenerativeDirectAnswer from '../models/generativedirectanswer';
import Searcher from '../models/searcher';
import SearchStates from '../storage/searchstates';
import StorageKeys from '../storage/storagekeys';

/**
 * ResultsUpdateListener is responsible for executing a generative direct answer call when
 * the UNIVERSAL_RESULTS or VERTICAL_RESULTS storage keys are updated.
 */
export default class ResultsUpdateListener {
  constructor (core, config) {
    this.core = core;
    this.config = {
      searchCooldown: 300,
      verticalKey: undefined,
      allowEmptySearch: true,
      defaultInitialSearch: undefined,
      ...config
    };

    this.core.storage.registerListener({
      storageKey: StorageKeys.UNIVERSAL_RESULTS,
      eventType: 'update',
      callback: universalResults => {
        const isSearchComplete = universalResults.searchState === SearchStates.SEARCH_COMPLETE;
        if (isSearchComplete) {
          this._handleUniversalResultsUpdate(universalResults);
        }
      }
    });
    this.core.storage.registerListener({
      storageKey: StorageKeys.VERTICAL_RESULTS,
      eventType: 'update',
      callback: verticalResults => {
        const isSearchComplete = verticalResults.searchState === SearchStates.SEARCH_COMPLETE;
        if (isSearchComplete) {
          const results = verticalResults.searchCoreDocument ? [verticalResults.searchCoreDocument] : [];
          this._handleVerticalResultsUpdate(results, Searcher.VERTICAL);
        }
      }
    });
  }

  /**
   * Extracts the VerticalResults from the UniversalResults and passes them along to the
   *  _handleVerticalResultsUpdate method.
   *
   * @param {UniversalResults} universalResults
   */
  _handleUniversalResultsUpdate (universalResults) {
    const verticalResults = universalResults.sections
      .map(section => section.searchCoreDocument)
      .filter(d => d !== null);
    this._handleVerticalResultsUpdate(verticalResults, Searcher.UNIVERSAL);
  }

  /**
     * Calls into search-core to generate a direct answer from the search-core vertical results.
     * If no results are present, we will not attempt to find a generative direct answer.
     *
     * @param {VerticalResults[]} verticalResultsList list of search-core VerticalResults
     * @param {string} searcher the type of search that generated these results
     */
  _handleVerticalResultsUpdate (verticalResultsList, searcher) {
    const searchTerm = this.core.storage.get(StorageKeys.QUERY);
    if (!verticalResultsList || verticalResultsList.length === 0 || !searchTerm) {
      this.core.storage.set(StorageKeys.GENERATIVE_DIRECT_ANSWER, new GenerativeDirectAnswer({}));
      return;
    }
    this.core.storage.set(StorageKeys.GENERATIVE_DIRECT_ANSWER, GenerativeDirectAnswer.searchLoading());
    this.core.generativeDirectAnswer(verticalResultsList, searcher);
  }
}
