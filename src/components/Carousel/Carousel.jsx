import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel({image, activeIndex, setActiveIndex}) {

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className='carousel__wrapper'>
            <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
                <Carousel.Item>
                    <div className="d-flex justify-content-center w-100 h-100">
                        <img
                            className="d-block"
                            src={image}
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