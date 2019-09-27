/** @module SpellCheckComponent */

import Component from '../component';
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
    this.core.persistentStorage.delete('queryTrigger');
  }
}
