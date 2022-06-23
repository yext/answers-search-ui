import { basicResponseData, meta, locationBias } from '../sharedData';
import { allResNoFacets } from './allResNoFacets';
import { amaniData } from './amaniData';
import { tomData } from './tomData';
import deepEquals from 'lodash.isequal';
import { allResOneFacet } from './allResOneFacet';
import { allResTwoFacets } from './allResTwoFacets';
import { allResThreeFacets } from './allResThreeFacets';
import { allRes25MileRadius } from './allRes25MileRadius';
import { allResTwoStaticFilters } from './allResTwoStaticFilters';
import { allResOneStaticFilter } from './allResOneStaticFilter';

export function generatePeopleVerticalSearchResponse (input, offset, filterParams) {
  if (input === 'all' || input === '') {
    return getAllResponse(filterParams);
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

function getAllResponse (filterParams) {
  const { facetFilters, locationRadius, filters } = filterParams;

  if (locationRadius === 40233.6) {
    return allRes25MileRadius;
  } else if (locationRadius === 1609000) {
    return allResNoFacets;
  } else if (locationRadius) {
    throw new Error('Unrecognized locationRadius when looking for fixture: ' + locationRadius);
  }

  if (deepEquals({ c_puppyPreference: { $eq: 'Marty' } }, filters)) {
    return allResOneStaticFilter;
  } else if (deepEquals({ $or: [{ c_puppyPreference: { $eq: 'Marty' } }, { c_puppyPreference: { $eq: 'Frodo' } }] }, filters)) {
    return allResTwoStaticFilters;
  } else if (filters?.['builtin.location']) {
    // This case is for FilterSearch test - these tests don't care about the contents of the results,
    // so they can use allResNoFacets
    return allResNoFacets;
  } else if (filters) {
    throw new Error('Unrecognized static filters when looking for fixture: ' + JSON.stringify(filters));
  }

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
  if (numAppliedFacets === 0) {
    return allResNoFacets;
  } else if (numAppliedFacets === 1 && checkFacets(['Client Delivery [SO]'])) {
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
