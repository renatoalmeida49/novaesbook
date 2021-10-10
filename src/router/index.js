import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/login/index.vue'),
    meta: {
      title: 'Login - Novaesbook'
    }
  },
  {
    path: '/',
    name: 'TheLayout',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/home',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/pages/home/index.vue'),
        meta: {
          title: 'Home - Novaesbook'
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/pages/settings/index.vue'),
        meta: {
          title: 'Configurações - Novaesbook'
        }
      },
      {
        path: 'profile',
        component: () => import('@/views/pages/profile/index.vue'),
        children: [
          {
            path: '',
            name: 'Profile',
            component: () => import('@/views/pages/profile/home/index.vue')
          },
          {
            path: 'friends',
            name: 'Friends',
            component: () => import('@/views/pages/profile/friends/index.vue')
          },
          {
            path: ':userId',
            name: 'UserProfile',
            component: () => import('@/views/pages/profile/home/index.vue')
          },
          {
            path: ':userId/friends',
            name: 'UserFriends',
            component: () => import('@/views/pages/profile/friends/index.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '*', redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      x: 0,
      y: 0,
      behavior: 'smooth'
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Novaesbook';

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const loggedIn = localStorage.getItem('token')

    if (loggedIn) {
      next()
      return
    }

    next('/login')
  } else {
    next()
  }
})

export default router
