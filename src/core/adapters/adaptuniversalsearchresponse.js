import UniversalResults from '../models/universalresults';
import adaptVerticalResults from './adaptverticalresults';

/**
 * Constructs an SDK UniversalResults model from an answers-core UniversalSearchResponse
 *
 * @param {UniversalSearchResponse} response from answers-core
 * @param {Object<string, string>} urls keyed by vertical key
 * @returns {@link UniversalResults}
 */
export default function adaptUniversalSearchResponse (response, urls) {
  return new UniversalResults({
    queryId: response.queryId,
    sections: adaptVerticalResults(response.verticalResults, urls)
  });
}
