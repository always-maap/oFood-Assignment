export interface CreateReviewCommand {
  handle(data: CreateReviewCommandData): Promise<void>;
}

export type CreateReviewCommandData = {
  order_id: string;
  store_id: string;
  order_feedback: {
    rating: number;
    comment: string;
  };
  delivery_feedback: {
    rating: number;
    comment: string;
  };
};
