const { expect } = require("chai");

describe("404", () => {
  beforeEach(() => {
    browser.url(`/404`);
  });

  it("should exist", () => {
    const title = browser.getTitle();

    expect(title).to.equal("Page not found!");
  });
});
