/** @module QuestionAnswerApi */

import ApiRequest from '../http/apirequest';
import { AnswersBasicError, AnswersEndpointError } from '../errors/errors';

/**
 * QuestionAnswerApi exposes an interface to do networky things against
 * the Q&A REST API
 */
export default class QuestionAnswerApi {
  constructor (config = {}) {
    /**
     * The API Key to use for the request
     * @type {string}
     * @private
     */
    if (!config.apiKey) {
      throw new AnswersBasicError('Api Key is required', 'QuestionAnswerApi');
    }
    this._apiKey = config.apiKey;

    /**
     * The answers config version to use for all requests
     * @type {string}
     * @private
     */
    this._configVersion = config.configVersion;
  }

  /**
   * submitQuestion will create a network request to
   * create a question for Q&A.
   * @param {object} question The question object to submit to the server
   * @param {number} question.entityId The entity to associate with the question (required)
   * @param {string} question.lanuage The language of the question
   * @param {string} question.site The "publisher" of the (e.g. 'FIRST_PARTY')
   * @param {string} question.name The name of the author
   * @param {string} question.email The email address of the author
   * @param {string} question.questionText The question
   * @param {string} question.questionDescription Additional information about the question
   */
  submitQuestion (question) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/questions',
      apiKey: this._apiKey,
      params: {
        'version': this._configVersion,
        'entityId': question.entityId,
        'site': question.site,
        'name': question.name,
        'email': question.email,
        'questionText': question.questionText,
        'questionDescription': question.questionDescription,
        'questionLanguage': question.questionLanguage
      }
    });

    return request.post()
      .then(response => response.json())
      .catch(error => {
        throw new AnswersEndpointError(
          'Question submit failed',
          'QuestionAnswerApi',
          error);
      });
  }
}
