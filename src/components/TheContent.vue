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
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
import StepHandler from "@/helpers/StepHandler";
import isNumber from "@/helpers/IsNumber";
import CityCard from "./CityCard/CityCard.vue";

export default defineComponent({
  components: { CityCard },
  setup() {
    const cities = ["urubici,br", "nuuk,gl", "nairobi,ke"];
    const main = ref({});
    const cardStepHandler = new StepHandler({ listSize: cities.length });
    const currentStep = ref(cardStepHandler.currentStep);

    const showNextDetailsTime = 10_000;
    let detailsTimeout = null;

    function isCurrentShowDetails(index) {
      return currentStep.value === index;
    }

    function clearDetailsTimeout() {
      if (detailsTimeout) {
        clearTimeout(detailsTimeout);
      }
    }

    function showDetails(newIndex) {
      clearDetailsTimeout();

      if (isNumber(newIndex)) {
        currentStep.value = cardStepHandler.jumpToStep(newIndex);
      }

      detailsTimeout = setTimeout(() => {
        currentStep.value = cardStepHandler.next();
        showDetails();
      }, showNextDetailsTime);
    }

    function updateStepDirection() {
      if (main.value.clientWidth < 640 && cardStepHandler.isWalkingBackwards()) {
        cardStepHandler.switchToWalkForward();
      }

      if (main.value.clientWidth >= 640 && cardStepHandler.isWalkingForward()) {
        cardStepHandler.switchToWalkBackwards();
      }
    }

    onMounted(() => {
      window.addEventListener("resize", updateStepDirection);
      updateStepDirection();
      showDetails();
    });

    onBeforeUnmount(() => {
      clearDetailsTimeout();
      window.removeEventListener("resize", updateStepDirection);
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
}
</style>
