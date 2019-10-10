/** @typedef {import('../analytics/analyticsevent').default} AnalyticsEvent */

/**
 * AnslyticsReporterService exposes an interface for reporting analytics events
 * to a backend
 *
 * @interface
 */
export default class AnalyticsReporterService {
  /**
   * Report an analytics event
   * @param {AnalyticsEvent} event
   * @returns {boolean} whether the event was successfully reported
   */
  report (event) {}

  /**
   * Enable or disable conversion tracking
   * @param {boolean} isEnabled
   */
  setConversionTrackingEnabled (isEnabled) {}
}
