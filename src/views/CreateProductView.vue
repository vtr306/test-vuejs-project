<template>
  <div class="about">
    <h1>Adicionar Produto</h1>
    <ProductForm />
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "CreateProductView",
  components: {
    ProductForm,
  },
};
</script>

<style></style>
