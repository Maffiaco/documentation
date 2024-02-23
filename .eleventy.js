module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("delis", function(collectionApi) {

    return collectionApi.getFilteredByGlob("demo/deli-*.md");
  });
};
