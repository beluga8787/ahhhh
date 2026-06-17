import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import CartView from '../Views/CartView.vue'
import ProductsView from '@/Views/ProductsView.vue'
import ProductView from '../Views/ProductView.vue'
import SinginView from '../Views/SinginView.vue'
import SingupView from '@/Views/SingupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'home'
    },
    {
      path: '/cart',
      component: CartView,
      name: 'cart'
    },
    {
      path: '/products',
      component: ProductsView,
      name: 'products'
    },
    {
      path: '/product/:id',
      component: ProductView,
      name: 'product'

    },
    {
      path: '/signin',
      component: SinginView,
      name: 'signin'
    },
    {
      path: '/signup',
      component: SingupView,
      name: 'signup'

    }
  ],
})

export default router
