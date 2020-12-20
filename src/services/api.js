import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://dogsapi.origamid.dev/json'
})

export default api;