export class Artwork {
  public Large: string;
  public ExtraLarge: string

  constructor(public ExtraSmall: string, public Small: string, public Medium: string) {
    const url = Medium;

    this.Large = url.replace('100x100', '300x300');
    this.ExtraLarge = url.replace('100x100', '500x500');
  }
}
