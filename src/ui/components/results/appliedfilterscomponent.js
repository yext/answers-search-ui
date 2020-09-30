/** @module AppliedFiltersComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import DOM from '../../dom/dom';
import { groupArray } from '../../../core/utils/arrayutils';
import {
  convertNlpFiltersToFilterNodes,
  flattenFilterNodes,
  pruneFilterNodes
} from '../../../core/utils/filternodeutils';

const DEFAULT_CONFIG = {
  showFieldNames: false,
  showChangeFilters: false,
  removable: false,
  delimiter: '|',
  labelText: 'Filters applied to this search:',
  removableLabelText: 'Remove this filter',
  hiddenFields: ['builtin.entityType']
};

export default class AppliedFiltersComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super({ ...DEFAULT_CONFIG, ...config }, systemConfig);

    this._verticalKey = this._config.verticalKey ||
      this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey;

    this.moduleId = StorageKeys.FACETS_LOADED;

    this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, results => {
      if (results.searchState === SearchStates.SEARCH_COMPLETE) {
        this.setState();
      }
    });
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  onMount () {
    const removableFilterTags =
      DOM.queryAll(this._container, '.js-yxt-AppliedFilters-removableFilterTag');
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
    this.core.verticalSearch(this._verticalKey, {
      setQueryParams: true,
      resetPagination: true,
      useFacets: true
    });
  }

  /**
   * Returns the currently applied nlp filter nodes, with nlp filter nodes that
   * are duplicates of other filter nodes removed or filter on hiddenFields removed.
   * @returns {Array<FilterNode>}
   */
  _getPrunedNlpFilterNodes () {
    const duplicatesRemoved = this.nlpFilterNodes.filter(nlpNode => {
      const isDuplicate = this.appliedFilterNodes.find(appliedNode =>
        appliedNode.hasSameFilterAs(nlpNode)
      );
      return !isDuplicate;
    });
    return pruneFilterNodes(duplicatesRemoved, this._config.hiddenFields);
  }

  /**
   * Combine all of the applied filters into a format the handlebars
   * template can work with.
   * Keys are the fieldName of the filter. Values are an array of objects with a
   * displayValue and dataFilterId.
   * @returns {Array<Object>}
   */
  _groupAppliedFilters () {
    const getFieldName = filterNode => filterNode.getMetadata().fieldName;
    const parseNlpFilterDisplay = filterNode => ({
      displayValue: filterNode.getMetadata().displayValue
    });
    const parseRemovableFilterDisplay = (filterNode, index) => ({
      displayValue: filterNode.getMetadata().displayValue,
      dataFilterId: index,
      removable: this._config.removable
    });
    const removableNodes = groupArray(this.appliedFilterNodes, getFieldName, parseRemovableFilterDisplay);
    const prunedNlpFilterNodes = this._getPrunedNlpFilterNodes();
    return groupArray(prunedNlpFilterNodes, getFieldName, parseNlpFilterDisplay, removableNodes);
  }

  /**
   * Returns an array of object the handlebars can understand and render
   * the applied filters bar from. Our handlebars can only loop through arrays,
   * not objects, so we need to reformat the grouped applied filters.
   * @returns {Array<Object>}
   */
  _createAppliedFiltersArray () {
    const groupedFilters = this._groupAppliedFilters();
    return Object.keys(groupedFilters).map(label => ({
      label: label,
      filterDataArray: groupedFilters[label]
    }));
  }

  /**
   * Pulls applied filter nodes from {@link FilterRegistry}, then retrives an array of
   * the leaf nodes, and then removes hidden or empty {@link FilterNode}s. Then appends
   * the currently applied nlp filters.
   */
  _calculateAppliedFilterNodes () {
    const filterNodes = this.core.filterRegistry.getAllFilterNodes();
    const simpleFilterNodes = flattenFilterNodes(filterNodes);
    return pruneFilterNodes(simpleFilterNodes, this._config.hiddenFields);
  }

  setState (data) {
    const verticalResults = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};

    /**
     * Array of nlp filters in the search response.
     * @type {Array<AppliedQueryFilter>}
     */
    const nlpFilters = verticalResults.appliedQueryFilters || [];

    this.nlpFilterNodes = convertNlpFiltersToFilterNodes(nlpFilters);

    this.appliedFilterNodes = this._calculateAppliedFilterNodes();
    const appliedFiltersArray = this._createAppliedFiltersArray();

    return super.setState({
      ...data,
      appliedFiltersArray: appliedFiltersArray
    });
  }

  static get type () {
    return 'AppliedFilters';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/appliedfilters';
  }
}
