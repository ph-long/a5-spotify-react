import React, {useState} from 'react'

const TrackList = (props) => {
    let tracks = props.data
    const [hideArtist, setHideArtist] = useState(props.hideArtist)
    const [hideAlbum, setHideAlbum] = useState(props.hideAlbum)
    console.log(tracks)

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
                                <a onClick={() => trackClicked(value.id)}>{value.name}</a>
                            </td>
                            <td>{value.durationStr}</td>
                            {!hideArtist ? <td><a onClick={() => artistClicked(value.primaryArtist.url)}>{value.primaryArtist.name}</a></td> : null}
                            {!hideAlbum ? <td><a onClick={() => albumClicked(value.album.url)}>{value.album.name}</a></td> : null}
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