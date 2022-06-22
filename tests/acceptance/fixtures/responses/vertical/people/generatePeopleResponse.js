import { basicResponseData, meta, locationBias } from '../sharedData';
import { amaniData } from './amaniData';
import { tomData } from './tomData';

export function generatePeopleVerticalSearchResponse (_input, offset) {
  const verticalSearchResponse = {
    meta,
    response: {
      ...basicResponseData,
      resultsCount: 3,
      results: [amaniData],
      locationBias
    }
  };

  if (offset === '1') {
    verticalSearchResponse.response.results = [tomData];
  }
  return verticalSearchResponse;
}
