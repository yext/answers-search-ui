import HighlightedValue from '../models/highlightedvalue';

/**
 * Constructs an SDK highlighted data object model from an array of answers-core HighlighedValue models
 * 
 * @param {HighlighedValue[]} highlightInfoArray
 */
export default function adaptHighlightData(highlightInfoArray){
  if (highlightInfoArray === undefined || highlightInfoArray.length === 0) {
    return {};
  }

  return highlightInfoArray.reduce((highlightedData, highlightInfo) => {
    const highlightedValue = new HighlightedValue()
      .buildHighlightedValue(highlightInfo.value, highlightInfo.matchedSubstrings);
    const topLevelOfPath = highlightInfo.path[0];
    const nestedPath = highlightInfo.path.slice(1);
    const nestedHighlightedValue = nestValue(highlightedValue, nestedPath);
    
    highlightedData[topLevelOfPath] = nestedHighlightedValue;
    
    return highlightedData;
  }, {});
}

function nestValue(value, path) {
  const reducer = (acc, item) => ({ [item]: acc });
  return path.reduceRight(reducer, value);
}