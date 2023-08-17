<template>
  <div class="columns is-multiline">
    <div
      v-for="product in products"
      :key="product.id"
      class="column is-one-third"
    >
      <div class="card" role="group" aria-label="Produto" tabindex="0">
        <div class="card-content">
          <div class="title">
            <span>{{ product.name }}</span> <br />
            <span>{{ product.price | formatBRL }}</span>
          </div>
          <div class="subtitle">
            <span>{{ product.description }}</span>
          </div>
        </div>
        <footer class="card-footer">
          <template v-if="product.isActive">
            <span
              tabindex="0"
              tag="span"
              class="card-footer-item"
              @click="navigateToEdit(product.id)"
              @keydown.enter="navigateToEdit(product.id)"
            >
              Editar
            </span>
            <span
              tabindex="0"
              class="card-footer-item"
              @click="inactiveProduct(product.id)"
              @keydown.enter="inactiveProduct(product.id)"
            >
              Desativar
            </span>
          </template>
          <template v-else>
            <span
              tabindex="0"
              @click.prevent="deleteProduct(product.id)"
              @keydown.enter="deleteProduct(product.id)"
              class="card-footer-item"
            >
              Deletar
            </span>
            <span
              tabindex="0"
              @click.prevent="activeProduct(product.id)"
              @keydown.enter="activeProduct(product.id)"
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
    navigateToEdit(id) {
      this.$router.push(`/edit/${id}`);
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
