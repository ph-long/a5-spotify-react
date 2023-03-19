import React, {useState, useRef} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import CarouselItem from './CarouselItem';

const CarouselComponent = (props) => {
    const carouselId = useRef(props.id)
    const resources = props.data

    const imageClicked = (id) => {
        props.setId(id)
    }

    const carouselStyle = {
        width: "400px"
    }



    return (
        <div style={carouselStyle}>
        {resources ?<Carousel>
            {resources.map((value, index) => {
                return (
                    <Carousel.Item>
                        {value.category === "artist" ? 
                            <Link to="/artist" onClick={() => imageClicked(value.id)}>
                                <img src={value.imageURL} onClick={() => imageClicked(value.id)}/>
                            </Link> : 
                            <Link to="/album" onClick={() => imageClicked(value.id)}>
                                <img src={value.imageURL}/>
                            </Link>
                        }
                        <Carousel.Caption><p>{value.name}</p></Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel> : null}
        
        </div>
    )
};
export default CarouselComponent;