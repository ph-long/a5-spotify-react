import React, {useState} from 'react'
import { Link } from "react-router-dom";

const TrackList = (props) => {
    let tracks = props.data
    const [hideArtist, setHideArtist] = useState(props.hideArtist)
    const [hideAlbum, setHideAlbum] = useState(props.hideAlbum)

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
                            {return (value.category === "track") ? 
                                    <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Link to={`/track/${value.id}`}>{value.name}</Link>
                                    </td>
                                    <td>{value.durationStr}</td>
                                    {!hideArtist ? <td><Link to={`/artist/${value.primaryArtist.id}`}>{value.primaryArtist.name}</Link></td> : null}
                                    {!hideAlbum ? <td><Link to={`/album/${value.album.id}`}>{value.album.name}</Link></td> : null}
                                    </tr> : null
                            }
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