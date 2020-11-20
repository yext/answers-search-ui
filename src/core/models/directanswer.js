/** @module DirectAnswer */

export default class DirectAnswer {
  constructor (directAnswer = {}) {
    Object.assign(this, directAnswer);
    Object.freeze(this);
  }

  /**
   * Constructs an SDK DirectAnswer from an answers-core DirectAnswer
   *
   * @param {DirectAnswer} directAnswer from answers-core
   * @returns {DirectAnswer}
   */
  static fromCore (directAnswer) {
    if (!directAnswer) {
      return new DirectAnswer();
    }

    const relatedResult = directAnswer.relatedResult || {};

    return new DirectAnswer({
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
    });
  }
}
