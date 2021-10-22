// title、themeConfig、head参考官网配置
// https://vitepress.vuejs.org/config/basics.html
module.exports = {
  title: "vitepress-demo",
  base: "/vite-docs/docs/", // 部署路径
  themeConfig: {
    theme: false,
    repo: "huyanhai/vite-docs",
    logo: "/images/logo.png",
    agolia: {
      apiKey: "",
      appId: "",
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
              {
                text: "使用",
                link: "/zh/guide/use",
              },
            ],
          },
        ],
      },
      {
        "/api/": [
          {
            text: "基础接口",
            children: [
              {
                text: "config 基础配置",
                link: "/zh/api/config",
              },
              {
                text: "ready sdk初始化成功",
                link: "/zh/api/ready",
              },
              {
                text: "error sdk初始化失败",
                link: "/zh/api/error",
              },
            ],
          },
          {
            text: "业务接口",
            children: [
              {
                text: "demo demo",
                link: "/zh/api/demo",
              },
            ],
          },
        ],
      },
    ],
  },
  head: [],
};
