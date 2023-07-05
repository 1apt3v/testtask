import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ControlledCarousel from './../Carousel/Carousel'



function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            // size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Button onClick={props.onHide}>Close</Button>
            <Modal.Body>
                <div className="modal__display">
                    <div>
                        <ControlledCarousel />
                    </div>
                    <div>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
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