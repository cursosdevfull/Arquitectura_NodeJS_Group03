import { IDomainEvent } from "./DomainEvent.interface";
import { User } from "./User";

export class UserCreated implements IDomainEvent {
  dateTimeOccurred: Date;
  user: User;

  constructor(user: User) {
    this.dateTimeOccurred = new Date();
    this.user = user;
  }

  getAggregateId(): string {
    return this.user.id;
  }
}
