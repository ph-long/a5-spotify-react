import { lastValueFrom } from 'rxjs';
import { ArtistData } from './artist-data.js';
import { AlbumData } from './album-data.js';
import { TrackData } from './track-data.js';
import { ProfileData } from './profile-data.js';
import { TrackFeature } from './track-feature.js';
import axios from 'axios'

export class SpotifyService {
	expressBaseUrl:string = 'http://localhost:8888';

  constructor() { }

  private sendRequestToExpress(endpoint:string) {
    //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
    //the http service works similarly to fetch(). It may be useful to call .toPromise() on any responses.
    //update the return to instead return a Promise with the data from the Express server
    //Note: toPromise() is a deprecated function that will be removed in the future.
    //It's possible to do the assignment using lastValueFrom, but we recommend using toPromise() for now as we haven't
    //yet talked about Observables. https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated
    // axios.get(this.expressBaseUrl + endpoint).then((response)=>{
    //   // console.log(response)
    //   return response
    // }).catch((error) => console.log(error))
   fetch(this.expressBaseUrl + endpoint).then((response) => {
      console.log(response)
      return response;
    }, (err) => {
      return err;
    });
  }

  aboutMe() {
    //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
        axios.get(this.expressBaseUrl + '/me').then((response)=>{
          const data = new ProfileData(response.data)
          console.log(data)
          return data;
        }).catch((error) => console.log(error))
  }

  async searchFor(category:string, resource:string){
    //TODO: identify the search endpoint in the express webserver (routes/index.js) and send the request to express.
    //Make sure you're encoding the resource with encodeURIComponent().
    //Depending on the category (artist, track, album), return an array of that type of data.
    //JavaScript's "map" function might be useful for this, but there are other ways of building the array.
    let resources = [];
     await axios.get(this.expressBaseUrl + '/search/' + category + "/" + encodeURIComponent(resource)).then((data) => {
        data = data["data"]
        if (category == "artist") {
            resources = data["artists"]["items"].map((item) => {
              return new ArtistData(item);
            })
          } else if (category == "album") {
            resources = data["albums"]["items"].map((item) => {
              return new AlbumData(item);
            })
          } else if (category == "track") {
            resources = data["tracks"]["items"].map((item) => {
              return new TrackData(item);
            })
          }
        return resources
        })
      return resources
     
      
  }

  async getArtist(artistId:string) {
    let res;
    await axios.get(this.expressBaseUrl +'/artist/' + artistId).then((data) => {
      data = data.data
      res = new ArtistData(data)
      return res;
    })
    return res;
    //TODO: use the artist endpoint to make a request to express.
    //Again, you may need to encode the artistId.
  }

  async getRelatedArtists(artistId:string){
    let artists;
    await axios.get(this.expressBaseUrl +'/artist-related-artists/' + artistId).then((data) => {
      data = data.data
      artists = data["artists"].map((item) => {return new ArtistData(item)})
      return artists
    })
    return artists;
    //TODO: use the related artist endpoint to make a request to express and return an array of artist data.
  }

  async getTopTracksForArtist(artistId:string){
    let tracks
    await axios.get(this.expressBaseUrl +'/artist-top-tracks/' + artistId).then((data) => {
      data = data.data
      tracks = data["tracks"].map((item) => {return new TrackData(item)})
      return tracks
    })
    return tracks
    //TODO: use the top tracks endpoint to make a request to express.
  }

  async getAlbumsForArtist(artistId:string) {
    let albums
    await axios.get(this.expressBaseUrl +'/artist-albums/' + artistId).then((data) => {
      data = data.data
      albums = data["items"].map((item) => {return new AlbumData(item)})
      return albums
    })
    return albums
    //TODO: use the albums for an artist endpoint to make a request to express.
  }

  async getAlbum(albumId:string) {
    //TODO: use the album endpoint to make a request to express.
    let res;
    await axios.get(this.expressBaseUrl + '/album/' + albumId).then((data) => {
      data = data.data
      res = new AlbumData(data)
      return res;
    })
    return res
  }

  async getTracksForAlbum(albumId:string) {
    let tracks;
    await axios.get(this.expressBaseUrl +'/album-tracks/' + albumId).then((data) => {
      data = data.data
      tracks = data["items"].map((item) => {return new TrackData(item)})
      return tracks
    })
    return tracks;
    //TODO: use the tracks for album endpoint to make a request to express.
  }

  async getTrack(trackId:string){
    //TODO: use the track endpoint to make a request to express.
    let res;
    await axios.get(this.expressBaseUrl +'/track/' + trackId).then((data) => {
      data = data.data
      res = new TrackData(data)
      return res;
    })
    return res;
  }

  async getAudioFeaturesForTrack(trackId:string) {
    //TODO: use the audio features for track endpoint to make a request to express.
    const trackFeatures: TrackFeature[] = [];
    await axios.get(this.expressBaseUrl +'/track-audio-features/' + trackId).then((data) => {
      data = data.data
      for (let key in data) {
        if (TrackFeature.FeatureTypes.includes(key)) {
          trackFeatures.push(new TrackFeature(key, data[key]))
        }
      }
      return trackFeatures;
    })
    return trackFeatures;
  }
}
