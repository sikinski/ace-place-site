// @ts-check
import { defineStore } from 'pinia';
export const useScreenStore = defineStore('screen', {
  state: () => ({
    showLocationBar: false,
  }),
  //   getters: {},
  actions: {
    showBar() {
      this.$patch({
        showLocationBar: true,
      });
    },
  }, // actions can be async
});
