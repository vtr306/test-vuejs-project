<template>
  <b-container>
    <b-form @submit="onSubmit">
      <b-form-group
        class="mb-4"
        id="input-group-1"
        label="Nome do Produto:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="product.name"
          placeholder="Insira o nome do produto"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mb-4"
        id="input-group-2"
        label="Descrição do Produto:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="product.description"
          placeholder="Insira a descrição do Produto"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mb-4"
        id="input-group-3"
        label="Preço do Produto:"
        label-for="input-3"
      >
        <CurrencyInput
          id="input-3"
          v-model="product.price"
          :value="product.price"
          step="0.01"
          :options="{ currency: 'BRL' }"
          placeholder="Insira o preço do Produto"
          required
        ></CurrencyInput>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar Produto</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
import CurrencyInput from "@/components/CurrencyInput.vue";

export default {
  data() {
    return {
      product: {
        description: "",
        name: "",
        price: 0,
      },
    };
  },
  components: {
    CurrencyInput,
  },
  methods: {
    ...mapActions(["saveProduct"]),
    onSubmit(event) {
      event.preventDefault();

      this.saveProduct(this.product);

      this.product = {
        description: "",
        name: "",
        price: 0,
      };
    },
  },
};
</script>
