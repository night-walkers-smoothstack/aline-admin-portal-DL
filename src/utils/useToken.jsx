import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';

function useToken() {
    const STORAGE_NAME = 'jwtToken'
    const initialTokenState = {
        jwtToken: '',
        authority: {},
        expired: true,
        checkedStorage: false,
    }
    
    const [token, setToken] = useState(initialTokenState);

    useEffect(() => {
        fetchTokenFromStorage();
        //UseEffect Cleanup
        return () => setToken(initialTokenState);
    }, [])
    
    
    const fetchTokenFromStorage = () => {
        if (!(STORAGE_NAME in localStorage))  return;
        
        let fullToken = localStorage.getItem(STORAGE_NAME);
        try {
            const decodedJWT = jwt_decode(fullToken.replace('Bearer ', ''));
            let isExpired = (Date.now() >= decodedJWT.exp * 1000);

            setToken({
                jwtToken: fullToken,
                authority: decodedJWT.authorities[0].authority,
                expired: isExpired,
                checkedStorage: true
            })
        } catch (e) {
            setToken({...initialTokenState, checkedStorage: true});
            throw new Error('Unable to read token from storage.')
        }

    }

    return token;
}

export default useToken;
