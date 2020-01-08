<template>
  <div v-if="products.length"> <!--Se va mostrar siempre y cuando haya productos-->
  {{perPage}}
    <paginate
        name="products"
        :list="products"
        :per="perPage"
    >
    <p v-for="product in paginated('products')" :key="product.id">{{product.name}}</p>
    </paginate>
    <paginate-links
        for="products"
        :classes="{
            'ul': 'pagination',
            'li': 'page-item',
            'li > a': 'page-link'
            }"
    ></paginate-links>
  </div>
  <b-alert v-else show variant="info"> No hay productos que mostrar</b-alert>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  mounted() {
    this.fetchProducts();
  },
  data () {
    return {
      paginate: ["products"],
      perPage: 3
    };
  },
  computed: {
    ...mapState("products", ["products"]) //['products'] es la clave o se escribe igual como se tenga en state.js para este ejemplo
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]) //con esto se obtiene todos los productos
  }
};
</script>