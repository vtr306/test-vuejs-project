<template>
  <form role="form">
    <b-field label="Nome do Produto:" label-for="nome">
      <b-input
        id="nome"
        name="nome"
        v-model="product.name"
        placeholder="Insira o nome do produto"
        size="is-medium"
        required
      />
    </b-field>

    <b-field label="Descrição do Produto:" label-for="descrição">
      <b-input
        id="descrição"
        name="descrição"
        v-model="product.description"
        placeholder="Insira a descrição do produto"
        size="is-medium"
        required
      ></b-input>
    </b-field>

    <b-field label="Preço do Produto:" label-for="preço">
      <CurrencyInput
        id="preço"
        name="preço"
        v-model="product.price"
        :value="product.price"
        step="0.01"
        :options="{ currency: 'BRL' }"
        placeholder="Insira o preço do Produto"
        required
      ></CurrencyInput>
    </b-field>

    <b-button size="is-medium" type="is-dark" @click.prevent="onSubmit()"
      ><span v-if="!this.id">Enviar Produto</span
      ><span v-else>Editar Produto</span></b-button
    >
  </form>
</template>

<script>
import { mapActions } from "vuex";
import CurrencyInput from "@/components/CurrencyInput.vue";

export default {
  props: {
    id: String,
  },
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
    ...mapActions(["saveProduct", "getProductByID", "updateProductByID"]),
    onSubmit() {
      if (this.id) {
        this.updateProductByID({
          id: this.id,
          product: this.product,
        });
      } else {
        this.saveProduct(this.product);

        this.product = {
          description: "",
          name: "",
          price: 0,
        };
      }
    },
  },
  async created() {
    if (this.id) {
      let product = await this.getProductByID(this.id);
      this.product = {
        description: product.description,
        name: product.name,
        price: product.price,
      };
    }
  },
};
</script>
