import React from 'react';
import {Helmet} from 'react-helmet';
import StompContextProvider from '../../utils/StompContext';
import ChatArea from './ChatArea';

const Index = () => {

    return (
        <div className='w-75 mx-auto my-2 py-3'>
            <Helmet>
                <title>Chat</title>
                <meta
                    name='description'
                    content='Chat'
                />
            </Helmet>
            <h1 className='display-5'>Chat</h1>
            
            <StompContextProvider>
                <ChatArea/>
            </StompContextProvider>
        </div>
    );
};


export default Index;
