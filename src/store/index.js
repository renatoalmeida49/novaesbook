import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user.module'
import post from './modules/post.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    post
  },
  plugins: [
    createPersistedState({
      paths: ["user"]
    })
  ]
})
