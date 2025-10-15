import { BasePage } from './base.page.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('button[type="submit"]');
    this.flash = page.locator('#flash');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async getFlashMessage() {
    return this.flash.textContent();
  }
}