/** @module GenerativeDirectAnswerComponent */

import Component from '../component';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';
import SearchStates from '../../../core/storage/searchstates';
import { getContainerClass } from '../../../core/utils/resultsutils';

export default class GenerativeDirectAnswerComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * The user given config, without any defaults applied.
     * @type {Object}
     */
    this._userConfig = { ...config };

    /**
     * Recieve updates from storage based on this index
     * @type {StorageKey}
     */
    this.moduleId = StorageKeys.GENERATIVE_DIRECT_ANSWER;

    /**
     * The citations css selector to bind ui interactions for reporting
     * @type {string}
     */
    this._citationsSelector = config.citationsSelector || '.js-gda-citation';

    /**
     * The custom generative direct answer card to use, if any.
     */
    this._customCard = config.cardType;
  }

  static get type () {
    return 'GenerativeDirectAnswer';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/generativedirectanswer';
  }

  /**
   * beforeMount, only display the generative direct answer component if
   * it has data or is in a loading state
   */
  beforeMount () {
    const searchState = this.getState('searchState');
    if (searchState === SearchStates.PRE_SEARCH) {
      // Don't display GDA if we haven't yet searched
      return false;
    }
    if (searchState === SearchStates.SEARCH_COMPLETE &&
      (!this.hasState('resultStatus') || this.getState('resultStatus') === 'NO_ANSWER')) {
      // Don't display the GDA if there is no result status (default state of GDA object)
      // or if there was no answer found.
      return false;
    }

    return true;
  }

  /**
   * When the DOM is constructed, we want to wire up the behavior for
   * interacting with the citations
   */
  onMount () {
    const customCard = this.getState('customCard');
    // Avoid bindings if using a custom card.
    if (customCard) {
      return this;
    }

    const citationsElements = DOM.queryAll(this._container, this._citationsSelector);
    citationsElements.forEach(citationElement => DOM.on(citationElement, 'click', e => this._handleCitationClickAnalytics(e)));

    const rtfElement = DOM.query(this._container, '.js-yxt-rtfValue');
    rtfElement && DOM.on(rtfElement, 'click', e => this._handleRtfClickAnalytics(e));
  }

  /**
   * A click handler for citations in a Generated Direct Answer.
   *
   * @param {MouseEvent} event The click event.
   */
  _handleCitationClickAnalytics (event) {
    // Climbing up the DOM to find the parent citation element, in case an interior element was clicked.
    let target = event.target;
    const citationTargetClassName = this._citationsSelector.substring(1);
    while (target && !target.classList.contains(citationTargetClassName)) {
      target = target.parentElement;
    }
    if (!target) {
      console.error('No citation target found for analytics.');
      return;
    }
    const entityId = target.dataset.entityid;
    if (!entityId) {
      console.error('No entityId found on citation element for analytics.');
      return;
    }
    const eventType = target.dataset.eventtype || 'CITATION_CLICK';
    const analyticsOptions = {
      generativeDirectAnswer: true,
      directAnswer: true,
      searcher: this.getState('searcher'),
      entityId,
      verticalConfigId: this.getState('verticalKey')
    };
    const analyticsEvent = new AnalyticsEvent(eventType);
    analyticsEvent.addOptions(analyticsOptions);
    this.analyticsReporter.report(analyticsEvent);
  }

  /**
   * A click handler for links in a Generated Direct Answer. When such a link
   * is clicked, an {@link AnalyticsEvent} needs to be fired.
   *
   * @param {MouseEvent} event The click event.
   */
  _handleRtfClickAnalytics (event) {
    if (!event.target.dataset.ctaType) {
      return;
    }
    const ctaType = event.target.dataset.ctaType;

    const analyticsOptions = {
      generativeDirectAnswer: true,
      directAnswer: true,
      fieldName: 'gda-snippet',
      searcher: this.getState('searcher'),
      url: event.target.href,
      verticalConfigId: this.getState('verticalKey')
    };

    const analyticsEvent = new AnalyticsEvent(ctaType);
    analyticsEvent.addOptions(analyticsOptions);
    this.analyticsReporter.report(analyticsEvent);
  }

  /**
   * updateState enables for partial updates (the delta between the old and new)
   * @type {object} The new state to apply to the old
   */
  updateState (state = {}) {
    const newState = Object.assign({}, this.getState(), state);
    this.setState(newState);
  }

  /**
   * Updates the search state css class on this component's container.
   */
  updateContainerClass (searchState) {
    Object.values(SearchStates).forEach(searchState => {
      this.removeContainerClass(getContainerClass(searchState));
    });
    this.addContainerClass(getContainerClass(searchState));
  }

  setState (data) {
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    this.updateContainerClass(searchState);
    if (searchState !== SearchStates.SEARCH_COMPLETE || !data.directAnswer) {
      return super.setState(Object.assign({}, data, {
        searchState,
        generativeDirectAnswer: {
          searchState
        },
        customCard: this._getCard()
      }));
    }

    return super.setState(Object.assign({}, data, {
      searchState,
      searcher: data.searcher,
      generativeDirectAnswer: data,
      customCard: this._getCard(),
      verticalKey: data.verticalKey
    }));
  }

  /**
   * Determines the card that should be used for GDA
   * @returns {string}
   */
  _getCard () {
    return this._customCard;
  }

  addChild (data, type, opts) {
    if (type === this.getState('customCard')) {
      const customCardData = this.getState('generativeDirectAnswer');
      return super.addChild(customCardData, type, {
        ...this._userConfig,
        ...opts
      });
    }
    return super.addChild(data, type, opts);
  }
}
