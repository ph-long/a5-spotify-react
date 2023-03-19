import React, {useState, useRef} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem';

const CarouselComponent = (props) => {
    const carouselId = useRef(props.id)
    const resources = useRef(props.data)
    return (
        <div>
            <Carousel>
                <CarouselItem/>
            </Carousel>
        </div>
    )
};
export default Carousel;