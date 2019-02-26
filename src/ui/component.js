export default class Component {
  constructor(type, opts) {
    this._type = type || ComponentTypes.Default;

    this._container = opts.container || null;

    this._class = opts.class || 'component';

    this._template = opts.template || '<div></div>'; 

    this._renderer = opts.renderer || Renderer.SOY;

    this._data = {};
  }
  
  /**
   * Set the renderer for the component
   * @param {RendererType} renderer 
   */
  setRenderer(renderer) {
    this._renderer = renderer;
  }

  /**
   * Sets the template for the component to use when rendering
   * @param {string} template 
   */
  setTemplate(template) {
    this._template = template;
  }

  /**
   * render the template using the {Renderer} with the current state and template of the component
   * @returns {string} 
   */
  render() {
    return '';
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