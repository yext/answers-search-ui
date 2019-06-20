import ResultsItemComponent from './resultsitemcomponent';

export default class PeopleResultsItemComponent extends ResultsItemComponent {
  constructor (opts = {}) {
    super(opts);

    this._templateName = 'results/peopleresultsitem';
  }

  static get type () {
    return 'PeopleResultsItemComponent';
  }
}
