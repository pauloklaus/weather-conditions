<template>
  <div class="card" @mouseover="emitFocus" @click="emitFocus">
    <CityCardHeader :city="`${cityData.name}, ${cityData.country}`"/>

    <CityCardLoader v-if="isLoading" />

    <template v-else>
      <CityCardContent :temp="cityData.temp" />
      <CityCardFooter
        :show-details="showDetails"
        :humidity="cityData.humidity"
        :pressure="cityData.pressure"
        :updated-at="cityData.updatedAt"
      />
    </template>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import CityServiceFactory from "@/usecases/cities/CityServiceFactory";
import CustomError from "@/errors/CustomError";
import CityCardHeader from "./CityCardHeader.vue";
import CityCardContent from "./CityCardContent.vue";
import CityCardFooter from "./CityCardFooter.vue";
import CityCardLoader from "./CityCardLoader.vue";
import City from "@/usecases/cities/City";

export default {
  components: {
    CityCardHeader,
    CityCardContent,
    CityCardFooter,
    CityCardLoader,
  },
  props: {
    city: {
      type: String,
      required: true,
    },
    showDetails: {
      type: Boolean,
      default: false,
    },
  },
  setup({ city }, { emit }) {
    const isLoading = ref(true);
    const errorMessage = ref("");
    const hasError = computed(() => errorMessage.value !== "");

    function emitFocus() {
      if (!isLoading.value) {
        emit("focus");
      }
    }

    const cityService = CityServiceFactory.factory();
    const cityData = ref(City.factoryWithCityAndCountry(city));

    async function fetchCityWeather() {
      try {
        isLoading.value = true;
        errorMessage.value = "";

        const cityResponse = await cityService.getWeather(city);
        cityData.value = cityResponse.toJson();
      }
      catch (error) {
        errorMessage.value =
          error instanceof CustomError
            ? error.message
            : "There was an error retrieving the weather data.";
      }
      finally {
        isLoading.value = false;
      }
    }

    fetchCityWeather();

    return {
      isLoading,
      emitFocus,
      errorMessage,
      hasError,
      cityData,
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  background-color: var(--white);
  border-radius: 3px;
  box-shadow: 1px 1px 6px var(--box-shadow-color);
  margin: 0 auto;
  width: 252px;
}

.card:nth-child(n+2) {
  margin-top: 30px;
}
</style>
