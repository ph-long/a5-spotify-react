import React, {useState, useEffect} from 'react'
import {SpotifyService} from '../data/Service.ts'
import TrackList from './TrackList';
import CarouselComponent from './CarouselComponent';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ArtistPage = (props) => {
    const artistId = React.useRef(window.location.pathname.substring(8))
    const [artist, setArtist] = useState()
    const [relatedArtist, setRelatedArtist] = useState()
    const [topTracks, setTopTracks] = useState()
    const [albums, setAlbums] = useState()

    useEffect(() => {        
        const service = new SpotifyService()
        service.getArtist(artistId.current).then((response) => {
            setArtist(response)
        })
        service.getRelatedArtists(artistId.current).then((response) => {
            setRelatedArtist(response)
        })
        service.getAlbumsForArtist(artistId.current).then((response) => {
            setAlbums(response)
        })
        service.getTopTracksForArtist(artistId.current).then((response) => {
            setTopTracks(response)
        })
    }
    , [])

    return (
        <div>
            {
                artist ?
                <div>
                    <Link to="/"><Button variant="outline-primary">Home</Button></Link>
                    <div class='row'>
                        <div class="col-4">
                            <h1>{artist.name}</h1>
                            <img src = {artist.imageURL}/>
                            <p>
                                <a class="btn btn-light" href = {artist.url} role="button" target="_blank">Open {artist.name} on Spotify</a>
                            </p>
                        </div>
                        <div class="col-2">
                            <h3>Genres</h3>
                            <ul>
                                {artist.genres.map((value, index) => {return (<li>{value}</li>)})}
                            </ul>
                        </div> 
                        <div class="col-4">
                            <h3>{artist.name}'s Top Tracks</h3>
                            <TrackList data = {topTracks} hideArtist = {true} hideAlbum = {true} setId = {props.setId} setPageState = {props.setPageState}/>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-6">
                            <h3>{artist.name}'s Albums</h3>
                            <CarouselComponent data = {albums} setId = {props.setId}/>
                        </div>
                        <div class="col-6">
                            <h3>Similar Artists</h3>
                            <CarouselComponent data = {relatedArtist} setId = {props.setId}/>
                        </div>
                    </div>
                </div>
                 : null
            }
        </div>
    )
};
export default ArtistPage;