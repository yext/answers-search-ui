/** @module QuestionAnswerApi */

import ApiRequest from '../http/apirequest';
import { API_BASE_URL } from '../constants';
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

    /**
     * If session tracking has been enabled for the request
     * @type {boolean}
     * @private
     */
    if (typeof config.sessionTrackingEnabled !== 'boolean') {
      throw new AnswersBasicError('Must specify if session tracking is enabled', 'QuestionAnswerApi');
    }
    this._sessionTrackingEnabled = config.sessionTrackingEnabled;
  }

  /** @inheritdoc */
  submitQuestion (question) {
    let request = new ApiRequest({
      baseUrl: API_BASE_URL,
      endpoint: '/v2/accounts/me/questions',
      apiKey: this._apiKey,
      sessionTrackingEnabled: this._sessionTrackingEnabled,
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

    return request.post({
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(error => {
        throw new AnswersEndpointError(
          'Question submit failed',
          'QuestionAnswerApi',
          error);
      });
  }
}
