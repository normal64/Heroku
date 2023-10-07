import DragDrop from "../pageobjects/dragdrop.page.js";

describe("drag and drop", () => {
  const dragAndDropInst = new DragDrop();
  const elemAtext = "A";
  const elemBtext = "B";
  beforeEach(() => {
    dragAndDropInst.open();
  });
  it("should swap elements on drag and drop", async () => {
    const elemA = await dragAndDropInst.elementA;
    const elemB = await dragAndDropInst.elementB;
    await expect(elemA).toHaveText(elemAtext);
    await expect(elemB).toHaveText(elemBtext);
    await elemA.dragAndDrop(elemB);
    await expect(elemA).toHaveText(elemBtext);
    await expect(elemB).toHaveText(elemAtext);
    await browser.saveScreenshot("./drugdropScreenshot.png");
  });
});
