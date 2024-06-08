import type { NextFunction, Request, Response } from "express";

import { CreateReviewCommand, GetStoreRatingsQuery } from "@ofood/application";
import { CreateReviewRequestSchema } from "@ofood/contracts";
import { ArgumentError } from "@ofood/domain";

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
      throw new ArgumentError(error);
    }

    await this.createReviewCommand.handle(data);
    res.status(201).send();
  };

  public getStoreRating = async (req: Request, res: Response) => {
    const storeId = req.params.storeId;
    const storeRatingsResult = await this.getStoreRatingCommand.handle({ storeId });
    res.status(200).send(storeRatingsResult);
  };
}
