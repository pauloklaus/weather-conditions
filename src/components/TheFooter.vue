<template>
  <footer class="footer">
    <a :href="githubProjectUrl">{{ githubProjectUrl }}</a>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const githubProjectUrl = "https://github.com/pauloklaus/weather-now";

    return {
      githubProjectUrl,
    };
  },
});
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;

  background-color: var(--bg-color);
  padding: 5px 0;
  text-align: center;
}

.footer a {
  font-size: 0.7rem;
}
</style>
