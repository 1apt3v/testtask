import React from 'react';
import CardApartment from '../CardApartment/CardApartment';
import MyVerticallyCenteredModal from '../Modal/Modal';
import InputComponent from '../InputComponent/InputComponent';

import PaginationComponent from '../PaginationComponent/PaginationComponent';
import FiltersForms from '../FiltersForms/FiltersForms';





const Main = ({ data }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [fullFilters, setFullFilters] = React.useState(false)


    const CardApartmentElement = data.map(house => {
        return <CardApartment
            id={house.id}
            floor={house.floor}
            pos_on_floor={house.pos_on_floor}
            price={house.price}
            rooms={house.rooms}
            area_total={house.area_total}
            area_kitchen={house.area_kitchen}
            area_live={house.area_live}
            layout_image={house.layout_image}
            key={house.id}
        />
    })


    return (
        <main>
            <div className='wrapper__content'>
                <div className="filters">
                    <h2>Фильтры</h2>
                    <FiltersForms />
                </div>

                <div className="cards">

                    <div className='button__cards' onClick={() => setModalShow(true)}>
                        {CardApartmentElement}
                    </div>


                </div>
            </div>

            <PaginationComponent />


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </main>
    );
};

export default Main;