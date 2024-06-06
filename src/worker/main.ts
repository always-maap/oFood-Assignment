import "dotenv/config";
import schedule from "node-schedule";

import { AggregateStoreRatingsQueryHandler } from "@ofood/application";
import { ReviewRepository, StoreRatingsCacheProvider, db, redisClient } from "@ofood/infrastructure";
import { AggregateReviewWorker } from "./review/aggregateReviewWorker.js";

const reviewRepository = new ReviewRepository(db);
const storeRatingsCacheProvider = new StoreRatingsCacheProvider(redisClient);
const aggregateStoreRatingsQueryHandler = new AggregateStoreRatingsQueryHandler(
  reviewRepository,
  storeRatingsCacheProvider
);
const aggregateReviewWorker = new AggregateReviewWorker(aggregateStoreRatingsQueryHandler);

schedule.scheduleJob("*/5 * * * * *", async () => await aggregateReviewWorker.invoke());

console.log(`🕰️  Worker is running`);
