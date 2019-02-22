const { expect } = require("chai");

describe.skip("Homepage", () => {
  beforeEach(() => {
    browser.url("/");
  });

  describe("SEO", () => {
    it("should have a title", () => {
      const title = browser.getTitle();

      expect(title).to.equal("Hello, Contentful Gatsby!");
    });

    describe("Open Graph meta information", () => {
      it("should have a title", () => {
        const title = $('meta[property="og:title"]');

        expect(title).to.not.equal(null);
        expect(title.getAttribute("content")).to.equal(
          "Hello, Contentful Gatsby!"
        );
      });

      it("should be a website", () => {
        const type = $('meta[property="og:type"]');

        expect(type).to.not.equal(null);
        expect(type.getAttribute("content")).to.equal("website");
      });

      it("should have an image", () => {
        const image = $('meta[property="og:image"]');

        expect(image).to.not.equal(null);
        expect(image.getAttribute("content")).to.match(/gatsby\-icon/);
      });

      it("should have a url", () => {
        const type = $('meta[property="og:type"]');

        expect(type).to.not.equal(null);
        expect(type.getAttribute("content")).to.equal("website");
      });
    });
  });
});
