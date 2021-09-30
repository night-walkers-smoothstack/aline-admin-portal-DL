import React from 'react';
import {UseUserSession} from '../../utils/UserContext';
import RecentMenu from './RecentMenu';
import ActionsMenu from './ActionsMenu';

const Index = () => {
    const {user} = UseUserSession();
    return (
        <div data-testid='homepage' className='w-75 mx-auto'>
            <div >
                <h1 className='fw-normal fs-2 mt-5 '>Welcome back {user}! </h1>
                {/*<hr className='bg-dark'/>*/}
                <div>
                    <RecentMenu/>
                    <ActionsMenu/>
                </div>
            </div>
        </div>
    );
};



export default Index;
