import React from 'react';

const ModalInfoElement = ({title, content, symbol}) => {
    return (
        <>
            <div className='modal__info__element'>
                <p className='modal__info__element__title'>{title}</p>
                <p className='modal__info__element__content'>{content} {symbol}</p>
            </div>
            <hr />
        </>
    );
};

export default ModalInfoElement;