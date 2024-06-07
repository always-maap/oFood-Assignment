import { DomainEvent } from "../../shared/model/DomainEvent.js";

export class ReviewCreatedEvent extends DomainEvent {
  constructor(public readonly reviewId: string) {
    super();
  }
}
