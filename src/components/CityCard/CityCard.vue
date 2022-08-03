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
import { computed, onBeforeUnmount, ref, toRefs } from "vue";
import GetCityWeather from "@/usecases/GetCityWeather";
import City from "@/services/cities/City";
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
  setup(props, { emit }) {
    const { city, showDetails } = toRefs(props);

    const isLoading = ref(true);
    const hasError = ref(false);
    const cardHeight = computed(
      () => showDetails.value ? "268px" : "225px"
    );

    function emitFocus() {
      if (!isLoading.value) {
        emit("focus");
      }
    }

    const refreshCityDataTime = 10 * 60 * 1_000;
    let refreshTimeout = null;

    function clearRefreshTimeout() {
      if (refreshTimeout) {
        clearTimeout(refreshTimeout);
      }
    }

    function refreshCityData() {
      clearRefreshTimeout();

      refreshTimeout = setTimeout(() => {
        fetchCityWeather();
      }, refreshCityDataTime);
    }

    const cityData = ref(City.factoryWithCityAndCountry(city.value));

    async function fetchCityWeather() {
      try {
        isLoading.value = true;
        hasError.value = false;

        const cityResponse = await GetCityWeather.execute(city.value);
        cityData.value = cityResponse.toJson();
        refreshCityData();
      }
      catch {
        hasError.value = true;
      }
      finally {
        isLoading.value = false;
      }
    }

    fetchCityWeather();

    onBeforeUnmount(() => {
      clearRefreshTimeout();
    });

    return {
      isLoading,
      hasError,
      cardHeight,
      emitFocus,
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
  justify-content: space-between;

  background-color: var(--bg-color);
  border-radius: 3px;
  box-shadow: 1px 1px 6px var(--gray5-opacity-10);
  margin: 0 auto;

  transition: height 0.2s;
  height: v-bind(cardHeight);
  min-width: 252px;
  width: 252px;
}

.card {
  margin-top: 30px;
}

@media (min-width: 640px) {
  .card {
    margin: 0 20px;
  }
}
</style>
