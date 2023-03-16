export class ProfileData {
	name;
	spotifyProfile;
	imageURL;

	constructor(objectModel) {
		this.name = objectModel['display_name'];
		this.spotifyProfile = objectModel['external_urls']['spotify'];
		if(objectModel['images'].length > 0) {
			this.imageURL = objectModel['images'][0].url;
		} else {
			this.imageURL = '../../assets/unknown.jpg';
		}
	}
}
