const mdPlugin = require("./plugins");
const config = require("../config");
module.exports = {
  title: config.title,
  themeConfig: config.themeConfig,
  head: config.head,
  vite: {
    server: {
      host: true,
    },
  },
  base: "/vite-docs/",
  vue: {},
  markdown: {
    config: (md) => {
      mdPlugin(md);
    },
  },
};
