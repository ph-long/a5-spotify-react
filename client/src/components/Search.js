import React, {useState} from 'react'
import axios from 'axios';
import CarouselComponent from './CarouselComponent';
import TrackList from './TrackList';
import { SpotifyService } from '../data/Service.ts';

const EXPRESSBASEURL = 'http://localhost:8888'

const Search = (props) => {
    const [searchString, setSearchString] = useState("")
    const [searchCategory, setSearchCategory] = useState('artist')
    const serachCategories = ['artist', 'album', 'track']
    const [resources, setResource] = useState([])
    const service = new SpotifyService()

    const search = () => {
        service.searchFor(searchCategory, searchString).then((data)=>{
            setResource(data)
        })
        console.log(resources)
        
    }

    return (
        <div>
            <form>
                <input value={searchString} onChange={e => setSearchString(e.target.value)} />
                <select value={searchCategory} onChange={e=> setSearchCategory(e.target.value)}>
                    {serachCategories.map((name, index) => {return <option key={index}>{name}</option>})}
                </select>
                
            </form>
            <button class="btn btn-light" onClick={search} type='button'>Search</button>
            {searchCategory !== "track" ?
            <CarouselComponent data = {resources} setId = {props.setId}/>
            : <TrackList data = {resources} hideArtist = {false} hideAlbum = {false} setId = {props.setId} />}
        </div>
    )
};


export default Search;