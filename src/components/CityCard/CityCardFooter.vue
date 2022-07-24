<template>
  <div class="card-footer">
    <div class="card-footer__data">
      <div>
        <span class="card-footer__data--title">HUMIDITY</span>
        <br />
        <span class="card-footer__data__humidity">
          {{ humidity }}
        </span>
        <span class="card-footer__data--symbol">%</span>
      </div>

      <div>
        <span class="card-footer__data--title">PRESSURE</span>
        <br />
        <span class="card-footer__data__pressure">
          {{ pressure }}
        </span>
        <span class="card-footer__data--symbol">hPa</span>
      </div>
    </div>

    <div class="card-footer__updated">
      Updated at {{ hourFormatter(updatedAt) }}
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, toRefs } from "vue";
import hourFormatter from "@/helpers/HourFormatter";

export default defineComponent({
  props: {
    showDetails: {
      type: Boolean,
      default: false,
    },
    pressure: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    const { showDetails } = toRefs(props);
    const detailsHeight = computed(() => showDetails.value ? "52px" : "0");

    return {
      detailsHeight,
      hourFormatter,
    };
  },
});
</script>

<style scoped>
.card-footer {
  background-color: var(--gray1-opacity50);
}

.card-footer__data {
  display: flex;
  height: v-bind(detailsHeight);
  overflow: hidden;
  transition: height 0.2s;
}

.card-footer__data>div {
  padding-top: 8px;
  text-align: center;
  width: 50%;
}

.card-footer__data--title {
  color: var(--gray3);
  font-size: 0.6rem;
}

.card-footer__data--symbol {
  font-size: 0.6rem;
}

.card-footer__updated {
  color: var(--gray3);
  font-size: 10px;
  margin-top: 8px;
  padding-bottom: 14px;
  text-align: center;
}
</style>
