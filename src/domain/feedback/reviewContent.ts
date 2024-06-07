import { DomainError } from "../shared/error/domainError.js";
import { ValueObject } from "../shared/model/ValueObject.js";
import { ReviewContentOptions } from "./option/reviewContentOptions.js";

export class ReviewContent extends ValueObject {
  public rating: number;
  public comment: string;

  constructor(options: ReviewContentOptions) {
    super();

    this.ensureRatingIsValid(options.rating);

    this.rating = options.rating;
    this.comment = options.comment;
  }

  private ensureRatingIsValid(rating: number) {
    if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      throw new DomainError("Rating must be an integer between 1 and 5");
    }
  }
}
