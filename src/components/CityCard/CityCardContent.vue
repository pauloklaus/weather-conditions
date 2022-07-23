<template>
  <div class="card-content" :class="colorByTemp">
    <div class="card-content__temp">{{ temp }}</div>
    <div class="card-content__deg">&deg;</div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    temp: {
      type: Number,
      required: true,
    },
  },
  setup({ temp }) {
    const colorByTemp = computed(() => {
      const colorClass = "card-content--";

      if (temp <= 5) {
        return `${colorClass}blue`;
      }

      if (temp >= 25) {
        return `${colorClass}red`;
      }

      return `${colorClass}orange`;
    });

    return {
      colorByTemp,
    };
  },
});
</script>

<style scoped>
.card-content {
  display: flex;
  justify-content: center;
  margin-top: 26px;
}

.card-content__temp {
  font-size: 5rem;
}

.card-content__deg {
  font-size: 2.5rem;
  margin-top: 6px;
}

.card-content--blue > div {
  color: var(--info);
}

.card-content--red > div {
  color: var(--danger);
}

.card-content--orange > div {
  color: var(--warning);
}
</style>
