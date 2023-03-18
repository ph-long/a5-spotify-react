import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem';

const CarouselComponent = (props) => {
    const [resources, setResource] = useState(props.data)
    return (
        <div>
            <Carousel>
                <CarouselItem/>
            </Carousel>
        </div>
    )
};
export default Carousel;