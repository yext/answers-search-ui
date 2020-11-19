/** @module ResultFactory */

import Result from './result';
import HighlightedValue from './highlightedvalue';
import { AnswersCoreError } from '../errors/errors';

export default class ResultFactory {
  /**
   * Converts an API result object into a Result view model.
   * Includes default mappings of GoogleCustomSearchEngine results to
   * the fields exposed by the template.
   * @param resultsData  {Array} expected format: { data: { ... }, highlightedFields: { ... }}
   * @param {Object.<string, function>} formatters The formatters to apply to the result
   * @param {string} verticalId The vertical of these results
   * @param {string} source Backend source of these results
   * @returns {Result[]}
   */
  static from (resultsData, formatters, verticalId, source) {
    let results = [];

    for (let i = 0; i < resultsData.length; i++) {
      const data = resultsData[i].data || resultsData[i];
      const distance = resultsData[i].distance;
      const distanceFromFilter = resultsData[i].distanceFromFilter;

      switch (source) {
        case 'GOOGLE_CSE':
          results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
          break;
        case 'BING_CSE':
          results.push(ResultFactory.fromBingCustomSearchEngine(data));
          break;
        case 'ZENDESK':
          results.push(ResultFactory.fromZendeskSearchEngine(data));
          break;
        case 'ALGOLIA':
          results.push(ResultFactory.fromAlgoliaSearchEngine(data));
          break;
        case 'KNOWLEDGE_MANAGER':
          const highlightedFields = resultsData[i].highlightedFields || {};

          results.push(ResultFactory.fromKnowledgeManager(
            data, formatters, verticalId, highlightedFields, i, distance, distanceFromFilter));
          break;
        default:
          results.push(ResultFactory.fromGeneric(data, i));
      }
    }

    return results;
  }

  /**
   * Applies field formatters to Knowledge Manager Entity Profile Data
   *
   * @param {Object} entityProfileData Entity Profile Data
   * @param {Object} formatters Developer specified Field Formatters
   * @param {string} verticalId Identifier for Vertical
   * @param {Object} highlightedEntityProfileData Subset of Entity Profile Data with highlighting applied
   * @returns {Object} Subset of Entity Profile Data Fields with field formatters applied
   */
  static computeFormattedData (entityProfileData, formatters, verticalId, highlightedEntityProfileData) {
    // if no field formatters specified, nothing to format
    if (Object.keys(formatters).length === 0) {
      return {};
    }

    const formattedData = {};

    Object.entries(entityProfileData).forEach(([fieldName, fieldVal]) => {
      // check if a field formatter exists for the current entity profile field
      if (formatters[fieldName] === undefined) {
        return;
      }
      // verify the field formatter provided is a formatter function as expected
      if (typeof formatters[fieldName] !== 'function') {
        throw new AnswersCoreError('Field formatter is not of expected type function', 'ResultFactory');
      }

      // if highlighted version of field value is available, make it available to field formatter
      let highlightedFieldVal = null;
      if (highlightedEntityProfileData && highlightedEntityProfileData[fieldName]) {
        highlightedFieldVal = highlightedEntityProfileData[fieldName];
      }

      // call formatter function associated with the field name
      // the input object defines the interface that field formatter functions work with
      formattedData[fieldName] = formatters[fieldName]({
        entityProfileData: entityProfileData,
        entityFieldValue: fieldVal,
        highlightedEntityFieldValue: highlightedFieldVal,
        verticalId: verticalId,
        isDirectAnswer: false
      });
    });

    return formattedData;
  }

  /**
   * Applies highlighting to substrings within Knowledge Manager Entity Field Values
   * according to highlighting specifiers returned from the Knowledge Manager Search Backend
   *
   * @param {Object} entityProfileData Entity Profile Data
   * @param {Object} highlightedFields KM specified highlighting instructions to highlight certain Fields
   * @returns {Object} Subset of Entity Profile Data Fields with highlighting applied
   */
  static computeHighlightedData (entityProfileData, highlightedFields) {
    // if no highlighted fields specified, nothing to highlight
    if (Object.keys(highlightedFields).length === 0) {
      return {};
    }

    const highlightedData = {};

    // iterate through entity fields that have highlighting instructions
    Object.entries(highlightedFields).forEach(([highlightedFieldName]) => {
      // verify that the highlighted field name corresponds to an existing entity profile field
      if (entityProfileData[highlightedFieldName] === undefined) {
        throw new AnswersCoreError('Highlighted Field Name does not exist in Entity Profile', 'ResultFactory');
      }

      let highlightedField = highlightedFields[highlightedFieldName];

      // check for nested fields
      if (typeof highlightedField === 'object' &&
          Object.keys(highlightedField).length > 0 &&
          highlightedField['matchedSubstrings'] === undefined) {
        // recurse to children fields
        highlightedData[highlightedFieldName] = ResultFactory.computeHighlightedData(
          entityProfileData[highlightedFieldName],
          highlightedFields[highlightedFieldName]);
      } else {
        let highlightedDataValue = new HighlightedValue(entityProfileData).buildHighlightedValue(
          highlightedField.value,
          highlightedField.matchedSubstrings);
        highlightedData[highlightedFieldName] = highlightedDataValue;
      }
    });

    return highlightedData;
  }

