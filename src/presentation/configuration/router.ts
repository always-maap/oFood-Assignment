import { Router, Request, Response, NextFunction } from "express";

import { CreateReviewCommandHandler, GetStoreRatingsQueryHandler } from "@ofood/application";
import { ReviewRepository, StoreRatingsCacheProvider, db, redisClient } from "@ofood/infrastructure";
import { ReviewController } from "../controller/review.js";

const reviewRepository = new ReviewRepository(db);
const storeRatingsCacheProvider = new StoreRatingsCacheProvider(redisClient);
const createReviewCommandHandler = new CreateReviewCommandHandler(reviewRepository);
const getStoreRatingsQueryHandler = new GetStoreRatingsQueryHandler(storeRatingsCacheProvider);
const reviewController = new ReviewController(createReviewCommandHandler, getStoreRatingsQueryHandler);

export const routes = Router();

routes.post("/reviews", async (req: Request, res: Response, next: NextFunction) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.requestBody = {
    required: true,
    schema: { $ref: "#/components/schemas/review" }
  } 
  */

  try {
    await reviewController.createReview(req, res);
  } catch (error) {
    next(error);
  }
});

routes.get("/reviews/ratings/:storeId", async (req: Request, res: Response, next: NextFunction) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.parameters['storeId'] = {
    in: 'path'
  } 
  */
  try {
    await reviewController.getStoreRating(req, res);
  } catch (error) {
    next(error);
  }
});

routes.get("/health", (req: Request, res: Response) => {
  /*
  #swagger.tags = ['Health']
  */
  res.status(200).send({ status: "ok" });
});
