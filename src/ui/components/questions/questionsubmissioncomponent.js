/** @module QuestionSubmissionComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import QuestionSubmission from '../../../core/models/questionsubmission';
import { AnswersComponentError } from '../../../core/errors/errors';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';
import SearchStates from '../../../core/storage/searchstates';
import TranslationFlagger from '../../i18n/translationflagger';

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
   * The main CSS selector used to reference the form for the component.
   * @type {string} CSS selector
   */
  'formSelector': 'form',

  /**
   * An optional label to use for the e-mail address input
   * @type {string}
   */
  'emailLabel': TranslationFlagger.flag({
    phrase: 'Email',
    context: 'Labels the email value provided as an argument'
  }),

  /**
   * An optional label to use for the name input
   * @type {string}
   */
  'nameLabel': TranslationFlagger.flag({
    phrase: 'Name',
    context: 'Labels the name value provided as an argument'
  }),

  /**
   * An optional label to use for the question
   * @type {string}
   */
  'questionLabel': TranslationFlagger.flag({
    phrase: 'Question',
    context: 'Labels the question value provided as an argument'
  }),

  /**
   * An optional label to use for the Privacy Policy
   * @type {string}
   */
  'privacyPolicyText': TranslationFlagger.flag({
    phrase: 'By submitting my email address, I consent to being contacted via email at the address provided.'
  }),

  /**
   * The label to use for the Submit button
   * @type {string}
   */
  'buttonLabel': TranslationFlagger.flag({
    phrase: 'Submit',
    context: 'Button label'
  }),

  /**
   * The title to display in the title bar
   * @type {string}
   */
  'sectionTitle': TranslationFlagger.flag({
    phrase: 'Ask a Question',
    context: 'Title of section'
  }),

  /**
   * The description to display in the title bar
   * @type {string}
   */
  'teaser': TranslationFlagger.flag({
    phrase: 'Can’t find what you\'re looking for? Ask a question below.'
  }),

  /**
   * The name of the icon to use in the title bar
   * @type {string}
   */
  'sectionTitleIconName': 'support',

  /**
   * The text to display in the feedback form ahead of the Question input
   * @type {string}
   */
  'description': TranslationFlagger.flag({
    phrase: 'Enter your question and contact information, and we\'ll get back to you with a response shortly.'
  }),

  /**
   * The placeholder text for required inputs
   * @type {string}
   */
  'requiredInputPlaceholder': TranslationFlagger.flag({
    phrase: '(required)',
    context: 'Indicates that entering input is mandatory'
  }),

  /**
   * The placeholder text for the question text area
   * @type {string}
   */
  'questionInputPlaceholder': TranslationFlagger.flag({
    phrase: 'Enter your question here',
    context: 'Placeholder text for input field'
  }),

  /**
   * The confirmation text to display after successfully submitting feedback
   * @type {string}
   */
  'questionSubmissionConfirmationText': TranslationFlagger.flag({
    phrase: 'Thank you for your question!'
  }),

  /**
   * The default privacy policy url label
   * @type {string}
  */
  'privacyPolicyUrlLabel': TranslationFlagger.flag({
    phrase: 'Learn more here.',
    context: 'Labels a link'
  }),

  /**
   * The default privacy policy url
   * @type {string}
   */
  'privacyPolicyUrl': '',

  /**
   * The default privacy policy error text, shown when the user does not agree
   * @type {string}
   */
  'privacyPolicyErrorText': TranslationFlagger.flag({
    phrase: '* You must agree to the privacy policy to submit a question.'
  }),

  /**
   * The default email format error text, shown when the user submits an invalid email
   * @type {string}
   */
  'emailFormatErrorText': TranslationFlagger.flag({
    phrase: '* Please enter a valid email address.'
  }),

  /**
   * The default network error text, shown when there is an issue with the QA Submission
   * request.
   * @type {string}
   */
  'networkErrorText': TranslationFlagger.flag({
    phrase: 'We\'re sorry, an error occurred.'
  }),

  /**
   * Whether or not this component is expanded by default.
   * @type {boolean}
   */
  'expanded': true
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
     * Reference to the locale as set in the global config
     * @type {string}
     */
    this.locale = this.core.globalStorage.getState(StorageKeys.LOCALE);

    /**
     * NOTE(billy) if this is a pattern we want to follow for configuration
     * we should bake it into the core class.
     */
    this.validateConfig();

    /**
     * The QuestionSubmission component should be rendered only once a search has completed. If the
     * search results are still loading, the component should not be displayed.
     */
    const onResultsUpdate = results => {
      if (results.searchState !== SearchStates.SEARCH_LOADING) {
        const questionText = this.core.globalStorage.getState(StorageKeys.QUERY);
        this.setState(new QuestionSubmission({
          questionText: questionText,
          expanded: this._config.expanded
        }));
      } else {
        this.unMount();
      }
    };

    this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, onResultsUpdate);
    this.core.globalStorage.on('update', StorageKeys.UNIVERSAL_RESULTS, onResultsUpdate);
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
        'questionLanguage': this.locale,
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
      this.setState(
        new QuestionSubmission({
          ...formData,
          'expanded': !formData.questionExpanded,
          'submitted': formData.questionSubmitted },
        formData.errors));
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
        if (i === 0) {
          // set focus state on first error
          fields[i].focus();
        }
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
