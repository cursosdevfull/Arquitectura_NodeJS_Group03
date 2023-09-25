import { AggregateRoot } from "./AggregateRoot";
import { IDomainEvent } from "./DomainEvent.interface";

export class DomainEvents {
  static markedAggregates: AggregateRoot[] = [];
  static handlerMap: any = {};

  static markAggregateForDispatch(aggregate: AggregateRoot) {
    const aggregateFound = !!this.findMarkedAggregateById(aggregate.id);
    if (!aggregateFound) this.markedAggregates.push(aggregate);
  }

  static findMarkedAggregateById(id: string): AggregateRoot | null {
    let found = null;
    for (const aggregate of this.markedAggregates) {
      if (aggregate.id === id) {
        found = aggregate;
        break;
      }
    }

    return found;
  }

  static register(cb: (event: IDomainEvent) => void, eventClassName: string) {
    if (!this.handlerMap.hasOwnProperty(eventClassName)) {
      this.handlerMap[eventClassName] = [];
    }
    this.handlerMap[eventClassName].push(cb);
    console.log("Methods registered", this.handlerMap);
  }

  static dispatchEventForAggregate(id: string) {
    const aggregateFound = this.findMarkedAggregateById(id);
    if (aggregateFound) {
      this.dispatchAggregateEvents(aggregateFound);
      aggregateFound.clearEvents();
      this.removeAggregateFromMarkedDispatchList(aggregateFound);
    }
  }

  static dispatchAggregateEvents(aggregate: AggregateRoot) {
    aggregate.domainEvents.forEach((event: IDomainEvent) => {
      this.dispatch(event);
    });
  }

  static dispatch(event: IDomainEvent) {
    const eventClassName: string = event.constructor.name;
    if (this.handlerMap.hasOwnProperty(eventClassName)) {
      this.handlerMap[eventClassName].forEach(
        (cb: (event: IDomainEvent) => void) => {
          cb(event);
        }
      );
    }
  }

  static removeAggregateFromMarkedDispatchList(aggregate: AggregateRoot) {
    const positionIndex = this.markedAggregates.findIndex(
      (aggregateItem: AggregateRoot) => aggregateItem.id === aggregate.id
    );
    this.markedAggregates.splice(positionIndex, 1);
  }
}
