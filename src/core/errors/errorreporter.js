/** @module ErrorReporter */

import { AnswersBaseError } from './errors';

import ApiRequest from '../http/apirequest';
import { LIB_VERSION } from '../constants';

/** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

/**
 * ErrorReporter is used for reporting errors to the console and API
 *
 * @implements {ErrorReporterService}
 */
export default class ErrorReporter {
  constructor (config) {
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
      const request = new ApiRequest({
        endpoint: '/v2/accounts/me/answers/errors',
        apiKey: this.apiKey,
        version: 20190301,
        params: {
          'error': err.toJson(),
          'libVersion': LIB_VERSION,
          'experienceVersion': this.experienceVersion,
          'experienceKey': this.experienceKey
        }
      });

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
    console.error(err.toString());
    if (this.printVerbose) {
      console.log({ ...err });
    }
  }
}
