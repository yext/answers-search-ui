/** @module AppliedFiltersComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';
import Filter from '../../../core/models/filter';

export default class AppliedFiltersComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this.moduleId = StorageKeys.VERTICAL_RESULTS;

    /**
     * If showAppliedFilters is true, show the field name in the string followed by a colon.
     * @type {boolean}
     */
    this._config.showFieldNames = config.showFieldNames || false;

    /**
     * If showAppliedFilters is true, this is list of filters
     * that should not be displayed (common one is entity type)
     * @type {Array<string>}
     */
    this._config.hiddenFields = config.hiddenFields || [];
  }

  static get duplicatesAllowed () {
    return true;
  }

  getAppliedFiltersString (filters = []) {
    const fieldNameToMetadatas = this.calculateFieldNameToMetadatas(filters);
    return this.processFieldNameToMetadatas(fieldNameToMetadatas);
  }

  /**
   * Combines an array of filters into an object of their field names to
   * desired display values.
   * @param {Facet} facet
   * @param {Array<Filter>} filters
   * @return {Object} an object of fieldNameToMetadatas
   */
  calculateFieldNameToMetadatas (facet = {}, filters = [], combined = {}) {
    Object.values(facet).forEach(filters => {
      combined = this.calculateFieldNameToMetadatas({}, filters, combined);
    });
    filters.forEach(filter => {
      const entries = Object.entries(filter);
      if (!(filter instanceof Filter) || entries.length === 0) {
        return '';
      }
      const [apiName, filterValue] = entries[0];
      if (this._config.hiddenFields.includes(apiName)) {
        return;
      }
      const metadata = filterValue.metadata;
      const fieldName = metadata.fieldName;
      if (!combined[fieldName]) {
        combined[fieldName] = [];
      }
      combined[fieldName].push(metadata);
    });
    return combined;
  }

  /**
   * Turns a an object of fieldName to metadata into a human readable string
   * Metadata of the same fieldName are considered $or-ed together, and metadata
   * of diffferent fieldName are considered $and-ed together
   * @param {Object<string, Array<Object>>} fieldNameToMetadatas
   * @param {string} andSeparator
   * @param {string} orSeparator
   * @return {string}
   */
  processFieldNameToMetadatas (fieldNameToMetadatas = {}, andSeparator = ' | ', orSeparator = ', ') {
    let andBuffer = '';
    Object.entries(fieldNameToMetadatas).forEach(([fieldName, metadatas]) => {
      let orBuffer = '';
      Object.values(metadatas).forEach(metadata => {
        orBuffer += (orBuffer !== '') ? orSeparator : '';
        if (metadata.displayValue) {
          orBuffer += metadata.displayValue;
        } else {
          orBuffer += (orBuffer === '' && this._config.showFieldNames) ? `${fieldName}: ` : '';
          orBuffer += metadata.fieldValue;
        }
      });
      andBuffer += (andBuffer !== '') ? andSeparator : '';
      andBuffer += orBuffer;
    });
    return andBuffer;
  }

  /**
   * A sort-by has a type, field, and if the type is 'FIELD' a direction
   * @param {Array<Object>} sortBys
   */
  getSortBysString (sortBys = []) {
    if (!sortBys) {
      return '';
    }
    let buffer = '';
    sortBys.forEach(sort => {
      buffer += (buffer !== '') + ', ';
      buffer += sort.label;
    });
    if (buffer !== '') {
      return 'Sorted by: ' + buffer;
    }
  }

  setState (data) {
    const sortBys = this.core.globalStorage.getState(StorageKeys.SORT_BYS);
    const sortBysString = this.getSortBysString(sortBys);
    const facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
    const filters = this.core.globalStorage.getAll(StorageKeys.FILTER);
    const appliedFiltersString = this.getAppliedFiltersString(facetFilter, filters);
    const offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET);
    const limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
    return super.setState({
      ...data,
      appliedFiltersString,
      sortBysString,
      pageStart: offset + 1,
      pageEnd: Math.min(data.resultsCount, offset + limit)
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
