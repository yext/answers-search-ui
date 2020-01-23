/** @module ErrorReporter */

import { AnswersBaseError, AnswersBasicError } from './errors';

import ApiRequest from '../http/apirequest';
import { LIB_VERSION } from '../constants';

/** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

/**
 * ErrorReporter is used for reporting errors to the console and API
 *
 * @implements {ErrorReporterService}
 */
export default class ErrorReporter {
  constructor (config, globalStorage) {
    /**
     * The apiKey to use for reporting
     * @type {string}
     */
    this.apiKey = config.apiKey;

    /**
     * The experienceKey to use when reporting
     * @type {string}
     */
    this.experienceKey = config.experienceKey;

    /**
     * The answers config version used for api requests
     * @type {string|number}
     */
    this.experienceVersion = config.experienceVersion || 'config1.0';

    /**
     * If true, print entire error objects to the console for inspection
     * @type {boolean}
     */
    this.printVerbose = config.printVerbose;

    /**
     * If true, report the error the server for logging and monitoring
     * @type {boolean}
     */
    this.sendToServer = config.sendToServer;

    /**
     * The global storage instance of the experience
     * @type {GlobalStorage}
     */
    if (this.sendToServer && !globalStorage) {
      throw new AnswersBasicError(
        'Must include globalStorage to send errors to server',
        'ErrorReporter');
    }
    this.globalStorage = globalStorage;

    /**
     * The environment of the Answers experience
     * @type {string}
     * @private
     */
    this.environment = config.environment;

    // Attach reporting listeners to window
    window.addEventListener('error', e => this.report(e.error));
    window.addEventListener('unhandledrejection', e => this.report(e.error));
  }

  /**
   * report pretty prints the error to the console, optionally
   * prints the entire error if `printVerbose` is true, and sends the
   * error to the server to be logged if `sendToServer` is true
   * @param {AnswersBaseError} err The error to be reported
   * @returns {AnswersBaseError} The reported error
   */
  report (err) {
    if (!(err instanceof AnswersBaseError) || err.reported) {
      return;
    }

    err.reported = true;

    this.printError(err);

    if (this.sendToServer) {
      const requestConfig = {
        endpoint: '/v2/accounts/me/answers/errors',
        apiKey: this.apiKey,
        version: 20190301,
        environment: this.environment,
        params: {
          'libVersion': LIB_VERSION,
          'experienceVersion': this.experienceVersion,
          'experienceKey': this.experienceKey,
          'error': err.toJson()
        }
      };
      const request = new ApiRequest(requestConfig, this.globalStorage);

      // TODO(amullings): We should probably change this endpoint to POST,
      // ideally using the beacon API. Stack traces will likely easily hit URL
      // length limits.
      request.get()
        .catch(console.err);
    }

    return err;
  }

  /**
   * prints the given error to the browser console
   * @param {AnswersBaseError} err The error to be printed
   */
  printError (err) {
    if (this.printVerbose) {
      console.error(`error: ${err.errorMessage}
code: ${err.errorCode}
boundary: ${err.boundary}
stack: ${err.stack}`);
    } else {
      console.error(err.toString());
    }
  }
}
