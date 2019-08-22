/** @module QuestionSubmission */

export default class QuestionSubmission {
  constructor (data = {}) {
    /**
     * The author of the question
     * @type {string}
     */
    this.name = data.name || null;

    /**
     * The email address of the question
     * @type {string}
     */
    this.email = data.email || null;

    /**
     * True if the privacy policy was approved
     * @type {boolean}
     */
    this.privacyPolicy = data.privacyPolicy || null;

    /**
     * The question to be sent to the server
     * @type {string}
     */
    this.questionText = data.questionText || null;

    /**
     * Alternative question meta information
     * @type {string}
     */
    this.questionDescription = data.questionDescription || null;

    /**
     * A container for the errors from validation
     * @type {object}
     */
    this.errors = data.errors || null;

    Object.freeze(this);
  }

  static submitted () {
    return {
      questionSubmitted: true
    };
  }
}
