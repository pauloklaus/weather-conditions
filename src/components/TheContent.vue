<template>
  <main class="main" ref="main">
    <div class="main__container">
      <CityCard
        v-for="(city, index) in cities"
        :key="city"
        :city="city"
        :show-details="isCurrentShowDetails(index)"
        :class="`main__container--order-${index}`"
        @focus="showDetails(index)"
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
    const cities = ["urubici,br", "nuuk,gl", "nairobi,ke"];
    const main = ref({});
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

    const showNextDetailsTime = 10_000;
    let detailsTimeout = null;

    function showNextDetails() {
      clearDetailsTimeout();

      detailsTimeout = setTimeout(() => {        
        detailsIndex.value = 
          detailsIndex.value < cities.length - 1
            ? detailsIndex.value + 1
            : 0;

        showNextDetails();
      }, showNextDetailsTime);
    }

    showNextDetails();

    onBeforeUnmount(() => {
      clearDetailsTimeout();
    });

    return {
      main,
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

.main__container--order-0 {
  order: 0;
}

.main__container--order-1 {
  order: 1;
}

.main__container--order-2 {
  order: 2;
}

@media (min-width: 640px) {
  .main__container {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 0;
    margin-bottom: 0;
    min-height: 100vh;
  }

  .main__container--order-0 {
    order: 1;
  }

  .main__container--order-1 {
    order: 0;
  }

  .main__container--order-2 {
    order: 2;
  }
}
</style>
