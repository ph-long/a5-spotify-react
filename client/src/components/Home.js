import React, {useState, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import About from "./About"
import Seach from "./Search"
import TrackList from './TrackList';
import {SpotifyService} from '../data/Service.ts'
import './Home.css'

const Home = (props) => {
    return (
        <div> 
            <Navbar bg="light">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item navbar-brand">
            <a class="navbar-brand" href="/">
                Browsing spotify
            </a>
            </li>
        </ul>
        <ul class="navbar-nav navbar-right mr-auto">
            <li class="nav-item">
            <a class="btn btn-dark" role="button" href="http://localhost:8888/login">Log in</a>
            </li>
        </ul>
        </Navbar>
        <div class="group">
            <About/>
            <div class="search">
                <Seach setId = {props.setId} setPageState = {props.setPageState}/>
            </div>
        </div>
  </div>
    )
}

export default Home