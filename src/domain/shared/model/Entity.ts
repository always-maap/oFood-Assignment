import { DomainEvent } from "./DomainEvent.js";

export abstract class Entity<TId> {
  public readonly id: TId;
  private _domainEvents: DomainEvent[];

  protected constructor(id: TId) {
    this.id = id;
    this._domainEvents = [];
  }

  public AddDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  public GetDomainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  public ClearDomainEvents(): void {
    this._domainEvents = [];
  }

  public equals(other: Entity<TId>): boolean {
    if (other === null) {
      return false;
    }

    if (this === other) {
      return true;
    }

    return this.id === other.id;
  }
}
