import { test, expect } from "@playwright/test";

test.describe("Game tests", () => {
  test("lower button is work", async ({ page }) => {
    await page.goto("https://frontend-red-phi.vercel.app/");
    await page.waitForSelector('[data-testid="play-game"]');
    const button = page.getByText("Play Game");
    await button.click();

    await page.waitForSelector('[data-testid="score-value"]');
    const lowerButton = page.getByText("Lower ");
    await lowerButton.click();

    await page.waitForTimeout(6000);
    try {
      const scoreValue = await page.$eval(
        '[data-testid="score-value"]',
        (el) => el.textContent
      );
      if (scoreValue?.toLowerCase().startsWith("score:")) {
        await expect(page.getByText("Lower ")).toHaveText("Lower ");
        await expect(page.getByText("Score")).toHaveText("Score: 1");
      }
    } catch {
      await page.waitForTimeout(10000);
      await expect(page.getByText("Back to menu")).toHaveText("Back to menu");
    }
  });
});
