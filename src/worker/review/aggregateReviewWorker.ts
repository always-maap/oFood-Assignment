import { AggregateStoreRatingsQuery } from "@ofood/application";
import { IWorker } from "./IWorker.js";

export class AggregateReviewWorker implements IWorker {
  private readonly aggregateStoreRatingsQuery: AggregateStoreRatingsQuery;

  constructor(aggregateStoreRatingsQuery: AggregateStoreRatingsQuery) {
    this.aggregateStoreRatingsQuery = aggregateStoreRatingsQuery;
  }

  async invoke(): Promise<void> {
    await this.aggregateStoreRatingsQuery.handle();
  }
}
