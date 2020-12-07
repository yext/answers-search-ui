/** @module DirectAnswer */

export default class DirectAnswer {
  constructor (directAnswer = {}) {
    Object.assign(this, directAnswer);
    Object.freeze(this);
  }

  /**
   * Constructs an SDK DirectAnswer from an answers-core DirectAnswer and applies formatting
   *
   * @param {DirectAnswer} directAnswer from answers-core
   * @param {Object<string, function>} formatters keyed by fieldApiName. If a formatter matches the fieldApiName
   * of the direct answer, it will be applied to the direct answer value.
   * @returns {DirectAnswer}
   */
  static fromCore (directAnswer, formatters) {
    if (!directAnswer) {
      return new DirectAnswer();
    }

    const relatedResult = directAnswer.relatedResult || {};

    const directAnswerData = {
      answer: {
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
      }
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
}
