import { DomainEvents } from "./DomainEvents";
import { UserCreated } from "./UserCreated";
import { UserDelete } from "./UserDelete";
import { UserUpdate } from "./UserUpdate";

export class Log {
  typeLog: string = "Log";

  constructor() {
    DomainEvents.register(this.printEvent.bind(this), UserCreated.name);
    DomainEvents.register(this.printUpdate.bind(this), UserUpdate.name);
    DomainEvents.register(this.printDelete.bind(this), UserDelete.name);
  }

  printEvent(event: any) {
    console.log(
      `Domain event: `,
      event["user"].name,
      event["user"].email,
      event["user"].status
    );
    console.log("TypeLog: ", this.typeLog);
  }

  printUpdate(event: any) {
    console.log(
      `Domain event update: `,
      event["user"].name,
      event["user"].email,
      event["user"].status
    );
    console.log("TypeLog: ", this.typeLog);
  }

  printDelete(event: any) {
    console.log(
      `Domain event delete: `,
      event["user"].name,
      event["user"].email,
      event["user"].status
    );
    console.log("TypeLog: ", this.typeLog);
  }
}
