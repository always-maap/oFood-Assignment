import { IReviewRepository, Review } from "@ofood/domain";
import { CreateReviewCommand, CreateReviewCommandData } from "./createReviewCommand.js";

export class CreateReviewCommandHandler implements CreateReviewCommand {
  private readonly _reviewRepository: IReviewRepository;

  constructor(reviewRepository: IReviewRepository) {
    this._reviewRepository = reviewRepository;
  }

  async handle(data: CreateReviewCommandData): Promise<void> {
    const review = new Review(data.order_id, data.store_id, data.order_feedback, data.delivery_feedback);

    await this._reviewRepository.createReview(review);
  }
}
