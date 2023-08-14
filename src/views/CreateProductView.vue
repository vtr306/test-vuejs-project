<template>
  <div>
    <h1 class="title">Adicionar Produto</h1>
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
