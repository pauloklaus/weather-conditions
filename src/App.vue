<template>
  <TheTopbar />
  <TheContent />
  <TheFooter />
</template>

<script>
import { defineComponent } from "vue";
import TheTopbar from "./components/TheTopbar.vue";
import TheContent from "./components/TheContent.vue";
import TheFooter from "./components/TheFooter.vue";

export default defineComponent({
  components: { TheTopbar, TheContent, TheFooter },
});
</script>
