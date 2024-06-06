export class ReviewContent {
  public rating: number;
  public comment: string;

  constructor(rating: number, comment: string) {
    this.rating = rating;
    this.comment = comment;
  }
}
