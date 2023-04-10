import { test, expect, type Page } from '@playwright/test';



test.describe('Game tests', () => {
    test('higher buttons is work', async ({ page }) => {
        await page.goto('http://localhost:3000/', {timeout: 100000})
        const button = page.getByText("Play Game")
        await button.click({ timeout: 100000 });



        const higher_button = page.getByText("Higher ")
        await higher_button.click({timeout: 100000});
        const is_update = page.getByText("Higher ")
        // const higher_button_text = await higher_button.innerText({timeout: 100000});

      
        if (is_update !== null) {
        //   await expect(page.getByText("Back to menu")).not.toBeNull

            await expect(page.getByText("Higher ")).toContainText("Higher ", { timeout: 100000 })
            await expect(page.getByText("Score")).toHaveText("Score: 1", { timeout: 100000 })
        } else {
            await expect(page.getByText("Back to menu")).toContainText("Back to menu", { timeout: 100000 })
        }
      });

  });