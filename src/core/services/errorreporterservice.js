/** @typedef {import('../errors/errors').AnswersBaseError} AnswersBaseError */

/**
 * ErrorReporterService exposes an interface for reporting errors to the console
 * and to a backend
 *
 * @interface
 */
export default class ErrorReporterService {
  /**
   * Reports an error to backend servers for logging
   * @param {AnswersBaseError} err The error to be reported
   */
  report (err) {} // eslint-disable-line handle-callback-err
}
