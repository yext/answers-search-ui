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
          subStrings = results[i].matchedSubstrings;

      data.push(AutoCompleteDataTransformer.highlight(value, subStrings));
    }

    return AutoCompleteDataTransformer.clean('autocomplete', {
      'sections': [{
        'results': data
      }]
    });
  }

  static highlight(value, subStrings) {
    if (!subStrings || subStrings.length === 0) {
      return {
        shortValue: value,
        highlightedValue: value
      };
    }

    // Make sure our highlighted substrings are sorted
    subStrings.sort((a, b) => {
      if (a.offset < b.offset) {
        return -1;
      }

      if (a.offset > b.offset) {
        return 1;
      }

      return 0;
    });

    // Build our new value based on the highlights
    let highlightedValue = '',
        nextStart = 0;

    for (let j = 0; j < subStrings.length; j ++) {
      let start = Number(subStrings[j].offset),
          end = start + subStrings[j].length;

      highlightedValue += [value.slice(nextStart, start), '<strong>', value.slice(start, end), '</strong>'].join('');

      if (j === subStrings.length - 1 && end < value.length) {
        highlightedValue += value.slice(end);
      }

      nextStart = end;
    }

    return {
      shortValue: value,
      highlightedValue: highlightedValue,
    };
  }

  static vertical(response, barKey) {
    let moduleId = 'autocomplete.' + barKey,
        sections = response.sections;

    return AutoCompleteDataTransformer.clean(moduleId, {
      'sections': sections
    })
  }
}