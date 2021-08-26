import { api } from '../../services/api'

const getDefaultState = () => {
    return {
        followers: [],
        following: []
    }
}

const state = getDefaultState()

const mutations = {
    followers(state, payload) {
        state.followers = payload
    },
    following(state, payload) {
        state.following = payload
    },
    newFollowing(state, payload) {
        state.following.push(payload)
    },
    removeFollowing(state, payload) {
        state.following = state.following.filter(user => {
            return user.id != payload.id
        })
    },
    resetRelation(state) {
        Object.assign(state, getDefaultState())
    }
}

const actions = {
    getMyRelations(context, payload) {
        context.commit('followers', payload.followers)
        context.commit('following', payload.following)
    },
    resetRelation(context) {
        context.commit('resetRelation')
    },
    updateRelation(context, payload) {
        api.put('/relations/', {
            user_to: payload.id
        })
            .then(() => {
                if (payload.flag) {
                    context.commit('removeFollowing', payload.user)
                } else {
                    context.commit('newFollowing', payload.user)
                }
            })
    }
}

const getters = {
    following(state) {
        return state.following
    },
    followers(state) {
        return state.followers
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}