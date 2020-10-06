/** @module VerticalResultsComponent */

import Component from '../component';

import AlternativeVerticalsComponent from './alternativeverticalscomponent';
import MapComponent from '../map/mapcomponent';
import ResultsContext from '../../../core/storage/resultscontext';
import StorageKeys from '../../../core/storage/storagekeys';
import SearchStates from '../../../core/storage/searchstates';
import CardComponent from '../cards/cardcomponent';
import ResultsHeaderComponent from './resultsheadercomponent';
import { replaceUrlParams, filterParamsForExperienceLink } from '../../../core/utils/urlutils';
import Icons from '../../icons/index';
import { defaultConfigOption } from '../../../core/utils/configutils';
import { getTabOrder } from '../../tools/taborder';
import SearchParams from '../../dom/searchparams';
import TranslationFlagger from '../../i18n/translationflagger';

class VerticalResultsConfig {
  constructor (config = {}) {
    Object.assign(this, config);

    /**
     * isUniversal is set to true if this component is added by the UniversalResultsComponent
     * @type {boolean}
     * @private
     */
    this.isUniversal = config.isUniversal || false;

    const parentOpts = config._parentOpts || {};

    /**
     * Custom render function
     * @type {function}
     */
    this.renderItem = config.renderItem || parentOpts.renderItem;

    /**
     * Custom item template
     * @type {string}
     */
    this.itemTemplate = config.itemTemplate || parentOpts.itemTemplate;

    /**
     * The maximum number of columns to display, supports 1, 2, 3, or 4.
     * @type {number}
     */
    this.maxNumberOfColumns = config.maxNumberOfColumns || 1;

    /**
     * The config to pass to the card
     * @type {Object}
     */
    this.card = config.card || {};

    /**
     * Vertical URL for view more link
     * @type {string}
     */
    this.verticalURL = config.verticalURL;

    /**
     * Whether to display the number of results.
     * @type {boolean}
     */
    this.showResultCount = config.showResultCount === undefined ? true : config.showResultCount;

    /**
     * A custom results count template.
     * @type {string}
     */
    this.resultsCountTemplate = config.resultsCountTemplate || '';

    /**
     * Whether to display the results header (assuming there is something like the results count
     * or applied filters to display).
     * @type {boolean}
     */
    this.hideResultsHeader = config.hideResultsHeader;

    /**
     * Config for the applied filters in the results header.
     * @type {Object}
     */
    this.appliedFilters = {
      /**
       * If present, show the filters that were ultimately applied to this query
       * @type {boolean}
       */
      show: defaultConfigOption(config, ['appliedFilters.show', 'showAppliedFilters'], true),

      /**
       * If showResultCount and showAppliedFilters are true,
       * display this separator between the result count and the applied query filters
       * @type {string}
       */
      resultsCountSeparator: defaultConfigOption(config, ['appliedFilters.resultsCountSeparator', 'resultsCountSeparator'], '|'),

      /**
       * If showAppliedFilters is true, show the field name in the string followed by a colon.
       * @type {boolean}
       */
      showFieldNames: defaultConfigOption(config, ['appliedFilters.showFieldNames', 'showFieldNames'], false),

      /**
       * Any fieldIds in hiddenFields will be hidden from the list of appied filters.
       * @type {Array<string>}
       */
      hiddenFields: defaultConfigOption(config, ['appliedFilters.hiddenFields', 'hiddenFields'], ['builtin.entityType']),

      /**
       * The character that should separate each field (and its associated filters) within the applied filter bar
       * @type {string}
       */
      delimiter: defaultConfigOption(config, ['appliedFilters.delimiter'], '|'),

      /**
       * If the filters are shown, whether or not they should be removable from within the applied filter bar.
       * @type {boolean}
       */
      removable: defaultConfigOption(config, ['appliedFilters.removable'], false),

      /**
       * Whether to show the change filters link on universal results.
       * @type {boolean}
       **/
      showChangeFilters: defaultConfigOption(config, ['appliedFilters.showChangeFilters', 'showChangeFilters'], false),

      /**
       * The text for the change filters link.
       * @type {string}
       */
      changeFiltersText: defaultConfigOption(config, ['appliedFilters.changeFiltersText', 'changeFiltersText']),

      /**
       * The aria-label given to the applied filters bar. Defaults to 'Filters applied to this search:'.
       * @type {string}
       **/
      labelText: defaultConfigOption(
        config,
        ['appliedFilters.labelText'],
        TranslationFlagger.flag({
          phrase: 'Filters applied to this search:'
        })
      ),

      /**
       * The aria-label given to the removable filter buttons.
       * @type {string}
       */
      removableLabelText: defaultConfigOption(
        config,
        ['appliedFilters.removableLabelText'],
        TranslationFlagger.flag({
          phrase: 'Remove this filter',
          context: 'Button label'
        })
      )
    };

    /**
     * Text for the view more button.
     * @type {string}
     */
    this.viewMoreLabel = defaultConfigOption(
      config,
      ['viewMoreLabel', 'viewAllText'],
      TranslationFlagger.flag({
        phrase: 'View More',
        context: 'Button label, view more [results]'
      })
    );
  }
}

