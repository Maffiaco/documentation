exports.data = function () {
  return {
    eleventyImport: {
      collections: ["demos"]
    },
  }
};
exports.render = function (data) {
  return `<h1>Our Sprint Track</h1>
  <ul>
    ${data.collections.demos.map((sprint) => {
    return `<li><a href="${sprint.url}">${sprint.fileSlug}</a></li>`;
  }).join("\n")}
  </ul>`;
};
