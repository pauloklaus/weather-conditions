<template>
  <header class="topbar">
    <img class="topbar__logo" src="@/assets/images/logo.svg" />
    <a class="topbar__color-scheme" href="#" @click="toggleAppColorScheme">
      <img :src="colorSchemeIconFile" />
    </a>
  </header>
</template>

<script>
import { computed, defineComponent } from "vue";
import useColorSchemeStore from "@/stores/colorSchemeStore";
import moonSvgIcon from "@/assets/images/moon.svg";
import sunSvgIcon from "@/assets/images/sun.svg";

export default defineComponent({
  setup() {
    const colorScheme = useColorSchemeStore();
    const colorSchemeIconFile = computed(() => colorScheme.isDarkMode ? sunSvgIcon : moonSvgIcon);

    return {
      colorSchemeIconFile,
      toggleAppColorScheme: colorScheme.toggleAppColorScheme,
    };
  },
});
</script>


<style scoped>
.topbar {
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg-color);
  box-shadow: 0 0 3px var(--gray5-opacity-10);
  height: 56px;
}

.topbar__logo {
  height: 26px;
}

.topbar__color-scheme {
  position: fixed;
  top: 5px;
  right: 5px;
  padding: 10px;
}

@media (min-width: 640px) {
  .topbar {
    position: fixed;
    width: 100%;
  }
}
</style>
