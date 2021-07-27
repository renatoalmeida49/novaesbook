import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:4000/`,
})

instance.interceptors.request.use(
    config => {
        config.headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        return config
    }
)

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