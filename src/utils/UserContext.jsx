import React, {createContext, useContext, useEffect, useState} from 'react';
import useToken from './useToken';
import PropTypes from 'prop-types';

/**
 * Context for User Session to be used throughout the application
 * @type {React.Context<{logoutMethod: logoutMethod, expired: boolean, loggedIn: boolean, authorities: {}, token: string}>}
 */
const UserSessionContext = createContext({
    authorities: {},
    logoutMethod: () => {
    },
    loggedIn: false,
    token: '',
    expired: true,
})

const userTokenInitialState = {
    jwt: '',
    authority: {},
    loggedIn: false,
    expired: true,
}

export function UseUserSession() {
    const {authorities, logoutMethod, loggedIn, token, expired} = useContext(UserSessionContext);
    return {authorities, logoutMethod, loggedIn, token, expired}
}

export default function UserSessionProvider({children}) {
    const STORAGE_NAME = 'jwtToken'
    const [token, setToken] = useState(userTokenInitialState)
    const userToken = useToken();
    
    useEffect(() =>{
        try{
            let isLoggedIn = !userToken.expired;
            setToken({...userToken, loggedIn: isLoggedIn})
        } catch (e) {
            console.log(e.message());
            logout();
        }
    }, [userToken]);
    
    const logout = () => {
        if (STORAGE_NAME in localStorage) localStorage.removeItem(STORAGE_NAME);
        setToken(userTokenInitialState);
    }
    
    return (
        <UserSessionContext.Provider
            value={{
                authorities:token.authority,
                logoutMethod: logout, 
                loggedIn:token.loggedIn,
                token:token.jwt,
                expired:token.expired,
            }}
        >
            {children}
        </UserSessionContext.Provider>
    )

}

UserSessionProvider.propTypes = {
    children: PropTypes.element
}
