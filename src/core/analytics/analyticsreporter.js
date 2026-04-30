/** @module AnalyticsReporter */

import AnalyticsEvent from './analyticsevent';
import { GLOBAL_MULTI, PRODUCTION } from '../constants';
import HttpRequester from '../http/httprequester';
import { getAnalyticsUrl } from '../utils/urlutils';

/** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

/**
 * Class for reporting analytics events to the server via HTTP
 *
 * @implements {AnalyticsReporterService}
 */
export default class AnalyticsReporter {
  constructor (
    experienceKey,
    experienceVersion,
    businessId,
    analyticsEventsEnabled,
    eventsApiKey,
    globalOptions = {},
    environment = PRODUCTION,
    cloudChoice = GLOBAL_MULTI) {
    /**
     * The internal business identifier used for reporting
     * @type {number}
     */
    this._businessId = businessId;

    /**
     * Boolean indicating if the Answers Search UI submits analytic click events
     * @type {boolean}
     */
    this._analyticsEventsEnabled = analyticsEventsEnabled;

    /**
     * Options to include with every analytic event reported to the server
     * @type {object}
     * @private
     */
    this._globalOptions = Object.assign({}, globalOptions, { experienceKey });

    /**
     * The environment of the Answers experience
     * @type {string}
     * @private
     */
    this._environment = environment;

    /**
     * The choice of Cloud Provider
     * @type {string}
     * @private
     */
    this._cloudChoice = cloudChoice;

    /**
     * Base URL for the analytics API
     * @type {string}
     * @private
     */
    this._baseUrl = getAnalyticsUrl(this._environment, this._cloudChoice);

    /**
     * The key authorized for the Events API
     * @type {string}
     */
    this._eventsApiKey = eventsApiKey;

    if (experienceVersion) {
      this._globalOptions.experienceVersion = experienceVersion;
    }
  }

  getQueryId () {
    return this._globalOptions.queryId;
  }

  setQueryId (queryId) {
    this._globalOptions.queryId = queryId;
  }

  getSearchId () {
    return this._globalOptions.searchId;
  }

  setSearchId (searchId) {
    this._globalOptions.searchId = searchId;
  }

  getSearchTerm () {
    return this._globalOptions.searchTerm;
  }

  setSearchTerm (searchTerm) {
    this._globalOptions.searchTerm = searchTerm;
  }

  setVisitor (visitor) {
    this._globalOptions.visitor = visitor;
  }

  /**
   * @returns {boolean} Whether analytics events are opted in or out
   */
  getAnalyticsOptIn () {
    return this._analyticsEventsEnabled;
  }

  /**
   * Opt in or out of analytics click events
   * @param {boolean} analyticsEventsEnabled
   */
  setAnalyticsOptIn (analyticsEventsEnabled) {
    this._analyticsEventsEnabled = analyticsEventsEnabled;
  }

  /**
   * Reports an analytics event
   * @param {AnalyticsEvent} event The event to send
   * @param {Object} options Analytics reporting otpions
   * @param {boolean} options.includeQueryId Whether or not to include the queryId with the request
   * @returns {boolean} true if the request was successful
   */
  report (event, { includeQueryId = true } = {}) {
    if (!this._analyticsEventsEnabled) {
      return false;
    }
    if (!this._eventsApiKey) {
      console.error('A valid eventsApiKey must be set in the config to send Analytics Events');
      return false;
    }

    if (!(event instanceof AnalyticsEvent)) {
      console.error('Tried to send invalid analytics event', event);
      return false;
    }

    event.addOptions(this._globalOptions);
    const searchTerm = this.getSearchTerm();

    const apiEvent = event.toApiEvent();
    const eventPayload = {
      action: apiEvent.action,
      authorization: 'KEY ' + this._eventsApiKey,
      ...(event.destinationUrl !== undefined && { destinationUrl: event.destinationUrl }),
      ...(event.entityId !== undefined && { entity: event.entityId }),
      ...(event.label !== undefined && { label: event.label }),
      ...(event.locale !== undefined && { locale: event.locale }),
      search: {
        ...(event.directAnswer !== undefined && { isDirectAnswer: event.directAnswer }),
        experienceKey: this._globalOptions.experienceKey,
        ...(event.generativeDirectAnswer !== undefined &&
            { isGenerativeDirectAnswer: event.generativeDirectAnswer }),
        ...(includeQueryId && { queryId: this.getQueryId() }),
        ...(includeQueryId && { searchId: this.getSearchId() }),
        versionLabel: this._globalOptions.experienceVersion,
        ...(event.verticalKey !== undefined && { verticalKey: event.verticalKey })
      },
      ...(!!searchTerm && { searchTerm: searchTerm } ),
      ...(event.visitor !== undefined && { visitor: event.visitor })
    };

    return new HttpRequester().beacon(
      `${this._baseUrl}/accounts/me/events`,
      eventPayload
    );
  }
}
