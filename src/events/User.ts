import { AggregateRoot } from "./AggregateRoot";
import { UserCreated } from "./UserCreated";
import { UserDelete } from "./UserDelete";
import { UserUpdate } from "./UserUpdate";

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  DELETED = "deleted",
}

export class User extends AggregateRoot {
  private name: string;
  private email: string;
  private status: UserStatus;

  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
    this.status = UserStatus.ACTIVE;

    this.addDomainEvent(new UserCreated(this));
  }

  update(name: string) {
    this.name = name;
    this.clearEvents();
    this.addDomainEvent(new UserUpdate(this));
  }

  delete() {
    this.status = UserStatus.DELETED;
    this.clearEvents();
    this.addDomainEvent(new UserDelete(this));
  }
}
