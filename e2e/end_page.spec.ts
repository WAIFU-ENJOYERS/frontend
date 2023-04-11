import { test, expect } from "@playwright/test";
import { timeout } from "ioredis/built/utils";

// Really bad, relies on the timing to get the data
async function toReturnPage(page: any): Promise<void> {
  //   await page.goto("https://frontend-red-phi.vercel.app/");
  let answeredIncorrectly = false;
  await page.goto("http://localhost:3000/");
  const button = page.getByText("Play Game");
  await button.click();
  await page.waitForTimeout(5000); // Yo, chill and appreciate the waifus a bit
  while (!answeredIncorrectly) {
    const lowerButton = page.getByText("Lower ");
    await lowerButton.click();
    await page.waitForTimeout(50); // Wait for "X" animation to play
    const likes = await page.$$(
      "p.text-yellow-accent-3.text-h3.font-weight-bold.mt-1"
    );
    const leftLikes = await likes[0].textContent();
    const rightLikes = await likes[1].textContent();
    if (leftLikes != null && rightLikes != null) {
      const leftLikesInteger = parseInt(leftLikes);
      const rightLikesInteger = parseInt(rightLikes);
      if (leftLikesInteger < rightLikesInteger) {
        answeredIncorrectly = true;
        await page.waitForTimeout(3000); // Wait for return page to load
      } else {
        await page.waitForTimeout(5000); // Wait for next question, in case the choice is correct.
      }
    } else {
      throw new Error(
        "Could not retrieved the number of likes on either of the side"
      );
    }
  }
}

test.describe("Game tests", () => {
  test("Whether back-to-menu is there and works", async ({ page }) => {
    await toReturnPage(page);
    // Expect the button "Back to Menu"
    const menuButton = page.getByText("Back to menu");
    await menuButton.click();
    await page.waitForTimeout(3000); // Wait for main menu to load
    // Expect "Which waifu has more likes ?" text on the main menu
    const pElement = await page.$(
      "p.align-center.text-h3.text-white.my-2.font-weight-bold"
    );
    const textContent = await pElement.textContent();
    if (textContent == null) {
      throw new Error(
        'Could not retrieved "Which waifu has more likes ?" text'
      );
    } else {
      expect(textContent).toBe(" Which waifu has more likes ? ");
    }
  });
});
