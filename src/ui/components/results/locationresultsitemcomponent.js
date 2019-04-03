import ResultsItemComponent from './resultsitemcomponent';

export default class LocationResultsItemComponent extends ResultsItemComponent {
  constructor(opts = {}) {
    super(opts);

    this._templateName = 'results/locationresultsitem'
  }

  static get type() {
    return 'LocationResultsItemComponent';
  }
}
