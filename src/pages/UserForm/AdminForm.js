import React from 'react';
import Form from '../../components/Form'

const AdminForm = props => {
    const onSubmit = data => {
        const reqBody = {...data, role: 'admin'}
        console.log('data: ',  reqBody)
    }

    const data = [
        {
            id: 'firstName',
            options: {required: true},
            type: 'text',
            label: 'First Name'
        },
        {
            id: 'lastName',
            options: {required: true},
            type: 'text',
            label: 'Last name'
        },
        {
            id: 'username',
            options: {required: true},
            type: 'text',
            label: 'Username'
        },
        {
            id: 'password',
            options: {required: true},
            type: 'password',
            label: 'Password'
        },
        {
            id: 'phone',
            options: {required: true},
            type: 'phone',
            label: 'Phone'
        },
        {
            id:'email',
            options: {required: true},
            type: 'email',
            label: 'Email'
        }
    ]

    return (
        <div>
            <h1 className='display-5 mb-3 mt-5'>Create an Admin</h1>
            <Form data={data} onSubmit={onSubmit}/>

        </div>
    );
};

AdminForm.propTypes = {};

export default AdminForm;
