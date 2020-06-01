/** @module AppliedFiltersComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';
import { groupArray } from '../../../core/utils/arrayutils';
import AnalyticsEvent from '../../../core/analytics/analyticsevent';

const DEFAULT_CONFIG = {
  showResultCount: true,
  showAppliedFilters: true,
  showFieldNames: false,
  resultsCountSeparator: '|',
  verticalURL: undefined,
  showChangeFilters: false,
  removable: false,
  delimiter: '|',
  isUniversal: false,
  verticalKey: undefined
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
     * Array of potentially removable filterNodes to display.
     * If config.removable is set as false these will not render as removable.
     * @type {Array<FilterNode>}
     */
    this.removableFilterNodes = data.removableFilterNodes || [];

    /**
     * Array of irremovable filterNodes to display.
     * These will not render as removable even if config.removable is true.
     * @type {Array<FilterNode>}
     */
    this.irremovableFilterNodes = data.irremovableFilterNodes || [];
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  onMount () {
    const removableFilterTags = DOM.queryAll(this._container, '.js-yxt-ResultsHeader-removableFilterTag');
    removableFilterTags.forEach(tag => {
      DOM.on(tag, 'click', () => this._removeFilterTag(tag));
    });
  }

  _removeFilterTag (tag) {
    const { filterId } = tag.dataset;
    const simpleFilterNode = this.removableFilterNodes[filterId];
    simpleFilterNode.remove();
    const analyticsEvent = new AnalyticsEvent('REMOVED_FILTER');
    analyticsEvent.addOptions({
      verticalKey: this._config.verticalKey,
      removedFromComponent: simpleFilterNode.getMetadata().originComponent,
      filterField: simpleFilterNode.getFilter().getFilterKey(),
      removedFilter: JSON.stringify(simpleFilterNode.getFilter())
    });
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
    const irremovableValueFunc = (filterNode, index) => ({
      displayValue: filterNode.getMetadata().displayValue,
      dataFilterId: index,
      removable: false
    });
    const irremovableGrouped = groupArray(this.irremovableFilterNodes, keyFunc, irremovableValueFunc);
    const removableValueFunc = (filterNode, index) => ({
      displayValue: filterNode.getMetadata().displayValue,
      dataFilterId: index,
      removable: true
    });
    return groupArray(this.removableFilterNodes, keyFunc, removableValueFunc, irremovableGrouped);
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
