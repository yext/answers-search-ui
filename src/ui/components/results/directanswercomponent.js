/** @module DirectAnswerComponent */

import Component from '../component';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';
import TranslationFlagger from '../../i18n/translationflagger';

/**
 * EventTypes are explicit strings defined
 * for what the server expects for analytics.
 *
 * @enum
 */
const EventTypes = {
  THUMBS_UP: 'THUMBS_UP',
  THUMBS_DOWN: 'THUMBS_DOWN'
};

const DEFAULT_CONFIG = {
  positiveFeedbackSrText: TranslationFlagger.flag({
    phrase: 'This answered my question'
  }),
  negativeFeedbackSrText: TranslationFlagger.flag({
    phrase: 'This did not answer my question'
  }),
  footerTextOnSubmission: TranslationFlagger.flag({
    phrase: 'Thank you for your feedback!'
  })
};

export default class DirectAnswerComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super({ ...DEFAULT_CONFIG, ...config }, systemConfig);

    /**
     * The user given config, without any defaults applied.
     * @type {Object}
     */
    this._userConfig = { ...config };

    /**
     * Recieve updates from storage based on this index
     * @type {StorageKey}
     */
    this.moduleId = StorageKeys.DIRECT_ANSWER;

    /**
     * The form used for submitting the feedback
     * @type {string}
     */
    this._formEl = config.formEl || '.js-directAnswer-feedback-form';

    /**
     * The `thumbs up` css selector to bind ui interaction to for reporting
     * @type {string}
     */
    this._thumbsUpSelector = config.thumbsUpSelector || '.js-directAnswer-thumbUp';

    /**
     * The `thumbs down` css selector to bind ui interaction to for reporting
     * @type {string}
     */
    this._thumbsDownSelector = config.thumbsDownSelector || '.js-directAnswer-thumbDown';

    /**
     * The display text for the View Details click to action link
     * @type {string}
     */
    this._viewDetailsText = config.viewDetailsText || TranslationFlagger.flag({
      phrase: 'View Details',
      context: 'Button label, view is a verb'
    });

    /**
     * The default custom direct answer card to use, when there are no matching card overrides.
     * @type {string}
     */
    this._defaultCard = config.defaultCard;

    /**
     * Card overrides, which choose a custom direct answer card based on fieldName, fieldType, and entityType.
     * @type {Array<Object>}
     */
    this._cardOverrides = config.cardOverrides || [];
  }

  static get type () {
    return 'DirectAnswer';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/directanswer';
  }

  /**
   * beforeMount, only display the direct answer component if it has data
   */
  beforeMount () {
    if (!this.hasState('answer')) {
      return false;
    }

    return true;
  }

  /**
   * Check whether a given cardOverride matches a given directAnswer.
   * @param {Object} directAnswer
   * @param {Object} override
   */
  _overrideMatchesAnswer (directAnswer, override) {
    if (!Object.keys(directAnswer).length) {
      return true;
    }
    const directAnswerPropeties = {
      entityType: directAnswer.relatedItem.data.type,
      fieldName: directAnswer.answer.fieldName,
      fieldType: directAnswer.answer.fieldType
    };
    for (let [propertyToMatch, propertyValue] of Object.entries(override)) {
      if (propertyToMatch === 'cardType') {
        continue;
      }
      if (directAnswerPropeties[propertyToMatch] !== propertyValue) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns the custom card that should be used for the given direct answer.
   * First, checks user given cardOverrides for a matching override, if there are none
   * then returns the default card.
   * @returns {string}
   */
  _getCustomCard (directAnswer) {
    const cardOverride = this._cardOverrides.find(override => {
      return this._overrideMatchesAnswer(directAnswer, override);
    });
    return cardOverride ? cardOverride.cardType : this._defaultCard;
  }

  /**
   * When the DOM is constructed,
   * we want to wire up the behavior for interacting with the quality feedback reporting (thumbsup/down)
   */
  onMount () {
    const customCard = this.getState('customCard');
    const feedbackSubmitted = this.getState('feedbackSubmitted') === true;
    // Avoid bindings if the feedback has previously been submitted or is using a custom card.
    if (customCard || feedbackSubmitted) {
      return this;
    }

    // For WCAG compliance, the feedback should be a submittable form
    DOM.on(this._formEl, 'submit', (e) => {
      const formEl = e.target;
      const checkedValue = DOM.query(formEl, 'input:checked').value === 'true';

      this.reportQuality(checkedValue);
      this.updateState({
        'feedbackSubmitted': true
      });
    });

    // Is this actually necessary? I guess it's only necessary if the
    // submit button is hidden.
    DOM.on(this._thumbsUpSelector, 'click', () => { DOM.trigger(this._formEl, 'submit'); });
    DOM.on(this._thumbsDownSelector, 'click', () => { DOM.trigger(this._formEl, 'submit'); });

    const rtfElement = DOM.query(this._container, '.js-yxt-rtfValue');
    rtfElement && DOM.on(rtfElement, 'click', e => this._handleRtfClickAnalytics(e));
  }

  /**
   * A click handler for links in a Rich Text Direct Answer. When such a link
   * is clicked, an {@link AnalyticsEvent} needs to be fired.
   *
   * @param {MouseEvent} event The click event.
   */
  _handleRtfClickAnalytics (event) {
    if (!event.target.dataset.ctaType) {
      return;
    }
    const ctaType = event.target.dataset.ctaType;

    const relatedItem = this.getState('relatedItem');
    const analyticsOptions = {
      verticalKey: relatedItem.verticalConfigId,
      directAnswer: true,
      fieldName: this.getState('answer').fieldApiName,
      searcher: 'UNIVERSAL',
      entityId: relatedItem.data.id,
      url: event.target.href
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

  setState (data) {
    return super.setState(Object.assign({}, data, {
      eventOptions: this.eventOptions(data),
      viewDetailsText: this._viewDetailsText,
      directAnswer: data,
      customCard: this._getCustomCard(data)
    }));
  }

  eventOptions (data) {
    if (!data || Object.keys(data).length === 0) {
      return data;
    }
    return JSON.stringify({
      verticalConfigId: data.relatedItem.verticalConfigId,
      searcher: 'UNIVERSAL',
      entityId: data.relatedItem.data.id,
      ctaLabel: this._viewDetailsText.toUpperCase().replace(' ', '_')
    });
  }

  /**
   * reportQuality will send the quality feedback to analytics
   * @param {boolean} isGood true if the answer is what you were looking for
   */
  reportQuality (isGood) {
    const eventType = isGood === true ? EventTypes.THUMBS_UP : EventTypes.THUMBS_DOWN;
    const event = new AnalyticsEvent(eventType)
      .addOptions({
        'directAnswer': true
      });

    this.analyticsReporter.report(event);
  }

  addChild (data, type, opts) {
    if (type === this.getState('customCard')) {
      return super.addChild(this.getState('directAnswer'), type, {
        ...this._userConfig,
        ...opts
      });
    }
    return super.addChild(data, type, opts);
  }
}
