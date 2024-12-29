import { $ } from '@wdio/globals';
import basicAuthPage from '../page-objects/basic-auth.page';

describe('Basic Auth', () => {
  it('should access page successfully', async () => {
    await basicAuthPage.open();

    await expect(
      $('aria/Congratulations! You must have the proper credentials.')
    ).toBeDisplayed();
  });
});
