import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:3099"
})

export default instance