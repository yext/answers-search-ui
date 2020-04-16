import FilterBoxComponentBlock from './filterboxcomponent';

/**
 * This class models user interactions with the {@link FacetsComponent}.
 */
export default class FacetsComponentBlock {
  getFilterBox () {
    return new FilterBoxComponentBlock('.js-yxt-Facets');
  }
}
