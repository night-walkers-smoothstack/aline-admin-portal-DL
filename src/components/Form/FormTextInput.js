import React from 'react';
import PropTypes from 'prop-types';

const FormTextInput = ({ id, formInputProp, label, type}) => {

    return (
        <div className='form-floating my-2'>
            <input
                id={id}
                name={id}
                type={type}
                className='form-control rounded-1'
                {...formInputProp}
                placeholder={label}
            />
            <label htmlFor={id}>{label}</label>
        </div>

    );
};

FormTextInput.propTypes = {
    id: PropTypes.string
};

export default FormTextInput;
