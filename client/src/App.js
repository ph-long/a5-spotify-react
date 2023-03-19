
import './App.css';
import React, {useState} from 'react'
import AlbumPage from "./components/AlbumPage"
import ArtistPage from "./components/ArtistPage"
import TrackPage from './components/TrackPage';
import About from "./components/About"
import Seach from "./components/Search"
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


// react router
function App() {
  const [id, setId] = useState("2tIP7SsRs7vjIcLrU85W8J") // stores track/artist/album id
  const [pageState, setPageState] = useState("home") // set page states


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home setId = {setId} setPageState = {setPageState}/>} />
        <Route path="artist" element={<ArtistPage id={id} setId = {setId} setPageState = {setPageState}/>} />
        <Route path="album" element={<AlbumPage id={id} setId = {setId} setPageState = {setPageState}/>} />
        <Route path="track" element={<TrackPage id={id} setId = {setId} setPageState = {setPageState}/>} />
      </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   {/* HEADER FOR ALL SPOTIFY PAGES */}
    //   {/* <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <div>
    //     {/* IF-ELSE BETWEEN PAGE"S STATES */}
    //     {console.log(pageState)}
    //     {  pageState === "home" ?
    //     <div> 
    //         <Navbar bg="light">
    //         <ul class="navbar-nav mr-auto">
    //         <li class="nav-item navbar-brand">
    //           <a class="navbar-brand" href="/">
    //             Browsing spotify
    //           </a>
    //         </li>
    //       </ul>
    //       <ul class="navbar-nav navbar-right mr-auto">
    //         <li class="nav-item">
    //           <a class="btn btn-dark" role="button" href="http://localhost:8888/login">Log in</a>
    //         </li>
    //       </ul>
    //       </Navbar>
    //       <About/>
    //       <Seach setId = {setId} setPageState = {setPageState}/>
    //   </div> :
    //     pageState === "album" ?
    //     <div>
    //       <AlbumPage id={id} setId = {setId} setPageState = {setPageState}/>
    //     </div> :
    //     pageState === "artist" ?
    //     <div>
    //       <ArtistPage />
    //     </div> :
    //     pageState === "track" ?
    //     <div>
    //       <TrackPage/>
    //     </div>:
    //     null}
    //   </div>
    // </div>
  );
}

export default App;
