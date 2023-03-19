import React, {useState, useEffect} from 'react'
import Thermometer from './Thermometer';
import {SpotifyService} from '../data/Service.ts'
import { Link } from 'react-router-dom';

const TrackPage = (props) => {
    const trackId = React.useRef(props.id)
    const [track, setTrack] = useState()
    const [audioFeatures, setAudioFeatures] = useState()

    // API calls to init tracks and audioFeatures when component renders
    useEffect(() => {        
        const service = new SpotifyService()

        service.getTrack(trackId.current).then((response) => {
            setTrack(response)
        })
        service.getAudioFeaturesForTrack(trackId.current).then((response) => {
            setAudioFeatures(response)
        })}
    , [])

    // Use link to route page, see TrackList for ref
    // check if track and audioFeature exists, see AlbumPage for ref
    // Use .map to loop through array, see CarouselComponent for ref
        // Ensure that in the .map you return html
    // return only one big parent tag
    // can segment <div> with more <div> segments
    // Don't worry about css just get the information on the page
    return (
        <div>
            <p>{trackId.current}</p>
        </div>
    )
};
export default TrackPage;