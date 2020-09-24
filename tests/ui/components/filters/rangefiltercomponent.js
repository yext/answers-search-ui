import DOM from 'src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import Filter from 'src/core/models/filter';
import FilterMetadata from '../../../../src/core/filters/filtermetadata';

describe('range filter component', () => {
  DOM.setup(document, new DOMParser());

  let COMPONENT_MANAGER, defaultConfig, setStaticFilterNodes;
  const metadataFormatters = {
    greaterThanEqual: min => `≥ ${min}`,
    lessThanEqual: max => `≤ ${max}`,
    inclusiveRange: (min, max) => `${min} - ${max}`
  };

  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
    setStaticFilterNodes = jest.fn();

    const mockCore = {
      setStaticFilterNodes: setStaticFilterNodes,
      filterRegistry: {
        setStaticFilterNodes: setStaticFilterNodes
      }
    };

    COMPONENT_MANAGER = mockManager(mockCore);

    defaultConfig = {
      container: '#test-component'
    };
  });

  it('renders correctly for default values', () => {
    const component = COMPONENT_MANAGER.create('RangeFilter', defaultConfig);
    const wrapper = mount(component);
    expect(component._range.min).toEqual(0);
    expect(component._range.max).toEqual(10);
    const minInputs = wrapper.find('input[data-key="min"]');
    expect(minInputs).toHaveLength(1);
    expect(minInputs.props().value).toEqual('0');
    const maxInputs = wrapper.find('input[data-key="max"]');
    expect(maxInputs.props().value).toEqual('10');
    expect(maxInputs).toHaveLength(1);
  });

  it('correctly renders title, minLabel, maxLabel', () => {
    const config = {
      ...defaultConfig,
      title: 'Flowers for m[A]chines',
      minLabel: 'or not to [B]e',
      maxLabel: 'meaningless [C]ode'
    };
    const component = COMPONENT_MANAGER.create('RangeFilter', config);
    const wrapper = mount(component);
    expect(wrapper.find('legend').first().text()).toEqual(config.title);
    const labelEls = wrapper.find('label');
    expect(labelEls).toHaveLength(2);
    expect(labelEls.at(0).text()).toEqual(config.minLabel);
    expect(labelEls.at(1).text()).toEqual(config.maxLabel);
  });

  it('correctly creates filter nodes on change', () => {
    const config = {
      ...defaultConfig,
      field: 'yorha',
      title: 'Flowers for m[A]chines',
      initialMin: -1,
      initialMax: 1
    };
    let min = config.initialMin;
    let max = config.initialMax;
    const { field, title } = config;

    const component = COMPONENT_MANAGER.create('RangeFilter', config);
    let filter = Filter.inclusiveRange(field, min, max);
    let metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.inclusiveRange(min, max)
    });
    min = component._range.min;
    max = component._range.max;
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);

    // Clear the min value
    min = '';
    component._updateRange('min', min);
    filter = Filter.lessThanEqual(field, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.lessThanEqual(max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);

    // Set the min value again
    min = 0;
    component._updateRange('min', min);
    filter = Filter.inclusiveRange(field, min, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.inclusiveRange(min, max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(2);

    // Clear the max value
    max = '';
    component._updateRange('max', max);
    filter = Filter.greaterThanEqual(field, min);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.greaterThanEqual(min)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(3);

    // Set the max value again
    max = 2;
    component._updateRange('max', max);
    filter = Filter.inclusiveRange(field, min, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.inclusiveRange(min, max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(4);

    // Clear both values
    min = '';
    max = '';
    component._updateRange('max', min);
    component._updateRange('min', max);
    filter = Filter.empty();
    metadata = new FilterMetadata({
      fieldName: title
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(6);

    // Set both values, finally done!
    min = -1;
    max = 0;
    component._updateRange('min', min);
    component._updateRange('max', max);
    filter = Filter.inclusiveRange(field, min, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.inclusiveRange(min, max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(8);
  });

  it('correctly creates filter node when min equals max', () => {
    const config = {
      ...defaultConfig,
      field: 'yorha',
      title: 'Flowers for m[A]chines',
      initialMin: 0,
      initialMax: 0
    };
    const min = config.initialMin;
    const { field, title } = config;

    const component = COMPONENT_MANAGER.create('RangeFilter', config);
    const filter = Filter.equal(field, min);
    expect(component._buildFilter()).toEqual(filter);
    const metadata = new FilterMetadata({
      fieldName: title,
      displayValue: min
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
  });
});
