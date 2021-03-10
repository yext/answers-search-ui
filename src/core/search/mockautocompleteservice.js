import AutoCompleteData, { AutoCompleteResult } from '../models/autocompletedata';

/** @typedef {import('../services/autocompleteservice').default} AutoCompleteService */

const universalOptions = [
  'what is yext',
  'who is the ceo of yext'
];

const verticalOptions = [
  'near me',
  'in new york',
  'available now'
];

/**
 * MockAutoCompleteService serves autocomplete queries with mock data
 *
 * @implements {AutoCompleteService}
 */
export default class MockAutoCompleteService {
  /** @inheritdoc */
  queryFilter (input, config) {
    // TODO(amullings): Simulate filter search, with sections
    return emptyResults();
  }

  /** @inheritdoc */
  queryVertical (input, verticalKey) {
    return filterOptions(input, verticalOptions
      .map(opt => `${verticalKey} ${opt}`)
      .concat(universalOptions)
    );
  }

  /** @inheritdoc */
  queryUniversal (input) {
    return filterOptions(input, universalOptions);
  }
}

/**
 * @param {string} input Query string
 * @param {string[]} options Hardcoded autocomplete options
 * @returns {Promise<AutoCompleteData>}
 */
function filterOptions (input, options) {
  if (input.length === 0) {
    return emptyResults();
  }

  const lowercase = input.toLowerCase();
  const results = options
    .filter(opt => opt.includes(lowercase))
    .map(opt => new AutoCompleteResult({
      value: opt,
      matchedSubstrings: [{
        offset: opt.indexOf(lowercase),
        length: lowercase.length
      }]
    }));
  return Promise.resolve(new AutoCompleteData({
    sections: [{ results }],
    queryId: randomString()
  }));
}

/**
 * @returns {Promise<AutoCompleteData>}
 */
function emptyResults () {
  return Promise.resolve(new AutoCompleteData({
    sections: [{}],
    queryId: randomString()
  }));
}

/**
 * @returns {string}
 */
function randomString () {
  return Math.random().toString(36).substring(2);
}
