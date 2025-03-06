/** @module GenerativeDirectAnswer */

import SearchStates from '../storage/searchstates';
import RichTextFormatter from '../utils/richtextformatter';
import Searcher from '../models/searcher';

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

    const verticalKey = searcher === Searcher.UNIVERSAL ? '' : verticalResults[0].verticalKey;

    const citationsData = verticalResults
      .flatMap(vr => vr.results)
      .filter(result => result.rawData?.uid && result.id && result.name)
      .filter(result => gdaResponse.citations.includes(result.rawData.uid))
      .map(result => {
        return {
          id: result.id,
          name: result.name,
          description: result.description,
          rawData: result.rawData
        };
      });

    if (gdaResponse.directAnswer) {
      const directAnswerAsHTML = RichTextFormatter.format(gdaResponse.directAnswer, 'gda-snippet');
      gdaResponse.directAnswer = directAnswerAsHTML;
    }
    const generativeDirectAnswerData = {
      ...gdaResponse,
      searcher,
      citationsData,
      verticalKey
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
