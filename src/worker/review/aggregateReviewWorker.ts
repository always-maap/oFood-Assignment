import { AggregateStoreRatingsQuery } from "@ofood/application";
import { IWorker } from "./IWorker.js";
import { WorkerProxy } from "./WorkerProxy.js";

export class AggregateReviewWorker extends WorkerProxy implements IWorker {
  private readonly aggregateStoreRatingsQuery: AggregateStoreRatingsQuery;

  constructor(aggregateStoreRatingsQuery: AggregateStoreRatingsQuery) {
    super();
    this.aggregateStoreRatingsQuery = aggregateStoreRatingsQuery;
  }

  async invoke(): Promise<void> {
    this.execute(AggregateReviewWorker.name, async () => {
      await this.aggregateStoreRatingsQuery.handle();
    });
  }
}
