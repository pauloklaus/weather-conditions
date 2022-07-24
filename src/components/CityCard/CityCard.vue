<template>
  <div class="card" @mouseover="emitFocus" @click="emitFocus">
    <CityCardHeader :city="`${cityData.name}, ${cityData.country}`"/>

    <CityCardError v-if="hasError" @tryAgain="fetchCityWeather" />

    <CityCardLoader v-else-if="isLoading" />

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
import { ref } from "vue";
import CityServiceFactory from "@/usecases/cities/CityServiceFactory";
import City from "@/usecases/cities/City";
import CustomError from "@/errors/CustomError";
import CityCardError from "./CityCardError.vue";
import CityCardLoader from "./CityCardLoader.vue";
import CityCardHeader from "./CityCardHeader.vue";
import CityCardContent from "./CityCardContent.vue";
import CityCardFooter from "./CityCardFooter.vue";

export default {
  components: {
    CityCardHeader,
    CityCardContent,
    CityCardFooter,
    CityCardLoader,
    CityCardError
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
    const hasError = ref(false);

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
        hasError.value = "";

        const cityResponse = await cityService.getWeather(city);
        cityData.value = cityResponse.toJson();
      }
      catch (error) {
        hasError.value = true;

        const errorMessage =
          error instanceof CustomError
            ? error.message
            : "There was an error retrieving the weather data.";
        
        console.error(errorMessage);
      }
      finally {
        isLoading.value = false;
      }
    }

    fetchCityWeather();

    return {
      isLoading,
      emitFocus,
      hasError,
      cityData,
      fetchCityWeather,
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
  box-shadow: 1px 1px 6px var(--gray5-opacity-10);
  margin: 0 auto;
  width: 252px;
}

.card:nth-child(n+2) {
  margin-top: 30px;
}
</style>
