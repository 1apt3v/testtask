import React from 'react';
import CardApartment from '../CardApartment/CardApartment';
import MyVerticallyCenteredModal from '../Modal/Modal';
import InputComponent from '../InputComponent/InputComponent';

import PaginationComponent from '../PaginationComponent/PaginationComponent';
import FiltersForms from '../FiltersForms/FiltersForms';





const Main = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [fullFilters, setFullFilters] = React.useState(false)

    return (
        <main>
            <div className='wrapper__content'>
                <div className="filters">
                    <h2>Фильтры</h2>
                    <FiltersForms />
                </div>

                <div className="cards">

                    <div className='button__cards' onClick={() => setModalShow(true)}>
                        <CardApartment />
                    </div>
                    <div className='button__cards' onClick={() => setModalShow(true)}>
                        <CardApartment />
                    </div>
                    <div className='button__cards' onClick={() => setModalShow(true)}>
                        <CardApartment />
                    </div>
                    <div className='button__cards' onClick={() => setModalShow(true)}>
                        <CardApartment />
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