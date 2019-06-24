import ResultsItemComponent from './resultsitemcomponent';

export default class EventResultsItemComponent extends ResultsItemComponent {
  constructor (opts = {}) {
    super(opts);

    this._templateName = 'results/eventresultsitem';
  }

  static get type () {
    return 'EventResultsItemComponent';
  }

  static areDuplicateNamesAllowed () {
    return true;
  }
}
