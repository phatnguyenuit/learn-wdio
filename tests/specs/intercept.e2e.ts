import { browser } from '@wdio/globals';
import homePage from '../page-objects/home.page';

describe('Network calls', () => {
  it('should load app.css', async () => {
    await homePage.open();
    await browser.setupInterceptor();

    await browser.expectRequest('GET', '/css/app.css', 200);
  });
});
