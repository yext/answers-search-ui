import Section from "../models/section"
import adaptAppliedFilter from "./adaptqueryfilter";
import adaptResult from './adaptresults'

/**
 * Constructs an SDK Sections model from an answers-core VerticalResults model
 * 
 * @param {VerticalResults} verticalResults
 */
export default function adaptSections(results, urls, formatters) {
  return results.map(verticalResults => {
    return new Section({
      verticalConfigId: verticalResults.verticalKey,
      resultsCount: verticalResults.resultsCount,
      appliedQueryFilters: verticalResults.appliedQueryFilters.map(adaptAppliedFilter),
      results: verticalResults.results.map(adaptResult),
      url: urls[verticalResults.verticalKey]
    });
  })
}