import HoversPage from "../pageobjects/hovers.page.js";

describe("hovers", () => {
  const HoversPageIns = new HoversPage();
  const expectedTextOne = "name: user1";
  const expectedTextOnePartTwo = "View profile";
  beforeEach(() => {
    HoversPageIns.open();
  });
  it("should display text on element hover", async () => {
    HoversPageIns.hoverOverFirstElement();

    await expect(HoversPageIns.firstDescElem).toHaveText(expectedTextOne);
    await expect(HoversPageIns.secondDescElem).toHaveText(
      expectedTextOnePartTwo
    );
    await browser.saveScreenshot("./elemScreenshot.png");
  });
});
