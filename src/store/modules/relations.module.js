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