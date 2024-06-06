import { IReviewRepository } from "@ofood/domain";
import { AggregateStoreRatingsQuery } from "./aggregateStoreRatingsQuery.js";
import { IStoreRatingsCacheProvider } from "../../IStoreRatingsCacheProvider.js";

export class AggregateStoreRatingsQueryHandler implements AggregateStoreRatingsQuery {
  private readonly reviewRepository: IReviewRepository;
  private readonly cache: IStoreRatingsCacheProvider;

  constructor(reviewRepository: IReviewRepository, cache: IStoreRatingsCacheProvider) {
    this.reviewRepository = reviewRepository;
    this.cache = cache;
  }

  async handle(): Promise<void> {
    const storeIds = await this.reviewRepository.getAllStoreIds();

    for (const storeId of storeIds) {
      const x = await this.reviewRepository.getStoreRatingsAggregate(storeId);

      await this.cache.set(storeId, x);
    }
  }
}
