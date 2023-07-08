import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ControlledCarousel from './../Carousel/Carousel'
import ModalInfoElement from './ModalInfoElement';



function MyVerticallyCenteredModal({ show, onHide, modalHouseData }) {

    if ((modalHouseData === undefined) || (Object.keys(modalHouseData).length === 0)) {
        return 
    } 

    const {floor, pos_on_floor, price, rooms, area_total, area_kitchen, area_live, layout_image} = modalHouseData

    return (
        <Modal
            show={show}
            onHide={onHide}
            // size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="my-modal"
        >
            <Button onClick={onHide}>Close</Button>
            <Modal.Body>
                <div className="modal__display">
                    <ControlledCarousel image={layout_image} />
                    <div className='modal__info'>
                        <h4>Информация о объекте</h4>
                        <ModalInfoElement title={"Этаж объекта"} content={floor} />
                        <ModalInfoElement title={"Положение квартиры на этаже"} content={pos_on_floor} />
                        <ModalInfoElement title={"Цена"} content={price} />
                        <ModalInfoElement title={"Количество комнат"} content={rooms} />
                        <ModalInfoElement title={"Общая площадь"} content={area_total} />
                        <ModalInfoElement title={"Площадь кухни"} content={area_kitchen} />
                        <ModalInfoElement title={"Жилая площадь"} content={area_live} />
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;