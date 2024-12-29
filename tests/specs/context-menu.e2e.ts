import { expect } from '@wdio/globals';
import contextMenuPage from '../page-objects/context-menu.page';

describe('Context Menu', () => {
  it('should show alert when triggering right click on the menu', async () => {
    await contextMenuPage.open();
    await expect(contextMenuPage.menu).toBeDisplayed();

    await contextMenuPage.menu.click({ button: 'right', skipRelease: true });

    const isAlertOpen = await browser.isAlertOpen();
    await expect(isAlertOpen).toEqual(true);

    const alertText = await browser.getAlertText();
    await expect(alertText).toEqual('You selected a context menu');

    await browser.acceptAlert();
  });
});
