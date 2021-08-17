import React from 'react';
import PropTypes from 'prop-types';

/**
 * React Text Input component which has standard styling already applied.
 * Id is shared between the Label and Input to link them together.
 * label is displayed text which users can see.
 * Any additional attributes will be placed on the input field.
 */
const TextInput = ({id, label, ...inputProps})=> {
    return (
        <label htmlFor={id}>
            {label}
            <input {...inputProps} id={id} className='ml-2 border border-grey-500 focus:ring-2 focus:ring-grey-300 focus:outline-none'/>
        </label>
    );
};

TextInput.propTypes = {
    /** Required for screen readers */
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    /** Attributes for input field     */
    inputProps: PropTypes.any
}


export default TextInput;
