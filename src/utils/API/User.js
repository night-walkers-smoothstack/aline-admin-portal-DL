import axios from '../axiosCustom';

const APIs =  {
    /**
     * UserLogin API to retrieve new JWT Token
     * @param credentials - Object with username & password
     * @returns {Promise<>}
     */
    login: async function(credentials)  {
        const res = await axios.post('/login', credentials);
        console.log('res from axios: ', res)
        if(res.status===200) localStorage.setItem('jwtToken', res.headers.authorization)
        return res;
    }
}

export default APIs;
