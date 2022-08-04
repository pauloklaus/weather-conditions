<template>
  <div class="card-header">
    <EditAction
      v-if="editing"
      :value="city"
      :is-valid="isValidInput"
      @validate="validateInput"
      @confirm="updateCity"
      @cancel="cancelEditing"
    />

    <div v-else class="card-header__title">
      <a href="#" @click.stop="startEditing">{{ city }}</a>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import EditAction from "@/components/InputAction.vue";
import isValidCityAndCountry from "@/helpers/IsValidCityAndCountry";

export default defineComponent({
  components: { EditAction },
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  setup(_, { emit }) {
    const editing = ref(false);
    const isValidInput = ref(false);

    function startEditing() {
      editing.value = true;
    }

    function cancelEditing() {
      editing.value = false;
    }

    function updateCity(newCity) {
      emit("updateCity", newCity);
      cancelEditing();
    }

    function validateInput(newValue) {
      isValidInput.value = isValidCityAndCountry(newValue);
    }

    return {
      editing,
      isValidInput,
      startEditing,
      cancelEditing,
      updateCity,
      validateInput,
    };
  },
});
</script>

<style scoped>
.card-header {
  border-bottom: 1px solid var(--gray2);
  font-size: 1.1rem;
  text-align: center;
}

.card-header__title {
  margin: 13px 0 7px;
}

.card-header__title a {
  text-decoration: none;
}
</style>
