import HighlightedValue from '../models/highlightedvalue';

/**
 * Constructs an highlighted data object with highlighting applied from an array of
 * answers-core HighlightInfo models
 * 
 * @param {HighlightInfo[]} highlightInfoArray from answers-core
 * @returns {Object<string, string|object>} The object is keyed by fieldName, and it may consist of nested fields
 * 
 * Example return object: 
 * 
 * {
 *   name: '<strong>Yext</strong>',
 *   description: {
 *     featured: '<strong>Yext</strong> is the offical answers company'
 *   }
 * }
 */
export default function adaptHighlightInfoArray(highlightInfoArray){
  if (highlightInfoArray === undefined || highlightInfoArray.length === 0) {
    return {};
  }

  return highlightInfoArray.reduce((highlightedData, highlightInfo) => {
    const highlightedValue = new HighlightedValue()
      .buildHighlightedValue(highlightInfo.value, highlightInfo.matchedSubstrings);
    const fieldIsNested = (highlightInfo.path.length > 1);

    if (fieldIsNested) {
      const topLevelOfPath = highlightInfo.path[0];
      const nestedPath = highlightInfo.path.slice(1);
      const nestedHighlightedValue = nestValue(highlightedValue, nestedPath);
      
      highlightedData[topLevelOfPath] = nestedHighlightedValue;
    } else {
      highlightedData[highlightInfo.fieldName] = highlightedValue;
    }
    
    return highlightedData;
  }, {});
}

/**
 * Nest a value inside an object whose structure is defined by an array of keys
 * 
 * Example: if `value` is 'Hello, world!', and `keys` is ['a', 'b'],
 * the function will return the object:
 * 
 * {
 *   a: {
 *     b: 'Hello, world!'
 *   }
 * }
 * 
 * @param {*} value 
 * @param {string[]} keys
 */
function nestValue(value, keys) {
  return keys.reduceRight((acc, key) => {
    return { [key]: acc };
  }, value);
}