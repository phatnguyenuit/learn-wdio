import { browser } from '@wdio/globals';

type UrlCommandOptions = Parameters<typeof browser.url>[1];

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path: string, options?: UrlCommandOptions) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`, options);
  }
}
