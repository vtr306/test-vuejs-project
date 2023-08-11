<template>
  <ProductList :isActive="false" />
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
