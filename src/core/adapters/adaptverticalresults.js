import Section from "../models/section"
import adaptAppliedQueryFilter from "./adaptappliedqueryfilter";
import adaptResult from './adaptresults'

/**
 * Constructs an SDK Section model from an answers-core VerticalResult array
 * 
 * @param {VerticalResults[]} verticalResults
 * @param {Object<string, string>} urls keyed by vertical key
 * @returns {@link Section}
 */
export default function adaptVerticalResults(verticalResults, urls) {
  return verticalResults.map(verticalResults => {
    return new Section({
      verticalConfigId: verticalResults.verticalKey,
      resultsCount: verticalResults.resultsCount,
      appliedQueryFilters: verticalResults.appliedQueryFilters.map(adaptAppliedQueryFilter),
      results: verticalResults.results.map(adaptResult),
      url: urls[verticalResults.verticalKey]
    });
  })
}