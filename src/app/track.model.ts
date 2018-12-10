import {Artist} from './artist.model';
import {Collection} from './collection.model';
import {Artwork} from './artwork.model';

export class Track {
  // These are "calculated variables
  public ReadableLength: string;
  public ReleaseAsDate: Date;
  public ReadableReleaseDate: string;
  public ReadablePrice: string;

  // All other variables are set with the constructor
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
  ) {
    // Convert length from ms into a user readable string
    const ls = Math.floor(this.Length / 1000)
    const l1 = Math.floor(ls / 60);
    const l2 = Math.floor(ls - (l1 * 60));
    this.ReadableLength = l1.toString() + ':' + (l2.toString().length === 1 ? '0' + l2.toString() : l2.toString());

    // Convert Price to readable string
    if (this.Price < 0) {
      this.ReadablePrice = 'none';
    } else {
      this.ReadablePrice = this.Price.toString() + ' ' + this.Currency;
    }

    // Convert Release date in a more compact date string
    this.ReleaseAsDate = new Date(this.ReleaseDate);
    this.ReadableReleaseDate =
      ((this.ReleaseAsDate.getDay() <= 0) ? '' : ((this.ReleaseAsDate.getDay() < 10) ? '0' : '') + this.ReleaseAsDate.getDay().toString() + '.') +
      ((this.ReleaseAsDate.getMonth() < 10) ? '0' : '') + this.ReleaseAsDate.getMonth().toString() +
      '.' +
      this.ReleaseAsDate.getFullYear().toString();
  }
}
