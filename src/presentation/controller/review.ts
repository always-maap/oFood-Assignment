import type { NextFunction, Request, Response } from "express";

import { CreateReviewCommand, GetStoreRatingsQuery } from "@ofood/application";
import { CreateReviewRequestSchema } from "@ofood/contracts";

export class ReviewController {
  private readonly createReviewCommand: CreateReviewCommand;
  private readonly getStoreRatingCommand: GetStoreRatingsQuery;

  constructor(createReviewCommand: CreateReviewCommand, getStoreRatingCommand: GetStoreRatingsQuery) {
    this.createReviewCommand = createReviewCommand;
    this.getStoreRatingCommand = getStoreRatingCommand;
  }

  public createReview = async (req: Request, res: Response) => {
    const { data, error, success } = CreateReviewRequestSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).send({ error: error.errors });
    }

    await this.createReviewCommand.handle(data);
    res.status(201).send();
  };

  public getStoreRating = async (req: Request, res: Response) => {
    const storeId = req.params.storeId;
    const rating = await this.getStoreRatingCommand.handle({ storeId });
    res.status(200).send({ rating });
  };
}
