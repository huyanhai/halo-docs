import DefaultTheme from "vitepress/theme";
import { ElDrawer, ElButton, ElPopover, ElTooltip, ElCollapseTransition, ElRow } from "element-plus";

import "./scss/reset.scss";
import "tailwindcss/tailwind.css";
import "element-plus/theme-chalk/index.css";
import "highlight.js/styles/arduino-light.css";

import Changelog from "./Changelog.vue";
import Demo from "./Demo.vue";

export default {
  // root component to wrap each page
  ...DefaultTheme,
  // this is a Vue 3 functional component
  //   NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    app.component("Changelog", Changelog);
    app.component("Demo", Demo);
    app.use(ElDrawer);
    app.use(ElButton);
    app.use(ElPopover);
    app.use(ElTooltip);
    app.use(ElCollapseTransition);
    app.use(ElRow);
  },
};
