import FilterBoxComponentBlock from './filterboxcomponent';

/**
 * This class models user interactions with the {@link FacetsComponent}.
 */
export default class FacetsComponentBlock {
  constructor () {
    this._filterBox = new FilterBoxComponentBlock('.js-yxt-Facets');
  }

  /**
   * Return the child filter box component's block.
   */
  async getFilterBox () {
    return this._filterBox;
  }

  /**
   * Toggle the given option for the given filter.
   */
  async toggleOption (filterIndex, optionIndex) {
    return this._filterBox.toggleOption(filterIndex, optionIndex);
  }

  /**
   * Applies the filters in the child filter box.
   */
  async applyFilters () {
    return this._filterBox.applyFilters();
  }

  /**
   * Get the number of results associated with a particular option.
   * This value is enclosed within parenthesis at the end of an option's
   * label.
   * @param {number} index
   */
  async getOptionCount (filterIndex, optionIndex) {
    return this._filterBox.getOptionCount(filterIndex, optionIndex);
  }

  /**
   * Reset the child filter box.
   */
  async reset () {
    return this._filterBox.reset();
  }
}
