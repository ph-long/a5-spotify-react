import React, {useState} from 'react'
import {SpotifyService} from '../data/Service.ts'
import { ProfileData } from '../data/profile-data.js';
import axios from 'axios';
import './About.css'

const EXPRESSBASEURL = 'http://localhost:8888'

const About = (props) => {
    const [name, setName] = useState(null)
    const [profileLink, setProfileLink] = useState(null)
    const [profilePic, setProfilePic] = useState("../assets/unknown.jpg")
    
    const aboutMe = () => {
        axios.get(EXPRESSBASEURL + '/me').then((response)=>{
            const data = new ProfileData(response.data)
            setName(data.name)
            setProfileLink(data.spotifyProfile)
            setProfilePic(data.imageURL)
            return data;
          }).catch((error) => console.log(error))
    }   

    return (
        <div>
            <button class="btn btn-light" onClick={aboutMe}>Load info about me</button>
            <h3>Logged in user: {name}</h3>
            <img src={profilePic}/>
            <p>
                <a href = {profileLink} class="btn btn-light" target="_blank">Open profile on Spotify</a>	
            </p>
        </div>
    )
};
export default About;