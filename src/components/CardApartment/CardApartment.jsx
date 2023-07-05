import React from 'react';

const CardApartment = () => {
    return (
        <div className='cardApartment'>
            <div className='card__img'>
                <img src="https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png" alt="" />
            </div>
            <div className='card__info'>
                <span>
                    4 000 000
                </span>
                <span>
                    3 этаж
                </span>
                <span>
                    2 комнаты
                </span>
                <span>
                    64.3 м2
                </span>
            </div>
        </div>
    );
};

export default CardApartment;