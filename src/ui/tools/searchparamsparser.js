/** @module SearchParamsParser */

export default function buildSearchParameters (searchParameterConfigs) {
  let searchParameters = {
    sectioned: false,
    fields: []
  };
  if (searchParameterConfigs === undefined) {
    return searchParameters;
  }
  if (searchParameterConfigs.sectioned) {
    searchParameters.sectioned = searchParameterConfigs.sectioned;
  }
  searchParameters.fields = buildFields(searchParameterConfigs.fields);
  return searchParameters;
}

function buildFields (fieldConfigs) {
  if (fieldConfigs === undefined) {
    return [];
  }

  return fieldConfigs.map(fc => ({ fetchEntities: false, ...fc }));
}
