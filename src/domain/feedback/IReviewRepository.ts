import { Review } from "./review.js";

export interface IReviewRepository {
  createReview(review: Review): Promise<void>;
}
