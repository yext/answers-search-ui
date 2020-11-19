import Result from '../models/result';
import ResultFactory from '../models/resultfactory';
import adaptHighlightData from './adapthighlightdata';

/**
 * Constructs an SDK Result from an answers-core Result
 * 
 * @param {Result} result 
 */
export default function adaptResult(result) {
  const highlightedData = adaptHighlightData(result.highlightedValues);
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