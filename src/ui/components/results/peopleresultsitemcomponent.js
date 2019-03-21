import ResultsItemComponent from './resultsitemcomponent';

export default class PeopleResultsItemComponent extends ResultsItemComponent {
  constructor(opts = {}) {
    super(opts);
  }

  static get TemplateName() {
    return 'results/peopleresultsitem'
  }

  static get type() {
    return 'PeopleResultsItemComponent';
  }
}