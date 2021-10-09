// title、themeConfig、head参考官网配置
// https://fttp.jjf-tech.cn/vitepress/config/basics.html
module.exports = {
  title: "docs",
  themeConfig: {
    base: "./",
    theme: false,
    repo: "infinitasx/easi-customer-jssdk",
    logo: "/images/logo.png",
    agolia: {
      apiKey: "e32c681af38f324039e81d81834e70b8",
      appId: "7DCTSU0WBW",
    },
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    nav: [
      { text: "指南", link: "/guide/base" },
      { text: "API", link: "/api/config" },
    ],
    sidebar: [
      {
        "/guide/": [
          {
            text: "基础",
            children: [
              {
                text: "安装",
                link: "/zh/guide/base",
              },
            ],
          },
        ],
      },
      {
        "/api/": [
          {
            text: "基础文档",
            children: [
              {
                text: "config 基础配置",
                link: "/zh/api/config",
              },
            ],
          },
        ],
      },
    ],
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
};
