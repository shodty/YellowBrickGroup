import Vue from 'vue'
import App from './App.vue'
import commonComponents from './components/letters'
import commonCategories from './components/categories'
import commonIcons from './components/icons'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

commonComponents.forEach(component => {
    Vue.component(component.name, component);
});

commonCategories.forEach(component => {
  Vue.component(component.name, component);
});

commonIcons.forEach(component => {
  Vue.component(component.name, component);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
