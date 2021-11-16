import Searcher from '../models/searcher';
import AnalyticsEvent from './analyticsevent';

/**
 * Creates an SEARCH_BAR_IMPRESSION analytics event
 * @param {Object} options
 * @param {string} options.verticalKey Optional, indicates the vertical associated with the impression
 * @param {boolean} options.standAlone Indicates whether or not the impression came
 *                                     from the standalone search bar
 * @returns AnalyticsEvent
 */
export default function createImpressionEvent ({
  verticalKey = undefined,
  standAlone = false
}) {
  return AnalyticsEvent.fromData({
    type: 'SEARCH_BAR_IMPRESSION',
    searcher: verticalKey ? Searcher.VERTICAL : Searcher.UNIVERSAL,
    ...verticalKey && { verticalConfigId: verticalKey },
    standAlone
  });
}
