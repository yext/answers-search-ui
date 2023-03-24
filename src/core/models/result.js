/** @module Result */

import AppliedHighlightedFields from './appliedhighlightedfields';
import HighlightedFields from './highlightedfields';
import { truncate } from '../utils/strings';
import { AnswersCoreError } from '../errors/errors';

export default class Result {
  constructor (data = {}) {
    /**
     * The raw profile data
     * @type {Object}
     * @private
     */
    this._raw = data.raw || null;

    /**
     * The formatted profile data
     * @type {Object}
     * @private
     */
    this._formatted = data.formatted;

    /**
     * The highlighted profile data with highlights applied to applicable fields
     * @type {Object}
     * @private
     */
    this._highlighted = data.highlighted;

    /**
     * An object that lists the substrings to highlight for each applicable field.
     * @type {Object}
     */
    this.highlightedFields = data.highlightedFields;

    /**
     * The index number of the result
     * @type {Number}
     */
    this.ordinal = data.ordinal || null;

    /**
     * The title of the result card
     * @type {string|null}
     */
    this.title = data.title || null;

    /**
     * The body of the details section of the result card, can contain HTML
     * @type {string| null}
     */
    this.details = data.details || null;

    /**
     * The destination link for the title of the result card
     * @type {string|null}
     */
    this.link = data.link || null;

    /**
     * The Entity ID, or other unique identifier, used for to power interactivity
     * @type {string|null}
     */
    this.id = data.id || null;

    /**
     * The subtitle on the result card
     * @type {string|null}
     */
    this.subtitle = data.subtitle || null;

    /**
     * The class modifier, usually derived from the vertical configuration ID
     * Used to apply different styling to different result card types
     * @type {string|null}
     */
    this.modifier = data.modifier || null;

    /**
     * A large date, of the format { month: 'Jan', day: '01' }
     * @type {Object|null}
     */
    this.bigDate = data.bigDate || null;

    /**
     * An image profile object, expected to have a url property
     * @type {Object|null}
     */
    this.image = data.image || null;

    /**
     * An array of calls to action, of the format:
     * { icon: '', url: '', text: '', eventType: '', eventOptions: {}}
     * @type {Array}
     */
    this.callsToAction = data.callsToAction || [];

    /**
     * Determines if an accordian result should be collapsed by default
     * @type {boolean}
     */
    this.collapsed = data.collapsed === undefined ? true : data.collapsed;

    /**
     * @type {number}
     */
    this.distance = data.distance || null;

    /**
     * @type {number}
     */
    this.distanceFromFilter = data.distanceFromFilter || null;
  }

  /**
   * Constructs an SDK Result from an search-core Result
   *
   * @param {Result} result from search-core
   * @param {Object<string, function>} formatters applied to the result fields
   * @param {string} verticalKey the verticalKey associated with the result
   * @returns {@link Result}
   */
  static fromCore (result, formatters, verticalKey) {
    const highlightedFields = new HighlightedFields(result.highlightedFields);
    const appliedHighlightedFields = AppliedHighlightedFields.fromCore(result.highlightedFields);
    const details = appliedHighlightedFields.description || result.description;
    const truncatedDetails = truncate(details);

    const resultData = {
      raw: result.rawData,
      ordinal: result.index,
      title: result.name,
      details: truncatedDetails,
      link: result.link,
      id: result.id,
      distance: result.distance,
      distanceFromFilter: result.distanceFromFilter,
      highlighted: appliedHighlightedFields,
      highlightedFields
    };

    if (result.source !== 'KNOWLEDGE_MANAGER') {
      return new Result(resultData);
    }

    const formattedData = this._getFormattedData(resultData, formatters, verticalKey);
    resultData.formatted = formattedData;

    if (formattedData.description !== undefined) {
      resultData.details = formattedData.description;
    }

    return new Result(resultData);
  }

  /**
   * Returns an object which contains formatted fields
   *
   * @param {Object} resultData the same shape as the input to the Result constructor
   * @param {Object<string, function>} formatters to apply to the result fields
   * @param {string} verticalKey the verticalKey associated with the result
   * @returns {Object<string, string>} keys are field names and values are the formatted data
   */
  static _getFormattedData (resultData, formatters, verticalKey) {
    const formattedData = {};

    if (!formatters || !resultData.raw) {
      return formattedData;
    }

    if (Object.keys(formatters).length === 0) {
      return formattedData;
    }

    Object.entries(resultData.raw).forEach(([fieldName, fieldVal]) => {
      // check if a field formatter exists for the current entity profile field
      if (formatters[fieldName] === undefined) {
        return;
      }
      // verify the field formatter provided is a formatter function as expected
      if (typeof formatters[fieldName] !== 'function') {
        throw new AnswersCoreError('Field formatter is not of expected type function', 'Result');
      }

      // if highlighted version of field value is available, make it available to field formatter
      let highlightedFieldVal = null;
      if (resultData.highlighted && resultData.highlighted[fieldName]) {
        highlightedFieldVal = resultData.highlighted[fieldName];
      }

      // call formatter function associated with the field name
      // the input object defines the interface that field formatter functions work with
      formattedData[fieldName] = formatters[fieldName]({
        entityProfileData: resultData.raw,
        entityFieldValue: fieldVal,
        highlightedEntityFieldValue: highlightedFieldVal,
        verticalId: verticalKey,
        isDirectAnswer: false
      });
    });

    return formattedData;
  }
}
