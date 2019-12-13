/** @module QuestionSubmissionComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import QuestionSubmission from '../../../core/models/questionsubmission';
import { AnswersComponentError } from '../../../core/errors/errors';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';

/**
 * Configurable options for the component
 * @type {Object}
 */
const DEFAULT_CONFIG = {
  /**
   * The entity identifier that the question is associated with.
   * This is typically an organization object
   * @type {number}
   */
  'entityId': null,

  /**
   * The default language of the question
   * @type {string}
   */
  'language': 'EN',

  /**
   * The main CSS selector used to reference the form for the component.
   * @type {string} CSS selector
   */
  'formSelector': 'form',

  /**
   * An optional label to use for the e-mail address input
   * @type {string}
   */
  'emailLabel': 'Email',

  /**
   * An optional label to use for the name input
   * @type {string}
   */
  'nameLabel': 'Name',

  /**
   * An optional label to use for the question
   * @type {string}
   */
  'questionLabel': 'Question',

  /**
   * An optional label to use for the Privacy Policy
   * @type {string}
   */
  'privacyPolicyLabel': 'By submitting my email address, I consent to being contacted via email at the address provided.',

  /**
   * The label to use for the Submit button
   * @type {string}
   */
  'buttonLabel': 'Submit',

  /**
   * The title to display in the title bar
   * @type {string}
   */
  'sectionTitle': 'Feedback',

  /**
   * The description to display in the title bar
   * @type {string}
   */
  'sectionDescription': 'Can’t find what you are looking for? Provide your feedback below.',

  /**
   * The name of the icon to use in the title bar
   * @type {string}
   */
  'sectionTitleIconName': 'support',

  /**
   * The text to display in the feedback form ahead of the Question input
   * @type {string}
   */
  'feedbackFormInfoText': 'Enter your question and contact information, and we\'ll get back to you with a response shortly.',

  /**
   * The placeholder text for required inputs
   * @type {string}
   */
  'requiredInputPlaceholder': '(required)',

  /**
   * The placeholder text for the question text area
   * @type {string}
   */
  'questionInputPlaceholder': 'Enter your question here',

  /**
   * The confirmation text to display after successfully submitting feedback
   * @type {string}
   */
  'questionSubmissionConfirmationText': 'Thank you for your feedback!'
};

/**
 * QuestionSubmissionComponent is a component that creates a form
 * thats displayed whenever a query is run. It enables the user
 * to submit questions that they cant find the answer for.
 */
export default class QuestionSubmissionComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(Object.assign({}, DEFAULT_CONFIG, config), systemConfig);

    /**
     * Reference to the storage model
     * @type {string}
     */
    this.moduleId = StorageKeys.QUESTION_SUBMISSION;

    /**
     * verticalKey is used for analytics
     * @type {string}
     * @private
     */
    this._verticalKey = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey;

    /**
     * NOTE(billy) if this is a pattern we want to follow for configuration
     * we should bake it into the core class.
     */
    this.validateConfig();

    this.core.globalStorage.on('update', StorageKeys.QUERY_ID, () => {
      const questionText = this.core.globalStorage.getState(StorageKeys.QUERY);
      this.setState(new QuestionSubmission({
        questionText: questionText,
        expanded: this._config.expanded
      }));
    });
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'questions/questionsubmission';
  }

  /**
   * The public interface alias for the component
   * @returns {string}
   * @override
   */
  static get type () {
    return 'QASubmission';
  }

  /**
   * validationConfig contains a bunch of rules
   * that are used to validate aginst configuration provided by the user
   */
  validateConfig () {
    if (this._config.entityId === null || this._config.entityId === undefined) {
      throw new AnswersComponentError(
        '`entityId` is a required configuration option for Question Submission',
        'QuestionSubmission');
    }
  }

  beforeMount () {
    // Avoid mounting the component if theres no data
    // Note, 1 because `config` is always part of the state.
    return Object.keys(this.getState()).length > 1;
  }

  onMount () {
    let formEl = DOM.query(this._container, this._config.formSelector);
    if (formEl === null) {
      return;
    }

    this.bindFormFocus(formEl);
    this.bindFormSubmit(formEl);
  }

  /**
   * bindFormFocus will wire up the DOM focus event to serverside reporting
   * @param {HTMLElement} formEl
   */
  bindFormFocus (formEl) {
    if (this.analyticsReporter === null) {
      return;
    }

    const questionText = DOM.query(formEl, '.js-question-text');
    DOM.on(questionText, 'focus', () => {
      this.analyticsReporter.report(this.getAnalyticsEvent('QUESTION_FOCUS'));
    });
  }

  /**
   * bindFormSubmit handles submitting the question to the server,
   * and submits an event to serverside reporting
   * @param {HTMLElement} formEl
   */
  bindFormSubmit (formEl) {
    DOM.on(formEl, 'submit', (e) => {
      e.preventDefault();
      this.analyticsReporter.report(this.getAnalyticsEvent('QUESTION_SUBMIT'));

      // TODO(billy) we probably want to disable the form from being submitted twice
      const formData = this.parse(formEl);
      const errors = this.validateRequired(formData);
      if (errors) {
        return this.setState(new QuestionSubmission(formData, errors));
      }

      this.core.submitQuestion({
        'entityId': this._config.entityId,
        'questionLanguage': this._config.language,
        'site': 'FIRSTPARTY',
        'name': formData.name,
        'email': formData.email,
        'questionText': formData.questionText,
        'questionDescription': formData.questionDescription
      })
        .catch(error => {
          this.setState(
            new QuestionSubmission(formData, {
              'network': 'We\'re sorry, an error occurred.'
            })
          );
          throw error;
        });
    });
  }

  /**
   * Takes the form, and builds a object that represents the input names
   * and text fields.
   * @param {HTMLElement} formEl
   * @returns {object}
   */
  parse (formEl) {
    const inputFields = DOM.queryAll(formEl, '.js-question-field');
    if (!inputFields || inputFields.length === 0) {
      return {};
    }

    let obj = {};
    for (let i = 0; i < inputFields.length; i++) {
      let val = inputFields[i].value;
      if (inputFields[i].type === 'checkbox' && val === 'true') {
        val = true;
      }
      obj[inputFields[i].name] = val;
    }

    return obj;
  }

  /**
   * Validates the required fields (or rules) for the form data
   * @param {Object} formData
   * @returns {Object|boolean} errors object if any errors found
   */
  validateRequired (formData) {
    let errors = {};
    if (!formData.email || typeof formData.email !== 'string') {
      errors['email'] = 'Missing email address!';
    }

    if (!formData.privacyPolicy || formData.privacyPolicy !== true) {
      errors['privacyPolicy'] = 'Approving our privacy policy terms is required!';
    }

    if (!formData.questionText || typeof formData.questionText !== 'string') {
      errors['questionText'] = 'Question text is required!';
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }

  /**
   * Returns an options object describing the context of a reportable event
   */
  getAnalyticsEvent (eventType) {
    const analyticsEvent = new AnalyticsEvent(eventType);
    analyticsEvent.addOptions({
      verticalConfigId: this._verticalKey,
      searcher: this._verticalKey ? 'VERTICAL' : 'UNIVERSAL'
    });
    return analyticsEvent;
  }
}
