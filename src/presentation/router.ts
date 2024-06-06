import { Router } from "express";

import { CreateReviewCommandHandler } from "@ofood/application";
import { ReviewController } from "./controller/review";

const reviewController = new ReviewController(new CreateReviewCommandHandler());

export const routes = Router();

routes.post("/reviews", reviewController.createReview);
