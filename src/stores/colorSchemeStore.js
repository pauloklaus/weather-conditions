import { defineStore } from "pinia";
import { ref } from "vue";
import ColorSchemeHandler from "@/helpers/ColorSchemeHandler";

const useColorSchemeStore = defineStore("colorScheme", () => {
  const isDarkMode = ref(false);

  const updateLocalStoreColorScheme = (darkModeState) => {
    isDarkMode.value = darkModeState;
  };

  ColorSchemeHandler.loadAndListenerEnvironmentColorScheme(updateLocalStoreColorScheme);
  
  function toggleAppColorScheme() {
    ColorSchemeHandler.toggleAppColorScheme(updateLocalStoreColorScheme);
  }

  return { isDarkMode, toggleAppColorScheme };
});

export default useColorSchemeStore;
