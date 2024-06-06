import { Router } from "express";

import { CreateReviewCommandHandler } from "@ofood/application";
import { ReviewRepository } from "@ofood/infrastructure";
import { ReviewController } from "./controller/review.js";

const reviewRepository = new ReviewRepository();
const reviewController = new ReviewController(new CreateReviewCommandHandler(reviewRepository));

export const routes = Router();

routes.post("/reviews", reviewController.createReview);
