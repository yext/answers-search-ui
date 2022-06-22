import { basicResponseData, meta, locationBias } from '../sharedData';
import { allResNoFacets } from './allResNoFacets';
import { amaniData } from './amaniData';
import { tomData } from './tomData';
import deepEquals from 'lodash.isequal';
import { allResOneFacet } from './allResOneFacet';
import { allResTwoFacets } from './allResTwoFacets';
import { allResThreeFacets } from './allResThreeFacets';

export function generatePeopleVerticalSearchResponse (input, offset, facetFilters) {
  if (input === 'all') {
    return getAllResponse(facetFilters);
  }
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

function getAllResponse (facetFilters) {
  if (Object.keys(facetFilters).length === 0) {
    return allResNoFacets;
  }
  const cleanedFacets = Object.keys(facetFilters).reduce((prev, fieldId) => {
    if (facetFilters[fieldId].length === 0) {
      return prev;
    }
    prev[fieldId] = facetFilters[fieldId];
    return prev;
  }, {});
  const numAppliedFacets = Object.values(cleanedFacets).flatMap(v => v).length;

  function checkFacets (values, fieldId = 'c_employeeDepartment') {
    return facetsHasValues(cleanedFacets, fieldId, values);
  }

  if (numAppliedFacets === 1 && checkFacets(['Client Delivery [SO]'])) {
    return allResOneFacet;
  } else if (numAppliedFacets === 2 && checkFacets(['Client Delivery [SO]', 'Technology'])) {
    return allResTwoFacets;
  } else if (numAppliedFacets === 3 && checkFacets(['Client Delivery [SO]', 'Technology']) && checkFacets(['Frodo'], 'c_puppyPreference')) {
    return allResThreeFacets;
  } else {
    throw new Error('Unknown verical search facets request for "all" query. facetFilters: ' + JSON.stringify(facetFilters, null, 2));
  }
}

function facetsHasValues (facets, fieldId, valuesToCheck) {
  if (!facets[fieldId]) {
    return false;
  }
  const valuesThatExist = new Set(facets[fieldId].map(v => v[fieldId].$eq));
  return deepEquals(new Set(valuesToCheck), valuesThatExist);
}
