import { ReviewContentOptions } from "./reviewContentOptions.js";

export interface ReviewOptions {
  order_id: string;
  store_id: string;
  order_feedback: ReviewContentOptions;
  delivery_feedback: ReviewContentOptions;
}
