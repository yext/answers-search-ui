/** @module DirectAnswer */

export default class DirectAnswer {
  constructor (directAnswer = {}) {
    Object.assign(this, directAnswer);
    Object.freeze(this);
  }

  /**
   * Create a DirectAnswer model from the given server data and formatters
   * @param {Object} response The server direct answer
   * @param {Object.<string, function>} formatters The formatters to apply to this direct answer
   */
  static from (response, formatters) {
    const data = { ...response };
    const { fieldApiName, value } = data.answer;

    if (formatters[fieldApiName]) {
      data.answer.value = formatters[fieldApiName](
        value,
        data.relatedItem.data.fieldValues,
        data.relatedItem.verticalConfigId,
        true);
    }

    return new DirectAnswer(data);
  }
}
