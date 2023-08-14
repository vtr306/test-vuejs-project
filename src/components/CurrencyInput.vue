<template>
  <b-input ref="inputRef" type="text" size="is-medium" />
</template>

<script>
import { useCurrencyInput } from "vue-currency-input";
import { watch } from "@vue/composition-api";

export default {
  name: "CurrencyInput",
  props: {
    value: Number,
    options: Object,
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
