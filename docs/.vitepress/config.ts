import { defineConfig } from "vitepress";
import mdPlugin from "./plugins";

export default defineConfig({
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/infinitas-plus/zw-h5",
      },
    ],
    nav: [
      { text: "使用指南", link: "/zh/guide/begin" },
      { text: "组件", link: "/zh/api/base" },
    ],
    sidebar: {
      "/zh/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "快速开始",
              link: "/zh/guide/begin",
            },
            {
              text: "变更日志",
              link: "/zh/guide/changelog",
            },
          ],
        },
      ],
      "/zh/api/": [
        {
          text: "基础组件",
          collapsible: true,
          items: [
            {
              text: "基础",
              link: "/zh/api/base",
            },
          ],
        },
      ],
    },
  },
  lang: "zh-CN",
  title: "halo",
  base: "/halo-docs",
  description: "halo",
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: false,
    config: (md) => {
      mdPlugin(md);
    },
  },
});
