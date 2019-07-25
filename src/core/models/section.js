/** @module Section */

import SearchStates from '../storage/searchstates';
import ResultFactory from './resultfactory';

export default class Section {
  constructor (data, url) {
    this.searchState = SearchStates.SEARCH_COMPLETE;
    this.verticalConfigId = data.verticalConfigId || null;
    this.resultsCount = data.resultsCount || 0;
    this.encodedState = data.encodedState || '';
    this.appliedQueryFilters = AppliedQueryFilter.from(data.appliedQueryFilters);
    this.facets = data.facets || null;
    this.results = ResultFactory.from(data.results);
    this.map = Section.parseMap(data.results);
    this.verticalURL = url || null;
    this.sectionTitle = null;
    if (this.verticalConfigId) {
      // derive the sectionTitle from the verticalConfigId by default
      this.sectionTitle = this.verticalConfigId
        .split('_')
        .map(frag => `${frag.charAt(0).toUpperCase()}${frag.slice(1)}`)
        .join(' ');
    }
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

  static from (modules, urls) {
    let sections = [];
    if (!modules) {
      return sections;
    }

    if (!Array.isArray(modules)) {
      return new Section(modules);
    }

    // Our sections should contain a property of mapMarker objects
    for (let i = 0; i < modules.length; i++) {
      sections.push(
        new Section(
          modules[i],
          urls[modules[i].verticalConfigId]
        )
      );
    }

    return sections;
  }
}

class AppliedQueryFilter {
  // Support legacy model and new model until fully migrated.
  // TODO(billy) Remove the left expression during assignment when migrated.
  constructor (appliedQueryFilter) {
    this.key = appliedQueryFilter.key || appliedQueryFilter.displayKey;
    this.value = appliedQueryFilter.value || appliedQueryFilter.displayValue;
  }

  static from (appliedQueryFilters) {
    let filters = [];
    for (let i = 0; i < appliedQueryFilters.length; i++) {
      filters.push(new AppliedQueryFilter(appliedQueryFilters[i]));
    }
    return filters;
  }
}
