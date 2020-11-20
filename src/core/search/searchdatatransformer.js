/** @module SearchDataTransformer */

import UniversalResults from '../models/universalresults';
import DirectAnswer from '../models/directanswer';
import Navigation from '../models/navigation';
import VerticalResults from '../models/verticalresults';
import SpellCheck from '../models/spellcheck';
import StorageKeys from '../storage/storagekeys';
import DynamicFilters from '../models/dynamicfilters';
import SearchIntents from '../models/searchintents';
import LocationBias from '../models/locationbias';
import AlternativeVerticals from '../models/alternativeverticals';
import ResultsContext from '../storage/resultscontext';

/**
 * A Data Transformer that takes the response object from a Search request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 */
export default class SearchDataTransformer {
  static transformUniversal (data, urls = {}, formatters) {
    return {
      [StorageKeys.QUERY_ID]: data.queryId,
      [StorageKeys.NAVIGATION]: Navigation.fromCore(data.verticalResults),
      [StorageKeys.DIRECT_ANSWER]: DirectAnswer.fromCore(data.directAnswer),
      [StorageKeys.UNIVERSAL_RESULTS]: UniversalResults.fromCore(data, urls),
      [StorageKeys.INTENTS]: SearchIntents.fromCore(data.searchIntents),
      [StorageKeys.SPELL_CHECK]: SpellCheck.fromCore(data.spellCheck),
      [StorageKeys.LOCATION_BIAS]: LocationBias.fromCore(data.locationBias)
    };
  }

  static transformVertical (coreResponse) {
    const hasResults = coreResponse.verticalResults &&
      coreResponse.verticalResults.results &&
      coreResponse.verticalResults.resultsCount > 0;

    let resultsContext = ResultsContext.NORMAL;
    let response = coreResponse;
    if (!hasResults) {
      resultsContext = ResultsContext.NO_RESULTS;
      response = SearchDataTransformer._reshapeForNoResults(coreResponse);
      console.log('reshaped response:');
      console.log(response);
    }

    return {
      [StorageKeys.QUERY_ID]: response.queryId,
      [StorageKeys.NAVIGATION]: new Navigation(), // Vertical doesn't respond with ordering, so use empty nav.
      [StorageKeys.VERTICAL_RESULTS]: VerticalResults.fromCore(
        response.verticalResults, {}, resultsContext),
      [StorageKeys.DYNAMIC_FILTERS]: DynamicFilters.from(response.facets, resultsContext),
      [StorageKeys.INTENTS]: SearchIntents.fromCore(response.searchIntents),
      [StorageKeys.SPELL_CHECK]: SpellCheck.from(response.spellCheck),
      [StorageKeys.ALTERNATIVE_VERTICALS]: AlternativeVerticals.from(response.alternativeVerticals),
      [StorageKeys.LOCATION_BIAS]: LocationBias.fromCore(response.locationBias)
    };
  }

  /**
   * Form response as if the results from `allResultsForVertical` were the actual
   * results in `results`
   *
   * @param {Object} response The server response
   */
  static _reshapeForNoResults (response) {
    const allResultsForVertical = response.allResultsForVertical || {};
    const { results, resultsCount } = allResultsForVertical.verticalResults || {};
    return {
      ...response,
      results: results || [],
      resultsCount: resultsCount || 0,
      resultsContext: ResultsContext.NO_RESULTS,
      verticalResults: allResultsForVertical.verticalResults,
      facets: allResultsForVertical.facets
    };
  }
}
