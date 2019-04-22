import Component from '../component';

export default class NavigationComponent extends Component {
  constructor(opts = {}) {
    super(opts);

    this.moduleId = 'navigation';

    this._templateName = 'navigation/navigation';

    this._tabOrder = [];

    this._tabs = {};
    for (let i = 0; i < opts.tabs.length; i++) {
      let tab = opts.tabs[i];

      this._tabOrder.push(tab.configId);
      this._tabs[tab.configId] = {
        label: tab.label,
        url: tab.url
      };
    }
  }

  setState(data) {
    if (data.tabOrder !== undefined) {
      this._tabOrder = data.tabOrder;
    }

    let tabs = [];
    for (let i = 0; i < this._tabOrder.length; i ++) {
      let tab = this._tabs[this._tabOrder[i]];
      if (tab !== undefined) {
        tabs.push(tab)
      }
    }

    return super.setState({
      tabs: tabs
    });
  }

  render(data) {
    return super.render(data);
  }


  static get type() {
    return 'Navigation';
  }
}