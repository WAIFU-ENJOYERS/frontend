import { test, expect } from "@playwright/test";

test.describe("Game tests", () => {
  test("play again button is work", async ({ page }) => {
    //   await page.goto("https://frontend-red-phi.vercel.app/");

    await page.goto("http://localhost:3000/");
    const button = page.getByText("Play Game");
    await button.click();

    // const higherButton = page.getByText("Higher ");
    // await higherButton.click();

    // await page.waitForSelector('[data-testid="score-value"]');
    var condition = true;
    // go to the end state/game over state
    while(condition) {
        try {
        // const lowerButton = page.getByText("Lower ");
        // await lowerButton.click();
        // await page.waitForSelector('[data-testid="score-value"]');
        // const scoreValue = await page.$eval(
        //     '[data-testid="score-value"]',
        //     (el) => el.textContent
        // );
        // if (scoreValue?.toLowerCase().startsWith("score:")) {

        //     // await expect(page.getByText("Lower ")).toHaveText("Lower ");
        //     // await expect(page.getByText("Score")).toHaveText("Score: 1");
        // } 
        await page.waitForTimeout(8000)
        // await page.waitForSelector('[data-testid="higher-button"]', {timeout: 120000});
        // await page.waitForSelector('[data-testid="left-likes"]', {timeout: 120000});
        await page.$eval(
            '[data-testid="higher-button"]',
            (el) => el.textContent
          );
        const higherButton = page.getByText("Higher ");
        await higherButton.click();



        // await page.waitForLoadState()
        // await page.waitForSelector('[data-testid="score-value"]');
        // await page.$eval(
        //       '[data-testid="score-value"]',
        //       (el) => el.textContent
        //     );

        } catch {
            condition = false;
        }
    }
    
    await page.waitForSelector('[data-testid="play-again"]', {timeout: 120000});

    await expect(page.getByText("Play again")).toHaveText("Play again");
    await page.getByText("Play again").click();

    await page.waitForSelector('[data-testid="score-value"]');

    await expect(page.getByText("Higher ")).toHaveText("Higher ");
    await expect(page.getByText("Lower ")).toHaveText("Lower ");
    await expect(page.getByText("Score")).toHaveText("Score: 0");

    // try {
    //   const scoreValue = await page.$eval(
    //     '[data-testid="score-value"]',
    //     (el) => el.textContent
    //   );
    //   if (scoreValue?.toLowerCase().startsWith("score:")) {
    //     await expect(page.getByText("Higher ")).toHaveText("Higher ");
    //     await expect(page.getByText("Score")).toHaveText("Score: 1");
    //   } else {
    //     await expect(page.getByText("Back to menu")).toHaveText("Back to menu");
    //   }
    // } catch {
    //   await expect(page.getByText("Back to menu")).toHaveText("Back to menu");
    // }
  });
});
