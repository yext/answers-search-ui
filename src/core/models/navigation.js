/** @module Navigation */

export default class Navigation {
  constructor (tabOrder) {
    this.tabOrder = tabOrder || [];
    Object.freeze(this);
  }

  static from (modules) {
    const nav = [];
    if (!modules || !Array.isArray(modules)) {
      return nav;
    }
    for (let i = 0; i < modules.length; i++) {
      nav.push(modules[i].verticalConfigId);
    }
    return new Navigation(nav);
  }

  /**
   * Constructs a Navigation model from an search-core VerticalResults array
   *
   * @param {VerticalResults[]} verticalResults
   */
  static fromCore (verticalResults) {
    const verticalKeys = verticalResults.map(result => result.verticalKey);
    return new Navigation(verticalKeys);
  }
}
