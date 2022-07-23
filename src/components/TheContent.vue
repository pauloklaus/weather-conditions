<template>
  <main class="main">
    <div class="main__container">
      <CityCard v-for="city in cities" :key="city" :city="city" />
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import CityCard from "./CityCard/CityCard.vue";

export default defineComponent({
  components: { CityCard },
  setup() {
    const cities = ["nuuk,gl", "urubici,br", "nairobi,ke"];

    return {
      cities,
    };
  },
});
</script>

<style scoped>
.main__container {
  margin: 30px 34px;
}
</style>
