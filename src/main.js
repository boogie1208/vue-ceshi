// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入完整的mint-ui  
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// Vue.use(MintUI)

// 按需引入 vant 的 组件
import { NavBar ,Tabbar, TabbarItem,Swipe, SwipeItem} from 'vant';

Vue
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe).use(SwipeItem)

import vueRource from 'vue-resource'
Vue.use(vueRource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
