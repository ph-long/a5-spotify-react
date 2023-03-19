import React, {useState, useRef} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem';

const CarouselComponent = (props) => {
    const carouselId = useRef(props.id)
    const resources = props.data
    return (
        <Carousel>
            {resources.map((value, index) => {
                return (
                    <Carousel.Item>
                        <img src={value.imageURL}/>
                        <Carousel.Caption><p>{value.name}</p></Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
};
export default CarouselComponent;