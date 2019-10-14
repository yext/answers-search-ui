/** @module SpellCheckComponent */

import Component from '../component';
import SearchParams from '../../dom/searchparams';
import StorageKeys from '../../../core/storage/storagekeys';

/**
 * SpellCheckComponent will support displaying suggestion, autocorrect and combined(maybe in the future)
 * provided from spelling correction.
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

  onCreate () {
    this.core.persistentStorage.delete('skipSpellCheck');
    this.core.persistentStorage.delete(StorageKeys.QUERY_TRIGGER);
  }

  setState (data, val) {
    return super.setState(Object.assign({}, data, {
      shouldShow: data.correctedQuery !== undefined,
      correctedQueryUrl: this._buildRedirectQueryUrl(data.correctedQuery, data.type),
      helpText: this._getHelpText(data.type)
    }, val));
  }

  _buildRedirectQueryUrl (query, type) {
    if (query === undefined) {
      return '';
    }
    let params = new SearchParams(window.location.search.substring(1));
    params.set('query', query.value);
    params.set('skipSpellCheck', true);
    params.set(StorageKeys.QUERY_TRIGGER, type.toLowerCase());
    return '?' + params.toString();
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
