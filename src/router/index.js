import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/home'
import Settings from '../views/pages/settings'
import Profile from '../views/pages/profile'

import HomeProfile from '../views/pages/profile/home'
import Friends from '../views/pages/profile/friends'

import Login from '../views/pages/login'
import NotFound from '../views/pages/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login - Novaesbook'
    }
  },
  {
    path: '/',
    name: 'TheLayout',
    component: () => import("@/views/layout/index.vue"),
    redirect: '/home',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Home - Novaesbook'
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
        meta: {
          title: 'Configurações - Novaesbook'
        }
      },
      {
        path: 'profile',
        component: Profile,
        children: [
          {
            path: '',
            name: 'Profile',
            component: HomeProfile
          },
          {
            path: 'friends',
            name: 'Friends',
            component: Friends
          },
          {
            path: ':userId',
            name: 'UserProfile',
            component: HomeProfile
          },
          {
            path: ':userId/friends',
            name: 'UserFriends',
            component: Friends
          },
        ]
      },
    ]
  },
  {
    path: '*',
    name: '404',
    component: NotFound
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