  /**
   * Converts an API result object into a generic result view model.
   * @param {Object} data
   * @param {number} index
   * @returns {Result}
   */
  static fromGeneric (data, index) {
    return new Result({
      raw: data,
      title: data.name,
      details: this.truncate(data.description),
      link: data.website,
      id: data.id,
      ordinal: index + 1
    });
  }

  /**
   * Converts an API result object into a Knowledge Manager result view model.
   * @param {Object} data
   * @param {Object} formatters
   * @param {string} verticalId
   * @param {Object} highlightedFields
   * @param {number} index
   * @param {number} distance
   * @param {number} distanceFromFilter
   * @returns {Result}
   */
  static fromKnowledgeManager (
    data, formatters, verticalId, highlightedFields, index, distance, distanceFromFilter) {
    // compute highlighted entity profile data
    let highlightedEntityProfileData = ResultFactory.computeHighlightedData(data, highlightedFields);
    // compute formatted entity profile data
    const formattedEntityProfileData = ResultFactory.computeFormattedData(
      data, formatters, verticalId, highlightedEntityProfileData);

    // set result details checking the following in order of priority : formatted, highlighted, raw
    let resultDetails = null;
    if (formattedEntityProfileData.description !== undefined) {
      resultDetails = formattedEntityProfileData.description;
    } else if (highlightedEntityProfileData.description !== undefined) {
      resultDetails = this.truncate(highlightedEntityProfileData.description);
    } else {
      resultDetails = this.truncate(data.description);
    }

    return new Result({
      raw: data,
      formatted: formattedEntityProfileData,
      highlighted: highlightedEntityProfileData,
      title: formattedEntityProfileData.name || data.name,
      details: resultDetails,
      link: data.website,
      id: data.id,
      ordinal: index + 1,
      distance: distance,
      distanceFromFilter: distanceFromFilter
    });
  }

  /**
   * Converts an API result object into a result view model.
   * Maps view model fields based on the API data for a Google Custom Search Engine object.
   * @param {Object} data
   * @returns {Result}
   */
  static fromGoogleCustomSearchEngine (data) {
    return new Result({
      raw: data,
      title: data.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
      details: data.htmlSnippet,
      link: data.link
    });
  }

  /**
   * Converts an API result object into a result view model.
   * Maps view model fields based on the API data for a Bing Custom Search Engine object.
   * @param {Object} data
   * @returns {Result}
   */
  static fromBingCustomSearchEngine (data) {
    return new Result({
      raw: data,
      title: data.name,
      details: data.snippet,
      link: data.url
    });
  }

  /**
   * Converts an API result object into a result view model.
   * Maps view model fields based on the API data for a Zendesk Search Engine object.
   * @param {Object} data
   * @returns {Result}
   */
  static fromZendeskSearchEngine (data) {
    return new Result({
      raw: data,
      title: data.title,
      details: data.snippet,
      link: data.html_url
    });
  }

  /**
   * Converts an API result object into a result view model.
   * Maps view model fields based on the API data for a Algolia Search Engine object.
   * Details field is set to objectID since response has only one general field objectID.
   * @param {Object} data
   * @returns {Result}
   */
  static fromAlgoliaSearchEngine (data) {
    return new Result({
      raw: data,
      details: data.objectID,
      id: data.objectID
    });
  }

  /**
   * Truncates strings to 250 characters, attempting to preserve whole words
   * @param str {string} the string to truncate
   * @param limit {Number} the maximum character length to return
   * @param trailing {string} a trailing string to denote truncation, e.g. '...'
   * @param sep {string} the word separator
   * @returns {string}
   */
  static truncate (str, limit = 250, trailing = '...', sep = ' ') {
    if (!str || str.length <= limit) {
      return str;
    }

    // TODO (bmcginnis): split punctuation too so we don't end up with "foo,..."
    const words = str.split(sep);
    const max = limit - trailing.length;
    let truncated = '';

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (truncated.length + word.length > max ||
        (i !== 0 && truncated.length + word.length + sep.length > max)) {
        truncated += trailing;
        break;
      }

      truncated += i === 0 ? word : sep + word;
    }

    return truncated;
  }
}
