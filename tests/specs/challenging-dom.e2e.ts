import { $, expect } from '@wdio/globals';
import challengingDomPage from '../page-objects/challenging-dom.page';

describe('ChallengingDom', () => {
  beforeEach(async () => {
    await challengingDomPage.open();
  });

  it('should display randomly buttons', async () => {
    await expect(challengingDomPage.cyanButton).toBeDisplayed();
    await expect(challengingDomPage.redButton).toBeDisplayed();
    await expect(challengingDomPage.greenButton).toBeDisplayed();
  });

  it('should display randomly canvas', async () => {
    await expect(challengingDomPage.canvas).toBeDisplayed();
  });

  it.only('should display fixed table', async () => {
    const tableHeaders = await challengingDomPage.tableHeaders;
    await expect(tableHeaders).toHaveText([
      'Lorem',
      'Ipsum',
      'Dolor',
      'Sit',
      'Amet',
      'Diceret',
      'Action',
    ]);

    await expect(
      challengingDomPage.getTableCellButtons('edit')
    ).toBeElementsArrayOfSize(10);
    await expect(
      challengingDomPage.getTableCellButtons('delete')
    ).toBeElementsArrayOfSize(10);

    const tableCells = [
      'Iuvaret',
      'Apeirian',
      'Adipisci',
      'Definiebas',
      'Consequuntur',
      'Phaedrum',
    ];

    for (const content of tableCells) {
      await expect(
        challengingDomPage.getTableCells(content)
      ).toBeElementsArrayOfSize(10);
    }
  });
});
