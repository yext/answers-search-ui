import FilterView from '../../../src/core/filters/filterview';
import Filter from '../../../src/core/models/filter';
import FilterMetadata from '../../../src/core/filters/filtermetadata';

describe('FilterView', () => {
  it('automatically gives FilterMetadata a fieldId attribute if not there', () => {
    const filter = {
      c_customField: {
        $eq: '2B'
      }
    };
    const metadata = {
      fieldName: 'Custom Field',
      displayValue: '2B'
    };
    const expectedMetadata = {
      fieldId: 'c_customField',
      ...metadata
    };
    const actualView = new FilterView({ filter, metadata });
    const expectedView = new FilterView({
      filter: filter,
      metadata: expectedMetadata
    });
    expect(actualView).toEqual(expectedView);
  });

  it('gives specified fieldId in metadata precedence', () => {
    const filter = {
      c_customField: {
        $eq: 'A2'
      }
    };
    const metadata = {
      fieldId: 'c_otherField'
    };
    const actualView = new FilterView({ filter, metadata });
    const expectedView = new FilterView({
      filter: filter,
      metadata: metadata
    });
    expect(actualView).toEqual(expectedView);
  });

  it('contains empty Filter and FilterMetadata even when unspecified', () => {
    const view = new FilterView();
    expect(view.filter).toBeInstanceOf(Filter);
    expect(view.metadata).toBeInstanceOf(FilterMetadata);
  });

  it('has the same behavior for empty, undefined, and unspecified data', () => {
    const nullView = new FilterView({});
    const emptyView = new FilterView();
    const undefinedView = new FilterView(undefined);
    expect(nullView).toEqual(emptyView);
    expect(nullView).toEqual(undefinedView);
  });
});
