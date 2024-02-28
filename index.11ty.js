exports.data = function () {
  return {
    eleventyImport: {
      collections: ["demos"]
    },
  }
};

const renderReleasedItems = (items) => {
  return items.map((item) => (`<li>${item}</li>`)).join("\n");
}

exports.render = function (data) {
  return `<h1>Our Sprint Track</h1>
  <ul>
    ${data.collections.demos.map((sprint) => {
    return `<li><a href="/documentation/${sprint.url}">${this.sprintTitle(sprint.content)}</a><br /><ul>${renderReleasedItems(this.releasedItems(sprint.content))}</ul></li>`;
  }).join("\n")}
  </ul>`;
};
