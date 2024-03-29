import { FACETS_PAGE } from '../constants';
import FacetsPage from '../pageobjects/facetspage';
import { MockedVerticalSearchRequest } from '../fixtures/responses/vertical/search';
import { MockedVerticalAutoCompleteRequest } from '../fixtures/responses/vertical/autocomplete';
import { waitForResults } from '../utils';

fixture`Performance marks on search`
  .requestHooks(
    MockedVerticalSearchRequest,
    MockedVerticalAutoCompleteRequest
  )
  .page`${FACETS_PAGE}`;

test('window.performance calls are marked for a normal search', async t => {
  const marksToCheck = [
    'yext.answers.initStart',
    'yext.answers.statusStart',
    'yext.answers.statusEnd',
    'yext.answers.ponyfillStart',
    'yext.answers.ponyfillEnd',
    'yext.answers.verticalQueryStart',
    'yext.answers.verticalQuerySent',
    'yext.answers.verticalQueryResponseReceived',
    'yext.answers.verticalQueryResponseRendered'
  ];
  const searchComponent = FacetsPage.getSearchComponent();
  await searchComponent.submitQuery();
  await waitForResults();

  // All performance marks should be called at least once with a search
  for (let i = 0; i < marksToCheck.length; i++) {
    const markName = marksToCheck[i];
    const marksFoundWithName = await t.eval(() => {
      return JSON.stringify(window.performance.getEntriesByName(markName));
    }, { dependencies: { markName } });
    await t.expect(JSON.parse(marksFoundWithName.length)).gt(0);
  }
});
