import Result from './result';

export default class Section {
  constructor(data, url) {
    this.verticalConfigId = data.verticalConfigId || null;

    this.resultsCount = data.resultsCount || 0;

    this.encodedState = data.encodedState || '';

    this.appliedQueryFilters = data.appliedQueryFilters || null;

    this.facets = data.facets || null;

    this.results = Result.from(data.results);

    this.map = Section.parseMap(data.results);

    this.verticalURL = url || null;
  }

  static parseMap(results) {
    let mapMarkers = [],
        centerCoordinates = {};

    for (let j = 0; j < results.length; j ++) {
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
        })
      }
    }

    return {
      'mapCenter': centerCoordinates,
      'mapMarkers': mapMarkers
    };
  }

  static from(modules, urls) {
    let sections = [];
    if (!modules) {
      return sections;
    }

    if (!Array.isArray(modules)) {
      return new Section(modules);
    }

    // Our sections should contain a property of mapMarker objects
    for (let i = 0; i < modules.length; i ++) {
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