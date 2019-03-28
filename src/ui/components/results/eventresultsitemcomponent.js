import ResultsItemComponent from './resultsitemcomponent';

export default class EventResultsItemComponent extends ResultsItemComponent {
  constructor(opts = {}) {
    super(opts);
  }

  static get TemplateName() {
    return 'results/eventresultsitem'
  }

  static get type() {
    return 'EventResultsItemComponent';
  }
}