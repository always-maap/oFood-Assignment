import { count, eq, sql } from "drizzle-orm";

import { IReviewRepository, Review } from "@ofood/domain";
import { reviews } from "../configuration/reviews.schema.js";
import { IDbContext } from "../configuration/db.js";
import { GetStoreRatingsResponse } from "@ofood/contracts";

export class ReviewRepository implements IReviewRepository {
  private readonly db: IDbContext;

  constructor(db: IDbContext) {
    this.db = db;
  }

  async createReview(review: Review): Promise<void> {
    await this.db.insert(reviews).values({
      id: review.id,
      order_id: review.order_id,
      store_id: review.store_id,
      order_rating: review.order_feedback.rating,
      order_comment: review.order_feedback.comment,
      delivery_rating: review.delivery_feedback.rating,
      delivery_comment: review.delivery_feedback.comment,
    });
  }

  async getAllStoreIds(): Promise<string[]> {
    const storeIds = await this.db.selectDistinct({ store_id: reviews.store_id }).from(reviews);

    return storeIds.map((x) => x.store_id);
  }

  async getStoreRatingsAggregate(storeId: string): Promise<GetStoreRatingsResponse> {
    const [storeRatings] = await this.db
      .select({
        rating: sql<number>`CAST(AVG(${reviews.order_rating}) as FLOAT)`,
        rates_count: count(reviews.order_rating),
        rating_one_count: sql<number>`CAST(SUM(CASE WHEN ${reviews.order_rating} = 1 THEN 1 ELSE 0 END) as SIGNED)`,
        rating_two_count: sql<number>`CAST(SUM(CASE WHEN ${reviews.order_rating} = 2 THEN 1 ELSE 0 END) as SIGNED)`,
        rating_three_count: sql<number>`CAST(SUM(CASE WHEN ${reviews.order_rating} = 3 THEN 1 ELSE 0 END) as SIGNED)`,
        rating_four_count: sql<number>`CAST(SUM(CASE WHEN ${reviews.order_rating} = 4 THEN 1 ELSE 0 END) as SIGNED)`,
        rating_five_count: sql<number>`CAST(SUM(CASE WHEN ${reviews.order_rating} = 5 THEN 1 ELSE 0 END) as SIGNED)`,
        comments_count: count(reviews.order_comment),
      })
      .from(reviews)
      .where(eq(reviews.store_id, storeId))
      .groupBy(reviews.store_id);

    return storeRatings;
  }
}
