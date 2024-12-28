import { $, browser } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ABTestPage extends Page {
  // Reference: https://the-internet.herokuapp.com/js/vendor/298279967.js
  private VARIATION_COOKIE_NAME = 'optimizelyBuckets';
  private OPT_OUT_COOKIE_NAME = 'optimizelyOptOut';
  private EXPERIMENT_ID = '298349752';
  public VARIATIONS = {
    Original: '298291000',
    'Variation #1': '298343790',
  };
  /**
   * define selectors using getter methods
   */

  public get header() {
    return $('//*[@id="content"]/div/h3');
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public async open() {
    return super.open('abtest');
  }

  public async useVariation(variationId: string) {
    await browser.deleteCookie(this.VARIATION_COOKIE_NAME);
    await browser.setCookies({
      name: this.VARIATION_COOKIE_NAME,
      value: encodeURIComponent(
        JSON.stringify({
          [this.EXPERIMENT_ID]: variationId,
        })
      ),
    });

    await browser.refresh();
  }

  public async useOptOutCookie() {
    await browser.deleteCookie(this.OPT_OUT_COOKIE_NAME);
    await browser.setCookies({
      name: this.OPT_OUT_COOKIE_NAME,
      value: 'true',
    });

    await browser.refresh();
  }
}

export default new ABTestPage();
