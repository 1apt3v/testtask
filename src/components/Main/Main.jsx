import React from 'react';
import CardApartment from '../CardApartment/CardApartment';
import MyVerticallyCenteredModal from '../Modal/Modal';
import InputComponent from '../InputComponent/InputComponent';

import PaginationComponent from '../PaginationComponent/PaginationComponent';
import FiltersForms from '../FiltersForms/FiltersForms';
import { useDispatch } from "react-redux";




const Main = ({ data, modalHouseData, setModalHouseData }) => {


    const dispatch = useDispatch()
    const [modalShow, setModalShow] = React.useState(true);

    const CardApartmentElement = data.map(house => {
        return (
            <div className='button__cards' key={house.id} onClick={() => {
                const obj = data.find(data => data.id === house.id)
                setModalHouseData(obj)
                setModalShow(true)

            }}>
                <CardApartment
                    id={house.id}
                    floor={house.floor}
                    pos_on_floor={house.pos_on_floor}
                    price={house.price}
                    rooms={house.rooms}
                    area_total={house.area_total}
                    area_kitchen={house.area_kitchen}
                    area_live={house.area_live}
                    layout_image={house.layout_image}
                />
            </div>
        )
    })


    return (
        <main>
            <div className='wrapper__content'>
                <div className="filters">
                    <h2>Фильтры</h2>
                    <FiltersForms />
                </div>

                <div className="cards">
                    {CardApartmentElement}


                </div>
            </div>

            <PaginationComponent />


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => {
                    setModalHouseData({})
                    setModalShow(false)
                }}
                modalHouseData={modalHouseData}
            />

        </main>
    );
};

export default Main;