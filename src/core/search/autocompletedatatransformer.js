/** @module AutoCompleteDataTransformer */

import AutoCompleteData from '../models/autocompletedata';

/**
 * A Data Transformer that takes the response object from a AutoComplete request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 *
 * TODO(billy) Create our own front-end data models
 */
export default class AutoCompleteDataTransformer {
  static clean (moduleId, data) {
    if (data.sections && data.sections.length === 0) {
      delete data.sections;
    }

    if (data.sections && data.sections.length === 1 && data.sections[0].results.length === 0) {
      delete data.sections;
    }

    return {
      [moduleId]: data
    };
  }

  static universal (response) {
    return AutoCompleteData.from(response);
  }

  static filter (response) {
    return AutoCompleteData.from(response);
  }

  static vertical (response) {
    return AutoCompleteData.from(response);
  }
}
