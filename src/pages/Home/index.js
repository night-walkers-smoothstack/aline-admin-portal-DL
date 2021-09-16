import React from 'react';
import {UseUserSession} from '../../utils/UserContext';

const Index = () => {
    const {user} = UseUserSession();
    return (
        <div data-testid='homepage'>
            <h1 className='display-2 text-center mt-5'>Welcome back {user}! </h1>
        </div>
    );
};



export default Index;
