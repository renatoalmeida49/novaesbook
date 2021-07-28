import axios from 'axios'

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
    async myPosts(context, payload) {
        await axios.post('http://localhost:4000/posts/user-posts', {
            userId: payload.userId
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                context.commit('myPosts', response.data.posts)
            })
    },
    async newPost(context, payload) {
        await axios.post('http://localhost:4000/posts/new-post', {
            type: payload.type,
            body: payload.body
        })
            .then(response => {
                const post = {
                    id: response.data.id,
                    userId: response.data.userId,
                    type: response.data.type,
                    body: response.data.body,
                    updatedAt: response.data.updatedAt,
                    createdAt: response.data.createdAt
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