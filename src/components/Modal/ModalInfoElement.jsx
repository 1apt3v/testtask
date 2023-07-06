import React from 'react';

const ModalInfoElement = ({title, content}) => {
    return (
        <>
            <div className='modal__info__element'>
                <p className='modal__info__element__title'>{title}</p>
                <p className='modal__info__element__content'>{content}</p>
            </div>
            <hr />
        </>
    );
};

export default ModalInfoElement;