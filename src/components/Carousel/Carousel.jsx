import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='carousel__wrapper'>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item>
                    <div className="d-flex justify-content-center w-100 h-100">
                        <img
                            className="d-block"
                            src="https://cdn.esoft.digital/content/cluster/layouts_2d/d5/9e/e8b89005da2d08a8620db552c52022f08cbe9ed5.png"
                            alt="First slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center w-100 h-100">
                        <img
                            className="d-block"
                            src="https://cdn.esoft.digital/content/cluster/layouts/18/0c/e293cb975e87b72b6fba22106422e03e9f8b0c18.png"
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;