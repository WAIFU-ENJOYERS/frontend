import { test, expect } from "@playwright/test";

test.describe("Game tests", () => {
  test("higher buttons is work", async ({ page }) => {
    // await page.goto("http://localhost:3000/", { timeout: 100000 });
    await page.goto('https://frontend-red-phi.vercel.app/', { timeout: 100000 });
    const button = page.getByText("Play Game");
    await button.click({ timeout: 100000 });

    const higherButton = page.getByText("Higher ");
    await higherButton.click({ timeout: 100000 });
    const isUpdate = page.getByText("Higher ");
    // const higher_button_text = await higher_button.innerText({timeout: 100000});

    if (isUpdate !== null) {
      //   await expect(page.getByText("Back to menu")).not.toBeNull

      await expect(page.getByText("Higher ")).toContainText("Higher ", {
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
