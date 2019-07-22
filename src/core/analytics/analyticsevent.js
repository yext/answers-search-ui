import { merge } from '../util/objects';

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
    merge(this, options);
  }

  /**
   * Return the event in the api format, typically for reporting to the api
   */
  toApiEvent () {
    return merge({}, this);
  }
}
