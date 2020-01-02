/** @module QuestionSubmission */

/**
 * QuestionSubmission is the core state model
 * to power the QuestionSubmission component
 */
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
     * Whether the form is expanded or not. Defaults to true.
     */
    this.questionExpanded = typeof question.expanded !== 'boolean' || question.expanded;

    /**
     * Contains any errors about the question submission
     * @type {object}
     */
    this.errors = errors || null;

    /**
     * Whether the form has been submitted or not. Defaults to false.
     */
    this.questionSubmitted = question.submitted || false;

    Object.freeze(this);
  }

  static submitted () {
    return {
      questionSubmitted: true,
      questionExpanded: true
    };
  }

  static errors (question, errors) {
    return QuestionSubmission(question, errors);
  }
}
