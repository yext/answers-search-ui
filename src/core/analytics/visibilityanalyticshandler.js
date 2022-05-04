import { isIE } from '../utils/useragent';
import AnalyticsEvent from '../analytics/analyticsevent';
import Searcher from '../models/searcher';
import StorageKeys from '../storage/storagekeys';

const RESULTS_VISIBILITY_EVENT = {
  HIDDEN: 'RESULTS_HIDDEN',
  UNHIDDEN: 'RESULTS_UNHIDDEN'
};

/**
 * Manages the document's visibility status and handles any visibility related analytics events.
 */
export default class VisibilityAnalyticsHandler {
  constructor (analyticsReporterService, verticalKey) {
    this._previousResultsVisibilityEvent = undefined;
    this._analyticsReporterService = analyticsReporterService;
    this._verticalKey = verticalKey;
  }

  /**
   * Initialize visibility change event listener(s) to send analytics events
   * when a result page have become visible or have been hidden.
   *
   * @param {Storage} storage - a container around application state
   */
  initVisibilityChangeListeners (storage) {
    /**
     * Safari desktop listener and IE11 listeners fire visibility change event twice when switch
     * to new tab and then close browser. Variable "_previousResultsVisibilityEvent" is used to ensure
     * RESULTS_HIDDEN analytics event does not get send again if the page is already hidden.
     */
    document.addEventListener('visibilitychange', () => {
      if (this._resultsVisibilityChangeToHidden()) {
        this._previousResultsVisibilityEvent = RESULTS_VISIBILITY_EVENT.HIDDEN;
        this._reportVisibilityChangeEvent(RESULTS_VISIBILITY_EVENT.HIDDEN);
      } else if (this._resultsVisibilityChangeToVisible()) {
        this._previousResultsVisibilityEvent = RESULTS_VISIBILITY_EVENT.UNHIDDEN;
        this._reportVisibilityChangeEvent(RESULTS_VISIBILITY_EVENT.UNHIDDEN);
      }
    });

    /**
     * VisibilityChange API does not register when page is terminated (close tab/browser) in IE11.
     * Unload event is used to capture those RESULTS_HIDDEN scenarios.
     */
    if (isIE()) {
      window.addEventListener('unload', () => {
        if (this._previousResultsVisibilityEvent !== RESULTS_VISIBILITY_EVENT.HIDDEN) {
          this._reportVisibilityChangeEvent(RESULTS_VISIBILITY_EVENT.HIDDEN);
        }
      });
    }

    /**
     * Page history updates caused by pushState() or replaceState(), such as when a search is performed,
     * will not trigger a complete page load so the document's visibility state will not change. Use
     * popstate event and storage listener on QUERY_ID to report result visibility change events for
     * back/forward page navigation of the same answers page.
     */
    window.addEventListener('popstate', () => {
      const poppedStateQueryId = storage.get(StorageKeys.HISTORY_POP_STATE)?.get('pop-state-queryId');
      const storageQueryId = this._analyticsReporterService.getQueryId();
      this._analyticsReporterService.setQueryId(poppedStateQueryId);
      this._previousResultsVisibilityEvent = RESULTS_VISIBILITY_EVENT.HIDDEN;
      this._reportVisibilityChangeEvent(RESULTS_VISIBILITY_EVENT.HIDDEN);
      this._analyticsReporterService.setQueryId(storageQueryId);
    });

    storage.registerListener({
      eventType: 'update',
      storageKey: StorageKeys.QUERY_ID,
      callback: id => {
        if (this._resultsVisibilityChangeToVisible()) {
          this._previousResultsVisibilityEvent = RESULTS_VISIBILITY_EVENT.UNHIDDEN;
          this._reportVisibilityChangeEvent(RESULTS_VISIBILITY_EVENT.UNHIDDEN);
        }
      }
    });
  }

  /**
   * Returns true if results page was previously reported as unhidden and the page is now hidden.
   *
   * @returns {boolean}
   */
  _resultsVisibilityChangeToHidden () {
    return document.visibilityState === 'hidden' && this._previousResultsVisibilityEvent !== RESULTS_VISIBILITY_EVENT.HIDDEN;
  }

  /**
   * Returns true if results page was previously reported as hidden and the page is now visible.
   *
   * @returns {boolean}
   */
  _resultsVisibilityChangeToVisible () {
    return document.visibilityState === 'visible' && this._previousResultsVisibilityEvent !== RESULTS_VISIBILITY_EVENT.UNHIDDEN;
  }

  /**
   * Send visibility change related analytics event.
   *
   * @param {string} eventName - the name of the analytics event to report
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
