/**
 * QuestionAnswerService exposes an interface to send user inquiries to a
 * backend
 *
 * @interface
 */
export default class QuestionAnswerService {
  /**
   * @param {object} question The question object to submit to the server
   * @param {number} question.entityId The entity to associate with the question (required)
   * @param {string} question.lanuage The language of the question
   * @param {string} question.site The "publisher" of the (e.g. 'FIRST_PARTY')
   * @param {string} question.name The name of the author
   * @param {string} question.email The email address of the author
   * @param {string} question.questionText The question
   * @param {string} question.questionDescription Additional information about the question
   * @returns {Promise<Object>} The backend response
   */
  submitQuestion (question) {}
}
