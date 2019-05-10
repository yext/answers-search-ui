/**
 * A Data Transformer that takes the response object from a AutoComplete request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 *
 * TODO(billy) Create our own front-end data models
 */
export default class AutoCompleteDataTransformer {
  static clean(moduleId, data) {
    if (data.sections && data.sections.length === 0) {
      delete data.sections;
    }

    if (data.sections && data.sections.length === 1 && data.sections[0].results.length === 0) {
      delete data.sections;
    }

    return {
       [moduleId]: data
    };
  }

  static universal(response) {
    let moduleId = 'autocomplete',
        results = response.results;

    let data = [];
    for (let i = 0; i < results.length; i ++) {
      let value = results[i].value,
          highlightedValue = value,
          subStrings = results[i].matchedSubstrings;

      for (let j = 0; j < subStrings.length; j ++) {
        let start = Number(subStrings[j].offset),
            end = start + subStrings[j].length;

        highlightedValue = [valuce.slice(0, start), '<strong>', value.slice(start, end), '</strong>', value.slice(end)].join('');
      }

      data.push({
        shortValue: value,
        highlightedValue: highlightedValue,
      });
    }

    return AutoCompleteDataTransformer.clean('autocomplete', {
      'sections': [{
        'results': data
      }]
    });
  }

  static vertical(response, barKey) {
    let moduleId = 'autocomplete.' + barKey,
        sections = response.sections;

    return AutoCompleteDataTransformer.clean(moduleId, {
      'sections': sections
    })
  }
}