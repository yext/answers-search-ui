import Component from '../component';
import LocationResultsItemComponent from './locationresultsitemcomponent';
import EventResultsItemComponent from './eventresultsitemcomponent';
import PeopleResultsItemComponent from './peopleresultsitemcomponent';

const ResultType = {
  EVENT: 'event',
  LOCATION: 'location',
  PEOPLE: 'people'
};

export default class ResultsComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this._templateName = 'results/results';

    this.verticalSearchKey = opts.verticalSearchKey || null;

    this.limit = opts.limit || 5;
  }

  static get type() {
    return 'ResultsComponent';
  }

  addChild(data, type) {
    switch (data.type) {
      case ResultType.EVENT:
        type = EventResultsItemComponent.type;
        break;
      case ResultType.LOCATION:
        type = LocationResultsItemComponent.type;
        break;
      case ResultType.PEOPLE:
        type = PeopleResultsItemComponent.type;
        break;
    }

    return super.addChild(data, type);
  }

  setState(data) {
    let limitedResults = [];
    if (data.results) {
      let count = 0;
      for (let i = 0; i < data.results.length; i++) {
        if (i > this._limit - 1) {
          break;
        }

        limitedResults.push(data.results[i]);
        count ++;
      }
      data = {
        resultsCount: count,
        results: limitedResults,
        verticalConfigId: data.verticalConfigId
      }
    }
    return super.setState(data);
  }
}