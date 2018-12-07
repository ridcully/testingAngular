import {Artist} from './artist.model';
import {Collection} from './collection.model';
import {Artwork} from './artwork.model';

export class Track {
  constructor (
    public Artist: Artist,
    public Collection: Collection,
    public Artwork: Artwork,
    public Country: string,
    public Currency: string,
    public DiscNumber: number,
    public DiscCount: number,
    public IsStreamable: boolean,
    public PreviewUrl: string,
    public PrimaryGenre: string,
    public ReleaseDate: string,
    public Id: number,
    public Name: string,
    public CensoredName: string,
    public Number: number,
    public Count: number,
    public Explicitness: string,
    public Price: number,
    public Length: number,
    public Url: string
  ) {}
}
