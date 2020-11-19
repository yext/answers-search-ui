/** @module SpellCheckComponent */

import Component from '../component';
import SearchParams from '../../dom/searchparams';
import StorageKeys from '../../../core/storage/storagekeys';
import TranslationFlagger from '../../i18n/translationflagger';

const DEFAULT_CONFIG = {
  suggestionHelpText: TranslationFlagger.flag({
    phrase: 'Did you mean:',
    context: 'Help text, labels a suggested phrase'
  })
};

/**
 * SpellCheckComponent will support displaying suggestion, autocorrect and combined(maybe in the future)
 * provided from spelling correction.
 *
 * @extends Component
 */
export default class SpellCheckComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super({ ...DEFAULT_CONFIG, ...config }, systemConfig);

    this.moduleId = StorageKeys.SPELL_CHECK;
  }

  static get type () {
    return 'SpellCheck';
  }

  static defaultTemplateName () {
    return 'search/spellcheck';
  }

  onCreate () {
    this.core.persistentStorage.delete('skipSpellCheck', true);
    this.core.persistentStorage.delete(StorageKeys.QUERY_TRIGGER, true);
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
        return this._config.suggestionHelpText;
      default:
        return '';
    }
  }
}
