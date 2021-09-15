import React, {useState} from 'react';
import PropTypes from 'prop-types';

const FormPhoneInput = ({id, formInputProp, label}) => {
    const [inputValue, setInputValue] = useState('');

    const formatPhoneNumber = (phone) => {
        if (!phone) return phone;

        const phoneNumber = phone.replace(/[^\d]/g, '')
        const phoneLength = phoneNumber.length

        if (phoneLength < 4) return phoneNumber;

        if (phoneLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
        }

        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }

    const handleInput = (e) => {
        const formattedNumber = formatPhoneNumber(e.target.value);
        setInputValue(formattedNumber)
    }

    return (
        <div className='form-floating my-2'>
            <input
                id={id}
                name={id}
                type='tel'
                className='form-control rounded-1'
                {...formInputProp}
                placeholder={label}
                onChange={handleInput}
                value={inputValue}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

FormPhoneInput.propTypes = {
    id: PropTypes.string,
    formInputProp: PropTypes.any,
    label: PropTypes.string
};

export default FormPhoneInput;
