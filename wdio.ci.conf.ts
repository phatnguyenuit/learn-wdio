import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,
  capabilities: baseConfig.capabilities.map((item) => {
    if ((item as WebdriverIO.Capabilities).browserName === 'chrome') {
      return {
        ...item,
        'goog:chromeOptions': {
          args: ['headless', 'disable-gpu'],
        },
      };
    }

    return item;
  }),
};
