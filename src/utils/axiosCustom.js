import axios from 'axios';
const token = localStorage.getItem('jwtToken')

/**
 * New Axios instance, sets up the base url as noted in the process ENV, and any custom configurations
 * @type {AxiosInstance}
 */
const newAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASEURL}`,
    timeout: 2000
})

/**
 * Interceptors for Axios call, modifies to include token if needed & headers
 * Removes the need to retrieve the token from every axios call.
 */
newAxios.interceptors.request.use(
    request => {
        if(request.url.includes('api')) request.headers['Authorization'] = token;
        return request;
    },
    error => {
        return Promise.reject(error)
    }
)

export default newAxios;
