class UniversalResults {
  constructor(response, urls) {
    this.queryId = response.queryId;

    this.sections = Section.from(response.modules, urls);
  }
}

class Section {
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

class Result {
  constructor(data = {}) {
    Object.assign(this, data);
  }

  /**
   * resultsData expected format: { data: { ... }, highlightedFields: { ... }}
   */
  static from(resultsData) {
    let results = [];
    for (let i = 0; i < resultsData.length; i++) {
      // TODO use resultData.highlightedFields to
      // transform resultData.data into html-friendly strings that highlight values.

      // Check for new data format, otherwise fallback to legacy
      results.push(new Result(resultsData[i].data || resultsData[i]));
    }

    return results;
  }
}

class DirectAnswer {
  constructor(directAnswer = {}) {
    Object.assign(this, directAnswer);
  }
}

class Navigation {
  constructor(modules) {
    this.tabOrder = Navigation.from(modules);
  }

  static from(modules) {
    let nav = [];
    if (!modules || !Array.isArray(modules)) {
      return nav;
    }
    for (let i = 0; i < modules.length; i ++) {
      nav.push(modules[i].verticalConfigId)
    }
    return nav;
  }
}

class VerticalResults {
  constructor(response) {
    Object.assign(this, Section.from(response))
  }
}

/**
 * A Data Transformer that takes the response object from a Search request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 */
export default class SearchDataTransformer {
  static transform(data, urls) {
    let response = data.response;

    return {
      navigation: new Navigation(response.modules),
      directAnswer: new DirectAnswer(response.directAnswer),
      universalResults: new UniversalResults(response, urls)
    };
  }

  static transformVertical(data) {
    return {
      verticalResults: new VerticalResults(data.response)
    };
  }
}