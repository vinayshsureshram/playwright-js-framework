import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto('https://the-internet.herokuapp.com/login');
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  const flash = await loginPage.getFlashMessage();
  expect(flash).toContain('You logged into a secure area!');
});