import ResultsComponent from './resultscomponent';

export default class EventResultsComponent extends ResultsComponent {
  constructor(opts = {}) {
    super(opts);

    this.moduleId = 0;
  }

  static get type() {
    return 'EventResultsComponent';
  }

  static get TemplateName() {
    return 'results/eventresults';
  }
}