import Result from '../models/result';

export default function adaptResult(result) {
  return new Result({
    raw: result.rawData,
    ordinal: result.index,
    title: result.title,
    details: result.details,
    link: result.link,
    id: result.id,
    distance: result.distance,
    distanceFromFilter: result.distanceFromFilter
  })
}