/** @module DirectAnswerComponent */

import Component from '../component';
import StorageKeys from '../../../core/storage/storagekeys';

export default class DirectAnswerComponent extends Component {
  constructor (opts = {}) {
    super(opts);

    this.moduleId = StorageKeys.DIRECT_ANSWER;

    /**
     * Call to action for viewing details of the Direct Answer
     * @type {string}
     */
    this._viewDetailsText = opts.viewDetailsText || 'View Details';

    /**
     * footer text displays below the answer
     * @type {string}
     */
    this._footerText = opts.footerText || 'Was this the answer you were looking for?';

    // TODO (bmcginnis): provide default icons
    /**
     * Icon url to signify this was a helpful Direct Answer
     * @type {string|null}
     */
    this._thumbsUpImage = opts.thumbsUpImage || null;

    /**
     * Icon url to signify this was not a helpful Direct Answer
     * @type {string|null}
     */
    this._thumbsDownImage = opts.thumbsDownImage || null;
  }

  beforeMount () {
    return this.hasState('answer');
  }

  setState (data) {
    return super.setState(Object.assign({}, data, {
      viewDetailsText: this._viewDetailsText,
      footerText: this._footerText,
      thumbsUpImage: this._thumbsUpImage,
      thumbsDownImage: this._thumbsDownImage
    }));
  }

  static get type () {
    return 'DirectAnswer';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'results/directanswer';
  }
}
