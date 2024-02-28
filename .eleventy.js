module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("demos", function (collectionApi) {
    return collectionApi.getFilteredByGlob("demos/deli-*.md").reverse();
  });
};
