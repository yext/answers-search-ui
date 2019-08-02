/** @module SearchComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

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

    /**
     * Locator param: The template name to use for rendering with handlebars
     * @type {string}
     */
    this._templateName = 'results/locator';
  }

  static get type () {
    return 'Locator';
  }

  /**
   * Adds Results and Map lower level components
   */
  onMount () {
    this.initResults();
    this.initMap();
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
}
