/** @module DirectAnswerComponent */

import Component from '../component';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';

export default class DirectAnswerComponent extends Component {
  constructor (config = {}) {
    super(config);

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
    this._thumbsUpSelector = config.thumbsUpSelector || '.js-directAnswer-thumbDown';

    /**
     * The `thumbs down` css selector to bind ui interaction to for reporting
     * @type {string}
     */
    this._thumbsDownSelector = config.thumbsDownSelector || '.js-directAnswer-thumbUp';
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
   * When the DOM is constructed,
   * we want to wire up the behavior for interacting with the quality feedback reporting (thumbsup/down)
   */
  onMount () {
    // Avoid bindings if the feedback has previously been submitted
    if (this.getState('feedbackSubmitted') === true) {
      return this;
    }

    // For WCAG compliance, the feedback should be a submittable form
    DOM.on(this._formEl, 'submit', (e) => {
      let formEl = e.target;
      let checkedValue = DOM.query(formEl, 'input:checked').value;

      this.reportQuality(checkedValue);
      this.updateState({
        'feedbackSubmitted': true
      });
    });

    // Is this actually necessary? I guess it's only necessary if the
    // submit button is hidden.
    DOM.on(this._thumbsUpSelector, 'click', () => { DOM.trigger(this._formEl, 'submit'); });
    DOM.on(this._thumbsDownSelector, 'click', () => { DOM.trigger(this._formEl, 'submit'); });
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
   * reportQuality will send the quality feedback to analytics
   * @param {boolean} isGood true if the answer is what you were looking for
   */
  reportQuality (isGood) {
    const event = new AnalyticsEvent('quality_feedback')
      .addOptions({
        'thumbs_up': isGood
      });

    this.analyticsReporter.report(event);
  }
}
