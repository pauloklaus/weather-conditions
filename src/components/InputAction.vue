<template>
  <div class="input-action">
    <div class="input-action__input">
      <input
        type="text"
        ref="inputField"
        v-model="inputValue"
        @input="validate"
        @keydown.enter="confirm"
        @keydown.esc="cancel"
      />
    </div>

    <button
      data-test="confirm-button-test"
      class="input-action__button"
      @click="confirm"
      :disabled="!isValid"
    >
      <img src="@/assets/images/confirm.svg" />
    </button>
  
    <button class="input-action__button" @click="cancel">
      <img src="@/assets/images/cancel.svg" />
    </button>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, toRefs } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: "",
    },
    isValid: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const inputField = ref();
    const inputValue = ref(props.value);
    const { isValid } = toRefs(props);

    function validate() {
      emit("validate", inputValue.value);
    }

    function confirm() {
      if (isValid.value) {
        emit("confirm", inputValue.value);
      }
    }

    function cancel() {
      emit("cancel");
    }

    onMounted(() => {
      inputField.value.select();
      inputField.value.focus();
      validate(inputValue.value);
    });

    return {
      inputField,
      inputValue,
      validate,
      confirm,
      cancel,
    };
  },
});
</script>

<style scoped>
.input-action {
  display: flex;
}

.input-action__input {
  margin: 10px;
}

.input-action__input input {
  background-color: var(--color-background);
  width: 100%;
}

.input-action__button {
  padding-top: 5px;
  background-color: var(--color-background);
  color: var(--gray4);
  cursor: pointer;
  width: 56px;
}

.input-action__button img {
  background-color: var(--color-background);
  filter: invert(50%);
}

.input-action__button:disabled img {
  filter: invert(90%);
}

.dark-mode .input-action__button:disabled img {
  filter: invert(10%);
}
</style>
