import { computed } from "vue";
import { useData } from "vitepress";
import { removeExtention, ensureStartingSlash } from "vitepress/dist/client/theme-default/utils";

export default function useFilePath() {
  const { page, site } = useData();
  const pagePath = computed(() => {
    return removeExtention(ensureStartingSlash(page.value.relativePath));
  });
  const basePath = computed(() => {
    const base = site.value.base;
    return base === "" ? base : base.substring(0, base.length - 1);
  });
  return { pagePath, basePath };
}
