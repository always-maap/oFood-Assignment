import type { Request, Response } from "express";

import { CreateReviewCommand } from "@ofood/application";
import { CreateReviewRequestSchema } from "@ofood/contracts";

export class ReviewController {
  private readonly createReviewCommand: CreateReviewCommand;

  constructor(createReviewCommand: CreateReviewCommand) {
    this.createReviewCommand = createReviewCommand;
  }

  public createReview = async (req: Request, res: Response) => {
    const { data, error, success } = CreateReviewRequestSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).send({ error: error.errors });
    }

    await this.createReviewCommand.handle(data);
    res.status(201).send();
  };
}
