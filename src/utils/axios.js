import axios from 'axios'
import { getUserFromLocalStorage } from './localStorage' 

export const customFetch = axios.create({
    baseURL: import.meta.env.VITE_URL
})

customFetch.interceptors.request.use(
    (config) => {
        const user = getUserFromLocalStorage()
        if(user){
            config.headers['Authorization'] = `Bearer ${user.token}`
        }
        return config
    },
    (error) => {
        new Promise.reject(error)
    }
)