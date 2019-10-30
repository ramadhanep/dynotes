import Vue from 'vue'
import App from './App.vue'
import router from './routes/web'
import VueSessionStorage from 'vue-sessionstorage'

Vue.use(VueSessionStorage)

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
})

