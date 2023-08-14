<template>
  <div class="columns is-multiline">
    <div
      v-for="product in products"
      :key="product.id"
      class="column is-one-third"
    >
      <div class="card">
        <div class="card-content">
          <div class="title">
            {{ product.name }} <br />
            {{ product.price | formatBRL }}
          </div>
          <div class="subtitle">{{ product.description }}</div>
        </div>
        <footer class="card-footer">
          <template v-if="product.isActive">
            <router-link
              tag="span"
              :to="'/edit/' + product.id"
              class="card-footer-item"
              >Editar</router-link
            >
            <span
              class="card-footer-item"
              @click.prevent="inactiveProduct(product.id)"
            >
              Desativar
            </span>
          </template>
          <template v-else>
            <span
              @click.prevent="deleteProduct(product.id)"
              class="card-footer-item"
            >
              Deletar
            </span>
            <span
              @click.prevent="activeProduct(product.id)"
              class="card-footer-item"
            >
              Ativar
            </span>
          </template>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    isActive: Boolean,
  },
  methods: {
    ...mapActions([
      "getAllProducts",
      "deleteProductByID",
      "inactiveProductByID",
      "activeProductByID",
    ]),
    deleteProduct(id) {
      if (confirm("Quer deletar esse produto?")) {
        this.deleteProductByID(id);
      }
    },
    inactiveProduct(id) {
      if (confirm("Quer desativar esse produto?")) {
        this.inactiveProductByID(id);
      }
    },
    activeProduct(id) {
      if (confirm("Quer ativar esse produto?")) {
        this.activeProductByID(id);
      }
    },
  },
  computed: {
    ...mapGetters(["productsList", "inactiveProductsList"]),
    products() {
      if (this.isActive) {
        return this.productsList;
      } else {
        return this.inactiveProductsList;
      }
    },
  },
  created() {
    this.getAllProducts(this.isActive);
  },
};
</script>
<style>
@import "@/assets/scss/ProductList.scss";
</style>
