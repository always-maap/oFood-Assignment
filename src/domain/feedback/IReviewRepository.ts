import { Review } from "./review.js";

export interface IReviewRepository {
  createReview(review: Review): Promise<void>;
  getAllStoreIds(): Promise<string[]>;
  getStoreRatingsAggregate(storeId: string): Promise<any>;
}
