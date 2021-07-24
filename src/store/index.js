import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    }
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

          payload.user = user

          context.commit('login', payload)
        })
      
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
})
