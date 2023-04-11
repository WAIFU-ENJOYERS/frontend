import { test, expect } from "@playwright/test";

test.describe("Game tests", () => {
  test("Play button is work", async ({ page }) => {
    await page.goto("https://frontend-red-phi.vercel.app/");
    // await page.goto("http://localhost:3000/");
    const button = page.getByText("Play Game");
    await button.click();

    const enterTheGame = page.getByText("Score");
    await expect(enterTheGame).not.toBeNull;
    await expect(enterTheGame).toHaveText("Score: 0");
  });
});