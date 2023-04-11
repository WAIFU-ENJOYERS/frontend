import { test, expect } from "@playwright/test";

test.describe("Game tests", () => {
  test("higher buttons is work", async ({ page }) => {
    await page.goto("https://frontend-red-phi.vercel.app/");
    const button = page.getByText("Play Game");
    await button.click();

    const higherButton = page.getByText("Higher ");
    await higherButton.click();

    await page.waitForSelector('[data-testid="score-value"]');

    try {
      const scoreValue = await page.$eval(
        '[data-testid="score-value"]',
        (el) => el.textContent
      );
      if (scoreValue?.toLowerCase().startsWith("score:")) {
        await expect(page.getByText("Higher ")).toHaveText("Higher ");
        await expect(page.getByText("Score")).toHaveText("Score: 1");
      } else {
        await expect(page.getByText("Back to menu")).toHaveText("Back to menu");
      }
    } catch {
      await expect(page.getByText("Back to menu")).toHaveText("Back to menu");
    }
  });
});
