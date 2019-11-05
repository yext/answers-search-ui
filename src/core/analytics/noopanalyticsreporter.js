/** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

/**
 * @implements {AnalyticsReporterService}
 */
export default class NoopAnalyticsReporter {
  /** @inheritdoc */
  report (event) {
    return true;
  }

  /** @inheritdoc */
  setConversionTrackingEnabled (isEnabled) {}
}
