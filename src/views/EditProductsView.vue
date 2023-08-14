<template>
  <div>
    <h1 class="title">Editar Produto</h1>
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
