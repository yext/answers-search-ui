/** @module QuestionAnswerApi */

import ApiRequest from '../http/apirequest';
import StorageKeys from '../storage/storagekeys';
import { API_BASE_URL } from '../constants';
import { AnswersBasicError, AnswersEndpointError } from '../errors/errors';

/** @typedef {import('./questionanswerservice').default} QuestionAnswerService */

/**
 * QuestionAnswerApi submits questions via the Q&A REST API
 *
 * @implements {QuestionAnswerService}
 */
export default class QuestionAnswerApi {
  constructor (config = {}, globalStorage) {
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
     * The global storage instance of the experience
     * @type {GlobalStorage}
     * @private
     */
    if (!globalStorage) {
      throw new AnswersBasicError('Global storage is required', 'QuestionAnswerApi');
    }
    this._globalStorage = globalStorage;
  }

  /** @inheritdoc */
  submitQuestion (question) {
    let request = new ApiRequest({
      baseUrl: API_BASE_URL,
      endpoint: '/v2/accounts/me/questions',
      apiKey: this._apiKey,
      sessionTrackingEnabled: this._globalStorage.getState(StorageKeys.SESSIONS_OPT_IN),
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
