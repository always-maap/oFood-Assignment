import { v4 as uuid } from "uuid";

import { AggregateRoot } from "../shared/model/AggregateRoot.js";
import { ReviewOptions } from "./option/reviewOptions.js";
import { ReviewContent } from "./reviewContent.js";
import { ReviewCreatedEvent } from "./event/reviewCreatedEvent.js";

export class Review extends AggregateRoot<string> {
  public order_id: string;
  public store_id: string;
  public order_feedback: ReviewContent;
  public delivery_feedback: ReviewContent;

  constructor(options: ReviewOptions) {
    super(uuid());
    this.order_id = options.order_id;
    this.store_id = options.store_id;
    this.order_feedback = new ReviewContent(options.order_feedback);
    this.delivery_feedback = new ReviewContent(options.delivery_feedback);

    this.AddDomainEvent(new ReviewCreatedEvent(this.id));
  }
}
