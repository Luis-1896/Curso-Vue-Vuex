import Vue from 'vue'
import Vuex from 'vuex'
import localForage from "localforage";
import VuexPersistence from 'vuex-persist'
import products from '../modules/products';
import cart from '../modules/cart';

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: localForage,//se guarda en indexedDB
  //para que se guarde en localStorage es storage:window.window.localStorage
  modules: ['cart'] //solo se guardara el arreglo de cart
})


export default new Vuex.Store({
  state: {

  },
  modules: {
    products,
    cart
  },
  plugins: [vuexLocal.plugin]
})
