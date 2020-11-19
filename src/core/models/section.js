/** @module Section */

import SearchStates from '../storage/searchstates';

export default class Section {
  constructor (data, url, formatters) {
    this.searchState = SearchStates.SEARCH_COMPLETE;
    this.verticalConfigId = data.verticalConfigId || null;
    this.resultsCount = data.resultsCount || 0;
    this.encodedState = data.encodedState || '';
    this.appliedQueryFilters = data.appliedQueryFilters;
    this.facets = data.facets || null;
    this.results = data.results;
    this.map = Section.parseMap(data.results);
    this.verticalURL = url || null;
    this.resultsContext = data.resultsContext;
  }

  static parseMap (results) {
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

  /**
   * Create a section from the provided data
   * @param {Object|Array} modules The result modules
   * @param {Object} urls The tab urls
   * @param {Object.<string, function>} formatters Field formatters for results
   */
  static from (modules, urls, formatters) {
    let sections = [];
    if (!modules) {
      return sections;
    }

    if (!Array.isArray(modules)) {
      return new Section(modules, null, formatters);
    }

    // Our sections should contain a property of mapMarker objects
    for (let i = 0; i < modules.length; i++) {
      sections.push(
        new Section(
          modules[i],
          urls[modules[i].verticalConfigId],
          formatters
        )
      );
    }

    return sections;
  }
}
