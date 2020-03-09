/** @module UniversalResultsComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import StandardSectionComponent from '../sections/standardsectioncomponent';
import { AnswersConfigError } from '../../../core/errors/errors';

const DEFAULT_VERTICAL_CONFIG = {
  /**
   * Section type to use
   * @type {string}
   */
  sectionType: 'Standard',

  /**
   * In-line template to use
   * @type {string}
   */
  template: undefined,

  /**
   * Config for the section
   * @type {Object}
   */
  section: {},

  /**
   * Config for the card
   * @type {Object}
   */
  card: {},

  /**
   * Whether to include a map.
   * TODO: Remove this option when map section is done
   * @type {boolean}
   */
  includeMap: false,

  /**
   * Required config if including a map.
   * TODO: remove when map section is done
   * @type {Object}
   */
  mapConfig: {}
};

const SECTION_COMPONENTS = {
  'Standard': StandardSectionComponent.type
};

export default class UniversalResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
    this.moduleId = StorageKeys.UNIVERSAL_RESULTS;

    let { container, isTwin, render, template, ...sectionConfigs } = config;

    /**
     * sectionConfigs is an object of verticalKey to config
     * used by a section component like {@link StandardSectionComponent}
     * sectionConfigs contains all config attributes that are not one of the
     * built-in component config or other config for universal results like container.
     * @type {Object}
     */
    this._config.sectionConfigs = {};
    for (const verticalKey in sectionConfigs) {
      this._config.sectionConfigs[verticalKey] =
        Object.assign({}, DEFAULT_VERTICAL_CONFIG, sectionConfigs[verticalKey]);
    }

    /**
     * Results data from the universal search.
     * @type {Array<Section>}
     */
    this.sections = {};
  }

  static get duplicatesAllowed () {
    return true;
  }

  static get type () {
    return 'UniversalResults';
  }

  static defaultTemplateName (config) {
    return 'results/universalresults';
  }

  getInvalidSectionError (sectionType) {
    const validSections = `["${Object.keys(SECTION_COMPONENTS).join('", "')}"]`;
    const msg = `Card type "${sectionType}" is not recognized as a valid built-in section type.` +
    ` Valid sections include ${validSections}`;
    return new AnswersConfigError(msg, 'UniversalResults');
  }

  setState (data) {
    this.sections = data.sections || [];
    const sectionComponents = this.sections.map(section => {
      const sectionConfig = this._config.sectionConfigs[section.verticalConfigId] || {};
      const sectionType = sectionConfig.sectionType || 'Standard';
      if (!SECTION_COMPONENTS[sectionType]) {
        throw this.getInvalidSectionError(sectionType);
      }
      return {
        componentType: SECTION_COMPONENTS[sectionType],
        verticalKey: section.verticalConfigId
      };
    });
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    return super.setState(Object.assign({ sections: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      showNoResults: this.sections.length === 0,
      sectionComponents: sectionComponents
    }));
  }

  addChild (data, type, opts) {
    if (type === StandardSectionComponent.type) {
      const verticalKey = opts.verticalKey;

      /**
       * @type {Section}
       */
      const section = this.sections.find(section => section.verticalConfigId === verticalKey);
      const sectionConfig = { ...this._config.sectionConfigs[verticalKey], ...opts };
      return super.addChild(section, type, sectionConfig);
    }
    return super.addChild(data, type, opts);
  }
}
