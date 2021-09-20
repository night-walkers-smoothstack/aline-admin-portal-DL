import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Modal from '../../components/Modal'
import {SelectUserType} from './SelectUserType';

const Index = () => {

    return (
        <div className='w-75 mx-auto my-2 py-3 '>
            <h1 className='display-5'>Users Management</h1>
            <Modal modalId='userModal' title='Create a User' >
                <p>Select User type to create: </p>
                <SelectUserType />
            </Modal>
            <div className='my-2'>
                {/*<p className='blockquote'>Selection Area</p>*/}
                <button className='btn btn-primary ' data-bs-toggle='modal' data-bs-target='#userModal'>
                     <span>Create user<FontAwesomeIcon icon='plus' className='ms-2'/></span>
                </button>

            </div>

            <div >
                To be Future table here
            </div>
        </div>
    );
};


export default Index;
