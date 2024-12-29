import { $, $$ } from '@wdio/globals';
import Page from './page';

class ChallengingDomPage extends Page {
  public get cyanButton() {
    return $('a[class="button"]');
  }

  public get redButton() {
    return $('a[class="button alert"]');
  }

  public get greenButton() {
    return $('a[class="button success"]');
  }

  public get canvas() {
    return $('canvas#canvas');
  }

  public get tableHeaders() {
    return $$('table th');
  }

  public async open() {
    return super.open('challenging_dom');
  }

  public async getTableCells(content: string) {
    return $$(`td.*=${content}`);
  }

  public async getTableCellButtons(content: string) {
    return $$(`a.=${content}`);
  }
}

export default new ChallengingDomPage();
