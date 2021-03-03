/** @module Component */

import { Renderers } from '../rendering/const';

import DOM from '../dom/dom';
import State from './state';
import { AnalyticsReporter } from '../../core'; // eslint-disable-line no-unused-vars
import AnalyticsEvent from '../../core/analytics/analyticsevent';
import { AnswersComponentError } from '../../core/errors/errors';

function cloneDeep (obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Component is an abstraction that encapsulates state, behavior,
 * and view for a particular chunk of functionality on the page.
 *
 * The API exposes event life cycle hooks for when things are rendered,
 * mounted, created, etc.
 */
export default class Component {
  constructor (config = {}, systemConfig = {}) {
    this.onLinkClick = systemConfig.onLinkClick;
    this.moduleId = null;

    /**
     * Unique name of this component instance
     * Used to distinguish between other components of the same type
     * @type {String}
     */
    this.name = config.name || this.constructor.type;

    /**
     * Cache the options so that we can propogate properly to child components
     * @type {Object}
     */
    this._config = config;

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
    this._parentContainer = config.parentContainer || null;

    /**
     * A container for all the child components
     * @type {Component[]}
     */
    this._children = [];

    /**
     * The state (data) of the component to be provided to the template for rendering
     * @type {object}
     */
    this._state = new State(config.state);

    /**
     * TODO(billy) This should be 'services'
     */
    this.core = systemConfig.core || null;

    /**
     * A local reference to the component manager, which contains all of the component classes
     * eligible to be created
     * @type {ComponentManager}
     */
    this.componentManager = systemConfig.componentManager || null;

    /**
     * A local reference to the analytics reporter, used to report events for this component
     * @type {AnalyticsReporter}
     */
    this.analyticsReporter = systemConfig.analyticsReporter || null;

    /**
     * Options to include with all analytic events sent by this component
     * @type {object}
     * @private
     */
    this._analyticsOptions = config.analyticsOptions;

    /**
     * A reference to the DOM node that the component will be appended to when mounted/rendered.
     * @type {HTMLElement}
     */
    if (!this._parentContainer) {
      if (typeof config.container === 'string') {
        this._container = DOM.query(config.container);
        if (!this._container) {
          throw new Error('Cannot find container DOM node: ' + config.container);
        }
      }
    } else {
      this._container = DOM.query(this._parentContainer, config.container);

      // If we have a parent, and the container is missing from the DOM,
      // we construct the container and append it to the parent
      if (!this._container) {
        this._container = DOM.createEl('div', {
          class: config.container.substring(1, config.container.length)
        });
        DOM.append(this._parentContainer, this._container);
      }
    }

    /**
     * A local reference to the default {Renderer} that will be used for rendering the template
     * @type {Renderer}
     */
    this._renderer = Renderers.Handlebars;

    /**
     * The templateName to use for rendering the component.
     * This is only used if _template is empty.
     * @type {string}
     */
    this._templateName = config.templateName || this.constructor.defaultTemplateName(config);

    /**
     * An internal state indicating whether or not the component has been mounted to the DOM
     * @type {boolean}
     */
    this._isMounted = false;

    /**
     * A local reference to the callback, thats used to transform the internal data
     * models of the components, before it gets applied to the component state.
     * By default, no transformation happens.
     * @type {function}
     */
    this.transformData = config.transformData || this.transformData || function () {};

    /**
     * The a local reference to the callback that will be invoked when a component is created.
     * @type {function}
     */
    this.onCreate = config.onCreateOverride || this.onCreate || function () {};
    this.onCreate = this.onCreate.bind(this);

    /**
     * The a local reference to the callback that will be invoked when a component is Mounted.
     * @type {function}
     */
    this.onMount = config.onMountOverride || this.onMount || function () {};
    this.onMount = this.onMount.bind(this);

    /**
     * A user provided onCreate callback
     * @type {function}
     */
    this.userOnCreate = config.onCreate || function () {};

    /**
     * A user provided onMount callback
     * @type {function}
     */
    this.userOnMount = config.onMount || function () {};
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'default';
  }

  static get type () {
    return 'Component';
  }

  static areDuplicateNamesAllowed () {
    return false;
  }

  init (opts) {
    try {
      this.setState(opts.data || opts.state || {});
      this.onCreate();
      this.userOnCreate();
    } catch (e) {
      throw new AnswersComponentError(
        'Error initializing component',
        this.constructor.type,
        e);
    }

    this._state.on('update', () => {
      try {
        this.unMount();
        this.mount();
      } catch (e) {
        throw new AnswersComponentError(
          'Error updating component',
          this.constructor.type,
          e);
      }
    });

    DOM.addClass(this._container, 'component');
    return this;
  }

  setState (data) {
    const newState = Object.assign({}, { _config: this._config }, data);
    this._state.set(newState);
    return this;
  }

  getState (prop) {
    return this._state.get(prop);
  }

  hasState (prop) {
    return this._state.has(prop);
  }

  transformData (data) {
    return data;
  }

  addChild (data, type, opts) {
    let childComponent = this.componentManager.create(
      type,
      Object.assign({
        name: data.name,
        parentContainer: this._container,
        data: data
      }, opts || {}, {
        _parentOpts: this._config
      })
    );

    this._children.push(childComponent);
    return childComponent;
  }

  /**
   * Unmount and remove this component and its children from the list
   * of active components
   */
  remove () {
    this._children.forEach(c => c.remove());
    this.componentManager.remove(this);
  }

  /**
   * Set the renderer for the component
   * @param {RendererType} renderer
   */
  setRenderer (renderer) {
    this._renderer = Renderers[renderer];
    return this;
  }

  unMount () {
    if (!this._container) {
      return this;
    }

    this._children.forEach(child => {
      child.unMount();
    });

    DOM.empty(this._container);
    this._children.forEach(c => c.remove());
    this._children = [];
    this.onUnMount();
  }

  mount (container) {
    if (container) {
      this._container = container;
    }

    if (!this._container) {
      return this;
    }

    if (this.beforeMount() === false) {
      return this;
    }

    DOM.append(this._container, this.render(this._state.asJSON()));

    // Process the DOM to determine if we should create
    // in-memory sub-components for rendering
    const domComponents = DOM.queryAll(this._container, '[data-component]:not([data-is-component-mounted])');
    const data = this.transformData(cloneDeep(this._state.get()));
    domComponents.forEach(c => this._createSubcomponent(c, data));

    this._children.forEach(child => {
      child.mount();
    });

    // Attach analytics hooks as necessary
    if (this.analyticsReporter) {
      let domHooks = DOM.queryAll(this._container, '[data-eventtype]:not([data-is-analytics-attached])');
      domHooks.forEach(this._createAnalyticsHook.bind(this));
    }
    if (this.onLinkClick) {
      let linkEls = DOM.queryAll(this._container, 'a[data-inter-experience]');
      linkEls.forEach(el => {
        const href = el.href;
        el.setAttribute('href', 'javascript:void(0);');
        el.setAttribute('data-href', href);
        DOM.on(el, 'click', ev => this.onLinkClick(href, el, ev));
      });
    }

    this._isMounted = true;
    this.onMount(this);
    this.userOnMount(this);

    return this;
  }

  /**
   * render the template using the {Renderer} with the current state and template of the component
   * @returns {string}
   */
  render (data = this._state.get()) {
    // We create an HTML Document fragment with the rendered string
    // So that we can query it for processing of sub components
    return DOM.create(this._renderer.render({
      templateName: this._templateName
    }, this.transformData(cloneDeep(data)))).innerHTML;
  }

  _createSubcomponent (domComponent, data) {
    domComponent.dataset.isComponentMounted = true;
    const dataset = domComponent.dataset;
    const type = dataset.component;
    const prop = dataset.prop;
    let opts = dataset.opts ? JSON.parse(dataset.opts) : {};

    let childData = data[prop] || {};

    opts = {
      ...opts,
      container: domComponent
    };

    // TODO(billy) Right now, if we provide an array as the data prop,
    // the behavior is to create many components for each item in the array.
    // THAT interface SHOULD change to use a different property that defines
    // whether to array data should be used for a single component or
    // to create many components for each item.
    // Overloading and having this side effect is unintuitive and WRONG
    if (!Array.isArray(childData)) {
      // Rendering a sub component should be within the context,
      // of the node that we processed it from
      this.addChild(childData, type, opts);
      return;
    }

    childData.reverse();
    childData.forEach(data => {
      this.addChild(data, type, opts);
    });
  }

  _createAnalyticsHook (domComponent) {
    domComponent.dataset.isAnalyticsAttached = true;
    const dataset = domComponent.dataset;
    const type = dataset.eventtype;
    const label = dataset.eventlabel;
    const middleclick = dataset.middleclick;
    const options = dataset.eventoptions ? JSON.parse(dataset.eventoptions) : {};

    DOM.on(domComponent, 'mousedown', e => {
      if (e.button === 0 || (middleclick && e.button === 1)) {
        const event = new AnalyticsEvent(type, label);
        event.addOptions(this._analyticsOptions || {});
        event.addOptions(options);
        this.analyticsReporter.report(event);
      }
    });
  }

  /**
   * onCreate is triggered when the component is constructed
   * @param {function} the callback to invoke upon emit
   */
  onCreate () {

  }

  /**
   * onMount is triggered when the component is appended to the DOM
   * @param {function} the callback to invoke upon emit
   */
  onMount () {

  }

  /**
   * onUnMount is triggered when the component is removed from the DOM
   * @param {function} the callback to invoke upon emit
   */
  onUnMount () {

  }

  /**
   * beforeMount is triggered before the component is mounted to the DOM
   * @param {function} the callback to invoke upon emit
   */
  beforeMount () {

  }

  /**
   * onDestroy is triggered when the component is destroyed
   * @param {function} the callback to invoke upon emit
   */
  onDestroy () {

  }
}
