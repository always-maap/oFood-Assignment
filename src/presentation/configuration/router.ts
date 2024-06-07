import { Router, Request, Response } from "express";

import { CreateReviewCommandHandler, GetStoreRatingsQueryHandler } from "@ofood/application";
import { ReviewRepository, StoreRatingsCacheProvider, db, redisClient } from "@ofood/infrastructure";
import { ReviewController } from "../controller/review.js";

const reviewRepository = new ReviewRepository(db);
const storeRatingsCacheProvider = new StoreRatingsCacheProvider(redisClient);
const createReviewCommandHandler = new CreateReviewCommandHandler(reviewRepository);
const getStoreRatingsQueryHandler = new GetStoreRatingsQueryHandler(storeRatingsCacheProvider);
const reviewController = new ReviewController(createReviewCommandHandler, getStoreRatingsQueryHandler);

export const routes = Router();

routes.post("/reviews", (req: Request, res: Response) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.requestBody = {
    required: true,
    schema: { $ref: "#/components/schemas/review" }
  } 
  */
  reviewController.createReview(req, res);
});

routes.get("/reviews/ratings/:storeId", (req: Request, res: Response) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.parameters['storeId'] = {
    in: 'path'
  } 
  */
  reviewController.getStoreRating(req, res);
});

routes.get("/health", (req: Request, res: Response) => {
  /*
  #swagger.tags = ['Health']
  */
  res.status(200).send({ status: "ok" });
});
