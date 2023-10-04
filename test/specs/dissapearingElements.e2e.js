import { expect } from 'chai';

describe("php travels cases", () => {
it("element dissapear check", async () => {
    browser.url('https://the-internet.herokuapp.com/disappearing_elements');
    const galleryElement = await $('//*[@id="content"]/div/ul/li[5]/a')
    await galleryElement.waitForDisplayed()
    const isDisplayed = await galleryElement.isDisplayed()
    console.log(`isDisplayed`, isDisplayed);
    await expect(isDisplayed).to.be.true;
    browser.saveScreenshot('screenshotName.png');
});
});
