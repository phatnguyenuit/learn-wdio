import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('');
  }
}

export default new HomePage();
