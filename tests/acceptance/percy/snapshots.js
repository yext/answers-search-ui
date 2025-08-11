const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');
const http = require('http');
const handler = require('serve-handler');
const PageNavigator = require('../pagenavigator');

(async () => {
  const server = await setupServer();
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const navigator = new PageNavigator(page, 'http://localhost:9999/tests/acceptance/fixtures/html');

  async function snap (slug, name) {
    await navigator.goto(slug);
    await percySnapshot(page, name);
  }
  await snap('facets.html', 'facets page pre search');
  await snap('no-unsafe-eval.html', 'no unsafe eval CSP');

  await browser.close();
  await server.close();
})();

/**
 * Initalizes the server to port 9999
 */
async function setupServer () {
  const server = http.createServer((request, response) => {
    return handler(request, response);
  });
  server.listen(9999);
  return server;
}
