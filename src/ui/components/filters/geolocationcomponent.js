/** @module GeoLocationComponent */

import Component from '../component';
import DOM from '../../dom/dom';
import Filter from '../../../core/models/filter';
import StorageKeys from '../../../core/storage/storagekeys';
import buildSearchParameters from '../../tools/searchparamsparser';
import FilterNodeFactory from '../../../core/filters/filternodefactory';
import ComponentTypes from '../../components/componenttypes';
import TranslationFlagger from '../../i18n/translationflagger';

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
   * If true, submits a search when the value is changed
   * @type {boolean}
   */
  searchOnChange: false,

  /**
   * The title to display
   * @type {string}
   */
  title: TranslationFlagger.flag({
    phrase: 'Location'
  }),

  /**
   * The label to display
   * @type {string}
   */
  label: TranslationFlagger.flag({
    phrase: 'Location'
  }),

  /**
   * The icon url to show in the geo button
   * @type {string}
   */
  geoButtonIcon: '',

  /**
   * The alt text to include with the geo button icon
   * @type {string}
   */
  geoButtonIconAltText: TranslationFlagger.flag({
    phrase: 'Use My Location'
  }),

  /**
   * The text to show in the geo button
   * @type {string}
   */
  geoButtonText: TranslationFlagger.flag({
    phrase: 'Use My Location'
  }),

  /**
   * The text to show when geolocation is enabled
   * @type {string}
   */
  enabledText: TranslationFlagger.flag({
    phrase: 'Current Location',
    context: 'Labels the user\'s current location'
  }),

  /**
   * The text to show when loading the user's location
   * @type {string}
   */
  loadingText: TranslationFlagger.flag({
    phrase: 'Finding Your Location...'
  }),

  /**
   * The text to show if the user's location cannot be found
   * @type {string}
   */
  errorText: TranslationFlagger.flag({
    phrase: 'Could Not Find Your Location'
  }),

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
  constructor (config = {}, systemConfig = {}) {
    super({ ...DEFAULT_CONFIG, ...config }, systemConfig);

    /**
     * The query string to use for the input box, provided to template for rendering.
     * @type {string}
     */
    this.query = this.core.globalStorage.getState(`${StorageKeys.QUERY}.${this.name}`) || '';
    this.core.globalStorage.on('update', `${StorageKeys.QUERY}.${this.name}`, q => {
      this.query = q;
      this.setState();
    });

    this.searchParameters = buildSearchParameters(config.searchParameters);

    /**
     * Options to pass to the geolocation api.
     * @type {Object}
     */
    this._geolocationOptions = {
      enableHighAccuracy: false,
      timeout: 6000,
      maximumAge: 300000,
      ...config.geolocationOptions
    };

    /**
     * Options for the geolocation timeout alert.
     * @type {Object}
     */
    this._geolocationTimeoutAlert = {
      enabled: false,
      message: TranslationFlagger.flag({
        phrase: 'We are unable to determine your location'
      }),
      ...config.geolocationTimeoutAlert
    };
  }

  static get type () {
    return ComponentTypes.GEOLOCATION_FILTER;
  }

  static defaultTemplateName () {
    return 'controls/geolocation';
  }

  setState (data = {}) {
    let placeholder = '';
    if (this._enabled) {
      placeholder = this._config.enabledText;
    }
    if (data.geoLoading) {
      placeholder = this._config.loadingText;
    }
    if (data.geoError) {
      placeholder = this._config.errorText;
    }
    super.setState({
      ...data,
      title: this._config.title,
      geoEnabled: this._enabled,
      query: this.query,
      labelText: this._config.label,
      enabledText: this._config.enabledText,
      loadingText: this._config.loadingText,
      errorText: this._config.errorText,
      geoButtonIcon: this._config.geoButtonIcon,
      geoValue: this._enabled || data.geoLoading || data.geoError ? '' : this.query,
      geoPlaceholder: placeholder,
      geoButtonText: this._config.geoButtonText
    });
  }

  onMount () {
    if (this._autocomplete) {
      this._autocomplete.remove();
    }

    this._initAutoComplete(this._config.inputSelector);
    DOM.on(
      DOM.query(this._container, this._config.buttonSelector),
      'click',
      () => this._toggleGeoFilter()
    );
  }

  /**
   * A helper method to wire up our auto complete on an input selector
   * @param {string} inputSelector CSS selector to bind our auto complete component to
   * @private
   */
  _initAutoComplete (inputSelector) {
    if (this._autocomplete) {
      this._autocomplete.remove();
    }

    this._autocomplete = this.componentManager.create('AutoComplete', {
      parentContainer: this._container,
      name: `${this.name}.autocomplete`,
      isFilterSearch: true,
      container: '.js-yxt-GeoLocationFilter-autocomplete',
      originalQuery: this.query,
      inputEl: inputSelector,
      verticalKey: this._config.verticalKey,
      searchParameters: this.searchParameters,
      onSubmit: (query, filter) => this._handleSubmit(query, filter)
    });
  }

  _handleSubmit (query, filter) {
    this.query = query;
    this._saveDataToStorage(query, Filter.fromResponse(filter), `${query}`);
    this._enabled = false;
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
      this.setState({ geoLoading: true });
      navigator.geolocation.getCurrentPosition(
        position => {
          const filter = this._buildFilter(position);
          this._saveDataToStorage('', filter, 'Current Location', position);
          this._enabled = true;
          this.setState({});
          this.core.persistentStorage.delete(`${StorageKeys.QUERY}.${this.name}`);
          this.core.persistentStorage.delete(`${StorageKeys.FILTER}.${this.name}`);
        },
        () => this._handleGeolocationError(),
        this._geolocationOptions
      );
    }
  }

  _handleGeolocationError () {
    this.setState({ geoError: true });
    const { enabled, message } = this._geolocationTimeoutAlert;
    if (enabled) {
      window.alert(message);
    }
  }

  _removeFilterNode () {
    this.core.persistentStorage.delete(`${StorageKeys.QUERY}.${this.name}`);
    this.core.persistentStorage.delete(`${StorageKeys.FILTER}.${this.name}`);
    this._enabled = false;
    this.query = '';
    this.core.clearStaticFilterNode(this.name);
    this.setState();
  }

  _buildFilterNode (filter, displayValue) {
    return FilterNodeFactory.from({
      filter: filter,
      metadata: {
        displayValue: displayValue,
        fieldName: this._config.title || this._config.label || TranslationFlagger.flag({
          phrase: 'Location'
        })
      },
      remove: () => this._removeFilterNode()
    });
  }

  /**
   * Saves the provided filter under this component's name
   * @param {string} query The query to save
   * @param {Filter} filter The filter to save
   * @param {string} displayValue The display value for the filter
   * @param {Object} position The position to save
   * @private
   */
  _saveDataToStorage (query, filter, displayValue, position) {
    this.core.persistentStorage.set(`${StorageKeys.QUERY}.${this.name}`, query);
    this.core.persistentStorage.set(`${StorageKeys.FILTER}.${this.name}`, filter);
    const filterNode = this._buildFilterNode(filter, displayValue);
    this.core.setStaticFilterNodes(this.name, filterNode);

    if (position) {
      this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        radius: position.coords.accuracy
      });
    }

    if (this._config.searchOnChange) {
      this.core.verticalSearch(this._config.verticalKey, {
        setQueryParams: true,
        resetPagination: true,
        useFacets: true
      });
    }
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
