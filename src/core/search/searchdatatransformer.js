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
        sections: sections
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