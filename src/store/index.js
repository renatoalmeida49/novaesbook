import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      token: localStorage.getItem('token') || '',
      user: {}
    }
  },
  mutations: {
    auth_success(state, payload) {
      console.log('Mutation payload: ', payload.user)
      state.user = payload.user
    }
  },
  actions: {
    login(context, payload) {
      this.$http.post('http://localhost:5000/users/sign-in', {
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
