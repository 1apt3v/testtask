import React from 'react';

const CardApartment = ({id, floor, pos_on_floor, price, rooms, area_total, area_kitchen, area_live, layout_image}) => {
    return (
        <div className='card__apartment'>
            <div className='card__img'>
                <img src={layout_image} alt="" />
            </div>
            <div className='card__info'>
                <span>
                    Цена - {price}
                </span>
                <span>
                    Этаж - {floor}
                </span>
                <span>
                    Количество комнат - {rooms}
                </span>
                <span>
                    Общая площадь - {area_total} м2
                </span>
            </div>
        </div>
    );
};

export default CardApartment;