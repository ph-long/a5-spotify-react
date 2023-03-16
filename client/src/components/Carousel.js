import React, {useState} from 'react'
import CarouselItem from './CarouselItem';

const Carousel = (props) => {
    const [resources, setResource] = useState(props.data)
    return (
        <div>
            <CarouselItem/>
        </div>
    )
};
export default Carousel;