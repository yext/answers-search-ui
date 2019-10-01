/** @module SearchDataTransformer */

import UniversalResults from '../models/universalresults';
import DirectAnswer from '../models/directanswer';
import Navigation from '../models/navigation';
import VerticalResults from '../models/verticalresults';
import SpellCheck from '../models/spellcheck';
import StorageKeys from '../storage/storagekeys';
import DynamicFilters from '../models/dynamicfilters';
import SearchIntents from '../models/searchintents';

/**
 * A Data Transformer that takes the response object from a Search request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 */
export default class SearchDataTransformer {
  static transform (data, urls = {}, formatters) {
    let response = data.response;
    return {
      [StorageKeys.QUERY_ID]: response.queryId,
      [StorageKeys.NAVIGATION]: Navigation.from(response.modules),
      [StorageKeys.DIRECT_ANSWER]: DirectAnswer.from(response.directAnswer, formatters),
      [StorageKeys.UNIVERSAL_RESULTS]: UniversalResults.from(response, urls, formatters),
      [StorageKeys.INTENTS]: SearchIntents.from(response.searchIntents),
      [StorageKeys.SPELL_CHECK]: SpellCheck.from(response.spellCheck)
    };
  }

  static transformVertical (data, formatters) {
    return {
      [StorageKeys.QUERY_ID]: data.response.queryId,
      [StorageKeys.NAVIGATION]: new Navigation(), // Vertical doesn't respond with ordering, so use empty nav.
      [StorageKeys.VERTICAL_RESULTS]: VerticalResults.from(data.response, formatters),
      [StorageKeys.DYNAMIC_FILTERS]: DynamicFilters.from(data.response),
      [StorageKeys.INTENTS]: SearchIntents.from(data.response.searchIntents),
      [StorageKeys.SPELL_CHECK]: SpellCheck.from(data.response.spellCheck)
    };
  }
}
