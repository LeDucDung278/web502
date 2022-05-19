import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:3636/api"
})

export default instance