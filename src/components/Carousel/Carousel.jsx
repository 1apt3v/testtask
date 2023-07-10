import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgHouse1 from './../../img/house1.png'
import imgHouse2 from './../../img/house2.png'
import imgHouse3 from './../../img/house3.png'
import imgHouse4 from './../../img/house4.png'
import imgHouse5 from './../../img/house5.png'
import imgHouse6 from './../../img/house6.png'


function ControlledCarousel({ image, activeIndex, setActiveIndex, pos_on_floor, loaderActive, setLoaderActive }) {

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const posHouse = `house${pos_on_floor}`


    const arrImg = [imgHouse1, imgHouse2, imgHouse3, imgHouse4, imgHouse5, imgHouse6]

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
                    {/* <img className="d-block" src={arrImg[pos_on_floor - 1]} alt="" /> */}
                    <div className='selection__area'>
                        <div className="d-flex justify-content-center w-100 h-100">
                            <img
                                className="d-block"
                                src={arrImg[pos_on_floor - 1]}
                                alt="Second slide"
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center w-100 h-100">
                        <img
                            className="d-block d__block__opacity"
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