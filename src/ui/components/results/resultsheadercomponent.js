/** @module AppliedFiltersComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';
import { groupArray } from '../../../core/utils/arrayutils';
import { createRemovedFilterEvent, optionTypeFromFilterType } from '../../../core/utils/eventutils';

const DEFAULT_CONFIG = {
  showResultCount: true,
  showAppliedFilters: true,
  showFieldNames: false,
  resultsCountSeparator: '|',
  verticalURL: undefined,
  showChangeFilters: false,
  removable: false,
  delimiter: '|',
  isUniversal: false
};

export default class ResultsHeaderComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super({ ...DEFAULT_CONFIG, ...config }, systemConfig);

    const data = config.data || {};

    /**
     * Total number of results.
     * @type {number}
     */
    this.resultsCount = data.resultsCount || 0;

    /**
     * Number of results displayed on the page.
     * @type {number}
     */
    this.resultsLength = data.resultsLength || 0;

    /**
     * Array of applied filterNodes. These are allowed to be removable, but
     * if config.removable is set as false these will not render as removable.
     * @type {Array<FilterNode>}
     */
    this.appliedFilterNodes = data.appliedFilterNodes || [];

    /**
     * Array of nlp filterNodes to display.
     * These will not render as removable even if config.removable is true.
     * @type {Array<FilterNode>}
     */
    this.nlpFilterNodes = data.nlpFilterNodes || [];
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  onMount () {
    const removableFilterTags =
      DOM.queryAll(this._container, '.js-yxt-ResultsHeader-removableFilterTag');
    removableFilterTags.forEach(tag => {
      DOM.on(tag, 'click', () => this._removeFilterTag(tag));
    });
  }

  /**
   * Call remove callback for the {@link FilterNode} corresponding to a specific
   * removable filter tag.
   * @param {HTMLElement} tag
   */
  _removeFilterTag (tag) {
    const { filterId } = tag.dataset;
    const filterNode = this.appliedFilterNodes[filterId];
    filterNode.remove();
    const analyticsEvent = createRemovedFilterEvent(
      JSON.stringify(filterNode.getFilter()),
      optionTypeFromFilterType(filterNode.getMetadata().filterType),
      'VerticalResults',
      this._config.verticalKey
    );
    this.analyticsReporter.report(analyticsEvent);
    this.core.verticalSearch(this._config.verticalKey, {
      resetPagination: true,
      useFacets: true
    });
  }

  /**
   * Combine all of the applied filters into a format the handlebars
   * template can work with.
   * Keys are the fieldName of the filter. Values are an array of objects with a
   * displayValue and dataFilterId.
   * TODO (SPR-2350): give every node a unique id, and use that instead of index for
   * dataFilterId.
   * @returns {Array<Object>}
   */
  _groupAppliedFilters () {
    const keyFunc = filterNode => filterNode.getMetadata().fieldName;
    const irremovableValueFunc = filterNode => ({
      displayValue: filterNode.getMetadata().displayValue
    });
    const irremovableGrouped = groupArray(this.nlpFilterNodes, keyFunc, irremovableValueFunc);
    const removableValueFunc = (filterNode, index) => ({
      displayValue: filterNode.getMetadata().displayValue,
      dataFilterId: index,
      removable: this._config.removable
    });
    return groupArray(this.appliedFilterNodes, keyFunc, removableValueFunc, irremovableGrouped);
  }

  /**
   * Our handlebars can only loop through arrays, not objects, so we need to reformat
   * the grouped applied filters.
   * @param {Object} groupedFilters
   * @returns {Array<Object>}
   */
  _convertGroupedFiltersToArray (groupedFilters) {
    return Object.keys(groupedFilters).map(label => ({
      label: label,
      filterDataArray: groupedFilters[label]
    }));
  }

  setState (data) {
    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET);
    const groupedAppliedFilters = this._groupAppliedFilters();
    const appliedFiltersArray = this._convertGroupedFiltersToArray(groupedAppliedFilters);
    const shouldShowFilters = appliedFiltersArray.length > 0 && this._config.showAppliedFilters;
    return super.setState({
      ...data,
      resultsCount: this.resultsCount,
      resultsCountStart: offset + 1,
      resultsCountEnd: offset + this.resultsLength,
      showResultSeparator: this._config.resultsCountSeparator && this._config.showResultCount && shouldShowFilters,
      shouldShowFilters: shouldShowFilters,
      appliedFiltersArray: appliedFiltersArray
    });
  }

  static get type () {
    return 'ResultsHeader';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/resultsheader';
  }
}