export default class VerticalResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(new VerticalResultsConfig(APPLY_SYNONYMS(config)), systemConfig);

    const noResultsConfig = this._config.noResults ||
      this.core.globalStorage.getState(StorageKeys.NO_RESULTS_CONFIG);
    /**
     * A parsed version of the noResults config provided to the component.
     * Applies sensible defaults if certain values are not set.
     * @type {Object}
     * @private
     */
    this._noResultsConfig = Object.assign(
      { displayAllResults: false, template: '' }, noResultsConfig);

    /**
     * Boolean indicating if legacy no results display should be used.
     * @type {boolean}
     * @private
     */
    this._useLegacyNoResults = this._config.isUniversal || !noResultsConfig;

    /**
     * _displayAllResults controls if all results for the vertical will display
     * when there are no results for a query.
     * @type {boolean}
     * @private
     */
    this._displayAllResults = this._noResultsConfig.displayAllResults;

    /**
     * Specifies a custom no results template.
     *
     * @type {string}
     * @private
     */
    this._noResultsTemplate = this._noResultsConfig.template;

    this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, results => {
      if (results.searchState === SearchStates.SEARCH_COMPLETE) {
        this.setState(results);
      }
    });

    /**
     * Vertical config from config, if not present, fall back to global verticalPagesConfig
     * @type {Array.<object>}
     * @private
     */
    this._verticalsConfig = config.verticalPages || this.core.globalStorage
      .getState(StorageKeys.VERTICAL_PAGES_CONFIG)
      .get() || [];
    /**
     * @type {Array<Result>}
     */
    this.results = [];
    this.numColumns = this._config.maxNumberOfColumns;

    /**
     * Config options used in the {@link ResultsHeaderComponent}
     */
    this.resultsHeaderOpts = {
      showFieldNames: this._config.appliedFilters.showFieldNames,
      resultsCountSeparator: this._config.appliedFilters.resultsCountSeparator,
      showAppliedFilters: this._config.appliedFilters.show,
      showChangeFilters: this._config.appliedFilters.showChangeFilters,
      changeFiltersText: this._config.appliedFilters.changeFiltersText,
      showResultCount: this._config.showResultCount,
      removable: this._config.appliedFilters.removable,
      delimiter: this._config.appliedFilters.delimiter,
      labelText: this._config.appliedFilters.labelText,
      removableLabelText: this._config.appliedFilters.removableLabelText,
      hiddenFields: this._config.appliedFilters.hiddenFields,
      resultsCountTemplate: this._config.resultsCountTemplate
    };
  }

  mount () {
    if (Object.keys(this.getState()).length > 0) {
      super.mount();
    }
    return this;
  }

  static areDuplicateNamesAllowed () {
    return true;
  }

  getBaseUniversalUrl () {
    const universalConfig = this._verticalsConfig.find(config => !config.verticalKey) || {};
    return universalConfig.url;
  }

  getUniversalUrl () {
    const baseUniversalUrl = this.getBaseUniversalUrl();
    if (!baseUniversalUrl) {
      return undefined;
    }
    return this._getExperienceURL(
      baseUniversalUrl,
      new SearchParams(window.location.search.substring(1))
    );
  }

  getVerticalURL (data = {}) {
    const verticalConfig = this._verticalsConfig.find(
      config => config.verticalKey === this.verticalKey
    ) || {};
    const verticalURL = this._config.verticalURL || verticalConfig.url ||
      data.verticalURL || this.verticalKey + '.html';

    const dataTabOrder = this.core.globalStorage.getState(StorageKeys.NAVIGATION)
      ? this.core.globalStorage.getState(StorageKeys.NAVIGATION).tabOrder
      : [];
    const tabOrder = getTabOrder(this._verticalsConfig, dataTabOrder);
    const params = new SearchParams(window.location.search.substring(1));
    params.set('tabOrder', tabOrder);

    return this._getExperienceURL(verticalURL, params);
  }

  /**
   * Adds parameters that are dynamically set. Removes parameters for facets,
   * filters, and pagination, which should not persist across the experience.
   * @param {string} baseUrl The url append the appropriate params to. Note:
   *    params already on the baseUrl will be stripped
   * @param {SearchParams} params The parameters to include in the experience URL
   * @return {string} The formatted experience URL with appropriate query params
   */
  _getExperienceURL (baseUrl, params) {
    params.set(StorageKeys.QUERY, this.query);

    const context = this.core.globalStorage.getState(StorageKeys.API_CONTEXT);
    if (context) {
      params.set(StorageKeys.API_CONTEXT, context);
    }
    const referrerPageUrl = this.core.globalStorage.getState(StorageKeys.REFERRER_PAGE_URL);
    if (referrerPageUrl !== null) {
      params.set(StorageKeys.REFERRER_PAGE_URL, referrerPageUrl);
    }

    const sessionsOptIn = this.core.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN);
    if (sessionsOptIn && sessionsOptIn.setDynamically) {
      params.set(StorageKeys.SESSIONS_OPT_IN, sessionsOptIn.value);
    }

    const filteredParams = filterParamsForExperienceLink(
      params,
      types => this.componentManager.getComponentNamesForComponentTypes(types)
    );

    return replaceUrlParams(baseUrl, filteredParams);
  }

  setState (data = {}, val) {
    /**
     * @type {Array<Result>}
     */
    this.results = data.results || [];
    this.resultsCount = data.resultsCount;
    this.verticalKey = data.verticalConfigId;
    this.resultsContext = data.resultsContext;
    const searchState = data.searchState || SearchStates.PRE_SEARCH;
    const displayResultsIfExist = this._config.isUniversal ||
      this._displayAllResults ||
      data.resultsContext === ResultsContext.NORMAL;
    this.query = this.core.globalStorage.getState(StorageKeys.QUERY);
    return super.setState(Object.assign({ results: [] }, data, {
      isPreSearch: searchState === SearchStates.PRE_SEARCH,
      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
      eventOptions: this.eventOptions(),
      universalUrl: this.getUniversalUrl(),
      verticalURL: this.getVerticalURL(data),
      query: this.query,
      currentVerticalLabel: this._currentVerticalLabel,
      resultsPresent: displayResultsIfExist && this.results.length !== 0,
      showNoResults: this.resultsContext === ResultsContext.NO_RESULTS,
      placeholders: new Array(this._config.maxNumberOfColumns - 1),
      numColumns: Math.min(this._config.maxNumberOfColumns, this.results.length),
      useLegacyNoResults: this._useLegacyNoResults,
      iconIsBuiltIn: Icons[this._config.icon],
      nlpFilters: data.appliedQueryFilters || []
    }), val);
  }

  /**
   * helper to construct the eventOptions object for the view all link
   * @returns {string}
   */
  eventOptions () {
    return JSON.stringify({
      verticalConfigId: this.verticalKey
    });
  }

  static get type () {
    return 'VerticalResults';
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'results/verticalresults';
  }

  addChild (data, type, opts) {
    if (type === MapComponent.type) {
      const _opts = {
        noResults: this._noResultsConfig,
        ...this._config.mapConfig,
        ...opts
      };
      const _data = {
        resultsContext: this.getState('resultsContext'),
        map: data
      };
      return super.addChild(_data, type, _opts);
    } else if (type === CardComponent.type) {
      const updatedData = {
        result: this.results[opts._index],
        verticalKey: this.verticalKey
      };
      const newOpts = {
        target: this._config.target,
        ...this._config.card,
        isUniversal: this._config.isUniversal,
        template: this._config.itemTemplate,
        render: this._config.renderItem,
        modifier: this._config.modifier,
        ...opts
      };
      return super.addChild(updatedData, type, newOpts);
    } else if (type === AlternativeVerticalsComponent.type) {
      const hasResults = this.results && this.results.length > 0;
      data = this.core.globalStorage.getState(StorageKeys.ALTERNATIVE_VERTICALS);
      const newOpts = {
        template: this._noResultsTemplate,
        baseUniversalUrl: this.getBaseUniversalUrl(),
        verticalsConfig: this._verticalsConfig,
        isShowingResults: this._displayAllResults && hasResults,
        ...opts
      };
      return super.addChild(data, type, newOpts);
    } else if (type === ResultsHeaderComponent.type) {
      const resultsHeaderData = {
        resultsLength: this.results.length,
        resultsCount: this.resultsCount,
        nlpFilters: this.getState('nlpFilters'),
        ...data
      };
      const _opts = { ...opts };
      if (this.resultsContext === ResultsContext.NO_RESULTS) {
        _opts.showAppliedFilters = false;
      }
      return super.addChild(resultsHeaderData, type, {
        isUniversal: this._config.isUniversal,
        verticalURL: this.getVerticalURL(),
        verticalKey: this.verticalKey,
        ...this.resultsHeaderOpts,
        ..._opts
      });
    }
    return super.addChild(data, type, opts);
  }
}

const APPLY_SYNONYMS = (config) => ({
  icon: config.sectionTitleIconName || config.sectionTitleIconUrl,
  title: config.sectionTitle,
  ...config
});
