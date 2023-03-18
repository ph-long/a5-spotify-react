import React, {useState} from 'react'
import { Outlet, Link } from "react-router-dom";

const TrackList = (props) => {
    let tracks = props.data
    const [hideArtist, setHideArtist] = useState(props.hideArtist)
    const [hideAlbum, setHideAlbum] = useState(props.hideAlbum)

    const trackClicked = (id) =>{
        props.setId(id)
        props.setPageState("track")
    }

    const artistClicked = (id) => {
        props.setId(id)
        props.setPageState("artist")
    }

    const albumClicked = (id) => {
        props.setId(id)
        props.setPageState("album")
    }

    return (
        <div>
            {tracks ?
            <table class="table table-sm table-light table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Track</th>
                        <th scope="col">Duration</th>
                        {!hideArtist ? <th scope="col">Primary Artist</th> : null}
                        {!hideAlbum ? <th scope="col">Album</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {
                        tracks.map((value, index) => {
                            return <tr>
                            <td>{index + 1}</td>
                            <td>
                                <Link to="/track">{value.name}</Link>
                            </td>
                            <td>{value.durationStr}</td>
                            {!hideArtist ? <td><a onClick={() => artistClicked(value.primaryArtist.url)}>{value.primaryArtist.name}</a></td> : null}
                            {!hideAlbum ? <td><Link to="/album" onClick={() => albumClicked(value.album.id)}>{value.album.name}</Link></td> : null}
                            </tr>
                        })
                    }
                </tbody>
            </table>
            : null
            }
        </div>
    )

};
export default TrackList;