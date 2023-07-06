import React from 'react';

const InputComponent = ({placeholder}) => {
    return (
        <>
            <input type="text" placeholder={placeholder} className='inputComponent' />
        </>
    );
};

export default InputComponent;