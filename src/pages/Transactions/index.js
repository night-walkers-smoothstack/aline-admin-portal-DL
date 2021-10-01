import React from 'react';
import {Link} from 'react-router-dom';

const Index = () => {
    return (
        <div className='w-75 mx-auto my-2 py-3'>
            <h1 className='display-5'>Transactions Management</h1>
            <Link className='btn btn-primary' to={{pathname: '/transaction/create'}}>Add Transaction</Link>
        </div>
    );
};

Index.propTypes = {};

export default Index;
