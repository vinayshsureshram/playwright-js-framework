import { test, expect } from '@playwright/test';

test('example test: page has proper title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});