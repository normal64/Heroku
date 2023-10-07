export default class HoversPage {
  constructor() {
    this.url = "https://the-internet.herokuapp.com/hovers";
  }
  open() {
    browser.url(this.url);
  }
  get firstElement() {
    return $('//*[@id="content"]//*[contains(@class, "figure")]/img');
  }
  get firstDescElem() {
    return $('//*[@id="content"]//*[contains(@class, "figcaption")]//h5');
  }
  get secondDescElem() {
    return $('//*[@id="content"]//*[contains(@class, "figcaption")]//a');
  }
  async hoverOverFirstElement() {
    await this.firstElement.moveTo();
  }
}
