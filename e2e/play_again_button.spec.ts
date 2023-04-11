import { test, expect } from "@playwright/test";

test("play again button is work", async ({ page }) => {
await page.goto("https://frontend-red-phi.vercel.app/");
const button = page.getByText("Play Game");
await button.click();

let condition = true;
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

await page.waitForSelector('[data-testid="play-again"]', {
    timeout: 120000,
});

await expect(page.getByText("Play again")).toHaveText("Play again");
await page.getByText("Play again").click();
await page.waitForSelector('[data-testid="score-value"]');
await expect(page.getByText("Higher ")).toHaveText("Higher ");
await expect(page.getByText("Lower ")).toHaveText("Lower ");
await expect(page.getByText("Score")).toHaveText("Score: 0");
});

