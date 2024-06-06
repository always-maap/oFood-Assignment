import { Router } from "express";

import { CreateReviewCommandHandler, GetStoreRatingsQueryHandler } from "@ofood/application";
import { ReviewRepository, StoreRatingsCacheProvider, db, redisClient } from "@ofood/infrastructure";
import { ReviewController } from "./controller/review.js";

const reviewRepository = new ReviewRepository(db);
const storeRatingsCacheProvider = new StoreRatingsCacheProvider(redisClient);
const createReviewCommandHandler = new CreateReviewCommandHandler(reviewRepository);
const getStoreRatingsQueryHandler = new GetStoreRatingsQueryHandler(storeRatingsCacheProvider);
const reviewController = new ReviewController(createReviewCommandHandler, getStoreRatingsQueryHandler);

export const routes = Router();

routes.post("/reviews", reviewController.createReview);
routes.get("/reviews/ratings/:storeId", reviewController.getStoreRating);
