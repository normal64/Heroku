export default class Page {
  constructor() {
    this.title = "My Page";
    this.url = "https://the-internet.herokuapp.com/disappearing_elements";
  }

  open() {
    browser.url(this.url);
  }
  get galleryElement() {
    return $('//*[@id="content"]/div/ul/li[5]/a');
  }
  async checkIfElementPresentinitially(locator) {
    let isElementPresentInitially;
    // Try to find the element, catch any errors if it's not present
    try {
      const element = await $(locator);
      isElementPresentInitially = element.isExisting();
    } catch (error) {
      isElementPresentInitially = false;
    }
    return isElementPresentInitially;
  }
  async checkGalleryElementDisplayedState() {
    let state = await this.galleryElement.waitForDisplayed();
    if (state) {
      return await this.galleryElement.isDisplayed();
    } else false;
  }
}
