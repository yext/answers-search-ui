export const VERTICAL_SEARCH_URL_REGEX = /v2\/accounts\/me\/answers\/vertical\/query/;
export const UNIVERSAL_SEARCH_URL_REGEX = /v2\/accounts\/me\/answers\/query/;
export const PORT = 9999;

const PAGE_DIR = `http://localhost:${PORT}/tests/acceptance/fixtures/html`;

export const UNIVERSAL_PAGE = `${PAGE_DIR}/universal.html`;
export const VERTICAL_PAGE = `${PAGE_DIR}/vertical.html`;
export const FACETS_PAGE = `${PAGE_DIR}/facets.html`;
export const FACETS_ON_LOAD_PAGE = `${PAGE_DIR}/facetsonload.html`;
export const FILTERBOX_PAGE = `${PAGE_DIR}/filterbox.html`;
export const UNIVERSAL_INITIAL_SEARCH_PAGE = `${PAGE_DIR}/universalinitialsearch.html`;
export const SEARCH_BAR_ONLY_PAGE = `${PAGE_DIR}/searchbaronly.html`;
