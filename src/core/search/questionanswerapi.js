/** @module QuestionAnswerApi */

import ApiRequest from '../http/apirequest';
import { AnswersBasicError, AnswersEndpointError } from '../errors/errors';

/** @typedef {import('./questionanswerservice').default} QuestionAnswerService */

/**
 * QuestionAnswerApi submits questions via the Q&A REST API
 *
 * @implements {QuestionAnswerService}
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
  }

  /** @inheritdoc */
  submitQuestion (question) {
    let request = new ApiRequest({
      endpoint: '/v2/accounts/me/questions',
      apiKey: this._apiKey,
      params: {
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
