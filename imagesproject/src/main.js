import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue';
import store from './store/imageStore';
Vue.config.productionTip = false
import Vuetify from 'vuetify'

Vue.use(Vuetify)
new Vue({
  store,Vuetify,
  render: h => h(App),
}).$mount('#app')
