import UniversalResults from '../models/universalresults';
import adaptSections from './adaptsections'

/**
 * Constructs an SDK UniversalResults model from an answers-core UniversalSearchResponse
 * 
 * @param {UniversalSearchResponse} response
 */
export default function adaptUniversalResults(response, urls, formatters) {
  return new UniversalResults({
    queryId: response.queryId,
    sections: adaptSections(response.verticalResults, urls, formatters)
  })
}