import http from 'http';
import handler from 'serve-handler';
import UniversalPage from './pageobjects/universalpage';

/**
 * This file contains acceptance tests for a universal search page.
 * Note that before any tests are run, a local HTTP server is spun
 * up to serve the search page and the dist directory of Answers.
 * This server is closed once all tests have completed.
 */
fixture`Universal search page works as expected`
  .before(async ctx => {
    const server = http.createServer((request, response) => {
      return handler(request, response);
    });
    server.listen(9999);
    ctx.server = server;
  })
  .after(async ctx => {
    ctx.server.close();
  })
  .page`http://localhost:9999/tests/acceptance/fixtures/html/universal`;

test('Basic universal flow', async t => {
  const searchComponent = UniversalPage.getSearchComponent();

  await searchComponent.enterQuery('Tom');
  await searchComponent.clearQuery();

  await searchComponent.enterQuery('ama');
  await searchComponent.getAutoComplete().selectOption('amani farooque phone number');

  const sections =
        await UniversalPage.getUniversalResultsComponent().getSections();
  await t.expect(sections.length).eql(2);

  const faqsSectionTitle = await sections[1].getTitle();
  await t.expect(faqsSectionTitle).eql('FAQS');
});
