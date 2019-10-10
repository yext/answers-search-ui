/** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

/**
 * @implements {ErrorReporterService}
 */
export default class ConsoleErrorReporter {
  /** @inheritdoc */
  report (err) {
    console.error(err.toString());
  }
}
