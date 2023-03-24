/** @module DirectAnswer */

import SearchStates from '../storage/searchstates';

export default class DirectAnswer {
  constructor (directAnswer = {}) {
    Object.assign(this, { searchState: SearchStates.SEARCH_COMPLETE }, directAnswer);
  }

  /**
   * Constructs an SDK DirectAnswer from an search-core DirectAnswer and applies formatting
   *
   * @param {DirectAnswer} directAnswer from search-core
   * @param {Object<string, function>} formatters keyed by fieldApiName. If a formatter matches
   * the fieldApiName of the direct answer, it will be applied to the direct answer value.
   * @param {string} searcher whether this direct answer is from a "UNIVERSAL" or "VERTICAL" search
   * @returns {DirectAnswer}
   */
  static fromCore (directAnswer, formatters, searcher) {
    if (!directAnswer) {
      return new DirectAnswer();
    }

    const relatedResult = directAnswer.relatedResult || {};

    const directAnswerData = {
      answer: {
        snippet: directAnswer.snippet,
        entityName: directAnswer.entityName,
        fieldName: directAnswer.fieldName,
        fieldApiName: directAnswer.fieldApiName,
        value: directAnswer.value,
        fieldType: directAnswer.fieldType
      },
      relatedItem: {
        data: {
          fieldValues: relatedResult.rawData,
          id: relatedResult.id,
          type: relatedResult.type,
          website: relatedResult.link
        },
        verticalConfigId: directAnswer.verticalKey
      },
      type: directAnswer.type,
      searcher
    };

    const directAnswerFieldApiName = directAnswerData.answer.fieldApiName;
    const formatterExistsForDirectAnswer = formatters && directAnswerFieldApiName in formatters;

    if (formatterExistsForDirectAnswer) {
      const formattedValue = this._getFormattedValue(directAnswerData, formatters[directAnswerFieldApiName]);
      directAnswerData.answer.value = formattedValue || directAnswerData.answer.value;
    }

    return new DirectAnswer(directAnswerData);
  }

  /**
   * Applies a formatter to a direct answer value
   *
   * @param {Object} data directAnswerData
   * @param {function} formatter a field formatter to apply to the answer value field
   * @returns {string|null} the formatted value, or null if the formatter could not be applied
   */
  static _getFormattedValue (data, formatter) {
    if (!data.answer || !data.relatedItem) {
      return null;
    }

    return formatter(
      data.answer.value,
      data.relatedItem.data.fieldValues,
      data.relatedItem.verticalConfigId,
      true);
  }

  /**
   * Construct a DirectAnswer object representing loading results
   * @return {DirectAnswer}
   */
  static searchLoading () {
    return new DirectAnswer({ searchState: SearchStates.SEARCH_LOADING });
  }
}
