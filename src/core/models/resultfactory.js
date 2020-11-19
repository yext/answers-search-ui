/** @module ResultFactory */

import { AnswersCoreError } from '../errors/errors';

export default class ResultFactory {
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
}
