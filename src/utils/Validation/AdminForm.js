import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    phone: yup.string().required('Phone is required'),
    email: yup.string().email('Valid email required').required('Email is required')

})

export default schema;
