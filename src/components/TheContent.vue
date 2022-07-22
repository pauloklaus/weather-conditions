<template>
  <main class="content">
    <CityCard v-for="city in cities" :key="city" :name="city" />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import CityCard from "./CityCard/CityCard.vue";

export default defineComponent({
  components: { CityCard },
  setup() {
    const cities = ["Nuuk,GL", "Urubici,BR", "Nairobi,KE"];

    return {
      cities,
    };
  },
});
</script>
