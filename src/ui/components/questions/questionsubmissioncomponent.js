/** @module QuestionSubmissionComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
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
   * @required
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
  'emailLabel': 'Email Address:',

  /**
   * An optional label to use for the name input
   * @type {string}
   */
  'nameLabel': 'Name:',

  /**
   * An optional label to use for the question
   * @type {string}
   */
  'questionLabel': 'What is your question?',

  /**
   * An optional label to use for the Privacy Policy
   * @type {string}
   */
  'privacyPolicyLabel': 'I agree to our Privacy Policy:',

  /**
   * The label to use for the Submit button
   * @type {string}
   */
  'buttonLabel': 'Submit'
};

/**
 * QuestionSubmissionComponent is a component that creates a form
 * thats displayed whenever a query is run. It enables the user
 * to submit questions that they cant find the answer for.
 */
export default class QuestionSubmissionComponent extends Component {
  constructor (config = {}) {
    super(Object.assign({}, DEFAULT_CONFIG, config));

    /**
     * Reference to the storage model
     * @type {string}
     */
    this.moduleId = StorageKeys.QUESTION_SUBMISSION;

    /**
     * NOTE(billy) if this is a pattern we want to follow for configuration
     * we should bake it into the core class.
     */
    this.validateConfig();
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
    if (this._config.entityId === null ||
        typeof this._config.entityId !== 'number') {
      throw new AnswersComponentError(
        '`entityId` is a required configuration option for Question Submission',
        'QuestionSubmission');
    }
  }

  onMount () {
    let formEl = DOM.query(this._container, this._config.formSelector);
    if (formEl === null) {
      return;
    }

    this.bindAnalytics(formEl);
    this.bindFormSubmit(formEl);
  }

  bindAnalytics (formEl) {
    if (this.analyticsReporter === null) {
      return;
    }

    const questionTextEl = DOM.query(formEl, '.js-question-text');
    DOM.on(questionTextEl, 'focus', () => {
      this.analyticsReporter.report(new AnalyticsEvent('QUESTION_FOCUS'));
    });
  }

  bindFormSubmit (formEl) {
    DOM.on(formEl, 'submit', (e) => {
      e.preventDefault();
      // TODO(billy) we probably want to disable the form from being submitted twice
      const formData = this.parse(formEl);
      const errors = this.validateRequired(formData);
      if (errors) {
        return this.setState(Object.assign({}, formData, {
          errors: errors
        }));
      }

      this.core.submitQuestion({
        'entityId': this._config.entityId,
        'questionLanguage': this._config.language,
        'site': 'FIRST_PARTY',
        'name': formData.name,
        'email': formData.email,
        'questionText': formData.questionText,
        'questionDescription': formData.questionDescription
      });
    });
  }

  /**
   * Takes the form, and builds a object that represents the input names
   * and text fields.
   * @param {HTMLElement} formData
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

    return Object.keys(errors).length > 0 ? errors : false;
  }
}
