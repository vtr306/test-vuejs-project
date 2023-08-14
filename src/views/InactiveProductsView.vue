<template>
  <div>
    <h1 class="title">Produtos Inativos</h1>
    <ProductList :isActive="false" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  name: "InactiveProductsView",
  components: {
    ProductList,
  },
};
</script>
