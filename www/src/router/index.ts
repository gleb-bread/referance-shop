import { createRouter, createWebHashHistory } from 'vue-router';
import catalogPage from '../pages/catalogPage.vue';
import categoryPage from '../pages/categoryPage.vue';
import productPage from '../pages/productPage.vue';
import createOrderPage from '../pages/createOrderPage.vue';
import ordersPage from '../pages/ordersPage.vue';
import addProduct from '../pages/admin/addProduct.vue';
import addPromo from '../pages/admin/addPromo.vue';

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
  },
  {
    path: '/admin/add_product',
    name: 'addProduct',
    component: addProduct,
  },
  {
    path: '/admin/add_promo',
    name: 'addPromo',
    component: addPromo,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
