<template>
  <ProductList :isActive="true" />
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
