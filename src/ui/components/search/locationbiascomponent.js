import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';
import DOM from '../../dom/dom';

/**
 * LocationBiasComponent will show the user where is used for location bias and allow user to
 * improve accuracy with HTML5 geolocation.
 *
 * @extends Component
 */
export default class LocationBiasComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    this.moduleId = StorageKeys.LOCATION_BIAS;

    this._updateLocationEl = config.updateLocationEl || '.js-locationBias-update-location';
  }

  static get type () {
    return 'LocationBias';
  }

  static defaultTemplateName () {
    return 'search/locationbias';
  }

  onMount () {
    DOM.on(this._updateLocationEl, 'click', (e) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            radius: position.coords.accuracy
          });
        });
      }
      // TODO: Should we throw error or warning here if no geolocation?
    });
  }

  setState (data, val) {
    return super.setState(Object.assign({}, data, {
      locationDisplayName: this._getLocationDisplayName(data),
      accuracyText: this._getAccuracyHelpText(data.accuracy),
      isPreciseLocation: data.accuracy === 'DEVICE',
      isUnknownLocation: data.accuracy === 'UNKNOWN',
      shouldShow: data.accuracy !== undefined
    }, val));
  }

  _getLocationDisplayName (data) {
    if (data.accuracy === 'UNKNOWN') {
      return 'Unknown Location';
    }
    return data.locationDisplayName;
  }

  _getAccuracyHelpText (accuracy) {
    switch (accuracy) {
      case 'IP':
        return 'based on your internet address';
      case 'DEVICE':
        return 'based on your device';
      default:
        return '';
    }
  }
}
