import { IDomainEvent } from "./DomainEvent.interface";
import { DomainEvents } from "./DomainEvents";
import { Entity } from "./Entity";

export abstract class AggregateRoot extends Entity {
  private _domainEvents: IDomainEvent[] = [];

  protected addDomainEvent(domainEvent: IDomainEvent) {
    this._domainEvents.push(domainEvent);
    DomainEvents.markAggregateForDispatch(this);

    console.log("Domain events registered", this._domainEvents);
  }

  get id(): string {
    return this._id;
  }

  get domainEvents(): IDomainEvent[] {
    return [...this._domainEvents];
  }

  clearEvents() {
    this._domainEvents.splice(0, this._domainEvents.length);
  }
}
