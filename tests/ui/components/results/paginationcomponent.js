import { mount } from 'enzyme';

import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';

const mockedCore = () => {
  // pagination will hide itself if there are no results, so we fake the relevant global storage.
  const storage = {
    'vertical-results': { searchState: 'search-complete', resultsCount: 21 },
    'search-offset': 0,
    'search-config': { limit: 5 },
    'no-results-config': { displayAllResults: true }
  };
  return {
    verticalSearch: () => {},
    verticalPage: () => {},
    globalStorage: {
      getState: storageKey => storage[storageKey] || undefined,
      getAll: () => [],
      delete: storageKey => {},
      set: (key, value) => {
        storage[key] = value;
      },
      on: () => {}
    },
    persistentStorage: {
      set: (namespace, offsetIndex) => {
        expect(namespace).toBe(StorageKeys.SEARCH_OFFSET);
        expect(typeof offsetIndex).toBe('number');
      },
      delete: storageKey => expect(storageKey).toBe(StorageKeys.SEARCH_OFFSET)
    }
  };
};

DOM.setup(document, new DOMParser());

const COMPONENT_MANAGER = mockManager(mockedCore());

describe('rendering the arrows', () => {
  let defaultConfig;
  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    defaultConfig = {
      container: '#test-component',
      verticalKey: 'verticalKey'
    };
  });

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
  let defaultConfig;
  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    defaultConfig = {
      container: '#test-component',
      verticalKey: 'verticalKey'
    };
  });

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
