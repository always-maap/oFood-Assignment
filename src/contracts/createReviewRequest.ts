export type CreateReviewRequest = {
  order_id: number;
  store_id: number;
  order_feedback: {
    rating: number;
    comment: string;
  };
  delivery_feedback: {
    rating: number;
    comment: string;
  };
};
