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

const ARBITRARY_BUSINESS_ID = 919871;

/**
 * @implements {SearchService}
 */
export default class MockSearchService {
  constructor () {
    /**
     * @type {Promise<string>}
     * @private
     */
    this._getMockDataJson = fetch('https://assets.sitescdn.net/answers/testdata/search/mockdata_v1.json')
      .then(resp => resp.text())
      .catch(console.error);
  }

  /** @inheritdoc */
  verticalSearch (verticalKey, { input, filter, facetFilter, limit, offset, id, geolocation, isDynamicFiltersEnabled, skipSpellCheck, queryTrigger }) {
    return this.useMockData(sections => {
      if (input === '') {
        return delayedResponse(constructVerticalResponse({
          results: [],
          appliedQueryFilters: []
        }));
      }

      // Either find a section with matching ID, or pick one at random
      let section = sections.find(
        verticalModule => verticalKey === verticalModule['verticalConfigId']
      );
      if (section == null) {
        section = sections[Math.floor(Math.random() * sections.length)];
      }

      modifyResults(section, getResultsFilterer(input));
      if (offset != null && limit != null) {
        modifyResults(section, function limit (results) {
          return results.slice(offset, offset + limit);
        });
      }

      const resp = constructVerticalResponse(section);
      return delayedResponse(resp);
    });
  }

  /** @inheritdoc */
  universalSearch (queryString, params) {
    return this.useMockData(sections => {
      if (queryString === '') {
        return delayedResponse(constructUniversalResponse([]));
      }

      sections.forEach(section => {
        modifyResults(section, getResultsFilterer(queryString));
      });

      sections = sections.filter(section => {
        return section.results.length > 0;
      });

      const resp = constructUniversalResponse(sections);
      return delayedResponse(resp);
    });
  }

  /**
   * @param {MockDataConsumer} consumer
   * @returns {Promise<Object>}
   * @private
   */
  useMockData (consumer) {
    return this._getMockDataJson.then(JSON.parse).then(consumer);
  }
}

/**
 * @param {string} queryString
 * @return {ResultsModifier}
 */
function getResultsFilterer (queryString) {
  return results => results.filter(result => {
    if (result.htmlTitle && result.htmlTitle.toLowerCase().includes(queryString)) {
      return true;
    }
    for (const prop in result.data) {
      const val = result.data[prop];
      if (typeof val === 'string' && val.toLowerCase().includes(queryString)) {
        return true;
      }
    }
    return false;
  });
}

/**
 * @param {Section} section
 * @param {ResultsModifier} modifyFn
 */
function modifyResults (section, modifyFn) {
  section.results = modifyFn(section.results);
}

/**
 * @param {Section[]} sections A list of mock section data
 * @returns {Object} A mock AnswersApi response
 */
function constructUniversalResponse (sections) {
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
function constructVerticalResponse (section) {
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
function fillSectionFields (section) {
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
function delayedResponse (resp) {
  return new Promise(resolve => {
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
function uuidV4 () {
  return (function b (a) { return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b); })();
}

/**
 * @param {number} min inclusive
 * @param {number} max exclusive
 * @returns {number} A random integer in the specified range
 */
function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
