import { $ } from '@wdio/globals';
import Page from './page';

class ContextMenuPage extends Page {
  public get menu() {
    return $('div#hot-spot');
  }

  public async open() {
    return super.open('context_menu');
  }
}

export default new ContextMenuPage();
