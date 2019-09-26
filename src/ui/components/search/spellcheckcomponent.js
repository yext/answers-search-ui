/** @module SpellCheckComponent */

import Component from '../component';
import SearchParams from '../../dom/searchparams';
import StorageKeys from '../../../core/storage/storagekeys';

/**
 * SpellCheckComponent will support displaying suggestion, autocorrect and combined(maybe in the future)
 * provided from speelling correction.
 *
 * @extends Component
 */
export default class SpellCheckComponent extends Component {
  constructor (config = {}) {
    super(config);

    this.moduleId = StorageKeys.SPELL_CHECK;
  }

  static get type () {
    return 'SpellCheck';
  }

  static defaultTemplateName () {
    return 'search/spellcheck';
  }

  init (opts) {
    super.init(opts);
    return this;
  }

  setState (data, val) {
    return super.setState(Object.assign(data, {
      shouldShow: data.correctedQuery !== undefined,
      correctedQueryUrl: this._buildRedirectQueryUrl(data.correctedQuery),
      helpText: this._getHelpText(data.type)
    }, val));
  }

  _buildRedirectQueryUrl (query) {
    if (query === undefined) {
      return '';
    }
    let params = new SearchParams(window.location.search.substring(1));
    params.set('query', query);
    params.set('spellCheck', false);
    return window.location.href.split('?')[0] + '?' + params.toString();
  }

  _getHelpText (type) {
    switch (type) {
      case 'SUGGEST':
        return 'Did you mean:';
      default:
        return '';
    }
  }
}
