import { createRouter, createWebHashHistory } from 'vue-router';
import catalogPage from '../pages/catalogPage.vue';
import categoryPage from '../pages/categoryPage.vue';
import productPage from '../pages/productPage.vue';
import createOrderPage from '../pages/createOrderPage.vue';
import ordersPage from '../pages/ordersPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: catalogPage
  },
  {
    path: '/category',
    name: 'category',
    component: categoryPage
  },
  {
    path: '/product/:id',
    name: 'product',
    component: productPage,
  },
  {
    path: '/orders',
    name: 'createOrder',
    component: createOrderPage,
  },
  {
    path: '/orders_list',
    name: 'ordersList',
    component: ordersPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
