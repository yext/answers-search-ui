/** @module ErrorReporter */

import { AnswersBaseError } from './errors';

import ApiRequest from '../http/apirequest';
import { LIB_VERSION } from '../constants';

/**
 * ErrorReporter is used for reporting errors to the server
 */
export default class ErrorReporter {
  constructor (apiKey, answersKey, experienceVersion) {
    /**
     * The apiKey to use for reporting
     * @type {string}
     */
    this.apiKey = apiKey;

    /**
     * The answersKey to use when reporting
     * @type {string}
     */
    this.answersKey = answersKey;

    /**
     * The answers config version used for api requests
     * @type {string|number}
     */
    this.experienceVersion = experienceVersion || 'config1.0';
  }

  /**
   * report sends a network request to the server to be logged
   * @param {AnswersBaseError} The error to be reported
   */
  report (err) {
    if (!(err instanceof AnswersBaseError) || err.reported) {
      return;
    }

    err.reported = true;

    const request = new ApiRequest({
      endpoint: '/v2/accounts/me/answers/errors',
      apiKey: this.apiKey,
      version: 20190301,
      params: {
        'error': err.toJson(),
        'libVersion': LIB_VERSION,
        'experienceVersion': this.experienceVersion,
        'answersKey': this.answersKey
      }
    });

    request.get()
      .catch(console.err);

    return err;
  }
}
