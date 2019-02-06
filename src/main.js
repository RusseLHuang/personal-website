import Vue from 'vue'
import VueScrollActive from 'vue-scrollactive';
import VueRouter from 'vue-router';
import App from './App.vue'
import Homepage from './components/Homepage.vue';

Vue.config.productionTip = false
Vue.use(VueScrollActive);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Homepage },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')