import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import Sidebar from '../Sidebar'
import {UpdateUserSession, UseUserSession} from '../../utils/UserContext';

/**
 * If user has a valid token, an administrator will be able to access
 * protected routes, else will be redirected to login
 * @returns {JSX.Element}
 */
const ProtectedRoute = ({component: Component, ...rest}) => {
    const {loggedIn} = UseUserSession();
    const [loading, setLoading] = useState(true);
    const {updateUser} = UpdateUserSession();

    useEffect(() => {
        if (!loggedIn && process.env.REACT_APP_TOKEN_NAME in localStorage) updateUser();

        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='w-100'>
            {loading ? (
                <div>I'm Loading</div>
            ) : (
                <Sidebar>
                <Route
                    {...rest}
                    render={(props) =>
                        !loggedIn ?

                            (<Redirect to='/login'/>) :
                            (<Component {...props} />)
                    }
                />
                </Sidebar>
            )}

        </div>


    );
};

ProtectedRoute.propTypes = {
    component: PropTypes.func
};

export default ProtectedRoute;
