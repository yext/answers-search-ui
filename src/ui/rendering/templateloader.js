import DOM from '../dom/dom';

export default class TemplateLoader {
  constructor(opts = {}) {
    if (!TemplateLoader.setInstance(this)) {
      return TemplateLoader.getInstance();
    }

    let params = new URL(window.location.toString()).searchParams;
    let isLocal = params.get('local');

    this._templateUrl = opts.templateUrl || (isLocal ? '../dist/answerstemplates.compiled.min.js' : 'https://answersjs.netlify.com/answerstemplates.compiled.min.js');

    this._templates = {};

    this._onLoaded = function() {};

    this._init()
  }

  static setInstance(instance) {
    if (!this.instance) {
      this.instance = instance;
      return true;
    }
    return false;
  }

  static getInstance(opts) {
    return this.instance;
  }

  _init() {
    this.fetchTemplates();
  }

  fetchTemplates() {
    // If we already have templates loaded, do nothing
    let node = DOM.query('#yext-answers-templates');
    if (node) {
      return;
    }

    let that = this;
    // Inject a script to fetch the compiled templates,
    // wrapping it a Promise for cleanliness
    new Promise((resolve, reject) => {
      let script = DOM.createEl('script', {
        id: 'yext-answers-templates',
        onload: resolve,
        onerror: reject,
        async: true,
        src: that._templateUrl
      });

      DOM.append('body', script);
    })
    .then((response) => {
      // TODO(billy) Implmenet error handling here (e.g. request could fail)
      console.log('Templates loaded successfully!');
    });
    return this;
  }

  /**
   * register the templates internally so that they can be later consumed
   * (e.g. by components and renderers) with convienience.
   *
   * `fetchTemplates` will automatically call this, providing the compiled templates from the server.
   */
  register(templates) {
    this._templates = templates;

    // Notify our consumers that the templates are here :)
    this._onLoaded(this._templates);
    return this;
  }

  onLoaded(cb) {
    this._onLoaded = cb;
    return this;
  }

  get(templateName) {
    return this._templates[templateName];
  }

  /**
   * @return The internal template collection
   */
  getTemplates() {
    return this._templates;
  }
}