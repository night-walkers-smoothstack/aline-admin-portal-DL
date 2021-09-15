import React from 'react';
import PropTypes from 'prop-types';

const FormEmailInput = ({ id, formInputProp, label}) => {
    return (
        <div className='form-floating my-2'>
            <input
                id={id}
                name={id}
                type='email'
                {...formInputProp}
                placeholder={label}
                className='form-control rounded-1'
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

FormEmailInput.propTypes = {
    id: PropTypes.string,
    formInputProp: PropTypes.any,
    label: PropTypes.string
};

export default FormEmailInput;
