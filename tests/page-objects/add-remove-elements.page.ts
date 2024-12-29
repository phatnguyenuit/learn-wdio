import { $, $$ } from '@wdio/globals';
import Page from './page';

class AddRemoveElementsPage extends Page {
  public get addButton() {
    return $('aria/Add Element');
  }

  public get deleteButton() {
    return $('aria/Delete');
  }

  public get deleteButtons() {
    return $$('aria/Delete');
  }

  public async open() {
    // require to have "/" in the end otherwise it throws not found error
    return super.open('add_remove_elements/');
  }
}

export default new AddRemoveElementsPage();
