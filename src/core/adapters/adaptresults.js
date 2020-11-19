import Result from '../models/result';
import ResultFactory from '../models/resultfactory';
import adaptHighlightInfoArray from './adapthighlightinfoarray';

/**
 * Constructs an SDK Result from an answers-core Result
 * 
 * @param {Result} result from answers-core
 * @returns {@link Result}
 */
export default function adaptResult(result) {
  const highlightedData = adaptHighlightInfoArray(result.highlightedValues);
  const details = highlightedData.description || result.description;
  const truncatedDetails = ResultFactory.truncate(details);

  return new Result({
    raw: result.rawData,
    ordinal: result.index,
    title: result.name,
    details: truncatedDetails,
    link: result.link,
    id: result.id,
    distance: result.distance,
    distanceFromFilter: result.distanceFromFilter,
    highlighted: highlightedData
  })
}