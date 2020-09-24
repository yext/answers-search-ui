import DOM from 'src/ui/dom/dom';
import { mount } from 'enzyme';
import mockManager from '../../../setup/managermocker';
import Filter from 'src/core/models/filter';
import FilterMetadata from '../../../../src/core/filters/filtermetadata';

describe('date range filter component', () => {
  DOM.setup(document, new DOMParser());

  let COMPONENT_MANAGER, defaultConfig, setStaticFilterNodes;
  const metadataFormatters = {
    greaterThan: min => `After ${min}`,
    greaterThanEqual: min => `${min} or later`,
    lessThan: max => `Before ${max}`,
    lessThanEqual: max => `${max} and earlier`,
    exclusiveRange: (min, max) => `${min} - ${max}`,
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
    const component = COMPONENT_MANAGER.create('DateRangeFilter', defaultConfig);
    const wrapper = mount(component);
    const today = new Date();
    const todayString = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(2, '0')}-${`${today.getDate()}`.padStart(2, '0')}`;
    expect(component._date.min).toEqual(todayString);
    expect(component._date.max).toEqual(todayString);
    const minInputs = wrapper.find('input[data-key="min"]');
    expect(minInputs).toHaveLength(1);
    expect(minInputs.props().value).toEqual(todayString);
    const maxInputs = wrapper.find('input[data-key="max"]');
    expect(maxInputs.props().value).toEqual(todayString);
    expect(maxInputs).toHaveLength(1);
  });

  it('correctly renders title, minLabel, maxLabel', () => {
    const config = {
      ...defaultConfig,
      title: 'Flowers for m[A]chines',
      minLabel: 'or not to [B]e',
      maxLabel: 'meaningless [C]ode'
    };
    const component = COMPONENT_MANAGER.create('DateRangeFilter', config);
    const wrapper = mount(component);
    expect(wrapper.find('legend').first().text()).toEqual(config.title);
    const labelEls = wrapper.find('label');
    expect(labelEls).toHaveLength(2);
    expect(labelEls.at(0).text()).toEqual(config.minLabel);
    expect(labelEls.at(1).text()).toEqual(config.maxLabel);
  });

  it('correctly creates filter node when isExclusive is true', () => {
    const config = {
      ...defaultConfig,
      field: 'yorha',
      title: 'Flowers for m[A]chines',
      initialMin: '2019-08-01',
      initialMax: '2020-08-01',
      isExclusive: true
    };
    let min = config.initialMin;
    let max = config.initialMax;
    const { field, title } = config;

    const component = COMPONENT_MANAGER.create('DateRangeFilter', config);
    let filter = Filter.exclusiveRange(field, min, max);
    let metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.exclusiveRange(min, max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);

    // Clear the min value
    min = '';
    component._updateRange('min', min);
    filter = Filter.lessThan(field, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.lessThan(max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);

    // Clear the max value, set the min value
    // Set the min value again
    min = '2020-07-30';
    max = '';
    component._updateRange('min', min);
    component._updateRange('max', max);

    // Clear the max value
    filter = Filter.greaterThan(field, min);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.greaterThan(min)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
  });

  it('correctly creates filter node when isExclusive is false', () => {
    const config = {
      ...defaultConfig,
      field: 'yorha',
      title: 'Flowers for m[A]chines',
      initialMin: '2019-08-01',
      initialMax: '2020-08-01'
    };
    let min = config.initialMin;
    let max = config.initialMax;
    const { field, title } = config;

    const component = COMPONENT_MANAGER.create('DateRangeFilter', config);
    let filter = Filter.inclusiveRange(field, min, max);
    let metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.inclusiveRange(min, max)
    });
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
    min = '2020-07-30';
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
    max = '2021-01-01';
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
    min = '2020-08-15';
    max = '2021-02-01';
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

  it('correctly creates filter node when isExclusive is true', () => {
    const config = {
      ...defaultConfig,
      field: 'yorha',
      title: 'Flowers for m[A]chines',
      initialMin: '2019-08-01',
      initialMax: '2020-08-01',
      isExclusive: true
    };
    let min = config.initialMin;
    let max = config.initialMax;
    const { field, title } = config;

    const component = COMPONENT_MANAGER.create('DateRangeFilter', config);
    let filter = Filter.exclusiveRange(field, min, max);
    let metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.exclusiveRange(min, max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);

    // Clear the min value
    min = '';
    component._updateRange('min', min);
    filter = Filter.lessThan(field, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.lessThan(max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(1);

    // Set the min value again
    min = '2020-07-30';
    component._updateRange('min', min);
    filter = Filter.exclusiveRange(field, min, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.exclusiveRange(min, max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(2);

    // Clear the max value
    max = '';
    component._updateRange('max', max);
    filter = Filter.greaterThan(field, min);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.greaterThan(min)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(3);

    // Set the max value again
    max = '2021-01-01';
    component._updateRange('max', max);
    filter = Filter.exclusiveRange(field, min, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.exclusiveRange(min, max)
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
    min = '2020-08-15';
    max = '2021-02-01';
    component._updateRange('min', min);
    component._updateRange('max', max);
    filter = Filter.exclusiveRange(field, min, max);
    metadata = new FilterMetadata({
      fieldName: title,
      displayValue: metadataFormatters.exclusiveRange(min, max)
    });
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
    expect(setStaticFilterNodes.mock.calls).toHaveLength(8);
  });

  it('correctly creates filter node when min and max are equal and isExclusive is true', () => {
    const config = {
      ...defaultConfig,
      field: 'yorha',
      title: 'Flowers for m[A]chines',
      initialMin: '2019-08-01',
      initialMax: '2019-08-01',
      isExclusive: true
    };
    const title = config.title;

    const component = COMPONENT_MANAGER.create('DateRangeFilter', config);
    const filter = Filter.empty();
    expect(component._buildFilter()).toEqual(filter);
    const metadata = new FilterMetadata({
      fieldName: title,
      displayValue: ''
    });
    expect(component._buildFilterMetadata()).toEqual(metadata);
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
  });

  it('correctly creates filter node when min equals max and isExclusive is false', () => {
    const config = {
      ...defaultConfig,
      field: 'yorha',
      title: 'Flowers for m[A]chines',
      initialMin: '2019-08-01',
      initialMax: '2019-08-01',
      isExclusive: false
    };
    const min = config.initialMin;
    const { field, title } = config;

    const component = COMPONENT_MANAGER.create('DateRangeFilter', config);
    const filter = Filter.equal(field, min);
    expect(component._buildFilter()).toEqual(filter);
    const metadata = new FilterMetadata({
      fieldName: title,
      displayValue: min
    });
    expect(component._buildFilterMetadata()).toEqual(metadata);
    expect(component.getFilterNode().getFilter()).toEqual(filter);
    expect(component.getFilterNode().getMetadata()).toEqual(metadata);
  });
});
