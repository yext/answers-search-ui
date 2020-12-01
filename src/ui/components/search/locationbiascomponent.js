import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';
import TranslationFlagger from '../../i18n/translationflagger';

const DEFAULT_CONFIG = {
  ipAccuracyHelpText: TranslationFlagger.flag({
    phrase: 'based on your internet address',
    context: 'Describes the accuracy of estimated location. Example: Salt Lake City, Utah based on your internet address'
  }),
  deviceAccuracyHelpText: TranslationFlagger.flag({
    phrase: 'based on your device',
    context: 'Describes the accuracy of estimated location. Example: Salt Lake City, Utah based on your device'
  }),
  updateLocationButtonText: TranslationFlagger.flag({
    phrase: 'Update your location',
    context: 'Button label'
  })
};

/**
 * LocationBiasComponent will show the user where is used for location bias and allow user to
 * improve accuracy with HTML5 geolocation.
 *
 * @extends Component
 */
export default class LocationBiasComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super({ ...DEFAULT_CONFIG, ...config }, systemConfig);

    /**
     * Recieve updates from storage based on this index
     * @type {StorageKey}
     */
    this.moduleId = StorageKeys.LOCATION_BIAS;

    /**
     * The optional vertical key for vertical search configuration
     * If not provided, when location updated,
     * a universal search will be triggered.
     * @type {string}
     */
    // TODO: Remove config.verticalKey
    this._verticalKey = config.verticalKey || this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey || null;

    /**
     * The element used for updating location
     * Optionally provided.
     * @type {string} CSS selector
     */
    this._updateLocationEl = config.updateLocationEl || '.js-locationBias-update-location';

    this._locationDisplayName = '';

    this._accuracy = '';

    this._allowUpdate = true;

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
    return 'LocationBias';
  }

  static defaultTemplateName () {
    return 'search/locationbias';
  }

  onMount () {
    if (!this._allowUpdate) {
      return;
    }
    this._disableLocationUpdateIfGeolocationDenied();
    DOM.on(this._updateLocationEl, 'click', (e) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            radius: position.coords.accuracy
          });
          this._doSearch();
        },
        (err) => this._handleGeolocationError(err),
        this._geolocationOptions);
      }
      // TODO: Should we throw error or warning here if no geolocation?
    });
  }

  _handleGeolocationError (err) {
    if (err.code === 1) {
      this._disableLocationUpdate();
    }
    const { enabled, message } = this._geolocationTimeoutAlert;
    if (enabled) {
      window.alert(message);
    }
  }

  setState (data, val) {
    this._locationDisplayName = data.locationDisplayName;
    this._accuracy = data.accuracy;
    return super.setState(Object.assign({}, data, {
      locationDisplayName: this._getLocationDisplayName(data),
      accuracyText: this._getAccuracyHelpText(data.accuracy),
      isPreciseLocation: data.accuracy === 'DEVICE' && this._allowUpdate,
      isUnknownLocation: data.accuracy === 'UNKNOWN',
      shouldShow: data.accuracy !== undefined && data.accuracy !== null,
      allowUpdate: this._allowUpdate
    }, val));
  }

  _getLocationDisplayName (data) {
    if (data.accuracy === 'UNKNOWN') {
      return TranslationFlagger.flag({
        phrase: 'Unknown Location'
      });
    }
    return data.locationDisplayName;
  }

  _getAccuracyHelpText (accuracy) {
    switch (accuracy) {
      case 'IP':
        return this._config.ipAccuracyHelpText;
      case 'DEVICE':
        return this._config.deviceAccuracyHelpText;
      default:
        return '';
    }
  }

  _doSearch () {
    if (this._verticalKey) {
      this.core.verticalSearch(this._config.verticalKey, {
        setQueryParams: true,
        useFacets: true
      });
    } else {
      let query = this.core.globalStorage.getState(StorageKeys.QUERY);
      this.core.search(query);
    }
  }

  _disableLocationUpdateIfGeolocationDenied () {
    if ('permissions' in navigator) {
      navigator.permissions.query({ name: 'geolocation' })
        .then((result) => {
          if (result.state === 'denied') {
            this._disableLocationUpdate();
          }
        });
    }
  }

  _disableLocationUpdate () {
    this.core.globalStorage.delete(StorageKeys.GEOLOCATION);
    this._allowUpdate = false;
    this.setState({
      locationDisplayName: this._locationDisplayName,
      accuracy: this._accuracy
    });
  }
}
