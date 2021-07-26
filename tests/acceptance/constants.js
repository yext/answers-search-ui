module.exports.VERTICAL_SEARCH_URL_REGEX = /v2\/accounts\/me\/answers\/vertical\/query/;
module.exports.UNIVERSAL_SEARCH_URL_REGEX = /v2\/accounts\/me\/answers\/query/;
module.exports.PORT = 9999;

module.exports.UNIVERSAL_PAGE = `http://localhost:${this.PORT}/tests/acceptance/fixtures/html/universal`;
module.exports.VERTICAL_PAGE = `http://localhost:${this.PORT}/tests/acceptance/fixtures/html/vertical`;
module.exports.FACETS_PAGE = `http://localhost:${this.PORT}/tests/acceptance/fixtures/html/facets`;
module.exports.FACETS_ON_LOAD_PAGE = `http://localhost:${this.PORT}/tests/acceptance/fixtures/html/facetsonload`;
module.exports.FILTERBOX_PAGE = `http://localhost:${this.PORT}/tests/acceptance/fixtures/html/filterbox`;
module.exports.UNIVERSAL_INITIAL_SEARCH_PAGE = `http://localhost:${this.PORT}/tests/acceptance/fixtures/html/universalinitialsearch`;
