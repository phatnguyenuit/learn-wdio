import { expect } from '@wdio/globals';
import brokenImagesPage from '../page-objects/broken-images.page';

describe('BrokenImages', () => {
  it('should show broken images', async () => {
    await brokenImagesPage.open();
    await browser.setupInterceptor();

    const images = await brokenImagesPage.images;
    await expect(images).toBeElementsArrayOfSize(3);

    const firstImgSrc = await images[0].getAttribute('src');
    await browser.expectRequest('GET', new RegExp(firstImgSrc), 404);
  });
});
