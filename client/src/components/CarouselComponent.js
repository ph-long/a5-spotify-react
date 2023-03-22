import React, {useState, useRef} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const CarouselComponent = (props) => {
    const carouselId = useRef(props.id)
    const resources = props.data

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
                            <Link to={`/artist/${value.id}`}>
                                <img src={value.imageURL}/>
                            </Link> : 
                            <Link to={`/album/${value.id}`}>
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