
import './App.css';
import React, {useState} from 'react'
import AlbumPage from "./components/AlbumPage"
import ArtistPage from "./components/ArtistPage"
import TrackPage from './components/TrackPage';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


// react router
function App() {
  const [id, setId] = useState("2tIP7SsRs7vjIcLrU85W8J") // stores track/artist/album id

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home setId = {setId}/>} />
        <Route path="artist/:id" element={<ArtistPage id={id} setId = {setId}/>} />
        <Route path="album/:id" element={<AlbumPage id={id} setId = {setId}/>} />
        <Route path="track/:id" element={<TrackPage id={id} setId = {setId}/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
