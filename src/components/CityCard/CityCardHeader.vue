<template>
  <div class="card-header">{{ city }}</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<style scoped>
.card-header {
  border-bottom: 1px solid var(--divider);
  font-size: 1.1rem;
  padding: 13px 0 7px;
  text-align: center;
  width: 100%;
}
</style>
