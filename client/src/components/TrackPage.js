import React, {useState, useEffect} from 'react'
import Thermometer from './Thermometer';
import {SpotifyService} from '../data/Service.ts'

const TrackPage = (props) => {
    const trackId = React.useRef(props.id)
    const [track, setTrack] = useState()
    const [audioFeatures, setAudioFeatures] = useState()

    useEffect(() => {        
        const service = new SpotifyService()

        service.getTrack(trackId.current).then((response) => {
            setTrack(response)
            // console.log(album)
        })
        service.getAudioFeaturesForTrack(trackId.current).then((response) => {
            setAudioFeatures(response)
            // console.log(tracks)
        })}
    , [])

    return (
        <div>
            <p>{trackId.current}</p>
        </div>
    )
};
export default TrackPage;