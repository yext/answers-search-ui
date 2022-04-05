import DOM from 'src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import StorageKeys from '../../../../src/core/storage/storagekeys';
import DynamicFilters from '../../../../src/core/models/dynamicfilters';
import Storage from '../../../../src/core/storage/storage';
import FilterRegistry from '../../../../src/core/filters/filterregistry';
import ResultsContext from '../../../../src/core/storage/resultscontext';

function setupDOM () {
  const bodyEl = DOM.query('body');
  DOM.empty(bodyEl);
  DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
}

function setupComponentManager () {
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
  return mockManager(mockCore);
}

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
    setupDOM();
    COMPONENT_MANAGER = setupComponentManager();
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

  it('filter options can be specified with transformFacets', () => {
    const expectedFacetDisplayName = 'Custom Facet';
    const transformFacets = facets => {
      facets.forEach(facet => {
        facet.label = expectedFacetDisplayName;
        return facet;
      });
      return facets;
    };
    const component = COMPONENT_MANAGER.create('Facets', {
      transformFacets,
      defaultConfig
    });
    const dynamicFilters = DynamicFilters.fromCore(coreFacets);
    component.core.storage.set(StorageKeys.DYNAMIC_FILTERS, dynamicFilters);
    const wrapper = mount(component);

    const firstFacet = wrapper.find('.yxt-FilterOptions-label');
    const firstFacetDisplayName = firstFacet.text().trim();

    expect(firstFacetDisplayName).toEqual(expectedFacetDisplayName);
  });

  it('does not try to remove the child filterbox when it was already removed', () => {
    const remove = jest.fn();
    COMPONENT_MANAGER.remove = remove;
    const component = COMPONENT_MANAGER.create('Facets', defaultConfig);
    const storage = component.core.storage;
    const dynamicFilters = DynamicFilters.fromCore(coreFacets);
    storage.set(StorageKeys.DYNAMIC_FILTERS, dynamicFilters);
    mount(component);
    expect(remove).toHaveBeenCalledTimes(2);
    storage.set(StorageKeys.DYNAMIC_FILTERS, { resultsContext: ResultsContext.NO_RESULTS });
    expect(remove).toHaveBeenCalledTimes(4);
    storage.set(StorageKeys.DYNAMIC_FILTERS, { resultsContext: ResultsContext.NO_RESULTS });
    expect(remove).toHaveBeenCalledTimes(4);
  });
});

describe('numerical facets', () => {
  DOM.setup(document, new DOMParser());
  setupDOM();
  const component = setupComponentManager().create('Facets', {
    container: '#test-component',
    searchOnChange: true,
    expand: false
  });
  const dynamicFilters = DynamicFilters.fromCore([
    {
      fieldId: 'price',
      displayName: 'Price',
      options: [
        {
          displayName: '0 - 23',
          count: 20,
          selected: false,
          matcher: '$between',
          value: {
            start: { matcher: '$ge', value: 0 },
            end: { matcher: '$lt', value: 23 }
          }
        },
        {
          displayName: '23 - 60',
          count: 20,
          selected: false,
          matcher: '$between',
          value: {
            start: { matcher: '$ge', value: 23 },
            end: { matcher: '$lt', value: 60 }
          }
        }
      ]
    }
  ]);
  const storage = component.core.storage;
  storage.set(StorageKeys.DYNAMIC_FILTERS, dynamicFilters);
  const wrapper = mount(component);

  it('renders numerical facets correctly', () => {
    const optionLabelNodes = wrapper.find('.js-yxt-FilterOptions-optionLabel--name');
    expect(optionLabelNodes).toHaveLength(2);
    expect(optionLabelNodes.at(0).text().trim()).toEqual('0 - 23');
    expect(optionLabelNodes.at(1).text().trim()).toEqual('23 - 60');
  });

  it('applies numerical facets correctly', () => {
    const optionLabelNodes = wrapper.find('.js-yxt-FilterOptions-optionLabel');
    expect(storage.get(StorageKeys.FACET_FILTER_NODES)).toHaveLength(0);
    optionLabelNodes.at(0).simulate('click');
    const facetFilterNodes = storage.get(StorageKeys.FACET_FILTER_NODES);
    expect(facetFilterNodes).toHaveLength(1);
    expect(facetFilterNodes[0].filter).toEqual({
      price: {
        $between: {
          end: {
            matcher: '$lt',
            value: 23
          },
          start: {
            matcher: '$ge',
            value: 0
          }
        }
      }
    });
    expect(facetFilterNodes[0].metadata).toEqual({
      fieldName: 'Price',
      displayValue: '0 - 23',
      filterType: 'filter-type-facet'
    });
  });
});
