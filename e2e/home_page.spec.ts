import { test, expect, type Page } from '@playwright/test';


test.describe('Game tests', () => {
test('Play Button is work', async ({ page }) => {
  // await page.goto('https://frontend-red-phi.vercel.app/');
  await page.goto('http://localhost:3000/', {timeout: 100000})
  const button = page.getByText("Play Game")
  await button.click({ timeout: 100000 });
  // const asda = page.getByText("WHATFUCKISTHIS")
  // await expect(asda).toBeNull


  const enter_the_game = page.getByText("Score")
  await expect(enter_the_game).not.toBeNull
  await expect(enter_the_game).toHaveText("Score: 0", { timeout: 100000 })
});

});


// test.beforeEach(async ({ page }) => {
//   // await page.goto('https://frontend-red-phi.vercel.app/');
//   // await page.goto('http://localhost:3000/')
//   page.setDefaultTimeout(10000);
// });

// test('Play Button is work', async ({ page }) => {
//   // await page.goto('https://frontend-red-phi.vercel.app/');
//   // page.setDefaultTimeout(1000000);
//   await page.goto('http://localhost:3000/')
//   const button = page.getByText("Play Game")
//   await button.click();
//   const asda = page.getByText("WHATFUCKISTHIS")
//   await expect(asda).toBeNull


//   const enter_the_game = page.getByText("Score")
//   await expect(enter_the_game).not.toBeNull
//   await expect(enter_the_game).toHaveText("Score: 0")
// });

// test('higher buttons is work', async ({ page }) => {
//   // await page.goto('https://frontend-red-phi.vercel.app/');
//   // page.setDefaultTimeout(1000000);
//   await page.goto('http://localhost:3000/')
//   const button = page.getByText("Play Game")
//   await button.click();

//   const higher_button = page.getByText("Higher ")
//   await higher_button.click();
//   const is_update = page.getByText("Higher ")

//   console.log(is_update)

//   if (is_update == null) {
//     await expect(page.getByText("Back to Menu")).not.toBeNull
//     await expect(page.getByText("Back to Menu")).toContainText("Back to Menu")
//   } else {
//     await expect(is_update).toContainText("Higher ")
//     await expect(page.getByText("Score")).toHaveText("Score: 1")
//   }
// });



// test('Lower buttons is work', async ({ page }) => {
//   // await page.goto('https://frontend-red-phi.vercel.app/');
//   await page.goto('http://localhost:3000/')
//   const button = page.getByText("Play Game")
//   await button.click();

//   const lower_button = page.getByText("Lower")
//   await lower_button.click();
//   const is_update = page.getByText("Lower")

//   // console.log(is_update)

//   if (is_update == null) {
//     await expect(page.getByText("Back to Menu")).not.toBeNull
//     await expect(page.getByText("Back to Menu")).toContainText("Back to Menu")
//   } else {
//     await expect(is_update).toContainText("Lower")
//     await expect(page.getByText("Score")).toHaveText("Score: 1")
//   }
// });


// test('Back to menu button is work', async ({ page }) => {
//   const button = page.getByText("Play Game")
//   await button.click();

//   const higher_button = page.getByText("Lower")
//   await higher_button.click();
//   var is_update = page.getByText("Lower")

//   while (is_update != null) {
//     await page.getByText("Lower").click();
//     is_update = page.getByText("Lower")
//   }
//   await expect(page.getByText("Back to Menu")).not.toBeNull
//   await expect(page.getByText("Back to Menu")).toContainText("Back to Menu")

//   const menu_button = page.getByText("Back to Menu")
//   await menu_button.click();

//   const home_page = page.getByText("Which waifu has more likes ?")
//   expect(home_page).not.toBeNull
//   expect(home_page).toContainText("Which waifu has more likes ?")

// });

// test('Play again buttons is work', async ({ page }) => {
//   const button = page.getByText("Play Game")
//   await button.click();

//   const higher_button = page.getByText("Lower")
//   await higher_button.click();
//   var is_update = page.getByText("Lower")

//   while (is_update != null) {
//     await page.getByText("Lower").click();
//     is_update = page.getByText("Lower")
//   }
//   await expect(page.getByText("Play again")).not.toBeNull
//   await expect(page.getByText("Play again")).toContainText("Play again")
//   await expect(page.getByText("0")).toHaveText("0")

//   const play_again_button = page.getByText("Play again")
//   await play_again_button.click();

//   const play_page = page.getByText("Score")
//   await expect(play_page).not.toBeNull
//   await expect(play_page).toHaveText("Score: 0")
// });