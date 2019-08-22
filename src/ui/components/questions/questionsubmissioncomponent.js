/** @module QuestionSubmissionComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchParams from '../../dom/searchparams';
import { AnswersComponentError } from '../../../core/errors/errors';

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
   * Question submission is based on a form as context.
   * Optionally provided, otherwise defaults to native form node within container
   * @type {string} CSS selector
   */
  'formSelector': 'form',

  /**
   * The label to use for the e-mail address input
   * Optionally provided, otherwise defaults to `Email Address`
   * @type {string}
   */
  'emailLabel': '*Email Address:',

  /**
   * The label to use for the name input
   * Optionally provided, otherwise defaults to `Name`
   * @type {string}
   */
  'nameLabel': '*Name:',

  /**
   * The label to use for the Question
   * Optionally provided, otherwise defaults to `What is your question?`
   * @type {string}
   */
  'questionLabel': '*What is your question',

  /**
   * The label to use for the Privacy Policy
   * Optionally provided, otherwise defaults to `What is your question?`
   * @type {string}
   */
  'privacyPolicyLabel': 'I agree to our Privacy Policy:',

  /**
   * The label to use for the Submit button
   * Optionally provided, otherwise defaults to `Submit?`
   * @type {string}
   */
  'buttonLabel': 'Submit'
};

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

    DOM.on(formEl, 'submit', (e) => {
      e.preventDefault();

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
      if (inputFields[i].type === 'checkbox' && val == 'true') {
        val = true;
      }
      obj[inputFields[i].name] = val;
    }

    return obj;
  }

  /**
   * Validates the required fields (or rules) for the formData
   * @param {HTMLElement} formData
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
