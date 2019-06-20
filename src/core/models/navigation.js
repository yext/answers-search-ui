export default class Navigation {
  constructor (tabOrder) {
    this.tabOrder = tabOrder || [];
  }

  static from (modules) {
    let nav = [];
    if (!modules || !Array.isArray(modules)) {
      return nav;
    }
    for (let i = 0; i < modules.length; i++) {
      nav.push(modules[i].verticalConfigId);
    }
    return new Navigation(nav);
  }
}
