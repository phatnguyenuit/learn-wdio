import { expect } from '@wdio/globals';
import checkboxesPage from '../page-objects/checkboxes.page';

describe('Checkboxes', () => {
  beforeEach(async () => {
    await checkboxesPage.open();
  });

  it('should display two checkboxes', async () => {
    await expect(checkboxesPage.checkboxes).toBeElementsArrayOfSize(2);
  });

  it('should display initial checked states', async () => {
    const checkboxes = await checkboxesPage.checkboxes;

    await expect(checkboxes[0]).not.toBeChecked();
    await expect(checkboxes[1]).toBeChecked();
  });

  it('should set checked state for checkbox', async () => {
    const checkboxes = await checkboxesPage.checkboxes;
    await expect(checkboxes[0]).not.toBeChecked();

    await checkboxes[0].click();
    await expect(checkboxes[0]).toBeChecked();
  });
});
