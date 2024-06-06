import { IReviewRepository, Review } from "@ofood/domain";
import { db } from "../configuration/db.js";
import { reviews } from "../configuration/reviews.schema.js";

export class ReviewRepository implements IReviewRepository {
  async createReview(review: Review): Promise<void> {
    await db.insert(reviews).values({
      id: review.id,
      order_id: review.order_id,
      store_id: review.store_id,
      order_rating: review.order_feedback.rating,
      order_comment: review.order_feedback.comment,
      delivery_rating: review.delivery_feedback.rating,
      delivery_comment: review.delivery_feedback.comment,
    });
  }
}
