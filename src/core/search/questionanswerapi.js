/** @module QuestionAnswerApi */

import ApiRequest from '../http/apirequest';
import { PRODUCTION } from '../constants';
import { AnswersBasicError, AnswersEndpointError } from '../errors/errors';
import { getKnowledgeApiUrl } from '../utils/urlutils';

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

    /**
     * The environment of the Answers experience
     * @type {string}
     * @private
     */
    this._environment = config.environment || PRODUCTION;
  }

  /** @inheritdoc */
  submitQuestion (question) {
    const requestConfig = {
      baseUrl: getKnowledgeApiUrl(this._environment),
      endpoint: '/v2/accounts/me/createQuestion',
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
    };
    let request = new ApiRequest(requestConfig, this._globalStorage);

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
