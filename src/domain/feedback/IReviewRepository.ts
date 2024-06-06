import { Review } from "./review";

export interface IReviewRepository {
  createReview(review: Review): Promise<void>;
}
