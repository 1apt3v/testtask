import React from 'react';
import './../../scss/stylesComponent/main.scss';
import CardApartment from '../CardApartment/CardApartment';
import MyVerticallyCenteredModal from '../Modal/Modal';





const Main = () => {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <main>

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

            <div className="filters">


            </div>




            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />










            {/* <Container> */}
            {/* <Row className='g-0'>
                    <Col className='col'>
                        <div className="house1">
                            111111111111111111111111111111111111111111
                        </div>
                    </Col>
                    <Col className='col'>
                        <div className="house2">
                            222222222222222222122222222222222222222222222
                        </div>
                    </Col>
                </Row> */}



            {/* </Container> */}

            {/* <div class="container">
                <div class="row">
                    <div class="col-sm">
                        One of three columns
                    </div>
                    <div class="col-sm">
                        One of three columns
                    </div>
                    <div class="col-sm">
                        One of three columns
                    </div>
                </div>
            </div> */}
        </main>
    );
};

export default Main;