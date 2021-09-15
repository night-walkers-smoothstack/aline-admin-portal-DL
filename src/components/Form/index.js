import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import FormTextInput from './FormTextInput';
import FormPhoneInput from './FormPhoneInput';
import FormEmailInput from './FormEmailInput';

const Index = ({data, onSubmit}) => {
    const [formBody, setFormBody] = useState();
    const {register, handleSubmit} = useForm();

    useEffect(() => {
        const body = data.map((question, index) => {
            switch (question.type) {
                case 'password':
                case 'text':
                    return <FormTextInput type={question.type} id={question.id}
                                          formInputProp={register(question.id, question.options)}
                                          label={question.label} key={index}/>
                case 'phone':
                    return <FormPhoneInput id={question.id} formInputProp={register(question.id, question.options)}
                                           label={question.label} key={index}/>
                case 'email':
                    return <FormEmailInput id={question.id} formInputProp={register(question.id, question.options)}
                                           label={question.label} key={index} />
                default:
                    return <div>Need to create type for Form component</div>
            }
        })

        setFormBody(body)
    }, [data, register])


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
            {formBody}
            <input type='submit' className='btn btn-primary '/>
        </form>
    );
};

Index.propTypes = {
    data: PropTypes.array,
    onSubmit: PropTypes.func
};

export default Index;
