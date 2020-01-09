<template>
  <div v-if="products.length"> <!--Se va mostrar siempre y cuando haya productos-->
    <paginate
        name="products"
        :list="products"
        :per="perPage"
    >
      <b-card-group columns>
        <product-item
          v-for="product in paginated('products')"
          :product="product"
          :key="product.id"
          @addToCart="addProductToCart"
        ></product-item>
      </b-card-group>

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
  import ProductItem from './ProductItem';

  export default {
    components: {
      ProductItem
    },
    mounted() {
      this.fetchProducts();
    },
    data () {
      return {
        paginate: ['products'],
        perPage: 3
      };
    },
    computed: {
      ...mapState('products', ['products']) //['products'] es la clave o se escribe igual como se tenga en state.js para este ejemplo
    },
    methods: {
      ...mapActions('products', ['fetchProducts']), //con esto se obtiene todos los productos
      ...mapMutations('cart', ['addProduct']),
      addProductToCart(product) {
        this.addProduct(product)
      }
    }
  };
</script>