import { api } from '../../services/api'

// MUTATIONS

export const LOGIN = 'login'
export const LOGOUT = 'logout'
export const UPDATE = 'update'

const getDefaultState = () => {
  return {
    token: localStorage.getItem('token') || '',
    user: {},
    isAuthenticaded: false
  }
}

const state = getDefaultState()

const mutations = {
  login(state, payload) {
    state.user = payload.user
    state.token = payload.token
    state.isAuthenticaded = true
  },
  logout(state) {
    Object.assign(state, getDefaultState())
  },
}

const actions = {
  [LOGIN](context, payload) {
    return new Promise((resolve, reject) => {
      api.post('/users/sign-in', {
        email: payload.email,
        password: payload.password
      })
        .then(response => {
          localStorage.setItem('token', response.data.token)

          context.commit('login', response.data)

          resolve(response.data)
        })
        .catch((erro) => {
          console.log("Erro de autentição!")
          reject(erro)
        })
    })
      
  },

  [LOGOUT](context) {
    localStorage.removeItem('token')

    context.commit('logout')
  },

  [UPDATE](context, payload) {
    return new Promise((resolve, reject) => {
      api.put('/users/update', {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        birthdate: payload.birthdate,
        city: payload.city,
        work: payload.work,
      })
        .then(response => {  
          payload.user = response.data.user
  
          context.commit('login', payload)

          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  async verifyAuth(context) {
    if(localStorage.getItem('token')) {
      await api.get('/users/verify')
        .then(response => {
          context.commit('login', response.data)
        })
        .catch(() => {
          context.commit('logout')
        })
    } else {
      context.commit('logout')
    }
  }
}

const getters = {
  user(state) {
    return state.user
  },

  isAuthenticaded(state) {
    return state.isAuthenticaded
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}