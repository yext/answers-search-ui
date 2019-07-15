/**
 * Model for the analytics event type
 */
export default class AnalyticsEvent {
  constructor (type, label) {
    this.eventType = type.toUpperCase();
    this.label = label;
  }

  /**
   * Adds the provided options to the event
   * @param {object} options Additional options for the event
   */
  addOptions (options) {
    Object.assign(this, options);
  }

  /**
   * Return the event in the api format, typically for reporting to the api
   */
  toApiEvent () {
    return Object.assign({}, this);
  }
}
