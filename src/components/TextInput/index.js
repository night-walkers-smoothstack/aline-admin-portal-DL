import React from 'react';
import PropTypes from 'prop-types';

/**
 * React Text Input component which has standard styling already applied.
 * Id is shared between the Label and Input to link them together.
 * label is displayed text which users can see.
 */
const TextInput = ({id, label, value, onChange, type})=> {
    return (
        <div className='relative'>
            <input type={!type? 'text': type}
                   name={id}
                   className='peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent
                               focus:outline-none focus:border-blue-700'
                   placeholder={label}
                   id={id}
                   value={value}
                   onChange={onChange}
                   data-testid={id}
            />
            <label htmlFor={id} className='absolute left-0 -top-3.5 text-gray-600 text-sm
                        transition-all peer-placeholder-shown:text-base peer-placeholder-show:text-gray-40
                        peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                {label}
            </label>
        </div>
    );
};

TextInput.propTypes = {
    /** Required for screen readers */
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    /** Attributes for input field     */
    inputProps: PropTypes.any,
    /** State to sture and use input value     */
    value: PropTypes.string
}


export default TextInput;
