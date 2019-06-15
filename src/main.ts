import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import VueScrollActive from 'vue-scrollactive';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import App from './App.vue';
import Homepage from './components/Homepage.vue';
import Autocomplete from './components/Autocomplete.vue';

Vue.config.productionTip = false;
Vue.use(VueScrollActive);
Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  routes: [
    { path: '/', component: Homepage },
    { path: '/autocomplete', component: Autocomplete },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
