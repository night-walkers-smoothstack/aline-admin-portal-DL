import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useForm, FormProvider} from 'react-hook-form';
import FormTextInput from './FormTextInput';
import FormPhoneInput from './FormPhoneInput';
import FormEmailInput from './FormEmailInput';
import {yupResolver} from '@hookform/resolvers/yup';

const Index = ({data, onSubmit, validationSchema, children}) => {
    const [formBody, setFormBody] = useState();
    const methods = useForm({resolver: yupResolver(validationSchema), criteriaMode:'all',mode:'all', reValidateMode:'onChange'})

    useEffect(() => {
        const body = data.map((question, index) => {
            switch (question.type) {
                case 'password':
                case 'text':
                    return <FormTextInput data={question} key={question.id}/>
                case 'phone':
                    return <FormPhoneInput data={question} key={question.id}/>
                case 'email':
                    return <FormEmailInput data={question} key={question.id}/>
                default:
                    return <div>Need to create type for Form component</div>
            }
        })
        setFormBody(body)
    }, [data])


    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className='text-center' noValidate>
                {formBody}
                {children}
                {<input type='submit' className='btn btn-primary '/>}
            </form>
        </FormProvider>

    );
};

Index.propTypes = {
    data: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    validationSchema: PropTypes.any.isRequired
};

export default Index;
