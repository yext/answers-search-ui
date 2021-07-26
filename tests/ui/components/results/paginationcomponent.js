import { mount } from 'enzyme';

import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import Storage from '../../../../src/core/storage/storage';
import PaginationComponent from '../../../../src/ui/components/results/paginationcomponent';
import SearchStates from '../../../../src/core/storage/searchstates';
import SearchConfig from '../../../../src/core/models/searchconfig';

const createCore = () => {
  // pagination will hide itself if there are no results, so we fake the relevant storage.
  const storage = new Storage().init();
  storage.set(StorageKeys.VERTICAL_RESULTS, { searchState: SearchStates.SEARCH_COMPLETE, resultsCount: 21 });
  storage.set(StorageKeys.SEARCH_OFFSET, 0);
  storage.set(StorageKeys.SEARCH_CONFIG, new SearchConfig({ limit: 5 }));
  storage.set(StorageKeys.NO_RESULTS_CONFIG, { displayAllResults: true });

  return {
    verticalPage: () => {},
    storage: storage
  };
};

DOM.setup(document, new DOMParser());

let COMPONENT_MANAGER, defaultConfig, storage;

beforeEach(() => {
  COMPONENT_MANAGER = mockManager(createCore());
  storage = COMPONENT_MANAGER.core.storage;
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

  defaultConfig = {
    container: '#test-component',
    verticalKey: 'verticalKey'
  };
});

describe('rendering the arrows', () => {
  it('renders no arrows correctly', () => {
    const component = COMPONENT_MANAGER.create('Pagination', {
      ...defaultConfig,
      showFirstAndLastButton: false
    });
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-Pagination-doubleChevron--left')).toHaveLength(0);
    expect(wrapper.find('.yxt-Pagination-doubleChevron')).toHaveLength(0);
  });

  it('renders both arrows correctly', () => {
    const component = COMPONENT_MANAGER.create('Pagination', {
      ...defaultConfig,
      showFirstAndLastButton: true
    });
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-Pagination-doubleChevron--left')).toHaveLength(1);
    expect(wrapper.find('.yxt-Pagination-doubleChevron')).toHaveLength(1);
  });

  it('renders one arrow correctly', () => {
    const component = COMPONENT_MANAGER.create('Pagination', {
      ...defaultConfig,
      showFirstAndLastButton: true,
      showFirst: false
    });
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-Pagination-doubleChevron--left')).toHaveLength(0);
    expect(wrapper.find('.yxt-Pagination-doubleChevron')).toHaveLength(1);
  });
});

describe('rendering the page numbers', () => {
  it('renders the current page', () => {
    const component = COMPONENT_MANAGER.create('Pagination', {
      ...defaultConfig,
      maxVisiblePagesDesktop: 1,
      pageLabel: 'Page'
    });
    const wrapper = mount(component);
    expect(wrapper.find('#active-page').text()).toEqual('Page 1');
  });

  it('renders the current number of additional pages', () => {
    const component = COMPONENT_MANAGER.create('Pagination', {
      ...defaultConfig,
      maxVisiblePagesDesktop: 5
    });
    const wrapper = mount(component);
    // We expect 4 un-hidden links, combined with the active page for a total of 5, as configured.
    expect(wrapper.find('.js-yxt-Pagination-link').not('.desktop-hidden')).toHaveLength(4);
  });

  it('does not duplicate the first/last page button when on that page', () => {
    const component = COMPONENT_MANAGER.create('Pagination', {
      ...defaultConfig,
      maxVisiblePagesDesktop: 3,
      pinFirstAndLastPage: true
    });
    const wrapper = mount(component);
    // The last-page button counts as a link as well.
    expect(wrapper.find('.js-yxt-Pagination-link').not('.desktop-hidden')).toHaveLength(3);
    expect(wrapper.find('[data-number="1"]')).toHaveLength(1);
  });

  it('updates pages', () => {
    const paginate = jest.fn();
    const component = COMPONENT_MANAGER.create('Pagination', {
      ...defaultConfig,
      maxVisiblePagesDesktop: 3,
      pageLabel: 'Page',
      onPaginate: paginate
    });
    const wrapper = mount(component);
    expect(wrapper.find('.js-yxt-Pagination-link')).toHaveLength(4);
    const next = wrapper.find('.js-yxt-Pagination-next');
    expect(next).toHaveLength(1);
    next.first().simulate('click');
    expect(paginate).toHaveBeenCalledWith(2, 1, 5);
  });
});

describe('properly interacts with storage', () => {
  it('the storage search-config.limit and results.resultsCount determine the total page count', () => {
    storage.set(StorageKeys.VERTICAL_RESULTS,
      { searchState: SearchStates.SEARCH_COMPLETE, resultsCount: 20 }
    );

    const component = COMPONENT_MANAGER.create('Pagination', defaultConfig);

    const wrapper = mount(component);

    const paginationLink = wrapper.find('.yxt-Pagination-link').first();
    const paginationInfo = JSON.parse(paginationLink.prop('data-eventoptions'));

    expect(paginationInfo.totalPageCount).toEqual(4);
  });

  it('the storage search-config.limit and search-offset determine the current page number', () => {
    storage.set(StorageKeys.SEARCH_OFFSET, 10);

    const component = COMPONENT_MANAGER.create('Pagination', defaultConfig);

    const wrapper = mount(component);

    const activePageSpan = wrapper.find('#active-page');

    expect(activePageSpan.text()).toEqual('Page 3');
  });

  it('updating the page sets storage searchOffset', () => {
    storage.set(StorageKeys.SEARCH_OFFSET, 0);

    const component = COMPONENT_MANAGER.create('Pagination', defaultConfig);
    const wrapper = mount(component);

    const nextPageButton = wrapper.find('.js-yxt-Pagination-next');
    nextPageButton.simulate('click');

    const searchOffset = storage.get(StorageKeys.SEARCH_OFFSET);
    expect(searchOffset).toEqual(5);
  });

  it('updating the page sets persistent storage searchOffset', () => {
    storage.set(StorageKeys.SEARCH_OFFSET, 0);
    const component = COMPONENT_MANAGER.create('Pagination', defaultConfig);
    const wrapper = mount(component);

    const nextPageButton = wrapper.find('.js-yxt-Pagination-next');
    nextPageButton.simulate('click');
    const urlState = storage.getUrlWithCurrentState();
    expect(urlState).toEqual('search-offset=5');
  });

  it('listens to updates to VERTICAL_RESULTS in storage', () => {
    storage.delete(StorageKeys.VERTICAL_RESULTS);
    const component = COMPONENT_MANAGER.create(PaginationComponent.type, defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.exists('.yxt-Pagination')).toBeFalsy();
    storage.set(StorageKeys.VERTICAL_RESULTS, {
      searchState: SearchStates.SEARCH_COMPLETE,
      resultsCount: 21,
      results: Array.from({ length: 21 })
    });
    wrapper.update();
    expect(wrapper.exists('.yxt-Pagination')).toBeTruthy();
  });
});
