/** @module QuestionSubmissionComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchParams from '../../dom/SearchParams';

export default class QuestionSubmissionComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.moduleId = StorageKeys.UNIVERSAL_RESULTS;

    this._templateName = 'questions/submission';

    /**
     * Question submission is based on a form as context.
     * Optionally provided, otherwise defaults to native form node within container
     * @type {string} CSS selector
     */
    this._formEl = opts.formSelector || 'form';

    /**
     * The label to use for the e-mail address input
     * Optionally provided, otherwise defaults to `Email Address`
     * @type {string}
     */
    this._emailLabel = opts.emailLabel || '*Email Address:';

    /**
     * The label to use for the name input
     * Optionally provided, otherwise defaults to `Name`
     * @type {string}
     */
    this._nameLabel = opts.nameLabel || 'Name:';

    /**
     * The label to use for the Question
     * Optionally provided, otherwise defaults to `What is your question?`
     * @type {string}
     */
    this._questionLabel = opts.questionLabel || '*What is your question?';

    /**
     * The label to use for the Privacy Policy
     * Optionally provided, otherwise defaults to `What is your question?`
     * @type {string}
     */
    this._privacyPolicyLabel = opts.privacyPolicyLabel || 'I agree to our Privacy Policy:';

    /**
     * The label to use for the Submit button
     * Optionally provided, otherwise defaults to `Submit?`
     * @type {string}
     */
    this._buttonLabel = opts.buttonLabel || 'Submit';
  }

  beforeMount () {
    // Only mount our component if the query has been triggered at least once.
    if (this.getState('hasQueried') === true) {
      return true;
    }

    return false;
  }

  onMount () {
    this.initSubmit(this._formEl);
  }

  initSubmit (formSelector) {
    this._formEl = formSelector;

    let form = DOM.query(this._container, this._formEl);

    DOM.on(form, 'submit', (e) => {
      e.preventDefault();
      // TODO(billy) Serialize form
      // this.core.submitQuestion(form);
    });
  }

  static get type () {
    return 'QASubmission';
  }

  setState (data, val) {
    // Since we're binding to search results,
    // and we only want to show the QA submission
    return super.setState({
      hasQueried: data.sections !== undefined,
      emailLabel: this._emailLabel,
      nameLabel: this._nameLabel,
      questionLabel: this._questionLabel,
      privacyPolicyLabel: this._privacyPolicyLabel,
      buttonLabel: this._buttonLabel,
      question: new SearchParams(window.location.search.substring(1)).get('query')
    });
  }
}
