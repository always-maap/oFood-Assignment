import { v4 as uuid } from "uuid";

import { IDomainEvent } from "./IDomainEvent.js";

export class DomainEvent implements IDomainEvent {
  public EventId: string;
  public Timestamp: string;

  protected constructor() {
    this.EventId = uuid();
    this.Timestamp = new Date().toString();
  }
}
