import VerticalPage from '../pageobjects/verticalpage';
import { setupServer, shutdownServer } from '../server';

fixture`Vertical search page works as expected`
  .before(setupServer)
  .after(shutdownServer)
  .page`http://localhost:9999/tests/acceptance/fixtures/html/vertical`;

test('pagination flow', async t => {
  const searchComponent = VerticalPage.getSearchComponent();
  await searchComponent.enterQuery('Virginia');
  await searchComponent.submitQuery();
  const paginationComponent = VerticalPage.getPaginationComponent();
  await paginationComponent.clickNextButton();
  const pageNum = await paginationComponent.getActivePageLabelAndNumber();
  await t.expect(pageNum).eql('Page 2');
});
