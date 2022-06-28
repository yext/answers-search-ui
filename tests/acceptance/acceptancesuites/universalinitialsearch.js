import { UNIVERSAL_INITIAL_SEARCH_PAGE } from '../constants';
import { Selector } from 'testcafe';
import { getCurrentUrlParams, waitForResults } from '../utils';
import StorageKeys from '../../../src/core/storage/storagekeys';
import { MockedUniversalSearchRequest } from '../fixtures/responses/universal/search';
import { MockedUniversalAutoCompleteRequest } from '../fixtures/responses/universal/autocomplete';

fixture`Universal page with default initial search`
  .requestHooks(
    MockedUniversalSearchRequest,
    MockedUniversalAutoCompleteRequest
  )
  .page`${UNIVERSAL_INITIAL_SEARCH_PAGE}`;

test('blank defaultInitialSearch will fire on universal if allowEmptySearch is true', async t => {
  await waitForResults();
  await t.expect(Selector('.yxt-Results').exists).ok();
});

test('referrerPageUrl is added to the URL on default initial searches', async t => {
  await waitForResults();
  const currentSearchParams = await getCurrentUrlParams();
  const referrerPageUrl = currentSearchParams.has(StorageKeys.REFERRER_PAGE_URL);
  await t.expect(referrerPageUrl).ok();
});
