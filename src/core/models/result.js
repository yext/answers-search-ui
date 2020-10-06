/** @module Result */

export default class Result {
  constructor (data = {}) {
    /**
     * The raw profile data
     * @type {Object}
     * @private
     */
    this._raw = data.raw || null;

    /**
     * The formatted profile data
     * @type {Object}
     * @private
     */
    this._formatted = data.formatted;

    /**
     * The highlighted profile data with highlights applied to applicable fields
     * @type {Object}
     * @private
     */
    this._highlighted = data.highlighted;

    /**
     * The index number of the result
     * @type {Number}
     */
    this.ordinal = data.ordinal || null;

    /**
     * The title of the result card
     * @type {string|null}
     */
    this.title = data.title || null;

    /**
     * The body of the details section of the result card, can contain HTML
     * @type {string| null}
     */
    this.details = data.details || null;

    /**
     * The destination link for the title of the result card
     * @type {string|null}
     */
    this.link = data.link || null;

    /**
     * The Entity ID, or other unique identifier, used for to power interactivity
     * @type {string|null}
     */
    this.id = data.id || null;

    /**
     * The subtitle on the result card
     * @type {string|null}
     */
    this.subtitle = data.subtitle || null;

    /**
     * The class modifier, usually derived from the vertical configuration ID
     * Used to apply different styling to different result card types
     * @type {string|null}
     */
    this.modifier = data.modifier || null;

    /**
     * A large date, of the format { month: 'Jan', day: '01' }
     * @type {Object|null}
     */
    this.bigDate = data.bigDate || null;

    /**
     * An image profile object, expected to have a url property
     * @type {Object|null}
     */
    this.image = data.image || null;

    /**
     * An array of calls to action, of the format:
     * { icon: '', url: '', text: '', eventType: '', eventOptions: {}}
     * @type {Array}
     */
    this.callsToAction = data.callsToAction || [];

    /**
     * Determines if an accordian result should be collapsed by default
     * @type {boolean}
     */
    this.collapsed = data.collapsed === undefined ? true : data.collapsed;

    /**
     * @type {number}
     */
    this.distance = data.distance || null;

    /**
     * @type {number}
     */
    this.distanceFromFilter = data.distanceFromFilter || null;
  }
}
