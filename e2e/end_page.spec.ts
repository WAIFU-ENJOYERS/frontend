import { test, expect } from "@playwright/test";

// Somewhat reliable, rely on network state
// TODO: play again button
async function toReturnPage(page: any): Promise<void> {
  let answeredIncorrectly = false;
  await page.goto("https://frontend-red-phi.vercel.app/");
  await page.waitForLoadState("networkidle"); // Wait for the page to load
  const button = page.getByText("Play Game");
  await button.click();
  await page.waitForLoadState("networkidle"); // Yo, chill and appreciate the waifus a bit
  while (!answeredIncorrectly) {
    const lowerButton = page.getByText("Lower ");
    await lowerButton.click();
    await page.waitForLoadState("networkidle"); // Wait for "X" animation to play
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
        await page.waitForLoadState("networkidle"); // Wait for return page to load
      } else {
        await page.waitForLoadState("networkidle"); // Wait for next question, in case the choice is correct.
      }
    } else {
      throw new Error(
        "Could not retrieved the number of likes on either of the side"
      );
    }
  }
}

test.describe("End Page Test", () => {
  test("Whether back-to-menu is there and works", async ({ page }) => {
    await toReturnPage(page);

    // Expect the button "Back to Menu"
    const menuButton = page.getByText("Back to menu");
    await menuButton.click();
    await page.waitForLoadState("networkidle"); // Wait for main menu to load

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
