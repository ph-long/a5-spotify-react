import React, {useState, useEffect} from 'react'
import Thermometer from './Thermometer';
import {SpotifyService} from '../data/Service.ts'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const TrackPage = (props) => {
    const trackId = React.useRef(window.location.pathname.substring(7))
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
    const style = {
        margin: "50px 0px"
    }


    // Use .map to loop through array, see CarouselComponent for ref
        // Ensure that in the .map you return html
    // return only one big parent tag
    // can segment <div> with more <div> segments
    // Don't worry about css just get the information on the page
    return (
        <div>
            { track ?
            <div class="row">
                <div class="col-6">
                <Link to="/"><Button variant="outline-primary">Home</Button></Link>
                    <h1>{track.name}</h1>
                    <p>
                        Track on <Link to={`/album/${track.album.id}`}>{track.album.name}</Link>

                        {/* Track on <a href="http://localhost:4200/album/{{track.album.id}}">{track.album.name}</a> */}
                    </p>
                    <div>
                        {
                            track.artists.map((value, index) => {
                                return (
                                    <p>
                                    Artist: <Link to={`/artist/${value.id}`}>{value.name}</Link>
                                </p>
                                )
                            })
                        }
                    </div>
                    <p>
                        Duration: {track.durationStr}
                    </p>
                    <p>
                        <a class="btn btn-light" role="button" href = "{{track.url}}" target="_blank">Open {track.name} on Spotify</a>
                    </p>
                </div>
                <div class="col-6" style={style}>
                    {
                        audioFeatures.map((value) => {
                            console.log(value)
                            return <Thermometer name={value.name} percent= {value.percent} color = {value.color}></Thermometer>
                        })
                    }
                </div>
            </div>
            :null 
            }
        </div>
        
    )

    

};
export default TrackPage;