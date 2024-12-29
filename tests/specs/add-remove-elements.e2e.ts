import { expect } from '@wdio/globals';
import addRemoveElementsPage from '../page-objects/add-remove-elements.page';

describe('Add/Remove Elements', () => {
  beforeEach(async () => {
    await addRemoveElementsPage.open();
  });

  it('should add new element', async () => {
    await expect(addRemoveElementsPage.deleteButton).not.toExist();

    await addRemoveElementsPage.addButton.click();
    await expect(addRemoveElementsPage.deleteButtons).toBeElementsArrayOfSize(
      1
    );
  });

  it('should remove an existing element', async () => {
    // add two elements
    await addRemoveElementsPage.addButton.click();
    await addRemoveElementsPage.addButton.click();

    // remove one element
    await addRemoveElementsPage.deleteButton.click();

    await expect(addRemoveElementsPage.deleteButtons).toBeElementsArrayOfSize(
      1
    );
  });
});
