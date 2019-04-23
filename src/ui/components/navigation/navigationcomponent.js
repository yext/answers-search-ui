import Component from '../component';

export default class NavigationComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    /**
     * The data storage key
     * @type {string}
     */
    this.moduleId = 'navigation';

    /**
     * The handlebars template to use
     * @type {string}
     */
    this._templateName = 'navigation/navigation';

    /**
     * The order of the tabs, parsed from configuration.
     * This gets updated based on the server results
     * @type {Array.<String>} The list of VS configIds
     */
    this._tabOrder = [];

    /**
     * The data container for each tab, keyed by VS configId
     * @type {Object.<String, Object>}
     */
    this._tabs = {};

    // Parse the options and build out our tabs and
    // tabOrder from the settings provided.
    for (let i = 0; i < opts.tabs.length; i++) {
      let tab = opts.tabs[i];
      this._tabOrder.push(tab.configId);
      this._tabs[tab.configId] = {
        label: tab.label,
        url: tab.url
      };
    }
  }

  static get type() {
    return 'Navigation';
  }

  /**
   * Since the server data only provides a list of
   * VS configIds, we need to compute and transform
   * the data into the proper format for rendering.
   *
   * @override
   */
  setState(data) {
    if (data.tabOrder !== undefined) {
      this._tabOrder = data.tabOrder;
    }

    // Since our tab configuration is local, we generate it
    // based on the feedback from the server
    let tabs = [];
    for (let i = 0; i < this._tabOrder.length; i ++) {
      let tab = this._tabs[this._tabOrder[i]];
      if (tab !== undefined) {
        tabs.push(tab)
      }
    }

    // Because the tab order from server only includes
    // sections that have results, we need to manually add
    // the other tabs to the end of the array
    for (let configId in this._tabs) {
      if (this._tabOrder.indexOf(configId) <= -1) {
        tabs.push(this._tabs[configId]);
      }
    }

    return super.setState({
      tabs: tabs
    });
  }

  render(data) {
    return super.render(data);
  }
}