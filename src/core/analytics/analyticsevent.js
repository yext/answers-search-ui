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
    this.options = options;
  }

  /**
   * Return the event in the api format, typically for reporting to the api
   */
  toApiEvent () {
    const apiEvent = {};
    Object.assign(
      apiEvent,
      {
        event_type: this.eventType,
        label: this.label
      },
      this.options);
    return apiEvent;
  }
}
