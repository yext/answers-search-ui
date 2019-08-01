/** @module SearchComponent */

import Component from '../component';

/**
 * LocatorComponent creates a Map next to a Results component,
 * used for vertical results pages with map.
 *
 * @extends Component
 */
export default class LocatorComponent extends Component {
  constructor (opts = {}) {
    super(opts);
    this._resultsParams = {};
    this._mapParams = {};

    /**
     * Reset LocatorComponent config options assigned via the Component constructor
     * since all options should be passed to the lower level components
     */
    this.transformData = function () {};
    this._render = null;
    this.onMount = function () {
      this.initResults();
      this.initMap();
    };

    /**
     * Locator param: The template name to use for rendering with handlebars
     * @type {string}
     */
    this._templateName = 'results/locator';

    /**
     * Results param: the max amount of results to display
     * @type {int}
     */
    this._resultsParams.limit = opts.limit || 5;

    /**
     * Results param: the max amount of results to display
     * @type {int}
     */
    this._resultsParams.onMount = opts.onMount || null;

    /**
     * Results param: used to transform the internal data
     * models of the components, before it gets applied to the component state
     * @type {function}
     */
    this._resultsParams.transformData = opts.transformData || null;

    /**
     * Map param: An aliased used to determine the type of map provider to use
     * @type {string}
     */
    this._mapParams.mapProvider = opts.mapProvider || null;

    /**
     * Map param: The api key to be used for the map
     * @type {string}
     */
    this._mapParams.apiKey = opts.apiKey || null;

    /**
     * Map param: The custom configuration override to use for the map markers
     * @type {Object|Function}
     */
    this._mapParams.pin = opts.pin || null;
  }

  static get type () {
    return 'Locator';
  }

  /**
   * A helper method to mount the VerticalResults component
   */
  initResults () {
    this.componentManager.create('VerticalResults', Object.assign({
      parent: this,
      container: '.js-yxt-locatorResults'
    }, this._resultsParams));
  }

  /**
   * A helper method to mount the Map component
   */
  initMap () {
    this.componentManager.create('Map', Object.assign({
      parent: this,
      container: '.js-yxt-locatorMap'
    }, this._mapParams));
  }
}
