import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import './plugins/vantui'
import './plugins/flexible'

Vue.filter('filterMoney', function (val) {
  let newVal = Number(val)
  return '￥' + newVal.toFixed(2) + '元'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
