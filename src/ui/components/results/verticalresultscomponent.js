/** @module VerticalResultsComponent */

import Component from '../component';

import StorageKeys from '../../../core/storage/storagekeys';
import { cardTemplates, templatesToComponents } from '../cards/consts';
import Icons from '../../../ui/icons/index';

const DEFAULT_CONFIG = {
  /**
   * Display the count of results at the very top of the results
   * @type {boolean}
   */
  showResultsCount: true,

  /**
   * If present, show the filters that were ultimately applied to this query
   * @type {boolean}
   */
  showAppliedFilters: true,

  /**
   * If showAppliedFilters is true, show the field name in the string followed by a colon.
   * @type {boolean}
   */
  showFieldNames: false,

  /**
   * If showAppliedFilters is true, this is list of filters that should not be displayed (common one is entity type)
   * @type {Array<String>}
   */
  hiddenFields: ['builtin.entityType'],

  /**
   * If showResultsCount and showAppliedFilters are true, display this a separator between the result count and the applied query filters
   * @type {string}
   */
  resultsCountSeparator: '|',

  /**
   * The card template that should be used for each result item in the verticalResults
   * @type {Object}
   */
  card: {
    templateName: cardTemplates.Standard,
    templateMappings: () => {}
  },

  /**
   * Set a maximum number of columns that will display at the widest breakpoint.
   * Possible values are 1, 2 or 4.
   * @type {number}
   */
  maxNumberOfColumns: 1,

  /**
   * Logo that appears at the bottom of the page. Should be a path to a file, or in-line svg, or a reference to an icon name
   * @type {string}
   */
  footerLogo: 'yext',

  /**
   * If a logo is provided, the click-through link
   * @type {string}
   */
  footerLogoUrl: 'https://yext.com'
};

export default class VerticalResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(Object.assign({}, DEFAULT_CONFIG, config), systemConfig);
    this.moduleId = StorageKeys.VERTICAL_RESULTS;
    this._config.card.templateName = this._config.card.templateName || cardTemplates.Standard;
    this._config.card.templateMappings = this._config.card.templateMappings || (() => {});
    this.results = [];
    this.setFooterImage(this._config.footerLogo);
  }

  setFooterImage (footerLogo) {
    if (Icons[footerLogo]) {
      this.footerIcon = footerLogo;
    } else if (footerLogo.substring(0, 5) === '<svg ') {
      this.footerSVG = footerLogo;
    } else {
      this.footerImage = footerLogo;
    }
  }

  static get duplicatesAllowed () {
    return true;
  }

  setState (data) {
    const resultsData = data.results || [];
    const maxCols = this._config.maxNumberOfColumns || 1;
    this.results = [];
    for (let i = 0; i < resultsData.length; i++) {
      const colNum = i % maxCols;
      const index = Math.floor(i / maxCols);
      while (!this.results[colNum]) {
        this.results.push([]);
      }
      this.results[colNum][index] = resultsData[i];
    }
    return super.setState(Object.assign({}, data, {
      results: this.results,
      footerSVG: this.footerSVG,
      footerIcon: this.footerIcon,
      footerImage: this.footerImage
    }));
  }

  /**
   * Also want to implement for when card is a function or takes in functions, for now just this.
   */
  static getCardConfig (card, data) {
    if (typeof card === 'function') {
      return card(data);
    } else {
      return card;
    }
  }

  /**
   * Returns item config updated with template mappings.
   */
  static applyTemplateMappings (config, templateMappings, data) {
    // TODO(oshi) how can we validate somebody else's javascript function? Should we?
    if (typeof templateMappings === 'function') {
      try {
        return Object.assign({}, config, templateMappings(data));
      } catch (err) {
        console.error('Error running templateMappings', templateMappings, 'for data', data, err);
      }
    } else if (templateMappings === 'object') {
      return Object.assign({}, config, templateMappings);
    }
  }

  static getItemConfig (card, data) {
    let config = VerticalResultsComponent.getCardConfig(card, data);
    config = VerticalResultsComponent.applyTemplateMappings(config, card.templateMappings, data);
    return config;
  }

  onMount () {
    const card = this._config.card;
    // Initialize result items
    for (let i = 0; i < this.results.length; i++) {
      for (let j = 0; j < this.results[i].length; j++) {
        const data = this.results[i][j];
        const config = VerticalResultsComponent.getItemConfig(card, data);
        const type = templatesToComponents[config.templateName];
        const cardConfig = Object.assign({}, config, {
          parentContainer: this._container,
          name: `${type}-${this.name}-${i}-${j}`,
          container: `.yxt-VerticalResults-item-${i}-${j}`,
          data: data
        });
        this.componentManager.create(type, cardConfig).mount();
      }
    }
  }

  static get type () {
    return 'VerticalResults';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName () {
    return 'results/verticalresults';
  }
}
