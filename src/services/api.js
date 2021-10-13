import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API,
})

instance.interceptors.request.use(
    config => {
        config.headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        return config
    }
)

instance.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 403) {
        console.log('Login ou senha incorretos.')
    }
    return error
})

export const api = {
    get(endpoint) {
        return instance.get(endpoint)
    },
    async post(endpoint, body) {
        return await instance.post(endpoint, body)
    },
    put(endpoint, body) {
        return instance.put(endpoint, body)
    },
    delete(endpoint, body) {
        return instance.delete(endpoint, body)
    }
}