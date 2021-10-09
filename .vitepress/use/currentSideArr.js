import { computed, toRaw, ref } from 'vue';
import { useData } from 'vitepress';
import { useHash } from './hashChange';

export function useCurrentSide() {
  const { site } = useData();
  const { componentsName } = useHash();
  const sideArr = computed(() => {
    const arr = [];
    site.value.themeConfig.sidebar.map(item => {
      for (const key of Object.keys(item)) {
        if (key.includes(componentsName.value)) {
          arr.push(...toRaw(item[key]));
        }
      }
    });
    return arr;
  });
  return { sideArr };
}
