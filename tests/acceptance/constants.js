export const VERTICAL_SEARCH_URL_REGEX = /v2\/accounts\/me\/search\/vertical\/query/;
export const UNIVERSAL_SEARCH_URL_REGEX = /v2\/accounts\/me\/search\/query/;
export const PORT = 9999;

const PAGE_DIR = `http://localhost:${PORT}/tests/acceptance/fixtures/html`;

export const UNIVERSAL_PAGE = `${PAGE_DIR}/universal`;
export const VERTICAL_PAGE = `${PAGE_DIR}/vertical`;
export const FACETS_PAGE = `${PAGE_DIR}/facets`;
export const FACETS_ON_LOAD_PAGE = `${PAGE_DIR}/facetsonload`;
export const FILTERBOX_PAGE = `${PAGE_DIR}/filterbox`;
export const UNIVERSAL_INITIAL_SEARCH_PAGE = `${PAGE_DIR}/universalinitialsearch`;
export const SEARCH_BAR_ONLY_PAGE = `${PAGE_DIR}/searchbaronly`;
