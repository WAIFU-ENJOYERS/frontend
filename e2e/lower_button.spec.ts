import { test, expect } from "@playwright/test";

test.describe("Game tests", () => {
  test("lower buttons is work", async ({ page }) => {
    await page.goto("http://localhost:3000/", { timeout: 100000 });
    const button = page.getByText("Play Game");
    await button.click({ timeout: 100000 });

    const lowerButton = page.getByText("Lower ");
    await lowerButton.click({ timeout: 100000 });
    const isUpdate = page.getByText("Lower ");
    // const lower_button_text = await lower_button.innerText({timeout: 100000});
    // console.log(lower_button)

    if (isUpdate !== null) {
      //   await expect(page.getByText("Back to menu")).not.toBeNull

      await expect(page.getByText("Lower ")).toContainText("Lower ", {
        timeout: 100000,
      });
      await expect(page.getByText("Score")).toHaveText("Score: 1", {
        timeout: 100000,
      });
    } else {
      await expect(page.getByText("Back to menu")).toContainText(
        "Back to menu",
        { timeout: 100000 }
      );
    }
  });
});
