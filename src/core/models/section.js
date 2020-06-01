/** @module Section */

import SearchStates from '../storage/searchstates';
import ResultFactory from './resultfactory';

export default class Section {
  constructor (data, url, formatters) {
    this.searchState = SearchStates.SEARCH_COMPLETE;
    this.verticalConfigId = data.verticalConfigId || null;
    this.resultsCount = data.resultsCount || 0;
    this.encodedState = data.encodedState || '';
    this.appliedQueryFilters = AppliedQueryFilter.from(data.appliedQueryFilters);
    this.facets = data.facets || null;
    this.results = ResultFactory.from(data.results, formatters, this.verticalConfigId, data.source);
    this.map = Section.parseMap(data.results);
    this.verticalURL = url || null;
    this.resultsContext = data.resultsContext;
  }

  static parseMap (results) {
    let mapMarkers = [];

    let centerCoordinates = {};

    for (let j = 0; j < results.length; j++) {
      // TODO(billy) Remove legacy fallback from all data format
      let result = results[j].data || results[j];
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

class AppliedQueryFilter {
  // Support legacy model and new model until fully migrated.
  // TODO(billy) Remove the left expression during assignment when migrated.
  // TODO(SPR-2394): convert this into a FilterNode here instead of in VerticalResults
  constructor (appliedQueryFilter) {
    this.key = appliedQueryFilter.key || appliedQueryFilter.displayKey;
    this.value = appliedQueryFilter.value || appliedQueryFilter.displayValue;
    this.filter = appliedQueryFilter.filter;
    this.fieldId = Object.keys(appliedQueryFilter.filter)[0];
  }

  static from (appliedQueryFilters) {
    let filters = [];
    for (let i = 0; i < appliedQueryFilters.length; i++) {
      filters.push(new AppliedQueryFilter(appliedQueryFilters[i]));
    }
    return filters;
  }
}
