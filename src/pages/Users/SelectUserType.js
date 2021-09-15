import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

export const SelectUserType = () => {
    const [redirectStatus, setRedirectStatus] = useState({
        to: [],
        isRedirect: false
    })

    const onClick = (e) => {
        setRedirectStatus({
            to: {
                pathname: '/user/create',
                state:{userType: e.target.value}
            },
        isRedirect: true
    })
    }

    return (
        <div>
            {
                !redirectStatus.isRedirect ? (
                        <div>
                            <button className='btn-primary btn' type='button' value='admin' onClick={onClick}>Admin</button>
                            <button className='btn-primary btn mx-2 my-2 my-md-0' type='button' value='employee' onClick={onClick}>Employee</button>
                            <button className='btn-primary btn' type='button' value='member' onClick={onClick}>Member</button>
                        </div>
                    ) :
                    <Redirect push to={redirectStatus.to}/>
            }

        </div>

    )
}


