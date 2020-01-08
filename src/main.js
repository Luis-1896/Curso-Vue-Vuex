import Vue from 'vue'
import App from './App.vue'
import store from './store'

require('./plugins'); //Aqui van todos los plugins que vamos a utilizar

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
