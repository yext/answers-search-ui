/**
 * FilterView is an interface for storing and handling filter data and metadata.
 *
 * @interface
 */
export default class FilterView {
  /**
   * Returns the filter data, formatted to send in a query.
   * @returns {Filter} Filter to send in query.
   */
  getFilter () {}

  /**
   * Returns a list of all of the {@link BasicFilterView} in this FilterView.
   * @returns {List<FilterView>} The backend response
   */
  getBasicFilterViews () {}
}
