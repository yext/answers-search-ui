/** @module Section */

import SearchStates from '../storage/searchstates';

export default class Section {
  constructor (data = {}, url, formatters, resultsContext) {
    this.searchState = SearchStates.SEARCH_COMPLETE;
    this.verticalConfigId = data.verticalConfigId || null;
    this.resultsCount = data.resultsCount || 0;
    this.encodedState = data.encodedState || '';
    this.appliedQueryFilters = data.appliedQueryFilters;
    this.facets = data.facets || null;
    this.results = data.results; // TODO use formatters on results
    this.map = Section.parseMap(data.results);
    this.verticalURL = url || null;
    this.resultsContext = resultsContext;
  }

  static parseMap (results) {
    if (!results) {
      return {};
    }

    let mapMarkers = [];

    let centerCoordinates = {};

    for (let j = 0; j < results.length; j++) {
      let result = results[j]._raw;
      if (result && result.yextDisplayCoordinate) {
        if (!centerCoordinates.latitude) {
          centerCoordinates = {
            latitude: result.yextDisplayCoordinate.latitude,
            longitude: result.yextDisplayCoordinate.longitude
          };
        }
        mapMarkers.push({
          item: result,
          label: mapMarkers.length + 1,
          latitude: result.yextDisplayCoordinate.latitude,
          longitude: result.yextDisplayCoordinate.longitude
        });
      }
    }

    return {
      'mapCenter': centerCoordinates,
      'mapMarkers': mapMarkers
    };
  }
}
