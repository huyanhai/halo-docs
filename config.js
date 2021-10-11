// title、themeConfig、head参考官网配置
// https://fttp.jjf-tech.cn/vitepress/config/basics.html
module.exports = {
  title: "EasiSdk",
  base: "/vite-docs/docs/", // 部署路径
  themeConfig: {
    theme: false,
    repo: "huyanhai/koa_vite",
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
