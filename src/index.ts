import { DomainEvents } from "./events/DomainEvents";
import { Log } from "./events/Log";
import { Salesforce } from "./events/Salesforce";
import { User } from "./events/User";

const log = new Log();
const salesforce = new Salesforce();
const user = new User("John", "john@email.com");

//user.update("Karl");
//user.delete();

DomainEvents.dispatchEventForAggregate(user.id);
