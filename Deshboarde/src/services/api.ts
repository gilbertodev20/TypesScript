import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-serve-tau.vercel.app/',
})
export default api
