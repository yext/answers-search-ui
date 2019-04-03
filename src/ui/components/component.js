import { Renderers } from '../rendering/const';

import DOM from '../dom/dom';
import State from './state';

export default class Component {
  constructor(type, opts = {}) {
    // Simple facade pattern to enable the user to pass a single object
    // containing all the necessary options and settings
    if (typeof type === 'object') {
      opts = type;
      type = opts.type;
    }

    this.moduleId = opts.moduleId || null;

    /**
     * An identifier used to classify the type of component.
     * The component manager uses this information in order to persist and organize components
     * @type {string|ComponentType}
     */
    this._type = this.constructor.name;

    /**
     * A local reference to the parent component, if exists
     * @type {Component}
     */
    this._parent = opts.parent || null;

    /**
     * A container for all the child components
     * @type {Array.Component}
     */
    this._children = [];

    /**
     * The state (data) of the component to be provided to the template for rendering
     * @type {object}
     */
    this._state = new State(opts.data || {});

    /**
     * TODO(billy) This should be 'services'
     */
    this.core = opts.core || null;

    /**
     * A local reference to the component manager, which contains all of the component classes
     * eligible to be created
     * @type {ComponentManager}
     */
    this._componentManager = opts.componentManager || null;

    /**
     * A reference to the DOM node that the component will be appended to when mounted/rendered.
     * @type {HTMLElement}
     */
    if (this._parent === null) {
      this._container = DOM.query(opts.container) || null;
    } else {
      this._container = DOM.query(this._parent._container, opts.container);
    }

    if (this._container === null) {
      throw new Error('Cannot find container DOM node: ' + opts.container);
    }

    /**
     * A custom class to be applied to {this._container} node
     * @type {string}
     */
    this._className = opts.class || 'component';

    /**
     * The template string to use for rendering the component
     * If this is left empty, we lookup the template the base templates using the templateName
     * @type {string}
     */
    this._template = opts.template || null;

    /**
     * The templateName to use for rendering the component.
     * This is only used if _template is empty.
     * @type {string}
     */
    this._templateName = opts.templateName || 'default';

    /**
     * A local reference to the {Renderer} that will be used for rendering the template
     * @type {Renderer}
     */
    this._renderer = opts.renderer || Renderers.Handlebars;

    /**
     * An internal state indicating whether or not the component has been mounted to the DOM
     * @type {boolean}
     */
    this._isMounted = false;

    /**
     * The a local reference to the callback that will be invoked when a component is Mounted.
     * @type {function}
     */
    this._onMount = opts.onMount || this._onMount || function () { };
  }

  static get type() {
    return 'Component';
  }

  init() {
    DOM.addClass(this._container, this._className);
    return this;
  }

  setState(data) {
    this._state.set(data);
    this.mount();
  }


  addChild(data, type) {
    let childComponent = this._componentManager.create(type, {
      parent: this,
      data: data
    });

    this._children.push(childComponent);
    return childComponent;
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
    DOM.empty(this._container);
    DOM.append(this._container, this.render(this._state.asJSON()));

    this._isMounted = true;
    this._onMount(this);
    return this;
  }

  /**
   * render the template using the {Renderer} with the current state and template of the component
   * @returns {string}
   */
  render(data) {
    data = data || this._state.get();

    // Render the existing templates as a string
    let html = this._renderer.render({
      template: this._template,
      templateName: this._templateName
    }, data);

    // We create an HTML Document fragment with the rendered string
    // So that we can query it for processing of sub components
    let el = DOM.create(html);

    // Process the DOM to determine if we should create
    // in-memory sub-components for rendering
    // TODO(billy) This should probably return a collection of components
    this._children = [];
    let domComponent = DOM.query(el, '[data-component]');
    if (domComponent !== undefined) {
      let type = domComponent.dataset.component,
          prop = domComponent.dataset.prop;

      let childData = data[prop];
      if (Array.isArray(childData)) {
        let childHTML = [];
        for (let i = 0; i < childData.length; i ++) {
          let childComponent = this.addChild(childData[i], type);
          childHTML.push(childComponent.render());
        }

        DOM.append(domComponent, childHTML.join(''));
      }
    }

    return el.innerHTML;
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