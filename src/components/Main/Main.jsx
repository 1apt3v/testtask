import React from 'react';
import CardApartment from '../CardApartment/CardApartment';
import MyVerticallyCenteredModal from '../Modal/Modal';
import InputComponent from '../InputComponent/InputComponent';
import Button from 'react-bootstrap/Button';
import PaginationComponent from '../PaginationComponent/PaginationComponent';





const Main = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [fullFilters, setFullFilters] = React.useState(false)

    return (
        <main>
            <div className='wrapper__content'>
                <div className="filters">
                    <h2>Фильтры</h2>
                    <div className='main__filters'>
                        <div className='input__wrapper'>
                            <span>Цена</span>
                            <InputComponent placeholder='От' />
                            <InputComponent placeholder='До' />
                        </div>
                        <div className='input__wrapper'>
                            <span>Количество комнат</span>
                            <InputComponent placeholder='Количество комнат' />
                        </div>
                        <div className='input__wrapper'>
                            <span>Общая площадь</span>
                            <InputComponent placeholder='Общая площадь' />
                        </div>
                    </div>

                    <div className='secondary__filters' style={fullFilters ? { display: 'block' } : { display: 'none' }}>
                        <div className='input__wrapper'>
                            <span>Этаж</span>
                            <InputComponent placeholder='Этаж' />
                        </div>
                        <div className='input__wrapper'>
                            <span>Площадь кухни</span>
                            <InputComponent placeholder='Площадь кухни' />
                        </div>
                        <div className='input__wrapper'>
                            <span>Жилая площадь</span>
                            <InputComponent placeholder='Жилая площадь' />
                        </div>
                    </div>

                    <button onClick={() => setFullFilters(!fullFilters)}>\/ Расширенный поиск</button>

                    <Button>Отправить</Button>
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