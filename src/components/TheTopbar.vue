<template>
  <header class="topbar">
    <img class="topbar__logo" src="@/assets/logo.svg" />
  </header>
</template>

<style scoped>
.topbar {
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--white);
  box-shadow: 0 0 3px var(--box-shadow-color);
  height: 56px;
}

.topbar__logo {
  height: 26px;
}
</style>
