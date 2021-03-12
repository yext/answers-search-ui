/** @module AbstractResultsComponent */

import Component from '../component';

/**
 * AbstractResultsComponent is an abstraction for common functionality between {@link UniversalResultsComponent} and
 * {@link VerticalResultsComponent}.
 */
export default class AbstractResultsComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);
  }

  onMount () {
    const state = this.getState();
    ['preSearch', 'searchLoading', 'searchLoaded']
      .forEach(state => this.removeContainerClass(`yxt-Results--${state}`));

    switch (true) {
      case state.isPreSearch:
        this.addContainerClass(`yxt-Results--preSearch`);
        break;
      case state.isSearchLoading:
        this.addContainerClass(`yxt-Results--searchLoading`);
        break;
      case state.isSearchComplete:
        this.addContainerClass(`yxt-Results--searchComplete`);
        break;
    }
  }
}
