import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLayout from '../views/pages/TheLayout'
import Home from '../views/pages/home'
import Settings from '../views/pages/settings'
import Login from '../views/pages/login'
import NotFound from '../views/pages/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TheLayout',
    component: TheLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
      },
      {
        path: '*',
        name: '404',
        component: NotFound
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
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
