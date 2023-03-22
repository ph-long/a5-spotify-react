import React, {useRef} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Thermometer = (props) => {
    /*
    Init var and assign to passed in props var
    useState vs useRef
    */

    let percentStr = (props.percent*100).toFixed() + '%';



    const initName = useRef(props.name);
    const initPercent = useRef(percentStr);

    const style = {
        margin: "10px 0px",
        width: "80%",
    }

    /* Utilize ProgressBar to build color may not work*/
    return (
        <ProgressBar label = {initName.current + ": " + initPercent.current} now={props.percent * 100} style={style} variant='info'/>
    )
};
export default Thermometer;