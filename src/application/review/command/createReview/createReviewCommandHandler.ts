import { IReviewRepository, Review, ReviewOptions } from "@ofood/domain";
import { CreateReviewCommand, CreateReviewCommandData } from "./createReviewCommand.js";

export class CreateReviewCommandHandler implements CreateReviewCommand {
  private readonly _reviewRepository: IReviewRepository;

  constructor(reviewRepository: IReviewRepository) {
    this._reviewRepository = reviewRepository;
  }

  async handle(data: CreateReviewCommandData): Promise<void> {
    const reviewOptions: ReviewOptions = {
      order_id: data.order_id,
      store_id: data.store_id,
      order_feedback: data.order_feedback,
      delivery_feedback: data.delivery_feedback,
    };

    const review = new Review(reviewOptions);

    await this._reviewRepository.createReview(review);
  }
}
