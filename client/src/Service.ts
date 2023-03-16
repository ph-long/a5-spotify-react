import { lastValueFrom } from 'rxjs';
import { ArtistData } from './data/artist-data';
import { AlbumData } from './data/album-data';
import { TrackData } from './data/track-data';
import { ResourceData } from './data/resource-data';
import { ProfileData } from './data/profile-data';
import { TrackFeature } from './data/track-feature';

export class SpotifyService {
	expressBaseUrl:string = 'http://localhost:8888';

  constructor() { }

  private sendRequestToExpress(endpoint:string):Promise<any> {
    //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
    //the http service works similarly to fetch(). It may be useful to call .toPromise() on any responses.
    //update the return to instead return a Promise with the data from the Express server
    //Note: toPromise() is a deprecated function that will be removed in the future.
    //It's possible to do the assignment using lastValueFrom, but we recommend using toPromise() for now as we haven't
    //yet talked about Observables. https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated
    return lastValueFrom(fetch(this.expressBaseUrl + endpoint)).then((response) => {
      return response;
    }, (err) => {
      return err;
    });
  }

  aboutMe():Promise<ProfileData> {
    //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category:string, resource:string){
    //TODO: identify the search endpoint in the express webserver (routes/index.js) and send the request to express.
    //Make sure you're encoding the resource with encodeURIComponent().
    //Depending on the category (artist, track, album), return an array of that type of data.
    //JavaScript's "map" function might be useful for this, but there are other ways of building the array.
    let resources = [];
    return this.sendRequestToExpress('/search/' + category + "/" + encodeURIComponent(resource)).then((data) => {
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
     
      
  }

  getArtist(artistId:string):Promise<ArtistData> {
    return this.sendRequestToExpress('/artist/' + artistId).then((data) => {
      return new ArtistData(data);
    })
    //TODO: use the artist endpoint to make a request to express.
    //Again, you may need to encode the artistId.
  }

  getRelatedArtists(artistId:string){
    return this.sendRequestToExpress('/artist-related-artists/' + artistId).then((data) => {
      const artists = data["artists"].map((item) => {return new ArtistData(item)})
      return artists
    })
    //TODO: use the related artist endpoint to make a request to express and return an array of artist data.
  }

  getTopTracksForArtist(artistId:string):Promise<TrackData[]> {
    return this.sendRequestToExpress('/artist-top-tracks/' + artistId).then((data) => {
      const tracks = data["tracks"].map((item) => {return new TrackData(item)})
      return tracks
    })
    //TODO: use the top tracks endpoint to make a request to express.
  }

  getAlbumsForArtist(artistId:string):Promise<AlbumData[]> {
    return this.sendRequestToExpress('/artist-albums/' + artistId).then((data) => {
      const albums = data["items"].map((item) => {return new AlbumData(item)})
      return albums
    })
    //TODO: use the albums for an artist endpoint to make a request to express.
  }

  getAlbum(albumId:string):Promise<AlbumData> {
    //TODO: use the album endpoint to make a request to express.
    return this.sendRequestToExpress('/album/' + albumId).then((data) => {
      return new AlbumData(data);
    })
  }

  getTracksForAlbum(albumId:string) {
    return this.sendRequestToExpress('/album-tracks/' + albumId).then((data) => {
      const tracks = data["items"].map((item) => {return new TrackData(item)})
      return tracks
    })
    //TODO: use the tracks for album endpoint to make a request to express.
  }

  getTrack(trackId:string):Promise<TrackData> {
    //TODO: use the track endpoint to make a request to express.
    return this.sendRequestToExpress('/track/' + trackId).then((data) => {
      return new TrackData(data);
    })
  }

  getAudioFeaturesForTrack(trackId:string) {
    //TODO: use the audio features for track endpoint to make a request to express.
    return this.sendRequestToExpress('/track-audio-features/' + trackId).then((data) => {
      const trackFeatures: TrackFeature[] = [];
      for (let key in data) {
        if (TrackFeature.FeatureTypes.includes(key)) {
          trackFeatures.push(new TrackFeature(key, data[key]))
        }
      }
      return trackFeatures;
    })
  }
}
