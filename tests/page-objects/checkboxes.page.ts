import { $$ } from '@wdio/globals';
import Page from './page';

class CheckboxesPage extends Page {
  public get checkboxes() {
    return $$('input[type="checkbox"]');
  }

  public async open() {
    return super.open('checkboxes');
  }
}

export default new CheckboxesPage();
