import Page from "../pageobjects/dissapearing.elements.page.js";

describe("dissapearing elements tests", () => {
  const dissapearingElementsPage = new Page();
  beforeEach(() => {
    dissapearingElementsPage.open();
  });

  it("should check that element dissapear on refresh", async () => {
    let state = await dissapearingElementsPage.checkIfElementPresentinitially(
      '//*[@id="content"]/div/ul/li[5]/a'
    );
    console.log(`state`, state);
    if (state === true) {
      console.log("Cool");
    } else {
      console.log("browser should refresh");
      await browser.refresh();
      let stateAfterRefresh =
        await dissapearingElementsPage.checkIfElementPresentinitially(
          '//*[@id="content"]/div/ul/li[5]/a'
        );
      await expect(stateAfterRefresh).toBe(true);
    }
  });
});
