<template>
  <b-container>
    <b-row>
      <b-col
        v-for="product in products"
        :key="product.id"
        class="col-md-4 col-sm-12 mb-4"
      >
        <b-card :title="product.name">
          <b-card-text>
            {{ product.description }} <br />
            {{ product.price | formatBRL }}
          </b-card-text>
          <div v-if="product.isActive" class="buttons-list">
            <b-button variant="warning"> Editar </b-button>
            <b-button
              variant="secondary"
              @click.prevent="inactiveProduct(product.id)"
            >
              Desativar
            </b-button>
          </div>
          <div v-else class="buttons-list">
            <b-button
              variant="danger"
              @click.prevent="deleteProduct(product.id)"
            >
              Deletar
            </b-button>
            <b-button
              variant="primary"
              @click.prevent="activeProduct(product.id)"
            >
              Ativar
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
.buttons-list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
</style>
