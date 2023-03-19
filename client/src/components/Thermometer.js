import React, {useRef} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Thermometer = (props) => {
    /*
    Init var and assign to passed in props var
    useState vs useRef
    */
    // const intervalRef = useRef(0);

    let percentStr = (props.percent*100).toFixed() + '%';    ;

    console.log(percentStr, props.percent);


    const initName = useRef(props.name);
    const initPercent = useRef(percentStr);

    /* Utilize ProgressBar to build color may not work*/
    return (
        <ProgressBar label = {initName.current + ": " + initPercent.current + "%"}now={initPercent.current} variant="info"/>
    )
};
export default Thermometer;