import React, {useRef, useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselItem = (props) => {
    const resource = useRef(props.resource)
    console.log(resource)
    const string = "https://i.scdn.co/image/ab6761610000e5ebb5f9e28219c169fd4b9e8379"
    return (
        <Carousel.Item>
            <img className="d-block w-100" src={string}/>
            <Carousel.Caption><p>{resource.current.name}</p></Carousel.Caption>
        </Carousel.Item>
    )
};
export default CarouselItem;