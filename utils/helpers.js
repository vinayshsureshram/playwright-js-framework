export async function waitForText(locator, text, timeout = 5000) {
  await locator.waitFor({ state: 'visible', timeout });
  const actual = await locator.textContent();
  if (!actual.includes(text)) {
    throw new Error(`Expected text "${text}" but got "${actual}"`);
  }
}