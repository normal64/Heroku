export default class DragDrop {
  constructor() {
    this.url = "https://the-internet.herokuapp.com/drag_and_drop";
  }
  open() {
    browser.url(this.url);
  }
  get elementA() {
    return $("#column-a");
  }
  get elementB() {
    return $("#column-b");
  }
}
