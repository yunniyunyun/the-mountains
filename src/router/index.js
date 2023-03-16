import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'hots',
        component: () => import('../views/front/ProductsHotComponent.vue')
      },
      {
        path: 'latestEvents',
        component: () => import('../views/front/ProductsLatestComponent.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsComponent.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartComponent.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/front/CartCheckComponent.vue')
      },
      {
        path: 'order',
        component: () => import('../views/front/CartOrderComponent.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/front/OrderComponent.vue')
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/front/ArticlesView.vue')
      },
      {
        path: 'article/:id',
        component: () => import('../views/front/ArticleView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/AdminCoupons.vue')
      },
      {
        path: 'article',
        component: () => import('../views/admin/AdminArticle.vue')
      }
    ]
  },
  // 404
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('../views/NotFound.vue')
  // },
  // 重新導向
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
