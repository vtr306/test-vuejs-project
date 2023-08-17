<template>
  <b-input
    ref="inputRef"
    type="text"
    size="is-medium"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :required="required"
  />
</template>

<script>
import { useCurrencyInput } from "vue-currency-input";
import { watch } from "@vue/composition-api";

export default {
  name: "CurrencyInput",
  props: {
    value: Number,
    options: Object,
    id: String,
    name: String,
    placeholder: String,
    required: Boolean,
  },
  setup(props) {
    const { inputRef, setValue } = useCurrencyInput(props.options);

    watch(
      () => props.value,
      (value) => {
        setValue(value);
      }
    );

    return { inputRef };
  },
};
</script>
