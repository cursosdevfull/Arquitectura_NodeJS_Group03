import { DomainEvents } from "./DomainEvents";
import { UserCreated } from "./UserCreated";

export class Salesforce {
  typeLog: string = "Salesforce";

  constructor() {
    DomainEvents.register(this.printEvent.bind(this), UserCreated.name);
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
}
