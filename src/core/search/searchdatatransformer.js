/**
 * A Data Transformer that takes the response object from a Search request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 *
 * TODO(billy) Create our own front-end data models
 */
export default class SearchDataTransformer {
  static transform(data) {
    let sections = data.response.modules;

    return {
      navigation: {
        tabOrder: SearchDataTransformer.navigation(sections),
      },
      universalResults: {
        sections: SearchDataTransformer.sections(sections)
      }
    };
  }

  static transformVertical(data) {
    let response = data.response;
    Object.assign(
      response,
      SearchDataTransformer.map(response.results))

    return {
      verticalResults: response
    };
  }

  static sections(sections) {
    let newSections = [];
    if (!sections || !Array.isArray(sections)) {
      return sections;
    }

    // Our sections should contain a property of mapMarker objects
    for (let i = 0; i < sections.length; i ++) {
      newSections.push(Object.assign(
        sections[i],
        SearchDataTransformer.map(sections[i].results)))
    }
    return newSections;
  }

  static map(results) {
    let mapMarkers = [],
        centerCoordinates = {};

    for (let j = 0; j < results.length; j ++) {
      let result = results[j];
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
      'map': {
        'mapCenter': centerCoordinates,
        'mapMarkers': mapMarkers
      }
    };
  }

  static navigation(sections) {
    let nav = [];
    if (!sections || !Array.isArray(sections)) {
      return nav;
    }
    for (let i = 0; i < sections.length; i ++) {
      nav.push(sections[i].verticalConfigId)
    }
    return nav;
  }
}