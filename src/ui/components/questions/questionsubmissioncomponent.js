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
  'privacyPolicyText': 'By submitting my email address, I consent to being contacted via email at the address provided.',

  /**
   * The label to use for the Submit button
   * @type {string}
   */
  'buttonLabel': 'Submit',

  /**
   * The title to display in the title bar
   * @type {string}
   */
  'sectionTitle': 'Ask a Question',

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
  'questionSubmissionConfirmationText': 'Thank you for your feedback!',

  /**
   * The default privacy policy url label
   * @type {string}
  */
  'privacyPolicyUrlLabel': 'Learn more here',

  /**
   * The default privacy policy url
   * @type {string}
   */
  'privacyPolicyUrl': '',

  /**
   * The default privacy policy error text, shown when the user does not agree
   * @type {string}
   */
  'privacyPolicyErrorText': '* You must agree to the privacy policy to submit feedback.',

  /**
   * The default email format error text, shown when the user submits an invalid email
   * @type {string}
   */
  'emailFormatErrorText': '* Please enter a valid email address'
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
    let triggerEl = DOM.query(this._container, '.js-content-visibility-toggle');
    if (triggerEl !== null) {
      this.bindFormToggle(triggerEl);
    }

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
      const errors = this.validate(formEl);
      const formData = this.parse(formEl);
      if (Object.keys(errors).length) {
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
   * bindFormToggle handles expanding and mimimizing the component's form.
   * @param {HTMLElement} triggerEl
   */
  bindFormToggle (triggerEl) {
    DOM.on(triggerEl, 'click', (e) => {
      const formData = this.getState();
      const expandState = this.getState('questionExpanded');
      this.setState(new QuestionSubmission({ ...formData, 'expanded': !expandState }));
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
      if (inputFields[i].type === 'checkbox') {
        val = inputFields[i].checked;
      }
      obj[inputFields[i].name] = val;
    }

    return obj;
  }

  /**
   * Validates the fields for correct formatting
   * @param {HTMLElement} formEl
   * @returns {Object} errors object if any errors found
   */
  validate (formEl) {
    let errors = {};
    const fields = DOM.queryAll(formEl, '.js-question-field');
    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].checkValidity()) {
        switch (fields[i].name) {
          case 'email':
            errors['emailError'] = true;
            if (!fields[i].validity.valueMissing) {
              errors['emailErrorText'] = this._config.emailFormatErrorText;
            }
            break;
          case 'name':
            errors['nameError'] = true;
            break;
          case 'privacyPolicy':
            errors['privacyPolicyErrorText'] = this._config.privacyPolicyErrorText;
            errors['privacyPolicyError'] = true;
            break;
          case 'questionText':
            errors['questionTextError'] = true;
            break;
        }
      }
    }
    return errors;
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
