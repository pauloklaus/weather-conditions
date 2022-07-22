<template>
  <TheTopbar />
  <TheContent />
</template>

<script>
import { defineComponent } from "vue";
import TheTopbar from "./components/TheTopbar.vue";
import TheContent from "./components/TheContent.vue";

export default defineComponent({
  components: { TheTopbar, TheContent },
});
</script>
