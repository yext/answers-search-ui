/** @module StandardSectionComponent */

import Component from '../component';

import MapComponent from '../map/mapcomponent';
import CardComponent from '../cards/cardcomponent';

class StandardSectionConfig {
  constructor (sectionConfig = {}, verticalConfigId) {
    /**
     * Title of the section
     * @type {string}
     */
    this.title = sectionConfig.title || verticalConfigId;

    /**
     * Icon in the title bar. Should correspond to the name of a built-in icon.
     * @type {string}
     */
    this.icon = sectionConfig.icon || 'star';

    /**
     * Url for the view more link.
     * @type {string}
     */
    this.url = sectionConfig.url || `/${verticalConfigId}.html`;

    /**
     * Whether to display view more link.
     * @type {boolean}
     */
    this.viewMore = sectionConfig.viewMore || sectionConfig.viewMore === undefined;

    /**
     * Text for view more. Only shown if view more is true.
     * @type {string}
     */
    this.viewMoreLabel = sectionConfig.viewMoreLabel || 'View More';

    /**
     * Whether or not to display the “change filters” link, which links to the vertical searcher
     * @type {boolean}
     */
    this.changeFilters = sectionConfig.changeFilters || false;

    /**
     * If present, show the filters that were ultimately applied to this query. See here for more details.
     */
    this.showAppliedFilters = sectionConfig.showAppliedFilters || sectionConfig.showAppliedFilters === undefined;

    /**
     * If showAppliedFilters is true, show the field name in the string followed by a colon.
     * @type {boolean}
     */
    this.showFieldNames = sectionConfig.showFieldNames || false;

    // If showAppliedFilters is true, this is list of filters that should not be displayed.
    // By default, builtin.entityType will be hidden
    this.hiddenFields = sectionConfig.hiddenFields || [ 'builtin.entityType' ];
  }
}

export default class StandardSectionComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    /**
     * The section of results this component corresponds to.
     * @type {Section}
     */
    const section = config.data || {};

    /**
     * Vertical key for this section.
     * @type {string}
     */
    this.verticalKey = section.verticalConfigId;

    Object.assign(this._config, new StandardSectionConfig(config.section, this.verticalKey));

    /**
     * From Section.parseMap.
     * @type {Object}
     */
    this.map = section.map || {};

    /**
     * The array of entity data results for this section.
     * @type {Array<Result>}
     */
    this.results = section.results || [];

    /**
     * Config for the card
     * @type {Object}
     */
    this._config.card = config.card || {};

    /**
     * Whether to include a map.
     * TODO: Remove this option when map section is done
     * @type {boolean}
     */
    this._config.includeMap = config.includeMap || false;

    /**
     * Required config if including a map.
     * TODO: remove when map section is done
     * @type {Object}
     */
    this._config.mapConfig = config.mapConfig || {};
  }

  static get duplicatesAllowed () {
    return true;
  }

  static get type () {
    return 'StandardSection';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'sections/standardsection';
  }

  getAppliedFiltersArray (appliedQueryFilters = []) {
    const groupedFilters = {};
    appliedQueryFilters.filter(f => !this._config.hiddenFields.includes(f.fieldId))
      .forEach(filter => {
        if (!groupedFilters[filter.key]) {
          groupedFilters[filter.key] = [];
        }
        groupedFilters[filter.key].push(filter.value);
      });
    // Has to be parsed into an array because our handlebars can only loop through arrays, not objects.
    return Object.keys(groupedFilters).map(label => ({
      label: label, displayValues: groupedFilters[label]
    }));
  }

  setState (data) {
    return super.setState(Object.assign({ results: [] }, data, {
      map: this.map,
      results: this.results,
      universalUrl: this._universalUrl ? this._universalUrl + window.location.search : '',
      showNoResults: this.results.length === 0,
      appliedFiltersArray: this.getAppliedFiltersArray(data.appliedQueryFilters)
    }));
  }

  addChild (data, type, opts) {
    if (type === MapComponent.type) {
      const newOpts = Object.assign({}, this._config.mapConfig, opts);
      return super.addChild({ map: data }, type, newOpts);
    } else if (type === CardComponent.type) {
      const cardData = {
        result: this.results[opts._index],
        verticalKey: this.verticalKey
      };
      const cardConfig = {
        ...this._config.card,
        isUniversal: this._config.isUniversal,
        template: this._config.itemTemplate,
        render: this._config.renderItem,
        ...opts
      };
      return super.addChild(cardData, type, cardConfig);
    }
    return super.addChild(data, type, opts);
  }
}
