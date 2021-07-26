/**
 * Model for the analytics event type
 */
export default class AnalyticsEvent {
  constructor (type, label) {
    /**
     * The type of event to report
     * @type {string}
     */
    this.eventType = type.toUpperCase();

    /**
     * An optional label to be provided for the event
     * @type {string}
     */
    if (label) {
      this.label = label;
    }

    /**
     * Whether or not queryId should be included with the event
     */
    this.includeQueryId = true;
  }

  /**
   * Adds the provided options to the event
   * @param {object} options Additional options for the event
   */
  addOptions (options) {
    Object.assign(this, options);
    if (this.includeQueryId === false) {
      Object.assign(this, { queryId: undefined });
    }
    return this;
  }

  /**
   * Return the event in the api format, typically for reporting to the api
   */
  toApiEvent () {
    return Object.assign({}, this);
  }

  /**
   * Creating an analytics event from raw data.
   * @param {Object} data
   */
  static fromData (data) {
    const { type, label, ...eventOptions } = data;
    const analyticsEvent = new AnalyticsEvent(type, label);
    analyticsEvent.addOptions(eventOptions);
    if (eventOptions.queryId === null) {
      analyticsEvent.includeQueryId = false;
    }
    return analyticsEvent;
  }
}
