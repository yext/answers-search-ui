/** @module */

import Core from './core/core';

import {
  Renderers,
  DOM
} from './ui/index';

import { AnalyticsReporter } from './core';
import AutoCompleteApi from './core/search/autocompleteapi';
import ComponentManager from './ui/components/componentmanager';

const DEFAULTS = {
  locale: 'en'
};

class Answers {
  constructor () {
    if (!Answers.setInstance(this)) {
      return Answers.getInstance();
    }

    this.renderer = new Renderers.Handlebars();
    this.components = new ComponentManager();
    this.core = null;
    this._onReady = function () {};
    this._eligibleForAnalytics = false;
    this._services = null;
    this._analyticsReporterService = null;
  }

  static setInstance (instance) {
    if (!this.instance) {
      this.instance = instance;
      return true;
    }
    return false;
  }

  static getInstance () {
    return this.instance;
  }

  init (config) {
    window.performance.mark('yext.answers.initStart');
    const parsedConfig = this.parseConfig(config);
    this._services = getServices(parsedConfig);
    this._eligibleForAnalytics = parsedConfig.businessId != null;
    if (this._eligibleForAnalytics) {
      this._analyticsReporterService = new AnalyticsReporter(
        parsedConfig.experienceKey,
        parsedConfig.experienceVersion,
        parsedConfig.businessId,
        parsedConfig.analyticsOptions,
        parsedConfig.environment);

      this.components.setAnalyticsReporter(this._analyticsReporterService);
    }

    this.core = new Core({
      autoCompleteService: this._services.autoCompleteService
    });

    this.components
      .setCore(this.core)
      .setRenderer(this.renderer);

    this.renderer.init(parsedConfig.templateBundle);
    parsedConfig.onReady();

    return this;
  }

  parseConfig (config) {
    const parsedConfig = Object.assign({}, DEFAULTS, config);
    let sessionTrackingEnabled = true;
    if (typeof config.sessionTrackingEnabled === 'boolean') {
      sessionTrackingEnabled = config.sessionTrackingEnabled;
    }
    parsedConfig.sessionTrackingEnabled = sessionTrackingEnabled;
    return parsedConfig;
  }

  domReady (cb) {
    DOM.onReady(cb);
  }

  onReady (cb) {
    this._onReady = cb;
    return this;
  }

  addComponent (type, opts) {
    this.components.create(type, opts).mount();
    return this;
  }
}

function getServices (config) {
  return {
    autoCompleteService: new AutoCompleteApi(
      {
        apiKey: config.apiKey,
        experienceKey: config.experienceKey,
        experienceVersion: config.experienceVersion,
        locale: config.locale,
        environment: config.environment,
        sessionTrackingEnabled: config.sessionTrackingEnabled
      })
  };
}

const ANSWERS = new Answers();
export default ANSWERS;
