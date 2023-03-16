import React, {useState, useEffect} from 'react'
import TrackList from './TrackList';
import {SpotifyService} from '../data/Service.ts'

const AlbumPage = (props) => {
    const albumId = React.useRef(props.id)
    const [album, setAlbum] = useState()
    const [tracks, setTrack] = useState()
    console.log(albumId)

    useEffect(() => {        
        const service = new SpotifyService()

        service.getAlbum(albumId.current).then((response) => {
            setAlbum(response)
            console.log(album)
        })
        service.getTracksForAlbum(albumId.current).then((response) => {
            setTrack(response)
            // console.log(tracks)
        })}
    , [])

    
    return (
        <div>
            { album ?
            <div>
                <div class="col-6">
                    <h1>{album.name}</h1>
                    <img id="albumImg" src={album.imageURL}></img>
                    {album.artists.map((value, index) => {
                        return <p>Artist: <a>{value.name}</a></p>
                    })}
                    <p><a class="btn btn-light" href = {album.url} role="button" target="_blank" >Open {album.name} on Spotify</a></p>
                </div>
                <div class="col-6">
                    <h3>Album Tracks</h3>
                    <TrackList data={tracks} hideArtist = {true} hideAlbum = {true} setId = {props.setId} setPageState = {props.setPageState}/>
                </div>
            </div> : null
            }  
        </div>
    )
};
export default AlbumPage;