import { api } from '../../services/api'

const state = {
    token: localStorage.getItem('token') || '',
    user: {}
}

const mutations = {
    login(state, payload) {
        state.user = payload.user
    },
    logout(state) {
        state.token = '',
        state.user = ''
    },
}

const actions = {
    async login(context, payload) {
        await api.post('/users/sign-in', {
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
        await api.put('/users/update', {
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
}

const getters = {
    user(state) {
        return state.user
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}