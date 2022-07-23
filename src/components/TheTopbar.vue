<template>
  <header class="topbar">
    <img class="topbar__logo" src="@/assets/logo.svg" />
  </header>
</template>

<style scoped>
.topbar {
  height: 56px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0 0 3px var(--box-shadow-color);
}

.topbar__logo {
  height: 26px;
}
</style>
