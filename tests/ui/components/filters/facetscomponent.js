import DOM from 'src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import DynamicFilters from '../../../../src/core/models/dynamicfilters';
import Storage from '../../../../src/core/storage/storage';
import FilterRegistry from '../../../../src/core/filters/filterregistry';

describe('Facets Component', () => {
  DOM.setup(document, new DOMParser());
  let COMPONENT_MANAGER, defaultConfig;

  const coreFacets = [{
    fieldId: 'c_acceptingNewPatients',
    displayName: 'Accepting New Patients',
    options: [
      {
        displayName: 'true',
        count: 1,
        selected: false,
        matcher: '$eq',
        value: true
      },
      {
        displayName: 'false',
        count: 1,
        selected: false,
        matcher: '$eq',
        value: false
      }
    ]
  }];

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));

    const storage = new Storage().init();
    const filterRegistry = new FilterRegistry(storage);

    const mockCore = {
      verticalSearch: jest.fn(),
      enableDynamicFilters: jest.fn(),
      storage: storage,
      filterRegistry: filterRegistry,
      setFacetFilterNodes: (availableFieldids = [], filterNodes = []) => {
        filterRegistry.setFacetFilterNodes(availableFieldids, filterNodes);
      }
    };
    COMPONENT_MANAGER = mockManager(mockCore);

    defaultConfig = {
      container: '#test-component'
    };
  });

  it('The facets component renders', () => {
    const component = COMPONENT_MANAGER.create('Facets', defaultConfig);
    const wrapper = mount(component);
    expect(wrapper.find('.yxt-Facets-container')).toHaveLength(1);
  });

  it('The transformFacets option supports boolean facets', () => {
    const transformFacets = facets => {
      facets.forEach(facet => {
        if (facet.fieldId === 'c_acceptingNewPatients') {
          facet.options.forEach(option => {
            if (option.value === false) { option.displayName = 'Not Accepting Patients'; }
            if (option.value === true) { option.displayName = 'Accepting Patients'; }
          });
        }
      });
      return facets;
    };
    const component = COMPONENT_MANAGER.create('Facets', {
      transformFacets,
      ...defaultConfig
    });
    const dynamicFilters = DynamicFilters.fromCore(coreFacets);
    component.core.storage.set(StorageKeys.DYNAMIC_FILTERS, dynamicFilters);
    const wrapper = mount(component);

    const expectedDisplayNames = [
      'Not Accepting Patients',
      'Accepting Patients'
    ];
    const actualDisplayNames = [];

    wrapper.find('.js-yxt-FilterOptions-optionLabel--name').forEach(node => {
      const displayName = node.text().trim();
      actualDisplayNames.push(displayName);
    });

    expect(actualDisplayNames).toEqual(expect.arrayContaining(expectedDisplayNames));
  });

  it('_transformBooleanFacets() makes boolean facets uppercase by default', () => {
    const component = COMPONENT_MANAGER.create('Facets', defaultConfig);
    const dynamicFilters = DynamicFilters.fromCore(coreFacets);
    component.core.storage.set(StorageKeys.DYNAMIC_FILTERS, dynamicFilters);
    const wrapper = mount(component);

    const expectedDisplayNames = [
      'True',
      'False'
    ];
    const actualDisplayNames = [];

    wrapper.find('.js-yxt-FilterOptions-optionLabel--name').forEach(node => {
      const displayName = node.text().trim();
      actualDisplayNames.push(displayName);
    });

    expect(actualDisplayNames).toEqual(expect.arrayContaining(expectedDisplayNames));
  });
});
