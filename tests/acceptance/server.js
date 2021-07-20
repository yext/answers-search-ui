import http from 'http';
import handler from 'serve-handler';

/**
 * Initalizes the server to port 9999
 * @param {*} ctx the context from the fixture
 */
export async function setupServer (ctx) {
  const server = http.createServer((request, response) => {
    return handler(request, response);
  });
  server.listen(9999);
  ctx.server = server;
}

/**
 * Engages the shutdown procedures for the server
 * @param {*} ctx the context from the fixture
 */
export async function shutdownServer (ctx) {
  ctx.server.close();
}

export const UNIVERSAL_PAGE = 'http://localhost:9999/tests/acceptance/fixtures/html/universal';
export const VERTICAL_PAGE = 'http://localhost:9999/tests/acceptance/fixtures/html/vertical';
export const FACETS_PAGE = 'http://localhost:9999/tests/acceptance/fixtures/html/facets';
export const FACETS_ON_LOAD_PAGE = 'http://localhost:9999/tests/acceptance/fixtures/html/facetsonload';
export const FILTERBOX_PAGE = 'http://localhost:9999/tests/acceptance/fixtures/html/filterbox';
export const UNIVERSAL_INITIAL_SEARCH_PAGE = 'http://localhost:9999/tests/acceptance/fixtures/html/universalinitialsearch';
