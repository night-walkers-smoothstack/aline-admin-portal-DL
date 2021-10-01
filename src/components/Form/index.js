import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FormProvider, useForm} from 'react-hook-form';
import FormTextInput from './FormTextInput';
import FormPhoneInput from './FormPhoneInput';
import FormEmailInput from './FormEmailInput';
import {yupResolver} from '@hookform/resolvers/yup';
import FormCheckboxInput from './FormCheckboxInput';
import FormSelectInput from './FormSelectInput';
import FormSocialSecurityInput from './FormSocialSecurityInput';
import FormAddressInput from './FormAddressInput';
import FormIncomeInput from './FormIncomeInput';

const Index = ({data, onSubmit, validationSchema, children, defaultValues={}}) => {
    const [formBody, setFormBody] = useState();
    const methods = useForm({
        resolver: yupResolver(validationSchema),
        criteriaMode: 'all',
        mode: 'all',
        reValidateMode: 'onChange',
        defaultValues: defaultValues
    })

    useEffect(() => {
        const body = data.map((question, index) => {
            switch (question.type) {
                case 'date':
                case 'number':
                case 'password':
                case 'text':
                    return <FormTextInput data={question} key={question.id}/>
                case 'phone':
                    return <FormPhoneInput data={question} key={question.id}/>
                case 'email':
                    return <FormEmailInput data={question} key={question.id}/>
                case 'checkbox':
                    return <FormCheckboxInput data={question} key={question.id}/>
                case 'select':
                    return <FormSelectInput data={question} key={question.id}/>
                case 'ssn':
                    return <FormSocialSecurityInput data={question} key={question.id}/>
                case 'addressWithMailingOption':
                    return <FormAddressInput data={question} key={index}/>
                case 'income':
                    return <FormIncomeInput data={question} key={question.id}/>
                default:
                    return <div key={index}>Need to create type for Form component</div>
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
    validationSchema: PropTypes.any.isRequired,
    defaultValues: PropTypes.object.isRequired
};

export default Index;
