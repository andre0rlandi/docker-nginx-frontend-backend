import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost',
})

export const getMessage = () => api.get(`/message`)

const apis = {
    getMessage,
}

export default apis