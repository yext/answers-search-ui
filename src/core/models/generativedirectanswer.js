/** @module GenerativeDirectAnswer */

import SearchStates from '../storage/searchstates';

export default class GenerativeDirectAnswer {
  constructor (generativeDirectAnswer = {}) {
    Object.assign(this, { searchState: SearchStates.SEARCH_COMPLETE }, generativeDirectAnswer);
  }

  /**
   * Constructs an SDK GenerativeDirectAnswer from a search-core GenerativeDirectAnswerResponse
   *
   * @param {GenerativeDirectAnswerResponse} gdaResponse from search-core
   * @param {string} searcher whether this generative direct answer is from a "UNIVERSAL" or "VERTICAL" search
   * @param {VerticalResults[]} verticalResults list of search-core VerticalResults
   * @returns {GenerativeDirectAnswer}
   */
  static fromCore (gdaResponse, searcher, verticalResults) {
    if (!gdaResponse) {
      return new GenerativeDirectAnswer();
    }

    const results = verticalResults.flatMap(vr => vr.results).map(result => {
      return {
        uid: result.rawData.uid,
        name: result.name,
        description: result.description,
        link: result.link
      };
    });

    const generativeDirectAnswerData = {
      ...gdaResponse,
      searcher,
      results
    };
    return new GenerativeDirectAnswer(generativeDirectAnswerData);
  }

  /**
   * Construct a GenerativeDirectAnswer object representing loading result
   * @return {GenerativeDirectAnswer}
   */
  static searchLoading () {
    return new GenerativeDirectAnswer({ searchState: SearchStates.SEARCH_LOADING });
  }
}
