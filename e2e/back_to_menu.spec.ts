import { test, expect } from "@playwright/test";

test("Back to menu button is work", async ({ page }) => {
await page.goto("https://frontend-red-phi.vercel.app/");
const button = page.getByText("Play Game");
await button.click();
let condition = true;
// go to the end state/game over state
while (condition) {
    try {
    await page.waitForTimeout(8000);
    await page.$eval(
        '[data-testid="higher-button"]',
        (el) => el.textContent
    );
    const higherButton = page.getByText("Higher ");
    await higherButton.click();
    } catch {
    condition = false;
    }
}
await page.waitForSelector('[data-testid="back-to-menu"]', {
    timeout: 120000,
});
await expect(page.getByText("Back to menu")).toHaveText("Back to menu");
await page.getByText("Back to menu").click();
await expect(page.getByText("Play Game")).toHaveText("Play Game");
});