import puppeteer from 'puppeteer';
import percySnapshot from '@percy/puppeteer';
import http from 'http';
import handler from 'serve-handler';

(async () => {
  const server = await setupServer();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  async function snap (slug, name) {
    await page.goto(`http://localhost:9999/tests/acceptance/fixtures/html/${slug}`);
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
