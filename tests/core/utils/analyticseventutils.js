import { createRemovedFilterEvent, optionTypeFromFilterType } from 'src/core/utils/analyticseventutils';
import AnalyticsEvent from 'src/core/analytics/analyticsevent';
import FilterType from 'src/core/filters/filtertype';

describe('createRemovedFilterEvent', () => {
  it('creates REMOVED_FILTER analytics event properly', () => {
    const options = {
      removedFilter: '{} (removed filter)',
      optionType: 'any string (option type)',
      removedFromComponent: 'any component (removed from component)',
      verticalKey: 'any string (vertical key)'
    };
    const { removedFilter, optionType, removedFromComponent, verticalKey } = options;
    const expectedEvent = new AnalyticsEvent('REMOVED_FILTER');
    expectedEvent.addOptions({ ...options });
    const actualEvent = createRemovedFilterEvent(removedFilter, optionType, removedFromComponent, verticalKey);
    expect(actualEvent).toEqual(expectedEvent);
  });
});

describe('optionTypeFromFilterType', () => {
  it('works for FilterType.FACET', () => {
    expect(optionTypeFromFilterType(FilterType.FACET)).toEqual('FACET_FILTER');
  });

  it('works for FilterType.RADIUS', () => {
    expect(optionTypeFromFilterType(FilterType.RADIUS)).toEqual('RADIUS_FILTER');
  });

  it('works for FilterType.STATIC', () => {
    expect(optionTypeFromFilterType(FilterType.STATIC)).toEqual('STATIC_FILTER');
  });

  it('throws error by default', () => {
    expect(() => optionTypeFromFilterType('garbanzo bEANS')).toThrow();
  });
});
