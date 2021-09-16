import React from 'react';
import Form from '../../components/Form'
import schema from '../../utils/Validation/AdminForm'

const AdminForm = props => {
    const onSubmit = data => {
        const reqBody = {...data, role: 'admin'}
        console.log('reqBody: ',  reqBody)
    }

    const data = [
        {
            id: 'firstName',
            type: 'text',
            label: 'First Name'
        },
        {
            id: 'lastName',
            type: 'text',
            label: 'Last name'
        },
        {
            id: 'username',
            type: 'text',
            label: 'Username'
        },
        {
            id: 'password',
            type: 'password',
            label: 'Password'
        },
        {
            id: 'phone',
            type: 'phone',
            label: 'Phone'
        },
        {
            id: 'email',
            type: 'email',
            label: 'Email'
        }
    ]

    return (
        <div>
            <h1 className='display-5 mb-3 mt-5'>Create an Admin</h1>
            <Form data={data} onSubmit={onSubmit} validationSchema={schema}/>

        </div>
    );
};

AdminForm.propTypes = {};

export default AdminForm;
