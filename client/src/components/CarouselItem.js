import React, {useRef, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselItem = (props) => {
    const resource = useRef(props.resource)

    return (
        <>
        <Carousel.Item>

        </Carousel.Item>
        <Carousel.Caption>

        </Carousel.Caption>
        </>
    )
};
export default CarouselItem;