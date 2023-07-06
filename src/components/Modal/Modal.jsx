import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ControlledCarousel from './../Carousel/Carousel'
import ModalInfoElement from './ModalInfoElement';



function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            // size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="my-modal"
        >
            <Button onClick={props.onHide}>Close</Button>
            <Modal.Body>
                <div className="modal__display">
                    <ControlledCarousel />
                    <div className='modal__info'>
                        <h4>Информация о объекте</h4>
                        <ModalInfoElement title={"Этаж объекта"} content={"1"} />
                        <ModalInfoElement title={"Положение квартиры на этаже"} content={"2"} />
                        <ModalInfoElement title={"Цена"} content={"3"} />
                        <ModalInfoElement title={"Количество комнат"} content={"4"} />
                        <ModalInfoElement title={"Общая площадь"} content={"5"} />
                        <ModalInfoElement title={"Площадь кухни"} content={"6"} />
                        <ModalInfoElement title={"Жилая площадь"} content={"7"} />

                    </div>
                </div>




            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;