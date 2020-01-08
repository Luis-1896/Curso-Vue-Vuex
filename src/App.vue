<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  name: "app",
  components: {
    ProductList
  }
};
</script>

