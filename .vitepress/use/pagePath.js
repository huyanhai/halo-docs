import { computed } from 'vue';
import { useData } from 'vitepress';
import { removeExtention, ensureStartingSlash } from 'vitepress/dist/client/theme-default/utils';

export default function useFilePath() {
  const { page } = useData();
  const pagePath = computed(() => {
    return removeExtention(ensureStartingSlash(page.value.relativePath));
  });
  return { pagePath };
}
