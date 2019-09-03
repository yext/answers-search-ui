/** @module GeoLocationComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import Filter from '../../../core/models/filter';
import SearchParams from '../../dom/searchparams';

const METERS_PER_MILE = 1609.344;

const DEFAULT_CONFIG = {
  /**
   * The radius, in miles, around the user's location to find results.
   * If location accuracy is low, a larger radius may be used automatically
   * @type {number}
   */
  radius: 50,

  /**
   * The vertical key to use
   * @type {string}
   */
  verticalKey: null,

  /**
   * The title to display
   * @type {string}
   */
  title: 'Location',

  /**
   * The label to display
   * @type {string}
   */
  label: 'Location',

  /**
   * The icon url to show in the geo button
   * @type {string}
   */
  geoButtonIcon: '',

  /**
   * The text to show in the geo button
   * @type {string}
   */
  geoButtonText: 'Use My Location',

  /**
   * The CSS selector of the toggle button
   * @type {string}
   */
  buttonSelector: '.js-yxt-GeoLocationFilter-button',

  /**
   * The CSS selector of the query input
   * @type {string}
   */
  inputSelector: '.js-yxt-GeoLocationFilter-input'
};

/**
 * Renders a button that when clicked adds a static filter representing the user's location
 * @extends Component
 */
export default class GeoLocationComponent extends Component {
  constructor (config = {}) {
    super({ ...DEFAULT_CONFIG, ...config });

    /**
     * The query string to use for the input box, provided to template for rendering.
     * Optionally provided
     * @type {string}
     */
    this.query = this.getUrlParams().get(`${this.name}.query`) || '';

    /**
     * The filter string to use for the provided query
     * Optionally provided
     * @type {string}
     */
    this.filter = this.getUrlParams().get(`${this.name}.filter`) || '';

    if (this.query && this.query.length > 0 && this.filter && this.filter.length > 0) {
      window.history.pushState({}, '', '?' + this.getUrlParams().toString());
      this._saveFilterToStorage(Filter.fromResponse(this.filter));
    }
  }

  static get type () {
    return 'GeoLocationFilter';
  }

  static defaultTemplateName () {
    return 'controls/geolocation';
  }

  setState (data) {
    super.setState({
      ...data,
      title: this._config.title,
      geoEnabled: this._enabled,
      query: this.query,
      labelText: this._config.label,
      geoButtonIcon: this._config.geoButtonIcon,
      geoButtonText: this._config.geoButtonText
    });
  }

  onMount () {
    if (this._autocomplete) {
      this._autocomplete.remove();
    }

    this._initAutoComplete(this._config.inputSelector);
    DOM.on(this._config.buttonSelector, 'click', () => this._toggleGeoFilter());
  }

  /**
   * A helper method to wire up our auto complete on an input selector
   * @param {string} inputSelector CSS selector to bind our auto complete component to
   * @private
   */
  _initAutoComplete (inputSelector) {
    this._autocomplete = this.componentManager.create('AutoComplete', {
      parent: this,
      name: `${this.name}.autocomplete`,
      isFilterSearch: true,
      container: '.js-yxt-GeoLocationFilter-autocomplete',
      originalQuery: this.query,
      originalFilter: this.filter,
      inputEl: inputSelector,
      verticalKey: this._verticalKey,
      onSubmit: (query, filter) => {
        const params = this.getUrlParams();
        params.set(`${this.name}.query`, query);
        params.set(`${this.name}.filter`, filter);
        window.history.pushState({}, '', '?' + params.toString());

        this.query = query;
        this._saveFilterToStorage(Filter.fromResponse(filter));
        this._enabled = false;
      }
    });
  }

  /**
   * Toggles the static filter representing the user's location
   * @private
   */
  _toggleGeoFilter () {
    if (!navigator.geolocation) {
      this.setState({ geoError: true });
      return;
    }

    if (!this._enabled) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this._saveFilterToStorage(this._buildFilter(position));
          this._enabled = true;
          this.setState({});
          const params = this.getUrlParams();
          params.delete(`${this.name}.query`);
          params.delete(`${this.name}.filter`);
          window.history.pushState({}, '', '?' + params.toString());
        },
        () => this.setState({ geoError: true })
      );
    }
  }

  /**
   * Get the current params from a url
   * @param {string} url The optional url to pull params from
   */
  getUrlParams (url) {
    url = url || window.location.search.substring(1);
    return new SearchParams(url);
  }

  /**
   * Saves the provided filter under this component's name
   * @param {Filter} filter The filter to save
   * @private
   */
  _saveFilterToStorage (filter) {
    this.core.setFilter(this.name, filter);
  }

  /**
   * Given a position, construct a Filter object
   * @param {Postition} position The position
   * @returns {Filter}
   * @private
   */
  _buildFilter (position) {
    const { latitude, longitude, accuracy } = position.coords;
    const radius = Math.max(accuracy, this._config.radius * METERS_PER_MILE);
    return Filter.position(latitude, longitude, radius);
  }
}
