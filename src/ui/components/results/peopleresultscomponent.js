import ResultsComponent from './resultscomponent';

export default class PeopleResultsComponent extends ResultsComponent {
  constructor(opts = {}) {
    super(opts);

    this.moduleId = 2;
  }

  static get type() {
    return 'PeopleResultsComponent';
  }

  static get TemplateName() {
    return 'results/peopleresults';
  }
}