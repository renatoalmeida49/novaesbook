import { api } from '../../services/api'
import store from '../index'

const getDefaultState = () => {
    return {
        token: localStorage.getItem('token') || '',
        user: {}
    }
}

const state = getDefaultState()

const mutations = {
    login(state, payload) {
        state.user = payload.user
    },
    logout(state) {
        Object.assign(state, getDefaultState())
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

        const user = await api.get('/users/')
        
        store.dispatch('post/getMyPosts', user.data.posts)
        store.dispatch('relation/getMyRelations', {
            followers: Array.from(user.data.followers).map(follower => {
                return follower.from
            }),
            following: Array.from(user.data.following).map(follow => {
                return follow.to
            })
        })
        
    },
    logout(context) {
        localStorage.removeItem('token')

        context.commit('logout')
        store.dispatch('post/resetPosts')
        store.dispatch('relation/resetRelation')
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