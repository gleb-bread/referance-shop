import { createRouter, createWebHashHistory } from 'vue-router'
import catalogPage from '../pages/catalogPage.vue'
import categoryPage from '../pages/categoryPage.vue'
import productPage from '../pages/productPage.vue';

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
