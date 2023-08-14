<template>
  <div>
    <h1 class="title">Produtos</h1>
    <ProductList :isActive="true" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  name: "ProductsView",
  components: {
    ProductList,
  },
};
</script>
