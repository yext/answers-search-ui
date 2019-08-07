/** @module SearchComponent */

import Component from '../component';
import DOM from '../../dom/dom';

/**
 * LocatorComponent creates a Map next to a Results component,
 * used for vertical results pages with map.
 *
 * @extends Component
 */
export default class LocatorComponent extends Component {
  constructor (config = {}) {
    super(config);

    this._resultsConfig = config.resultsConfig || {};
    this._mapConfig = config.mapConfig || {};
    this._filtersConfig = config.filtersConfig || {};
    this._searchBarConfig = config.searchBarConfig || {};
    this._filterSearchConfig = config.filterSearchConfig || {};

    /**
     * Locator param: Determines whether or not to make the filters collapsable
     * @type {boolean}
     */
    this._filterToggle = config.filterToggle || false;

    /**
     * Locator param: Text for the filter toggle button
     * @type {string}
     */
    this._filterToggleText = config.filterToggleText || 'Advanced Filters';

    /**
     * Locator param: The template name to use for rendering with handlebars
     * @type {string}
     */
    this._templateName = 'results/locator';
  }

  static get type () {
    return 'Locator';
  }

  setState(data) {
    return super.setState(Object.assign({
      filterToggle: this._filterToggle,
      filterToggleText: this._filterToggleText
    }, data));
  }

  /**
   * Adds Results and Map lower level components
   */
  onMount () {
    this.initResults();
    this.initMap();

    if (Object.keys(this._filtersConfig).length > 0) {
      this.initFilters();
    }

    if (Object.keys(this._searchBarConfig).length > 0) {
      this.initSearch();
    }

    if (Object.keys(this._filterSearchConfig).length > 0) {
      this.initFilterSearch();
    }

    if (this._filterToggle) {
      const toggleButton = DOM.query('.jx-yxt-locatorFilterToggle');
      toggleButton.addEventListener('click', () => {
        const filtersWrapper = DOM.query('.js-yxt-locatorFiltersWrapper');
        filtersWrapper.classList.toggle('is-collapsed');
        toggleButton.classList.toggle('is-expanded');
      })
    }
  }

  /**
   * A helper method to mount the VerticalResults component
   */
  initResults () {
    this.componentManager.create('VerticalResults', Object.assign({
      parent: this,
      container: '.js-yxt-locatorResults'
    }, this._resultsConfig));
  }

  /**
   * A helper method to mount the Map component
   */
  initMap () {
    this.componentManager.create('Map', Object.assign({
      parent: this,
      container: '.js-yxt-locatorMap'
    }, this._mapConfig));
  }

  /**
   * A helper method to mount the FilterBox component
   */
  initFilters () {
    this.componentManager.create('FilterBox', Object.assign({
      parent: this,
      container: '.js-yxt-locatorFilters'
    }, this._filtersConfig)).mount();
  }

  /**
   * A helper method to mount the FilterBox component
   */
  initSearch () {
    this.componentManager.create('SearchBar', Object.assign({
      parent: this,
      container: '.js-yxt-locatorSearch'
    }, this._searchBarConfig)).mount();
  }

  /**
   * A helper method to mount the FilterBox component
   */
  initFilterSearch () {
    this.componentManager.create('FilterSearch', Object.assign({
      parent: this,
      container: '.js-yxt-locatorFiltersSearch'
    }, this._filterSearchConfig)).mount();
  }
}
