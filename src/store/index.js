import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      token: localStorage.getItem('token') || '',
      user: {}
    }
  },
  mutations: {
    login(state, payload) {
      state.user = payload.user
    },
    logout(state) {
      state.token = '',
      state.user = ''
    },
  },
  actions: {
    async login(context, payload) {
      await axios.post('http://localhost:4000/users/sign-in', {
        email: payload.email,
        password: payload.password
      })
        .then(response => {
          const token = response.data.token
          const user = response.data.user

          localStorage.setItem('token', token)
          localStorage.setItem('user', user)

          payload.user = user

          context.commit('login', payload)
        })
      
    },
    logout(context) {
      localStorage.removeItem('token')

      context.commit('logout',)
    },
    async update(context, payload) {
      await axios.put('http://localhost:4000/users/update', {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        birthdate: payload.birthdate,
        city: payload.city,
        work: payload.work,
      })
        .then(response => {
          const user = response.data.user

          localStorage.setItem('user', user)

          payload.user = user

          context.commit('login', payload)
        })
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  plugins: [createPersistedState()]
})
