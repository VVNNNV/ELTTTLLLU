import { useDark, useMediaQuery, useStorage, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';
import { type Ref } from 'vue';

export const useStyleStore = defineStore('style', {
  state: () => {
    const isDarkTheme = useDark();
    const toggleDark = useToggle(isDarkTheme);
    const isSmallScreen = useMediaQuery('(max-width: 0px)');
    const isMenuCollapsed = useStorage('isMenuCollapsed', false) as Ref<boolean>;

    return {
      isDarkTheme,
      toggleDark,
      isMenuCollapsed,
      isSmallScreen,
    };
  },
});
