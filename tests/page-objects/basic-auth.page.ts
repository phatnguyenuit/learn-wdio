import Page from './page';

class BasicAuthPage extends Page {
  public async open() {
    return super.open('basic_auth', {
      auth: {
        user: 'admin',
        pass: 'admin',
      },
    });
  }
}

export default new BasicAuthPage();
