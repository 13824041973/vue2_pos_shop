import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
// 按需引入element-ui
import { setupElementUi } from '@/plugins/element';
setupElementUi(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
