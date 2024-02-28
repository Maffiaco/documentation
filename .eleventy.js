const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("demos", function (collectionApi) {
    return collectionApi.getFilteredByGlob("demos/deli-*.md").reverse();
  });
  eleventyConfig.addShortcode("sprintTitle", function (sprintContent) {
    const dom = new JSDOM(sprintContent);
    return dom.window.document.querySelector("h2").textContent;
  });

  eleventyConfig.addShortcode("releasedItems", function (sprintContent) {
    const dom = new JSDOM(sprintContent);
    return Array.from(dom.window.document.querySelectorAll("h3")).map((h3) => {
      return h3.textContent;
    }).filter((releasedItem) => {
      return releasedItem.includes("🚀")
    });
  });

  return {
    pathPrefix: "documentation",
  }
};
