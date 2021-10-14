# 快速开始

本节介绍如何在您的项目中使用 easi-packages-antd。

## 用法

```typescript
import App from "./App.vue";
import antd from "ant-design-vue";

import EASI from "easi-packages-antd";
import "ant-design-vue/dist/antd.css";

createApp(App).use(antd).use(EASI);
```

### 按需加载

> webpack 项目

- 安装 babel-plugin-import 依赖

```js
yarn add babel-plugin-import -D
```

- 配置 babel

```js
//babel.config.js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "easi-packages-antd",
        style: (name) => {
          return `${name}/index.css`;
        },
        customName: (name) => {
          name = name.slice(8);
          return `easi-packages-antd/es/${name}`;
        },
      },
    ],
  ],
};
```

```js
import { createApp } from "vue";
import App from "./App.vue";
// EASIDirectives 指令 按需加载时使用
import { EASIButton, EASIDirectives } from "easi-packages-antd";
// 工具函数
import EASIUtils from "easi-packages-antd/es/utils";

createApp(App).use(EASIButton).use(EASIDirectives).mount("#app");
```

> vite 项目

- 安装 vite-plugin-importer 依赖

```js
yarn add vite-plugin-importer -D
```

- 配置 vite

```js
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import usePluginImport from "vite-plugin-importer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    usePluginImport({
      libraryName: "easi-packages-antd",
      libraryDirectory: "es",
      style: (name) => {
        return `${name}/index.css`;
      },
      customName: (name) => {
        name = name.slice(8);
        return `easi-packages-antd/es/${name}`;
      },
    }),
  ],
});
```

```js
import { createApp } from "vue";
import App from "./App.vue";
// EASIDirectives 指令 按需加载时使用
import { EASIButton, EASIDirectives } from "easi-packages-antd";
// 工具函数
import EASIUtils from "easi-packages-antd/es/utils";

createApp(App).use(EASIButton).use(EASIDirectives).mount("#app");
```
