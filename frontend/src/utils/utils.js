import axios from 'axios'
export const axiosClient = axios.create({
    baseURL:'/api/v1',
    //for development: http://localhost:1234/api/v1

})