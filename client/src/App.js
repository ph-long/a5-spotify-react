
import './App.css';
import React, {useState} from 'react'
import AlbumPage from "./components/AlbumPage"
import ArtistPage from "./components/ArtistPage"
import TrackPage from './components/TrackPage.j/s';
import About from "./components/About"
import Carousel from './components/Carousel';
import Seach from "./components/Search"
import TrackList from './components/TrackList';

function App() {
  const [id, setId] = useState(null) // stores track/artist/album id
  const [pageState, sestPageState] = useState("home") // set page states


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
