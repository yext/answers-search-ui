export default class Navigation {
  constructor(modules) {
    this.tabOrder = Navigation.from(modules);
  }

  static from(modules) {
    let nav = [];
    if (!modules || !Array.isArray(modules)) {
      return nav;
    }
    for (let i = 0; i < modules.length; i ++) {
      nav.push(modules[i].verticalConfigId)
    }
    return nav;
  }
}