
import './App.css';
import React, {useState} from 'react'
import AlbumPage from "./components/AlbumPage"
import ArtistPage from "./components/ArtistPage"
import TrackPage from './components/TrackPage';
import About from "./components/About"
import Seach from "./components/Search"
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [id, setId] = useState("7ayBZIe1FHkNv0T5xFCX6F") // stores track/artist/album id
  const [pageState, setPageState] = useState("album") // set page states


  return (
    <div className="App">
      {/* HEADER FOR ALL SPOTIFY PAGES */}
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        {/* IF-ELSE BETWEEN PAGE"S STATES */}
        {console.log(pageState)}
        {  pageState === "home" ?
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
          <About/>
          <Seach setId = {setId} setPageState = {setPageState}/>
      </div> :
        pageState === "album" ?
        <div>
          <AlbumPage id={id} setId = {setId} setPageState = {setPageState}/>
        </div> :
        pageState === "artist" ?
        <div>
          <ArtistPage />
        </div> :
        pageState === "track" ?
        <div>
          <TrackPage/>
        </div>:
        null}
      </div>
    </div>
  );
}

export default App;
