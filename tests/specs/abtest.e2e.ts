import { expect } from '@wdio/globals';
import abtestPage from '../page-objects/abtest.page';

describe('ABTest', () => {
  // it is related to Cookies
  // A/B Test Control
  // A/B Test Variation 1
  // No A/B Test

  afterEach(async () => {
    await browser.deleteAllCookies();
  });

  it(`should display page heading "A/B Test Control"`, async () => {
    await abtestPage.open();
    await abtestPage.useVariation(abtestPage.VARIATIONS.Original);

    await expect(abtestPage.header).toHaveText('A/B Test Control');
  });

  it(`should display page heading "A/B Test Variation 1"`, async () => {
    await abtestPage.open();
    await abtestPage.useVariation(abtestPage.VARIATIONS['Variation #1']);

    await expect(abtestPage.header).toHaveText('A/B Test Variation 1');
  });

  it('should display page heading "No A/B Test" when an opt-out cookie is set', async () => {
    await abtestPage.open();
    // Create an opt-out cookie in order to navigate to the No A/B Test Page
    await abtestPage.useOptOutCookie();

    await expect(abtestPage.header).toHaveText('No A/B Test');
  });
});
