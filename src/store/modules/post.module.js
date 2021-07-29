import { api } from '../../services/api'

const state = {
    userPosts: []
}

const mutations = {
    myPosts(state, payload) {
        state.userPosts = payload
    },
    newPost(state, payload) {
        state.userPosts.push(payload.post)
    }
}

const actions = {
    async getMyPosts(context) {
        const vuex = JSON.parse(localStorage.getItem('vuex'))

        await api.post('/posts/user-posts', {
            userId: vuex.user.user.id
        })
            .then(response => {
                context.commit('myPosts', response.data.posts)
            })
    },
    async newPost(context, payload) {
        await api.post('/posts/new-post', {
            type: payload.type,
            body: payload.body
        })
            .then(response => {
                const vuex = JSON.parse(localStorage.getItem('vuex'))

                const post = {
                    id: response.data.data.id,
                    user: vuex.user.user,
                    type: response.data.data.type,
                    body: response.data.data.body,
                    updatedAt: response.data.data.updatedAt,
                    createdAt: response.data.data.createdAt
                }

                payload.post = post

                context.commit('newPost', payload)
            })
            .catch(erro => {
                console.log("Erro in new post: ", erro)
            })
    }
}

const getters = {
    posts(state) {
        return state.userPosts.reverse()
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}