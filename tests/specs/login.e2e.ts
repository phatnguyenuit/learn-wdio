import LoginPage from '../page-objects/login.page';
import SecurePage from '../page-objects/secure.page';

describe('login page', () => {
  it('should deny access with wrong credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('foo', 'bar');

    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining('Your username is invalid!')
    );
    await expect(SecurePage.flashAlert).toMatchElementSnapshot('flash-error');
  });

  it('should allow access with correct credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining('You logged into a secure area!')
    );
    await expect(SecurePage.flashAlert).toMatchElementSnapshot('flash-success');
  });
});
