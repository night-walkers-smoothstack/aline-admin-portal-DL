import axios from '../axiosCustom';

const APIs =  {

    /**
     * User Login API:<br/>
     * OnSuccess: Retrieves new JWT & stores in localstorage <br/>
     * OnFail: Returns Error and message
     * @param credentials
     * @returns {Promise<response<any>|Error>}
     */
    login: async function(credentials)  {
        try {
            const res = await axios.post('/api/login', credentials);
            if(res.status===200) localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, res.headers.authorization)
            return res;
        }catch (e){
            if (e.response.status === 403 ) return new Error('Invalid Credentials');
            else return new Error('Oops! We\'re checking what the problem is.')
        }

    }
}

export default APIs;
