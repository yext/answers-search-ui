import DOM from './dom/dom';
import { Renderers } from './rendering/const';

export default class Component {
  constructor(type, opts = {}) {
    // Simple facade pattern to enable the user to pass a single object
    // containing all the necessary options and settings
    if (typeof type === 'object') {
      opts = type;
      type = opts.type;
    }

    /**
     * An identifier used to classify the type of component.
     * The component manager uses this information in order to persist and organize components
     * @type {string|ComponentType}
     */
    this._type = type || ComponentTypes.Default;

    /**
     * A reference to the DOM node that the component will be appended to when mounted/rendered.
     * @type {HTMLElement}
     */
    this._container = DOM.query(opts.container) || null;

    /**
     * A custom class to be applied to {this._container} node
     * @type {string}
     */
    this._className = opts.class || 'component';

    /**
     * The template to use for rendering the component
     * @type {string}
     */
    this._template = opts.template || '';

    /**
     * A local reference to the {Renderer} that will be used for rendering the template
     * @type {Renderer}
     */
    this._renderer = opts.renderer || Renderers.HandleBars;

    /**
     * The data to be provided to the template for rendering
     * @type {object}
     */
    this._data = {
      title: 'My Title',
      body: 'My data body'
    };

    /**
     * An internal state indicating whether or not the component has been mounted to the DOM
     * @type {boolean}
     */
    this._isMounted = false;

    /**
     * The a local reference to the callback that will be invoked when a component is Mounted.
     * @type {function}
     */
    this._onMount = opts.onMount || function () { };
  }

  init() {
    DOM.addClass(this._container, this._className);
    return this;
  }

  /**
   * Set the renderer for the component
   * @param {RendererType} renderer
   */
  setRenderer(renderer) {
    this._renderer = Renderers[renderer];
  }

  /**
   * Sets the template for the component to use when rendering
   * @param {string} template
   */
  setTemplate(template) {
    this._template = template;
  }

  mount() {
    DOM.append(this._container, this.render(this._data));

    this._isMounted = true;
    this._onMount(this);
  }

  /**
   * render the template using the {Renderer} with the current state and template of the component
   * @returns {string}
   */
  render(data) {
    return this._renderer.render(this._template, data);
  }

  /**
   * onCreate is triggered when the component is constructed
   * @param {function} the callback to invoke upon emit
   */
  onCreate(cb) {

  }

  /**
   * onUpdate is triggered when the state of the component changes
   * @param {function} the callback to invoke upon emit
   */
  onUpdate(cb) {

  }

  /**
   * onRendered event is triggered when the component is rendered
   * @param {function} the callback to invoke upon emit
   */
  onRendered(cb) {

  }

  /**
   * onMount is triggered when the component is appended to the DOM
   * @param {function} the callback to invoke upon emit
   */
  onMount(cb) {

  }

  /**
   * onUnMount is triggered when the component is removed from the DOM
   * @param {function} the callback to invoke upon emit
   */
  onUnMount(cb) {

  }

  /**
   * onDestroy is triggered when the component is destroyed
   * @param {function} the callback to invoke upon emit
   */
  onDestroy(cb) {

  }
}