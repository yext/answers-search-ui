import {
  UNIVERSAL_PAGE,
  VERTICAL_PAGE
} from '../constants';
import { ClientFunction } from 'testcafe';
import UniversalPage from '../pageobjects/universalpage';
import VerticalPage from '../pageobjects/verticalpage';

fixture`Universal page`
  .page`${UNIVERSAL_PAGE}`;

test('a universal page\'s search bar is protected against xss', async t => {
  const searchComponent = UniversalPage.getSearchComponent();
  const xssCode = 'window.xssFingerprint = \'gottem!!!\'';
  const xssAttackQuery = `"<span><img src=sdf onerror="${xssCode}"`;
  await searchComponent.enterQuery(xssAttackQuery);
  await searchComponent.submitQuery();
  const xssFingerprint = await (ClientFunction(() => window.xssFingerprint)());
  await t.expect(xssFingerprint).eql(undefined);
});

fixture`Vertical page`
  .page`${VERTICAL_PAGE}`;

test('a vertical page\'s search bar is protected against xss', async t => {
  const searchComponent = VerticalPage.getSearchComponent();
  const xssCode = 'window.xssFingerprint = \'gottem!!!\'';
  const xssAttackQuery = `"<span><img src=sdf onerror="${xssCode}"`;
  await searchComponent.enterQuery(xssAttackQuery);
  await searchComponent.submitQuery();
  const xssFingerprint = await (ClientFunction(() => window.xssFingerprint)());
  await t.expect(xssFingerprint).eql(undefined);
});
