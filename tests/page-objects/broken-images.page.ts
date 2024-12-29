import { $$ } from '@wdio/globals';
import Page from './page';

class BrokenImagesPage extends Page {
  public get images() {
    return $$('//*[@id="content"]/div/img');
  }

  public async open() {
    return super.open('broken_images');
  }
}

export default new BrokenImagesPage();
