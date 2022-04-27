import { isIE } from '../utils/useragent';
import AnalyticsEvent from '../analytics/analyticsevent';
import Searcher from '../models/searcher';

/**
 * Manages the document's visibility status and handles any visibility related analytics events.
 */
export default class VisibilityAnalyticsHandler {
  constructor (analyticsReporterService, verticalKey) {
    this._documentVisibilityState = undefined;
    this._analyticsReporterService = analyticsReporterService;
    this._verticalKey = verticalKey;
  }

  /**
   * Initialize visibility change event listener(s) to send analytics events
   * when a result page have become visible or have been hidden.
   */
  initVisibilityChangeListeners () {
    /**
     * Safari desktop listener and IE11 listeners fire visibility change event twice when switch
     * to new tab and then close browser. _documentVisibilityState is used to ensure RESULTS_HIDDEN
     * analytics event does not get send again if the page is already hidden.
     */
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && this._documentVisibilityState !== 'hidden') {
        this._documentVisibilityState = 'hidden';
        this._reportVisibilityChangeEvent('RESULTS_HIDDEN');
      } else if (document.visibilityState === 'visible') {
        this._documentVisibilityState = 'visible';
        this._reportVisibilityChangeEvent('RESULTS_UNHIDDEN');
      }
    });

    /**
     * VisibilityChange API does not register when page is terminated (close tab/browser) in IE11.
     * Unload event is used to capture those RESULTS_HIDDEN scenarios.
     */
    if (isIE()) {
      window.addEventListener('unload', () => {
        if (this._documentVisibilityState !== 'hidden') {
          this._reportVisibilityChangeEvent('RESULTS_HIDDEN');
        }
      });
    }
  }

  /**
   * Send visibility change related analytics event.
   */
  _reportVisibilityChangeEvent (eventName) {
    const queryId = this._analyticsReporterService.getQueryId();
    if (!queryId) {
      return;
    }
    const searcher = this._verticalKey ? Searcher.VERTICAL : Searcher.UNIVERSAL;
    const event = new AnalyticsEvent(eventName).addOptions({ searcher });
    this._analyticsReporterService.report(event);
  }
}
