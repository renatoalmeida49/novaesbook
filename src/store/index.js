import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user.module'
import post from './modules/post.module'
import relation from './modules/relations.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    post,
    relation
  },
  plugins: [
    createPersistedState({
      paths: ["user", "post", "relation"]
    })
  ]
})
