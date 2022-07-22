<template>
  <TheTopbar />
  <TheContent />
</template>

<script>
import { defineComponent } from "vue";
import CustomError from "./errors/CustomError";
import CityFactory from "./services/cities/CityFactory";
import TheTopbar from "./components/TheTopbar.vue";
import TheContent from "./components/TheContent.vue";

export default defineComponent({
  setup() {
    async function refreshCitiesWeather() {
      try {
        const cityService = CityFactory.factory();
        const weathersResponse = await Promise.all(["Nuuk,GL", "Urubici,BR", "Nairobi,KE"].map(name => cityService.getWeather(name)));
        console.log(weathersResponse);
      }
      catch (error) {
        if (error instanceof CustomError) {
          console.log(error.message);
        }
        else {
          console.log("Houve um erro ao recuperar os dados metereológicos.");
        }
      }
    }
    refreshCitiesWeather();
  },
  components: { TheTopbar, TheContent }
});
</script>
