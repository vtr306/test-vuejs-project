<template>
  <div class="about">
    <h1>Editar Produto</h1>
    <ProductForm :id="id" />
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "EditProductView",
  props: {
    id: String,
  },
  components: {
    ProductForm,
  },
};
</script>

<style></style>
