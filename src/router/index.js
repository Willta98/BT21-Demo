import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/frontend/Main'
import Shop from '@/views/frontend/Shop'
import Login from '@/views/frontend/Login'
import Control from '@/views/frontend/Control'
import Order from '@/views/backend/ControlOrder'
import Coupon from '@/views/backend/ControlCoupon'
import Product from '@/views/backend/ControlProduct'
import product from '@/views/frontend/Product'
import custormerOrder from '@/views/frontend/CustormerOrder'
import ordercreat from '@/views/frontend/Ordercreat'
import checkorder from '@/views/frontend/Checkorder'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail/:itemID',
      name: 'oneproduct',
      component: product
    },
    {
      path: '/control',
      name: 'Control',
      component: Control,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'product',
          name: 'product',
          component: Product,
          meta: { requiresAuth: true }
        },
        {
          path: 'order',
          name: 'order',
          component: Order,
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: Coupon,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/custormerOrder',
      name: 'custormerOrder',
      component: custormerOrder,
    },
    {
      path: '/ordercreat',
      name: 'ordercreat',
      component: ordercreat,
    },
    {
      path: '/checkorder/:OrderId',
      name: 'checkorder',
      component: checkorder,
    },
  ]
})

// const router = new VueRouter({
//   routes
// })

// export default router
