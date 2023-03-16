import { ResourceData } from './resource-data';

export class ArtistData extends ResourceData {
	genres;

	constructor(objectModel) {
		super(objectModel);
		this.category = 'artist';
		this.genres = objectModel['genres'];
	}
}
