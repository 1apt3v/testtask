import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ControlledCarousel from './../Carousel/Carousel'
import ModalInfoElement from './ModalInfoElement';



function MyVerticallyCenteredModal({ show, onHide, modalHouseData, activeIndex, setActiveIndex }) {

    if ((modalHouseData === undefined) || (Object.keys(modalHouseData).length === 0)) {
        return
    }

    const { floor, pos_on_floor, price, rooms, area_total, area_kitchen, area_live, layout_image } = modalHouseData

    //Преобразование цены
    function formatingPrice(number) {
        let int = String(Math.trunc(number));
        if (int.length <= 3) return int;
        let space = 0;
        let newNumber = '';

        for (var i = int.length - 1; i >= 0; i--) {
            if (space == 3) {
                newNumber = '.' + newNumber;
                space = 0;
            }
            newNumber = int.charAt(i) + newNumber;
            space++;
        }

        return newNumber;
    }

    const formatedPrice = formatingPrice(price)



    return (
        <Modal
            show={show}
            onHide={onHide}
            // size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="my-modal"
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className="modal__display">
                    <ControlledCarousel
                        image={layout_image}
                        pos_on_floor={pos_on_floor}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                    <div className='modal__info'>
                        <h4>Информация о объекте</h4>
                        <ModalInfoElement title={"Этаж объекта"} content={floor} />
                        {/* <ModalInfoElement title={"Положение квартиры на этаже"} content={pos_on_floor} /> */}
                        <ModalInfoElement title={"Цена"} content={formatedPrice} symbol={'₽'} />
                        <ModalInfoElement title={"Количество комнат"} content={rooms} />
                        <ModalInfoElement title={"Общая площадь"} content={area_total} symbol={'м2'} />
                        <ModalInfoElement title={"Площадь кухни"} content={area_kitchen} symbol={'м2'} />
                        <ModalInfoElement title={"Жилая площадь"} content={area_live} symbol={'м2'} />
                    </div>
                </div>

            </Modal.Body>
            {/* <Modal.Footer>
                
            </Modal.Footer> */}
        </Modal>
    );
}

export default MyVerticallyCenteredModal;