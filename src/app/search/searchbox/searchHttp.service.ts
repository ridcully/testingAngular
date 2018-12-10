import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Artist} from '../../artist.model';
import {Collection} from '../../collection.model';
import {Track} from '../../track.model';
import {Artwork} from '../../artwork.model';
import {SearchResultsService} from '../../searchResults.service';


@Injectable()
export class SearchHttpService {
  // private baseUrl = 'https://itunes.apple.com/search'; // Problem with CORS
  private baseUrl = '/itunesProxy';

  constructor (private http: HttpClient, private srs: SearchResultsService) {}

  search (term: string) {
    // set to default
    this.srs.Selected = -1;
    this.srs.Tracks = [];

    // when no search term is given, just leave the function
    if (term == '') {
      return;
    }

    // define parameters
    const options = term ? { params: new HttpParams().set('term', term).set('kind', 'song') } : {};

    // do http request
    this.http.get(this.baseUrl, options).subscribe(
      (value:object) => {
        // if we got any results, fill the results array.
        if (value['resultCount'] >= 0) {
          for (let one of value['results']) {
            let a = new Artist(
              one['artistId'],
              one['artistName'],
              one['artistViewUrl']);
            let c = new Collection(
              one['collectionId'],
              one['collectionName'],
              one['collectionCensoredName'],
              one['collectionExplicitness'],
              one['collectionPrice'],
              one['collectionViewUrl']);
            let p = new Artwork(
              one['artworkUrl30'],
              one['artworkUrl60'],
              one['artworkUrl100']);
            let t = new Track(
              a,
              c,
              p,
              one['country'],
              one['currency'],
              one['discNumber'],
              one['discCount'],
              one['isStreamable'],
              one['previewUrl'],
              one['primaryGenreName'],
              one['releaseDate'],
              one['trackId'],
              one['trackName'],
              one['trackCensoredName'],
              one['trackNumber'],
              one['trackCount'],
              one['trackExplicitness'],
              one['trackPrice'],
              one['trackTimeMillis'],
              one['trackViewUrl']
            );
            this.srs.Tracks.push(t);
          }
        }
      }
    );
  }
}
