<template>
  <div class="card">
    <CityCardHeader :city="`${cityData.name}, ${cityData.country}`"/>
    <CityCardContent :temp="cityData.temp" />
    <CityCardFooter
      :humidity="cityData.humidity"
      :pressure="cityData.pressure"
      :updatedAt="cityData.updatedAt"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import CityServiceFactory from "@/usecases/cities/CityServiceFactory";
import CustomError from "@/errors/CustomError";
import CityCardHeader from "./CityCardHeader.vue";
import CityCardContent from "./CityCardContent.vue";
import CityCardFooter from "./CityCardFooter.vue";
import City from "@/usecases/cities/City";

export default {
  components: {
    CityCardHeader,
    CityCardContent,
    CityCardFooter,
  },
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  setup({ city }) {
    const isLoading = ref(true);
    const errorMessage = ref("");
    const hasError = computed(() => errorMessage.value !== "");

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
      errorMessage,
      hasError,
      cityData,
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 3px;
  margin: 0 auto;
  width: 252px;
  background-color: var(--white);
  box-shadow: 1px 1px 6px var(--box-shadow-color);
}

.card:nth-child(n+2) {
  margin-top: 30px;
}
</style>
