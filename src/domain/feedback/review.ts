import { ReviewContent } from "./reviewContent.js";
import { v4 as uuid } from "uuid";

export class Review {
  public id: string;
  public order_id: string;
  public store_id: string;
  public order_feedback: ReviewContent;
  public delivery_feedback: ReviewContent;

  constructor(order_id: string, store_id: string, order_feedback: ReviewContent, delivery_feedback: ReviewContent) {
    this.id = uuid();
    this.order_id = order_id;
    this.store_id = store_id;
    this.order_feedback = order_feedback;
    this.delivery_feedback = delivery_feedback;
  }
}
