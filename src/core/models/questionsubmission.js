/** @module QuestionSubmission */

export default class QuestionSubmission {
  constructor (question = {}, errors) {
    /**
     * The author of the question
     * @type {string}
     */
    this.name = question.name || null;

    /**
     * The email address of the question
     * @type {string}
     */
    this.email = question.email || null;

    /**
     * True if the privacy policy was approved
     * @type {boolean}
     */
    this.privacyPolicy = question.privacyPolicy || null;

    /**
     * The question to be sent to the server
     * @type {string}
     */
    this.questionText = question.questionText || null;

    /**
     * Alternative question meta information
     * @type {string}
     */
    this.questionDescription = question.questionDescription || null;

    /**
     * Contains any errors about the question submission
     * @type {object}
     */
    this.errors = errors || null;

    Object.freeze(this);
  }

  static submitted () {
    return {
      questionSubmitted: true
    };
  }

  static errors (question, errors) {
    return QuestionSubmission(question, errors);
  }
}
