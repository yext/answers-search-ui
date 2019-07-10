/** @module SearchDataTransformer */

import UniversalResults from '../models/universalresults';
import DirectAnswer from '../models/directanswer';
import Navigation from '../models/navigation';
import VerticalResults from '../models/verticalresults';
import StorageKeys from '../storage/storagekeys';

/**
 * A Data Transformer that takes the response object from a Search request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 */
export default class SearchDataTransformer {
  static transform (data, urls = {}) {
    let response = data.response;
    return {
      [StorageKeys.NAVIGATION]: Navigation.from(response.modules),
      [StorageKeys.DIRECT_ANSWER]: new DirectAnswer(response.directAnswer),
      [StorageKeys.UNIVERSAL_RESULTS]: UniversalResults.from(response, urls)
    };
  }

  static transformVertical (data) {
    return {
      [StorageKeys.NAVIGATION]: new Navigation(), // Veritcal doesn't respond with ordering, so use empty nav.
      [StorageKeys.VERTICAL_RESULTS]: VerticalResults.from(data.response)
    };
  }
}
