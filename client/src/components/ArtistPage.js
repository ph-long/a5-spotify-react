import React, {useState, useEffect} from 'react'
import Carousel from './CarouselComponent';
import {SpotifyService} from '../data/Service.ts'

const ArtistPage = (props) => {
    const artistId = React.useRef(props.id)
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
            <p>{artistId.current}</p>
        </div>
    )
};
export default ArtistPage;