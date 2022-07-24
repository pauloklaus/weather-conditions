<template>
  <main class="main">
    <div class="main__container">
      <CityCard
        v-for="(city, index) in cities"
        :key="city"
        :city="city"
        :show-details="isCurrentShowDetails(index)"
        @mouseover="showDetails(index)"
      />
    </div>
  </main>
</template>

<script>
import { defineComponent, onBeforeUnmount, ref } from "vue";
import CityCard from "./CityCard/CityCard.vue";

export default defineComponent({
  components: { CityCard },
  setup() {
    const cities = ["nuuk,gl", "urubici,br", "nairobi,ke"];
    const detailsIndex = ref(0);

    function isCurrentShowDetails(index) {
      return detailsIndex.value === index;
    }

    function showDetails(index) {
      return detailsIndex.value = index;
    }

    function clearDetailsTimeout() {
      if (detailsTimeout) {
        clearTimeout(detailsTimeout);
      }
    }

    function showNextDetails() {
      clearDetailsTimeout();

      detailsTimeout = setTimeout(() => {        
        detailsIndex.value = 
          detailsIndex.value < cities.length - 1
            ? detailsIndex.value + 1
            : 0;

        showNextDetails();
      }, 2_000);
    }

    let detailsTimeout = null;

    showNextDetails();

    onBeforeUnmount(() => {
      clearDetailsTimeout();
    });

    return {
      cities,
      isCurrentShowDetails,
      showDetails,
    };
  },
});
</script>

<style scoped>
.main__container {
  margin: 30px 34px;
}
</style>
