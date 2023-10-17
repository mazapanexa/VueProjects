import { createApp } from 'vue';
import App from './App.vue';
import { createWebHistory, createRouter } from 'vue-router';
import ProductList from './components/ProductList.vue';
import nosotros from './components/nosotros.vue';
import compras from './components/compras.vue';
import contacto from './components/contacto.vue';
import ubicacion from './components/ubicacion.vue';

const routes = [
  { path: '/', component: ProductList },
  { path: '/nosotros', component: nosotros },
  { path: '/compras', component: compras },
  { path: '/contacto', component: contacto },
  { path: '/ubicacion', component: ubicacion },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
