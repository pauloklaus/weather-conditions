<template>
  {{ cityData }}
</template>

<script>
import { computed, ref } from "vue";
import CityServiceFactory from "@/services/cities/CityServiceFactory";
import CustomError from "@/errors/CustomError";
import City from "@/services/cities/City";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup({ name }) {
    const isLoading = ref(true);
    const errorMessage = ref("");
    const hasError = computed(() => errorMessage.value !== "");

    const cityService = CityServiceFactory.factory();
    const cityData = ref(new City({ name }).toJson());

    async function fetchCityWeather() {
      errorMessage.value = "";
      try {
        isLoading.value = true;
        const city = await cityService.getWeather(name);
        cityData.value = city.toJson();
      }
      catch (error) {
        errorMessage.value = 
          error instanceof CustomError
            ? error.message
            : "Houve um erro ao recuperar os dados meteorológicos.";
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
