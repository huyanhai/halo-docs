const mdPlugin = require("./plugins");
const config = require("../config/node/index");
module.exports = {
  title: config.title,
  themeConfig: config.themeConfig,
  head: config.head,
  base: config.base || "/",
  vite: {
    server: {
      host: true,
    },
  },
  vue: {},
  markdown: {
    config: (md) => {
      mdPlugin(md);
    },
  },
};
